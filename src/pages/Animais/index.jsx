import { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import { addDoc, collection } from "firebase/firestore";

import { toast } from "react-toastify";

export default function Customers() {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [responsavel, setResponsavel] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    if (nome !== "" && especie !== "" && responsavel !== "") {
      await addDoc(collection(db, "animais"), {
        nome: nome,
        especie: especie,
        responsavel: responsavel,
      })
        .then(() => {
          setNome("");
          setEspecie("");
          setResponsavel("");
          toast.success("Animal cadastrado");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Erro ao fazer o cadastro.");
        });
    } else {
      toast.error("Preencha todos os campos!");
    }
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Animais">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile" onSubmit={handleRegister}>
            <label>Nome</label>
            <input
              type="text"
              placeholder="Nome do Animal"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />

            <label>Espécie</label>
            <input
              type="text"
              placeholder="Digite a espécie"
              value={especie}
              onChange={(e) => setEspecie(e.target.value)}
            />
            <label>Responsável</label>

            <input
              type="text"
              placeholder="Nome do responsável"
              value={responsavel}
              onChange={(e) => setResponsavel(e.target.value)}
            />

            <button type="submit" onSubmit={handleRegister}>
              Salvar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
