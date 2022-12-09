const formatType = ({ key, propsName, type, optional }) => {
	return `${propsName ?? key}${optional ? "?" : ""}: ${type}${optional ? " | undefined" : ""};`
}

export default ({app: { args }}) => `
import { SvelteComponentTyped } from 'svelte';
import type { StylingProps } from '$lib/types.js';

declare const __propDef: {
	props: Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']>> &
		StylingProps & {
			${args.map(formatType).join('\n\t\t\t')}
		};
	events: void;
	slots: void;
};
export type LinkedInProps = typeof __propDef.props;
export type LinkedInEvents = typeof __propDef.events;
export type LinkedInSlots = typeof __propDef.slots;
export default class LinkedIn extends SvelteComponentTyped<
	LinkedInProps,
	LinkedInEvents,
	LinkedInSlots
> {}
export {};
`;
