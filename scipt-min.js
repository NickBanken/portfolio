let skills=[{name:"html5",color:"orange",score:85,skill:"HTML5",working:!1,para:"The SEO score is very important to me, that is why I strive to get my scores as high as possible.\n        <br>\n        I apply the B.E.M method to make classes easier to read and used in sass later."},{name:"css3",color:"blue",score:85,skill:"css",working:!1,para:"I'm not a designer but once I get hold of a design, I can make the perfect duplicate in HTML and CSS!\n        <br>\n        I rather write SCSS than CSS, it's compact and more readable."},{name:"sass",color:"pink",score:75,skill:"sass",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"javascript",color:"yellow",score:84,skill:"js",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"git",color:"tomato",score:78,skill:"git",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"vuejs",color:"green",score:40,skill:"VUE.js",working:!0,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"laravel",color:"tomato",score:45,skill:"Laravel",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"php",color:"php",score:65,skill:"php",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"unity",color:"unity",score:55,skill:"Unity",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"jquery",color:"jquery",score:80,skill:"JQuery",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"photoshop",color:"photoshop",score:75,skill:"PS",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"},{name:"illustrator",color:"ai",score:60,skill:"Ai",working:!1,para:"I love to use SASS, it keeps your files structured and readable for others.\n        This combined with the B.E.M method is heaven.\n        <br>\n        Ofcourse, I could drop B.E.M if you'd like!"}];for(let e=0;e<skills.length;e++)createCards(skills[e].name,skills[e].color,skills[e].score,skills[e].skill,skills[e].para,skills[e].working);function createCards(e,r,o,s,t,i){let l=document.getElementById("skillCards"),a=document.createElement("div");a.className="card__outer",document.createElement("div").classList="card__inner";let n=document.createElement("div");n.className="card__skills card__skills--"+e;let d=document.createElement("div");d.className="card__container";let c=document.createElementNS("http://www.w3.org/2000/svg","svg");c.setAttribute("viewBox","0 0 36 36"),c.classList="circular-chart circular-chart--"+r;let u=document.createElementNS("http://www.w3.org/2000/svg","path");u.setAttribute("d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"),u.classList="circle-bg";let h,p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("stroke-dasharray",o+",100"),p.setAttribute("d","M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"),p.classList="circle",(h=document.createElement("i")).className="unity"!==e?"devicon-"+e+"-plain devicon":"devicon "+e;let m=document.createElement("h3");m.innerHTML=s;let k=document.createElement("p");if(k.innerHTML=t,k.classList="skills__para skills__para--"+e,l.appendChild(a),a.appendChild(n),n.appendChild(d),d.appendChild(c),d.appendChild(h),c.appendChild(u),c.appendChild(p),n.appendChild(m),n.appendChild(k),!0===i){let e=document.createElement("p");e.className="currently",e.innerText="Currently working on this",d.appendChild(e)}console.log(l)}