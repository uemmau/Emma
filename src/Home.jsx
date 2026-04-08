import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import App from "./App";
import Usuario from "./Usuario";
import { Link } from "react-router-dom";

function Home() {
  const { user, login, logout } = useContext(AuthContext);

  return (
    <div className="container">
      <h1>Home</h1>

      {user ? (
        <>
          <p>Bienvenido {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Usuario onLogin={login} />
      )}
<Link to="/">Home</Link>
<Link to="/about">About</Link>
    </div>
  );
}

export default Home;

