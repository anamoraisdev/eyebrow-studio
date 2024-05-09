'use client';
import { useEffect } from "react";
import About from "./components/about";
import Contact from "./components/contact";
import Galery from "./components/galery";
import Navbar from "./components/navbar";
import Services from "./components/services";
import ThePlace from "./components/theplace";
import WorkingTime from "./components/workingTime";
import Footer from "./components/footer";

export default function Home() {

  return (
    <main className="">
      <Navbar />
      <Services />
      <WorkingTime />
      <ThePlace />
      <Galery/>
      <About/>
      <Contact/>
      <Footer/>
    </main>
  );
}
