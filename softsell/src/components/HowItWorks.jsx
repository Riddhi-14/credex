const steps = [
  { icon: "⬆️", title: "Upload License" },
  { icon: "📊", title: "Get Valuation" },
  { icon: "💸", title: "Get Paid" },
];

const HowItWorks = () => (
  <section className="py-16 px-4 text-center">
    <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
    <div className="grid sm:grid-cols-3 gap-8">
      {steps.map((step, i) => (
        <div key={i} className="bg-white shadow-md p-6 rounded">
          <div className="text-4xl mb-4">{step.icon}</div>
          <h3 className="text-lg font-medium">{step.title}</h3>
        </div>
      ))}
    </div>
  </section>
);

export default HowItWorks;
