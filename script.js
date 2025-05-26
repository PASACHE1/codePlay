const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
let chip = { x: 50, y: 200, size: 40, vx: 2, jump: false, vy: 0 };
let gravity = 0.5;
let currentCharIndex = 0;

function drawCharacter() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const icon = characters[currentCharIndex]?.icon || 'fa-solid fa-microchip';
  const chipDiv = document.createElement('div');
  chipDiv.className = `fa ${icon} character-icon`;
  chipDiv.style.left = canvas.offsetLeft + chip.x + 'px';
  chipDiv.style.top = canvas.offsetTop + chip.y + 'px';
  document.body.querySelectorAll('.character-icon').forEach(el => el.remove());
  document.body.appendChild(chipDiv);
}

function update() {
  if (chip.jump) {
    chip.vy -= gravity;
    chip.y -= chip.vy;
    if (chip.y >= 200) {
      chip.jump = false;
      chip.y = 200;
      chip.vy = 0;
    }
  }

  chip.x += chip.vx;
  if (chip.x > canvas.width - chip.size || chip.x < 0) chip.vx *= -1;
  drawCharacter();
  requestAnimationFrame(update);
}

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

function switchCharacter() {
  currentCharIndex = (currentCharIndex + 1) % characters.length;
}

function updateTime() {
  const peruTime = new Date().toLocaleTimeString("es-PE", { timeZone: "America/Lima" });
  document.getElementById('time').textContent = `Hora Perú: ${peruTime}`;
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space' && !chip.jump) {
    chip.jump = true;
    chip.vy = 10;
  }
});

const cursor = document.getElementById('customCursor');
let colorCursorIndex = 0;
const cursorColors = ['cursor-color-1', 'cursor-color-2', 'cursor-color-3'];

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.pageX + 'px';
  cursor.style.top = e.pageY + 'px';
});

function changeCursorColor() {
  cursor.classList.remove(cursorColors[colorCursorIndex]);
  colorCursorIndex = (colorCursorIndex + 1) % cursorColors.length;
  cursor.classList.add(cursorColors[colorCursorIndex]);
}

setInterval(updateTime, 1000);
updateTime();
update();
