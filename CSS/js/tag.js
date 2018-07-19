const colors = {
    p: '#388e3c',
    div: '#1565c0',
    span: '#e53935',
    section: '#f67809',
    ul: '#5e35b1',
    ol: '#fbc02d',
    header: '#d81b60',
    nav: '#64dd17',
    main: '#00acc1',
    footer: '#304ffe',
    form: '#9f6581',
    body: '#25b6da',
    padrao: '#616161',
    get(tag){
        return this[tag] ? this[tag] : this.padrao
    } 
}

let mostrarTag = elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = colors.get(tagName)

    if(!elemento.classList.contains('nolabel')){
        const label =  document.createElement('label')
        label.style.backgroundColor = colors.get(tagName)
        label.innerHTML = tagName
        elemento.insertBefore(label, elemento.childNodes[0])
    }
}

let esconderTag = elemento => {
    const tagName = elemento.tagName.toLowerCase()
    elemento.style.borderColor = '#616161'
    elemento.removeChild(elemento.childNodes[0]) 
}


document.querySelector('[mostrarTags]').onclick = () => {
    document.querySelector('[mostrarTags]').style.display = 'none'
    document.querySelector('[esconderTags]').style.display = 'block'
    document.querySelectorAll(".tag").forEach(mostrarTag)
}

document.querySelector('[esconderTags]').onclick = () => {   
    document.querySelector('[mostrarTags]').style.display = 'block'
    document.querySelector('[esconderTags]').style.display = 'none'
    document.querySelectorAll(".tag").forEach(esconderTag)
}