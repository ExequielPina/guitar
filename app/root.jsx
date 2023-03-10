
import { Meta, Links, Outlet, Scripts, LiveReload, useCatch, Link } from '@remix-run/react'
import Header from '~/components/header'
import styles from '~/styles/index.css'
import Footer from '~/components/footer'

export function meta () {
    return (
        {
            charset: 'utf-8',
            title: 'Guitar Remix',
            viewport: "width=device-width,initial-scale=1"
        }
    )
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
         
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: "true"
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Outfit:wght@400;700;900&family=Roboto:ital,wght@0,400;1,100;1,300&family=Rubik+Vinyl&display=swap'

        },
        {
            rel: 'stylesheet',
            href: styles
        }
    ]
}


export default function App() {
    return(
        <Document>
            <Outlet />
        </Document>
    )
}


function Document ({children}) {
    return (
        <html lang="es">
            <head>
                <Meta />
                <Links />
            </head>

            <body>
                <Header />

                {children}

                <Footer />

                <Scripts />
                <LiveReload />

            </body>
        </html>
    )
}

/*** Manejo de errores ***/
export function CatchBoundary() {
    const error = useCatch()

    return (
        <Document>
            <p className='error'>Error {error.status} {error.statusText}</p>
            <Link className='error-enlace' to="/">Volver a la página principal</Link>
        </Document>
    )
}

export function ErrorBoundary({error}) {
    return (
        <Document>
            <p className='error'>Error {error.status} {error.statusText}</p>
            <Link className='error-enlace' to="/">Volver a la página principal</Link>
        </Document>
    )
}