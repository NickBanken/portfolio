let skills = [
    {
        name:"vuejs",
        color:"green",
        score:90,
        skill:"VUE.js",
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"php",
        color:"blue",
        score:65,
        skill:"php",
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    }
]

for(let i = 0; i < skills.length; i++){
    createCards(skills[i].name,skills[i].color,skills[i].score,skills[i].skill,skills[i].para)
}



function createCards(name,color,score,skill,paragr){
    let row = document.getElementById('skillCards');
    
    //create outer for the card
    let outer = document.createElement('div');
    outer.className ="card__outer"

     //create outer for the card
     let inner = document.createElement('div');
     inner.classList ="card__inner"
    
    //create the card
    let card = document.createElement('div');
    card.className = "card__skills card__skills--"+name;

    //create the card container for the image
    let cardCon = document.createElement('div');
    cardCon.className = 'card__container';

    //create an svg for the circle
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.classList = 'circular-chart circular-chart--'+color;

    //backpath for svg
    let firstPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
    firstPath.setAttribute("d","M18 2.0845 "+
    "a 15.9155 15.9155 0 0 1 0 31.831 "+
    "a 15.9155 15.9155 0 0 1 0 -31.831");
    firstPath.classList = 'circle-bg';

    //frontpath for svg
    let secondPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
    secondPath.setAttribute("stroke-dasharray",score+",100");
    secondPath.setAttribute("d","M18 2.0845 "+
    "a 15.9155 15.9155 0 0 1 0 31.831 "+
    "a 15.9155 15.9155 0 0 1 0 -31.831");
    secondPath.classList = 'circle';

    //skill icon
    let icon = document.createElement('i');
    icon.className = 'devicon-'+name+'-plain colored devicon';


    //title
    let title = document.createElement('h3');
    title.innerHTML = skill;

    //para
    let para = document.createElement('p');
    para.innerHTML = paragr;
    para.classList = "skills__para skills__para--"+name;



    row.appendChild(outer);
    outer.appendChild(inner);
    inner.appendChild(card);
    card.appendChild(cardCon);
    cardCon.appendChild(svg);
    cardCon.appendChild(icon);
    svg.appendChild(firstPath);
    svg.appendChild(secondPath);
    card.appendChild(title);
    card.appendChild(para);
    
    
    console.log(row);

    // row.appendChild()
}

