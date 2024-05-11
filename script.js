const icon = document.querySelector('.menu_icon');
        const navItems = document.querySelector('.navitems');
        const action_btn = document.querySelector('.action_btn');
        icon.addEventListener("click", () => {
            navItems.classList.toggle('flex');
            action_btn.classList.toggle('flex');
        })