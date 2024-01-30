import { toast, ToastOptions, ToastPosition } from 'react-toastify';

export function ToastAlerta(mensagem: string, tipo: string) {
  
  let ToastOptions: ToastOptions<ToastPosition> = {
    position: 'top-right',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    theme: 'colored',
    progress: undefined,
  };

  switch (tipo) {
    case 'sucesso':
      toast.success(mensagem, ToastOptions);
      break;

    case 'erro':
      toast.error(mensagem, ToastOptions);
      break;

    default:
      toast.info(mensagem, ToastOptions);
      break;
  }
}