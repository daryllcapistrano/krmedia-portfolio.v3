import * as React from 'react';
import { graphql } from 'gatsby';
import GatsbyLink from 'gatsby-link';
import { Box, Container, Text, HStack } from '@chakra-ui/layout';
import ReactPlayer from 'react-player/lazy';
import Layout from '../../components/Layout';
import { Link } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import { GrLinkPrevious } from 'react-icons/gr';

const VideoPage = ({ data }) => {
  const title = data.mdx.frontmatter.title;

  return (
    <Layout>
      <Helmet defaultTitle="Keaton Rodgers Media" title={title} />
      <Container my={'8'}>
        <Box paddingTop="2">
          <HStack justifyContent={'space-between'} mb={'8'}>
            <Link as={GatsbyLink} to="/videography">
              <GrLinkPrevious />
            </Link>
            <Text textAlign={'center'} fontWeight={'light'}>
              {data.mdx.frontmatter.videoTitle}
            </Text>
          </HStack>
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
