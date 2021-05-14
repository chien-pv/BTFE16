import "./menu.css";

function Header(){
  return(
    <div className="header">
      <Menu></Menu>
    </div> 
  )
}
function Menu(){
  return(
    <div className="menu">
      <h1><a href="#" name="menu__logo"><img src="Logo.png" width="250"/></a></h1>
      <div className="menu__listmenu">
        <ul>
          <li><a href="#" className="menu__listmenu--1">Trang chủ</a></li><span>|</span>
          <li><a href="#">Các khóa học lập trình</a></li><span>|</span>
          <li><a href="#">Đăng ký học</a></li><span>|</span>
          <li><a href="#">Việc làm</a></li><span>|</span>
          <li><a href="#">IVietTech</a></li><span>|</span>
          <li><a href="#">Trang vàng HV</a></li><span>|</span>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>

    </div>
  )
}

export default Header;