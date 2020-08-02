import axios from 'axios';

export default class movie {
    constructor(id) {
        this.id = id;
    }
    async  getMovie(isLiked){
        try{
            const res = await axios(`http://www.omdbapi.com/?i=${this.id}&apikey=e7af34ff`);
            console.log(res)
            this.Title = res.data.Title;
            this.plot = res.data.Plot
            this.genre = res.data.Genre;
            this.poster = res.data.Poster;
            this.time = res.data.Runtime;
            this.actors = res.data.Actors;
            this.genre = res.data.Genre;
            this.country = res.data.Country;
            this.metascore = res.data.Metascore;
            this.lanquage = res.data.Language;
            this.awards = res.data.Awards;
            this.director = res.data.Director;
            this.imdb = res.data.imdbID;
            this.year = res.data.Year;
            
            const markup = 
            `<div class="recipe"> 
                       <a href="${this.poster}" target="_blank" >
                <figure class="recipe__fig">
                
                    <img src="${this.poster}" alt="${this.Title}" class="recipe__img">
                    <h1 class="recipe__title">
                        <span>${this.Title} </span>
                    </h1>
                </figure></a>
                <div class="recipe__details">
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="img/icons.svg#icon-stopwatch"></use>
                        </svg>
                        <span class="recipe__info-data recipe__info-data--minutes">${this.time}</span>
                        <span class="recipe__info-text"></span>
                    </div>
                    <div class="recipe__info">
                        <svg class="recipe__info-icon">
                            <use href="img/icons.svg#icon-man"></use>
                        </svg>
                        <span class="recipe__info-data recipe__info-data--people">${this.director}</span>
                        <span class="recipe__info-text"></span>

                        

                    </div>
                    <button class="recipe__love">
                        <svg class="header__likes">
                            <use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
                        </svg>
                    </button>
                </div>



                <div class="recipe__ingredients">
                    <ul class="recipe__ingredient-list">
                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                               <strong>Awards: </strong>${this.awards}
                            </div>
                        </li>

                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                                <strong>Actors</strong>: ${this.actors};
                            </div>
                        </li>

                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                            <strong>Country: </strong>${this.country}
                            </div>
                        </li>


                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                                <strong>Genre: </strong>${this.genre}
                            </div>
                        </li>

                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                                <strong>Lanquage: </strong>${this.lanquage}
                            </div>
                        </li>

                        <li class="recipe__item">
                            <svg class="recipe__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="recipe__count"></div>
                            <div class="recipe__ingredient">
                                <span class="recipe__unit"></span>
                                <Strong>Metascore: </Strong>${this.metascore}
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="recipe__directions">
                    <h2 class="heading-2">plot</h2>
                    <p class="recipe__directions-text">
                        ${this.plot}
                        
                    </p>
                    <a class="btn-small recipe__btn" href="http://imdb.com/title/${this.imdb}" target="_blank">
                        <span>view in imdb</span>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>

                    </a>
                </div>
            
        </div>
             
        
            `
            document.querySelector('.recipe').innerHTML = markup;
                  
            
            
        
        }
        catch (error) {
            alert(error)
        }
        
    }
}