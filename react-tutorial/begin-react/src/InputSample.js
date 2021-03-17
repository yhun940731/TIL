import React, {useState, useRef} from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();
  const nicknameInput = useRef();
  const {name, nickname} = inputs;

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput}/>
      <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} ref={nicknameInput}/>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>걊: </b>
        {name} ({nickname})
      </div>
    </div>
    );
}

export default InputSample;