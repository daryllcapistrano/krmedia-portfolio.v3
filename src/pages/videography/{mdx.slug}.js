import * as React from 'react'
import { graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 


import Layout from '../../components/Layout'

const VideoPage = ({data}) => {
  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <Layout>
      <p>{data.mdx.frontmatter.title}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
      />
    </Layout>
  )
}

//GraphQL query
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        order
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default VideoPage