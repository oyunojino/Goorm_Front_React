// 리액트를 불러와서 사용
import React from 'react';

// 컴포넌트 생성 방법 1 -> function

// 컴포넌트 이름 생성 규칙
//  1. 첫글자는 대문자로 작성
//  2. 이후는 camel case 기준으로 작성
function HelloWorld() {
    return<div>안녕하세요.</div>;
}
// HelloWorld 컴포넌트를 생성해서 내보내줌
export default HelloWorld;

// 컴포넌트 생성 방법 2 -> class
