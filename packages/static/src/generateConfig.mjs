export default [
	{
		name: 'Facebook',
		args: [
			{
				description: 'url of the page you are sharing. Facebook will crawl the url to retrieve open graph attributes',
				key: 'u',
				propsName: 'url',
				type: 'string'
			},
			{
				description: 'unique hashtag that will be added at the end of the Facebook post. It should be provided without the "#" character',
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
				description: 'url of the page you are sharing. Leave url blank to submit a question for discussion. If there is no url, text will appear at the top of the thread. If there is a url, text is optional.',
				key: 'u',
				propsName: 'url',
				type: 'string',
				optional: true
			},
			{
				description: 'title of the page you are sharing',
				key: 't',
				propsName: 'title',
				type: 'string',
				optional: true
			}
		]
	},
	{
		name: 'LinkedIn',
		args: [
			{
				description: 'url of the page you are sharing',
				key: 'url',
				type: 'string'
			}
		]
	},
	{
		name: 'Reddit',
		args: [
			{
				description: 'url of the page you are sharing',
				key: 'url',
				type: 'string'
			},
			{
				description: 'title of the page you are sharing',
				key: 'title',
				type: 'string',
				optional: true
			}
		]
	},
	{
		name: 'Twitter',
		api: 'https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent',
		args: [
			{
				description: 'title of the page you are sharing. <!-- fgujnbnj #lul http://localhost:5173/ #lol #lil via @via -->',
				key: 'title',
				type: 'string'
			},
			{
				description: 'url of the page you are sharing',
				key: 'url',
				type: 'string',
				optional: true
			},
			{
				description: 'hashtags related to the page you are sharing',
				key: 'hashtags',
				type: 'Array<string>',
				optional: true
			},
			{
				description: 'twitter account id (without the "@" character)',
				key: 'via',
				type: 'string',
				optional: true
			},
			{
				description: 'suggest additional Twitter usernames related to the Tweet as comma-separated values. Twitter may suggest these accounts to follow after the user posts their Tweet. Read more on the <a href="https://developer.twitter.com/en/docs/twitter-for-websites/tweet-button/guides/web-intent" target="_blank" rel="noreferrer noopener">official documentation</a>.',
				key: 'related',
				type: 'string',
				optional: true
			},
			{
				description: 'the Tweet ID of a parent Tweet in a conversation, such as the initial Tweet from your site or author account.',
				key: 'in_reply_to',
				propsName: 'inReplyTo',
				type: 'string',
				optional: true
			}
		]
	},
];

export const defaultValueForDoc = {
	url: 'https://svelte-awesome-color-picker.vercel.app/',
	title: 'Maxime Dupont personal blog',
	hashtag: 'shareLink',
	hashtags: ['shareLink', 'documentation', 'javascript', 'svelte', 'react'],
	via: 'Rich_Harris',
	related: 'Rich_Harris:creator of Svelte, sveltejs:cybernetically enhanced web framework',
	inReplyTo: undefined,
}