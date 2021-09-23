import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { SectionContainer } from './SectionContainer';

interface IComponentProps {}

export const AboutSection: React.FC<IComponentProps> = () => {
	const {
		allMarkdownRemark: { nodes },
	} = useStaticQuery(query);

	const { frontmatter, html } = nodes[0];

	return (
		<SectionContainer minH="100vh" {...frontmatter}>
			<Flex
				__css={{ p: { mb: 4 } }}
				flex={1}
				flexDir="column"
				dangerouslySetInnerHTML={{ __html: html }}
				mb="6vw"
				mt="3vw"
				mx="3vw"
			/>
		</SectionContainer>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "about" } } }
		) {
			nodes {
				frontmatter {
					id
					tag
					title
				}
				html
			}
		}
	}
`;
