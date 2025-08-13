export default function Blog() {
  return (
    <section className="pt-32" id="blog">
      {/* container */}
      <div className="flex flex-col px-2">
        {/* upper content container */}
        <div className="text-center">
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            Latest News
          </p>
          <h2 className="font-Barlow py-3 text-3xl font-semibold">
            Checkout My Recent Blogs
          </h2>
          <p className="text-text-color mb-10">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        {/* lower content container */}
        <div className="flex flex-col gap-8 md:flex-row md:gap-0 flex-wrap">
          {/* card items */}
          <div className="w-full md:w-1/2 px-2">
            <img
              src="https://codewithsadee.github.io/portfolio/assets/images/blog-1.jpg"
              alt=""
              className="rounded-lg"
            />
            <p className="font-Barlow text-secondary-color py-2 text-lg font-semibold">
              web development
            </p>
            <p className="font-Barlow hover:text-secondary-color cursor-pointer text-[1.2rem] font-semibold duration-300">
              Jim Morisson Says when the musics over turn off the light
            </p>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <img
              src="https://codewithsadee.github.io/portfolio/assets/images/blog-2.jpg"
              alt=""
              className="rounded-lg"
            />
            <p className="font-Barlow text-secondary-color py-2 text-lg font-semibold">
              web development
            </p>
            <p className="font-Barlow hover:text-secondary-color cursor-pointer text-[1.2rem] font-semibold transition-all duration-300">
              Jim Morisson Says when the musics over turn off the light
            </p>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <img
              src="https://codewithsadee.github.io/portfolio/assets/images/blog-3.jpg"
              alt=""
              className="rounded-lg"
            />
            <p className="font-Barlow text-secondary-color py-2 text-lg font-semibold">
              web development
            </p>
            <p className="font-Barlow hover:text-secondary-color cursor-pointer text-[1.2rem] font-semibold duration-300">
              Jim Morisson Says when the musics over turn off the light
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
