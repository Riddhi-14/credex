import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", license: "", message: "" });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-16 px-4 bg-white">
      <h2 className="text-2xl font-semibold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto grid gap-4">
        <input type="text" name="name" placeholder="Name" required className="border p-2 rounded" onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required className="border p-2 rounded" onChange={handleChange} />
        <input type="text" name="company" placeholder="Company" className="border p-2 rounded" onChange={handleChange} />
        <select name="license" className="border p-2 rounded" required onChange={handleChange}>
          <option value="">Select License Type</option>
          <option value="Office">Office</option>
          <option value="Adobe">Adobe</option>
          <option value="Antivirus">Antivirus</option>
        </select>
        <textarea name="message" placeholder="Your Message" rows={4} className="border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
      </form>
    </section>
  );
};

export default ContactForm;
