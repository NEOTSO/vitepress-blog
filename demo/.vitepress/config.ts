import { defineConfig } from 'vitepress';
// import { baseConfig, themeConfig } from '../../src/';
import baseConfig from '../../src/config/baseConfig';
import themeConfig from '../../src/config/themeConfig';

export default (async () => {
    return {
        ...baseConfig,
        themeConfig: {
            ...(await themeConfig)
        }
    };
})();
