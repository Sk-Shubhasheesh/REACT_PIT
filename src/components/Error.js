
import { useRouteError } from "react-router-dom"

function Error() {
    const err = useRouteError();

  return (
    <div>
        <h1>Opps!!</h1>
        <h2>Something went wrong</h2>
        <h2>{err.status} - {err.statusText}</h2>
        <h3>{err.data}</h3>
    </div>
  )
}

export default Error