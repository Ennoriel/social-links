import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = ({ params }) => {
	return {
        component: params.component
    }
};