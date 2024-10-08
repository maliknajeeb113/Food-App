import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "",
        location: "",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/maliknajeeb113");
    const json = await data.json();

    console.log(json);

    this.setState({ userInfo: json });
  }

  render() {
    // destructuring stuff here
    const { name, avatar_url } = this.state.userInfo;

    return (
      <div className="container flex mx-auto items-center justify-center flex-col">
        <div className="text-2xl">{name}</div>
        <div>
          <img src={avatar_url} className="rounded-full size-12" />
        </div>
      </div>
    );
  }
}

export default User;
