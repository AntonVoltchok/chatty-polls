import React, {Component} from 'react';
import Results from './Results';

const Horizon = require('@horizon/client');
const horizon = Horizon({secure: false});
const pollResults = horizon('results');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {text: '', author: '', option: 'Yes', errorDescription: ''};
  }

  handleChangeAuthor = (e) => {
    this.setState({author: e.target.value});
  };

  handleChangeText = (e) => {
    this.setState({text: e.target.value});
  };

  handleSubmit = () => {

    // @todo ask rob why string from state doesn't evaluate to false and we have to do quotes instead

    if (this.state.text === '' || this.state.author === '') {
      this.setState({errorDescription: "Your name or comment is blank"});
    } else {
      const resultToSubmit = {
        text: this.state.text,
        author: this.state.author,
        option: this.state.option
      };

      pollResults.store(resultToSubmit);
      this.setState({errorDescription: ''});
    }
  };

  render() {

    const
      innerWrapStyle = {
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
        margin: '2rem auto', padding: '1rem',
        width: 360
      },
      buttonStyle = {
        padding: '.75rem',
        margin: '1rem auto',
        border: '1px solid #ccc',
        width: 120,
        textAlign: 'center'
      };


    return (
      <div>
        <div className='colCenter'>
          <div style={innerWrapStyle}>
            <input onChange={this.handleChangeAuthor} className='inputTextPoll' type='text' placeholder='enter your name'/>
            <input onChange={this.handleChangeText} className='inputTextPoll' type='text' placeholder='comment on this poll'/>
            <div onClick={this.handleSubmit} style={buttonStyle}>SUBMIT</div>
            <div>{this.state.errorDescription}</div>
            <Results pollResults={pollResults}/>
          </div>
        </div>
      </div>
    );
  }
}