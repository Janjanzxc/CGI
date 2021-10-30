var subText = document.getElementById('intro-sub-text');
var typewriter = new Typewriter(subText, {
    loop: true
});
typewriter.typeString('Aspiring Full Stack Developer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Computer Engineer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Front End Designer')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Junior Automation Developer for CGI')
    .pauseFor(2500)
    .start();