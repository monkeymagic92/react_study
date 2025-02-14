import '@/app/study.css';

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

const listItems = products.map(product =>
  <li
      key={product.id}
      style={{color: product.id == 2 ? 'red' : 'green'}}
  >
    {product.title}
  </li>
);

export default function Study() {
  return (
      <ul>{listItems}</ul>
  )
}
