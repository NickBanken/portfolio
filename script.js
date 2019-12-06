let skills = [
    {
        name:"html5",
        color:"orange",
        score:85,
        skill:"HTML5",
        working:false,
        para:`The SEO score is very important to me, that is why I strive to get my scores as high as possible.
        <br>
        I apply the B.E.M method to make classes easier to read and used in sass later.`
    },
    {
        name:"css3",
        color:"blue",
        score:85,
        skill:"css",
        working:false,
        para:`I'm not a designer but once I get hold of a design, I can make the perfect duplicate in HTML and CSS!
        <br>
        I rather write SCSS than CSS, it's compact and more readable.`
    },
    {
        name:"sass",
        color:"pink",
        score:75,
        skill:"sass",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"javascript",
        color:"yellow",
        score:84,
        skill:"js",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"git",
        color:"tomato",
        score:78,
        skill:"git",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"vuejs",
        color:"green",
        score:40,
        skill:"VUE.js",
        working:true,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"laravel",
        color:"tomato",
        score:45,
        skill:"Laravel",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"php",
        color:"php",
        score:65,
        skill:"php",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"unity",
        color:"unity",
        score:55,
        skill:"Unity",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"jquery",
        color:"jquery",
        score:80,
        skill:"JQuery",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"photoshop",
        color:"photoshop",
        score:75,
        skill:"PS",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    {
        name:"illustrator",
        color:"ai",
        score:60,
        skill:"Ai",
        working:false,
        para:`I love to use SASS, it keeps your files structured and readable for others.
        This combined with the B.E.M method is heaven.
        <br>
        Ofcourse, I could drop B.E.M if you'd like!`
    },
    
]

for(let i = 0; i < skills.length; i++){
    createCards(skills[i].name,skills[i].color,skills[i].score,skills[i].skill,skills[i].para,skills[i].working)
}



function createCards(name,color,score,skill,paragr,work){
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

    let icon
    
    if(name !=='unity'){
        //skill icon
        icon = document.createElement('i');
        icon.className = 'devicon-'+name+'-plain devicon';
    }else{
        icon = document.createElement('i');
        icon.className ="devicon "+name;
    }
    


    //title
    let title = document.createElement('h3');
    title.innerHTML = skill;

    //para
    let para = document.createElement('p');
    para.innerHTML = paragr;
    para.classList = "skills__para skills__para--"+name;

    



    row.appendChild(outer);
    // outer.appendChild(inner);
    outer.appendChild(card);
    card.appendChild(cardCon);
    cardCon.appendChild(svg);
    cardCon.appendChild(icon);
    svg.appendChild(firstPath);
    svg.appendChild(secondPath);
    card.appendChild(title);
    card.appendChild(para);
    if(work === true){
        let banner = document.createElement('p');
        banner.className = 'currently';
        banner.innerText = "Currently working on this";
        cardCon.appendChild(banner);
    }
    
    
    
    console.log(row);

    // row.appendChild()
}

