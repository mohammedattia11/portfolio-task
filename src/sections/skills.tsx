import Progress from "@/components/ui/Progress";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col px-2">
        <SectionHeader
          title="My Skills"
          description="I Develop Skills Regularly"
        />
        <div className="flex flex-col flex-wrap md:flex-row md:py-5">
          <Progress skill="CSS" amount={25} />
          <Progress skill="React" amount={75} />
          <Progress skill="MongoDB" amount={90} />
          <Progress skill="Python" amount={70} />
          <Progress skill="PHP" amount={80} />
          <Progress skill="JavaScript" amount={75} />
        </div>
      </div>
    </Section>
  );
}
