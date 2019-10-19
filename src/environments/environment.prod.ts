export const environment = {
    production: true,
    apiProxy: {
        target: 'https://safe-earth-09723.herokuapp.com',
        secure: true,
        pathRewrite: {
            '^/api': ''
        },
        changeOrigin: true
    }
};
