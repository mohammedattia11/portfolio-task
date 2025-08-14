import PortfolioCard from "@/components/ui/PortfolioCard";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <div className="px-2">
        <SectionHeader title="Portfolio" description="My Amazing Works" />
        <div className="mt-10 flex flex-col gap-7">
          <PortfolioCard
            title="youtube"
            image="https://codewithsadee.github.io/portfolio/assets/images/portfolio-1.jpg"
          />
          <PortfolioCard
            title="vimeo"
            image="https://codewithsadee.github.io/portfolio/assets/images/portfolio-2.jpg"
          />
          <PortfolioCard
            title="sound cloud"
            image="https://codewithsadee.github.io/portfolio/assets/images/portfolio-3.jpg"
          />
          <PortfolioCard
            title="details"
            image="https://codewithsadee.github.io/portfolio/assets/images/portfolio-4.jpg"
          />
        </div>
      </div>
    </Section>
  );
}
