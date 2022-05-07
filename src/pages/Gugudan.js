import {useState, useRef, useEffect} from 'react'

function Gugudan() {
  
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    console.log(123)
  })

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(inputRef.current.value)
    if(parseInt(value) === (first * second)){
      setResult('정답:' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      inputRef.current.focus();
    }else{
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }
  return (
    <>
      <div>
        {first} 곱하기 {second} 는?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} defaultValue={value} onChange={onChangeInput}/>
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default Gugudan;