/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_KEY,
        tables: [
          {
            baseId: `appldMpv9yJNhFW5C`,
            tableName: `advan-targets`,
            tableView: `Grid view`,
          },
        ], // optional
        // can leave off queryName, mapping or tableLinks if not needed
      },
    },
  ],
}
