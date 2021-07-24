
export const storeFavoriteMovies = (movies) => {

    window.localStorage.setItem('favorites', JSON.stringify(movies));
    return movies;
};

export const retrieveFavoriteMovies = () => {
    const favorites = JSON.parse(window.localStorage.getItem('favorites'));
    return favorites;
};


export const loadState = () => {
    try{
        const serializedState = localStorage.getItem('favorites');
        if(serializedState === null){
            return undefined;
        }
        return JSON.parse(serializedState);
    }catch(err){
        return undefined;
    }

}


export const saveState = (favorites) => {
    try{
        const serializedState = JSON.stringify(favorites);
        localStorage.setItem('favorites', serializedState);
    }catch(err){
        //ignore with errors
    }
}