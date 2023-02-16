import Global from '../figma-tokens/spacing global.json';

const FigmaSpacing = Global['Spacing Global'].spacing;

const NumberRegex = /[^0-9]+/g;

const defaultSpacingPx = FigmaSpacing['1x'].value; // initial reference to all values
const defaultSpacing = defaultSpacingPx.replace(NumberRegex, ''); // remove px or rem

const spacing: number = parseInt(defaultSpacing, 10);

/**
 * Examples of use if the json value 1x is 4px
 *
 * theme.spacing(8) ==> 1x(4) * 8 = 32px
 * theme.spacing(2) ==> 1x(4) * 2 = 8px
 * theme.spacing(.5) ==> 1x(4) * 0.5 = 2px
 *
 * All the values on figma json should be multiple of 1x value
 */

export default spacing;
