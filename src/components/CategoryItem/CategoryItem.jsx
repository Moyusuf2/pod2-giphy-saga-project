

function CategoryItem({categoryItem}){



    return(<>


        <li>
            <div>Category: {categoryItem.name}</div>
        <img src={categoryItem.url} alt="" /> 
        </li>
        </>

    )
}

export default CategoryItem;

{/* <li key={categoryItem.url}>
                    <img src={categoryItem.url} alt="" />
                    </li>
              */}