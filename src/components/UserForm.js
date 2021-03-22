import React from "react";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
    };
  }
  onUserNameChange = (e) => {
    const username = e.target.value;
    this.setState(() => ({ username }));
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.username) {
      this.props.onSubmit({
        username: this.state.username,
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Github username"
          autoFocus
          className="text-input"
          value={this.state.username}
          onChange={this.onUserNameChange}
        />

        <div>
          <button className="button">View Repos</button>
        </div>
      </form>
    );
  }
}
