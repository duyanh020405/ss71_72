import { useDispatch, useSelector } from "react-redux";
import { changePost, getAllPost } from "../store/reducers/reducer";
import { useEffect } from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

export default function CreatPost() {
  const data: any = useSelector((state) => state);
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getAllPost());
  }, []);

  console.log(data.reducer.posts);
  const changeCheck =(item:any)=>{
     dispath(changePost(item))
  }

  return (
    <div>
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
                    src={`${item.image}`}
                    alt=""
                  />
                </td>
                <td>{item.type}</td>
                <td>27/06/2024</td>
                <td>{item.check}</td>
                <td>
                  <button onClick={()=>changeCheck(item)} style={{ color: "lightgreen" }}>
                    <IoEyeSharp></IoEyeSharp>
                  </button>
                  <button style={{ color: "red" }}>
                    <MdDelete></MdDelete>
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
