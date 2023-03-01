import { IParallax, ParallaxLayer } from '@react-spring/parallax';
import React, { CSSProperties, FC, MutableRefObject, ReactNode } from 'react';

type Props = {
  pageNumber: number;
  children: ReactNode;
  parallaxRef: MutableRefObject<IParallax>;
	style?: CSSProperties;
};

const ParalaxSection: FC<Props> = ({ children, parallaxRef, pageNumber, style }) => {
	return (
		<ParallaxLayer
			offset={pageNumber}
			speed={0.1}
			onClick={() => parallaxRef.current.scrollTo(pageNumber + 1)}
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				...style
			}}>
			{children}
		</ParallaxLayer>
	);
};

export default ParalaxSection;