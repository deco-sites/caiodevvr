import { MyProduct } from "../loaders/myproduct.ts";

export function ErrorFallback() {
  return (
    <div>
      <img
        src="deco-sites/caiodevvr/static/images/imagem2.webp"
        width={150}
        height={150}
      />
      <p>Conexões Culturais</p>
      <span>
        é uma loja online que busca celebrar a diversidade cultural e promover a
        inclusão através da venda de produtos e experiências inspiradas em
        diferentes culturas ao redor do Brasil. A loja não apenas oferece
        produtos únicos, mas também busca criar uma plataforma interativa onde
        as pessoas possam aprender, compartilhar e se conectar por meio de
        experiências culturais significativas.
      </span>
      <a href="/culturas">saber mais</a>
    </div>
  );
}

export const LoadingFallback = () => {
  return (
    <div>
      <img src="https://via.placeholder.com/150/150" width={150} height={150} />
      <p>loading...</p>
      <span>loading...</span>
      <a href="/culturas">saber mais</a>
    </div>
  );
};

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
