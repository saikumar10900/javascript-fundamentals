function Component() {
    return(
        <div>This is a component</div>
    )
}

export default Component


## importing the same

import Component from './Component'

function App() {
    return (
        <Component />
    )
}
