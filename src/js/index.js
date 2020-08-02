import Search from './models/Search';
import movie from './models/movie';
import likes from './models/likes';
import { elements,renderLoader,clearLoader, clear,highlightSelected , toggleLikedBtn , toogleLikeMenu,renederLikes,deleteLikes} from './views/base';

// /** Global state of the app
//  * 
//  */

const state = {};
// search for a movie
const controlSearch = async() => {
    // get value
    const query = document.querySelector('.search__field').value;
    if(query){
        // new search
        state.search = new Search(query)
        // clear old list if exists
        clear();
        // add loader
        renderLoader(elements.searchRes);
        // add results
        await state.search.getResults();
        // remove loader
        clearLoader();
        

    }

}
// view a movie
const controlMovie = async() => {
    // get the id
    const id = window.location.hash.replace('#','');
    if(id){ 
        // add new movie
        state.movie = new movie;
        // highlight selected movie
        if(state.search) highlightSelected(id);
        // clear old movie (if exists)
        elements.recipe.innerHTML = '';
        // add loader
        renderLoader(elements.recipe);
        //new movie
        state.movie = new movie(id);
        await state.movie.getMovie(state.likes.isLiked(id));
        // remove loader
        clearLoader();
        
        
    }
}
// like a movie
const controlLikes = () => {
    // if no like add one
    if(!state.likes) state.likes = new likes();
    const currId = state.movie.id;
    if(!state.likes.isLiked(currId)) {
        const newLike = state.likes.addLike(
            currId,
            state.movie.Title,
            state.movie.year,
            state.movie.poster
        );
        // add to liked
        toggleLikedBtn(true);
        renederLikes(newLike);
    } else {
        state.likes.deleteLike(currId);
        toggleLikedBtn(false)
        deleteLikes(currId)
    }
    toogleLikeMenu(state.likes.getNumLikes())
    
    

}
 // new movie when  hash change and load the page
window.addEventListener('hashchange', controlMovie);
window.addEventListener('load',controlMovie)


// search
elements.searchform.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})
// add like
elements.recipe.addEventListener('click' , e => {
    if(e.target.matches('.recipe__love, .recipe__love *')){
        controlLikes();
    }
})

state.likes = new likes();


 
