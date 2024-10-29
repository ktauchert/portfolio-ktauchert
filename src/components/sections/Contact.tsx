"use client";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[calc(100vh-160px)] mb-20">
      <div className="page-title w-full">
        <h2 className="text-center text-4xl text-orange-600 text-bold uppercase tracking-wider my-20">
          Contact
        </h2>
      </div>
      <div className="page-content flex flex-col justify-center items-center w-full overflow-hidden">
        <div className="lg:w-[50%] w-full">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
