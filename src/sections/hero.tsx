import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <section id="home" className="flex overflow-hidden min-h-screen w-[100%] flex-col p-4 items-center justify-center bg-[url('https://codewithsadee.github.io/portfolio/assets/images/hero-bg.jpg')] bg-cover text-stone-100">
      <div className="flex mt-20 flex-col items-center justify-center gap-10 text-center lg:flex-row-reverse lg:px-4 lg:text-left xl:px-8">
        <div className="relative w-4/12 lg:w-6/12 xl:w-4/12">
          <img
            className="w-full rounded-lg"
            src="https://codewithsadee.github.io/portfolio/assets/images/hero-banner.jpg"
            alt=""
          />
          <img
            src="https://codewithsadee.github.io/portfolio/assets/images/rotate-img.png"
            alt=""
            className="[@keyframes_spin:{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}] absolute bottom-[-2rem] left-[-4rem] hidden h-32 w-32 [animation:spin_9s_linear_infinite] lg:block"
          />
          <div className="hidden items-center w-52 gap-2 px-2 bg-stone-200 py-5 text-stone-800 lg:flex absolute rounded-lg top-3 left-[-9rem]">
            <p className="text-blue-400 text-5xl">12</p>
            <p className="capitalize font-bold w-6/12">years of success</p>
          </div>
          <div className="hidden items-center w-56 gap-2 px-3 bg-stone-200 py-5 text-stone-800 lg:flex absolute rounded-lg bottom-3 right-[-9rem]">
            <p className="text-red-400 text-4xl">800+</p>
            <p className="capitalize font-bold ">projects completed</p>
          </div>
          
        </div>
        <div>
          <p className="font-Barlow text-xl font-semibold lg:text-2xl">
            Hello I'm
          </p>
          <h1 className="font-Barlow text-4xl font-semibold capitalize lg:text-6xl">
            mohamed atia
          </h1>
          <p className="font-Barlow py-4 text-lg font-semibold lg:text-xl">
            Web Developer from cairo
          </p>
          <p className="pb-5">
            Adipisicing elit. Neque nulla voluptatum eos repellat deserunt
            nesciunt tempore porro totam.
          </p>
          <div className="mx-auto flex w-5/12 flex-col items-center gap-2 sm:flex-row sm:gap-4 lg:ms-0">
            <Button
              className="font-Barlow rounded-full p-6 text-lg font-semibold capitalize"
              size={"lg"}
            >
              get a quote
            </Button>
            <Button
              className="font-Barlow rounded-full text-lg font-semibold capitalize"
              variant={"ghost"}
            >
              about me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
