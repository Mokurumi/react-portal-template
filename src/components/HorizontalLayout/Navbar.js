import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { Collapse } from "react-bootstrap"
import { Link, withRouter } from "react-router-dom"

import { connect } from "react-redux"


const Navbar = props => {

  function activateParentDropdown(item) {
    item.classList.add("active")
    const parent = item.parentElement
    if (parent) {
      parent.classList.add("active") // li
      const parent2 = parent.parentElement
      parent2.classList.add("active") // li
      const parent3 = parent2.parentElement
      if (parent3) {
        parent3.classList.add("active") // li
        const parent4 = parent3.parentElement
        if (parent4) {
          parent4.classList.add("active") // li
          const parent5 = parent4.parentElement
          if (parent5) {
            parent5.classList.add("active") // li
            const parent6 = parent5.parentElement
            if (parent6) {
              parent6.classList.add("active") // li
            }
          }
        }
      }
    }
    return false
  }

  useEffect(() => {
    let pathname = props.location.pathname

    if (pathname === '/' || pathname === '/dashboard') {
      pathname = '/'
    }

    var matchingMenuItem = null
    var ul = document.getElementById("navigation")
    var items = ul.getElementsByTagName("a")
    for (var i = 0; i < items.length; ++i) {
      if (pathname === items[i].pathname) {
        matchingMenuItem = items[i]
        break
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem)
    }
  }, [props.location.pathname])


  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              in={props.leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav justify-content-center">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <i className="bx bx-home-circle me-2" />
                    DASHBOARD
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fa fa-cog me-2" />
                    MANAGEMENT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fa fa-wrench me-2" />
                    SETUP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fa fa-plug me-2" />
                    ADDONS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="#" className="nav-link">
                    <i className="fa fa-th-list me-2" />
                    SYSTEM
                  </Link>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  )
}

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
}

const mapStatetoProps = state => {
  const { leftMenu } = state.Layout
  return { leftMenu }
}

export default withRouter(
  connect(mapStatetoProps, {})(Navbar)
)
