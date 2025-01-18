import Link from "next/link";

interface IDropdownProps {
  title: string;
  isDropdownActive: boolean;
  linkHref: string;
  className?: string;
  items?: string[];
}

export function HeaderDropdown(
  {
    title,
    isDropdownActive,
    linkHref,
    className,
    items,
  }: IDropdownProps) {
  return (
    <li className={`dropdown ${className}`}>
      <div className={`dropdown__head ${isDropdownActive ? "active" : ""}`}>
        <Link href={linkHref} className={`dropdown__head-link`}>
          {title}
        </Link>
        {items && items.length > 0 &&
          <span className="dropdown__head-icon"></span>
        }
      </div>
      <div className="dropdown__content-items">
        {(items || []).map((item) => (<button className="dropdown__content-item" key={item}>{item}</button>))}
      </div>
    </li>
  );
}
