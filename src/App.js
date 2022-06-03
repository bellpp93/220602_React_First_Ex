import React from 'react';
import './App.css';
import ImportComponentTrans from './ImportComponent';
import ImportVariable from './Variable';

/*
  jsx에 html 적용하기
  jsx에 css 적용하기
  component 재사용하기
  jsx는 JavaScript를 확장한 문법이다.
*/

function App() {
  return (
    <div>
      <h1>React 학습!</h1>
      <p>HTML 적용하기</p>
      <ImportComponentTrans></ImportComponentTrans>  {/* 사용자 정의 태그 */}
      <ImportVariable></ImportVariable>
    </div>
  );
}

export default App;
