const pageRoute = require("./page.config.js");

const theme = {
    title: 'Jayant Vue UI',
    head: [
        [ 'link', { rel: 'icon', href: '/img/favicon.ico' } ],
        [ 'meta', { name: "viewport", content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" } ],
        [ 'meta', { name: 'keywords', content: 'vJUI' } ]
    ],
    base: '/',
    dest: "dist",
    themeConfig: {
        author: "Jayant",
        search: true,
        nav: pageRoute
    },
}
module.exports = theme;