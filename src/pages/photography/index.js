import * as React from 'react';
import Layout from '../../components/Layout';
import { Grid, GridItem } from '@chakra-ui/layout';

// begin import photos
import photoOne from '../../images/photos/Poler2- thumbnail.jpg';
import photoTwo from '../../images/photos/artsy-1-thumbnail.jpg';
import photoThree from '../../images/photos/ale_artsy_resize.jpg';

// end import

const PhotographyPage = () => {
  return (
    <main>
      <Layout>
        <Grid height="100vh" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
          <GridItem rowSpan={2} colSpan={1} bg="blue.500" />
          <GridItem colSpan={2} bg="blue.500" />
          <GridItem colSpan={2} bg="blue.500" />
          <GridItem colSpan={4} bg="blue.500" />
        </Grid>
      </Layout>
    </main>
  );
};

export default PhotographyPage;
