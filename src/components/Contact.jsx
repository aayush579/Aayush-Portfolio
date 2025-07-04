import React from 'react';

const Contact = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#0e0e14] text-gray-200">
      <h2 className="text-3xl font-bold text-purple-400 mb-4">Contact</h2>
      <form className="flex flex-col gap-4 max-w-xl">
        <input type="text" placeholder="Your Name" className="p-3 rounded bg-[#1e1e2f] border border-gray-700" />
        <input type="email" placeholder="Your Email" className="p-3 rounded bg-[#1e1e2f] border border-gray-700" />
        <textarea placeholder="Message" rows="5" className="p-3 rounded bg-[#1e1e2f] border border-gray-700"></textarea>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
