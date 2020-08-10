import React, { Component } from 'react';

class GridItem extends Component {
  render() {
    return(
      <div className="grid-item">
        <h3>{this.props.title}</h3>
        <p>{this.props.desc}</p>
        <a href={this.props.url}>[ link ]</a>
      </div>
    );
  }
}

export default GridItem;
