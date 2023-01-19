import React from 'react';
import { Icon } from './Icon';
import { getUrl, type Config, type StylingProps } from 'static-social-links';

export type LinkProps = React.DetailedHTMLProps<
	React.AnchorHTMLAttributes<HTMLAnchorElement>,
	HTMLAnchorElement
> &
	StylingProps & {
		config: Config;
		params: Record<string, string | undefined>;
		rel?: string;
		target?: string;
	};

export function Link({
	config,
	params,
	color,
	iconColor = 'white',
	size = 32,
	borderRadius = size * (6 / 32),
	round,
	rel = 'noreferrer noopener',
	target = '_blank',
	...props
}: LinkProps) {
	return (
		<a
			{...props}
			href={getUrl(config.url, params)}
			style={{
				display: 'inline-block',
				height: `${size}px`,
				borderRadius: round ? size / 2 : `${borderRadius}px`
			}}
			rel={rel}
			target={target}
			aria-label={`Share to ${config.name}`}
		>
			<Icon
				{...config}
				size={size}
				color={color || config.color}
				iconColor={iconColor === 'brand' ? config.color : iconColor}
				borderRadius={borderRadius}
				round={round}
			/>
		</a>
	);
}
