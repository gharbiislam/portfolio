import React, { useState } from 'react';

export const Contact = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const response = await fetch("http://localhost/dashboard/islem_port/sendMail.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.text();

      if (result.includes("success")) {
        setStatus("Message sent successfully!");
      } else {
        setStatus(" Failed to send message.");
        console.error(result); 
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setStatus(" Could not connect to the server.");
    }

    e.target.reset();
  };

  return (
        <div className=' mx-auto   flex flex-col justify-center'>
        <div className='container mx-auto px-4 sm:px-8  flex flex-col justify-center' id='contact'>
        <h2 className="">Get in Touch</h2>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="mb-6">
              Whether you have a project idea, a question, or just want to say hello — I’d love to hear from you.
            </p>
          </div>

          <div className="md:col-span-7">
            <form onSubmit={handleSubmit}>
              <div className="md:flex md:gap-4 mb-4">
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="Insert your full name"
                  className="w-full mb-4 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-teal-600"
                />
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="Insert your email"
                  className="w-full mb-4 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-teal-600"
                />
              </div>

              <input
                name="subject"
                type="text"
                required
                placeholder="Insert your subject"
                className="w-full mb-4 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-teal-600"
              />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Insert your message"
                className="w-full mb-4 px-5 py-2.5 text-base text-gray-900 bg-transparent border border-gray-300 rounded-xl placeholder-gray-400 focus:outline-teal-600"
              ></textarea>

              <input
                type="submit"
                value="Send message"
                className="bg-teal-800 px-6 py-3 text-white rounded-xl hover:bg-teal-900 transition-colors duration-200 cursor-pointer"
              />
            </form>

            {status && <p className="mt-4 text-sm text-teal-800">{status}</p>}
          </div>
        </div></div>
        <footer className='mt-24'>
          <hr className="border-t border-teal-800 opacity-55 " />
          <p className="text-sm text-gray-400 text-center my-4">&copy; {new Date().getFullYear()} Islem Gharbi. All rights reserved.</p>

        </footer>
      </div>
    
  );
};
