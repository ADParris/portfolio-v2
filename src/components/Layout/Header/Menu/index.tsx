import React from 'react';

import {
	Divider,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Text,
	useDisclosure,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import { FiMenu } from 'react-icons/fi';

import { INavLink } from '@data/models';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavLink } from './NavLink';

export const Menu: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		allMarkdownRemark: { links },
	} = useStaticQuery(query);

	const navLinks = links as INavLink[];
	const btnRef = React.useRef<HTMLButtonElement>(null);

	const _buildNavLinks = () =>
		navLinks.map(link => (
			<NavLink
				count={link.frontmatter.id}
				handleClose={onClose}
				key={`${link.frontmatter.tag}-link`}
				link={link.frontmatter.tag}
			/>
		));

	return (
		<>
			{/* Full Menu */}
			<Flex display="var(--header-menu-full)" alignItems="center">
				{_buildNavLinks()}
				<ColorModeSwitcher />
			</Flex>

			{/* Hamburger w/ Drawer */}
			<Flex display="var(--header-menu-icon)">
				<IconButton
					_hover={{ background: 'whiteAlpha.200' }}
					aria-label="site menu"
					bgColor="transparent"
					h="2rem"
					icon={<Icon as={FiMenu} />}
					minW="auto"
					onClick={onOpen}
					ref={btnRef}
					w="2rem"
				/>
				<Drawer
					isOpen={isOpen}
					placement="right"
					onClose={onClose}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton size="sm" />
						<Flex
							alignItems="center"
							as="header"
							display="flex"
							h="6rem"
							justifyContent="center"
						>
							<Text as="h1" fontFamily="Gruppo">
								AP
							</Text>
						</Flex>

						<Flex
							alignItems="flex-start"
							as="main"
							flex={1}
							flexDir="column"
							px="1rem"
						>
							{_buildNavLinks()}
							<Divider my="0.5rem" />
							<ColorModeSwitcher handleClose={onClose} />
						</Flex>
					</DrawerContent>
				</Drawer>
			</Flex>
		</>
	);
};

const query = graphql`
	{
		allMarkdownRemark(
			filter: { frontmatter: { nav: { eq: true } } }
			sort: { fields: frontmatter___id, order: ASC }
		) {
			links: nodes {
				frontmatter {
					id
					tag
				}
			}
		}
	}
`;
