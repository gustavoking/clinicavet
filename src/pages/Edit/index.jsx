import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";

import { toast } from "react-toastify";

export default function Edit() {
  const [nome, setNome] = useState("");
  const [especie, setEspecie] = useState("");
  const [responsavel, setResponsavel] = useState("");

  const params = new URLSearchParams(location.search);

  const id = params.get("id");

  const listRef = doc(db, "animais", id);

  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    async function loadAnimais() {
      const querySnapshot = await getDocs(listRef).then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log("dsadsa");
          if (doc.id === id) {
            setNome(doc.data().nome);
            setEspecie(doc.data().especie);
            setResponsavel(doc.data().responsavel);
          }
        });
      });
    }

    loadAnimais();
  }, []);

  console.log(nome);

  async function handleUpdate(e) {
    const listRefUpdate = doc(db, "animais", id);

    e.preventDefault();

    await updateDoc(listRefUpdate, {
      nome: nome,
      especie: especie,
      responsavel: responsavel,
    }).then(() => {
      setNome("");
      setEspecie("");
      setResponsavel("");
      toast.success("Animal Atualizado");
    });
    return;
  }

  return (
    <div>
      <Header />

      <div className="content">
        <Title name="Animais">
          <FiUser size={25} />
        </Title>

        <div className="container">
          <form className="form-profile">
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

            <button type="submit" onClick={(e) => handleUpdate(e)}>
              Atualizar dados
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
