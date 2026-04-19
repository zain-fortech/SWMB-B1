export function Product({ product }) {
  return (
    <div className="flex flex-col gap-4 min-w-30 border min-h-30 p-3">
      <p>Title: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>

      <button className="border p-2 cursor-pointer hover:bg-sky-700 text-xs">
        Add to Cart
      </button>
    </div>
  );
}
