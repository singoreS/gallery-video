const video1 = document.querySelector('.video1');
const listVideo = Array.from(document.querySelectorAll('.video-recommended img'));

for (let value of listVideo){
     console.log(value);
    value.addEventListener('click', e =>{ 
        const codeVideo = e.currentTarget.dataset.url;
        console.log(codeVideo);
        video1.setAttribute('src', `https://www.youtube.com/embed/${codeVideo}`)
    })
}
// exemple
let p = [...document.querySelectorAll('p')];

for (let value of p) {
    let color = value.dataset.color;
    value.style.color = color;
}