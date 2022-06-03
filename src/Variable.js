import React, { Component } from "react";

class Variable extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        var varName = 'react';
        console.log('varName1 :' + varName);
        // var varName = '200';  => 재선언 & 재할당 O
        // console.log('varName2 :' + varName);

        let letName = 'react';
        console.log('letName1 :' + letName);
        // let letName = '200';  => 재선언 X
        letName = 'react200';  // => 재할당 O
        console.log('letName2 :' + letName);

        const constName = 'react';
        console.log('constName1: ' + constName);
        // const constName = '200'; => 재선언 X
        // constName = 'react200';  => 재할당 X
        // console.log('constName2: ' + constName);
    }

    render() {
        return(
            <h2>[This is Variable]</h2>
        );
    }
}

export default Variable;