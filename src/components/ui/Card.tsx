interface CardProps {
  image:string
}
export default function Card({image}:CardProps) {
  return (
    <div className="w-full overflow-hidden px-2 md:w-1/2 lg:w-[33%]">
      <div className="max-w-sm cursor-pointer overflow-hidden rounded-xl shadow-lg">
        <img
          src={image}
          alt=""
          className="h-auto w-full rounded-lg transition-transform duration-500 ease-in-out hover:scale-110"
        />
      </div>
      <p className="font-Barlow text-secondary-color py-2 text-lg font-semibold">
        web development
      </p>
      <p className="font-Barlow hover:text-secondary-color cursor-pointer text-[1.2rem] font-semibold duration-300">
        Jim Morisson Says when the musics over turn off the light
      </p>
    </div>
  );
}
