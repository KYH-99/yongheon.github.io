document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio page loaded');
    filterProjects('capstone', '캡스톤 디자인'); // 기본적으로 캡스톤 디자인을 표시
});

function filterProjects(category, title) {
    var projects = document.getElementsByClassName('project');
    var projectTitle = document.getElementById('project-title');
    
    // Update the project title
    projectTitle.textContent = title;
    
    // Filter projects based on category
    for (var i = 0; i < projects.length; i++) {
        if (projects[i].classList.contains(category)) {
            projects[i].style.display = 'block';
        } else {
            projects[i].style.display = 'none';
        }
    }
}

function toggleContent(contentId) {
    var content = document.getElementById(contentId);
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
