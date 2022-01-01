module.exports = {
	images: {
		domains: ['courses-top.ru'],
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			// use: ['@svgr/webpack'],
			issuer: /\.[jt]sx?$/,

			options: {
				svgo: true,

				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},

				titleProp: true,
			},

			// oneOf: [
			// 	{
			// 		use: [{}],

			// 		// issuer: {
			// 		// 	and: [/\.(ts|tsx|js|jsx|md|mdx)$/],
			// 		// },
			// 	},
			// ],
			test: /\.svg?$/,
		});

		return config;
	},
};
