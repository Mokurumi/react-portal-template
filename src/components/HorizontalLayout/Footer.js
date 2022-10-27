import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <Container fluid={true}>
          © {new Date().getFullYear()} Copyright.
        </Container>
      </footer>
    </React.Fragment>
  )
}

export default Footer
