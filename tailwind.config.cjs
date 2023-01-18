/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                "shine": "shine 3s linear infinite",
                "shineGlow": "shineGlow 3s linear infinite"
            },
            colors: {
                "brand": "hsl(216, 65%, 38%)",
                "brandLight": "hsl(216, 58%, 57%)",
                "brandTeal": "hsl(182, 58%, 57%)",
                "brandPurp": "hsl(264, 58%, 57%)"
            },
            keyframes: {
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
                }
            },
        }
    },
    safelist : [
        
    ],
    variants : {},
    plugins : [],
}