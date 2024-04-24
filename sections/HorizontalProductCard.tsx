import { MyProduct } from "../loaders/myproduct.ts";

export function ErrorFallback({ error }: { error?: Error }) {
  return <>DEU ERRADO - {error?.message}</>;
}
export interface Props {
  title: string;
  products?: MyProduct;
}
function HorizontalProductCard(props: Props) {
  const products = props.products;
  return (
    <>
      <h1>{props.title}</h1>
      <ul>
        {products &&
          products.data.map(({ product }) => {
            return (
              <li>
                <p>{product.name}</p>
                <span>{product.brand}</span>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default HorizontalProductCard;
