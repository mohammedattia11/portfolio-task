import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[url('https://codewithsadee.github.io/portfolio/assets/images/hero-bg.jpg')] bg-cover text-stone-100 flex flex-col items-center justify-center ">
      <div className="text-center flex flex-col items-center justify-center gap-6 ">
        <div className="w-4/12 ">
          <img className="rounded-lg w-full" src="https://codewithsadee.github.io/portfolio/assets/images/hero-banner.jpg" alt="" />
        </div>
        <div>
          <p className="font-Barlow font-semibold text-xl">Hello I'm</p>
          <h1 className="font-Barlow font-semibold capitalize text-4xl">mohamed atia</h1>
          <p className="font-Barlow font-semibold text-lg py-4">Web Developer from cairo</p>
          <p className="pb-5">Adipisicing elit. Neque nulla voluptatum eos repellat deserunt nesciunt tempore porro totam.</p>
          <div className="flex flex-col items-center sm:flex-row w-5/12 mx-auto gap-2 sm:gap-4">
            <Button className="rounded-full capitalize font-Barlow font-semibold text-lg p-6" size={"lg"} >get a quote</Button>
           <Button className="rounded-full capitalize font-Barlow font-semibold text-lg" variant={"ghost"}>about me</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
