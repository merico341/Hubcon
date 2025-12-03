const links = Array.from(document.querySelectorAll('a'))
const url = document.location.href;

for (let i = 0; i < links.length; i++) { 
    if (links[i].href === url) { 
        links[i].style.color = '#1F51F5';
    }
}