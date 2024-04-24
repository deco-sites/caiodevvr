interface Props {
  code: string;
  description: string;
}

function Cupom({ code, description }: Props) {
  return (
    <div class="container mb-8 text-center bg-gradient-to-r from-indigo-500 to-violet-500 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
      <span class="font-bold">{code}</span>
      <br />
      {description}
    </div>
  );
}

export default Cupom;
