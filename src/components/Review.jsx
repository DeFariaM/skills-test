const Review = () => {
  return (
    <div id="review" className="banner-brand w-[90%] lg:w-full">
      <div className=" h-[500px] w-[100%]  overflow-hidden  lg:h-auto lg:w-[50%]">
        <img
          src="https://s3-alpha-sig.figma.com/img/736d/3947/f97451506ea4b1ef2f26c7028f66a221?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=o673mqwKljujT6u9fZZiqyEfOtfS7at95~5iy61JEQbUJPsv77iD7Y4zVotM~YL7wLVQO1EtUqz6N1AE5pIPCXJbsy17UEjjtedfPOLcWMi0wKrElRa0ofGc-egCPDSzOohEq5okzWm3G4LW3mTVHbDmQyIVViIgyMsgviKlKbesChkGLMAExlQjMqS0ah9GiMKzIS0ajmbpjAOQSuy-A5EmloXz4c2Aa3EUNVfhPpuvYihkvfuXUDtXSeCOr-holCO6ECuYRolBNLA6oP4A50QLcMPzFSEDQDvOThUQalpTtuYcv1HVJtSaMFKrEDSri8jbfG8LX43~ybb0cbD~lg__"
          alt=""
          className="-mt-36 w-full lg:-mt-0"
        />
      </div>
      <div className="w-[110%] space-y-10 p-20 lg:w-[50%]">
        <div className="space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <span key={index} className="text-3xl text-yellow-400">
              &#9733;
            </span>
          ))}
        </div>
        <p className="text-4xl text-brand-primary">
          Love the simplicity of the service and the prompt customer support.{" "}
          <br />
          We can't imagine working without it.
        </p>
        <div>
          <p className="mb-3 text-lg font-medium text-brand-primary">
            - Renee Wells
          </p>

          <span className="text-brand-secondary">
            Product designer, Quotient
          </span>
        </div>
        <span></span>
      </div>
    </div>
  );
};

export default Review;
