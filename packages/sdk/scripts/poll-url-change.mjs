import minimist from 'minimist';
import fetch from 'node-fetch';
import { interval, BehaviorSubject, from, of } from 'rxjs';
import {
  withLatestFrom,
  filter,
  switchMap,
  catchError,
  pairwise,
  startWith,
  tap,
} from 'rxjs/operators';
import { exec } from 'child_process';

const arg = minimist(process.argv.slice(2));

const host = arg.host || 'localhost';
const delay = arg.delay || 200;
const url = arg.url || `http://${host}:${process.env.PORT || 3000}/api`;
const init = !arg.skipInit;
const command = arg._.join(' ');

const runningCommand$ = new BehaviorSubject(false).pipe(
  tap((value) => {
    if (!value) {
      console.log(`Listening for change on ${url}`);
    } else {
      console.log('Launching command ...');
    }
  }),
);
interval(delay)
  .pipe(
    withLatestFrom(runningCommand$),
    filter(([, running]) => !running),
    switchMap(() => from(fetch(url)).pipe(catchError(() => of(null)))),
    filter((req) => !!req && req.ok),
    switchMap((req) => req.text()),
    startWith(undefined),
    pairwise(),
    filter(([prev, current]) => (init && !prev) || prev !== current),
  )
  .subscribe(() => {
    runningCommand$.next(true);
    const run = exec(command);
    run.stdout.pipe(process.stdout);
    run.stderr.pipe(process.stderr);
    run.on('close', () => {
      runningCommand$.next(false);
    });
  });
