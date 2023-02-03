/* The Normandy Project UI
 * © The Normandy Project, A Roman Empire Divided 2023-
 */

const TailwindPluginScaffold = require("tailwindcss/plugin");

let logger = ( message = "" ) => {};
let header = ( text = "", style = "=", length = 30 ) => {
    let _length = length - 2;
    let constraint = Math.floor((( _length - text.length ) / 2));
    let newString = "[" + "".padStart(constraint, style.repeat(_length)) + text + (" ".repeat(text.length % 2)) + "".padEnd(constraint, style.repeat(_length)) + "]";
    return newString;
};

/* TNP UI v1 */
/** @name TNPUI */
/** @type {import("tailwindcss/types/config").PluginCreator} */
const Plugin = function ( { addComponents, matchUtilities, matchComponents, e, theme } ) {


    logger(
        header() + "\n" +
        header("The Normandy Project", "=") + "\n" +
        header()
    );

    // function luminance(r, g, b) {
    //     var a = [r, g, b].map(function(v) {
    //       v /= 255;
    //       return v <= 0.03928 ?
    //         v / 12.92 :
    //         Math.pow((v + 0.055) / 1.055, 2.4);
    //     });
    //     return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    //   }
      
    //   function contrast(rgb1, rgb2) {
    //     var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    //     var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    //     var brightest = Math.max(lum1, lum2);
    //     var darkest = Math.min(lum1, lum2);
    //     return (brightest + 0.05) /
    //       (darkest + 0.05);
    //   }
    
    const ColorWhite = theme("colors.white");
    const ColorBlack = theme("colors.black");
    const StripeColor = "";

    // Fundamentals are shared dimensions of the object, color is applied after.
    const Fundamentals = {

        Button : {
            paddingLeft: theme("padding.4"),
            paddingRight: theme("padding.4"),
            paddingTop: theme("padding.2"),
            paddingBottom: theme("padding.2"),
            borderWidth: theme("borderWidth.2"),
            textAlign : "center",
            cursor: "pointer",
        }

    };
    // custom components 
    matchComponents(
        {
            "bg-striped" : ( value ) => ({
                backgroundColor : value["400"] + "1a",
                backgroundImage : `linear-gradient(135deg, ${value["500"]+"80"} 10%, transparent 0, transparent 50%, ${value["500"]+"80"} 0, ${value["500"]+"80"} 60%, transparent 0, transparent)`,
                backgroundSize : "7.01px 7.01px"
            }),
            button : ( value ) => ({
                backgroundColor: value["600"] || value,
                color: value["100"] || (value === ColorWhite ? ColorBlack : ColorWhite), // change to value === white || black, if none return value
                borderColor: value["700"] || (value === ColorWhite ? theme("colors.neutral.100") : theme("colors.neutral.900")), // change
                ...Fundamentals.Button,
                // too many bugs for this strategy, shame
                // "&-light" : { // &-classNameExtension, has a weird bug for being trimmed unless defined sepearated in className attribute first...
                //     backgroundColor: value["400"] || (value === ColorWhite ? theme("colors.neutral.200") : theme("colors.neutral.900")),
                //     color: value["900"] || (value === ColorWhite ? ColorBlack : ColorWhite),
                //     borderColor: value["500"] || (value === ColorWhite ? theme("colors.neutral.300") : theme("colors.neutral.900")), // change
                //     ...Fundamentals.Button,
                //     /*"&:hover" : {
                //         backgroundColor: value["700"], // change
                //         color: value["100"] || (value === ColorWhite ? ColorBlack : ColorWhite), // change
                //         borderColor: value["800"] || (value === ColorWhite ? theme("colors.neutral.100") : theme("colors.neutral.900")) // change
                //     }*/
                // },
                "&.flat" : {
                    borderColor: value["600"] || value
                },
                "&.hollow" : {
                    backgroundColor : "transparent",
                    color: value["600"] || value,
                    borderColor: value["600"] || value,
                    "&:hover": {
                        backgroundColor: value["600"] || value
                    }
                },
                "&.reactive" : {
                    transition: `${theme("transitionProperty.transform")} ${theme("transitionDuration.DEFAULT")} ${theme("transitionTimingFunction.DEFAULT")}`,
                    "&:hover" : {
                        transform: `scale3d(${theme("scale.105")}, ${theme("scale.105")}, ${theme("scale.105")})`
                    }
                },
                "&.icon-button" : {
                    fill: "currentColor",
                    display : "flex",
                    flexDirection: "row",
                },
                "&:hover" : {
                    backgroundColor: value["700"] || (value === ColorWhite ? theme("colors.neutral.200") : theme("colors.neutral.900")), // change
                    color: value["100"] || (value === ColorWhite ? ColorBlack : ColorWhite), // change
                    borderColor: value["800"] || (value === ColorWhite ? theme("colors.neutral.300") : theme("colors.neutral.900")) // change
                }
            }),
        },
        { values: theme("colors") }
    )

    logger("[N] The Normandy Project UI has been enabled!");

};

const PluginWrapper = ( config = { log: false } ) => {
    if ( typeof config === "undefined" ) throw new Error("Somehow, the config object is undefined");
    if ( config.log === true ) {
        logger = console.log;
    }
    return Plugin;
}

module.exports = {
    default: TailwindPluginScaffold(PluginWrapper()),
    developer: ( config ) => TailwindPluginScaffold(PluginWrapper(config))
}