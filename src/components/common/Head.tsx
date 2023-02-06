import Head from 'next/head';

export default function CustomHead() {
  return (
    <Head>
      <title>Picaboo</title>
      <meta name='description' content='AI picture diary app' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
}
