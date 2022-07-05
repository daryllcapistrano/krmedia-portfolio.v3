import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/Layout';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Helmet } from 'react-helmet';

const VideographyPage = ({ data }) => {
  const title = 'KEATON RODGERS';
  return (
    <main>
      <Helmet defaultTitle="Keaton Rodgers Media" title={title} />
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing={'4'} maxW={'1200px'} margin={'auto'} px={'4'} pt={'4'}>
          {data.allMdx.nodes.map((node) => (
            <Box key={node.id}>
              <Link to={`/videography/${node.slug}`}>
                <GatsbyImage
                  image={node.frontmatter.hero_image.childImageSharp.gatsbyImageData}
                  alt={node.frontmatter.hero_image_alt}
                />
                <Text align={'center'} fontWeight={'medium'} textTransform={'uppercase'}>
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

// * GraphQL markdown query in ascending order
// *
// *
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
              gatsbyImageData(placeholder: NONE, quality: 90)
            }
          }
        }
      }
    }
  }
`;

export default VideographyPage;
