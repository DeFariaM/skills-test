import Card from "../Card";

const Integrations = () => {
  const data = [
    {
      title: "Notion integration",
      description:
        "Work faster and smarter by integrating directly with Notion, right in the app.",
      redirect: "https://www.notion.so",
    },
    {
      title: "Slack integration",
      description:
        "Work faster and smarter by integrating directly with Slack, right in the app.",
      redirect: "https://www.slack.com",
    },
    {
      title: "Google Drive integration",
      description:
        "Work faster and smarter by integrating directly with Google Drive, right in the app.",
      redirect: "https://www.google.com/intl/es/drive/",
    },
    {
      title: "Intercom integration",
      description:
        "Work faster and smarter by integrating directly with Intercome, right in the app.",
      redirect: "https://www.intercom.com/",
    },
    {
      title: "Jira integration",
      description:
        "Work faster and smarter by integrating directly with Jira, right in the app.",
      redirect: "https://www.atlassian.com/es/software/jira",
    },
    {
      title: "Dropbox integration",
      description:
        "Work faster and smarter by integrating directly with Dropbox, right in the app.",
      redirect: "https://www.dropbox.com/",
    },
  ];
  return (
    <div id="integrations" className="container mx-auto">
      <div className="mx-auto w-[90%] space-y-6 text-center md:w-[60%]">
        <span className="etiq-section ">Integrations</span>
        <p className=" justify-center text-4xl font-semibold">
          Get more value from yout tools
          <br />
          <span className="text-xl font-normal text-secondary">
            Connect your tools, connect your teams. With over 100 apps already
            available in our directory, your team's favourite tools are just a
            click away
          </span>
        </p>
      </div>
      <div className="mx-auto w-full justify-center  md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-[8%]">
        {data &&
          data.map(({ title, description, redirect }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              redirect={redirect}
              action="View integration"
            />
          ))}
      </div>
    </div>
  );
};

export default Integrations;
