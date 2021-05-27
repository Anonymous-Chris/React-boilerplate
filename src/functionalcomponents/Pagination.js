import React from "react";
export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: 0,
      pageLimit: 30,
      pageNeighbouts: 0,
    };
  }

  componentDidMount() {
    console.log(this.props.data.length);
    if (this.props.data.length > 0) {
      console.log("here");
      this.setState({ totalRecords: this.props.data.length }, () => {
        this.paginate();
      });
    }
  }

  paginate() {
    console.log("paginate");
    var pageNeighbours =
      typeof pageNeighbours === "number"
        ? Math.max(0, Math.min(this.state.pageNeighbours, 2))
        : 0;

    var totalPages = Math.ceil(
      this.state.totalRecords > 0
        ? this.state.totalRecords / this.state.pageLimit
        : 0
    );

    console.log(pageNeighbours, totalPages);
  }

  //get table head from data
  getKeys = function () {
    try {
      return Object.keys(this.props.data[0]);
    } catch (e) {
      console.log("Data is empty");
    }
  };

  //get table head data from getKeys()
  generateHeader() {
    var keys = this.getKeys();
    try {
      return keys.map((key) => {
        return <th key={key}>{key.toUpperCase().replace("_", " ")}</th>;
      });
    } catch (e) {
      console.log("Data is empty");
    }
  }

  generateTabledata() {
    var items = this.props.data;
    var keys = this.getKeys();
    try {
      return items.map((row, index) => {
        return (
          <tr key={index}>
            <RenderRow key={index} data={row} keys={keys} />
          </tr>
        );
      });
    } catch (e) {
      //console.log(e);
      console.log("Data is empty");
    }
  }

  render() {
    console.log(this.props.data);
    return (
      <div>
        <h1>Pagination herer</h1>
        <table className="table table-striped table-dark ">
          <thead>
            <tr>{this.generateHeader()}</tr>
          </thead>

          <tbody>{this.generateTabledata()}</tbody>
        </table>
      </div>
    );
  }
}

const RenderRow = (props) => {
  return props.keys.map((key) => {
    return <td key={props.data[key]}>{props.data[key]}</td>;
  });
};
