import React from 'react'

const Buscador = ({cambiar}) => {
  return (
    <>
    <input type="search" onChange={(e) => cambiar(e.target.value)} />
    </>
  )
}

export default Buscador