import { type NextPage } from 'next';
import Head from 'next/head';
import { UploadButton } from '@uploadthing/react';
import { type OurFileRouter } from '~/server/uploadthing';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <UploadButton<OurFileRouter>
          endpoint='imageUploader'
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log('Files: ', res);
            alert('Upload Completed');
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </main>
    </>
  );
};

export default Home;