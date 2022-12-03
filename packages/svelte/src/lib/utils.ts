export function getUrl(url: string, params?: Record<string, string | undefined>) {
    const u = new URL(url);
    if (params) {
        Object.entries(params)
            .filter((param): param is [string, string] => !!param[1])
            .forEach(param => u.searchParams.append(...param))
    }
    return u.toString();
}