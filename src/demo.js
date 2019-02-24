import React, { Component } from 'react';
import Button from 'antd/lib/button';
class Demo extends Component {
    constructor(){
        super();
        this.Btn = [
            '1',
            '2',
            '3',
        ];
    }
    render() {
        return (
            <div>
    <p>Hello</p>
    {
        
        this.Btn.map( (item) => <Button type="primary">{item}</Button>)
    }
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
        
    </div>);
    }
}
export default Demo;
