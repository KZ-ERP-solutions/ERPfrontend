import React, { useEffect, useState } from 'react'
import api from '../../utils/api'

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    api.planning.product
      .list()
      .then((res) => {
        console.log(res)
        setProducts(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <li>
        {products.length > 0 &&
          products.map((product) => <li>{JSON.stringify(product)}</li>)}
      </li>
    </div>
  )
}

export default Products
