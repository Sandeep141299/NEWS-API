import React from "react";

class Newapi extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className='App'>
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            User-id: {item.id} <br /> Gender: {item.gender} <br /> Full_Name: {item.name} <br /> Email_id: {item.email} <br /> Status :{item.status}
          </ol>
        ))}
      </div>
    );
  }
}

export default Newapi;
