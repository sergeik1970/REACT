import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'red'
}

function Inline() {
  return (
    <div>
        <h1 className="error">Error2</h1>
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline