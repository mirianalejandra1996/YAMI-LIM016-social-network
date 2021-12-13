export function Menu(toggleModalPlus, toggleModalPerfil){

    const d = document
    //Menu
    const $menu = d.createElement('nav')
    $menu.classList.add('menu')

    //iconos del menu
    //icono 1
    const itemHome = d.createElement('a')
    itemHome.classList.add('menu__link')
    const $iconHome = document.createElement("i");
    $iconHome.classList.add("icon-home");

    itemHome.append($iconHome)

    //evento del ancla
    // itemHome.addEventListener('click', window.location.hash = "#/home")


    //icono 2s
    const itemLupa = d.createElement('a')
    itemLupa.classList.add('menu__link')
    const $iconLupa = document.createElement("i");
    $iconLupa.classList.add("icon-lupa");

    itemLupa.append($iconLupa)
    //icono 3
    const itemPlus = d.createElement('a')
    itemPlus.classList.add('menu__link')
    const $iconPlus = document.createElement("i");
    $iconPlus.classList.add("icon-addPost");

    itemPlus.append($iconPlus)
    itemPlus.addEventListener("click", ()=>toggleModalPlus())
    //icono 4
    const itemReseña = d.createElement('a')
    itemReseña.classList.add('menu__link')
    const $iconReseña = document.createElement("i");
    $iconReseña.classList.add("icon-comment");

    itemReseña.append($iconReseña)
    //icono 5
    const itemPerfil = d.createElement('a')
    itemPerfil.classList.add('menu__link')
    const $iconPerfil= document.createElement("i");
    $iconPerfil.classList.add("icon-user");

    itemPerfil.append($iconPerfil)



 $menu.append(itemHome)
 $menu.append(itemLupa)
 $menu.append(itemPlus)
 $menu.append(itemReseña)
 $menu.append(itemPerfil)

return $menu

}

export function MenuList (){
    const $modalContenedor = document.createElement('div')
    $modalContenedor.classList.add('modal__contenedor','align-end','cerrar')

    const $modalLista = document.createElement('div')
    $modalLista.classList.add('modal__lista')

    const $itemsPublicacion = document.createElement('button')
    $itemsPublicacion.classList.add('modal__button')
    $itemsPublicacion.textContent = 'Publicación'

    $itemsPublicacion.addEventListener("click", () => {
        window.location.hash = "#/formPost";
    })

    const $itemsReseña = document.createElement('button')
    $itemsReseña.classList.add('modal__button')
    $itemsReseña.textContent = 'Reseña'

    const $itemsHistoria = document.createElement('button')
    $itemsHistoria.classList.add('modal__button')
    $itemsHistoria.textContent = 'Historia'

    $modalLista.append($itemsPublicacion)
    // $modalLista.append($itemsReseña)
    // $modalLista.append($itemsHistoria)

    $modalContenedor.append($modalLista)

    const toggleModalPlus = () => {
        $modalContenedor.classList.toggle('cerrar')

    }

    return {
        menuModalPlus: $modalContenedor,
        toggleModalPlus: toggleModalPlus
    }

}