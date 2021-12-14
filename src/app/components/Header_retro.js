export function HeaderRetro (){
    const headerContainer = document.createElement("div")
    headerContainer.classList.add("header-timeline")

    // const background = document.createElement("div")
    // background.classList.add("background-header")
    const divBack = document.createElement("div")
    divBack.classList.add('header_div-icon')
    const iconBack = document.createElement("div")
    divBack.addEventListener("click", ()=>{
        console.log("entra a back")
        window.history.back()})
    iconBack.classList.add("header_icon")
    iconBack.classList.add("icon-arrow-back")
    divBack.append(iconBack)

    const logoHeader = document.createElement("div")
    logoHeader.classList.add("logo-timeline")

    // background.append(logoHeader)
    // headerContainer.append(background)
    headerContainer.append(divBack)
    headerContainer.append(logoHeader)

    return headerContainer
}