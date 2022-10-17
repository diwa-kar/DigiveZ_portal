import React from "react";
import styles from "../style";

import Business from "./Business";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Testimonials from "./Testimonials";

const Landing = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          {/* <Billing>

                </Billing>
                <CardDeal>

                </CardDeal>
                <Clients>

                </Clients> */}
          <Testimonials></Testimonials>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Landing;
