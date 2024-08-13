// script.js

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = {
        title: title,
        content: content
    };

    // 서버에 데이터 전송 (예시: Fetch API 사용)
    fetch('/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // 성공 시, 블로그 목록 페이지로 리다이렉트
        window.location.href = '/blog';
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
