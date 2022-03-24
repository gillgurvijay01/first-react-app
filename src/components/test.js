import Store from '../store'
import { useState } from 'react'

function Test() {
    // State: a counter value
    var selectCurrentValue      = state => state.value; 
    const currentValue          = selectCurrentValue(Store.getState())
    

    return (
        <h2>
            { currentValue }   
        </h2>
    )
}

export default Test