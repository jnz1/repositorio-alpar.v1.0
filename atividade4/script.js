// script.js
function playEpisode(episodeId) {
    var videoPlayer = document.getElementById('video-player');
    
    var videoFiles = {
        'introducao': './videos/introducao.mp4',
        'episode1': './videos/episode1.mp4', 
        'episode2': './videos/episode2.mp4',
        'episode3': './videos/episode3.mp4'
    };
    
    videoPlayer.src = videoFiles[episodeId];
    videoPlayer.play();
}

function saveComment() {
    var commentInput = document.getElementById('comment-input');
    var commentList = document.getElementById('comment-list');
    var comment = commentInput.value;
    
    if (comment.trim() !== '') {
        var commentElement = document.createElement('div');
        commentElement.textContent = comment;
        commentList.appendChild(commentElement);
        commentInput.value = '';
    }
}

function showAlert() {
    alert("Obrigado por considerar a doação! Minha chave PIX é: (11)91022-0975.");
}