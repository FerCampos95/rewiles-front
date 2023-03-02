import React from 'react';
import { Grid } from '@mui/material';

type Props = {
  right?: string;
  bottom?: string;
  left?: string;
  top?: string;
};

const RightBlob = (positions: Props) => {
	return (
		<Grid sx={{ position: 'fixed', ...positions }}>
			<svg width="969" height="918" viewBox="0 0 969 918" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g opacity="0.9" filter="url(#filter0_f_937_27449)">
					<path fillRule="evenodd" clipRule="evenodd" d="M516.925 602.12C488.225 605.51 459.522 624.602 432.732 615.599C405.962 606.602 396.342 577.093 379.553 555.953C364.341 536.8 349.741 518.429 338.516 496.97C324.226 469.65 289.545 440.734 304.722 412.89C320.883 383.243 373.911 397.325 403.285 378.146C427.247 362.501 430.19 327.793 455.623 314.364C483.227 299.789 516.631 297.698 547.421 302.039C580.697 306.731 621.981 312.339 637.022 339.943C652.892 369.067 615.135 404.358 620.863 436.82C626.294 467.599 669.771 485.36 668.218 516.732C666.682 547.749 642.084 577.919 613.066 594.297C584.766 610.269 549.433 598.28 516.925 602.12Z" fill="url(#paint0_linear_937_27449)" />
				</g>
				<defs>
					<filter id="filter0_f_937_27449" x="0.958038" y="0.0316162" width="967.3" height="917.957" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
						<feFlood floodOpacity="0" result="BackgroundImageFix" />
						<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
						<feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_937_27449" />
					</filter>
					<linearGradient id="paint0_linear_937_27449" x1="657.003" y1="427.387" x2="315.676" y2="500.101" gradientUnits="userSpaceOnUse">
						<stop stopColor="#6A19A4" />
						<stop offset="1" stopColor="#A46A19" />
					</linearGradient>
				</defs>
			</svg>
		</Grid>
	);
};

export default RightBlob;