import { useState } from 'react';

const Say = () => {

    /* 배열의 첫번째 원소는 현재 상태, 두번째 원소는 상태를 바꾸어주는 함수*/
    /* 이를 세터 함수라고 부름 */
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세요");
    const onClickLeave = () => setMessage("안녕히가세요");

    const [color, setColor] = useState('black');

    return (
        <>
        <button onClick = { onClickEnter }>입장</button>
        {/* 입장 버튼을 누르면 onClickEnter 호출 */}
        <button onClick = { onClickLeave }>퇴장</button>
        {/* 퇴장 버튼을 누르면 onClickLeave 호출 */}
        <h1 style={{color}}>{message}</h1>
        <button style={{color: 'red'}} onClick = { ()=>setColor('red')}>빨간색</button>
        <button style={{color: 'green'}} onClick = { ()=>setColor('green')}>초록색</button>
        <button style={{color: 'yellow'}} onClick = { ()=>setColor('yellow')}>노란색</button>
        </>
    );
};

export default Say;