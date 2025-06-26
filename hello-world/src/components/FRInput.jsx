import React from 'react'

// function FRInput() {
//   return (
//     <>
//     <input type="text" />
//     </>
//   )
// }

// Дочерний компонент получает ref и передает его в input
const FRInput = React.forwardRef((props, ref) => {
    return (
        <>
        <input type="text" ref={ref} />
        </>
    )
})

export default FRInput