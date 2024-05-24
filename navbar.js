var menu = document.getElementById("menu-icon")
var menuOptions = document.getElementById("navbar-container-left-list")
var searchIcon = document.getElementById("search-icon")
var searchBar = document.getElementById("search-bar")
var isMenuOpen = false
var isSearchOpen = false

menu.addEventListener("click", () => {
    if (!isMenuOpen) {
        isMenuOpen = true
        menuOptions.classList.add("active")  
        document.body.classList.add("stop-scrolling")   
        closeMobileMenu();
    }
})

searchIcon.addEventListener("click", () => {
    if (isSearchOpen) {
        searchBar.classList.remove("input")
        isSearchOpen = false
    }
    else {
        searchBar.classList.add("input")
        isSearchOpen = true
    }
})

function closeMobileMenu () {
    var touchStart, touchEnd

    menuOptions.addEventListener("touchstart", (e) => {
        touchStart = e.changedTouches[0].clientX
    }, false)
    menuOptions.addEventListener("touchmove", (e) => {
        ;
    }, false)
    menuOptions.addEventListener("touchend", (e) => {
        touchEnd = e.changedTouches[0].clientX    
        if (touchStart-touchEnd > 0) {
            //Close Open Menu On Slide
            isMenuOpen = false
            menuOptions.classList.remove("active")
            document.body.classList.remove("stop-scrolling")   
        }
    }, false)
}


