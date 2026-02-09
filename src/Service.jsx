import React from "react";
import Hero from "./Hero";
import Section from "./Section";
import image1 from "./assets/image1.avif"
import icon1 from "./assets/icon1.svg"
import image2 from "./assets/image2.avif"
import icon2 from "./assets/icon2.svg"
import icon3 from "./assets/icon3.png"
import image3 from "./assets/image3.avif"
import icon4 from "./assets/icon4.png"
import image4 from "./assets/image4.avif"
import icon5 from "./assets/icon5.png"
import image5 from "./assets/image5.avif"
import icon6 from "./assets/icon6.png"
import image6 from "./assets/image6.avif"
import icon7 from "./assets/icon7.png"
import image7 from "./assets/image7.avif"
import icon8 from "./assets/icon8.png"
import image8 from "./assets/image8.avif"


const Service = () => {
    return (
        <div>
    <Hero/>
    <Section
    image={image1}
    icon={icon1}
    title="Commercial Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`} 
    reverse={true}
    />

    <Section
    image={image2}
    icon={icon2}
    title="Residential Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={false}
    />

    <Section
    image={image3}
    icon={icon3}
    title="Pre-Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={true}
    />

    <Section
    image={image4}
    icon={icon4}
    title="Special Projects"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={false}
    />

    <Section
    image={image5}
    icon={icon5}
    title="Site Management"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={true}
    />

    <Section
    image={image6}
    icon={icon6}
    title="Infrastructure Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={false}
    />
        
    <Section
    image={image7}
    icon={icon7}
    title="Civil Engineering"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={true}
    />

    <Section
    image={image8}
    icon={icon8}
    title=  "Landscape Construction"
    text={`I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide.`}
    reverse={false}
    />

    <div className="px-30 bg-gray-100 my-8">
  <div className="px-30 h-[0.5px] bg-black"></div>
</div>


    

        </div>
    )
}

export default Service