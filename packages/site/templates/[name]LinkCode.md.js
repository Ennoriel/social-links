import { formatProps } from './[name]LinkPreview.md.js';

export default ({ app: { name, args } }) => `
\`\`\`jsx
<${name}Link
	${args.map(formatProps).join('\n\t')}
/>
\`\`\`
`;
