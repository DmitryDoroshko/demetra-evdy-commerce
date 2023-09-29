export function WishlistItem({
                               inStock,
                               imageSrc,
                               imageAlt,
                               name,
                               price,
                             }: { inStock: boolean; imageSrc: string; name: string; price: number; imageAlt: string; }) {

  return (
    <tr className="wishlist-full__item">
      <td>
        <div className="wishlist-full__picture">
          <img src={imageSrc} alt={imageAlt} className="wishlist-full__img" />
        </div>
        <span className="wishlist-full__shoe-name">{name}</span>
      </td>
      <td>
        <span className="wishlist-full__price">${price}</span>
      </td>
      <td>
        <span
          className={`wishlist-full__status ${inStock ? "wishlist-full__status--in-stock" : "wishlist-full__status--out-of-stock"}`}>
          {inStock ? "in stock" : "out of stock"}
        </span>
      </td>
      <td>
        <button className="btn btn--grey wishlist-full__btn">Add to the cart</button>
      </td>
    </tr>
  );

}
