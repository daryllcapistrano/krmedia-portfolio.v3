import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { FcCellPhone, FcGoogle } from 'react-icons/fc';
import { GrInstagram } from 'react-icons/gr';
import { Button, Center, Container, Stack, SimpleGrid, UnorderedList, ListItem, Text } from '@chakra-ui/react';

const clients = [
  'Nike',
  'Vans',
  'Adidas',
  'Thrasher Magazine',
  'Prana',
  'Chrome Industries',
  'Poler',
  'Timberline Lodge',
  'Alpental',
  'The Summit at Snoqualmie',
  'Spy Optics',
  'Independent Trucks',
  'OJ Wheels',
  'Creature Skateboards',
  'Bronson Bearings',
  'Mob Grip',
  'Slime Balls',
  'NHS inc.',
  'Slash Snowboards',
  'Bonfire Outerwear',
  'WornPath',
  'Bitters',
  'Hoka',
  'Sorel',
  'Sims',
];

const ContactPage = ({ data }) => {
  return (
    <main>
      <Layout>
        <SimpleGrid columns={[1, null, 2]} spacing="20px" margin="auto" pt="12" maxWidth="900px">
          <Container pb={'14'}>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
            <Stack spacing={2} align={'center'} maxW={'md'} w={'min'} margin="auto">
              <Button
                colorScheme="black"
                w={'full'}
                maxW={'md'}
                variant={'outline'}
                leftIcon={<FcCellPhone />}
                marginTop="10"
              >
                <Center>
                  <a href="tel:971.347.6704">971.347.6704</a>
                </Center>
              </Button>
              <Button colorScheme="black" w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
                <Center>
                  <a href="mailto:keatonrodgersmedia@gmail.com">keatonrodgersmedia</a>
                </Center>
              </Button>
              <Button colorScheme="black" w={'full'} maxW={'md'} variant={'outline'} leftIcon={<GrInstagram />}>
                <Center>
                  <a href="https://www.instagram.com/keatonrodgers">Instagram</a>
                </Center>
              </Button>
            </Stack>
          </Container>
          <Center>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'} h={'100vh'} padding="4">
              <Text fontWeight="bold">Select Clients</Text>
              <UnorderedList styleType="none" width="100%" fontSize="sm">
                {clients.map((client, index) => (
                  <ListItem key={index}>{client}</ListItem>
                ))}
              </UnorderedList>
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
