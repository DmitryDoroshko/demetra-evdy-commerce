import React, { useState } from "react";
import { useAppSelector } from "@/hooks/redux-hooks";
import { selectSortedBy } from "@/store/products/products.selectors";

interface IDropdownItem {
  id: string;
  name: "price" | "name";
  label: string;
}

interface IDropdownProps {
  dropdownItems: IDropdownItem[];
  Icon: React.ElementType;
  onSelect: (item: IDropdownItem) => void;
}

export const ShopDropdown = ({ dropdownItems, Icon, onSelect }: IDropdownProps) => {
  const sortedBy = useAppSelector(selectSortedBy);
  const initialSortedByItem = dropdownItems.find(item => item.name === sortedBy);
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>(initialSortedByItem!);

  const handleSelectItem = (item: IDropdownItem) => {
    setSelectedItem(item);
    onSelect(item);
  };

  return (
    <div className="shop__sort-by-dropdown">
      <div className="shop__sort-by-head">
        {Icon && <Icon />}
        <span className="shop__sort-by-text">Sort by {selectedItem.name}</span>
        <svg
          className="shop__sort-by-arrow-down"
          width="6"
          height="4"
          viewBox="0 0 6 4"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L3 3L5 1"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="shop__sort-by-content">
        {dropdownItems.map((item) => <button
          key={item.id}
          className="shop__sort-by-item"
          onClick={() => handleSelectItem(item)}>{item.label}</button>)}
      </div>
    </div>
  );
};