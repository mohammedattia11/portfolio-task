export default function Portfolio() {
  return (
    <section className="pt-32" id="portfolio">
      <div className="px-2">
        <div className="text-center">
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            Portfolio
          </p>
          <h2 className="font-Barlow py-5 text-4xl font-semibold lg:text-4xl">
            My Amazing Works
          </h2>
          <p className="text-text-color">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        <div className="mt-10 flex flex-col gap-7">
          <div className="cursor-pointer rounded-3xl bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-1.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center xl:h-96">
            <p className="font-Barlow text-secondary-color font-semibold capitalize lg:text-xl">
              youtube
            </p>
            <h2 className="font-Barlow text-2xl font-semibold lg:py-1 lg:text-4xl">
              web application for desiverse
            </h2>
            <p className="font-Barlow cursor-pointer py-4 font-semibold uppercase lg:text-lg">
              view project{" "}
              <span className="text-secondary-color text-3xl">&rarr;</span>
            </p>
          </div>
          <div className="cursor-pointer rounded-3xl bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-2.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center xl:h-96">
            <p className="font-Barlow text-secondary-color font-semibold capitalize lg:text-xl">
              vimeo
            </p>
            <h2 className="font-Barlow text-2xl font-semibold lg:py-1 lg:text-4xl">
              web application for desiverse
            </h2>
            <p className="font-Barlow cursor-pointer py-4 font-semibold uppercase lg:text-lg">
              view project{" "}
              <span className="text-secondary-color text-3xl">&rarr;</span>
            </p>
          </div>
          <div className="cursor-pointer rounded-3xl bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-3.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center xl:h-96">
            <p className="font-Barlow text-secondary-color font-semibold capitalize lg:text-xl">
              sound cloud
            </p>
            <h2 className="font-Barlow text-2xl font-semibold lg:py-1 lg:text-4xl">
              web application for desiverse
            </h2>
            <p className="font-Barlow cursor-pointer py-4 font-semibold uppercase lg:text-lg">
              view project{" "}
              <span className="text-secondary-color text-3xl">&rarr;</span>
            </p>
          </div>
          <div className="cursor-pointer rounded-3xl bg-[url('https://codewithsadee.github.io/portfolio/assets/images/portfolio-4.jpg')] bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center xl:h-96">
            <p className="font-Barlow text-secondary-color font-semibold capitalize lg:text-xl">
              details
            </p>
            <h2 className="font-Barlow text-2xl font-semibold lg:py-1 lg:text-4xl">
              web application for desiverse
            </h2>
            <p className="font-Barlow cursor-pointer py-4 font-semibold uppercase lg:text-lg">
              view project{" "}
              <span className="text-secondary-color text-3xl">&rarr;</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
