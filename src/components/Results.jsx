import React, {Component} from 'react';
import Result from './Result';

export default class Results extends Component {
  
  constructor(props) {
    super(props);
    // @todo ask rob on this
    this.pollResults = props.pollResults;
    this.state = {allResults: []}
  }

  componentDidMount() {
    this.pollResults.watch().subscribe(
      (results) => {
        const allResults = results.map(result => {
            return result;
          });
        this.setState({allResults: allResults});
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  render() {
    
    const resultsMapped = this.state.allResults.map((result, index) => {
      return <Result result={result} key={index}/>
    });
    
    return <div className='colCenter'> {resultsMapped} </div>;
  }
}