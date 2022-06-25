import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Movie name = "Avengers"
      starrating = "⭐ 8.4"
      pic= "https://lumiere-a.akamaihd.net/v1/images/p_avengersendgame_19751_e14a0104.jpeg?region=0%2C0%2C540%2C810" 
      summary="After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance." />
      <Movie name = "Vikram"
      starrating = "⭐ 9.3"
      pic= "https://images.fandango.com/ImageRenderer/0/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227915/Vikram-posterart.jpg" 
      summary="The movie story starts with the series of killing in the city with a group of masked men taking responsibility for it and calling it their war against the system. Police Officier Jose (Chemban Vinod Jose) brings in a undercover agent team headd by Amar (Fahadh Faasil), who starts digging into Karnan (Vikram) and his son cop (Kalidas)." />
      <Movie name = "Aladdin"
      starrating = "⭐ 7.6"
      pic= "https://m.media-amazon.com/images/M/MV5BMjQ2ODIyMjY4MF5BMl5BanBnXkFtZTgwNzY4ODI2NzM@._V1_.jpg" 
      summary="Aladdin is a lovable street urchin who meets Princess Jasmine, the beautiful daughter of the sultan of Agrabah. While visiting her exotic palace, Aladdin stumbles upon a magic oil lamp that unleashes a powerful, wisecracking, larger-than-life genie. As Aladdin and the genie start to become friends, they must soon embark on a dangerous mission to stop the evil sorcerer, Jafar, from overthrowing young Jasmine's kingdom." />
      <Movie name = "The Angry Birds Movie 2"
      starrating = "⭐ 6.5"
      pic= "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/theangrybirdsmovie2_onesheet__rating_0.jpg?itok=b3E4iZ7H" 
      summary="Red, Chuck, Bomb and the rest of their feathered friends are surprised when a green pig suggests that they put aside their differences and unite to fight a common threat. Aggressive birds from an island covered in ice are planning to use an elaborate weapon to destroy the fowl and swine way of life. " />
      <Movie name = "Life of Pi"
      starrating = "⭐ 8.2"
      pic= "https://thetamnews.org/wp-content/uploads/2012/10/life-of-pi-poster2-608x900.jpg" 
      summary="After deciding to sell their zoo in India and move to Canada, Santosh and Gita Patel board a freighter with their sons and a few remaining animals. Tragedy strikes when a terrible storm sinks the ship, leaving the Patels' teenage son, Pi (Suraj Sharma), as the only human survivor. However, Pi is not alone; a fearsome Bengal tiger has also found refuge aboard the lifeboat." />
      <Movie name = "Gravity"
      starrating = "⭐ 9.0"
      pic= "https://m.media-amazon.com/images/M/MV5BNjE5MzYwMzYxMF5BMl5BanBnXkFtZTcwOTk4MTk0OQ@@._V1_FMjpg_UX1000_.jpg" 
      summary="Dr. Ryan Stone (Sandra Bullock) is a medical engineer on her first shuttle mission. Her commander is veteran astronaut Matt Kowalsky (George Clooney), helming his last flight before retirement. Then, during a routine space walk by the pair, disaster strikes: The shuttle is destroyed, leaving Ryan and Matt stranded in deep space with no link to Earth and no hope of rescue. As fear turns to panic, they realize that the only way home may be to venture further into space." />
      <Movie name = "Rush Hour"
      starrating = "⭐ 9.5"
      pic= "https://m.media-amazon.com/images/M/MV5BYWM2NDZmYmYtNzlmZC00M2MyLWJmOGUtMjhiYmQ2OGU1YTE1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg" 
      summary="When a Chinese diplomat's daughter is kidnapped in Los Angeles, he calls in Hong Kong Detective Inspector Lee (Jackie Chan) to assist the FBI with the case. But the FBI doesn't want anything to do with Lee, and they dump him off on the LAPD, who assign wisecracking Detective James Carter (Chris Tucker) to watch over him. Although Lee and Carter can't stand each other, they choose to work together to solve the case on their own when they figure out they've been ditched by both the FBI and police." />
      <Movie name = "Jurassic world dominion"
      starrating = "⭐ 9.8"
      pic= "https://i.pinimg.com/736x/13/d2/6e/13d26e9caeca3b107a0e09625c479c20.jpg" 
      summary="Four years after the destruction of Isla Nublar, dinosaurs now live and hunt alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures." />

    </div>
  );
}


function Counter(){
  
  const [like, setLike] = useState(0);
  const [disLike, unSetlike] = useState(0);
  return(
    <div>
        <button onClick ={() => setLike(like + 1)}> 👍{like}</button>
        <button onClick = {()=> unSetlike(disLike + 1)}>👎{disLike}</button>
        </div>
  )
  
}




function Movie(movielist){
  return(
    <div>
      <img className='movie-poster'
      src={movielist.pic} alt="" />
      <h1 className='movie-name'>{movielist.name} </h1>
      <p className='starrating'>
        {movielist.starrating}
      </p>
      <p className='movie-summary'>
        {movielist.summary}
      </p>
      <Counter />
    </div>
  )
}

export default App;
