import {FormEvent, useEffect, useImperativeHandle, useRef, useState } from "react";

interface Props { }


export const UncontrolledFormFunction: React.FC<Props> = () => {
  const [numSubmits, setNumSubmits] = useState<number>(0);
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);  
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    ageRef.current?.focus()
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    setNumSubmits(numSubmits => numSubmits + 1)
    alert(`A name was submitted: ${nameRef.current?.value}, age: ${ageRef.current?.value}, numSubmits: ${numSubmits}`);
    event.preventDefault();
  }

  const handleFocuseName = () => {
    nameRef.current?.focus()
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <h4>Number of submits: {numSubmits}</h4>
      <label>
        Name:
        <input type="text" name="name" ref={nameRef} />
        <input type="number" name="age" ref={ageRef} />
      </label>
      <input type="submit" value="Submit" />
      <input type="button" value="Focuse Name" onClick={handleFocuseName} />
    </form>
  );
}