/*load up the last style*/
let last = window.localStorage.getItem('laststyle');
window.addEventListener("load", function() {
  document.getElementById('pagestyle').setAttribute('href', last);
  let loadlastlang = window.localStorage.getItem('lastLanguage');
  swapLanguage(loadlastlang)
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
