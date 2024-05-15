import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode, command }) => {
    const env = {
        ...loadEnv(mode, process.cwd(), ""),
        ...loadEnv(mode, path.join(__dirname, ".."), ""),
    };

    const BASE_URL = new URL(noTrailingSlash(env.APP_URL));

    return {
        base: command === "serve" ? "" : noTrailingSlash(BASE_URL.pathname) + "/public/build/",
        plugins: [react()],
        define: {
            global: "globalThis",
            BASE_URL: command === "serve" ? undefined : JSON.stringify(BASE_URL),
        },
        server: {
            port: 3000,
            proxy: {
                "/api": {
                    target: BASE_URL.toString(),
                    changeOrigin: true,
                    secure: false,
                },
            },
        },
        resolve: {
            alias: {
                "@src": path.resolve(__dirname, "./src"),
            },
        },
        build: {
            outDir: "../public/build",
        },
    };
});

function noTrailingSlash(str: string, defaultStr = "") {
    let res = str || defaultStr;
    if (/\/$/.test(res)) {
        // Remove trailing slash if any
        res = res.substring(0, res.length - 1);
    }
    return res;
}

