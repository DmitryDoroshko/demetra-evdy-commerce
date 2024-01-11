import classnames from "classnames";
import { usePagination, DOTS } from "@/hooks/usePagination";

interface IPaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
}

export function Pagination({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: IPaginationProps) {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (!paginationRange) {
    return null;
  }

  // If there are less than 2 times in pagination range we will not render the component
  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className={classnames("pagination__pagination", className)}>
      {/* Left navigation arrow */}
      <button
        className={classnames(
          "pagination__pagination-btn pagination__pagination-btn--left",
          {
            disabled: currentPage === 1,
          }
        )}
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
        >
          <path
            d="M5 1L1 4L5 7"
            stroke="#989898"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {paginationRange.map((pageNumber: number) => {
        // If the pageItem is a DOT, render the DOTS unicode character
        if (pageNumber === DOTS) {
          return (
            <button
              className={classnames(
                "pagination__pagination-btn",
                "pagination__pagination-btn--dots"
              )}
            >
              ...
            </button>
          );
        }

        // Render our Page Pills
        return (
          <button
            key={pageNumber.toString()}
            className={classnames("pagination__pagination-btn", {
              active: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        );
      })}

      {/*  Right Navigation arrow */}
      <button
        className={classnames(
          "pagination__pagination-btn",
          "pagination__pagination-btn--right",
          {
            disabled: currentPage === lastPage,
          }
        )}
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="6"
          height="8"
          viewBox="0 0 6 8"
          fill="none"
        >
          <path
            d="M1 7L5 4L1 1"
            stroke="#EF3636"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
