import React, { useState } from 'react'

function Usuario({ onLogin }) {
  const [nombre, setNombre] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const nombreLimpio = nombre.trim()
    if (!nombreLimpio) return
    onLogin(nombreLimpio)
    setNombre('')
  }

  return (
    <form className="usuario-form" onSubmit={handleSubmit}>
      <input
        className="usuario-input"
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <button className="usuario-submit" type="submit">Ingresar</button>
    </form>
  )
}

export default Usuario