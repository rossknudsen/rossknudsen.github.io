const desertStorm = "#f5f7f6";    // desert storm
const sanJuan = "#304e76";        // san juan
const deepBlush = "#e4839c";      // deep blush
const cabaret = "#d23d69";        // cabaret
const cornflowerBlue = "#64aae6"; // cornflower blue

// https://stackoverflow.com/a/39877446
declare global { 
    // tslint:disable-next-line:interface-name
    interface String {
        darken(amount?: number) : string;
    }
}

String.prototype.darken = function(this: string, amount: number = 1) {
    // TODO use chroma.js to darken the given color if it is a valid color.
    // if not, then just return 'this'.
    // return "grey";
    return this;
}

export default interface IThemeInterface {
    light: string;
    dark: string;
    accentLight: string;
    accentDark: string;
    mainBrand: string;
}

const theme: IThemeInterface = {
    accentDark: cabaret,
    accentLight: deepBlush,
    dark: sanJuan,
    light: desertStorm,
    mainBrand: cornflowerBlue.darken()
}

export { theme };