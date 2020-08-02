

export const elements = {
    searchform: document.querySelector('.search'),
    searchRes: document.querySelector('.results'),
    searchInput: document.querySelector('.search__field'),
    searchResList: document.querySelector('.results__list'),
    searchResPages: document.querySelector('.results__pages'),
    recipe: document.querySelector('.recipe')
}
// add loader
export const renderLoader = parent => {
    const loader = `
    <div class="loader">
        <svg>
        <use href="img/icons.svg#icon-cw"></use>
        </svg>
    
    </div>
    `
    parent.insertAdjacentHTML('afterbegin',loader)
};
//clear 
export const clearLoader = () => {
    const loader = document.querySelector('.loader');
    if(loader) loader.parentElement.removeChild(loader)
}

export const clear = () => {
    elements.searchInput.value = '';
    elements.searchResList.innerHTML = '';
}

export const highlightSelected = id => {
    const resultsArray = Array.from(document.querySelectorAll('.results__link'));
    resultsArray.forEach(el => {
        el.classList.remove('results__link--active')
    })
    document.querySelector(`.results__link[href="#${id}"]`).classList.add('results__link--active')
}

export const toggleLikedBtn = isLiked => {
    const iconString = isLiked ?  'icon-heart' : 'icon-heart-outlined';
    document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconString}`)
}

export const toogleLikeMenu = numLikes => {
    document.querySelector('.likes__field').style.visibility = numLikes > 0 ? 'visible' : 'hidden';
}

export const renederLikes = likes =>  {
    const markup = 
    `
    <li>
        <a class="likes__link" href="https://www.imdb.com/title/${likes.id}"target=_blank>
            <figure class="likes__fig">
                <img src="${likes.img}" alt="Test">
            </figure>
            <div class="likes__data">
                <h4 class="likes__name">${likes.title}</h4>
                <p class="likes__author">${likes.year}</p>
            </div>
        </a>
    </li>
    `
    document.querySelector('.likes__list').insertAdjacentHTML('beforeend',markup)
}
export const deleteLikes = id => {
    const el = document.querySelector(`.likes__link[href="https://www.imdb.com/title/${id}"]`).parentElement;
    if(el) el.parentElement.removeChild(el)
}

