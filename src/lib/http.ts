import { LoginResType } from "@/schemaValidations/auth.schema"
import envConfig from "../../config"

type CustomOption = RequestInit & {
    baseUrl?: string | undefined
}

class HttpError extends Error {
    status: number
    payload: any
    constructor({status, payload} : {status:number, payload: any}) {
        super("Http Error")
        this.status = status
        this.payload = payload
    }
}

class SessionToken {
    private token = ''

    get value() {
        return this.token
    }

    set value(token:string) {
        if (typeof window === 'undefined') {
            throw new Error("Cannot set token in server side")
        }
        this.token = token
    }
}

export const clientSessionToken  = new SessionToken()

const request = async <Response>(method: 'get' | 'post' | 'put' | 'delete', url:string, options?: CustomOption | undefined) => {
    const body = options?.body ? JSON.stringify(options.body) : undefined
    const baseHeaders = {
        'Content-type': 'application/json',
        'Authorization': clientSessionToken.value ? `Bearer ${clientSessionToken.value}` : ''
    }
    const baseUrl = options?.baseUrl === undefined ? envConfig.NEXT_PUBLIC_API_ENDPOINT : options.baseUrl

    const fullUrl = url.startsWith('/') ? `${baseUrl}${url}` : `${baseUrl}/${url}`

    const res = await fetch(`${fullUrl}`, {
        ...options,
        headers: {
            ...baseHeaders,
            ...options?.headers
        },
        body,
        method
    })

    const payload: Response = await res.json()
    const data = {
        status: res.status,
        payload
    }
    if(!res.ok) {
        throw new HttpError(data)
    }
    if(['/auth/login', '/auth/register'].includes(url)) {
        clientSessionToken.value= (payload as LoginResType).data.token
    } else if('/auth/logout'.includes(url)) {
        clientSessionToken.value = ''
    }

    return data
}

const http = {
    get<Response>(url: string, options?: Omit<CustomOption, 'body'> | undefined) {
        return request<Response>('get', url, options)
    },
    post<Response>(url: string, body: any, options?: Omit<CustomOption, 'body'> | undefined) {
        return request<Response>('post', url, {...options, body})
    },
    put<Response>(url: string, body: any, options?: Omit<CustomOption, 'body'> | undefined) {
        return request<Response>('put', url, {...options, body})
    },
    delete<Response>(url: string, body: any, options?: Omit<CustomOption, 'body'> | undefined) {
        return request<Response>('delete', url, {...options, body})
    },
}

export default http