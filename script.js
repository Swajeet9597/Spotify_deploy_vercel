// console.log("Let's start java script")

// let songs;
// let curFolder;
// let rr;


// function convertSecondsToTime(seconds) {
//     if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
//       return '00:00';
//     }
  
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
  
//     const formattedMinutes = String(minutes).padStart(2, '0');
//     const formattedSeconds = String(remainingSeconds).padStart(2, '0');
  
//     return `${formattedMinutes}:${formattedSeconds}`;
//   }



// let currentsong = new Audio();

// async function getAllSongs(folder){   

//     curFolder = folder;
  
    
//     // let a = await fetch("/Songs/") // Fetching Songs


//     // let a = await fetch("/Songs/Animal") // Fetching Songs


//     let a = await fetch(`/Songs/${folder}`) // Fetching Songs



//     let response = await a.text(); // It returns all content as text


//     let div = document.createElement("div") // Create empty div
//     div.innerHTML = response; // store all fetched song's text
//     let as = div.getElementsByTagName("a")  // fetching all a tangs from div that is created above
//     songs = [] // empty list



//     for(let i=0;i<as.length;i++){
//         const element = as[i] 
//         if(element.href.endsWith(".mp3")){ // fetching .mp3 extensions href only
//             songs.push(element.href.split("/Songs/")[1])  
//         }

//     }
//     return songs
// }

// const playmusic=(track,pause=false)=>{

// //   let audio = new Audio("Songs/" + track)

// // currentsong.src = `${curFolder}` + track
// currentsong.src = "/Songs/" + track
// if(!pause){
    
//     currentsong.play()
//     plays.src = "playmusic.svg"
    
// }

// document.querySelector(".info").innerHTML = `   
// <img class="invert lggo" src="/music.png" alt="">
// <span>${((track.split(".mp")[0]).replaceAll("%20"," ")).split("/")[1] }</span>
// `

// }

// const vol =(tar)=>{

//     currentsong.volume = tar /100

// }
















// async function getAllAlbums(){
//     let f = await fetch("/Songs/")

//     let r = await f.text()

//     let div = document.createElement("div")

//     div.innerHTML = r

//     let as = div.getElementsByTagName("a")

//     let albums =[]
     
//     for(let i=0; i<as.length;i++){
//             albums.push(as[i].href.split("/Songs/")[1])
//     }

//     albums = albums.filter(Boolean)



//     for (const al of albums) {

//         let f = await fetch(`/Songs/${al}/info.json`)

//         let r = await f.json()
            
            
//             document.querySelector(".cards").innerHTML = document.querySelector(".cards").innerHTML + `<div data-folder="${al}" class="card_temp">
//             <img class="cardimg" src="/Songs/${al}/image.jpg" alt="" />
//             <button class="btnplay">
//             <img class="playimg" src="/play.svg" alt="" />
//             </button>
//             <p class="cardhead">${r.title}</p>        
//             <p class="cardp">${r.info}</p>
//             </div>` 
            
//     }

//     Array.from(document.getElementsByClassName("card_temp")).forEach(e=>{
//         e.addEventListener("click", async element=>{

//         //   console.log(e.dataset.folder)

//           let fd = e.dataset.folder

//         //   console.log(fd)
   

//           songs = await getAllSongs(fd)

//           playmusic(songs[0])                    

          
//     let songUL = document.querySelector(".songslib")

//     songUL.innerHTML = ""
    
//     for (const song of songs) {

//         songUL.innerHTML = songUL.innerHTML + ` <div class="songcard">
//         <div class="songlg">
//             <img class="musicimg" src="/music.png" alt="">
//         </div>

//         <div class="songinfo">

//             <p class="songname">${((song.replaceAll("%20"," ")).split("-")[0]).split("/")[1]}</p>
//             <p class="artistname">${((song.replaceAll("%20"," ")).split("-")[1]).split(".mp")[0]}</p>

//         </div>
//         <div class="playmusicicon">

//             <span>Play now</span>
//             <button class="iconnn"><img  src="/pause.svg" alt="" class="invert playiconimgg"></button>

//         </div>

//     </div>`

//     }

//     Array.from(document.querySelector(".songslib").getElementsByClassName("songcard")).forEach(e=>{
//         e.addEventListener("click",element=>{
//            let s = e.querySelector(".songname").innerHTML

//             let a = e.querySelector(".artistname").innerHTML

//             let m = `${curFolder}/`+s+"-"+a+".mp3"
           
//             // console.log(m)
//             playmusic(m)


//             // e.querySelector(".iconnn").innerHTML= `<img src="/playmusic.svg" alt="" class="invert playiconimgg"></img>`

            
//         })
//     }) 
     

//           console.log(songs)



//         })
//     }) 
    
// }













// async function main(){
    
//     songs = await getAllSongs("Animal")

//     getAllAlbums()



 

    
//     // album








//     let songUL = document.querySelector(".songslib")
    
//     for (const song of songs) {

//         songUL.innerHTML = songUL.innerHTML + ` <div class="songcard">
//         <div class="songlg">
//             <img class="musicimg" src="/music.png" alt="">
//         </div>

//         <div class="songinfo">

//             <p class="songname">${((song.replaceAll("%20"," ")).split("-")[0]).split("/")[1]}</p>
//             <p class="artistname">${((song.replaceAll("%20"," ")).split("-")[1]).split(".mp")[0]}</p>

//         </div>
//         <div class="playmusicicon">

//             <span>Play now</span>
//             <button class="iconnn"><img  src="/pause.svg" alt="" class="invert playiconimgg"></button>

//         </div>

//     </div>`

//     }

//     playmusic(songs[Math.floor(Math.random() * songs.length)],true)

//     // let d = document.querySelector(".songslib").getElementsByClassName("songinfo")

//     // console.log(d)

//     Array.from(document.querySelector(".songslib").getElementsByClassName("songcard")).forEach(e=>{
//         e.addEventListener("click",element=>{
//            let s = e.querySelector(".songname").innerHTML

//             let a = e.querySelector(".artistname").innerHTML

//             let m = "Animal/"+s+"-"+a+".mp3"
           
//             console.log(m)
//             playmusic(m)


//             // e.querySelector(".iconnn").innerHTML= `<img src="/playmusic.svg" alt="" class="invert playiconimgg"></img>`

            
//         })
//     }) 

   
 
//         play.addEventListener("click",()=>{
         

//                 if(currentsong.paused){
//                     currentsong.play()
//                     plays.src = "playmusic.svg"
//                 }
//                 else{
//                     currentsong.pause()
//                     plays.src = "pause.svg"
//                 }


          
//         })


    
    
//     currentsong.addEventListener("timeupdate", ()=>{
       
//         // console.log(currentsong.currentTime, currentsong.duration)

//         document.querySelector(".tttt").innerHTML = `${convertSecondsToTime(currentsong.duration)}`
//         document.querySelector(".startt").innerHTML = `${convertSecondsToTime(currentsong.currentTime)}`

//         document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration)*100 + "%"
   
//     })

//     //  Seekbar movement event 

//     document.querySelector(".line").addEventListener("click" , e =>{

//         let width = document.querySelector(".line").offsetWidth
//         let w = e.target.getBoundingClientRect().width
//         // console.log(e.target.getBoundingClientRect(),e.offsetX,width)
//         document.querySelector(".circle").style.left = (e.offsetX / width) * 100 + "%"

//         currentsong.currentTime = ((e.offsetX / width) * 100 * currentsong.duration) / 100
//     })

//     // Add event listerner to menu close and open 

//     document.querySelector(".menu").addEventListener("click", ()=>{
//         document.querySelector(".side").style.left = 0 + "%"
//     })

//     document.querySelector(".close").addEventListener("click", ()=>{
//         document.querySelector(".side").style.left = -100 + "%"
        
//     })

//     // Add event listener to next & previous button 

//     document.querySelector(".btn_p").addEventListener("click", (e)=>{
        
//         // console.log(currentsong.src.split("Songs/")[1],songs[0])

//         let index = songs.indexOf(currentsong.src.split("/Songs/")[1])

//         if((index-1)>=0){

//             playmusic(songs[index-1])
//         }


       
//     })


//     document.querySelector(".btn_n").addEventListener("click", (e)=>{


//         let index = songs.indexOf(currentsong.src.split("/Songs/")[1])

//         if((index+1)<songs.length){

//             playmusic(songs[index+1])
//         }

       
//     })


//     // add event listener to volume 

//     // rrr.addEventListener("click", ()=>{
//     //     console.log("dcfksdjcn")
//     // })

//     document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e)=>{

//         // console.log(e.target.value) 
        
//         rr = e.target.value
//         // currentsong.volume = e.target.value /100

//         vol(rr)

//         if(currentsong.volume == 0){

//             volumeimg.src = "mute.svg"

//         }
//         else{
//             volumeimg.src = "volume.svg"
//         }

        

        
//     })


//     volumeimg.addEventListener("click" , ()=>{
        
//         if(volumeimg.src == "/volume.svg"){
            
//             volumeimg.src = "mute.svg"
//             currentsong.volume = 0
//         }
//         else if(volumeimg.src == "/mute.svg"){

//             volumeimg.src =  "volume.svg"

//             currentsong.volume = 0.5

            
//         }

//         console.log(volumeimg.src)
        
//     })


//     window.addEventListener('keypress', event => {
//         if (event.code === 'Space') {
//           if(currentsong.paused){
//             currentsong.play()
//             plays.src = "playmusic.svg"
//           }
//           else{
//             currentsong.pause()
//             plays.src = "pause.svg"
//           }
//         }
//       })

//       window.addEventListener('keypress', event =>{
//         if(event.key === "m" || event.key === "M"  ){
//             if(currentsong.volume > 0){
//                 currentsong.volume = 0
//                 volumeimg.src = "mute.svg"

//             }
//             else{
//                 currentsong.volume = 1
//                 volumeimg.src =  "volume.svg"
//             }

        


//         }
//       })


  

 

    





    




//     // play the first song

//     // var audio = new Audio(songs[0])
//     // audio.play()
// }

// main()


console.log("Let's start JavaScript");

let songs;
let curFolder;
let rr;

function convertSecondsToTime(seconds) {
    if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
        return '00:00';
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
  
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

let currentsong = new Audio();

async function getAllSongs(folder) {
    curFolder = folder;

    // 🔹 CHANGED: Updated fetch path
    let a = await fetch(`/Songs/${folder}/`);
    let response = await a.text();
    
    let div = document.createElement("div");
    div.innerHTML = response;
    
    let as = div.getElementsByTagName("a");
    songs = [];

    for (let i = 0; i < as.length; i++) {
        const element = as[i];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/Songs/")[1]);
        }
    }
    return songs;
}

const playmusic = (track, pause = false) => {
    // 🔹 CHANGED: Updated song path to ensure it loads correctly on Vercel
    currentsong.src = `/Songs/${track}`;

    if (!pause) {
        currentsong.play();
        plays.src = "playmusic.svg";
    }

    document.querySelector(".info").innerHTML = `
        <img class="invert lggo" src="/music.png" alt="">
        <span>${decodeURIComponent(track.split(".mp")[0].split("/")[1])}</span>
    `;
};

const vol = (tar) => {
    currentsong.volume = tar / 100;
};

async function getAllAlbums() {
    let f = await fetch("/Songs/");
    let r = await f.text();

    let div = document.createElement("div");
    div.innerHTML = r;

    let as = div.getElementsByTagName("a");
    let albums = [];
     
    for (let i = 0; i < as.length; i++) {
        albums.push(as[i].href.split("/Songs/")[1]);
    }

    albums = albums.filter(Boolean);

    for (const al of albums) {
        let f = await fetch(`/Songs/${al}/info.json`);
        let r = await f.json();

        document.querySelector(".cards").innerHTML += `
            <div data-folder="${al}" class="card_temp">
                <img class="cardimg" src="/Songs/${al}/image.jpg" alt="" />
                <button class="btnplay">
                    <img class="playimg" src="/play.svg" alt="" />
                </button>
                <p class="cardhead">${r.title}</p>        
                <p class="cardp">${r.info}</p>
            </div>`; 
    }

    document.querySelectorAll(".card_temp").forEach(e => {
        e.addEventListener("click", async () => {
            let fd = e.dataset.folder;
            songs = await getAllSongs(fd);
            playmusic(songs[0]);

            let songUL = document.querySelector(".songslib");
            songUL.innerHTML = "";
    
            for (const song of songs) {
                songUL.innerHTML += `
                    <div class="songcard">
                        <div class="songlg">
                            <img class="musicimg" src="/music.png" alt="">
                        </div>
                        <div class="songinfo">
                            <p class="songname">${decodeURIComponent(song.split("-")[0].split("/")[1])}</p>
                            <p class="artistname">${decodeURIComponent(song.split("-")[1].split(".mp")[0])}</p>
                        </div>
                        <div class="playmusicicon">
                            <span>Play now</span>
                            <button class="iconnn">
                                <img src="/pause.svg" alt="" class="invert playiconimgg">
                            </button>
                        </div>
                    </div>`;
            }

            document.querySelectorAll(".songcard").forEach(e => {
                e.addEventListener("click", () => {
                    let s = e.querySelector(".songname").innerText;
                    let a = e.querySelector(".artistname").innerText;
                    let m = `${curFolder}/${s}-${a}.mp3`;
                    playmusic(m);
                });
            });
        });
    });
}

async function main() {
    songs = await getAllSongs("Animal");
    getAllAlbums();

    let songUL = document.querySelector(".songslib");
    
    for (const song of songs) {
        songUL.innerHTML += `
            <div class="songcard">
                <div class="songlg">
                    <img class="musicimg" src="/music.png" alt="">
                </div>
                <div class="songinfo">
                    <p class="songname">${decodeURIComponent(song.split("-")[0].split("/")[1])}</p>
                    <p class="artistname">${decodeURIComponent(song.split("-")[1].split(".mp")[0])}</p>
                </div>
                <div class="playmusicicon">
                    <span>Play now</span>
                    <button class="iconnn">
                        <img src="/pause.svg" alt="" class="invert playiconimgg">
                    </button>
                </div>
            </div>`;
    }

    playmusic(songs[Math.floor(Math.random() * songs.length)], true);

    document.querySelectorAll(".songcard").forEach(e => {
        e.addEventListener("click", () => {
            let s = e.querySelector(".songname").innerText;
            let a = e.querySelector(".artistname").innerText;
            let m = `Animal/${s}-${a}.mp3`;
            playmusic(m);
        });
    });

    play.addEventListener("click", () => {
        if (currentsong.paused) {
            currentsong.play();
            plays.src = "playmusic.svg";
        } else {
            currentsong.pause();
            plays.src = "pause.svg";
        }
    });

    currentsong.addEventListener("timeupdate", () => {
        document.querySelector(".tttt").innerText = convertSecondsToTime(currentsong.duration);
        document.querySelector(".startt").innerText = convertSecondsToTime(currentsong.currentTime);
        document.querySelector(".circle").style.left = (currentsong.currentTime / currentsong.duration) * 100 + "%";
    });

    document.querySelector(".line").addEventListener("click", e => {
        let width = document.querySelector(".line").offsetWidth;
        document.querySelector(".circle").style.left = (e.offsetX / width) * 100 + "%";
        currentsong.currentTime = ((e.offsetX / width) * currentsong.duration);
    });

    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".side").style.left = "0%";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".side").style.left = "-100%";
    });

    document.querySelector(".btn_p").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/Songs/")[1]);
        if (index - 1 >= 0) playmusic(songs[index - 1]);
    });

    document.querySelector(".btn_n").addEventListener("click", () => {
        let index = songs.indexOf(currentsong.src.split("/Songs/")[1]);
        if (index + 1 < songs.length) playmusic(songs[index + 1]);
    });
}

main();
