import { useState } from 'react'
import Store from '../store'

function Demo() {
    // State: a counter value
    const [counter, setCounter] = useState(0)
    const action    = { type: 'counter/incremented' }

    var selectCurrentValue      = state => state.value; 
    const currentValue          = selectCurrentValue(Store.getState())


    // View: the UI definition
    return (
        <div>
            Value: {currentValue} <button onClick={Store.dispatch({ type: 'counter/incremented' })}>Increment</button>
        </div>
    )
}

export default Demo;