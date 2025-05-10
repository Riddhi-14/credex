const features = [
  { title: "Trusted Platform", desc: "Secure and verified resale." },
  { title: "Fast Payments", desc: "Get paid within 48 hours." },
  { title: "Best Valuation", desc: "Maximize the worth of your software." },
  { title: "24/7 Support", desc: "We're always here to help." },
];

const WhyChooseUs = () => (
  <section className="py-16 px-4 bg-gray-100 text-center">
    <h2 className="text-2xl font-semibold mb-8">Why Choose Us</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((item, i) => (
        <div key={i} className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-bold mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default WhyChooseUs;
