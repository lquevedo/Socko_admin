import React from "react";

const ListItem = (props) => {
  return (
    <div className = "products__item">
        <p className="products__item--title">{props.title}</p>
        <p className="products__item--id">{props.id}</p>
        <p>{props.price}</p>
        <a href="/"><div className = "products__item--edit"></div></a>
        <a href="/"><div className = "products__item--delete"></div></a>
    </div>
  );
};

export default ListItem;