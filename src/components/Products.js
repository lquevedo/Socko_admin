import React from "react";
import Sidebar from "../components/Sidebar";
import ListItem from "../components/ListItem";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true
    };
  }

  componentDidMount() {
    fetch("http://localhost:3005/products", {
      headers: {
        mode: "cors",
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    })
      .then(response => response.json())
      .then(data =>
        this.setState({
          data,
          loading: false
        })
      );
  }
  render() {
    if (this.state.loading) {
      return null;
    }
    return (
      <div>
        <Sidebar />
        <div className="products">
          <div className="products__breadcrumbs">
            <h1>Products Manager</h1>
            <p><span>Home</span> > Products</p>
          </div>
          <div className="products__header">
            <p className="products__item--title"> Product Name</p>
            <p className="products__item--id">ID</p>
            <p>Price</p>
            <p>Edit</p>
            <p>Delete</p>
          </div>
          {this.state.data.map(list => {
            return (
              <ListItem
                key={list.title}
                title={list.title}
                id={list._id}
                price={list.price}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Products;
