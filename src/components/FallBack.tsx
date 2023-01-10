import { Link } from "react-router-dom";

const FallBack = () => {
  return (
    <div>
        <h1>404 error</h1>
        <h3>Page not Found</h3>
        <span><Link to="/">Go to HomePage</Link></span>
    </div>
  )
}

export default FallBack;