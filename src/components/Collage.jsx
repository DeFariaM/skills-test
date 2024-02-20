const Collage = () => {
  return (
    <div
      id="collage"
      className="mx-auto flex w-[90%] flex-col items-center justify-between py-20 
    md:w-full xl:flex-row"
    >
      <div className=" items-center space-y-10  p-10 lg:w-[60%]">
        <h1 className="text-5xl font-semibold md:text-nowrap">
          No long-term contracts.
          <br />
          No catches.
        </h1>
        <p className="text-xl text-secondary">
          Start your 30-day free trial today.
        </p>

        <div className="flex flex-col space-y-5 md:flex-row md:space-x-5 md:space-y-0">
          <button className="rounded-md bg-btn-secondary px-3 py-2 font-semibold text-tertiary transition-colors duration-300 hover:bg-[#e2d9f8]">
            Learn more
          </button>
          <button className="rounded-md bg-btn-primary px-3 py-2 font-semibold text-brand-primary transition-colors duration-300 hover:bg-[#6f4fbe]">
            Get started
          </button>
        </div>
      </div>

      <div
        id="grid-collage"
        className="mx-auto grid w-[100%] grid-cols-1 justify-center gap-4  md:grid-rows-2 xl:w-[50%]"
      >
        <div className="mx-auto grid w-full grid-cols-1 gap-4  md:w-fit md:grid-cols-2 md:items-end">
          <div className="flex max-h-[350px] items-center justify-center overflow-hidden md:max-h-[160px] md:max-w-[160px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/2ffb/3f90/082578fda9798bd8cc628aa5cb1463af?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HkTbBu0TSj3LyT26nvRY61z8XtrwiX81NrRu9KbSiVDnM-Ge~ta5ZOdu3SxsrU-1plFNnzBsv085ZE7L7yCdGi0GS9JAWLYAd9X4ooFgxrMs51SeStye2y9ANVPTVmyMg6ucZHGFebzqP~qXyEEaSDUTaWB6yfh2VmkpEd8waTfjOVXYuFT48Wbfzx3luedJBu37gVRNO~0iNWIT2LxJDC~eFfSBNUXeyYKwckgRezXgQ7YipRA7MpvQKG3b~Vz2iGZ7QIYKodB7zAvYF6pjanAxmLNobf2v-TvQnNsR28vrCb44pm2cnyptBlb8SSs27xteCSB-qXT-uVgkAUs0fQ__"
              alt=""
              className="mt-20 md:mt-0"
            />
          </div>
          <div className="flex max-h-[350px] items-center justify-center overflow-hidden md:h-[240px] md:w-[160px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/5429/041b/86654d042b1c5b566ab1873ad747482a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Sssrey3ahcanBz0Fg7ZpGYh58l7ajB-YKmu8MyUgsUmL2mCOC8JLSaDQItYCB-7ZHoyCq21SifXXsjdH-5OjUFTnbnoi2oF1fLV2kBVwECt-1gx2hQc~Oe0exaHcBhPsVNYhl2cowd-EHtPani2qFyxOU~mRztk9v75JjYMM8N3HDzOgR~hRlKDfc194P4SG9Vupgt39aUwF9idVDEvBlwfRl6B3DzpRhzvmpFKtlzk1yFIFoPg9dH4MJkH7X1b75tQBJ~kVHnr155JCPpmyj6THFbrv0yaFI~IYOJTvyDevIsN-SYc~22KUjV5iLIKqcMZyJBFUpyqLBtXr-mJ3xA__"
              alt=""
              className="mt-80 md:mt-0"
            />
          </div>
        </div>
        <div className="mx-auto grid w-full grid-cols-1 gap-3 md:w-fit md:grid-cols-3">
          <div className=" flex max-h-[350px] items-center justify-center overflow-hidden md:h-[128px] md:w-[192px] md:items-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/ce73/984b/bc8b352acfe2b2b08818214d271a8e75?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=c9k5-4AwIaEbVq4N~31PQshy1eCGtiEtmD4RYGqrf-oZxvzpdzDuGzF5bUZ9tRLFOv2EzWKZ9Qb1FdGEmVdvK9cahKkJ8Bq9gv8hMwMVzZj5-VYuYcYLIz4Q8qm-fxSizMQD~HEJJj6IvQF8FVnPB0d2I-dbYcTfxp9YuPcHtJdr6AXHVyh8J39Pe4cka9fSOfktKzfrUu-qNLmK1theUb9ntw8TIkj3-FWiv8CMwEnOMh1GI6ctI7HY0bs1MvsAHuzLslKHcrTRWoUY9DO9fzYO8ZD0JhbBdG2H395m5-l6M3eg6cxGqLkssWoob7IWJEnN4Sw~vDrFkYhaiMH16Q__"
              alt=""
              className=""
            />
          </div>
          <div className="flex max-h-[350px] items-center overflow-hidden md:mx-auto md:h-[240px] md:w-[160px] md:items-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/0866/75e1/194fea8498195cac5336b1fa679e82c2?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NPM97zk1C~WdHFUkF4Ts~JYpzY7t4t1QUDtgqXxqRLP0bJIqw7sWoO3I9eEIkLDPAZ0j3p4iSrB92ct3qyPk-GU0Qnv1P2vZJ8gp8tYC9wgZawQbUZiMZUl6lVowSOFMX2OQN09JsHozOYY8CAZB51V9fHYrOdG1ntaPFb7ps3LJcQekzQdNPAU5Mqex4lMMfdVf5j82Ajbhvu1PGBj7xab~XzuoSQp-ExrrGRp16BCnegmIbxu~QJ3j-teuv~B9MqiU~9nz35Br3fdvOhaEwlP-463pMH5byuOuztTfKBPe7vl8naR8t8noumfMpRu-1p4p0QV8TY4gBNs-NfgFhw__"
              alt=""
              className="mt-24 md:mt-0"
            />
          </div>
          <div className="mx-auto flex max-h-[350px] items-center justify-center overflow-hidden md:h-[128px] md:w-[192px] md:items-start">
            <img
              src="https://s3-alpha-sig.figma.com/img/cebe/a7e0/4b9d293dbdedf2f0b205f66900fd7697?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZOsaJhSh2L2~ZyI4RAeOJ0OzXmA8x395tdUmrZk6xF1dk2H5VHjdmSbtDzAPwiht8hLyGNcaj0i4Yr8~lFv8b1klpVCNKWnT0ScER9hrBCR6f052ouCQxWm7bPIb6LbV2CJMquell99p5ZidW7j6arIIKd-GFGpsVpUxEsevS8l4LMLj6i2NQ0A7apeIVgtEWgZ72iLTvbwpKRkH5QAlVcZoJ~3pWWezPY~HyqqACBcr3z4dBAITWrgni9KdjIBul9v0x9VS8xDOHyFAvpNvgs2BslWa5gUgwv~UHzWXKiQ3OeFXEABO~aKZwZ4PBSGoQaTCqn6F-qOwL3lbF1lbaw__"
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collage;
