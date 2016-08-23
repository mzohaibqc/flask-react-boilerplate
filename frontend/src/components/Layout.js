import React, {Component} from 'react';

import Footer from './layout/Footer';
import Navbar from './layout/Navbar';

class Layout extends Component {

  render() {
    return (
      <div className="site">
        <Navbar title={"React App"}/>
        <div className="site-content container">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Layout;