function find_edit() {
    const item = document.getElementById('sur')
    console.log(item.innerText)
    item.innerHTML = "<b>GORNOVA</b>"

    const item2 = document.getElementById('nam')
    console.log(item2.innerText)
    item2.innerHTML = "<b>EKATERINA</b>"

    const item3 = document.getElementById('pat')
    console.log(item3.innerText)
    item3.innerHTML = "<b>ALEKSEEVNA</b>"
}

const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click", find_edit)