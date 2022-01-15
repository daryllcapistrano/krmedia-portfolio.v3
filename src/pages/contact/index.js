import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { FcCellPhone, FcGoogle } from 'react-icons/fc';
import { GrInstagram } from 'react-icons/gr';
import { Button, Center, Container, Stack, SimpleGrid, UnorderedList, ListItem, Text, Flex } from '@chakra-ui/react';

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
          <Container>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
          </Container>
          <Stack>
            <Container>
              <Stack spacing={4} maxW={'md'} w={'min'} mb={'8'}>
                <Flex alignItems={'center'}>
                  <FcCellPhone />
                  <a href="tel:971.347.6704">
                    <Text mx={'4'}>(971) 347-6704</Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'}>
                  <FcGoogle />
                  <a href="mailto:keatonrodgersmedia@gmail.com">
                    <Text mx={'4'}>keatonrodgersmedia</Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'}>
                  <GrInstagram />
                  <a href="https://www.instagram.com/keatonrodgers">
                    <Text mx={'4'}>@keatonrodgers</Text>
                  </a>
                </Flex>
              </Stack>
            </Container>
            <Container>
              <Text fontWeight={'semibold'} color={'gray.400'} mb={'4'}>
                Select Clients
              </Text>
              <Flex flexWrap={'wrap'}>
                {clients.map((client, index) => (
                  <Text key={index} mb={'1'} p={'1'} fontSize={'small'} fontWeight={'light'}>
                    {client}
                  </Text>
                ))}
              </Flex>
            </Container>
          </Stack>
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
