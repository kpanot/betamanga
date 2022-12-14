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
 * @interface JwtTokenResponse
 */
export interface JwtTokenResponse {
    /**
     * Json Web Token to use as bearer Token
     * @type {string}
     * @memberof JwtTokenResponse
     */
    accessToken: string;
}

/**
 * Check if a given object implements the JwtTokenResponse interface.
 */
export function instanceOfJwtTokenResponse(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "accessToken" in value;

    return isInstance;
}

export function JwtTokenResponseFromJSON(json: any): JwtTokenResponse {
    return JwtTokenResponseFromJSONTyped(json, false);
}

export function JwtTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): JwtTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessToken': json['access_token'],
    };
}

export function JwtTokenResponseToJSON(value?: JwtTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.accessToken,
    };
}

