import NavItem from "./NavItem";

export default function NavList() {
  return (
    <ul className="hidden items-center gap-12 text-base font-semibold lg:flex">
      <NavItem item="home"/>
      <NavItem item="about"/>
      <NavItem item="portfolio"/>
      <NavItem item="skills"/>
      <NavItem item="contact"/>
      <NavItem item="blog"/>
    </ul>
  )
}
