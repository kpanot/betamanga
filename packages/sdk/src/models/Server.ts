/* tslint:disable */
/* eslint-disable */
/**
 * @betamanga/backend
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0-placeholder
 * Contact: kilian.panot@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ServerVariable } from './ServerVariable';
import {
    ServerVariableFromJSON,
    ServerVariableFromJSONTyped,
    ServerVariableToJSON,
} from './ServerVariable';

/**
 * 
 * @export
 * @interface Server
 */
export interface Server {
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    url: string;
    /**
     * 
     * @type {string}
     * @memberof Server
     */
    description?: string;
    /**
     * 
     * @type {{ [key: string]: ServerVariable; }}
     * @memberof Server
     */
    variables?: { [key: string]: ServerVariable; };
}

/**
 * Check if a given object implements the Server interface.
 */
export function instanceOfServer(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "url" in value;

    return isInstance;
}

export function ServerFromJSON(json: any): Server {
    return ServerFromJSONTyped(json, false);
}

export function ServerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Server {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'variables': !exists(json, 'variables') ? undefined : (mapValues(json['variables'], ServerVariableFromJSON)),
    };
}

export function ServerToJSON(value?: Server | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'description': value.description,
        'variables': value.variables === undefined ? undefined : (mapValues(value.variables, ServerVariableToJSON)),
    };
}
