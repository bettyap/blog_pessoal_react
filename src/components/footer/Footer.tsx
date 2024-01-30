import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  let data = new Date().getFullYear()

  return (
    <>
      <div className="flex justify-center bg-dodger-blue-700 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Blog pessoal Generation | Copyright: {data}</p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <a href="https://github.com/bettyap">
              <GithubLogo size={48} weight='bold' className='hover:text-dodger-blue-500'/>
            </a>
            <a href="https://www.linkedin.com/in/elisabeth-aparecida/">
              <LinkedinLogo size={48} weight='bold' className='hover:text-dodger-blue-500'/>
            </a>
            <a href="https://www.instagram.com/betty_apareciida/">
              <InstagramLogo size={48} weight='bold' className='hover:text-dodger-blue-500'/>
            </a>
            <a href="https://www.facebook.com/bettyapareciida/">
              <FacebookLogo size={48} weight='bold' className='hover:text-dodger-blue-500'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer