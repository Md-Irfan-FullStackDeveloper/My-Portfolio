import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [message, setMessage] = useState();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email && !name && !message) {
      alert("Please enter name, email and message");
      return;
    }

    emailjs
      .sendForm(
        "service_ns2njqk",
        "template_undz0v9",
        form.current,
        "t9CMMz8Fc7oNFtBGI"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email successfuly send");
        },
        (error) => {
          console.log(error.text);
          alert("Email send unsuccessful");
        }
      );

    e.target.reset();
  };

  return (
    <div
      name="contact"
      className="w-100% h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col max-w-[600px] w-100%"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Dont be a stranger! 👋
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            irfanjunaid78081@gmail.com
          </p>
        </div>
        <input
          onChange={(e) => setName(e.target.value)}
          className="bg-[gray-300] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="my-4 p-2 bg-[gray-300]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          onChange={(e) => setMessage(e.target.value)}
          className="bg-[gray-300] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <input
          type="submit"
          className="text-white cursor-pointer border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center"
          value={`Let's Collaborate`}
        />
      </form>
    </div>
  );
};

export default Contact;
