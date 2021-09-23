import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { IContentData } from '@data/models';

import { SectionContainer } from './SectionContainer';
import { FlipGallery } from '../FlipGallery';
import { SectionIntroDisplay } from '../displays';

interface IComponentProps {}

export const WorkSection: React.FC<IComponentProps> = () => {
	const { section, entries } = useStaticQuery(query);

	const { frontmatter, html } = section
		.data[0] as IContentData['section']['data'][0];

	return (
		<SectionContainer minH="100vh" {...frontmatter}>
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
			filter: { frontmatter: { tag: { eq: "work" } } }
			sort: { fields: frontmatter___id, order: ASC }
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
			filter: { frontmatter: { tag: { eq: "projects" } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			data: nodes {
				frontmatter {
					additional {
						info: childMarkdownRemark {
							note: rawMarkdownBody
						}
					}
					id
					image {
						childImageSharp {
							gatsbyImageData(layout: CONSTRAINED)
						}
					}
					link
					repo
					tag
					title
				}
				html
			}
		}
	}
`;
