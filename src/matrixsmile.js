const canvas = document.getElementById('smileMatrix');
        const ctx = canvas.getContext('2d');

        function setCanvasSize() {
            canvas.height = window.innerHeight;
            canvas.width = window.innerWidth;
        }

        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Массив смайлов
        const emojis = [
            '😀', '😂', '😍', '😎', '😢', '😡', '🤖',
            '🎉', '🌟', '💖', '🦄', '🍀', '🎈', '✨',
            '🌈', '🐶', '🐱', '🍕', '🍔', '🍣', '🌻',
            '💔', '🎵', '🏆', '🥳', '🧡', '💙', '💚',
            '💛', '💜', '🌍', '👽', '🌊', '⚡',
        ];

        const fontSize = 50;
        const columns = canvas.width / fontSize;
        const drops = Array(Math.floor(columns)).fill(1);
        const currentEmojis = Array(Math.floor(columns)).fill(null);

        export function smilesMatrix() {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // полупрозрачный фон
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0'; // Зеленый цвет
            ctx.font = `${fontSize}px sans-serif`; // Устанавливаем шрифт один раз

            for (let i = 0; i < drops.length; i++) {
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0; // сбросить каплю на верх
                    currentEmojis[i] = null; // сбросить текущий смайл
                }

                if (drops[i] === 0) {
                    // Случайно выбираем новый смайл для текущего столбца
                    currentEmojis[i] = emojis[Math.floor(Math.random() * emojis.length)];
                }

                const emoji = currentEmojis[i];
                if (emoji) {
                    ctx.fillText(emoji, i * fontSize, drops[i] * fontSize);
                }

                drops[i]++;
            }
        }

        setInterval(smilesMatrix, 50);