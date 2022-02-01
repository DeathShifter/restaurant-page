export default function contact() {
    const divContent = document.getElementById('content');
    divContent.innerHTML = "";
    
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.innerHTML = "Contact Prison Mike";
    img.src = "../src/prison-mike.jpg";
    p.innerHTML = `"Wassup lil bitch, this prison mike. If you don't buy my shit, I'll kill you."`;

    divContent.appendChild(h1);
    divContent.appendChild(img);
    divContent.appendChild(p);
}
