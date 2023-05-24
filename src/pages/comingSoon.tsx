import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

export default function ComingSoon() {
  return (
    <>
      <Navbar />
      <main className="h-fit w-screen  bg-neutral-200">
        <div className="mx-[10%] py-[4rem]">
          <h2 className=" text-3xl font-bold text-black">
            Coming soon to our streaming platform!
          </h2>
          <p className=" mt-4 max-w-[40rem]  text-neutral-600 ">
            We're introducing exciting new features that will make it easier
            than ever to discover new content and stay up-to-date with the
            latest releases.
          </p>

          <button className="mt-12 flex flex-row items-center gap-3 rounded-lg border-[1px] border-neutral-300 bg-neutral-50 px-4 py-2 text-xl font-semibold text-black">
            Subscribe to the Newsletter
          </button>
          <div className=" mt-16  h-fit w-fit">
            <img
              className="h-fit w-full object-contain"
              src="https://i.pinimg.com/564x/85/9d/3c/859d3cb7fc88962638b112a60a60fa26.jpg"
              alt=""
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
