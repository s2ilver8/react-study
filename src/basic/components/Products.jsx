import React, { useState } from 'react';
import useProducts from '../../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({salesOnly: checked});
  const [count, setCount] = useState(0);  
  const handleChange = () => setChecked((prev) => !prev);

  // useEffect(() => {   
  //   setLoading(true);
  //   setError(undefined);

  //   fetch(`data/${checked ? 'sale' : ''}products.json`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log('🔥뜨끈한 데이터를 네트워크에서 받아옴');
  //       setProducts(data);
  //     }).catch(e => setError('에러 발생'))
  //     .finally(() => setLoading(false));
  //   return () => {
  //     console.log('🧹 깨끗하게 청소하는 일들을 합니다.');
  //   };
  // }, [checked]);

  if(loading) return <p>Loading...</p>;

  if(error) return <p>{error}</p>;

  return (
    <>
    <input type='checkbox' value={checked} onChange={handleChange} />
    <label htmlFor='checkbox'>Show Only 🔥 Sale</label>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}