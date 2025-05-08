import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const ContactSection = ({ handleSubmit, handleChange, errors }) => {
  const { theme } = useTheme();

  const inputClasses = `w-full px-4 py-3 rounded-md border text-sm transition focus:outline-none ${
    theme === 'light'
      ? 'bg-white text-black border-gray-300 focus:border-black'
      : 'bg-gray-900 text-white border-gray-700 focus:border-white'
  }`;

  return (
    <section
      id="contact"
      className={`py-20 px-6 ${
        theme === 'light' ? 'bg-gray-100 text-black' : 'bg-black text-white'
      }`}
    >
      <motion.h2
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {['name', 'email', 'company'].map((field, i) => (
          <motion.div key={field} custom={i} variants={fadeInUp}>
            <input
              className={inputClasses}
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              onChange={handleChange}
            />
            {errors?.[field] && (
              <span className="text-red-500 text-sm">{errors[field]}</span>
            )}
          </motion.div>
        ))}

        <motion.div custom={3} variants={fadeInUp}>
          <select className={inputClasses} name="license" onChange={handleChange}>
            <option value="">Select License Type</option>
            <option value="office">Microsoft Office</option>
            <option value="adobe">Adobe Suite</option>
            <option value="other">Other</option>
          </select>
          {errors?.license && (
            <span className="text-red-500 text-sm">{errors.license}</span>
          )}
        </motion.div>

        <motion.div custom={4} variants={fadeInUp}>
          <textarea
            className={inputClasses}
            name="message"
            placeholder="Message"
            rows="4"
            onChange={handleChange}
          />
        </motion.div>

        <motion.div custom={5} variants={fadeInUp}>
          <button
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-6 rounded-md text-lg font-semibold shadow-md hover:shadow-xl transition duration-300"
            type="submit"
          >
            Send Message
          </button>
        </motion.div>
      </motion.form>
    </section>
  );
};

export default ContactSection;
