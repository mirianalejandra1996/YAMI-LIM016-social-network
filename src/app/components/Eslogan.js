export function Eslogan(eslogan){

    const $eslogan = document.createElement("div");
    $eslogan.classList.add("eslogan-container");
    const $esloganText = document.createElement("h2");
    $esloganText.classList.add("eslogan-text");
    $esloganText.textContent = eslogan ;
  
    $eslogan.append($esloganText);

    return $eslogan
}