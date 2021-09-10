import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { SimpleGrid, Box, Text } from "@chakra-ui/react"
import { GatsbyImage } from 'gatsby-plugin-image' 


const VideographyPage = ({data}) => {
  console.log({data})

  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="10px">
          {
            data.allMdx.nodes.map(node => (
              <Box bg="orange">
                <Link to={`/videography/${node.slug}`}>
                <GatsbyImage image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt={node.frontmatter.hero_image_alt} />
                <Text align="center">{node.frontmatter.title}</Text>
                </Link>
              </Box>
            ))
          }
         
          
        </SimpleGrid>
      </Layout>
    </main>
  )
}


// GraphQL markdown query in order
export const query = graphql`
  {
    allMdx(sort: {order: ASC, fields: frontmatter___order}) {
      nodes {
        id
        slug
        frontmatter {
          title
          hero_image_alt
          order
          hero_image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                quality: 90
                ) 
            }
          }
        }
      }
    }
  }
`


export default VideographyPage

