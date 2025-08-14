interface NavItemProps {
  item: string;
  onClick?:React.MouseEventHandler<HTMLAnchorElement>;
}
export default function NavItem({ item,onClick }: NavItemProps) {
  return (
    <li className="hover:text-secondary-color p-1 capitalize transition-all duration-300 list-none">
      <a onClick={onClick} href={`#${item}`}>{item}</a>
    </li>
  );
}
