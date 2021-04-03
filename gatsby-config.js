module.exports = {
  siteMetadata: {
    title: "Goons in Zooms",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "goons-in-zooms.myshopify.com",
        accessToken: "",
      },
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-193665561-1",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
