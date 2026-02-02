import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Section from "./Section";
import image1 from "./assets/image1.avif"
import icon1 from "./assets/icon1.svg"
import image2 from "./assets/image2.avif"
import icon2 from "./assets/icon2.svg"

function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Section
    image={image1}
    icon={icon1}
    title="Commercial Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.
This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`} 
    reverse={true}
    />
    <Section
    image={image2}
    icon={icon2}
    title="Residential Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    />

    </>
  )
}

export default App
