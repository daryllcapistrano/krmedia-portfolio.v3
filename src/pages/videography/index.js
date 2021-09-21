import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';

const VideographyPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="auto" pb="200px" pt="50px" px="4" maxW="1200px">
          {data.allMdx.nodes.map((node) => (
            <Box key={node.id} paddingTop={'8'}>
              <Link to={`/videography/${node.slug}`}>
                <GatsbyImage
                  image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                  alt={node.frontmatter.hero_image_alt}
                />
                <Text align={'start'} fontWeight={'light'}>
                  {node.frontmatter.title}
                </Text>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Layout>
    </main>
  );
};

// GraphQL markdown query in order
export const query = graphql`
  {
    allMdx(sort: { order: ASC, fields: frontmatter___order }) {
      nodes {
        id
        slug
        frontmatter {
          title
          hero_image_alt
          order
          hero_image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, quality: 90)
            }
          }
        }
      }
    }
  }
`;

export default VideographyPage;
