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
import type { Components } from './Components';
import {
    ComponentsFromJSON,
    ComponentsFromJSONTyped,
    ComponentsToJSON,
} from './Components';
import type { ExternalDocumentation } from './ExternalDocumentation';
import {
    ExternalDocumentationFromJSON,
    ExternalDocumentationFromJSONTyped,
    ExternalDocumentationToJSON,
} from './ExternalDocumentation';
import type { Info } from './Info';
import {
    InfoFromJSON,
    InfoFromJSONTyped,
    InfoToJSON,
} from './Info';
import type { Server } from './Server';
import {
    ServerFromJSON,
    ServerFromJSONTyped,
    ServerToJSON,
} from './Server';
import type { Tag } from './Tag';
import {
    TagFromJSON,
    TagFromJSONTyped,
    TagToJSON,
} from './Tag';

/**
 * The description of OpenAPI v3.0.x documents, as defined by https://spec.openapis.org/oas/v3.0.3
 * @export
 * @interface Schema
 */
export interface Schema {
    /**
     * 
     * @type {string}
     * @memberof Schema
     */
    openapi: string;
    /**
     * 
     * @type {Info}
     * @memberof Schema
     */
    info: Info;
    /**
     * 
     * @type {ExternalDocumentation}
     * @memberof Schema
     */
    externalDocs?: ExternalDocumentation;
    /**
     * 
     * @type {Array<Server>}
     * @memberof Schema
     */
    servers?: Array<Server>;
    /**
     * 
     * @type {Array<{ [key: string]: Array<string>; }>}
     * @memberof Schema
     */
    security?: Array<{ [key: string]: Array<string>; }>;
    /**
     * 
     * @type {Set<Tag>}
     * @memberof Schema
     */
    tags?: Set<Tag>;
    /**
     * 
     * @type {object}
     * @memberof Schema
     */
    paths: object;
    /**
     * 
     * @type {Components}
     * @memberof Schema
     */
    components?: Components;
}

/**
 * Check if a given object implements the Schema interface.
 */
export function instanceOfSchema(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "openapi" in value;
    isInstance = isInstance && "info" in value;
    isInstance = isInstance && "paths" in value;

    return isInstance;
}

export function SchemaFromJSON(json: any): Schema {
    return SchemaFromJSONTyped(json, false);
}

export function SchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'openapi': json['openapi'],
        'info': InfoFromJSON(json['info']),
        'externalDocs': !exists(json, 'externalDocs') ? undefined : ExternalDocumentationFromJSON(json['externalDocs']),
        'servers': !exists(json, 'servers') ? undefined : ((json['servers'] as Array<any>).map(ServerFromJSON)),
        'security': !exists(json, 'security') ? undefined : json['security'],
        'tags': !exists(json, 'tags') ? undefined : (new Set((json['tags'] as Array<any>).map(TagFromJSON))),
        'paths': json['paths'],
        'components': !exists(json, 'components') ? undefined : ComponentsFromJSON(json['components']),
    };
}

export function SchemaToJSON(value?: Schema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'openapi': value.openapi,
        'info': InfoToJSON(value.info),
        'externalDocs': ExternalDocumentationToJSON(value.externalDocs),
        'servers': value.servers === undefined ? undefined : ((value.servers as Array<any>).map(ServerToJSON)),
        'security': value.security,
        'tags': value.tags === undefined ? undefined : (Array.from(value.tags as Set<any>).map(TagToJSON)),
        'paths': value.paths,
        'components': ComponentsToJSON(value.components),
    };
}

