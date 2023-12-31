let player = document.querySelector("#player");
let cancel = document.querySelector("#cancel");
let trans = document.querySelector("#trans");
let trackName = document.querySelector(".trackName");
let trackArt = document.querySelector('.trackArt');
let trackArtist = document.querySelector('.trackArtist');
let currentTrack = document.createElement('audio');
let playnpause = document.querySelector(".playpause-track")
let random = document.querySelector('.random-track')
let repeat = document.querySelector('.repeat-track')
let seekSlider = document.querySelector('.seek_slider');
let currentTime = document.querySelector('.current_time');
let totalDuration = document.querySelector('.total_duration');


player.addEventListener('click', ()=> {
    trans.classList.remove('hidden')
})

cancel.addEventListener('click', ()=> {
    trans.classList.add('hidden')
})

let updateTimer;
let track_index = 0;
let isPlaying = false;
let isRandom = false;
let isRepeat = false;

const musicList = [
    {
        name : 'Lonely At The Top',
        artist : 'Asake',
        music : 'music/lonely.mp3',
        img : 'assets/asake.jpg'
    },

    {
        name : 'Unavailable',
        artist : 'Davido',
        music : 'music/unavailable.mp3',
        img : 'assets/davido.jpg'
    },

    {
        name : 'Common person',
        artist : 'Burna Boy',
        music : 'music/common.mp3',
        img : 'assets/burna.jpg'
    },

    {
        name : 'Balance it',
        artist : 'Djay',
        music : 'music/balance.mp3',
        img : 'assets/djay.jpg'
    },

    {
        name : 'Am not a prisoner',
        artist : 'Portable',
        music : 'music/prison.mp3',
        img : 'assets/portable.jpg'
    }
]



loadTrack = (track_index)=> {
    clearInterval(updateTimer);
    reset();
    

    currentTrack.src = musicList[track_index].music;
    currentTrack.load();

    trackArtist.textContent = musicList[track_index].artist;
    trackName.textContent = musicList[track_index].name;
    trackArt.style.backgroundImage = "url(" + musicList[track_index].img + ")"

    updateTimer = setInterval(setUpdate, 1000);

    currentTrack.addEventListener('ended', nextTrack);


}

loadTrack(track_index)

playTrack = ()=> {
    currentTrack.play();
    isPlaying = true;
    playnpause.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
    trackArt.classList.add('rotate')
}

 pauseTrack = ()=> {
    currentTrack.pause()
    isPlaying = false;
    playnpause.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
    trackArt.classList.remove('rotate')
}

playpauseTrack = ()=> {
    isPlaying ? pauseTrack() : playTrack();
}

 playRandom = ()=> {
isRandom = true;
random.classList.add('On')
}

 pauseRandom = ()=> {
isRandom = false;
random.classList.remove('On')
}

randomTrack = ()=> {
    isRandom ? pauseRandom() : playRandom();
}

repeatTrack = ()=> {
    let current_index = track_index;
    loadTrack(current_index);
    playTrack()

    isRepeat ? offRepeat() : onRepeat();
}

onRepeat = ()=> {
isRepeat = true;
repeat.classList.add('On');
}

offRepeat = ()=> {
isRepeat = false;
repeat.classList.remove('On');
}

function nextTrack() {
    if(track_index < musicList.length - 1 && isRandom === false) {
        track_index += 1
    }else if (track_index < musicList.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random * musicList.length);
        track_index = random_index;
    }else {
        track_index = 0
    }

    loadTrack(track_index)
    playTrack();
}


function prevTrack() {
    if(track_index > 0){
        track_index -= 1
    }else {
        track_index = musicList.length -1
    }

    loadTrack(track_index);
    playTrack()
}

function seekTo(){
    let seekto = currentTrack.duration * (seekSlider.value / 100)
    currentTrack.currentTime = seekto;
}

function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(currentTrack.duration)){
        seekPosition = currentTrack.currentTime * (100 / currentTrack.duration);
        seekSlider.value = seekPosition;

        let currentMinutes = Math.floor(currentTrack.currentTime / 60);
        let currentSeconds = Math.floor(currentTrack.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currentTrack.duration / 60);
        let durationSeconds = Math.floor(currentTrack.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currentTime.textContent = currentMinutes + ":" + currentSeconds;
        totalDuration.textContent = durationMinutes + ":" + durationSeconds;
    }
}

function reset(){
    currentTime.textContent = "00:00";
    totalDuration.textContent = "00:00";
    seekSlider.value = 0;
}

function asake() {
    
    track_index = 0;

    loadTrack(track_index);
    playTrack()
}

function davido() {
    track_index = 1;

    loadTrack(track_index);
    playTrack()
}

function burna() {
    track_index = 2;

    loadTrack(track_index);
    playTrack()
}

function djay() {
    track_index = 3;

    loadTrack(track_index);
    playTrack()
}

function portable() {
    track_index = 4;

    loadTrack(track_index);
    playTrack()
}
