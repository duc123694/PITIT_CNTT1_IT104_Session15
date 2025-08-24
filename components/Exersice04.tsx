import React, { Component, FormEvent,ChangeEvent } from 'react'
interface State {
    progress:number;
    submitProgress:number | null;
}
export default class Exersice04 extends Component<object,State> {
    constructor (props:object){
        super(props);
        this.state = {
            progress: 0,
            submitProgress:null,
        };
    }
    handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({progress:Number(e.target.value)});
    };
    handleSubmit = (e:FormEvent) =>{
        e.preventDefault();
        this.setState({submitProgress:this.state.progress});
    };
  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h3>Nhập tiến độ công việc:</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            min="0"
            max="100"
            value={this.state.progress}
            onChange={this.handleChange}
          />
          <span style={{ marginLeft: "10px" }}>
            {this.state.progress}%
          </span>
          <br />
          <br />
          <button type="submit" style={{ padding: "5px 10px" }}>
            Submit
          </button>
        </form>

        {this.state.submitProgress !== null && (
          <p style={{ marginTop: "20px" }}>
            Tiến độ công việc bạn vừa nhập:{" "}
            <b>{this.state.submitProgress}%</b>
          </p>
        )}
      </div>
    )
  }
}
