import React, { lazy } from "react";
import "./index.scss";

const Layout = lazy(() => import("../../Components/Layout"));
const Horizontal = lazy(() => import("../../Components/FakeHorizal"));

const Home = () => {
  return (
    <Layout>
      <Horizontal />
    </Layout>
  );
};

export default Home;
