import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { Container, Title } from "../styles/styles";
import React from "react";
import Intro from "../components/index/Intro";
import Skills from "../components/index/Skills/Skills";
import ContactSection from "../components/Contact/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Intro />
      <Skills />
      <Container>
        <Title style={{ marginTop: "2rem" }}>Recent work (coming soon)</Title>
      </Container>
      <ContactSection />
      <Footer />
    </Layout>
  );
}
