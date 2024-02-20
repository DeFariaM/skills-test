import Card from "../Card";

const Features = () => {
  const data = [
    {
      title: "Share team imboxes",
      description:
        "Wheter you have a team of 2 or 200, our shared team imboxes keep everyone on the same page and in the loop.",
    },
    {
      title: "Deliver instant answers",
      description:
        "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    },
    {
      title: "Manage yout team with reports",
      description:
        "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks",
    },
  ];
  return (
    <div className="container mx-auto justify-center text-center">
      <div className="space-y-10">
        <h1 className="text-4xl font-semibold">
          Cutting-edge features for advanced analytics
        </h1>
        <p className="mx-auto text-xl text-secondary md:w-[48%]">
          Powerful, self-serve product and growth analytics to help you convert,
          engage, and retain more users. Trusted by over 4,000 startups.
        </p>
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-20">
        {data &&
          data.map(({ title, description }, index) => (
            <Card
              title={title}
              description={description}
              key={index}
              action="Learn more"
            />
          ))}
      </div>
    </div>
  );
};

export default Features;
