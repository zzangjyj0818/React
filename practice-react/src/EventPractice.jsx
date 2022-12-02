import React, {useState} from 'react';

const EventPractice = () => {
    const [username, setUsername] = useState('');
    const [message, setMessage] = useState('');
    //
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeMessage = e => setMessage(e.target.value);
    const onClick = () => {
        alert(username + ' ' + message);
        setUsername('');
        setMessage('');
    };
    const keyPress = (e) => {
        if(e.key === 'Enter'){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 핸들링</h1>
            <input 
                type = 'text'
                name = 'username'
                placeholder='username'
                value={username}
                onChange={onChangeUsername}
            />
            <input 
                type = 'text'
                name = 'message'
                placeholder='message'
                value={message}
                onChange = {onChangeMessage}
                onKeyPress={keyPress}
            />
            <button onClick={onClick}>버튼</button>
        </div>
    );
};

export default EventPractice;