import React from 'react';
import { type StylingProps } from 'static-social-links';

export type IconProps = StylingProps & {
	path: string;
};

export function Icon({
	color,
	path,
	iconColor = 'white',
	size = 32,
	borderRadius = size * (6 / 32),
	round
}: IconProps) {
	return (
		<svg
			viewBox="0 0 64 64"
			width={size}
			height={size}
			style={{ borderRadius: `${borderRadius}px` }}
			role="img"
			aria-label=""
		>
			{round && <circle cx="32" cy="32" r="32" fill={color} />}
			{!round && <rect width="64" height="64" fill={color} />}
			<path d={path} fill={iconColor} />
		</svg>
	);
}
