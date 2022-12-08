/*load up the last style*/
let last = window.localStorage.getItem('laststyle');
const sites = [["GetJesus", "pvigaming.github.io/", true], ["GetAshley", "crabhelper.github.io/get-ashley/", true], ["GetMIT", "mitchgu.github.io/GetMIT/", true], ["GetPVI", "getpvi.github.io/GetPVI/", true], ["Wordle", "www.nytimes.com/games/wordle/index.html", true], ["Worldle", "worldle.teuteuf.fr/", true], ["WordleU", "www.wordleunlimited.com/", true], ["Semantle", "semantle.novalis.org/", true], ["Quordle", "www.quordle.com/#/", true], ["Jsemu2", "jsemu2.github.io/gba/", true], ["TotallyS", "totallyscience.co/classes.html", false], ["FunBlock", "sites.google.com/site/funblocked77/retro-bowl-unblocked", true];
window.addEventListener("load", function() {
  document.getElementById('pagestyle').setAttribute('href', last);
  let loadlastlang = window.localStorage.getItem('lastLanguage');
  swapLanguage(loadlastlang);
  for (let site of sites) {
    let red = (site[2]) ? " " : "style=\"background-color: red\"";
    document.getElementById('buttonbox').innerHTML += `<button class="Button" ${red} onclick="location.href='https://${site[1]}'">${site[0]}</button>`;
  }
});
/*swap the style*/
function swapStyleSheet(style){
  window.localStorage.removeItem('laststyle');
  currentlanguage=window.localStorage.getItem('lastLanguage');
  if (style==='none'){
    if (currentlanguage==='english') {
      document.getElementById('pagestyle').setAttribute('href', '');
    }
    if (currentlanguage==='french') {
      document.getElementById('pagestyle').setAttribute('href', '');
      document.getElementById("title").style.fontSize = "13vw";
    }
    if (currentlanguage==='german') {
      document.getElementById('pagestyle').setAttribute('href', '');
      document.getElementById("title").style.fontSize = "9vw";
    }
  }
  if (style==='coffee') {
    if (currentlanguage==='english') {
      document.getElementById('pagestyle').setAttribute('href', 'stylesheets/coffeehouse.css');
    }
    if (currentlanguage==='german') {
      document.getElementById('pagestyle').setAttribute('href', 'stylesheets/coffeehousegerman.css');
    }
    if (currentlanguage==='french') {
      document.getElementById('pagestyle').setAttribute('href', 'stylesheets/coffeehousefrench.css');
    }
  }
  if (style==='table') {
    document.getElementById('pagestyle').setAttribute('href', 'stylesheets/table.css');
  }
  window.localStorage.setItem('laststyle', style);
}
/*swap the language*/
function swapLanguage(x) {
        if(x ==='english') {
          document.getElementById("title").innerHTML = "<span onclick=\"location.href=\'oconnel.html\'\">PVI</span> Games!";
          document.getElementById("dropdown").innerHTML = "Themes";
          document.getElementById("theme1").innerHTML = "None";
          document.getElementById("theme2").innerHTML = "Table";
          document.getElementById("theme3").innerHTML = "Cofee";
          document.getElementById("dropdown2").innerHTML = "Languages";
          document.getElementById("lang1").innerHTML = "English";
          document.getElementById("lang2").innerHTML = "German";
          document.getElementById("lang3").innerHTML = "French";
        }
        if(x ==='french') {
          document.getElementById("title").innerHTML = "Les  jeux  de  <span onclick=\"location.href=\'oconnel.html\'\">PVI</span>";
          document.getElementById("dropdown").innerHTML = "Thèmes";
          document.getElementById("theme1").innerHTML = "Aucun";
          document.getElementById("theme2").innerHTML = "Table";
          document.getElementById("theme3").innerHTML = "Café";
          document.getElementById("dropdown2").innerHTML = "Langues";
          document.getElementById("lang1").innerHTML = "Anglais";
          document.getElementById("lang2").innerHTML = "Allemand";
          document.getElementById("lang3").innerHTML = "Français";
          /*document.getElementById("title").style.fontSize = "100vw";*/
        }
        if (x==='german') {
          document.getElementById("title").innerHTML = "<span onclick=\"location.href=\'oconnel.html\'\">PVIs</span> Lieblingsspiele";
          document.getElementById("dropdown").innerHTML = "Themen";
          document.getElementById("theme1").innerHTML = "Kleiner";
          document.getElementById("theme2").innerHTML = "Tisch";
          document.getElementById("theme3").innerHTML = "Kaffee";
          document.getElementById("dropdown2").innerHTML = "Sprachen";
          document.getElementById("lang1").innerHTML = "Englisch";
          document.getElementById("lang2").innerHTML = "Deutsch";
          document.getElementById("lang3").innerHTML = "Französisch";
          /*css fixing*/
        }
  window.localStorage.setItem('lastLanguage', x);
  currentstyle = window.localStorage.getItem('laststyle');
  swapStyleSheet(currentstyle);
}
