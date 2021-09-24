import {
	Divider,
	Drawer,
	DrawerCloseButton,
	DrawerContent,
	DrawerOverlay,
	Flex,
	Icon,
	IconButton,
	Link,
	useDisclosure,
} from '@chakra-ui/react';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FiMenu } from 'react-icons/fi';

import { INavLink } from '@data/models';

import { SiteLogo } from '@components/common';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { NavLink } from './NavLink';

export const Menu: React.FC = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const {
		allMarkdownRemark: { links },
	} = useStaticQuery(query);

	const navLinks = links as INavLink[];
	const btnRef = React.useRef<HTMLButtonElement>(null);

	const _buildNavLinks = (drawer?: boolean) =>
		navLinks.map(link => (
			<NavLink
				count={link.frontmatter.id}
				handleClose={drawer ? onClose : undefined}
				key={`${link.frontmatter.tag}-link`}
				link={link.frontmatter.tag}
			/>
		));

	return (
		<>
			<Flex display="var(--header-menu-full)" alignItems="center">
				{_buildNavLinks()}
				<ColorModeSwitcher />
			</Flex>
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
						<DrawerCloseButton color="gray.100" size="sm" />
						<Flex
							alignItems="center"
							as="header"
							bgColor="var(--colors-highlight-700)"
							display="flex"
							h="6rem"
							justifyContent="center"
						>
							<Flex
								_hover={{ color: 'var(--colors-highlight-200)' }}
								aria-label="home"
								as={Link}
								href="/#top"
								p={2}
							>
								<SiteLogo h="3rem" w="3rem" />
							</Flex>
						</Flex>

						<Flex
							alignItems="flex-start"
							as="main"
							flexDir="column"
							px="1rem"
						>
							<Flex
								alignItems="flex-start"
								flex={1}
								flexDir="column"
								my="0.5rem"
							>
								{_buildNavLinks(true)}
							</Flex>
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
