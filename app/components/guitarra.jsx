import { Link } from "@remix-run/react"


function Guitarra({guitarra}) {
    const {descripcion, imagen, marca, url, modelo, precio} = guitarra
   
  return (

    
    <div className="guitarra">
        <img className="imgG" src={imagen.data.attributes.formats.small.url} alt={`imagen Guitarra ${modelo}`} />
        <div className="contenido">
        
            <h3>{marca}</h3>
            <p className="modelo">{modelo}</p>
            <p className="descripcion">{descripcion}</p>
            <p className="precio">{precio}€</p>
            <Link className="enlace" to={`/guitarras/${url}`}>Ver producto </Link>

        </div>
    </div>
    
  )
}

export default Guitarra