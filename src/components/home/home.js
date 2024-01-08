import React from "react";

import Speakers from "../speakers/speakers";
import Sponsors from '../sponsors/sponsors';
import About from "../about/about";
import Footer from "../footer/footer";

function Home(){
  return (
    <>
    <Speakers />
    <Sponsors />
    <About />
    <Footer />
    </>

  )
}
export default Home;