import * as React from "react";
import Header from "./Header";
import Footer from "./Footer";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div className='container'> 
            <h1>About Page</h1>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default About;