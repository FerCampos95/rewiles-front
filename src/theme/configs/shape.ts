import Globals from '../figma-tokens/radius global.json';

const FigmaRadius = Globals['Radius Global'].radius;

const shape = {
	borderRadius: Number(FigmaRadius.s.value), // height px < 39
	borderRadiusSm: Number(FigmaRadius.m.value), // 40 < px < 71
	borderRadiusMd: Number(FigmaRadius.l.value), // px > 72
};

export default shape;
