import { defaultValueForDoc } from '../../static/src/generateConfig.mjs';

const formatProps = ({ key, propsName = key }) => {
	return `${propsName}="${defaultValueForDoc[propsName]}"`
}

export default ({ app : { name, args }}) => `
\`\`\`html
<${name}
	${args.map(formatProps).join('\n\t')}
/>
\`\`\`
`;
