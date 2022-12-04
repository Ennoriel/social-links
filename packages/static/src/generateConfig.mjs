export default [
	{
		name: 'Facebook',
		args: [
			{
				key: 'u',
				type: 'string'
			},
			{
				key: 'hashtag',
				type: 'string',
				optional: true,
				prefix: '#'
			}
		]
	},
	{
		name: 'HackerNews',
		args: [
			{
				key: 'u',
				type: 'string'
			},
			{
				key: 't',
				type: 'string',
				optional: true
			}
		]
	},
	{
		name: 'LinkedIn',
		args: [
			{
				key: 'url',
				type: 'string'
			}
		]
	},
	{
		name: 'Reddit',
		args: [
			{
				key: 'url',
				type: 'string'
			},
			{
				key: 'title',
				type: 'string',
				optional: true
			}
		]
	},
	{
		name: 'Twitter',
		args: [
			{
				key: 'title',
				type: 'string'
			},
			{
				key: 'url',
				type: 'string',
				optional: true
			},
			{
				key: 'hashtags',
				type: 'Array<string>',
				optional: true
			},
			{
				key: 'via',
				type: 'string',
				optional: true
			},
			{
				key: 'related',
				type: 'string',
				optional: true
			},
			{
				key: 'in_reply_to',
				type: 'string',
				optional: true
			}
		]
	},
];
