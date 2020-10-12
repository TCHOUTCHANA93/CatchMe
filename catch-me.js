const holes = document.querySelectorAll('.hole');
const hols = document.querySelectorAll('.hol');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  const mols = document.querySelectorAll('.mol');
  const welcome =document.getElementById('welcome');
  let lastHole;
  let lastHol;
  let timeUp = false;
  let score = 0;

  function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function randomHole(holes) {
    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === lastHole) {
      return randomHole(holes);
    }
    lastHole = hole;
    return hole;
  }

  function peep() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
      hole.classList.remove('up');
      if (!timeUp) peep();
    }, time);
  }

  function startGame() { 
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    peep();
    setTimeout(() => timeUp = true, 50000);
    welcome.style.display='none';
  }

  function bonk(e) {
    if(!e.isTrusted) return; // cheater!
    score++;
    this.parentNode.classList.remove('up');
    scoreBoard.textContent = score;
  }


  function randomHol(hols) {
    const idx = Math.floor(Math.random() * hols.length);
    const hol = hols[idx];
    if (hol === lastHol) {
      return randomHol(hols);
    }
    lastHol = hol;
    return hol;
  }

function pep() {
    const time = randomTime(200, 4000);
    const hol = randomHol(hols);
    hol.classList.add('up');
    setTimeout(() => {
      hol.classList.remove('up');
      if (!timeUp) pep();
    }, time);
  }
  pep();



moles.forEach(mole => mole.addEventListener('click', bonk));
  
welcome.addEventListener('click', startGame);


