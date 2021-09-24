/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
	plugins: [
		{
			resolve: '@chakra-ui/gatsby-plugin',
			options: {
				isUsingColorMode: true,
				resetCSS: true,
			},
		},
		'gatsby-plugin-image',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				background_color: '#1D4044',
				display: 'minimal-ui',
				icon: 'src/assets/images/icon.png',
				name: 'Andrew Parris',
				short_name: 'AP',
				start_url: '/',
				theme_color: '#EDF2F7',
			},
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'assets',
				path: `${__dirname}/src/assets/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'data',
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-external-links`,
						options: {
							rel: `nofollow noopener noreferrer`,
							target: `_blank`,
						},
					},
					{
						resolve: `gatsby-remark-images`,
						options: {
							linkImagesToOriginal: true,
							maxWidth: 700,
							quality: 90,
						},
					},
				],
			},
		},
		'gatsby-transformer-sharp',
	],
	siteMetadata: {
		author: {
			email: 'contact@andrewparris.dev',
			image: 'assets/images/me.jpg',
			name: 'Andrew Parris',
		},
		description: 'Portfolio site for Andrew Parris, web developer.',
		image: '/og.png',
		title: 'Andrew Parris',
		url: 'https://andrewparris.dev',
	},
};
