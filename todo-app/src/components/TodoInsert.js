import { useState, useCallback } from 'react';
import {MdAdd} from 'react-icons/md';
//아이콘 추가
import './TodoInsert.scss';
//scss 확장자 => 스타일 시트 불러오기

const TodoInsert = ({onInsert}) => {
    const[value, setValue] = useState('');
    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e=>{
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );
    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input 
            placeholder='할 일을 입력하세요' 
            value={value}
            onChange={onChange}
            />
            <button type="submit">
                <MdAdd/>
            </button>
        </form>
    );
};

export default TodoInsert;