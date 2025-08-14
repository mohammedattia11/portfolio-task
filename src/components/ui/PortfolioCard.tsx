interface PortfolioCardProps {
  title:string;
  image:string
}
export default function PortfolioCard({title,image}:PortfolioCardProps) {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="cursor-pointer rounded-3xl bg-cover p-10 sm:flex sm:h-80 sm:flex-col sm:justify-center xl:h-96">
      <p className="font-Barlow text-secondary-color font-semibold capitalize lg:text-xl">
        {title}
      </p>
      <h2 className="font-Barlow text-2xl font-semibold lg:py-1 lg:text-4xl">
        web application for desiverse
      </h2>
      <p className="font-Barlow cursor-pointer py-4 font-semibold uppercase lg:text-lg">
        view project{" "}
        <span className="text-secondary-color text-3xl">&rarr;</span>
      </p>
    </div>
  );
}
