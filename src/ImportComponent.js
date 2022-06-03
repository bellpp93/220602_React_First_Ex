import React, { Component } from 'react';

/*
    component란?
        => 특정 코드 뭉치를 다른 부분에 이식하거나 재사용하기 위해
        사용하는 코드 블럭 단위를 말한다.
    render() 함수는 return되는 html 형식의 코드를 화면에 그려주는 함수이다.
    즉, 화면 내용이 변경되어야 할 시점에 자동으로 호출된다.
*/

class ImportComponent extends Component {
    render() {
        return(
            <h2>[This is Imported Component]</h2>
        );
    }
}

export default ImportComponent;
