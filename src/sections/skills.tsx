export default function Skills() {
  return (
    <section className="pt-32 lg:pt-36" id="skills">
      <div className="flex flex-col px-2">
        <div className="text-center">
          <p className="font-Barlow text-secondary-color text-xl font-semibold">
            My Skills
          </p>
          <h2 className="font-Barlow py-5 text-4xl font-semibold">
            I Develop Skills Regularly
          </h2>
          <p className="text-text-color">
            Dliquip ex ea commo do conse namber onequa ute irure dolor in
            reprehen derit in voluptate
          </p>
        </div>
        {/* progress section dev */}
        <div className="flex flex-col flex-wrap md:flex-row md:py-5">
          {/* progress div */}
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">CSS</p>
              <p className="font-Barlow text-lg font-semibold">25%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[25%] rounded-full p-1"></div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">React</p>
              <p className="font-Barlow text-lg font-semibold">75%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[75%] rounded-full p-1"></div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">MongoDB</p>
              <p className="font-Barlow text-lg font-semibold">90%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[90%] rounded-full p-1"></div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">Python</p>
              <p className="font-Barlow text-lg font-semibold">70%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[70%] rounded-full p-1"></div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">PHP</p>
              <p className="font-Barlow text-lg font-semibold">80%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[80%] rounded-full p-1"></div>
            </div>
          </div>
          <div className="w-full px-2 md:w-1/2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow text-lg font-semibold">JavaScript</p>
              <p className="font-Barlow text-lg font-semibold">75%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full w-[75%] rounded-full p-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
