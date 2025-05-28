const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Расширенный набор символов
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()[]{}<>?|`~ ';
const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

export function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // полупрозрачный фон
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < drops.length; i++) {
        // Случайно выбираем символ или пробел
        const text = Math.random() < 0.1 ? ' ' : characters.charAt(Math.floor(Math.random() * characters.length));

        // Задаем цвет текста: белый для первого символа в столбце, зеленый для остальных
        ctx.fillStyle = '#0F0';
        ctx.font = `${fontSize}px monospace`;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0; // сбросить каплю на верх
        }
        drops[i]++;
    }
}

setInterval(draw, 50);