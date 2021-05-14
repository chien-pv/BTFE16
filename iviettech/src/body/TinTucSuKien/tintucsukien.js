import './tintucsukien.css';

function Sukientuyendung(){
  return(
    <div className="tintuc">
      <div className="container">
        <Tintucsukien ></Tintucsukien>
        <Tintuyendung posts={posts}></Tintuyendung>
      </div>
    </div>

  )
}

const posts = [
  {id: 1, img: '/h1.jpg', title: 'Công ty: CÔNG TY PHẦN MỀM EST ROUGE', content: 'PHP - FRONTEND - TESTER', date: 'Thứ bảy, 05/12/2020'},
  {id: 2, img: '/h2.jpg', title: 'Công ty: CÔNG TY PHẦN MỀM RIKKEI', content: 'Nhiều vị trí với all levels từ Rikkei', date: 'Thứ bảy, 05/12/2020'},
  {id: 3, img: '/h3.jpg', title: 'Công ty: CÔNG TY EnjoyWorks', content: 'PHP - FRONTEND - TESTER', date: 'Thứ bảy, 05/12/2020'},
  {id: 4, img: '/h4.jpg', title: 'Công ty: CÔNG TY PHẦN MỀM IMT', content: 'PHP - FRONTEND - TESTER', date: 'Thứ bảy, 05/12/2020'},
  {id: 5, img: '/h5.jpg', title: 'Công ty: CÔNG TY GMO ĐÀ NẴNG', content: 'PHP - FRONTEND - TESTER', date: 'Thứ bảy, 05/12/2020'}
]

function Tintucsukien(){
  return(
    <div className="tintuc__sukien">
      <div className="title">
        <h2>
          <a href="#"> 
            <span>Tin Tức & Sự Kiện</span> <br />
            <span className="titlle__speacial">Tin Tức Chuyên Ngành</span>
          </a>
        </h2>
      </div>
      <div className="xuhuong">
        <div className="xuhuong__container">
          <div className="xuhuong__container--left">
            <a href="#"><img src="/xuhuong.jpg" width="262" height="177" /></a>
          </div>
          <div className="xuhuong__container--right">
            <h3>Xu hướng công nghệ lập trình 2021</h3>
            <p>Thứ Sáu, 15/01/2021</p>
            <p>Xu hướng công nghệ lập trình 2021 cung cấp cái nhìn toàn cảnh về nhu cầu nhân lực ngành phần mềm Đà Nẵng 2020 và xu thế tuyển dụng...</p>
          </div>
        </div>
      </div>
      <div className="tintucdadua">
        <h2>
          <a href="#">Tin Tức Đã Đưa</a>
        </h2>
      </div>
      <div className="content">
        <div className="content_container">
          <ul>
            <li>
              <div className="content_container--left">
                <a><img src="/web1.jpg" width="97" height="73" /></a>
              </div>
              <div className="content_container--right">
                <h4>Học 5 kỹ thuật lập trình web này, chắc chắn bạn sẽ có mức lương hàng nghìn USD tại Việt Nam</h4>
                <p>Thứ Tư, 06/01/2021</p>
              </div>
            </li>
            <li>
              <div className="content_container--left">
                <a><img src="/web2.png" width="97" height="73" /></a>
              </div>
              <div className="content_container--right">
                <h4>Nhìn lại 2020, một năm lịch sử với nhiều bước ngoặt phi thường của thế giới công nghệ</h4>
                <p>Thứ Hai, 04/01/2021</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Tintuyendung(props){
  const content = props.posts.map((post) => 
    <div className="timviec__container"  key = {post.id}>  
        <div className="timviec__container--left">
          <a href="#"><img src={post.img} /></a>
        </div>
        <div className="timviec__container--right">
          <p>{post.title}</p>
          <p><a href="#">{post.content}</a></p>
          <p>{post.date}</p>
        </div>
    </div>
  );  

  return(
    <div className="tintuyendung">
      <div className="title">
        <h2>
          <span>Tin Tuyển Dụng</span> <br />
          <span className="titlle__speacial">Việc tìm người - Người tìm việc</span>
        </h2>
      </div>
      <div className="timviec">
        <ul>
          <li>
            {content}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sukientuyendung;