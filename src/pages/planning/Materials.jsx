import React, { useEffect, useState } from 'react'
import api from '../../utils/api'

const Materials = () => {
  const [materials, setMaterials] = useState([])

  useEffect(() => {
    api.planning.material
      .list()
      .then((res) => {
        console.log(res)
        setMaterials(res)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <li>
        {/* {materials.length > 0 &&
          materials.map((material) => (
            <li>
              <code>
                <pre style={{ whiteSpace: 'pre-wrap' }}>
                  {JSON.stringify(material, undefined, 2)}
                </pre>
              </code>
            </li>
          ))} */}
      </li>
    </div>
  )
}

export default Materials
