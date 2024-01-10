import React from "react";

import Speakers from "../speakers/speakers";
import Sponsors from '../sponsors/sponsors';
import About from "../about/about";
import Landing from "../landing";

function Home(){
  return (
    <>
    <Landing />
    <Speakers />
    <Sponsors />
    <About />
    </>

  )
}
export default Home;