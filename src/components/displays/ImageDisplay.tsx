import {
	GatsbyImage,
	getImage,
	IGatsbyImageData,
} from 'gatsby-plugin-image';
import React from 'react';

interface IComponentProps {
	alt: string;
	border?: boolean;
	round?: boolean;
	src: IGatsbyImageData;
}

export const ImageDisplay: React.FC<IComponentProps> = ({
	alt,
	border,
	round,
	src,
}) => {
	const image = getImage(src);

	const imgStyle = {
		...(border && { border: '3px solid' }),
		...(round && { borderRadius: '50%' }),
		height: '100%',
		...(round && { width: '100%' }),
	};
	return (
		<>
			{image && (
				<GatsbyImage
					alt={`Photo of ${alt}.`}
					image={image}
					imgStyle={imgStyle}
				/>
			)}
		</>
	);
};
