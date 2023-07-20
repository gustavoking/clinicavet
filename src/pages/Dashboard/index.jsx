import { useContext } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import { FaDog } from "react-icons/fa";

import { Link } from "react-router-dom";

import "./dashboard.css";

export default function Dashboard() {
  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Animais">
          <FaDog size={25} />
        </Title>

        <>
          <table>
            <thead>
              <tr>
                <th scope="col">Animal</th>
                <th scope="col">espécie</th>
                <th scope="col">Responsavel</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Cliente">Mercado Esquina</td>
                <td data-label="Assunto">Suporte</td>
                <td data-label="Cadastrado">12/05/2022</td>
                <td data-label="#">
                  <button
                    className="action"
                    style={{ backgroundColor: "#3583f6" }}
                  >
                    <FiSearch color="#FFF" size={17} />
                  </button>
                  <button
                    className="action"
                    style={{ backgroundColor: "#f6a935" }}
                  >
                    <FiEdit2 color="#FFF" size={17} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      </div>
    </div>
  );
}
