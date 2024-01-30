import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { buscar } from '../../../services/Service';
import CardTemas from '../cardTemas/CardTemas';
import Tema from '../../../models/Tema';
import { AuthContext } from '../../../contexts/AuthContext';
import { CirclesWithBar } from 'react-loader-spinner';
import { ToastAlerta } from '../../../utils/ToastAlerts';

function ListaTemas() {

  const navigate = useNavigate();

  const [temas, setTemas] = useState<Tema[]>([])

  const { usuario, handleLogout } = useContext(AuthContext)

  const token = usuario.token

  async function buscarTemas() {
    try {
      await buscar('/temas', setTemas, {
        headers: { Authorization: token }
      })
    } catch (error: any) {
      if (error.toString().includes('403'))
        ToastAlerta('O token expirou!', '')
      handleLogout
    }
  }

  useEffect(() => {
    if (token === '') {
      ToastAlerta('Você precisa estar logado!', '')
      navigate('/login')
    }
  }, [token])

  useEffect(() => {
    buscarTemas()
  }, [temas.length])

  return (
    <>
      {temas.length === 0 && (
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
      <div className="flex justify-center w-full my-4">
        <div className="container flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <>
              {temas.map((tema) => (
                <>
                  <CardTemas key={tema.id} tema={tema} />
                </>
              ))}
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListaTemas;