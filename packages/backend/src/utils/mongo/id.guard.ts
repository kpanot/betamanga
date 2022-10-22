import {
  Injectable,
  CanActivate,
  ExecutionContext,
  NotFoundException,
} from '@nestjs/common';
import { isObjectIdOrHexString } from 'mongoose';
import { Observable } from 'rxjs';

@Injectable()
export class MongoIdParam implements CanActivate {
  public canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context
      .switchToHttp()
      .getRequest<{ params?: { id?: string } }>();
    const id = request.params?.id;
    if (id && isObjectIdOrHexString(id)) {
      return true;
    }

    throw new NotFoundException();
  }
}
