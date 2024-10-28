import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import IconLink from "./IconLink";

export const ContactForm: React.FC = () => {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(null);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    setSending(true);
    setError(null);
    e.preventDefault();

    const honeypot = form.current?.callme.value;
    if (honeypot || !form.current) {
      setSending(false);
      return;
    }

    emailjs
      .sendForm("service_sbxbixk", "template_m6y42ra", form.current, {
        publicKey: "iy7zxcwTCjslZKTss",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSending(false);
        },
        (error) => {
          console.log("FAILED...", error.text, error);
          setError(error.text);
          setSending(false);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="bg-zinc-700/10 backdrop-blur-md p-6 rounded-md"
    >
      {error && (
        <div className="w-full p-3 bg-red-500 text-zinc-950 border border-zinc-900">
          {error ?? ""}
        </div>
      )}
      <div className="mb-4">
        <label className="block text-cyan-600 font-bold mb-2">Name:</label>
        <input
          type="text"
          name="user_name"
          className="w-full text-zinc-50 p-2 border border-cyan-600 rounded-md bg-transparent"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-600 font-bold mb-2">Email:</label>
        <input
          type="email"
          name="user_email"
          className="w-full text-zinc-50 p-2 border border-cyan-600 rounded-md bg-transparent"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-cyan-600 font-bold mb-2">Message:</label>
        <textarea
          name="message"
          className="w-full text-zinc-50 p-2 border border-cyan-600 rounded-md bg-transparent"
          required
        />
      </div>
      <div style={{ display: "none" }}>
        <label>Call Me:</label>
        <input
          type="text"
          name="callme"
          className="w-full p-2 border border-cyan-600 rounded-md"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex">
          <IconLink
            showIcon={false}
            icon="linkedin"
            text="LinkedIn"
            url="https://www.linkedin.com/in/karsten-t-ab62982b4/"
            customClasses="text-4xl"
          />
          <IconLink
            showIcon={false}
            icon="github"
            text="Github"
            url="https://github.com/ktauchert"
            customClasses="text-4xl"
          />
          {/* <IconLink
            showIcon={false}
            icon="mail"
            text="E-Mail"
            url="mailto:developer@ktauchert.de"
          /> */}
        </div>
        <button
          disabled={sending}
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
        >
          {sending ? "Sending..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
