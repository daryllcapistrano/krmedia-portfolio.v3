import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/Layout"
import { SimpleGrid, Box } from "@chakra-ui/react"

const VideographyPage = ({data}) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="10px">
          {
            data.allFile.nodes.map(node => (
              <Box bg="orange" height="333px">{node.name}</Box>
            ))
          }
         
          
        </SimpleGrid>
      </Layout>
    </main>
  )
}

export const query = graphql`
  {
    allFile(filter: {sourceInstanceName: {eq: "markdown"}}) {
      nodes {
        id
        name
      }
    }
  }
`

export default VideographyPage

