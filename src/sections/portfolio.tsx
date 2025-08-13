import { MoveRight } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="pt-32" id="portfolio">
      <div className="px-2">
        <div className="text-center">
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            Portfolio
          </p>
          <h2 className="font-Barlow py-5 text-4xl font-semibold">
            My Amazing Works
          </h2>
          <p className="text-text-color">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-7">
          <div className="w-full rounded-lg bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-1.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center">
            <p className="font-Barlow text-secondary-color font-semibold capitalize">
              youtube
            </p>
            <h2 className="font-Barlow text-2xl font-semibold">
              web application for desiverse
            </h2>
            <p className="font-Barlow flex gap-2 py-4 font-semibold">
              view project <MoveRight className="text-secondary-color w-1/12" />
            </p>
          </div>
          <div className="rounded-lg bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-2.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center">
            <p className="font-Barlow text-secondary-color font-semibold capitalize">
              vimeo
            </p>
            <h2 className="font-Barlow text-2xl font-semibold">
              web application for desiverse
            </h2>
            <p className="font-Barlow flex gap-2 py-4 font-semibold">
              view project <MoveRight className="text-secondary-color w-1/12" />
            </p>
          </div>
          <div className="rounded-lg bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-3.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center">
            <p className="font-Barlow text-secondary-color font-semibold capitalize">
              sound cloud
            </p>
            <h2 className="font-Barlow text-2xl font-semibold">
              web application for desiverse
            </h2>
            <p className="font-Barlow flex gap-2 py-4 font-semibold">
              view project <MoveRight className="text-secondary-color w-1/12" />
            </p>
          </div>
          <div className="rounded-lg bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-4.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center">
            <p className="font-Barlow text-secondary-color font-semibold capitalize">
              details
            </p>
            <h2 className="font-Barlow text-2xl font-semibold">
              web application for desiverse
            </h2>
            <p className="font-Barlow flex gap-2 py-4 font-semibold">
              view project <MoveRight className="text-secondary-color w-1/12" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
