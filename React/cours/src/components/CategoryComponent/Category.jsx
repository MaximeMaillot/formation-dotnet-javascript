import React from 'react';
import "./Category.css"

const Category = ({ activeCategory, setActiveCategory, categoryList }) => {
    return (
        <div className='category'>
            <select name="category"
                className='form-select'
                value={activeCategory}
                onChange={(e) => { setActiveCategory(e.target.value) }
                }>
                <option value="---">---</option>
                {categoryList.map((category, index) => {
                    return <option value={category} key={index}>{category}</option>
                })}
            </select>

        </div>
    );
};

export default Category;