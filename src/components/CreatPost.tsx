import { useDispatch, useSelector } from "react-redux";
import { changePost, deletePost, getAllPost } from "../store/reducers/reducer";
import { useEffect, useState } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import './Creat.css'
import ChuY from "./ChuY";
export default function CreatPost() {
  const data: any = useSelector((state) => state);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllPost());
  }, [dispatch]);

  console.log(data.reducer.posts);

  const changeCheck = (item:any) => {
    console.log(item);
    
    const newName = window.prompt("Enter new name:", item.name);
    const newImage = window.prompt("Enter new image URL:", item.image);
    const newType = window.prompt("Enter new type:", item.type);
    const newState = window.prompt("Enter new state:", item.state);
    
    
    const newPost = {
      ...item,
      name: newName || item.name,
      image: newImage || item.image,
      type: newType || item.type,
      state: newState || item.state,
    };
    
    dispatch(changePost(newPost));
  };
  const handleDelPost = (item:any) => {
    let confirmDel = window.confirm("bạn có muốn xóa hay không");
    if (confirmDel) {
      dispatch(deletePost(item));
      console.log(item);
    }
  }

  return (
    <div>
      <ChuY></ChuY>
         <Link to={'/creatPost'}>Tao bai post</Link>
      <h2>Danh sach cac san pham </h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Stt</th>
            <th>Tieu de</th>
            <th>Hinh anh</th>
            <th>The loai</th>
            <th>Ngay viet</th>
            <th>Trang thai</th>
            <th>Chuc nang</th>
          </tr>
        </thead>
        <tbody>
          {data.reducer.posts.map((item: any) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>
                  <img
                    style={{ position: "relative", width: 200 }}
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.type}</td>
                <td>{item.date}</td>
                <td>{item.check}</td>
                <td>
                  <button onClick={() => changeCheck(item)} style={{ color: "lightgreen" }}>
                    <IoEyeSharp />
                  </button>
                  <button onClick={() => handleDelPost(item.id)} style={{ color: "red" }}>
                    
                    <MdDelete />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
