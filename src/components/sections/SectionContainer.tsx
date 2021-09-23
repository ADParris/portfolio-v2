import {
	Flex,
	Text,
	useColorMode,
	usePrefersReducedMotion,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';

interface IComponentProps {
	id: number;
	minH: string;
	tag: string;
	title?: string;
}

export const SectionContainer: React.FC<IComponentProps> = ({
	children,
	id,
	minH,
	tag,
	title,
}) => {
	const { colorMode } = useColorMode();
	const isOdd = id % 2 !== 0;
	const isDarkMode = colorMode === 'dark';
	const currentBgColor = isOdd
		? isDarkMode
			? 'gray.800'
			: 'gray.100'
		: 'transparent';
	const currentColor = isOdd && !isDarkMode ? 'gray.800' : 'gray.100';

	const beforeItemsColor =
		isDarkMode || !isOdd
			? 'var(--colors-highlight-300)'
			: 'var(--colors-highlight-500)';

	const beforeLine = {
		bgColor: beforeItemsColor,
		content: `''`,
		display: `block`,
		h: '1px',
		mr: '1rem',
		position: `relative`,
		w: `full`,
	};

	const beforeNumber = {
		color: beforeItemsColor,
		content: `'0${id}.'`,
		display: `block`,
		fontFamily: `Gruppo`,
		fontSize: `0.85em`,
		mb: '1.5px',
		mr: '0.25rem',
		position: `relative`,
	};

	const animationController = useAnimation();
	const { inView, ref: inViewRef } = useInView();
	const prefersReducedMotion = usePrefersReducedMotion();

	React.useEffect(() => {
		if (inView) {
			animationController.start({
				opacity: 1,
				transition: {
					delay: 0.5,
					duration: 1.5,
				},
				y: 0,
			});
		}
	}, [inView, animationController]);

	return (
		<Flex
			as="section"
			bgColor={currentBgColor}
			color={currentColor}
			clipPath={
				isOdd
					? 'polygon(0 3vw, 100% 0, 100% calc(100% - 3vw), 0% 100%)'
					: undefined
			}
			flex={1}
			flexDir="column"
			h="full"
			id={tag}
			minH={minH}
			px="1rem"
			position="relative"
		>
			{title && (
				<Flex
					_before={beforeLine}
					alignItems="center"
					mt={isOdd ? '3vw' : 0}
				>
					<Text
						_before={beforeNumber}
						alignItems="flex-end"
						as="h3"
						display="inline-flex"
						fontFamily="Gruppo"
						whiteSpace="nowrap"
					>
						{title}
					</Text>
				</Flex>
			)}
			<Flex
				animate={animationController}
				as={motion.div}
				alignItems="center"
				exit={{ opacity: 0 }}
				flex={1}
				initial={{
					opacity: 0,
					y: prefersReducedMotion ? 0 : '1rem',
				}}
				justifyContent="center"
				ref={inViewRef}
			>
				{children}
			</Flex>
		</Flex>
	);
};
