import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Container, Text, Stack, SimpleGrid } from '@chakra-ui/react';

//todo: add images and contact info

const ContactPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="16px">
          <Container>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
          </Container>
          <Center p={8}>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} h={'100vh'}>
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Phone Number</Text>
                </Center>
              </Button>
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Email Address</Text>
                </Center>
              </Button>
              <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <Text>Link to Instagram</Text>
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
          gatsbyImageData(quality: 90)
        }
      }
    }
  }
`;

export default ContactPage;
