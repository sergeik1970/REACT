import React from 'react'

function Columns() {
    return (
        // react fragment заменяет div и поэтому в html не будет лишнего div
        // можно использовать просто <> </>
        <React.Fragment>
            <td>Name</td>
            <td>Sergey</td>
        </React.Fragment>
    )
}

export default Columns