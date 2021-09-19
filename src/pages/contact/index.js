import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Container, Stack, SimpleGrid } from '@chakra-ui/react';

const ContactPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="auto" pt="12" maxWidth="900px">
          <Container>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
          </Container>
          <Center>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} h={'100vh'} padding="4">
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <a href="tel:971.347.6704">971.347.6704</a>
                </Center>
              </Button>
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <a href="mailto:keatonrodgersmedia@gmail.com">keatonrodgersmedia@gmail.com</a>
                </Center>
              </Button>
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <a href="mailto:keatonrodgersmedia@gmail.com">keatonrodgersmedia@gmail.com</a>
                </Center>
              </Button>
            </Stack>
          </Center>
        </SimpleGrid>
      </Layout>
    </main>
  );
};

export const query = graphql`
  {
    allFile(filter: { sourceInstanceName: { eq: "assets" }, relativePath: { eq: "contact-image.jpg" } }) {
      nodes {
        id
        childImageSharp {
          gatsbyImageData(quality: 90, height: 600)
        }
      }
    }
  }
`;

export default ContactPage;
