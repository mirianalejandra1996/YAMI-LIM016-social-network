export function ModalTerminos () {

    const $modalContenedor = document.createElement('div')
    $modalContenedor.classList.add('modal-contenedor')

    const $modalCerrar = document.createElement('div')
    $modalCerrar.classList.add('modal', 'modal-cerrar')

    const $cerrar = document.createElement('p')
    $cerrar.classList.add('cerrar')
    $cerrar.textContent = 'X'

    const $modaltexto = document.createElement('div')
    $modaltexto.classList.add('modal-textos')

    const $Titulo = document.createElement('h2')
    $Titulo.textContent='Terminos y Condiciones'
    

    const $mensaje = document.createElement('p')
    $mensaje.textContent = 'Mediante tu acceso o uso de los Servicios acuerdas obligarte al cumplimiento de los presentes Términos y Condiciones, los cuales regulan la relación contractual entre tu persona y el Proveedor del Servicio. Si no aceptas estos Términos y Condiciones, no podrás acceder o usar los Servicios. El Proveedor del Servicio podrá poner fin de manera inmediata a estos Términos y Condiciones o cualquiera de los Servicios respecto a ti, en general, y dejar de ofrecer o denegar el acceso o uso de los Servicios de manera total o parcial, en cualquier momento y por cualquier motivo'
   
   
    $modalContenedor.append($modalCerrar)
    $modalCerrar.append($cerrar)
    $modalCerrar.append($modaltexto)
    $modaltexto.append($Titulo)
    $modaltexto.append($mensaje)

    $modalContenedor.style.opacity = "0"
    $modalContenedor.style.visibility = "hidden"

    const abrirModal  = ()  => {
        $modalContenedor.style.opacity = "1"
        $modalContenedor.style.visibility = "visible"
        $modalCerrar.classList.toggle('modal-cerrar')
    }

    const cerrarModal = ()  => {
         $modalCerrar.classList.toggle('modal-cerrar') 
         setTimeout(function () {
            $modalContenedor.style.opacity = "0"
            $modalContenedor.style.visibility = "hidden"
                 }, 900)
    }

    $cerrar.addEventListener('click', cerrarModal)

   return {
       $modalContenedor,
       abrirModal,
       cerrarModal
   }
}