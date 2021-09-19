import * as React from 'react';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { Box, Button, Center, Container, Divider, Text } from '@chakra-ui/layout';
import ReactPlayer from 'react-player';
import Layout from '../../components/Layout';
import { Link } from '@chakra-ui/react';

import { IoMdArrowRoundBack } from 'react-icons/io';

const VideoPage = ({ data }) => {
  return (
    <Layout>
      <Center flex={'1'} marginY="28">
        <Container>
          <Link as={GatsbyLink} to="/videography" fontWeight={'light'} mb={'4'}>
            <IoMdArrowRoundBack />
            back
          </Link>
          <ReactPlayer url={data.mdx.frontmatter.videoSourceURL} controls={true} width="auto" />
          <Text textAlign={'center'} mt={'4'} fontWeight={'light'}>
            {data.mdx.frontmatter.videoTitle}
          </Text>

          {/* conditionally render multiple video instances  */}
          {data.mdx.frontmatter.videoSourceURLTwo && (
            <Box paddingTop="10">
              <ReactPlayer url={data.mdx.frontmatter.videoSourceURLTwo} controls={true} width="auto" />
              <Text textAlign={'center'} mt={'4'} fontWeight={'light'}>
                {data.mdx.frontmatter.videoTitleTwo}
              </Text>
            </Box>
          )}
          {data.mdx.frontmatter.videoSourceURLThree && (
            <Box paddingTop="10">
              <ReactPlayer url={data.mdx.frontmatter.videoSourceURLThree} controls={true} width="auto" />
              <Text textAlign={'center'} mt={'4'} fontWeight={'light'}>
                {data.mdx.frontmatter.videoTitleThree}
              </Text>
            </Box>
          )}
          {data.mdx.frontmatter.videoSourceURLFour && (
            <Box paddingTop="10">
              <ReactPlayer url={data.mdx.frontmatter.videoSourceURLFour} controls={true} width="auto" />
              <Text textAlign={'center'} mt={'4'} fontWeight={'light'}>
                {data.mdx.frontmatter.videoTitleFour}
              </Text>
            </Box>
          )}
          {/* end conditional rendering */}
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
        videoSourceURLTwo
        videoSourceURLThree
        videoSourceURLFour
        videoTitle
        videoTitleTwo
        videoTitleThree
        videoTitleFour
      }
    }
  }
`;

export default VideoPage;
