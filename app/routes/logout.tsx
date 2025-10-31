import { Link, href } from "react-router";

export default function Logout() {
  return (
    <div>
      <h1>You have been logged out</h1>
      <p>Thank you for using our application.</p>
      <Link to={href("/login")}>Go to Login</Link>
    </div>
  );
}
