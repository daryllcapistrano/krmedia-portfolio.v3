import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { FcCellPhone, FcGoogle } from 'react-icons/fc';
import { GrInstagram } from 'react-icons/gr';
import { Container, Stack, VStack, SimpleGrid, Text, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

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
  'Summit at Snoqualmie',
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
  'Santa Cruz Skateboards',
];

clients.sort();

console.log(clients);

const ContactPage = ({ data }) => {
  const title = 'Keaton Rodgers Media | Contact Me';
  return (
    <main>
      <Helmet defaultTitle="Keaton Rodgers Media" title={title} />{' '}
      <Layout>
        <SimpleGrid columns={[1, null, 2]} margin={'auto'} pt={'4'} px={{ base: '0', md: '24' }}>
          <Flex justifyContent={'center'}>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
          </Flex>
          <Stack>
            <Text alignSelf={'center'} fontWeight={'bold'} pt={'4'}>
              Keaton Rodgers
            </Text>
            <Text alignSelf={'center'} fontWeight={'light'}>
              Director / Cinematographer / Editor
            </Text>
            <Container alignContent={'center'}>
              <VStack spacing={'4'} py={'8'}>
                <Flex alignItems={'center'}>
                  <FcCellPhone />
                  <a href="tel:971.347.6704">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'}>
                      (971) 347-6704
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'}>
                  <FcGoogle />
                  <a href="mailto:keatonrodgersmedia@gmail.com">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'}>
                      @keatonrodgersmedia
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'}>
                  <GrInstagram />
                  <a href="https://www.instagram.com/keatonrodgers">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'}>
                      follow me on Instagram
                    </Text>
                  </a>
                </Flex>
                {/* <Flex alignItems={'center'}>
                  <GrVimeo />
                  <a href="https://vimeo.com/user135455357">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'}>
                      follow me on Vimeo
                    </Text>
                  </a>
                </Flex>
                <Flex alignItems={'center'}>
                  <GrYoutube />
                  <a href="https://www.youtube.com/user/keatonrodgers">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'}>
                      subscribe on YouTube
                    </Text>
                  </a>
                </Flex> */}
              </VStack>
            </Container>
            <Container px={{ base: '6' }}>
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
          gatsbyImageData(quality: 90, height: 550)
        }
      }
    }
  }
`;

export default ContactPage;
