interface ProgressProps {
  skill:string; 
  amount:number
}
export default function Progress({skill,amount}:ProgressProps) {
  return (
    <div className="w-full px-2 md:w-1/2">
      <div className="flex justify-between py-3">
        <p className="font-Barlow text-lg font-semibold">{skill}</p>
        <p className="font-Barlow text-lg font-semibold">{amount}%</p>
      </div>
      <div className="w-12/12 rounded-full bg-stone-100">
        <div style={{width:`${amount}%`}} className="bg-secondary-color h-full rounded-full p-1"></div>
      </div>
    </div>
  );
}
