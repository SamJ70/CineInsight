const apiKey = 'ef5a26280bf6632f489dcd8d2284336b';
const apiBaseUrl = 'https://api.themoviedb.org/3';
const imageUrlBase = 'https://image.tmdb.org/t/p/w500';
const apiUrl = 'https://api.themoviedb.org/3/search/movie';

const moviesContainer=document.getElementById("movcontainer");

async function fetchMovies(endpoint)
{
  try {
    const response = await fetch(`${apiBaseUrl}${endpoint}?api_key=${apiKey}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(`Error fetching movies from ${endpoint}:`, error);
    return [];
  }

}
function createMovies(movie){
  const  {title, poster_path, overview, id}=movie;
const movieCard=document.createElement("div");
movieCard.style.width="300px";
movieCard.style.height="300px";
movieCard.style.margin="13px";
movieCard.style.border="1px solid white";
img=document.createElement("img");
img.src=poster_path ? `${imageUrlBase}${poster_path}` : 'https://via.placeholder.com/500x750';
img.style.width="300px";
img.style.height="200px";
img.style.bacgroundSize="cover";

movieCard.addEventListener("click",()=>{
  moviesContainer.innerHTML="";
  m1=document.getElementById("m1");
    rn=document.getElementById("rightnext");
    ln=document.getElementById("leftnext");
    hc=document.getElementById("hcholder");
    m1.style.display="none";
    hc.style.display="none";
    ln.style.display="none";
    rn.style.display="none";
    let hname=document.createElement("h1");
    hname.innerText=title;
    let ms=document.createElement("img");
    ms.style.height="80vh";
    ms.style.width="100vw";
    ms.style.size="cover";
    ms.src=poster_path ? `${imageUrlBase}${poster_path}` : 'https://via.placeholder.com/500x750';
    let body=document.querySelector("body");
    body.appendChild(ms);
    ms.style.position="absolute";
    ms.style.top="10vh";
    body.appendChild(hname);
    hname.style.color="wheat";
  hname.style.position="relative";
  hname.style.top="10vh"  
  })
moverview=document.createElement("p");
moverview.style.bacgroundColor="transparent";
moverview.style.width="300px";
moverview.style.height="50px";
moverview.style.color="white";
moverview.style.fontSize="10px";
moverview.textContent=overview;
heading=document.createElement("h1");
heading.style.color="wheat";
heading.textContent=title;
heading.style.width="300px"
heading.style.fontSize="20px";
heading.style.textAlign="centre";
heading.style.bacgroundColor="transparent";
movieCard.appendChild(img);
movieCard.appendChild(heading);
movieCard.appendChild(moverview);
return movieCard;

}

function displayMovies(movies)
{
  Object.values(movies).forEach(movie => {
    const movieCard = createMovies(movie);
    moviesContainer.appendChild(movieCard);
  });
}
async function init(endpoint)
{
 const data= await fetchMovies(endpoint);
 console.log(typeof data);
 displayMovies(data); 
}
init("/movie/popular");
btntopmovies=document.getElementById("Topmovies");
btnSeries=document.getElementById("Series");
btnTrend=document.getElementById("Trending");
btntopmovies.addEventListener("click",()=>{
moviesContainer.innerHTML="";
m1=document.getElementById("m1");
  rn=document.getElementById("rightnext");
  ln=document.getElementById("leftnext");
  hc=document.getElementById("hcholder");
  m1.style.display="none";
  hc.style.display="none";
  ln.style.display="none";
  rn.style.display="none";
  
init("/movie/popular");
});

btnSeries.addEventListener("click",()=>{
moviesContainer.innerHTML="";
m1=document.getElementById("m1");
  rn=document.getElementById("rightnext");
  ln=document.getElementById("leftnext");
  hc=document.getElementById("hcholder");
  m1.style.display="none";
  hc.style.display="none";
  ln.style.display="none";
  rn.style.display="none";
  init("/tv/popular");});

  btnTrend.addEventListener("click",()=>{
  m1=document.getElementById("m1");
  rn=document.getElementById("rightnext");
  ln=document.getElementById("leftnext");
  hc=document.getElementById("hcholder");
  m1.style.display="none";
  hc.style.display="none";
  ln.style.display="none";
  rn.style.display="none";
    moviesContainer.innerHTML="";
init("/movie/now_playing")
});
loader=document.getElementById("loader");
function showloader()
{
  loader.style.display="block";

}
let timeoutId;

window.addEventListener("scroll",() => {
  if (window.innerHeight + window.scrollY  >= document.body.offsetHeight +5) {
    
    timeoutId = setTimeout(async () => {
     await init("/movie/now_playing", () => {
        clearTimeout(timeoutId);
        
      });
    },2000);
  }
});
async function searchit(url1)
{
  m1=document.getElementById("m1");
  rn=document.getElementById("rightnext");
  ln=document.getElementById("leftnext");
  hc=document.getElementById("hcholder");
  m1.style.display="none";
  hc.style.display="none";
  ln.style.display="none";
  rn.style.display="none";
  const response = await fetch(url1);
  const data = await response.json();
  return data.results
}
const searchvalue=document.getElementById("search");
searchvalue.addEventListener("change",async()=>{if(searchvalue.value.trim()!="")
{
  console.log("ok");
  moviesContainer.innerHTML="";
  const url1 = `${apiUrl}?api_key=${apiKey}&query=${encodeURIComponent(searchvalue.value)}`;
  
  displayMovies(await searchit(url1));}});

function profilenamefinder()
{
  u1=window.location.search.substring(1);
u2=u1.substring(5);
return u2;
}
 window.a=1;
  
let profbox=document.getElementById("profbox");
let profbtn=document.getElementById("pb");
profbtn.addEventListener("click",()=>{
  if(window.a==1)
  {
profbox.style.display="block";
profbox.innerHTML=`Username: ${profilenamefinder()} <br><br> <a href="index.html">Logout</a>`;
window.a=0;  
}
else{
  profbox.style.display="none";
  window.a=1;
}
})
let fav=document.getElementById("Favourite");
fav.addEventListener("click",()=>{
  m1=document.getElementById("m1");
  rn=document.getElementById("rightnext");
  ln=document.getElementById("leftnext");
  hc=document.getElementById("hcholder");
  m1.style.display="none";
  hc.style.display="none";
  ln.style.display="none";
  rn.style.display="none";
    moviesContainer.innerHTML="";
init("/movie/now_playing")
});