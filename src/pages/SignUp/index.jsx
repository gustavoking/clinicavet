import { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

import logoclinica from "../../assets/logoclinica.png";

export default function SignUp() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logoclinica} alt="Logo do sistema de chamados" />
        </div>

        <form className="form">
          <h1>Cadastrar nova conta</h1>
          <input
            type="text"
            placeholder="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Cadastrar</button>

          <div className="toLogin">
            <Link to="/">Fazer login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
