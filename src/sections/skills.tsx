export default function Skills() {
  return (
    <section className="pt-32" id="skills">
      <div className="px-2 flex flex-col">
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
        <div className="flex flex-col md:flex-row flex-wrap md:py-5"> 
          {/* progress div */}
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">CSS</p>
              <p className="font-Barlow font-semibold text-lg">25%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[25%] p-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">React</p>
              <p className="font-Barlow font-semibold text-lg">75%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[75%] p-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">MongoDB</p>
              <p className="font-Barlow font-semibold text-lg">90%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[90%] p-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">Python</p>
              <p className="font-Barlow font-semibold text-lg">70%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[70%] p-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">PHP</p>
              <p className="font-Barlow font-semibold text-lg">80%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[80%] p-1"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-2">
            <div className="flex justify-between py-3">
              <p className="font-Barlow font-semibold text-lg">JavaScript</p>
              <p className="font-Barlow font-semibold text-lg">75%</p>
            </div>
            <div className="w-12/12 rounded-full bg-stone-100">
              <div className="bg-secondary-color h-full rounded-full w-[75%] p-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
