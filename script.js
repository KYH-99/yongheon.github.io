document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');

    // 초기 상태 설정: 첫 번째 섹션만 활성화
    sections.forEach(section => {
        if (section.id !== 'about') {
            section.classList.remove('active');
        } else {
            section.classList.add('active');
        }
    });

    // 네비게이션 링크 클릭 이벤트 처리
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            // 모든 섹션 비활성화
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // 클릭된 링크에 해당하는 섹션만 활성화
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');

            // 섹션 전환 애니메이션
            setTimeout(() => {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 500); // 전환 애니메이션 시간(500ms)을 고려해 설정
        });
    });
});


function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
