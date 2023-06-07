// 리액트를 불러와서 사용
import React from 'react';

// 컴포넌트 생성 방법 1 -> function

// 컴포넌트 이름 생성 규칙
//  1. 첫글자는 대문자로 작성
//  2. 이후는 camel case 기준으로 작성
function HelloWorld(props) {
    console.log(props);
    return (
        <div style={{
            color : props.color
        }}>
            {/* 방법 1 -> 삼항연산자 사용 */}
            {props.isSpecial ? <b>*</b> : null}
            {/* 방법 2 -> && 연산자 사용, 모두가 참일 때만 실행 */}
            {props.isSpecial && <b>*</b>}

            안녕하세요. {props.name}
        </div>
    )
}
// HelloWorld 컴포넌트를 생성해서 내보내줌
export default HelloWorld;

HelloWorld.defaultProps = {
    name : '이름없음'
};

// 컴포넌트 생성 방법 2 -> class
