/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://savinjain.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/server-sitemap.xml'],
  generateIndexSitemap: false,
};