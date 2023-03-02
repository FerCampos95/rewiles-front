import { FC } from 'react';

type Props = {
	width?: string;
}

const LogoSVG: FC<Props> = ({ width = '512' }) => {
	return (
		<svg width={width} height={width} viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M256 256C256 289.137 222.421 316 181 316C139.579 316 106 289.137 106 256C106 222.863 139.579 196 181 196C222.421 196 256 222.863 256 256ZM256 256C256 305.706 202.274 346 136 346C69.7258 346 16 305.706 16 256M256 256C256 206.294 202.274 166 136 166C69.7258 166 16 206.294 16 256M16 256C16 355.411 96.5887 436 196 436C295.411 436 376 355.411 376 256C376 156.589 295.411 76 196 76C96.5887 76 16 156.589 16 256ZM16 256C16 388.548 123.452 496 256 496C388.548 496 496 388.548 496 256C496 123.452 388.548 16 256 16C123.452 16 16 123.452 16 256Z" stroke="url(#paint0_linear_937_30927)" strokeWidth="32"/>
			<defs>
				<linearGradient id="paint0_linear_937_30927" x1="16" y1="256" x2="496" y2="256" gradientUnits="userSpaceOnUse">
					<stop stopColor="#6A19A4"/>
					<stop offset="1" stopColor="#A46A19"/>
				</linearGradient>
			</defs>
		</svg>
	);
};

export default LogoSVG;