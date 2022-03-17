///TECHNOLOGY  
let img1 = `<img  src="image-launch-vehicle-portrait.jpg">`;
let img2 = `<img  src="image-launch-vehicle-landscape.jpg">`
if (window.innerWidth >= 800) {
    document.getElementById("techImg").innerHTML = img1;
} else {
    document.getElementById("techImg").innerHTML = img2;
}

function lunchV() {
    let img1 = `<img  src="image-launch-vehicle-portrait.jpg">`;
    let img2 = `<img  src="image-launch-vehicle-landscape.jpg">`
    document.getElementById("name").innerHTML = "Launch vehicle";
    document.getElementById("techImg").innerHTML = img1;
    if (window.innerWidth <= 800) {
        document.getElementById("techImg").innerHTML = img2;
    }
    document.getElementById("techP").innerHTML = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    document.getElementById("first").setAttribute("class", "selected");
    document.getElementById("second").removeAttribute("class");
    document.getElementById("third").removeAttribute("class");

}

function spacePort() {
    document.getElementById("name").innerHTML = "Spaceport";
    document.getElementById("techImg").innerHTML = `<img  src="image-spaceport-portrait.jpg">`;
    document.getElementById("techP").innerHTML = "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
    let img1 = `<img  src="image-spaceport-portrait.jpg">`;
    let img2 = `<img  src="image-spaceport-landscape.jpg">`;
    if (window.innerWidth >= 800) {
        document.getElementById("techImg").innerHTML = img1;
    } else {
        document.getElementById("techImg").innerHTML = img2;
    }

    document.getElementById("second").setAttribute("class", "selected");
    document.getElementById("first").removeAttribute("class");
    document.getElementById("third").removeAttribute("class");
}

function spaceCapsule() {
    document.getElementById("name").innerHTML = "Space capsule";
    document.getElementById("techImg").innerHTML = `<img  src="image-space-capsule-portrait.jpg">`;
    document.getElementById("techP").innerHTML = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
    let img1 = `<img src="image-space-capsule-portrait.jpg">`;
    let img2 = `<img src="image-space-capsule-landscape.jpg">`;
    if (window.innerWidth >= 800) {
        document.getElementById("techImg").innerHTML = img1;
    } else {
        document.getElementById("techImg").innerHTML = img2;
    }
    document.getElementById("third").setAttribute("class", "selected");
    document.getElementById("first").removeAttribute("class");
    document.getElementById("second").removeAttribute("class");
}