export function ModalTerminos() {
  const modalContenedor = document.createElement('div');
  modalContenedor.classList.add('modal__contenedor');

  const modalCerrar = document.createElement('div');
  modalCerrar.classList.add('modal', 'modal-cerrar');

  const cerrar = document.createElement('p');
  cerrar.classList.add('cerrar');
  cerrar.textContent = 'Salir';

  const modaltexto = document.createElement('div');
  modaltexto.classList.add('modal-textos');

  const Titulo = document.createElement('h2');
  Titulo.classList.add('modal-titulo');
  Titulo.textContent = 'Términos y Condiciones';

  const contenedorMensaje = document.createElement('div');
  contenedorMensaje.classList.add('contenedor-mensaje');
  const mensaje = document.createElement('p');
  mensaje.textContent = 'El presente Política de Privacidad establece los términos en que YAMI usa y protege la información que es proporcionada por sus usuarios al momento de utilizar si app. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta app para asegurarse que está de acuerdo con dichos cambios.';

  modalContenedor.append(modalCerrar);
  modalCerrar.append(modaltexto);
  modaltexto.append(Titulo);
  contenedorMensaje.append(mensaje);
  modaltexto.append(contenedorMensaje);
  modaltexto.append(cerrar);

  modalContenedor.style.opacity = '0';
  modalContenedor.style.visibility = 'hidden';

  const abrirModal = () => {
    modalContenedor.style.opacity = '1';
    modalContenedor.style.visibility = 'visible';
    modalCerrar.classList.toggle('modal-cerrar');
  };

  const cerrarModal = () => {
    modalCerrar.classList.toggle('modal-cerrar');
    setTimeout(() => {
      modalContenedor.style.opacity = '0';
      modalContenedor.style.visibility = 'hidden';
    }, 900);
  };

  cerrar.addEventListener('click', cerrarModal);

  return {
    modalContenedor,
    abrirModal,
    cerrarModal,
  };
}
