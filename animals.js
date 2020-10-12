import React from 'react';
export const animals = {
    dolphin: {
      image: 'https://img.freepik.com/free-vector/dolphin-watercolor_119039-25.jpg?size=626&ext=jpg&ga=GA1.2.155761563.1595030400',
      facts: ['Dolphins have been shown to give distinct names to each other!', 'Dolphins are known to display their own culture!', 'Dolphins have two stomachs!'],
      width: "100px"
    },
    lobster: {
      image: 'https://ca-times.brightspotcdn.com/dims4/default/95d0315/2147483647/strip/true/crop/2048x1279+0+45/resize/1044x652!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F18%2F67%2Ff7738665a1f696fe91ad721e8396%2Fhi6znukf-recipe-db',
      facts: ['Lobsters taste with their legs!', 'Lobsters chew with their stomachs!', 'Lobsters can live as long as 100 years.'],
      width: "100px"
    },
    starfish: {
      image: 'https://www.thoughtco.com/thmb/h2Xoum0SQtHv4i9uw2uxZgmc9k4=/2048x1536/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-orange-starfish-on-sand-489010151-59847f7f22fa3a0010518acc.jpg',
      facts: ['Starfish can have up to 40 arms!', 'Starfish have no brain and no blood!', 'Starfish can regenerate their own arms!'],
      width: "100px"
    }
};

const displayFact = function(e){
    let facts = animals[e.target.alt].facts;
    let rand = Math.floor(Math.random() * facts.length)
    let fact = animals[e.target.alt].facts[rand];
    document.getElementById("fact").innerHTML = fact;
}

export class Animal extends React.Component{

    render(){
        const title = "";
        const background = <img width="100px" className="background" alt="ocean" src='https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Nature/H-P/Habitats/Ocean/hawaiianbeach.ngsversion.1500050248286.adapt.710.1.jpg'/>;
        const images = [];
        for(const animal in animals){
            images.push(<li><img onMouseOver={displayFact} key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} rolw='button' width={animals[animal].width}/></li>)
        }
        const animalFacts = (
            <div className="backgroundParent">
                {background}
                <div className="animals">
                    <h1>{(title === '') ? 'Click an animal for fun fact' : title}</h1>
                    <ul>{images}</ul>
                    <p id="fact"></p>
                </div>
            </div>
        );
        return(
            <div className="animal-facts">
                {animalFacts}
            </div>
        );
    }
}

export default Animal;