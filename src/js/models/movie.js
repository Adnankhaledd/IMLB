import axios from 'axios';

export default class movie {
    constructor(id) {
        this.id = id;
    }
    async  getMovie(isLiked){
        try{
            const res = await axios(`https://www.omdbapi.com/?i=${this.id}&apikey=e7af34ff`);
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
            `<div class="movie"> 
                       <a href="${this.poster}" target="_blank" >
                <figure class="movie_fig">
                
                    <img src="${this.poster}" alt="${this.Title}" class="movie_img">
                    <h1 class="movie__title">
                        <span>${this.Title} </span>
                    </h1>
                </figure></a>
                <div class="movie__details">
                    <div class="movie__info">
                        <svg class="movie__info-icon">
                            <use href="img/icons.svg#icon-stopwatch"></use>
                        </svg>
                        <span class="movie__info-data movie__info-data--minutes">${this.time}</span>
                        <span class="movie__info-text"></span>
                    </div>
                    <div class="movie__info">
                        <svg class="movie__info-icon">
                            <use href="img/icons.svg#icon-man"></use>
                        </svg>
                        <span class="movie__info-data movie__info-data--people">${this.director}</span>
                        <span class="movie__info-text"></span>

                        

                    </div>
                    <button class="movie__love">
                        <svg class="header__likes">
                            <use href="img/icons.svg#icon-heart${isLiked ? '' : '-outlined'}"></use>
                        </svg>
                    </button>
                </div>



                <div class="movie__details">
                    <ul class="movie__detail-list">
                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                               <strong>Awards: </strong>${this.awards}
                            </div>
                        </li>

                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                                <strong>Actors</strong>: ${this.actors};
                            </div>
                        </li>

                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                            <strong>Country: </strong>${this.country}
                            </div>
                        </li>


                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                                <strong>Genre: </strong>${this.genre}
                            </div>
                        </li>

                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                                <strong>Lanquage: </strong>${this.lanquage}
                            </div>
                        </li>

                        <li class="movie__item">
                            <svg class="movie__icon">
                                <use href="img/icons.svg#icon-check"></use>
                            </svg>
                            <div class="movie__count"></div>
                            <div class="movie__detail">
                                <span class="movie__icon-info"></span>
                                <Strong>Metascore: </Strong>${this.metascore}
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="movie__directions">
                    <h2 class="heading-2">plot</h2>
                    <p class="movie__directions-text">
                        ${this.plot}
                        
                    </p>
                    <a class="btn-small movie__btn" href="https://imdb.com/title/${this.imdb}" target="_blank">
                        <span>view in imdb</span>
                        <svg class="search__icon">
                            <use href="img/icons.svg#icon-triangle-right"></use>
                        </svg>

                    </a>
                </div>
            
        </div>
             
        
            `
            document.querySelector('.movie').innerHTML = markup;
                  
            
            
        
        }
        catch (error) {
            alert(error)
        }
        
    }
}