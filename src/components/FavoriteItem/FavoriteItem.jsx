function FavoriteItem({ element }) {
    // button onClick ... dispatch with SOMETHING, payload id
    // in index, put route to change with payload
    return (
        <div className="favoriteItem">
            <img src={element.url} />
            <div>{element.categoyry_id}</div>
        </div>
    );
}

export default FavoriteItem;