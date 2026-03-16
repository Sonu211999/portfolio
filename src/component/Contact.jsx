import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // ✅ Define backend URL outside fetch
  const backendUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${backendUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error("Submit error:", err);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-169 bg-gradient-to-tr from-[#020024] to-[#090979] text-white py-16 px-6 md:px-20 overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm pointer-events-none z-0" />

      <h2 className="text-4xl font-bold text-center mb-10 text-pink-400 relative z-10">
        Contact Me
      </h2>

      <div className="max-w-xl mx-auto relative z-10">
        {/* 📩 Contact Form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md 
                     transition-all duration-500 transform  
                     hover:shadow-[0_0_25px_2px_#f472b6]"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mb-4 rounded bg-gray-800 text-white focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded font-medium"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl text-white">
            <h3 className="text-pink-400 font-semibold text-xl mb-2">Thank You!</h3>
            <p className="mb-1"><strong>Name:</strong> {formData.name}</p>
            <p className="mb-1"><strong>Email:</strong> {formData.email}</p>
            <p><strong>Message:</strong> {formData.message}</p>
          </div>
        )}

        {/* 🔗 Social Links */}
        <div className="text-center mt-10 space-y-2">
          <p>or connect with me here:</p>
          <div className="flex justify-center gap-6 text-lg text-pink-400">
            {[
              { name: "GitHub", href: "https://github.com/Sonu211999" },
              { name: "LinkedIn", href: "https://www.linkedin.com/in/sonu211999/" },
              { name: "Email", href: "sonupandeykumar6313@gmail.com" },
            ].map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="relative inline-block after:content-[''] after:block after:w-0 after:h-[2px]
                           after:bg-pink-400 after:transition-all after:duration-300
                           hover:after:w-full after:absolute after:bottom-0 after:left-0"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
