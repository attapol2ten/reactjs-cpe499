import React, { useState } from "react";
import "./Modal.css";
import imgMyself from '../assets/myself.png';
import imgGit from '../assets/GitHub.png';
import imgFacebook from '../assets/facebook.png';
import imginstagram from '../assets/instagram.png';

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        ข้อมูลเพิ่มเติม
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" ></div>
          <div className="modal-content">
            <h2>สวัสดีครับ</h2>
            <img src={imgMyself} className="imgmyself" />
            <p>ชื่อ : อรรถพล เกิดลำเจียก</p>
            <p>การศึกษา : วิศวกรรมคอมพิวเตอร์ </p>
            <p>ปีการศึกษาที่ : ปีที่ 4 </p>
            <div className="containerSocial">
            <a href="https://github.com/attapol2ten"> <img src={imgGit} className="imgGit" /></a>
            <a href="https://www.facebook.com/autapol1234"> <img src={imgFacebook} className="imgFacebook" /></a>
            <a href="https://www.instagram.com/bao11111a"> <img src={imginstagram} className="imgInstagram" /></a>
            </div>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
