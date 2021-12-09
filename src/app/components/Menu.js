export function Menu(){

    const d = document
    //Menu
    const $menu = d.createElement('nav')
    $menu.classList.add('menu')

    //iconos del menu 
    //icono 1
    const itemHome = d.createElement('a')
    itemHome.classList.add('menu__link')
    const $iconHome = document.createElement("i");
    $iconHome.classList.add("icon-send");

    itemHome.append($iconHome)

    //evento del ancla
    // itemHome.addEventListener('click', window.location.hash = "#/home")


    //icono 2s
    const itemLupa = d.createElement('a')
    itemLupa.classList.add('menu__link')
    const $iconLupa = document.createElement("i");
    $iconLupa.classList.add("icon-location");

    itemLupa.append($iconLupa)
    //icono 3
    const itemPlus = d.createElement('a')
    itemPlus.classList.add('menu__link')
    const $iconPlus = document.createElement("i");
    $iconPlus.classList.add("icon-send");

    itemPlus.append($iconPlus)
    //icono 4
    const itemReseña = d.createElement('a')
    itemReseña.classList.add('menu__link')
    const $iconReseña = document.createElement("i");
    $iconReseña.classList.add("icon-send");

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