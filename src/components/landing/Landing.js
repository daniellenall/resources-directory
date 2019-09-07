import React, { Component } from 'react';
import Grid from '../category-grid/Grid';
import GridItem from '../category-grid/GridItem';
import {sites} from '../../sites';

class Landing extends Component {
  constructor(props) {
    super(props);
  }

  render( 
  ) {
    return (
      <div className="landing-container">
        <Grid>
          {sites.map((site) => {
            return (
              <GridItem title={site.name} url={site.url} desc={site.desc}/>
            )
          })}
        </Grid>
      </div>
    );
  }
}

export default Landing;