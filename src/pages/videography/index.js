import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../../components/Layout"
import { SimpleGrid, Box } from "@chakra-ui/react"

const VideographyPage = ({data}) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="10px">
          {
            data.allMdx.nodes.map(node => (
              <Box bg="orange" height="333px"><Link to={`/videography/${node.slug}`}>{node.frontmatter.title}</Link></Box>
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
        }
      }
    }
  }
`


export default VideographyPage

