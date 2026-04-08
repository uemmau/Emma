import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import App from "./App";
import Usuario from "./Usuario";

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
    </div>
  );
}

export default Home;

