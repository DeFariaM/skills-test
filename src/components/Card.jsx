import {
  GoogleDrive,
  Notion,
  Slack,
  Intercom,
  Jira,
  Dropbox,
  Share,
  Deliver,
  Manage,
} from "../icons";
import RightArrow from "../icons/RightArrow";

const Card = ({ title, redirect, description, action }) => {
  const img = title.split(" ");
  const icon = img[0].toLowerCase();

  return (
    <div className=" mx-auto mt-10 w-[90%] justify-center text-center md:w-[50vw] lg:w-[25vw]">
      <div>
        {icon == "notion" && <Notion className="mx-auto h-10 w-10" />}
        {icon == "google" && <GoogleDrive className="mx-auto h-10 w-10" />}
        {icon == "slack" && <Slack className="mx-auto h-10 w-10" />}
        {icon == "intercom" && <Intercom className="mx-auto h-10 w-10" />}
        {icon == "jira" && <Jira className="mx-auto h-10 w-10" />}
        {icon == "dropbox" && <Dropbox className="mx-auto h-10 w-10" />}
        {icon == "share" && (
          <Share className="mx-auto h-12 w-12 rounded-lg border-[1px] border-[#EAECF0] p-3" />
        )}
        {icon == "deliver" && (
          <Deliver className="mx-auto h-12 w-12 rounded-lg border-[1px] border-[#EAECF0] p-3" />
        )}
        {icon == "manage" && (
          <Manage className="mx-auto h-12 w-12 rounded-lg border-[1px] border-[#EAECF0] p-3" />
        )}
      </div>
      <h1 className="mb-2 mt-5 text-xl font-semibold">{title}</h1>
      <p className="mb-5 text-secondary">{description}</p>
      <div className="flex items-center justify-center space-x-2 font-semibold text-tertiary">
        <a href={redirect} target="_blank">
          {action}
        </a>
        <RightArrow />
      </div>
    </div>
  );
};

export default Card;
