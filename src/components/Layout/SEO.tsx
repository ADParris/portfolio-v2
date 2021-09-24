import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

export const SEO: React.FC = () => {
	const {
		site: {
			meta: { description, image, title, url },
		},
	} = useStaticQuery(query);

	return (
		<Helmet>
			<html lang="en" />

			{/* General tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="image" content={image} />
			<link rel="canonical" href={url} />

			{/* OpenGraph tags */}
			<meta property="og:url" content={url} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />
		</Helmet>
	);
};

const query = graphql`
	{
		site {
			meta: siteMetadata {
				description
				image
				title
				url
			}
		}
	}
`;
