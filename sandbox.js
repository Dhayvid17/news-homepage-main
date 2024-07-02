const menus = document.querySelectorAll(".icon-menu, .icon-close");

menus.forEach(menu => {
    menu.addEventListener('click', function (e) {
        let nav = document.querySelector(".list-style");
        let backgrd = document.querySelector('.overall');

        if (nav.style.visibility === 'hidden') {
            nav.style.visibility = 'visible';
            backgrd.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            backgrd.style.height = "100%";
        } else {
            nav.style.visibility = 'hidden';
            backgrd.style.backgroundColor = "inherit";
        }
    });
});
