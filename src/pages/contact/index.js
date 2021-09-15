import * as React from 'react';
import Layout from '../../components/Layout';
import { FcGoogle } from 'react-icons/fc';
import { Button, Center, Text, Stack } from '@chakra-ui/react';

//todo: add images and contact info

const ContactPage = () => {
  return (
    <main>
      <Layout>
        <Center p={8}>
          <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
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
      </Layout>
    </main>
  );
};

export default ContactPage;
