import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="pt-32" id="about">
      <div className="px-2 flex flex-col">
        <div>
          <img
            src="https://codewithsadee.github.io/portfolio/assets/images/about-banner.jpg"
            alt=""
            className="rounded-lg"
          />
        </div>
        <div>
          <p className="pt-2 text-xl font-Barlow text-secondary-color font-semibold" >I'm a Developer</p>
          <h1 className="text-3xl mt-1 mb-6 font-semibold font-Barlow ">I Develop Application that Help People </h1>
          <p className="text-text-color">Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu epteur sint occaecat cupidatat</p>
          <br />
          <p className="text-text-color">Krnon proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis</p>
          <Button className="rounded-full py-6 px-8 mt-5 text-lg font-Barlow capitalize">view portfolio</Button>
        </div>
      </div>
    </section>
  );
}
