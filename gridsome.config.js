// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
    siteName: 'Capital B',
    plugins: [
        {
            use: 'gridsome-plugin-tailwindcss',
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Home/*.md',
                typeName: 'HomePage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Privacy-Policy/*.md',
                typeName: 'PrivacyPolicyPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/About/*.md',
                typeName: 'AboutPage',
            },
        },
        {
            use: '@gridsome/source-filesystem',
            options: {
                path: './_pages/Portfolio/*.md',
                typeName: 'PortfolioPage',
            },
        },
    ],
}
