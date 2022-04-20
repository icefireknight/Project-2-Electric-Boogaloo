const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu')

const color = 'var(--main-bg)';

console.dir(mainEl);
console.dir(topMenuEl);

mainEl.className = 'flex-ctr';
mainEl.style.backgroundColor = color;
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';

topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.className = 'flex-around';


// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

  menuLinks.forEach(function(link){
      const linkEl =document.createElement('a');
      linkEl.setAttribute('href', link.href);
      linkEl.textContent = link.text;
      topMenuEl.appendChild(linkEl);
  });