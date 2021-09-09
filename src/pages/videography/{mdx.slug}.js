import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'

const VideoPage = ({data}) => {
  return (
    <Layout>
      <p>{data.mdx.frontmatter.title}</p>
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
      }
    }
  }
`

export default VideoPage