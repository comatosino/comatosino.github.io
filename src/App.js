import React from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Carousel from "./components/Carousel/Carousel";
import Intro from "./pages/Intro/Intro";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Carousel />
      </main>
      <Footer />
    </>
  );
}
