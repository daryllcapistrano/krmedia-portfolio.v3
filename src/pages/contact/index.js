import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../../components/Layout';
import { GrInstagram, GrPhone, GrMailOption } from 'react-icons/gr';
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
  'Spy Optics',
  'Independent Trucks',
  'OJ Wheels',
  'Creature Skateboards',
  'Bronson Bearings',
  'Mob Grip',
  'Slime Balls',
  'NHS inc.',
  'Hoka',
  'Sorel',
  'Sims',
  'Santa Cruz Skateboards',
  'Allbirds',
  'The James Brand',
  'Pacifico',
  'Stanley',
  'Teva',
];

clients.sort();

const ContactPage = ({ data }) => {
  const title = 'KEATON RODGERS';
  return (
    <main>
      <Helmet defaultTitle="Keaton Rodgers Media" title={title} />{' '}
      <Layout>
        <SimpleGrid columns={[1, null, 2]} margin={'auto'} pt={'4'} px={{ base: '0', md: '24' }}>
          <Container>
            <GatsbyImage image={data.allFile.nodes[0].childImageSharp.gatsbyImageData} />
            <Text fontSize={'x-small'} fontWeight={'hairline'}>
              Photo by Eric Hinsperger
            </Text>
          </Container>
          <Stack>
            <Container px={{ base: '6' }} pt={'6'}>
              <Text fontWeight={'bold'} textTransform={'uppercase'}>
                Keaton Rodgers
              </Text>
              <Text fontWeight={'light'} textTransform={'uppercase'}>
                Director / Cinematographer / Editor
              </Text>
            </Container>
            <Container px={{ base: '6' }}>
              <VStack alignItems={'left'} spacing={'4'} py={'8'}>
                <Flex>
                  <GrPhone />
                  <a href="tel:971.347.6704">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'} textTransform={'uppercase'}>
                      (971) 347-6704
                    </Text>
                  </a>
                </Flex>
                <Flex>
                  <GrMailOption />
                  <a href="mailto:keatonrodgersmedia@gmail.com">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'} textTransform={'uppercase'}>
                      keatonrodgersmedia@gmail.com
                    </Text>
                  </a>
                </Flex>
                <Flex>
                  <GrInstagram />
                  <a href="https://www.instagram.com/keatonrodgers">
                    <Text fontSize={'small'} fontWeight={'light'} mx={'4'} textTransform={'uppercase'}>
                      follow me on Instagram
                    </Text>
                  </a>
                </Flex>
              </VStack>
            </Container>
            <Container px={{ base: '6' }}>
              <Text fontWeight={'semibold'} mb={'4'} textTransform={'uppercase'}>
                Select Clients
              </Text>
              <Flex flexWrap={'wrap'}>
                {clients
                  .map((client, index) => (
                    <Text key={index} mb={'1'} p={'1'} fontSize={'small'} fontWeight={'light'} textTransform={'uppercase'}>
                      {client}
                    </Text>
                  ))
                  .reduce((prev, curr) => [prev, '- ', curr])}
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
    allFile(filter: { sourceInstanceName: { eq: "assets" }, relativePath: { eq: "bts-me.jpg" } }) {
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
