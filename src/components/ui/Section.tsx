interface SectionProps {
  id:string
  children:React.ReactNode
}
export default function Section({id,children}:SectionProps) {
  return (
    <section className="pt-32 lg:pt-32" id={id}>
      {children}
    </section>
  )
}
