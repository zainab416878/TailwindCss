import React from "react";

const Footer = () => {
    return (
        <>
        <div className="px-30 py-10 flex justify-between bg-gray-100 flex-col md:flex-row">
            <div className="px-10 bg-gray-100">
                <p className="font-bold text-2xl">MCR</p>
                <p>Construction</p>
            </div>
            <div className="px-10 bg-gray-100">
                <h2 className="text-2xl font-medium mb-8">Head Office</h2>
                <p>500 Terry Francine Street</p>
                <p className="mb-8">San Francisco, CA 94158</p>
                <p>123-456-7890</p>
                <p>info@mysite.com</p>

            </div>
            <div className="px-10 bg-gray-100">
                <h2 className="text-2xl font-medium mb-8">Socials</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Linkedin</p>

            </div>
            <div className="px-10 bg-gray-100">
                <h2 className="text-2xl font-medium mb-8">Inquiries</h2>
                <p>For any inquiries, questions</p>
                <p>or commendations, please</p>
                <p>Call: 123-456-7890</p>
            </div>
            <div className="px-10 bg-gray-100 flex items-center">
                <button className="px-15 py-2 bg-orange-500 hover:bg-gray-100 hover:border border-black mt-5 md:mt-none">Contact Us</button>
            </div>

        </div>
        </>
    )


}

export default Footer