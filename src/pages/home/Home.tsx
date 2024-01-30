import ListaPostagem from "../../components/postagens/listaPostagens/cardPostagens/ListaPostagem"
import ModalPostagem from "../../components/postagens/modalPostagem/ModalPostagem"

function Home() {
  return (
    <>
      <div id="container" className="flex justify-center bg-dodger-blue-700">
        <div id="subcontainer" className="container grid grid-cols-2 text-white">
          <div id="texto" className="flex flex-col gap-4 justify-center py-4">
            <h2 className="text-5xl font-bold">Seja Bem Vinde!</h2>
            <p className="text-xl">Expresse aqui os seus pensamentos e opiniões</p>

            <div className="flex gap-4">
              <ModalPostagem />
            </div>
          </div>

          <div id="imagem" className="flex justify-center">
            <img
              src="https://imgur.com/IbobMPv.png"
              alt="Imagem da Página Home"
              className="w-2/3"
            />
          </div>
        </div>
      </div>
      <ListaPostagem />
    </>
  )
}

export default Home