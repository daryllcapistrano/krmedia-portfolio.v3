import * as React from 'react';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { Box, Container, Text } from '@chakra-ui/layout';
import ReactPlayer from 'react-player/lazy';
import Layout from '../../components/Layout';
import { Link } from '@chakra-ui/react';

import { IoMdArrowRoundBack } from 'react-icons/io';

const VideoPage = ({ data }) => {
  return (
    <Layout>
      <Container my={'8'}>
        <Link as={GatsbyLink} to="/videography">
          <IoMdArrowRoundBack />
        </Link>
        <Box paddingTop="2">
          <Text textAlign={'center'} fontWeight={'light'}>
            {data.mdx.frontmatter.videoTitle}
          </Text>
          <ReactPlayer url={data.mdx.frontmatter.videoSourceURL} controls={true} width="auto" />
        </Box>

        {/* conditionally render multiple video instances  */}
        {data.mdx.frontmatter.videoSourceURLTwo && (
          <Box paddingTop="10">
            <Text textAlign={'center'} fontWeight={'light'}>
              {data.mdx.frontmatter.videoTitleTwo}
            </Text>
            <ReactPlayer url={data.mdx.frontmatter.videoSourceURLTwo} controls={true} width="auto" />
          </Box>
        )}
        {data.mdx.frontmatter.videoSourceURLThree && (
          <Box paddingTop="10">
            <Text textAlign={'center'} fontWeight={'light'}>
              {data.mdx.frontmatter.videoTitleThree}
            </Text>
            <ReactPlayer url={data.mdx.frontmatter.videoSourceURLThree} controls={true} width="auto" />
          </Box>
        )}
        {data.mdx.frontmatter.videoSourceURLFour && (
          <Box paddingTop="10">
            <Text textAlign={'center'} fontWeight={'light'}>
              {data.mdx.frontmatter.videoTitleFour}
            </Text>
            <ReactPlayer url={data.mdx.frontmatter.videoSourceURLFour} controls={true} width="auto" />
          </Box>
        )}
        {/* end conditional rendering */}
      </Container>
      {/* </Center> */}
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
