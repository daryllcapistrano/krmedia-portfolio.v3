module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "krmedia-portfolio",
  },
  plugins: [
    "@chakra-ui/gatsby-plugin",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "photos",
        path: "./src/images/photos/",
      },
      __key: "photos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "videos",
        path: "./src/images/videos/",
      },
      __key: "videos",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
      }
    },
  ],
};
