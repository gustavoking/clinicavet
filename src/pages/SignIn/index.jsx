import "./signin.css";
import { useState } from "react";

import logoclinica from "../../assets/logoclinica.png";

function SignIn() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <div className="container-center">
        <div className="login">
          <div className="login-area">
            <img src={logoclinica} alt="Logo do sistema" />
          </div>
          <form>
            <h1>Entrar</h1>
            <input
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="*******"
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
            <input type="submit" value="Acessar" />
          </form>

          <Link to="/register">Criar uma conta</Link>
        </div>
      </div>
    </>
  );
}

export default SignIn;
