const select = document.querySelector(".filter"); 

select.addEventListener("change", function (e) {
    const chosen_food = e.target.value; /*target is the dropdown menu itself; value is getting current choice from dropdown */
    const currently_visible = document.querySelectorAll(".item.active"); /*have to create these variables WITHIN the function. add item and active to be as specific as possible */
    const make_visible = document.querySelectorAll(`.item.${chosen_food}`); /* ref to line 4 */

    currently_visible.forEach(function (food) {
        food.classList.remove("active"); /* removes all the active tags~ */  
    });

    make_visible.forEach(function (food) {
        food.classList.add("active"); /* adds active tags back!!! */  
    });

});