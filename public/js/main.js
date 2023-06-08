var navElements = {
    links : [
        {
            title: 'Home',
            url: '#Home'
        },
        {
            title: 'About me',
            url: '#About_me'
        },
        {
            title: 'Projects',
            url: '#My_projects'
        },
        {
            title: 'Contact',
            url: '#contact'
        }
    ],
    render: function(){
        var ulElement = document.createElement("ul"); //crea el elemento ul
        ulElement.classList.add('nav-list-container');//añade clase al elemento
        ulElement.classList.add('nav-list-structure');
        ulElement.setAttribute('id', 'menu');//añade atributo al elemento 
        this.links.forEach(link => { //ciclo; para cada atributo, haz lo siguiente: 
            var liElement = document.createElement("li");//crea un elemento li
            var aElement = document.createElement("a");//crea un elemento a
            aElement.textContent = link.title; // crea text content 
            aElement.href = link.url; // crea link
            aElement.classList.add("nav-link"); 
            liElement.classList.add('nav-link-list')
            aElement.setAttribute("onclick", "menuColapse()");
            liElement.appendChild(aElement); // introduce en el elemento li al a como su hijo
            ulElement.appendChild(liElement); //introuce al elemento li en ul 
        });
        var navElementsContainer = document.getElementById("nav")
        navElementsContainer.appendChild(ulElement)
    }
}
navElements.render();


///////////////////////////////////////////////
const navBar = document.getElementById('navBar')
const toggleBtn = document.getElementById('btn-show');
const iconMenu = document.getElementById('icon-menu');
const menu = document.getElementById('menu');
const main = document.getElementById('main')

var menuColapse = () => {
    menu.classList.toggle('active');
    navBar.classList.toggle('show');
    main.classList.toggle('collapse')
    const isopen = menu.classList.contains('active');
    iconMenu.classList = isopen
    ? 'fa-sharp fa-solid fa-xmark fa-2xl'
    : 'fa-sharp fa-solid fa-bars fa-2xl'
}

////////////////////////////////////////////


class CardRenderer {
    constructor(services) {
      this.services = services;
      this.colors = ['#F279A6', '#3470BF', '#38A673', '#D9AF32', '#F2522E', '#fff', '#000'];
    }
      
        createCardElement(service, color) {
          const cardElement = document.createElement('div');
          cardElement.classList.add('card', 'card-structure', 'dynamic-card');
          cardElement.style.backgroundColor = color;
      
          const imgBox = document.createElement('div');
          imgBox.classList.add('card-img-container');
      
          const imgElement = document.createElement('img');
          imgElement.setAttribute('src', service.logo);
          imgElement.classList.add('logo-project');
      
          const descriptionElement = document.createElement('div');
          descriptionElement.classList.add('card-description');
      
          const titleElement = document.createElement('h2');
          titleElement.textContent = service.title;
      
          const descriptionTextElement = document.createElement('p');
          descriptionTextElement.textContent = service.description;
      
          const linkElement = document.createElement('a');
          linkElement.setAttribute('href', service.link);
          linkElement.classList.add('btn-secondary');
          linkElement.textContent = service.go;
      
          cardElement.appendChild(imgBox);
          imgBox.appendChild(imgElement);
          cardElement.appendChild(descriptionElement);
          descriptionElement.appendChild(titleElement);
          descriptionElement.appendChild(descriptionTextElement);
          descriptionElement.appendChild(linkElement);
            
          return cardElement;
        }
      
        render() {
          const fragment = document.createDocumentFragment();
          const projectsElement = document.getElementById('projects');
      
          this.services.forEach((service, index) => {
            const colorIndex = index % this.colors.length;
            const color = this.colors[colorIndex];
            const cardElement = this.createCardElement(service, color);
            fragment.appendChild(cardElement);
          });
      
          projectsElement.innerHTML = '';
          projectsElement.appendChild(fragment);
        }
      }
      
      const projectsElements = {
        services: [
          {
            title: 'Astro Records',
            description:
              'Minimalist "Coming Soon" landing page. A simple yet effective page to generate anticipation and excitement around the launch of Astro Records. Developed using pure HTML and CSS.',
            link: 'http://astrorecords.com',
            logo: '/public/assets/img/ASTRO RECORDS LOGO WHITE.png',
            go:'Astrorecords.com'
          },
          {
            title: 'DDR tech solutions',
            description: '',
            link: 'http://ddrtechsolutions.com/',
            logo: '/public/assets/img/DDR.png',
            go:'ddrtechsolutions.com'
          },
        ],
      };
      
      const cardRenderer = new CardRenderer(projectsElements.services);
      cardRenderer.render();
      
  

////////////////////////////////////////////


const noform = document.getElementById('buttonSend');
var alertNoForm = () =>{
    alert('This section is currently under construction, but feel free to reach out to me through my social media channels.')
}