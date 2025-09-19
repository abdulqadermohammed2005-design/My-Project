
const video = document.querySelectorAll('.all_courses');

video.forEach(video => {
    video.addEventListener('stop', () => {
        video.forEach(otherVideo => {
            if (otherVideo !== video) {
                otherVideo.pause();
            }
        });
    });
});