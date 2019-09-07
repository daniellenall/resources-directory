import React, { Component } from 'react';

class Grid extends Component {
  render() {
    return(
      <div className="category-grid">
        {this.props.children}
      </div>
    );
  }
}

export default Grid;