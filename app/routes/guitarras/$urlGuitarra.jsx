import { useLoaderData } from "@remix-run/react"
import { getGuitarra } from "~/models/guitarras.server"
import styles from '~/styles/guitarras.css'



export async function loader ({params} ) {
  const { urlGuitarra} = params   
  const guitarra = await getGuitarra( urlGuitarra )

  if(guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitarra no encontrada'
    })
  }
  
  return guitarra
}


export function meta({data}) {
  if(!data) {
    return {
      title: 'Error 404 Guitarra no encontrada',
      description: 'Venta de guitarras- Guitarra no encontrada'
    }
  }
  return {
    title: `GuitarLA - ${data.data[0].attributes.modelo} ${data.data[0].attributes.marca}`,
    description: `Venta de guitarras. ${data.data[0].attributes.marca}`
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
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