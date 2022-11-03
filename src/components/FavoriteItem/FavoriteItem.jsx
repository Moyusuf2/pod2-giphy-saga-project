function FavoriteItem({ element, categoryList }) {
    // button onClick ... dispatch with SOMETHING, payload id
    // in index, put route to change with payload
    function updateCategory(id) {
        console.log('in updateCategory with category id', id);
        // dispatch
    }

    return (
        <div className="favoriteItem">
            <img src={element.url} />
            <div>{element.categoyry_id}</div>
            <button onClick={() => { updateCategory(categoryList.id) }}>Funny</button>
            <button>Cohort</button>
            <button>Cartoon</button>
            <button>NSFW</button>
            <button>Meme</button>
        </div>
    );
}

export default FavoriteItem;