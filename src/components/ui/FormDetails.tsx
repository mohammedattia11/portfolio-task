interface FormDetailsProps {
  header:string;
  content:string;
  icon:React.ReactElement
}
export default function FormDetails({header,content,icon}:FormDetailsProps) {
  return (
    <div className="flex flex-row items-center gap-3 text-sm">
      <div className="bg-icon-color rounded-full p-5">
        {icon}
      </div>
      <div>
        <p className="font-Barlow text-xl font-semibold">{header}</p>
        <p className="text-text-color text-lg font-light">
          {content}
        </p>
      </div>
    </div>
  );
}
