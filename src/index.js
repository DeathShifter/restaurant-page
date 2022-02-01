import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

console.log("Watch this shit homie");
const nav = document.createElement('nav');
const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
const btn3 = document.createElement('button');

btn1.innerHTML = "Home";
btn2.innerHTML = "Menu";
btn3.innerHTML = "Contact";

document.body.insertBefore(nav, document.getElementById('content'));
nav.appendChild(btn1);
nav.appendChild(btn2);
nav.appendChild(btn3);

home();

btn1.onclick = home;
btn2.onclick = menu;
btn3.onclick = contact;
