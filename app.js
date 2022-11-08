document.querySelectorAll('.images img').forEach(images => {
    images.onclick = () => {
        document.querySelector('.popup-img').style.display = 'block';
        document.querySelector('.popup-img img').src = images.getAttribute('src');
    }
    document.querySelector('.popup-img span').onclick = () => {
        document.querySelector('.popup-img').style.display = 'none';
    }
        
   
    
});



let playBtn = document.getElementById('btnClick');

document.querySelectorAll('.videos video').forEach(playBtn => {

playBtn.onclick = () => {

                document.querySelector('.popup-vid').style.display = 'block';
                document.querySelector('.popup-vid video').src = playBtn.getAttribute('src');
            }

            document.querySelector('.popup-vid span').onclick = () => {
                document.querySelector('.popup-vid').style.display = 'none';
                document.querySelector('.popup-vid video').pause();

            } 
        });

        let showImg = document.getElementById('showImg')
        let showVid = document.getElementById('showVid');
        let images = document.querySelector('.images');
        let videos = document.querySelector('.videos');
       
        showImg.onclick = () => {
            showImg.classList.add('active');
            showVid.classList.remove('active');
            images.classList.add('active');
            videos.classList.remove('active');

        }
        showVid.onclick = () => {
            showImg.classList.remove('active');
            showVid.classList.add('active');
            videos.classList.add('active');
            images.classList.remove('active');
        }