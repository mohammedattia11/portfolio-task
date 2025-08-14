import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Blog() {
  return (
    <Section id="blog">
      <div className="flex flex-col px-2">
        <SectionHeader
          title="Latest News"
          description="Checkout My Recent Blogs"
        />
        <div className="flex flex-col mx-auto flex-wrap gap-8 md:flex-row md:gap-0">
          <Card image="https://codewithsadee.github.io/portfolio/assets/images/blog-1.jpg" />
          <Card image="https://codewithsadee.github.io/portfolio/assets/images/blog-2.jpg" />
          <Card image="https://codewithsadee.github.io/portfolio/assets/images/blog-3.jpg" />
        </div>
      </div>
    </Section>
  );
}
