import React from "react";
import "../styles/search.css";
import DisplayFood from "../components/DisplayFood";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { foodItems: this.props.details };
  }
  changeOnSearch = (e) => {
    if (e.target.value === "") {
      //if seacrh box is empty then pass the whole items to display component
      this.setState({ foodItems: this.props.details });
    } else {
      // to search for particular items
      const searchedItems = this.state.foodItems.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      this.setState({ foodItems: searchedItems });
    }
  };
  render() {
    return (
      <div className="search">
        <h4>Search</h4>
        <input
          type="text"
          placeholder="Search for food"
          onChange={this.changeOnSearch}
        ></input>
        <DisplayFood details={this.state.foodItems} />
      </div>
    );
  }
}
export default SearchBox;
