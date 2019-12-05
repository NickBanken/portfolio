let skills = [
    {
        name:"vuejs",
        color:"green",
        score:90
    },
    {
        name:"php",
        color:"blue",
        score:65
    }
]

for(let i = 0; i < skills.length; i++){
    createCards(skills[i].name,skills[i].color,skills[i].score)
}



function createCards(skill,color,score){
    let row = document.getElementById('skillCards');
    
    //create outer for the card
    let outer = document.createElement('div');
    outer.className ="card__outer"

     //create outer for the card
     let inner = document.createElement('div');
     inner.className ="card__inner"
    
    //create the card
    let card = document.createElement('div');
    card.className = "card__skills card__skills--"+skill;

    //create the card container for the image
    let cardCon = document.createElement('div');
    cardCon.className = 'card__container';

    //create an svg for the circle
    let svg = document.createElementNS("http://www.w3.org/2000/svg",'svg');
    svg.setAttribute("viewBox", "0 0 36 36");
    svg.classList = 'circular-chart circular-chart--tomato';

    //backpath for svg
    let firstPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
    firstPath.setAttribute("d","M18 2.0845 "+
    "a 15.9155 15.9155 0 0 1 0 31.831 "+
    "a 15.9155 15.9155 0 0 1 0 -31.831");
    firstPath.classList = 'circle-bg';

    //frontpath for svg
    let secondPath = document.createElementNS("http://www.w3.org/2000/svg",'path');
    secondPath.setAttribute("stroke-dasharray","80,100");
    secondPath.setAttribute("d","M18 2.0845 "+
    "a 15.9155 15.9155 0 0 1 0 31.831 "+
    "a 15.9155 15.9155 0 0 1 0 -31.831");
    secondPath.classList = 'circle';

    //skill icon
    let icon = document.createElement('i');
    icon.className = 'devicon-'+skill+'-plain colored devicon';

    row.appendChild(outer);
    outer.appendChild(inner);
    inner.appendChild(card);
    card.appendChild(cardCon);
    cardCon.appendChild(svg);
    cardCon.appendChild(icon);
    svg.appendChild(firstPath);
    svg.appendChild(secondPath);
    
    
    console.log(row);

    // row.appendChild()
}

