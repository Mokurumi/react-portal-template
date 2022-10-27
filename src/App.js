import PropTypes from 'prop-types'
import React from "react"

import { Switch, BrowserRouter as Router } from "react-router-dom"
import { connect } from "react-redux"

// Import Routes all
import { userRoutes, authenticationRoutes } from "routes/allRoutes"
// Import all middleware
import Authmiddleware from "routes/Authmiddleware"

// layouts Format
import VerticalLayout from "components/VerticalLayout/"
import HorizontalLayout from "components/HorizontalLayout/"
import NonAuthLayout from "components/NonAuthLayout"

import { Toaster } from 'react-hot-toast'

// Import scss
import "assets/scss/theme.scss"


const App = props => {

  function getLayout() {
    let layoutCls = VerticalLayout
    switch (props.layout.layoutType) {
      case "horizontal":
        layoutCls = HorizontalLayout
        break
      default:
        layoutCls = VerticalLayout
        break
    }
    return layoutCls
  }


  return (
    <React.Fragment >
      <Router>
        <Switch>
          {userRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={getLayout()}
              component={route.component}
              key={idx}
              isAuthProtected={true}
              exact
            />
          ))}

          {authenticationRoutes.map((route, idx) => (
            <Authmiddleware
              path={route.path}
              layout={NonAuthLayout}
              component={route.component}
              key={idx}
              isAuthProtected={false}
              exact
            />
          ))}
        </Switch>
      </Router>

      <Toaster
        toastOptions={{
          position: "top-right",
          className: 'bg-primary fs-5 text-white',
          duration: 3000,
          icon: <i className="bx bx-info-circle" />,
          iconTheme: {
            primary: 'none'
          },
          loading: {
            icon: <i className="bx bx-sync bx-spin" />,
          },
          success: {
            className: 'bg-success fs-5 text-white',
            duration: 2000,
            icon: <i className="bx bx-check-circle" />,
            iconTheme: {
              primary: 'none'
            },
          },
          error: {
            position: "top-right",
            className: 'fs-5 text-white',
            duration: 4000,
            style: { backgroundColor: 'red' },
            icon: <i className="bx bx-error" />,
            iconTheme: {
              primary: 'none'
            }
          }
        }}
      />

    </React.Fragment>
  )
}

App.propTypes = {
  layout: PropTypes.any
}

const mapStateToProps = state => {
  return {
    layout: state.Layout,
  }
}

export default connect(mapStateToProps, null)(App)
