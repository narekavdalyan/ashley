const path = require('path');

module.exports = {
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'hy'],
    },
    localePath: path.resolve('./app/translate'),
    ns: ['common'],
    defaultNS: 'common',
};