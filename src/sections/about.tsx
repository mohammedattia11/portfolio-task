import { Button } from "@/components/ui/button";
import Section from "@/components/ui/Section";

export default function About() {
  return (
    <Section id="about">
      <div className="flex w-full flex-col gap-7 px-2 lg:flex-row lg:items-center">
        <div className="relative lg:w-[40%] xl:px-6">
          <img
            src="https://codewithsadee.github.io/portfolio/assets/images/about-banner.jpg"
            alt=""
            className="w-full rounded-lg"
          />
          <img
            src="https://codewithsadee.github.io/portfolio/assets/images/absolute-image.jpg"
            alt=""
            className="xll:w-56 absolute bottom-[-6rem] left-[-5rem] hidden rounded-lg object-cover lg:block lg:w-36 xl:w-48"
          />
        </div>
        <div className="lg:w-[60%]">
          <p className="font-Barlow text-secondary-color pt-2 text-xl font-semibold">
            I'm a Developer
          </p>
          <h1 className="font-Barlow mt-1 mb-6 text-3xl font-semibold">
            I Develop Application that Help People{" "}
          </h1>
          <p className="text-text-color">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatu epteur sint occaecat cupidatat
          </p>
          <br />
          <p className="text-text-color">
            Krnon proident, sunt in culpa qui officia deserunt mollit anim id
            est laborum. Sed ut perspiciatis unde omnis
          </p>
          <Button className="font-Barlow mt-5 rounded-full px-8 py-6 text-lg capitalize">
            view portfolio
          </Button>
        </div>
      </div>
    </Section>
  );
}
