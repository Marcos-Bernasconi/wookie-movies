type url = {
  imageUrl: string;
};

export function Movie({ imageUrl }: url) {
  return (
    <>
      <div className="z-0 h-[10rem]  w-[15rem] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl  bg-neutral-400 shadow-xl transition-transform	 hover:scale-[0.98]  md:h-[13rem] md:w-[22rem] ">
        <img
          className="h-full object-cover"
          src={imageUrl}
          alt="Movie Thumbnail"
        />
      </div>
    </>
  );
}
