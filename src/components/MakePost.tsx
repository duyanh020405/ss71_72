import React, { useState } from "react";
import "./MakePost.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost, getAllPost } from "../store/reducers/reducer";
export default function MakePost() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.reducer.posts);
  let id = 1;
  if (data[data.length - 1]?.id) {
    id = data[data.length - 1].id + 1;
  }
  // console.log(data);

  const [formData, setFormData] = useState({
    id,
    name: "",
    image: "",
    type: "",
    state: "",
    check: "hoat dong",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formData.id = id;
    // console.log(formData);

    dispatch(addNewPost(formData));
    // dispatch(getAllPost());

    setFormData({
      id,
      name: "",
      image: "",
      type: "",
      state: "",
      check: "hoat dong",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="make-post-container">
      <p>Ten bai viet</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInput}
      />
      <p>Hinh anh</p>
      <input
        type="text"
        name="image"
        value={formData.image}
        onChange={handleInput}
      />
      <p>The loai</p>
      <input
        type="text"
        name="type"
        value={formData.type}
        onChange={handleInput}
      />
      <p>Noi dung</p>
      <input
        type="text"
        name="state"
        value={formData.state}
        onChange={handleInput}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}
