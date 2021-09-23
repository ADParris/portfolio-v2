import { Flex } from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import { CustomButton } from '../common';
import { SectionIntroDisplay } from '../displays';
import { SectionContainer } from './SectionContainer';

export const ContactSection: React.FC = () => {
	const {
		allMarkdownRemark: { nodes },
	} = useStaticQuery(query);

	const { frontmatter, html } = nodes[0];

	return (
		<SectionContainer minH="calc(100vh - 9vw)" {...frontmatter}>
			<Flex alignItems="center" flex={1} flexDir="column" py={8}>
				<SectionIntroDisplay intro={html} />
				<Flex mt={16}>
					<CustomButton
						href="mailto:code.adparris@gmail.com"
						rel="nofollow noopener noreferrer"
						target="_blank"
					>
						Say Hello
					</CustomButton>
				</Flex>
			</Flex>
		</SectionContainer>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { tag: { eq: "contact" } } }
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
