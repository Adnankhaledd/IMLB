
import axios from 'axios';

export default class Search{
    constructor(query){
        this.query = query;
    }
    async  getResults(query){
        try{
        const res = await axios(`https://www.omdbapi.com/?s=${this.query}&apikey=e7af34ff`);
        this.movies = res.data.Search;
        this.movies.forEach( movie => {
                        const markUp = `
                            <li>
                                <a class="results__link" href="#${movie.imdbID}">
                                    <figure class="results__fig">
                                        <img src="${movie.Poster}" alt="${movie.Title}">
                                    </figure>
                                    <div class="results__data">
                                        <h4 class="results__name">${movie.Title}</h4>
                                        <p class="results__year">${movie.Year}</p>
                                    </div>
                                </a>
                            </li>
                        `
                        document.querySelector('.results__list').insertAdjacentHTML('beforeend',markUp);
                    })
        console.log(this.movies);
        // console.log(res)
        }
        catch (error) {
            
            document.querySelector('.results__list').innerHTML = `<h1 class="error">COULD NOT FIND ANY MOVIES, PLEASE TRY AGAIN :( </h1>`
        }
        
    }
}

