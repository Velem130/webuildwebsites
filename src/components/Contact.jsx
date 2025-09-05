import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
        alert("Message sent successfully!");
      }, (error) => {
        alert("Something went wrong.");
      });

    e.target.reset();
  };

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-2xl mx-auto grid gap-6">
        <input name="name" type="text" placeholder="Your Name" required className="p-3 border rounded" />
        <input name="email" type="email" placeholder="Your Email" required className="p-3 border rounded" />
        <textarea name="message" rows="5" placeholder="Your Message" required className="p-3 border rounded"></textarea>
        <button type="submit" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;

