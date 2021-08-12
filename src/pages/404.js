import React from 'react';

import Layout from '@common/Layout';
import { Container } from '@components/global';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <center>
      <img src="https://user-images.githubusercontent.com/65679392/129124732-d4cdaead-4700-4ff1-a6fc-3e8acb61c62f.png" alt="person lost" width="600" height="450"/>
      <h1>404 NOT FOUND</h1>
      <br/>
      <br/>
      <br/>
      <p>Whoops... It seems like your lost. <a href="/">Go Home</a></p>
      </center>
    </Container>
  </Layout>
);

export default NotFoundPage;
