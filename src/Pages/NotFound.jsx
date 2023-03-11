import LayoutAuth from "../Components/Auth/LayoutAuth";
import { Link } from "react-router-dom";

export default function NotFound({login}) {
  return (
    <LayoutAuth>
      <h2>Oops! ;(</h2>
      <h5>404 - Page Not Found</h5>
      <Link to="/" className="btn btn-primary">{login ? "Your Dashboard" : "Login Page"}</Link>
    </LayoutAuth>
  )
}
