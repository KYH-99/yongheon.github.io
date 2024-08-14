document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const preloader = document.getElementById('preloader');
    const heroButtons = document.querySelectorAll('.hero-buttons button');

    // 초기 상태 설정
    sections.forEach(section => {
        if (section.id !== 'hero') {
            section.classList.add('hidden');
        }
    });

    // 로딩 애니메이션
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto'; // 화면 열기 후 스크롤 허용
    }, 500); // 0.5초 후 로딩 애니메이션 종료

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    if (targetId === 'papers') {
                        document.querySelectorAll('#papers .paper-item').forEach((item, index) => {
                            item.style.animationDelay = `${0.1 * index}s`;
                        });
                    } else if (targetId === 'career') {
                        document.querySelectorAll('#career .project-item').forEach((item, index) => {
                            item.style.animationDelay = `${0.1 * index}s`;
                        });
                    }
                } else {
                    section.classList.add('hidden');
                }
            });
            document.getElementById('hero').classList.add('hidden');
            document.querySelector(`#${targetId}`).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('home-btn').addEventListener('click', function (e) {
        e.preventDefault();
        sections.forEach(section => {
            section.classList.add('hidden');
        });
        document.getElementById('hero').classList.remove('hidden');
        document.getElementById('hero').scrollIntoView({
            behavior: 'smooth'
        });
    });

    heroButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                    if (targetId === 'papers') {
                        document.querySelectorAll('#papers .paper-item').forEach((item, index) => {
                            item.style.animationDelay = `${0.1 * index}s`;
                        });
                    } else if (targetId === 'career') {
                        document.querySelectorAll('#career .project-item').forEach((item, index) => {
                            item.style.animationDelay = `${0.1 * index}s`;
                        });
                    }
                } else {
                    section.classList.add('hidden');
                }
            });
            document.getElementById('hero').classList.add('hidden');
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
