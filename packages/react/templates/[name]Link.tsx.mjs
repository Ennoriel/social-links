const formatExport = ({ key, propsName = key, type, optional }) => {
	return `${propsName}${optional ? '?' : ''}: ${type}${optional ? ' | undefined' : ''};`;
};

const formatValue = ({ key, propsName = key, type, prefix = '' }) => {
	return `const _${key} = ${
		type.startsWith('Array')
			? `${propsName}?.filter(Boolean)?.map?.(k => \`${prefix}\${k}\`)?.join(',')`
			: `${propsName} ? \`${prefix}$\{${propsName}}\` : undefined`
	};`;
};

const shouldFormat = ({ type, prefix }) => type.startsWith('Array') || prefix;
const shouldNotFormat = (arg) => !shouldFormat(arg);

export default ({ app: { name, args } }) =>
	`import React from "react";
import { Link } from "../../Link";
import { ${name.toLocaleLowerCase()} as config, type StylingProps } from 'static-social-links';

export type ${name}Props = StylingProps & {
	${args.map(formatExport).join('\n\t')}
}

export function ${name}Link({
	${args.map(({ key, propsName = key }) => propsName).join(',\n\t')},
	iconColor = 'white',
	...props
}: ${name}Props) {

	${args.filter(shouldFormat).map(formatValue).join('\n\t')}

	return (
		<Link
			params={{
				${[
					...args.filter(shouldFormat).map(({ key }) => `${key}: _${key}`),
					...args
						.filter(shouldNotFormat)
						.map(({ key, propsName }) => (propsName ? `${key}: ${propsName}` : key))
				].join(',\n\t\t\t\t')}
			}}
			config={config}
			{...props}
		/>
	)
}
`;
