import fetch from 'isomorphic-unfetch';

type Config = {
    apiKey?: string;
    baseUrl: string;
}

export abstract class Base {
    private apiKey: string
    private baseUrl: string

    constructor(config: Config) {
        this.apiKey = config.apiKey
        this.baseUrl = config.baseUrl || 'http://localhost:4567'
    }

    protected request<T>(endpoint: string, options?: RequestInit, contentType?: string): Promise<T> {
        const url = this.baseUrl + "/v1" + endpoint
        const headers = {
            'api-key': this.apiKey,
            'Content-type': 'application/json'
        }

        const config = {
            ...options,
            headers,
        }

        return fetch(url, config).then(r => {
            if (r.ok) {
                return r.json()
            }
            throw new Error(r.statusText)
        })
    }
}