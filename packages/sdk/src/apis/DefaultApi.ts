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


import * as runtime from '../runtime';
import type {
  Schema,
} from '../models';
import {
    SchemaFromJSON,
    SchemaToJSON,
} from '../models';

export interface AuthorsGetAuthorRequest {
    id: string;
}

export interface AuthorsSearchAuthorRequest {
    name: string;
}

export interface ChaptersGetChapterRequest {
    id: string;
}

export interface MangaGetChaptersRequest {
    id: string;
}

export interface MangaGetFutureChaptersRequest {
    id: string;
}

export interface MangaGetMangaRequest {
    id: string;
}

export interface MangaGetRemainingChaptersRequest {
    id: string;
}

export interface MangaGetVolumesRequest {
    id: string;
}

export interface MangaSearchAuthorRequest {
    name: string;
}

export interface ProfilesGetProfileRequest {
    name: string;
}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI {

    /**
     * Retrieve the OpenApi 3.0 Specification
     * 
     */
    async appGetApiSpecificationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Schema>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SchemaFromJSON(jsonValue));
    }

    /**
     * Retrieve the OpenApi 3.0 Specification
     * 
     */
    async appGetApiSpecification(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Schema> {
        const response = await this.appGetApiSpecificationRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async authorsGetAuthorRaw(requestParameters: AuthorsGetAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling authorsGetAuthor.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/authors/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async authorsGetAuthor(requestParameters: AuthorsGetAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authorsGetAuthorRaw(requestParameters, initOverrides);
    }

    /**
     */
    async authorsGetAuthorsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/authors`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async authorsGetAuthors(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authorsGetAuthorsRaw(initOverrides);
    }

    /**
     */
    async authorsSearchAuthorRaw(requestParameters: AuthorsSearchAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling authorsSearchAuthor.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/authors/search`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async authorsSearchAuthor(requestParameters: AuthorsSearchAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.authorsSearchAuthorRaw(requestParameters, initOverrides);
    }

    /**
     */
    async chaptersGetChapterRaw(requestParameters: ChaptersGetChapterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling chaptersGetChapter.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/chapters/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async chaptersGetChapter(requestParameters: ChaptersGetChapterRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.chaptersGetChapterRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaGetChaptersRaw(requestParameters: MangaGetChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling mangaGetChapters.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga/{id}/chapters`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaGetChapters(requestParameters: MangaGetChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaGetChaptersRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaGetFutureChaptersRaw(requestParameters: MangaGetFutureChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling mangaGetFutureChapters.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga/{id}/chapters/future`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaGetFutureChapters(requestParameters: MangaGetFutureChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaGetFutureChaptersRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaGetMangaRaw(requestParameters: MangaGetMangaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling mangaGetManga.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaGetManga(requestParameters: MangaGetMangaRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaGetMangaRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaGetRemainingChaptersRaw(requestParameters: MangaGetRemainingChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling mangaGetRemainingChapters.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga/{id}/chapters/not-read`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaGetRemainingChapters(requestParameters: MangaGetRemainingChaptersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaGetRemainingChaptersRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaGetVolumesRaw(requestParameters: MangaGetVolumesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling mangaGetVolumes.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga/{id}/volumes`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaGetVolumes(requestParameters: MangaGetVolumesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaGetVolumesRaw(requestParameters, initOverrides);
    }

    /**
     */
    async mangaSearchAuthorRaw(requestParameters: MangaSearchAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling mangaSearchAuthor.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/manga`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async mangaSearchAuthor(requestParameters: MangaSearchAuthorRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.mangaSearchAuthorRaw(requestParameters, initOverrides);
    }

    /**
     */
    async profilesGetMeRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/profiles/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async profilesGetMe(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.profilesGetMeRaw(initOverrides);
    }

    /**
     */
    async profilesGetProfileRaw(requestParameters: ProfilesGetProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling profilesGetProfile.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearer", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/profiles/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async profilesGetProfile(requestParameters: ProfilesGetProfileRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.profilesGetProfileRaw(requestParameters, initOverrides);
    }

}
