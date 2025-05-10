const testimonials = [
  { name: "Alice Johnson", role: "CTO", company: "TechHub", review: "SoftSell made license selling a breeze!" },
  { name: "Mark Lin", role: "IT Lead", company: "NetCloud", review: "Quick process and excellent support." },
];

const Testimonials = () => (
  <section className="py-16 px-4 text-center">
    <h2 className="text-2xl font-semibold mb-8">Customer Testimonials</h2>
    <div className="grid sm:grid-cols-2 gap-8">
      {testimonials.map((t, i) => (
        <div key={i} className="bg-white p-6 shadow rounded">
          <p className="italic mb-4">"{t.review}"</p>
          <h4 className="font-bold">{t.name}</h4>
          <span className="text-sm text-gray-600">{t.role}, {t.company}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Testimonials;
