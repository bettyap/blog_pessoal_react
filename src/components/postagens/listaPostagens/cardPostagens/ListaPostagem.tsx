import { useContext, useEffect, useState } from "react"
import CardPostagem from "../../cardPostagem/CardPostagem"
import Postagem from "../../../../models/Postagem"
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthContext";
import { buscar } from "../../../../services/Service";
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastAlerta } from "../../../../utils/ToastAlerts";

function ListaPostagem() {
  const [postagens, setPostagens] = useState<Postagem[]>([]);

  let navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado', '');
      navigate('/login');
    }
  }, [token]);

  async function buscarPostagens() {
    try {
      await buscar('/postagens', setPostagens, {
        headers: {
          Authorization: token,
        },
      });
    } catch (error: any) {
      if (error.toString().includes('403')) {
        ToastAlerta('O token expirou, favor logar novamente', '')
        handleLogout()
      }
    }
  }

  useEffect(() => {
    buscarPostagens();
  }, [postagens.length]);

  return (
    <>
      {postagens.length === 0 && (
        <CirclesWithBar
          height="200"
          width="200"
          color="#094a83"
          outerCircleColor="#094a83"
          innerCircleColor="#094a83"
          barColor="#094a83"
          ariaLabel="circles-with-bar-loading"
          wrapperStyle={{}}
          wrapperClass="flex justify-center m-1"
          visible={true}
        />
      )}
      <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {postagens.map((postagem) => (
          <CardPostagem key={postagem.id} post={postagem} />
        ))}
      </div>
    </>
  )
}

export default ListaPostagem
