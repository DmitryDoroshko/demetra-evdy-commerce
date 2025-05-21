import React, { useState, useMemo } from "react";
import { Product } from "@/components/shared/Product/Product";
import { SHOP_ITEMS_COUNT_SIZE } from "@/constants/shop";
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks";
import { selectProductItems } from "@/store/products/products.selectors";
import { Pagination } from "@/components/shared/Pagination/Pagination";
import { ShopDropdown } from "@/components/shared/ui/ShopDropdown/ShopDropdown";
import { SortByIconSvg } from "@/components/shared/ui/SortByIconSvg/SortByIconSvg";
import { StoringDropdown } from "@/components/shared/ui/StoringDropdown/StoringDropdown";
import { DROPDOWN_SORT_BY_ITEMS, DROPDOWN_STORING_ITEMS } from "@/data/dropdownsData";
import { setSortedBy } from "@/store/products/products.slice";

interface IDropdownSortingByItem {
  id: string;
  name: "name" | "price";
  label: string;
}

interface IDropdownStoringItem {
  id: string;
  name: string;
}

export function Shop() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productItems = useAppSelector(selectProductItems);
  const dispatch = useAppDispatch();

  // Memoize the current page's shop items loaded array in order not to recompute it multiple times
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * SHOP_ITEMS_COUNT_SIZE;
    const lastPageIndex = firstPageIndex + SHOP_ITEMS_COUNT_SIZE;
    return productItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, productItems]);

  const handleSelectSortingBy = (item: IDropdownSortingByItem) => {
    dispatch(setSortedBy(item.name));
  };

  const handleSelectStoring = (item: IDropdownStoringItem) => {
    console.log("handleSelectStoring", item);
  };

  return (
    <main className="shop">
      <section className="our-products">
        <div className="container">
          <div className="shop__actions">
            <div className="shop__actions-left">
              <ShopDropdown dropdownItems={DROPDOWN_SORT_BY_ITEMS} Icon={SortByIconSvg} onSelect={handleSelectSortingBy}/>

              <div className="shop__showing-items">Showing 1-16 of 437</div>
            </div>
            <div className="shop__actions-right">
              <StoringDropdown items={DROPDOWN_STORING_ITEMS} onSelect={handleSelectStoring}/>
            </div>
          </div>

          <div className="our-products__inner">
            <main className="our-products__items">
              {currentTableData.map((item) => {
                return (
                  <Product
                    key={item.id}
                    image={item.image}
                    imageAlternativeText={item.name}
                    brand={item.brand}
                    name={item.name}
                    price={item.price}
                    id={item.id}
                  />
                );
              })}
            </main>
            <Pagination
              onPageChange={(page: number) => setCurrentPage(page)}
              totalCount={productItems.length}
              currentPage={currentPage}
              pageSize={SHOP_ITEMS_COUNT_SIZE}
            />
          </div>
        </div>
      </section>
    </main>
  );
}