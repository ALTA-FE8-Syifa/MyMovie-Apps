import React, { Component } from 'react';
import {withRouter} from "../withRouter";

class Details extends Component {
  render() {
    return (
      <div>Details
        <div><img src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Cow_female_black_white.jpg"></img></div>
      </div>

      
    )
  }
}

export default withRouter(Details);
