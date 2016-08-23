import React, {Component} from 'react'

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer teal lighten-1">
        <div className="footer-copyright">
          <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;