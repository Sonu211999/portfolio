import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const backendUrl = "https://portfolio-tmpb.onrender.com";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        alert("Something went wrong");
      }
    } catch (err) {
      console.error("Error:", err);
    }

    setLoading(false);
  };

  return (
    <section className="relative w-full bg-gradient-to-tr from-[#020024] to-[#090979] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden">

      {/* Bottom Blur */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-white/5 to-transparent backdrop-blur-sm" />

      <div className="max-w-xl mx-auto">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-pink-400">
          Contact Me
        </h2>

        {/* FORM */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md space-y-4 transition hover:shadow-pink-500/40"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-pink-500 hover:bg-pink-600 py-2 rounded font-medium transition flex justify-center items-center"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        ) : (
          <div className="text-center bg-white/10 backdrop-blur-md p-6 rounded-xl">
            <h3 className="text-green-400 font-semibold text-xl mb-2">
              Message Sent ✅
            </h3>
            <p className="text-gray-300">
              Thanks, I’ll get back to you soon.
            </p>
          </div>
        )}

        {/* SOCIAL LINKS */}
        <div className="text-center mt-10 space-y-2">
          <p className="text-gray-400">Or connect with me</p>

          <div className="flex justify-center gap-6 text-lg text-pink-400">

            <a
              href="https://github.com/Sonu211999"
              target="_blank"
              className="hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/sonu211999/"
              target="_blank"
              className="hover:text-white transition"
            >
              LinkedIn
            </a>

            <a
              href="mailto:sonupandeykumar6313@gmail.com"
              className="hover:text-white transition"
            >
              Email
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;