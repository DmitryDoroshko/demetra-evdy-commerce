import Link from "next/link";

interface IProductProps {
  image: string;
  imageAlternativeText: string;
  brand: string;
  name: string;
  price: number;
  id: string | number;
}

export function Product({ image, imageAlternativeText, price, brand, name, id }: IProductProps) {
  return (
    <div className="our-products__product-item">
      <img src={image} alt={imageAlternativeText} className="our-products__img" />
      <div className="our-products__description">
        <h3 className="our-products__brand">{brand}</h3>
        <h4 className="our-products__name">{name}</h4>
        <span className="our-products__price">${price}</span>
      </div>
      <div className="our-products__actions">
        <Link href={`/product/${id}`} className="our-products__btn btn btn--black">View product</Link>
      </div>
    </div>
  );
}
