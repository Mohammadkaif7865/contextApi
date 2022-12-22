import React, {useRef,useEffect} from 'react';
import Input from './Elements/Input';
function FocusInput(){
    let inputRef = useRef();
    useEffect(()=>{
        console.log(inputRef.current);
    },[])
 return(
     <>
       <Input ref={inputRef}/>
     </>
)}
export default FocusInput;