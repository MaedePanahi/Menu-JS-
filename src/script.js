const menuBtns = document.querySelectorAll(".menu-btn");
const foodItems = document.querySelectorAll(".food-item");

let activeBtn = "all";



function showFoodMenu(newMenuBtn){
    activeBtn = newMenuBtn;
    foodItems.forEach((item)=>{
        if(item.classList.contains(activeBtn)){
            item.style.display="grid";
        }
        else{item.style.display="none";
    }});
    }
    function resetActiveBtn(){
        menuBtns.forEach((btn)=>{
            btn.classList.remove('active-btn');
        });
    }
menuBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        resetActiveBtn();
        showFoodMenu(btn.id);
        btn.classList.add('active-btn');
    });
});
showFoodMenu(activeBtn);

