import React, { Component, FormEvent, ChangeEvent } from "react";

interface State {
  birthday: string;
  submittedBirthday: string;
}

class BirthdayForm extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      birthday: "",
      submittedBirthday: ""
    };
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ birthday: e.target.value });
  };

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.setState({ submittedBirthday: this.state.birthday });
  };

  render() {
    return (
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h3>Nhập ngày sinh của bạn:</h3>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="birthday">Ngày sinh: </label>
          <input
            type="date"
            id="birthday"
            value={this.state.birthday}
            onChange={this.handleChange}
            style={{ padding: "5px", marginLeft: "10px" }}
          />
          <br />
          <br />
          <button type="submit" style={{ padding: "5px 10px" }}>
            Submit
          </button>
        </form>

        {this.state.submittedBirthday && (
          <p style={{ marginTop: "20px" }}>
            <b>Ngày sinh:</b> {this.state.submittedBirthday}
          </p>
        )}
      </div>
    );
  }
}

export default BirthdayForm;
