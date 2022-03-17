function moon() {
    document.getElementById("destTitle").innerHTML = "MOON";
    document.getElementById("destImg").innerHTML = `<img  src="image-moon.png" alt="moon">`;
    document.getElementById("destP").innerHTML = "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    document.getElementById("destDist").innerHTML = "384,400 km";
    document.getElementById("destDay").innerHTML = "3 days";
    document.getElementById("moon").setAttribute("class", "active");
    document.getElementById("mars").removeAttribute("class");
    document.getElementById("europa").removeAttribute("class");
    document.getElementById("titan").removeAttribute("class");

}

function mars() {
    document.getElementById("destTitle").innerHTML = "MARS";
    document.getElementById("destImg").innerHTML = `<img  src="image-mars.png" alt="moon">`;
    document.getElementById("destP").innerHTML = "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    document.getElementById("destDist").innerHTML = "225 mil. km";
    document.getElementById("destDay").innerHTML = "9 months";
    document.getElementById("mars").setAttribute("class", "active");
    document.getElementById("moon").removeAttribute("class");
    document.getElementById("europa").removeAttribute("class");
    document.getElementById("titan").removeAttribute("class");
}

function europa() {
    document.getElementById("destTitle").innerHTML = "EUROPA";
    document.getElementById("destImg").innerHTML = `<img  src="image-europa.png" alt="moon">`;
    document.getElementById("destP").innerHTML = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    document.getElementById("destDist").innerHTML = "628 mil. km";
    document.getElementById("destDay").innerHTML = "3 years";
    document.getElementById("europa").setAttribute("class", "active");
    document.getElementById("mars").removeAttribute("class");
    document.getElementById("moon").removeAttribute("class");
    document.getElementById("titan").removeAttribute("class");
}

function titan() {
    document.getElementById("destTitle").innerHTML = "TITAN";
    document.getElementById("destImg").innerHTML = `<img  src="image-titan.png" alt="moon">`;
    document.getElementById("destP").innerHTML = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    document.getElementById("destDist").innerHTML = "1.6 bil. km";
    document.getElementById("destDay").innerHTML = "7 years";
    document.getElementById("titan").setAttribute("class", "active");
    document.getElementById("mars").removeAttribute("class");
    document.getElementById("europa").removeAttribute("class");
    document.getElementById("moon").removeAttribute("class");
}
///CREW
function douglas() {
    document.getElementById("name").innerHTML = "Douglas Hurley";
    document.getElementById("astroImg").innerHTML = `<img  src="image-douglas-hurley.png" alt="douglas">`;
    document.getElementById("astroP").innerHTML = "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
    document.getElementById("role").innerHTML = "Commander";
    document.getElementById("douglas").setAttribute("class", "selected");
    document.getElementById("mark").removeAttribute("class");
    document.getElementById("victor").removeAttribute("class");
    document.getElementById("ansari").removeAttribute("class");
}

function mark() {
    document.getElementById("name").innerHTML = "Mark Shuttleworth";
    document.getElementById("astroImg").innerHTML = `<img  src="image-mark-shuttleworth.png" alt="mark">`;
    document.getElementById("astroP").innerHTML = "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
    document.getElementById("role").innerHTML = "Mission Specialist";
    document.getElementById("mark").setAttribute("class", "selected");
    document.getElementById("douglas").removeAttribute("class");
    document.getElementById("victor").removeAttribute("class");
    document.getElementById("ansari").removeAttribute("class");
}
function victor() {
    document.getElementById("name").innerHTML = "Victor Glover";
    document.getElementById("astroImg").innerHTML = `<img  src="image-victor-glover.png" alt="victor">`;
    document.getElementById("astroP").innerHTML = "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
    document.getElementById("role").innerHTML = "Pilot";
    document.getElementById("victor").setAttribute("class", "selected");
    document.getElementById("mark").removeAttribute("class");
    document.getElementById("douglas").removeAttribute("class");
    document.getElementById("ansari").removeAttribute("class");
}
function ansari() {
    document.getElementById("name").innerHTML = "Anousheh Ansari";
    document.getElementById("astroImg").innerHTML = `<img  src="image-anousheh-ansari.png" alt="anousheh">`;
    document.getElementById("astroP").innerHTML = "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
    document.getElementById("role").innerHTML = "Flight Engineer";
    document.getElementById("ansari").setAttribute("class", "selected");
    document.getElementById("mark").removeAttribute("class");
    document.getElementById("victor").removeAttribute("class");
    document.getElementById("douglas").removeAttribute("class");
}
