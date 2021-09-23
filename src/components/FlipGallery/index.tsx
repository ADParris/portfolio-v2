import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Flex } from '@chakra-ui/react';
import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import SwiperCore, {
	EffectFlip,
	Pagination,
	Navigation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { IContentData } from '@data/models';

import { ImageDisplay, LinkDisplay } from '../displays';
import { InfoBox } from './InfoBox';
import { Title } from './Title';

SwiperCore.use([EffectFlip, Pagination, Navigation]);

interface IComponentProps {
	items: IContentData['entries']['data'];
}

export const FlipGallery: React.FC<IComponentProps> = ({ items }) => {
	const [currentSection, setCurrentSection] = React.useState('');

	const setSection = (tag: string) => {
		if (currentSection !== tag) {
			setCurrentSection(tag);
		}
	};

	const bgIsLight = currentSection === 'projects';

	return (
		<Flex
			alignItems="center"
			flex={1}
			flexDir="column"
			justifyContent="center"
		>
			<Flex flexDir="column" position="relative">
				<Swiper
					effect={'flip'}
					grabCursor={true}
					pagination={true}
					navigation={true}
					className={`mySwiper-${bgIsLight ? 'dark' : 'light'}`}
				>
					{items.map(item => {
						const hasLinks =
							!!item.frontmatter.link || !!item.frontmatter.repo;
						const additional = item.frontmatter?.additional?.info;
						setSection(item.frontmatter.tag);

						return (
							<SwiperSlide key={item.frontmatter.id}>
								<Flex flexDir="column" pb={2}>
									{/* title */}
									<Flex mb={4}>
										<Title title={item.frontmatter.title} />
									</Flex>
									{/* image */}
									<Flex overflow="hidden">
										<ImageDisplay
											alt={item.frontmatter.title}
											src={item.frontmatter.image}
										/>
									</Flex>
									{/* links */}
									{hasLinks && (
										<Flex flex={1} justifyContent="center" my={2}>
											<LinkDisplay
												bgIsLight={bgIsLight}
												link={item.frontmatter.repo}
											>
												<FiGithub />
											</LinkDisplay>
											<LinkDisplay
												bgIsLight={bgIsLight}
												link={item.frontmatter.link}
											>
												<FiExternalLink />
											</LinkDisplay>
										</Flex>
									)}
									<Flex mt={hasLinks ? 0 : 8}>
										<InfoBox
											additional={additional?.note ?? undefined}
											bgIsLight={bgIsLight}
											info={item.html}
										/>
									</Flex>
								</Flex>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Flex>
		</Flex>
	);
};
