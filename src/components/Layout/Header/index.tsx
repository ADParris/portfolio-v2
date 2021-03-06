import {
	Flex,
	Link,
	usePrefersReducedMotion,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

import { SiteLogo } from '@components/common';
import { Menu } from './Menu';

export const Header: React.FC = () => {
	const animationController = useAnimation();
	const prefersReducedMotion = usePrefersReducedMotion();
	const prevScrollYPos = React.useRef(0);
	const [scrollYPos, setScrollYPos] = React.useState(0);

	const handleScroll = () => setScrollYPos(window.pageYOffset);

	React.useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	React.useEffect(() => {
		if (scrollYPos < 50 || scrollYPos < prevScrollYPos.current) {
			animationController.start({
				height: 'var(--header-height)',
				opacity: 1,
				overflow: `visible`,
				transition: { delay: 0, duration: 0.05 },
			});
		} else {
			animationController.start({
				height: prefersReducedMotion ? 'var(--header-height)' : 0,
				opacity: 0,
				overflow: `hidden`,
				transition: { delay: 0, duration: 0.05 },
			});
		}
		prevScrollYPos.current = scrollYPos;
	}, [prevScrollYPos, scrollYPos]);

	return (
		<Flex
			alignItems="center"
			animate={animationController}
			as={motion.header}
			backdropFilter="saturate(120%) blur(10px)"
			bgColor="whiteAlpha.400"
			boxShadow="0px 10px 10px -7px rgba(45, 55, 72,0.7)"
			flex={1}
			initial={{ top: 0 }}
			justifyContent="center"
			left={0}
			position="fixed"
			top={0}
			w="full"
			zIndex={5}
		>
			<Flex
				alignItems="center"
				as="nav"
				flex={1}
				justifyContent="space-between"
				px={4}
			>
				<Flex
					_hover={{ color: 'var(--colors-highlight-200)' }}
					aria-label="home"
					as={Link}
					href="/#top"
					p={2}
				>
					<SiteLogo h="2rem" w="2rem" />
				</Flex>
				<Menu />
			</Flex>
		</Flex>
	);
};
