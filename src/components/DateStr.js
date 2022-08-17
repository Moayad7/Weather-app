import React, { Component } from 'react';

class DateStr extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date};
    }

    
    render() { 
        return (
            <div className='px-5 pt-5 mx-2  underline decoration-wavy '>
                <h1 className='text-gray-300 text-sm'>Today, {this.state.date.toLocaleDateString()}</h1>
            </div>
        );
    }
}
 
export default DateStr;