import React, { Component } from "react";
import "./style.scss";
import BanChoi from "./BanChoi";
import KetQua from "./KetQua";
import BtnPlay from "./BtnPlay";

const getIntRandom = () => {
  return Math.floor(Math.random() * 6); // tạo các con số ngẫu nhiên từ 0 -5;
};

export default class AppXucXac extends Component {
  xucXacMau = [
    {
      imgSrc: "./img/gameXucXac/1.png",
      diem: 1,
    },
    {
      imgSrc: "./img/gameXucXac/2.png",
      diem: 2,
    },
    {
      imgSrc: "./img/gameXucXac/3.png",
      diem: 3,
    },
    {
      imgSrc: "./img/gameXucXac/4.png",
      diem: 4,
    },
    {
      imgSrc: "./img/gameXucXac/5.png",
      diem: 5,
    },
    {
      imgSrc: "./img/gameXucXac/6.png",
      diem: 6,
    },
  ];
  state = {
    banChon: true, //Tài, false là Xỉu
    soBanThang: 0,
    soBanChoi: 0,
    xucXacs: [
      {
        imgSrc: "./img/gameXucXac/1.png",
        diem: 1,
      },
      {
        imgSrc: "./img/gameXucXac/1.png",
        diem: 1,
      },
      {
        imgSrc: "./img/gameXucXac/1.png",
        diem: 1,
      },
    ],
  };
  handlePlayGame = () => {
    let count = 1;
    const lacXucXac = setInterval(() => {
      const xucXacs = [
        this.xucXacMau[getIntRandom()],
        this.xucXacMau[getIntRandom()],
        this.xucXacMau[getIntRandom()],
      ];
      this.setState({
        xucXacs,
      });
      count += 1;
      if (count > 10) {
        clearInterval(lacXucXac); //dừng Interval
        //Tính điểm
        /**
         * B1: Cần mảng XucXacs tính tổng số điểm (tài hay xỉu)
         * B2: Cần lấy ra mình chọn
         * B3: so sánh với điểm -> thắng số bàn thắng lên, số bàn chơi mặc định tăng
         */
        let { xucXacs, banChon, soBanChoi, soBanThang } = this.state;
        const tongDiem = xucXacs.reduce((tongSoDiem, item) => {
          return (tongSoDiem += item.diem);
        }, 0);
        let ketQua;
        if (tongDiem >= 11) {
          ketQua = true;
        } else {
          ketQua = false;
        }
        if (banChon === ketQua) {
          this.setState({
            soBanThang: (soBanThang += 1),
            soBanChoi: (soBanChoi += 1),
          });
        } else {
          this.setState({
            soBanChoi: (soBanChoi += 1),
          });
        }
      }
    }, 100);
  };
  handleTaiorXiu = (taiOrXiu) => {
    this.setState({
      banChon: taiOrXiu,
    });
  };
  render() {
    const { banChon, soBanThang, soBanChoi, xucXacs } = this.state;

    return (
      <div
        className="gameXucXac"
        style={{
          backgroundImage: 'url("./img/gameXucXac/bgGame.png")',
          width: "100%",
          height: "100%",
          position: "fixed",
          left: 0,
          top: 0,
        }}
      >
        <div className="container">
          <h3 className="display-4 text-center">BÀI TẬP GAME XÚC XẮC</h3>
          <BanChoi handleTaiorXiu={this.handleTaiorXiu} xucXacs={xucXacs} />
        </div>
        <div className="text-center">
          <KetQua
            banChon={banChon}
            soBanThang={soBanThang}
            soBanChoi={soBanChoi}
          />
          <BtnPlay handlePlayGame={this.handlePlayGame} />
        </div>
      </div>
    );
  }
}
