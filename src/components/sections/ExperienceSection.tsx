import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { IContentData } from '@data/models';

import { FlipGallery, SectionIntroDisplay } from '@components/common';
import { SectionContainer } from './SectionContainer';

export const ExperienceSection: React.FC = () => {
	const { section, entries } = useStaticQuery(query);

	const { frontmatter, html } = section
		.data[0] as IContentData['section']['data'][0];

	return (
		<SectionContainer minH="120vh" {...frontmatter}>
			<Flex alignItems="center" flex={1} flexDir="column">
				<SectionIntroDisplay intro={html} />
				<FlipGallery items={entries.data} />
			</Flex>
		</SectionContainer>
	);
};

const query = graphql`
	{
		section: allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "experience" } } }
		) {
			data: nodes {
				frontmatter {
					id
					tag
					title
				}
				html
			}
		}
		entries: allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "certifications" } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			data: nodes {
				frontmatter {
					id
					tag
					title
					image {
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED)
						}
					}
				}
				html
			}
		}
	}
`;
