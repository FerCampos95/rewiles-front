import { Grid } from '@mui/material';
import { FC } from 'react';

type Props = {
	right?: string;
	bottom?: string;
	left?: string;
	top?: string;
};

const FakeBlobSVG: FC<Props> = (props) => {
	return (
		<Grid sx={{
			position: 'absolute',
			...props,
		}}>
			<svg width="1528" height="1363" viewBox="0 0 1528 1363" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.9" filter="url(#filter0_f_937_27440)">
					<path fillRule="evenodd" clipRule="evenodd" d="M739.077 526.864C779.941 524.289 823.262 504.91 859.508 515.53C895.728 526.142 904.642 558.078 924.94 581.321C943.33 602.379 960.982 622.576 973.409 645.957C989.229 675.721 1033.46 707.942 1007.78 737.186C980.441 768.324 908.112 751.304 863.835 770.751C827.716 786.616 818.162 823.655 780.323 837.093C739.252 851.679 691.978 852.691 649.382 846.913C603.346 840.669 546.2 833.151 529.369 803.055C511.61 771.3 570.184 734.916 567.2 699.963C564.371 666.821 506.038 646.215 513.117 612.695C520.116 579.556 559.396 548.168 602.736 531.705C645.001 515.65 692.79 529.779 739.077 526.864Z" fill="url(#paint0_linear_937_27440)"/>
				</g>
				<defs>
					<filter id="filter0_f_937_27440" x="0.521896" y="0.374741" width="1527.1" height="1361.82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix"/>
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
						<feGaussianBlur stdDeviation="256" result="effect1_foregroundBlur_937_27440"/>
					</filter>
					<linearGradient id="paint0_linear_937_27440" x1="514.934" y1="708.731" x2="1006" y2="643.444" gradientUnits="userSpaceOnUse">
						<stop stopColor="#6A19A4"/>
						<stop offset="1" stopColor="#A46A19"/>
					</linearGradient>
				</defs>
			</svg>

		</Grid>
	);
};

export default FakeBlobSVG;