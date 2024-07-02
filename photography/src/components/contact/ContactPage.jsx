import React from "react";
import ContactForm from "./ContactForm";
import ContactImg from "../../assets/contact/contact.jpeg";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white relative">
      {/* Background Image */}
      <div className="relative w-full h-[75vh]">
        <img
          src={ContactImg}
          alt="Jordan"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      {/* Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-start p-6">
        <section className="bg-black bg-opacity-70 p-6 rounded-lg max-w-lg ml-10">
          <h2 className="text-4xl font-bold mb-4 text-left">Get In Touch</h2>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
