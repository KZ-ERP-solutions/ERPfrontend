import React, { useState } from 'react'
import { useEffect } from 'react'
import api from '../../utils/api'

const BOM = () => {
  const [boms, setBoms] = useState([])

  // useEffect(() => {
  //   api.planning.bom
  //     .list()
  //     .then((res) => console.log(res.Bom))
  //     .catch((err) => console.log(err))
  // }, [])

  return <div>BOM</div>
}

export default BOM
