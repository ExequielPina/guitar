import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras - Blog de música'
  }
}

export function links() {
  return [
    {
      rel:'stylesheet',
      href: styles
    },
    {
      rel: 'preload',
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src= {imagen} alt= "imagen de nosotros"/>

        <div>
          <p>Maecenas vel lorem leo. Duis auctor molestie eros, in accumsan velit porttitor id. Duis rhoncus, erat in scelerisque venenatis, dolor tortor congue nibh, vel aliquam massa arcu in lectus. Vivamus non elit tortor. Phasellus eget placerat enim, eget sollicitudin diam. Vivamus porttitor lobortis dolor at eleifend. Integer condimentum ornare dolor non consectetur et mollis at, vul. </p>

          <p>Dolor sit amet, consectetur adipiscing elit. Maecenas et porttitor nisi. Sed nec quam nec lacus blandit ullamcorper sed vitae orci. Proin rhoncus leo quis magna hendrerit pharetra. Integer imperdie. Phasellus at libero pharetra enim cursus varius vel nec lectus. Sed venenatis est non lorem scelerisque, ac pretium diam malesuada. </p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
