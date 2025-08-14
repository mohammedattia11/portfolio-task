interface SectionHeaderProps {
  title:string;
  description:string
}
export default function SectionHeader({title,description}:SectionHeaderProps) {
  return (
    <div className="text-center">
      <p className="font-Barlow text-secondary-color text-xl font-semibold">
        {title}
      </p>
      <h2 className="font-Barlow py-5 text-4xl font-semibold lg:text-4xl">
        {description}
      </h2>
      <p className="text-text-color mb-10">
        Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen
        derit in voluptate
      </p>
    </div>
  );
}
