import React from 'react';
import { IoIosWarning } from "react-icons/io";

export default function ChuY() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ border: "3px solid black", borderRadius: '8px', width: '80%', maxWidth: 400, padding: '20px', boxSizing: 'border-box', textAlign: 'center' }}>
        <IoIosWarning style={{ fontSize: '3rem', color: 'red' }} />
        <h2 style={{ marginTop: '20px' }}>Ban co chac muon xoa no khong?</h2>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: 'red', color: 'white', cursor: 'pointer' }}>Xoa</button>
          <button style={{ padding: '10px 20px', border: 'none', borderRadius: '4px', backgroundColor: 'gray', color: 'white', cursor: 'pointer' }}>Huy</button>
        </div>
      </div>
    </div>
  );
}

