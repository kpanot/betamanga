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
/**
 * 
 * @export
 * @interface ServerVariable
 */
export interface ServerVariable {
    /**
     * 
     * @type {Array<string>}
     * @memberof ServerVariable
     */
    _enum?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ServerVariable
     */
    _default: string;
    /**
     * 
     * @type {string}
     * @memberof ServerVariable
     */
    description?: string;
}

/**
 * Check if a given object implements the ServerVariable interface.
 */
export function instanceOfServerVariable(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "_default" in value;

    return isInstance;
}

export function ServerVariableFromJSON(json: any): ServerVariable {
    return ServerVariableFromJSONTyped(json, false);
}

export function ServerVariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServerVariable {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_enum': !exists(json, 'enum') ? undefined : json['enum'],
        '_default': json['default'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function ServerVariableToJSON(value?: ServerVariable | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enum': value._enum,
        'default': value._default,
        'description': value.description,
    };
}

