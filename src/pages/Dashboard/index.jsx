import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import { FiPlus, FiMessageSquare, FiSearch, FiEdit2 } from "react-icons/fi";
import {
  collection,
  getDocs,
  orderBy,
  limit,
  startAfter,
  query,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";

import { FaDog } from "react-icons/fa";
import { db } from "../../services/firebaseConnection";

import { Link, Navigate } from "react-router-dom";

import "./dashboard.css";

const listRef = collection(db, "animais");

export default function Dashboard() {
  const navigate = useNavigate();

  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    async function loadAnimais() {
      const querySnapshot = await getDocs(listRef).then((snapshot) => {
        let lista = [];

        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            especie: doc.data().especie,
            responsavel: doc.data().responsavel,
          });
        });

        setChamados(lista);
      });
    }

    loadAnimais();
  }, []);

  console.log(chamados);

  const { logout } = useContext(AuthContext);

  async function handleLogout() {
    await logout();
  }

  function handleEdit(id) {
    navigate(`/edit?id=${id}`);
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
            {chamados.map((chamado) => {
              return (
                <tbody>
                  <tr>
                    <td data-label="Animal">{chamado.nome}</td>
                    <td data-label="Especie">{chamado.especie}</td>
                    <td data-label="Responsavel">{chamado.responsavel}</td>
                    <td data-label="#">
                      <button
                        onClick={() => handleEdit(chamado.id)}
                        className="action"
                        style={{ backgroundColor: "#f6a935" }}
                      >
                        <FiEdit2 color="#FFF" size={17} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </>
      </div>
    </div>
  );
}
