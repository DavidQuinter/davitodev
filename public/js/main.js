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

/////////////////////////////////////////////
var servicesElements = {
    services : [
        {
            listA :{
                titleA: 'Things I design:',
                elementsA: ['UI', 'UX', 'Web', 'Apps'],
            },
            listB:{
                titleB: 'Design Tools:',
                elementsB: ['figma', 'photoshop']
            }
        },
        {
            listA :{
                titleA: 'Languages I speak:',
                elementsA: ['HTML', 'CSS', 'JS', 'SCSS', 'JSON', 'PERL', 'SQL'],
            },
            listB:{
                titleB: 'Dev Tools:',
                elementsB: ['Terminal', 'Github', 'Bootstrap', 'SASS', 'Vue', 'React', 'Node', 'Express.js', 'Azure']
            }
        }
    ],
    render: function(){
        var toolsContainer = document.createElement('div');
        toolsContainer.classList.add('tools-structure', 'tools-styles')
        this.services.forEach(service => { 
            var listContainerA = document.createElement('div');
            var listContainerB = document.createElement('div');
            listContainerA.classList.add('styles-toolA')
            listContainerB.classList.add('styles-toolB')

            var h3ElementA = document.createElement('h3');
            
            h3ElementA.textContent = service.listA.titleA;
            listContainerA.appendChild(h3ElementA);
            var h2ElementB = document.createElement('h3');
            
            h2ElementB.textContent = service.listB.titleB;
            listContainerB.appendChild(h2ElementB);
            var ultoolA = document.createElement('div');
            var ultoolB = document.createElement('ul');

            ultoolA.classList.add('ul-styles');
            ultoolB.classList.add('ul-styles');

            var list1 = service.listA.elementsA;
            var list2 = service.listB.elementsB;

            var litool = document.createElement('p');
            litool.classList.add('li-styles')
            litool.textContent = list1
            ultoolA.appendChild(litool)
            

            list2.forEach(subServiceB=>{
                var litoolB = document.createElement('li');
                litoolB.classList.add('li-styles')
                litoolB.textContent = subServiceB;
                ultoolB.appendChild(litoolB)

            })
            listContainerA.appendChild(ultoolA);
            listContainerB.appendChild(ultoolB)
            listContainerA.appendChild(listContainerB)
            toolsContainer.appendChild(listContainerA)
            
        }) 
        
        document.getElementById('tools').appendChild(toolsContainer);
    }
}
servicesElements.render();
const noform = document.getElementById('buttonSend');
var alertNoForm = () =>{
    alert('This section is currently under construction, but feel free to reach out to me through my social media channels.')
}