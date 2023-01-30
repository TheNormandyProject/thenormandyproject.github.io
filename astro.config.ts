import { defineConfig } from "astro/config";

//import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import viteSvgr from "vite-plugin-svgr";

// https://astro.build/config
export default defineConfig({
    
    // Information \\
    site: "https://thenormandyproject.github.io",

    // Output \\

    output: "static",

    // Server \\

    server: { port: 3000, host: true },

    // Plugins \\

    vite : {
        plugins : [
            viteSvgr({
                // Set it to `true` to export React component as default.
                // Notice that it will overrides the default behavior of Vite.
                exportAsDefault: false,

                // svgr options: https://react-svgr.com/docs/options/
                svgrOptions: {
                    typescript: false
                },

                // esbuild options, to transform jsx to js
                esbuildOptions: {
                    // ...
                },

                //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should include. By default all svg files will be included.
                include: "**/*.svg",

                //  A minimatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore. By default no files are ignored.
                exclude: "",
            })
        ]
    },

    integrations: [/*tailwind({
        config : { path : "./tailwind.config.cjs", applyBaseStyles : false }
    }),*/ react()]
    
});    