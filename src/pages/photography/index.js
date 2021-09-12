import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';

import { Box, Image } from '@chakra-ui/react';

const PhotographyPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <Box padding={4} w="100%" maxW="100vw" mx="auto" sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}>
          {/* map over graphql data */}
          {data.allFile.nodes.map((node) => (
            <GatsbyImage key="src" image={node.childImageSharp.gatsbyImageData} alt="Alt" />
          ))}
        </Box>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;

export default PhotographyPage;
