import {useDispatch} from 'react-redux';



function CategorySelector() {
    console.log('in CategorySelector');

    const dispatch = useDispatch();



    const clickHandler = e => {
        const buttonValue = e.target.value
        console.log('Cat numb', buttonValue);



/// Dispatch to fetch category based on buttonValue. 
        dispatch({
            type: 'FETCH_CATEGORY',
            payload: buttonValue
        })
    }



    return (<>

        <h3>Sort Category</h3>
        
        <button 
            onClick={clickHandler}
            value='null'
        >All</button>
        <button 
            onClick={clickHandler}
            value='funny'
            data-category="funny"
        >Funny</button>

        <button 
            onClick={clickHandler}
            value='cohort'
        >Cohort</button>

        <button 
            onClick={clickHandler}
            value='cartoon'
        >Cartoon</button>

        <button 
            onClick={clickHandler}
            value='nsfw'
        >NSFW</button>

        <button 
            onClick={clickHandler}
            value='meme'
        >Meme</button>
        


    </>)
}

export default CategorySelector;