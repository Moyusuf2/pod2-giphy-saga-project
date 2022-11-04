import { useDispatch, useSelector } from 'react-redux';




function CategorySelector() {
    console.log('in CategorySelector');

    /// initiates get request to DB
    const dispatch = useDispatch();
    /// get category list results from DB.
    const categoryList = useSelector(store => store.categoryList);

    console.log(categoryList);




    return (<>

        <h3>Sort Category</h3>

{/* //// buttons to select category */}

        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'all'
                }
            })}>All</button>

        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'funny'
                }
            })}>Funny</button>
        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'cohort'
                }
            })}>cohort</button>
        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'cartoon'
                }
            })}>Cartoon</button>
        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'nsfw'
                }
            })}>NSFW</button>
        <button onClick={() => dispatch(
            {
                type: 'FETCH_CATEGORY',
                payload: {
                    data: 'meme'
                }
            })}>MEME</button>


            
        <div>
            <ul>
                
            {categoryList.map((categoryItem) => (
                
                <li key={categoryItem.url}>
                    <img src={categoryItem.url} alt="" />
                </li>
            ))}
            </ul>
        </div>







    </>)
}

export default CategorySelector;