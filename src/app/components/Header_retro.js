export function HeaderRetro (){
    const headerContainer = document.createElement("div")
    headerContainer.classList.add("header-timeline")

    // const background = document.createElement("div")
    // background.classList.add("background-header")

    const iconBack = document.createElement("div")
    iconBack.classList.add("header_icon")
    iconBack.classList.add("icon-arrow-back")

    const logoHeader = document.createElement("div")
    logoHeader.classList.add("logo-timeline")

    // background.append(logoHeader)
    // headerContainer.append(background)
    headerContainer.append(iconBack)
    headerContainer.append(logoHeader)

    return headerContainer
}