import DesignIcon from '@/assets/icons/DesignIcon';
import DesignOpsIcon from '@/assets/icons/DesignOpsIcon';
import DevIcon from '@/assets/icons/DevIcon';
import DevOpsIcon from '@/assets/icons/DevOpsIcon';
import QAIcon from '@/assets/icons/QAIcon';
import SecurityIcon from '@/assets/icons/SecurityIcon';

import DesignSVG from '@/assets/images/DesignSVG';
import DesignOpsSVG from '@/assets/images/DesignOpsSVG';
import DevSVG from '@/assets/images/DevSVG';
import DevOpsSVG from '@/assets/images/DevOpsSVG';
import QASVG from '@/assets/images/QASVG';
import SecuritySVG from '@/assets/images/SecuritySVG';

type Action = {
  title: string;
  description: string;
  ImgComponent: () => JSX.Element;
  IconComponent: () => JSX.Element;
}

export const ACTIONS_PLAN: Action[] = [
	{
		title: 'Design',
		description: 'Create visually appealing and/or creative elements for various purposes, with a focus on aesthetics and usability. We ensure that the product is easy to use, provides a positive experience, and solves the user\'s problem in the best possible way.',
		ImgComponent: DesignSVG,
		IconComponent: DesignIcon
	},
	{
		title: 'Design Ops',
		description: 'Improve the efficiency and effectiveness of design teams by streamlining workflows, tools, and processes. We work to ensure that designers have the resources and support they need to produce high-quality work.',
		ImgComponent: DesignOpsSVG,
		IconComponent: DesignOpsIcon
	},
	{
		title: 'Development',
		description: 'We use a combination of technical skills, creativity, and problem-solving to create the digital product that you need. Our developers ensure that they are optimized for performance and user experience.',
		ImgComponent: DevSVG,
		IconComponent: DevIcon
	},
	{
		title: 'Dev Ops',
		description: 'Ensure that software is deployed and maintained smoothly, with a focus on automation and continuous improvement. Implement tools and processes that help teams work together more efficiently.We focus on improving the reliability and performance of software systems.',
		ImgComponent: DevOpsSVG,
		IconComponent: DevOpsIcon
	},
	{
		title: 'QA',
		description: 'We use a variety of testing methods, such as manual testing, automated testing, performance testing, and security testing. These methods are used to identify any issues with the product and ensure that it meets industry standards and best practices.',
		ImgComponent: QASVG,
		IconComponent: QAIcon
	},
	{
		title: 'Cybersecurity',
		description: 'Lets protect your company and users from potential security threats, such as hackers, viruses, or malware. We ensure that your digital products are secure and reliable.',
		ImgComponent: SecuritySVG,
		IconComponent: SecurityIcon
	}
];