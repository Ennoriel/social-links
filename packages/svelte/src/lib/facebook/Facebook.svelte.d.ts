import { SvelteComponentTyped } from "svelte";
import type { StylingProps } from "$lib/types.js";

declare const __propDef: {
    props: Partial<svelte.JSX.HTMLAttributes<HTMLElementTagNameMap['a']>> & StylingProps & {
        u: string;
        size: number;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type LinkedInProps = typeof __propDef.props;
export type LinkedInEvents = typeof __propDef.events;
export type LinkedInSlots = typeof __propDef.slots;
export default class LinkedIn extends SvelteComponentTyped<LinkedInProps, LinkedInEvents, LinkedInSlots> {
}
export {};
