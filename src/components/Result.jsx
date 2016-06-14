import React, {Component} from 'react';

export default class Result extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {text, author, option} = this.props.result;
        const itemStyle = {padding: '.5rem', margin:'.25rem',boxShadow:'0 0 1px 1px #BCB6F2'};
        return (
            <div className='colCenter' style={itemStyle}>
                <div>{author}</div>
                <div>{option}</div>
                <div>{text}</div>
            </div>
        );
    }
}