// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

const mainEl = document.querySelector('main');
console.log(mainEl);

mainEl.style.backgroundColor = 'var(--main-bg)'
//let backGroundColor = 'var(--main-bg)'
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
mainEl.classList = 'flex-ctr';

const topmenuEl = document.getElementById('top-menu')
console.log(topmenuEl);

topmenuEl.style.height = ('100%')
topmenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topmenuEl.classList = 'flex-around';

menuLinks.forEach(function(link) {
let linkEl = document.createElement('a') 
linkEl.setAttribute('href',link.href)
linkEl.textContent = link.text
topmenuEl.appendChild(linkEl)
})