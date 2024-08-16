document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const preloader = document.getElementById('preloader');
    const heroButtons = document.querySelectorAll('.hero-buttons button');
    const heroSection = document.getElementById('hero');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const projectTabButtons = document.querySelectorAll('.project-tab-btn');

    // �ʱ� ���� ����
    sections.forEach(section => {
        if (section.id !== 'hero') {
            section.classList.add('hidden');
        }
    });

    // Thesis ���� �⺻ �� ����
    const defaultTabId = 'kocon';
    tabButtons.forEach(btn => {
        const tabId = btn.getAttribute('data-tab');
        if (tabId === defaultTabId) {
            btn.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        } else {
            btn.classList.remove('active');
            document.getElementById(tabId).classList.remove('active');
        }
    });

    // Projects ���� �⺻ �� ����
    const defaultProjectTabId = 'game';
    projectTabButtons.forEach(btn => {
        const categoryId = btn.getAttribute('data-category');
        if (categoryId === defaultProjectTabId) {
            btn.classList.add('active');
            document.getElementById(categoryId).classList.add('active');
        } else {
            btn.classList.remove('active');
            document.getElementById(categoryId).classList.remove('active');
        }
    });

    // �ε� �ִϸ��̼�
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.style.overflow = 'auto'; // ȭ�� ���� �� ��ũ�� ���
    }, 500); // 0.5�� �� �ε� �ִϸ��̼� ����

    const showSection = (targetId) => {
        sections.forEach(section => {
            if (section.id === targetId) {
                section.classList.remove('hidden');
                if (targetId === 'papers') {
                    document.querySelectorAll('#papers .paper-item').forEach((item, index) => {
                        item.style.animationDelay = `${0.1 * index}s`;
                    });
                } else if (targetId === 'projects') {
                    document.querySelectorAll('#projects .project-item').forEach((item, index) => {
                        item.style.animationDelay = `${0.1 * index}s`;
                    });
                }
            } else {
                section.classList.add('hidden');
            }
        });
        heroSection.classList.add('hidden');
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });

    document.getElementById('home-btn').addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach(section => section.classList.add('hidden'));
        heroSection.classList.remove('hidden');
        heroSection.scrollIntoView({ behavior: 'smooth' });
    });

    heroButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            showSection(targetId);
        });
    });

    // Thesis �� ��ư Ŭ�� �̺�Ʈ
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#papers .tab-content').forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });

    // Projects �� ��ư Ŭ�� �̺�Ʈ
    projectTabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetCategory = button.getAttribute('data-category');
            projectTabButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('#projects .project-content').forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(targetCategory).classList.add('active');
        });
    });

    // Glitch Timeline Function
var $text = document.querySelectorAll('.hero-buttons button'),
$filter = document.querySelector('.svg-sprite'),
$turb = $filter.querySelector('#filter feTurbulence'),
turbVal = { val: 0.000001 },
turbValX = { val: 0.000001 };

var glitchTimeline = function($text) {
var timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 2,
    paused: true,
    onUpdate: function () {
        $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
    }
});

timeline
    .to(turbValX, { duration: 0.1, val: 0.5 })
    .to(turbVal, { duration: 0.1, val: 0.02 })
    .set(turbValX, { val: 0.000001 })
    .set(turbVal, { val: 0.000001 })
    .to(turbValX, { duration: 0.2, val: 0.4 }, 0.4)
    .to(turbVal, { duration: 0.2, val: 0.002 }, 0.4)
    .set(turbValX, { val: 0.000001 })
    .set(turbVal, { val: 0.000001 });

return {
    start: function() {
        timeline.play(0);
    },
    stop: function() {
        timeline.pause();
    }
};
};

document.querySelectorAll('.hero-buttons button')
.forEach(button => {
    var btnGlitch = new glitchTimeline(button);
    button.addEventListener('mouseenter', function () {
        btnGlitch.start();
    });

    button.addEventListener('mouseleave', function () {
        btnGlitch.stop();
    });
});
});
