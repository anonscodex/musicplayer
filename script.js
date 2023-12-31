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
        name : 'Available',
        artist : 'Davido',
        music : 'music/unavailable.mp3',
        img : 'assets/davido.jpg'
    },

    {
        name : 'Available',
        artist : 'Davido',
        music : 'music/available.mp3',
        img : 'assets/1.png'
    },

    {
        name : 'Available',
        artist : 'Davido',
        music : 'music/available.mp3',
        img : 'assets/1.png'
    },

    {
        name : 'Available',
        artist : 'Davido',
        music : 'music/available.mp3',
        img : 'assets/1.png'
    }
]



loadTrack = (track_index)=> {
    //clearInterval(updateTimer)
    

    currentTrack.src = musicList[track_index].music;
    currentTrack.load();

    trackArtist.textContent = musicList[track_index].artist;
    trackName.textContent = musicList[track_index].name;
    trackArt.style.backgroundImage = "url(" + musicList[track_index].img + ")"

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
