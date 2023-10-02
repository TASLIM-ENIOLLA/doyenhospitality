import { Fragment } from "react";

import Landing from "@/components/Landing";
import Features from "@/components/Features";
import Topics from "@/components/Topics";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <Fragment>
      <Landing />
      <Features />
      <Topics />
      <Services />
      <About />
      <Testimonials />
      <Inquiry />
      <Footer />
    </Fragment>
  ); 
}