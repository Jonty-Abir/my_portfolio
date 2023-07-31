interface IOption {
    httpOnly?: boolean;
    path?: string;
    maxAge?: number;
    domain?: string;
    expires?: number;
    secure?: boolean;
};

export function serializeCookie(name: string, value: string, options: IOption) {
    let serializedCookie = `${name}=${value}`;

    if (options) {
        if (options.maxAge) {
            serializedCookie += `; Max-Age=${options.maxAge}`;
        }
        if (options.domain) {
            serializedCookie += `; Domain=${options.domain}`;
        }
        if (options.path) {
            serializedCookie += `; Path=${options.path}`;
        }
        if (options.expires) {
            serializedCookie += `; Expires=${options.expires}`;
        }
        if (options.httpOnly) {
            serializedCookie += '; HttpOnly';
        }
        if (options.secure) {
            serializedCookie += '; Secure';
        }
    }

    return serializedCookie;
}