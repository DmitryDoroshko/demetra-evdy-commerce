import Link from "next/link";

interface IDropdownProps {
  title: string;
  isDropdownActive: boolean;
  linkHref: string;
  className?: string;
}

export function HeaderDropdown({ title, isDropdownActive, linkHref, className }: IDropdownProps) {

  return (
    <li className={`dropdown ${className}`}>
      <div className={`dropdown__head ${isDropdownActive ? "active" : ""}`}>
        <Link href={linkHref} className={`dropdown__head-link`}>{title}</Link>
        <span className="dropdown__head-icon"></span>
      </div>
      <div className="dropdown__content-items">
        <button className="dropdown__content-item">Placeholder 1</button>
        <button className="dropdown__content-item">Placeholder 2</button>
        <button className="dropdown__content-item">Placeholder 3</button>
      </div>
    </li>
  );
}
