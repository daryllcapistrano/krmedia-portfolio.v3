import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { SRLWrapper } from 'simple-react-lightbox';

const imageStyles = {
  marginBottom: '8px',
  cursor: 'pointer',
};

const options = {
  caption: {
    showCaption: false,
  },
};

const PhotoPage = ({ data }) => {
  const title = 'KEATON RODGERS';
  return (
    <main>
      <Helmet defaultTitle="Keaton Rodgers Media" title={title} />
      <Layout>
        <SRLWrapper options={options}>
          <Box padding={4} w="100%" maxW="1200px" mx="auto" sx={{ columnCount: [1, 2, 3], columnGap: '8px' }}>
            {/* map over graphql data */}
            {data.images.nodes.map((node, index) => {
              return (
                <GatsbyImage key={index} image={node.childImageSharp.gatsbyImageData} alt={node.name} style={imageStyles} />
              );
            })}
          </Box>
        </SRLWrapper>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    images: allFile(filter: { sourceInstanceName: { eq: "photos" } }, sort: { order: ASC, fields: name }) {
      nodes {
        name
        id
        relativePath
        childImageSharp {
          gatsbyImageData(placeholder: NONE, quality: 90)
        }
      }
    }
  }
`;

export default PhotoPage;
