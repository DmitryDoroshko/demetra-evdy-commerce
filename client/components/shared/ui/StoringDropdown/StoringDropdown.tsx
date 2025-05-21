import React from "react";

interface IDropdownItem {
  id: string;
  name: string;
}

interface IStoringDropdownProps {
  items: IDropdownItem[];
  onSelect: (item: IDropdownItem) => void;
}

const DEFAULT_STORING = "Default";

export const StoringDropdown: React.FC<IStoringDropdownProps> = ({ items, onSelect }) => {
  const defaultStoring = items.find(item => item.name === DEFAULT_STORING);

  const [selectedStoring, setSelectedStoring] = React.useState<IDropdownItem>(defaultStoring!);

  const handleSelectStoring = (item: IDropdownItem) => {
    setSelectedStoring(item);
    onSelect(item);
  };

  return (
    <div className="shop__storing-dropdown">
      <div className="shop__storing-head">
        <span className="shop__storing-name">{selectedStoring.name} Storing</span>
        <svg
          className="shop__storing-arrow"
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
      <div className="shop__storing-content-items">
        {items.map((item) => (
          <button key={item.id} className="shop__storing-content-item"
                  onClick={() => handleSelectStoring(item)}
          >{item.name}</button>
        ))}
      </div>
    </div>
  );
};