import * as React from "react"
import { Link } from 'gatsby'


//todo: style

const headerStyles = {
  height: 100,
}

const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}


const Header = () => {
  return (
      <div style={headerStyles}>
        <div>insert logo here</div>
        <div>
          <ul style={listStyles}>
            <li>
              <Link to="/videography">videography</Link>
            </li>
            
            <li>
              <Link to="/photography">photography</Link>
            </li>
            
            <li>
              <Link to="/clients">clients</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>
            
          </ul>
        </div>
      </div>
  )
}

export default Header