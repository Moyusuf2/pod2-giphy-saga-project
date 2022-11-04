import { useDispatch, useSelector } from 'react-redux';




function CategorySelector() {
    console.log('in CategorySelector');

    const dispatch = useDispatch();
    const category = useSelector(store=> store.categoryList);

    console.log(category);




    return (<>

        <h3>Sort Category</h3>


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
        {/* <button 
            onClick={clickHandler}
            value='funny'
            data='funny'
        >Funny</button> */}

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

    </>)
}

export default CategorySelector;