import './footer.css';

function Footer(){
  return(
    <div className="footer">
      <div className="container__footer">
        <div className="container__footer__vt">
          <p className="p1">
            <strong>Địa chỉ : </strong>92 Quang Trung, Q. Hải Châu, TP. Đà Nẵng - 
            <strong> Điện thoại : </strong>02363 888 279
          </p>
          <p className="p2">
            <strong>Email : </strong>
            <a href="#">contact@iviettech.vn</a>
          </p>
        </div>
        <p className="copyright">Bản quyền thuộc về iviettech</p>
      </div>
    </div>
  )
}

export default Footer;