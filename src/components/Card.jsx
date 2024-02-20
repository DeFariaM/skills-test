import RightArrow from "../icons/RightArrow";

const Card = ({ title, redirect, description, action }) => {
  const img = title.split(" ");
  const image = img[0].toLowerCase();

  return (
    <div className=" mx-auto mt-10 w-[90%] justify-center text-center md:w-[50vw] lg:w-[25vw]">
      <img src={`src/assets/${image}.svg`} alt="" className="mx-auto w-10" />

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
