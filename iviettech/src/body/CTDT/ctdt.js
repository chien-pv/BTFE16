import './ctdt.css';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>

function DaoTao(){
  return(
    <div className="daotao">
      <DangKyHoc></DangKyHoc>
      <Ctdt></Ctdt>
    </div>
  )
}

function DangKyHoc(){
  return(
    <div className="container">
      <div className="container__dangky">
        <h2>ĐĂNG KÝ HỌC</h2>
      </div>
      <div className="container__form">
        <form>
          <input type="text" placeholder="Họ và tên"></input>
          <input type="email" placeholder="Email"></input>
          <input type="tel" placeholder="Điện thoại"></input>
          <select>
            <option selected>Chọn khóa học</option>
            <option>Lập trình Android</option>
            <option>Lập trình IOS-Switf</option>
            <option>Lập trình PHP & MySQL</option>
            <option>Lập trình Front End</option>
            <option>Kiểm thử chuyên nghiệp</option>
            <option>Lập trình Java từ A-Z</option>
          </select>
          <input type="text" placeholder="Lời nhắn của bạn" className="loinhan"></input>
          <button>Đăng ký học</button>
        </form>
      </div>
    </div>
  )
}

function Ctdt(){
  return(
    <div className="ctdt">
      <div className="ctdt__dt">
        <h2>
          <a href="#">CHƯƠNG TRÌNH ĐÀO TẠO</a></h2>
      </div>
      <div className="ctdt__carousel">
        <ul>
          <li>
            <a href="#" className="ctdt__carousel--distand"><img src="java.jfif"/></a>
            <div className="ctdt__carousel--descrip">
              <h3><a href="#">Lập Trình Java Từ A-Z</a></h3>
              <p>Thời gian: 6 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </li>
          <li>
            <a href="#" className="ctdt__carousel--distand"><img src="timthumb.png"/></a>
            <div className="ctdt__carousel--descrip">
              <h3><a href="#">Lập Trình Front End - New</a></h3>
              <p>Thời gian: 5 tháng</p>
              <p>Suất học: Tối 2-4-6</p>
            </div>
          </li>
          <li>
            <a href="#" className="ctdt__carousel--distand"><img src="/timthumb1.jfif"/></a>
            <div className="ctdt__carousel--descrip">
              <h3><a href="#">Lập Trình PHP & Laravel</a></h3>
              <p>Thời gian: 6 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </li>
          <li>
            <a href="#" className="ctdt__carousel--distand"><img src="/timthumb2.jfif"/></a>
            <div className="ctdt__carousel--descrip">
              <h3><a href="#">Lập Trình Viên Chuyên Nghiệp</a></h3>
              <p>Thời gian: 8 tháng</p>
              <p>Suất học: Tối 3-5-7</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DaoTao;