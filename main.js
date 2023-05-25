var navElements = {
    links : [
        {
            title: 'About me',
            url: '#about_me'
        },
        {
            title: 'My recent Work',
            url: '#My_projects'
        },
        {
            title: 'About me',
            url: 'get_CV'
        },
        {
            title: 'Contact',
            url: '/views/form-contact.html'
        }
    ],
    render: function(){
        var ulElement = document.createElement("ul"); //crea el elemento ul
        ulElement.classList.add('nav-list-container');//añade clase al elemento
        ulElement.setAttribute('id', 'menu');//añade atributo al elemento 
        this.links.forEach(link => { //ciclo; para cada atributo, haz lo siguiente: 
            var liElement = document.createElement("li");//crea un elemento li
            var aElement = document.createElement("a");//crea un elemento a
            aElement.textContent = link.title; // crea text content 
            aElement.href = link.url; // crea link
            aElement.classList.add("nav-section"); 
            liElement.classList.add('nav-list-section')
            aElement.setAttribute("onclick", "menuColapse()");
            liElement.appendChild(aElement); // introduce en el elemento li al a como su hijo
            ulElement.appendChild(liElement); //introuce al elemento li en ul 
            
        });
        var navElementsContainer = document.getElementById("nav")
        navElementsContainer.appendChild(ulElement)
    }
}
navElements.render();

const toggleBtn = document.querySelector('#toggle_btn');
const iconMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');

var menuColapse = () => {
    menu.classList.toggle('active');
    const isopen = menu.classList.contains('active');
    iconMenu.classList = isopen
    ? 'fa-solid fa-xmark fa-2xl'
    : 'fa-solid fa-bars fa-2xl'
}

