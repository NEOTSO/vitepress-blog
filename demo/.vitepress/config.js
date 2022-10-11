const path = require('path');

/**
 * @type {() => Promise<import('vitepress').UserConfig>}
 */
module.exports = (async () => {
    return {
        vite: {
            resolve: {
                alias: {
                    'vitepress-theme-tso': path.join(__dirname, '../../src')
                }
            }
        }
    };
})();
