import React, { Component, FormEvent } from "react";

interface Props {}

interface State {}

export class UncontrolledFormClass extends Component<Props,State> {
    nameRef =  React.createRef<HTMLInputElement>();
    ageRef = React.createRef<HTMLInputElement>();
  
    handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      alert(`A name was submitted: ${this.nameRef.current?.value}, age: ${this.ageRef.current?.value}` );
      event.preventDefault();
    }

    handleFocuseName = () => {
        this.nameRef.current?.focus()
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" ref={this.nameRef} />
            <input type="number" name="age" ref={this.ageRef} />
          </label>
          <input type="submit" value="Submit" />
          <input type="button" value="Focuse Name" onClick={this.handleFocuseName}/>
        </form>
      );
    }
  }