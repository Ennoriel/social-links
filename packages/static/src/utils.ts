export function getUrl(url: string, params?: Record<string, string | undefined>) {
	let _url = url;
	if (params) {
		_url +=
			'?' +
			Object.entries(params)
				.filter((param): param is [string, string] => !!param[1])
				// converting with encodeURIComponent (space will be transformed as %20 instead of + with searchParams)
				.map(([k, v]) => [k, encodeURIComponent(v)] as [string, string])
				.map(([k, v]) => `${k}=${v}`)
				.join('&');
	}
	return _url;
}
