import React from "react";

import { Layout, Main, Header } from "../Layout";
import WhatsIn from "../Logos/WhatsIn";

const Template = props => (
  <Layout>
    <Main>
      <Header>
        <WhatsIn />
      </Header>
      {props.children}
    </Main>
  </Layout>
);

export default Template;
