import { Link } from 'react-router-dom'
import { useTitle } from './useTitle'

export default function NotFound() {
  useTitle('Not Found')

  return (
    <section>
      <h1>Page not found</h1>
      <p>
        Nothing to see here. <Link to="/">Head home</Link>.
      </p>
    </section>
  )
}
