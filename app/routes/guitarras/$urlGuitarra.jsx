import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'



export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}


export async function loader ({request, params} ) {
  const { urlGuitarra} = params 
  
  const guitarra = await getGuitarra( urlGuitarra)
  

  return guitarra
}



function Guitarra() {

  const guitarra = useLoaderData()
  const { marca, modelo, precio, descripcion, imagen} = guitarra.data[0].attributes

  return (
    <main className="contenedor guitarra">
      <img className="imagen" src={imagen.data.attributes.url} alt={`imagen de la guitarra ${modelo}`}/>
      <div className="contenido">
        <h3>{marca}</h3>
        <p className="modelo">{modelo}</p>
        <p className="descripcion">{descripcion}</p>
        <p className="precio">{precio} €</p>
      </div>
    </main>
  )
}

export default Guitarra