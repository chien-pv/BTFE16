import './gioithieu.css';

function GioiThieu(){
  return(
    <Gt></Gt>
  )
}

function Gt(){
  return(
    <div className="gioithieu">
      <div className="gioithieu__container">

        <div className="gioithieu__container__gt--img">
          <a><img src="/img-intro.jpg" /></a>
        </div>

        <div className="gioithieu__container__gt--detail">
          <h2><a><img src="/Logo.png" /></a></h2>
          <h3>Giới Thiệu!</h3>
          <p>Trải qua nhiều năm làm việc trong ngành phần mềm, hiểu được thực trạng
            nhu cầu nhân lực của ngành, nhóm chuyên gia trong ngành đã thành lập Trung
            tâm đào tạo Lập trình viên chuyên nghiệp iVietTech với mong muốn thu hẹp
            khoảng cách giữa nhà trường với doanh nghiệp, tạp cơ hội việc làm cho các 
            bạn trẻ đã, đang và sẽ theo học ngành CNTT.
          </p>
          <p className="xemthem"><a href="#">Xem thêm</a></p>
        </div>

        <div className="gioithieu__container__ketnoi">
          <div className="gioithieu__container__ketnoi--h2">
            <span><a href="#">Kết Nối Với Chúng Tôi</a></span>
          </div>
          <div className="gioithieu__container__ketnoi--link">
            <a href="#"><img src="/fb.jpg" /></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default GioiThieu;