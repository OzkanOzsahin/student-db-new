import React from 'react';

function FilterData({FilterData, sortData}) {
    return (
        <div className='filters'>
            <div className='filter-button-group'>
                <button onClick={FilterData} value='both'>Both</button>
                 <button onClick={FilterData} value='difficulty'>Difficulty</button>
                 <button onClick={FilterData} value='fun'>Fun</button>

            </div>
            <div className='filter-button-group'>
                <button onClick={ sortData } value='id'>Assignment</button>
                <button onClick={ sortData } value='difficultyRating'>Difficulty</button>
                <button onClick={ sortData } value='funRating'>Fun</button>    
            </div>
        </div>
    

        
    )
}

export default FilterData