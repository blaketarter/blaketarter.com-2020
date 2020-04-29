import { AppProps } from 'next/app'
import "normalize.css"
import "pattern.css"
import './styles.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
