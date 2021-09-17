import * as React from 'react';
import { graphql } from 'gatsby';
import { Center, Container, Text } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import Layout from '../../components/Layout';

const VideoPage = ({ data }) => {
  return (
    <Layout>
      <Center h="90vh">
        <Container>
          <Text textAlign={'center'} mb={'4'} fontWeight={'bold'}>
            {data.mdx.frontmatter.videoTitle}
          </Text>
          <ReactPlayer url={data.mdx.frontmatter.videoSourceURL} controls={true} width="auto" />
        </Container>
      </Center>
    </Layout>
  );
};

//GraphQL query
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        order
        videoSourceURL
        videoTitle
      }
    }
  }
`;

export default VideoPage;
