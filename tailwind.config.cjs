/* Tailwind config */
const TNPUI = require("./src/tailwind/TNPUI.cjs").default;

/** @type {import("tailwindcss").Config} */
module.exports = {
    content: [
        "./src/components/**/*.astro",
        "./src/layouts/**/*.astro",
        "./src/pages/**/*.astro",
        "./src/react/**/*.tsx"
    ],
    safelist: [
        // safelist doesn't work, odd.
        // "after:bg-cyan-100",
        // {
        //     // pattern: /(bg|fill|border)-(black|white|slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|cerberus|alliance|n7|paragon|renegade)-(50|100|200|300|400|500|600|700|800|900)/,
        //     pattern: /(bg|text|fill|border)+/,
        //     variants: ["hover", "after", "group-hover", "group-hover:after"]
        // }
    ],
    theme: {
        extend: {
            fontFamily : {
                "mono" : ["JetBrains Mono", "monospace", "system mono", "mono"]
            },
            animation: {
                "scroll" : "scroll 2s linear 0s infinite normal forwards",
                "shine": "shine 3s linear 0s infinite normal forwards",
                "shineGlow": "shineGlow 3s linear 0s infinite normal forwards",
                "StrokeNormandyLetters" : "StrokeNormandyLetters 8s linear 0s 1 normal forwards",
                "FillNormandyLetters" : "FillNormandyLetters 1s linear 2.5s 1 normal forwards",
                "ButtonGroupFadeIn" : "ButtonGroupFadeIn 1s linear 3s 1 normal forwards"
            },
            keyframes: {
                scroll : {
                    "0%" : {
                        opacity: 1
                    },
                    "0%, 100%" : {
                        height: "0.8em",
                        transform: "translate3d(0,-.0625em,0)"
                    },
                    "50%" : {
                        height: "1em",
                        transform: "translate3d(0,25%,0)",
                        opacity: .25
                    },
                    "75%" : {
                        transform: "translate3d(0,25%,0)",
                        opacity: 0
                    },
                    "100%" : {
                        opacity: 0
                    }
                },
                shineGlow: {
                    "0%": {
                        "background-color": "hsl(216, 65%, 38%)"
                    },
                    "45%": {
                        "background-color": "hsl(264, 58%, 57%)"
                    },
                    "100%": {
                        "background-color": "hsl(216, 65%, 38%)"
                    }
                },
                shine: {
                    "0%": {
                        "left": "-6rem"
                    },
                    "20%": {
                        "left": "100%"
                    },
                    "100%": {
                        "left": "100%"
                    }
                },
                StrokeNormandyLetters : {
                    "to" : {
                        "stroke-dashoffset": "0"
                    }
                },
                FillNormandyLetters : {
                    "to" : {
                        "padding": ".25em",
                        "fill": "white"
                    }
                },
                ButtonGroupFadeIn : {
                    "to" : {
                        "opacity" : "1"
                    }
                }
            },
            colors: {
                "alliance": {
                    "50": "#f0f8fe",
                    "100": "#dceffd",
                    "200": "#c2e4fb",
                    "300": "#97d5f9",
                    "400": "#66bdf4",
                    "500": "#43a0ee",
                    "600": "#2d84e3",
                    "700": "#256ed0",
                    "800": "#2254a0",
                    "900": "#224c86",
                },
                "n7": {
                    "50": "#fff1f1",
                    "100": "#ffdfe0",
                    "200": "#ffc5c7",
                    "300": "#ff9da0",
                    "400": "#ff6469",
                    "500": "#ff343b",
                    "600": "#ed151c",
                    "700": "#c50d13",
                    "800": "#a50f14",
                    "900": "#881418",
                },
                "paragon": {
                    "50": "#f0f8fe",
                    "100": "#dceffd",
                    "200": "#c2e4fb",
                    "300": "#97d5f9",
                    "400": "#66bdf4",
                    "500": "#43a0ee",
                    "600": "#2d84e3",
                    "700": "#256ed0",
                    "800": "#2254a0",
                    "900": "#224c86",
                },
                "renegade": {
                    "50": "#fdf3f3",
                    "100": "#fce4e4",
                    "200": "#facfce",
                    "300": "#f5adac",
                    "400": "#ed7e7c",
                    "500": "#e15452",
                    "600": "#cf3c3a",
                    "700": "#ad2a28",
                    "800": "#8f2625",
                    "900": "#772625",
                },
                "cerberus": {
                    "50": "#fffbec",
                    "100": "#fff7d3",
                    "200": "#ffeba5",
                    "300": "#ffda6d",
                    "400": "#ffbe32",
                    "500": "#ffa70a",
                    "600": "#ff8f00",
                    "700": "#cc6902",
                    "800": "#a1510b",
                    "900": "#82440c",
                },
            }
        }
    },
    safelist: [

    ],
    variants: {},
    plugins: [TNPUI],
}