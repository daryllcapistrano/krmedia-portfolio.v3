module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.keatonrodgers.com',
    title: 'krmedia-portfolio',
  },
  plugins: [
    '@chakra-ui/gatsby-plugin',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/contact-image.jpg',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'photos',
        path: './src/images/photos/',
      },
      __key: 'photos',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: './src/images/assets/',
      },
      __key: 'assets',
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "videos",
    //     path: "./src/images/videos/",
    //   },
    //   __key: "videos",
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
      },
    },
    'gatsby-plugin-mdx',
    {
      resolve: 'gatsby-remark-embed-video',
      options: {
        width: 800,
        ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
        height: 400, // Optional: Overrides optional.ratio
        related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
        noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
        loadingStrategy: 'lazy', //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
        urlOverrides: [
          {
            id: 'youtube',
            embedURL: (videoId) => `https://www.youtube-nocookie.com/embed/${videoId}`,
          },
        ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
        containerClass: 'embedVideo-container', //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
        iframeId: false, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
      },
    },
  ],
};
