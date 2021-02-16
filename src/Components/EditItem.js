
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "../redux/actions/ItemActions";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import { getItemById } from "../redux/actions/ItemActions";

const EditItem = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const singleItem = useSelector((state) => state.item.singleData);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  useEffect(() => {
    if (singleItem != null) {
      setName(singleItem.name);
      setDescription(singleItem.description)
      setCategory(singleItem.category);
      setPrice(singleItem.price);
    }
    dispatch(getItemById(id));
  }, [singleItem]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_item = Object.assign(singleItem, {
      name: name,
      price: price,
      description: description,
      category:category
    });
    dispatch(updateItem(update_item));
    history.push("/items")
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Edit a Contact</div>
      <div className="card-body">
        <form 
        onSubmit={(e) => onUpdateContact(e)}
        >
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter  Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update 
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;