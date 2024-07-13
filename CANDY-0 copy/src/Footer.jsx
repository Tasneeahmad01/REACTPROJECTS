import React from 'react'

function Footer() {
    const year = new Date().getFullYear();
  return (
    <div>
        <footer>
            <p>Footer Copy right &#169; {year}</p>
        </footer>
    </div>
  )
}

export default Footer