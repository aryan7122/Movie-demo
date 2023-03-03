Array.from(document.getElementsByClassName("card")).forEach((i, a) => { //i= vlue a = index 
    // mous over karne pe play
    i.addEventListener('mouseover', () => {
        // console.log('i',i,'a',a)
        document.getElementsByClassName('video_btn')[a].style.zIndex = "99999999999999";
        document.getElementsByTagName('video')[a].play();
})
// X cut 
    document.getElementsByClassName('bi-x-lg')[a].addEventListener('click', () => {
        document.getElementsByClassName('video_btn')[a].style.zIndex = "-9999999999999";
        document.getElementsByTagName('video')[a].pause();
        i.addEventListener('mouseover', () => {
            document.getElementsByClassName('video_btn')[a].style.zIndex = "-99999999999999";
            document.getElementsByTagName('video')[a].pause();
        })
    })
    
// play butn
    document.getElementsByClassName('bi-play-circle-fill')[a].addEventListener('click', () => {
        document.getElementsByClassName('video_btn')[a].style.zIndex = "99999999999999";
        document.getElementsByTagName('video')[a].play();
        // play pe mouse aout kane pe bhi nhi pause hoga 
        i.addEventListener('mouseover', () => {
            document.getElementsByClassName('video_btn')[a].style.zIndex = "99999999999999";
            document.getElementsByTagName('video')[a].play();
        })

    })

    // mute valume
    let vol = document.getElementsByClassName('bi-volume-off-fill')[a];
    vol.addEventListener('click', () => {
        vol.classList.toggle('bi-volume-up-fill');
        document.getElementsByTagName('video')[a].muted = !document.getElementsByTagName('video')[a].muted
    })

    // mause out bahr le jane pause
    window.addEventListener('mouseout', () => {
        document.getElementsByClassName('video_btn')[a].style.zIndex = "-9999999999999";
        document.getElementsByTagName('video')[a].pause();

    })
})