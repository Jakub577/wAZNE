const gridMain = document.createElement("div");
gridMain.setAttribute( 'class' , 'grid')

const item1 = document.createElement("div");
item1.setAttribute( 'class' , 'item')

const img1 = document.createElement("img");
img1.setAttribute( 'src' , './pasjans.jpg')
img1.setAttribute( 'class' , 'zdj1')

const item2 = document.createElement("div");
item2.setAttribute( 'class' , 'item')

const img2 = document.createElement("img");
img2.setAttribute( 'src' , './pasjans-696x464.jpg')
img2.setAttribute( 'class' , 'zdj1')


const item3 = document.createElement("div");
item3.setAttribute( 'class' , 'item')
const p1 = document.createElement("p");
p1.setAttribute( 'class' , 'p1')
p1.innerText = "Warto dodać, że sympatykiem pasjansów był np. pisarz Juliusz Słowacki. Pisząc listy do swojej matki, często zamieszczał szczegółowe instrukcje o nich. Ponadto pasjansami zajmował m.in. marszałek Józef Piłsudski, układając je często w obecności swojej córki Jadwigi Piłsudskiej-Jaraczewskiej. Ulubioną układanką prezydenta USA, Franklina Delano Roosevelta był pasjans o nazwie Święta Helena."

const item4 = document.createElement("div");
item4.setAttribute( 'class' , 'item')
const p2 = document.createElement("p");
p2.setAttribute( 'class' , 'p1')
p2.innerText = "Pasjanse rozwinęły się z dawnego obyczaju wróżenia z kart. Rozkładanie ich według określonych zasad dla osiągnięcia założonego układu kart służyło początkowo do wróżenia (kartomancja), mającego za cel ciekawość człowieka, by z losowego układu kart, symbolicznie odkrywać i tłumaczyć przyszłe losy. Stopniowo na plan pierwszy wysuwała się przyjemność kombinowania, wprowadzania ładu w układach kart i skutecznego przezwyciężania układów niekorzystnych. W ten sposób zamysł wróżenia z kart został zastąpiony układami według ścisłych reguł i zasad, mających za cel przede wszystkim cierpliwość i przyjemność układającego, gdy osiągnie zamierzony rezultat i korzystny efekt. "

const fuuu = document.createElement("footer");
fuuu.setAttribute( 'class' , 'footer1')
const p4 = document.createElement("p");
p4.setAttribute( 'class' , 'p4')
p4.innerText = "kacper dziębor, fabian sobala, kuba mazerant, "


gridMain.appendChild(item1)
item1.appendChild(img1)
gridMain.appendChild(item2)
item2.appendChild(img2)
gridMain.appendChild(item3)
item3.appendChild(p1)
gridMain.appendChild(item4)
item4.appendChild(p2)
fuuu.appendChild(p4)
app.appendChild(gridMain)
app.appendChild(fuuu)

