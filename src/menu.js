export default function menu() {
    const divContent = document.getElementById('content');
    divContent.innerHTML = "";
    
    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.innerHTML = "Prison Mike's Menu";
    img.src = "../src/prison-mike.jpg";
    p.innerHTML = "Mike's Famous Salad\n Toilet Cocktail\n Mystery Parfait";

    divContent.appendChild(h1);
    divContent.appendChild(img);
    divContent.appendChild(p);
}