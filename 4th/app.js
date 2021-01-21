const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "/images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "/images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "/images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "/images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "/images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "/images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "/images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "/images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "/images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter=document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded",function(){
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(m1){
    var display = m1.map(function(m2){
        return ` <div class="menu-section">
                <img src=${m2.img} class="menu-image" alt="">
                <div class="content-section">
                    <div class="dish">
                        <h3 class="dish-name">${m2.title}</h3>
                        <h3 class="dish-price">$${m2.price} </h3>
                    </div>
                    <p class="content">${m2.desc}</p>
                </div>
            </div>`
    }).join('');
sectionCenter.innerHTML= display;
}
function displayMenuButtons(){
       categories=menu.reduce(function(value,item){
            if(!value.includes(item.category)){
                value.push(item.category);
            }
            return value
        },["all"]
        );
        console.log(categories)
        const categoryBtn= categories.map(function(i){
            return `<button type="button" class="filter-btn" data-id=${i}>${i}</button>`
        }).join("");
        console.log(categoryBtn)
        const btnContainer=document.querySelector(".btn-container");
        btnContainer.innerHTML=categoryBtn;
    
    
        const filterBtn= document.querySelectorAll(".filter-btn");
        filterBtn.forEach(function(fbtn){
        fbtn.addEventListener("click",function(fBtn2){
            clickBtn= fBtn2.currentTarget.dataset.id;
                console.log(clickBtn)
                const  menuCategory= menu.filter(function(selectedCategory){
                    if(selectedCategory.category === clickBtn){
                        return selectedCategory;
                    }
                    })
                    if(clickBtn === "all" ){
                        displayMenuItems(menu);
                    }
            else{
                displayMenuItems(menuCategory);
            }
})
})

}

