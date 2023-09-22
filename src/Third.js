import React from 'react'
import "./Third.css"

function Third() {
  return (
    <div style={{ display: 'flex',gap:100}} class="main">
  <div style={{ marginRight: 'auto' }} class="firstDiv">
    <h1><span style={{ fontFamily: 'Cedarville Cursive', color: 'green' }}>DeltaMusk</span> <br />Our Menu</h1>
  </div>
  <div className="secondDiv">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nunc euismod, aliquam nisl id, tincidunt nunc. Nullam auctor, nunc id lacinia tincidunt, nisl nunc tincidunt nunc, id consectetur nunc nunc ac nunc. Sed auctor, nunc id lacinia tincidunt, nisl nunc tincidunt nunc, id consectetur nunc nunc ac nunc.</p>
  </div>
</div>
  )
}

export default Third