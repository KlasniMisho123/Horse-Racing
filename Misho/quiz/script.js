document.getElementById('startButton').addEventListener('click', startRace);

let horses = [
    { id: 'horse1', position: 0 },
    { id: 'horse2', position: 0 },
    { id: 'horse3', position: 0 },
    { id: 'horse4', position: 0 }
];

let raceInterval;

function startRace() {
    raceInterval = setInterval(moveHorses, 100);
}

function moveHorses() {
    horses.forEach(horse => {
        let horseElement = document.getElementById(horse.id);
        horse.position += Math.random() * 5;
        horseElement.style.left = horse.position + 'px';

        if (horse.position >= (document.querySelector('.track').clientWidth - horseElement.clientWidth)) {
            clearInterval(raceInterval);
            alert(`The winner is ${horseElement.alt}!`);
            resetRace();
        }
    });
}

function resetRace() {
    horses.forEach(horse => {
        horse.position = 0;
        document.getElementById(horse.id).style.left = '0px';
    });
}
