import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Brands from '@sections/Brands';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Change from '@sections/Change';

//eslint-disable-next-line
import Team from '@sections/Team';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Brands />
    {/*<Team />*/}
    <Change />
    <Faq />
    <Footer />
  </Layout>
);

export default IndexPage;
