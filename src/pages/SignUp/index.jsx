import { useState, useContext } from "react";
import "./signup.css";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

import logoclinica from "../../assets/logoclinica.png";

export default function SignUp() {
  const { signUp, loadingAuth } = useContext(AuthContext);

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && password !== "") {
      await signUp(email, password, name);
    }
  }

  return (
    <div className="container-center">
      <div className="login">
        <div className="login-area">
          <img src={logoclinica} alt="Logo do sistema de chamados" />
        </div>

        <form onSubmit={handleSubmit} className="form">
          <h1>Cadastrar nova conta</h1>
          <input
            type="text"
            placeholder="nome"
            value={name}
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

          <button type="submit">
            {loadingAuth ? "Carregando..." : "Cadastrar"}
          </button>

          <div className="toLogin">
            <Link to="/">Fazer login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
