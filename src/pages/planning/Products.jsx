import React, { useEffect, useState } from 'react';
import api from '../../utils/api';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.planning.product
      .list()
      .then((res) => {
        console.log(res);
        setProducts(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <li>
        {products.length > 0
          && products.map((product) => (
            <li>
              <code>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {JSON.stringify(product, undefined, 2)}
                </pre>
              </code>
            </li>
          ))}
      </li>
    </div>
  );
}

export default Products;
