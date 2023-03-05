let listMenuIsOpen = false

const showMenu = () => {
    let listMenu = document.getElementById("list-menu-mobile")

    if (listMenuIsOpen == true) {
        listMenu.style.display = 'none'
        listMenuIsOpen = false;
        console.log(listMenu)
    } else {
        listMenu.style.display = 'block'
        listMenuIsOpen = true;
        console.log(listMenu)
    }
}