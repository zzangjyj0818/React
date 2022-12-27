import {useRef, useCallback, useState} from 'react';

const App = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({name: '', username:''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  const onChange = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      setData({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  const onRemove = useCallback(
    id => {
      setData({ 
          ...data,
          array: data.array.filter(info => info.id !==id)
        }
      );
    }, [data]
  );

  return(
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
      </form>
    </div>
  );
}