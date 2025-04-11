const taglines = [
            "Securing the Future, One Byte at a Time",
            "Hunting Threats, Building Solutions",
            "Code Securely, Sleep Soundly",
            "Defender of the Digital Realm",
            "Turning Vulnerabilities into Victories"
        ];
        document.getElementById('tagline').textContent = taglines[Math.floor(Math.random() * taglines.length)];

        const binaryBg = document.querySelector('.binary-bg');
        for (let i = 0; i < 50; i++) {
            const span = document.createElement('span');
            span.textContent = Math.random() > 0.5 ? '1' : '0';
            span.style.left = Math.random() * 100 + 'vw';
            span.style.animationDuration = Math.random() * 5 + 5 + 's';
            binaryBg.appendChild(span);
        }

        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
            });
        });
