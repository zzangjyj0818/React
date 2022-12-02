import React , {useState, useEffect} from 'react';

function Info(){
    const [name, setName]= useState('');
    const [nickname, setNickname]= useState('');

    
    useEffect(()=>{
        console.log('complete rendering');
        console.log({
            name,
            nickname,
        })
    });
    

   /*
   useEffect(()=>{
    console.log('Execute when mount');
   },[]);
   */
    const onChangName = e => {
        setName(e.target.value);
    }
    const onChangNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <input value={name} onChange={onChangName}/>
            <input value={nickname} onChange={onChangNickname}/>
            <div>
                <div>이름:</div>{name}
            </div>
            <div>
                별명
            </div> {nickname}
        </div>
    );
}
export default Info;