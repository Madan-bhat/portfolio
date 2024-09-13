import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Contact Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-4 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
            ></textarea>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-white text-black font-semibold rounded-md shadow-md hover:bg-gray-200 transition-colors duration-300"
            >
              Send
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
