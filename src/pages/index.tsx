import { Fragment } from "react";

import Landing from "@/components/Landing";
import Topics from "@/components/Topics";
import Services from "@/components/Services";
import Inquiry from "@/components/Inquiry";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";

export default function Page() {
  return (
    <Fragment>
      <Landing />
      <Services />
      <Topics />
      <Inquiry />
      <Footer />
    </Fragment>
  ); 
}
{/* <Partners />*/}
{/* <About /> */}
{/* <Testimonials />*/}