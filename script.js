let player = document.querySelector("#player");
let cancel = document.querySelector("#cancel");
let trans = document.querySelector("#trans");
let trackName = document.querySelector(".trackName");
let trackArt = document.querySelector('.trackArt');
let trackArtist = document.querySelector('.trackArtist');
let currentTrack = document.createElement('audio')
player.addEventListener('click', ()=> {
    trans.classList.remove('hidden')
})

cancel.addEventListener('click', ()=> {
    trans.classList.add('hidden')
})

let updateTimer;
let track_index = 0;

const musicList = [
    {
        name : 'Available',
        artist : 'Davido',
        music : 'music/unavailable.mp3',
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

loadTrack(track_index)

function loadTrack(track_index){
    //clearInterval(updateTimer)
    

    currentTrack.src = musicList[track_index].music;
    currentTrack.load();

    trackArtist.textContent = musicList[track_index].artist;
    trackName.textContent = musicList[track_index].name;
    trackArt.style.backgroundImage = "url(" + musicList[track_index].img + ")"

    
}