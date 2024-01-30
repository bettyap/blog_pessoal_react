import { ReactNode, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerts";

function NavBar() {

  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext)

  function logout() {
    handleLogout()
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'sucesso')
    navigate('/login')
  }

  let navbarComponent: ReactNode

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full bg-dodger-blue-700  text-white flex justify-center py-4'>
        <div className="container flex justify-between text-lg">
          <Link to='/' className="text-2xl font-bold">Blog Pessoal</Link>
          <div className='flex gap-4'>
            <Link to='/postagens' className='hover:text-dodger-blue-500'>Postagens</Link>
            <Link to='/temas' className='hover:text-dodger-blue-500'>Temas</Link>
            <Link to='/cadastroTema' className='hover:text-dodger-blue-500'>Cadastrar tema</Link>
            <Link to='/perfil' className='hover:text-dodger-blue-500'>Perfil</Link>
            <Link to='' onClick={logout} className='hover:text-dodger-blue-500 hover:underline'>Sair</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default NavBar