import { Component } from "react";
interface CounterState {
  count: number;
}
export default class Exersice08 extends Component<object, CounterState> {
  private timerID?: number;

  constructor(props: object) {
    super(props);
    this.state = { count: 0 };
  }
  componentDidMount() {
    this.timerID = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11, // quay lại 0 khi đạt 10
      }));
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerID) {
      clearInterval(this.timerID);
    }
  }

  render() {
    return (
      <div>
        <h3>Giá trị bộ đếm: {this.state.count}</h3>
      </div>
    );
  }
}