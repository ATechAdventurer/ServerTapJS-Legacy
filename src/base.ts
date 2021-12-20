import fetch from 'isomorphic-unfetch';
import { Config } from './types';


export abstract class Base {
    private apiKey: string
    private baseUrl: string

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.baseUrl = config.baseUrl || 'https://dev.to/api/'
    }

    protected request<T>(endpoint: string, options?: RequestInit, contentType: string = 'application/json'): Promise<T> {
        const url = this.baseUrl + "/v1" + endpoint
        let headers = {
            'Content-type': contentType,
            'api-key': this.apiKey
        }

        const config = {
            ...options,
            headers,
        }

        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            switch (r.status) {
                case 404:
                    throw new Error("Not found");
                case 400:
                    throw new Error("Bad request");
            }
        })
    }
}
