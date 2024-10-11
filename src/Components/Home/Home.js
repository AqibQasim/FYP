import React from "react";
import Hero from "../Hero/Hero";
import Work from "../Howitwork/Work";
import FAQ from "../FAQ/FAQ";
import ContactForm from "../Contact/ContactForm";
const Home = () =>{
    return(
        <div>
            <Hero />
            <Work />
            <FAQ />
            <ContactForm />
        </div>
    )
};
export default Home;