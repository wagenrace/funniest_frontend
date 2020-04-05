import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

class Home extends Component {
  render(){
    return (
        <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
            <Button variant="contained" color="primary">
          tictactoe
          </Button>
        </div>
        <div className="col-sm-3">
            <Button variant="contained" color="primary">
            Some other game
            </Button>
      </div>
      <div className="col-sm-3">
          <Button variant="contained" color="primary">
            Some other game 2
            </Button>
      </div>
      <div className="col-sm-3">
          <Button variant="contained" color="primary">
            Some other game 3
            </Button>
      </div>
    </div>
    </div>
    )
  }
}

export default Home