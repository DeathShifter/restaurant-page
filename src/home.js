export default function home() {
    const divContent = document.getElementById('content');
    divContent.innerHTML = "";

    const h1 = document.createElement('h1');
    const img = document.createElement('img');
    const p = document.createElement('p');

    h1.innerHTML = "Prison Mike's Salad";
    img.src = "../src/prison-mike.jpg";
    p.innerHTML = "Man, this restaurant is so good! I love the way they toss my salad!";

    divContent.appendChild(h1);
    divContent.appendChild(img);
    divContent.appendChild(p);
}