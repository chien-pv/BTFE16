import './lichkhaigiang.css';

function KhaiGiang(){
  return(
    <div className="khaigiangKhoahoc">
      <LichKhaiGiang posts={posts}></LichKhaiGiang>
      <CacKhoaKhac posts_new={posts_new}></CacKhoaKhac>
    </div>
  )
}

const posts =[
  {id: 1, img: '/content1.png', title: 'Phân tích nghiệp vụ (BA)', date: 'Ngày khai giảng: 26-04-2021', schedule: 'Lịch học: Tối 2-4-6'},
  {id: 2, img: '/content2.jpg', title: 'Lập trình Frond - End', date: 'Ngày khai giảng: 10-05-2021', schedule: 'Lịch học: Tối 3-5-7'},
  {id: 3, img: '/java.jpg', title: 'Lập trình Java từ A-Z', date: 'Ngày khai giảng: 11-05-2021', schedule: 'Lịch học: Tối 2-4-6'},
  {id: 4, img: '/content1.png', title: 'Lập trình IOS - Swift', date: 'Ngày khai giảng: 10-05-2021', schedule: 'Lịch học: Tối 3-5-7'},
  {id: 5, img: '/content3.png', title: 'Lập trình Frond - End', date: 'Ngày khai giảng: 10-05-2021', schedule: 'Lịch học: Tối 2-4-6'},
  {id: 6, img: '/content2.jpg', title: 'Lập trình Frond - End', date: 'Ngày khai giảng: 10-05-2021', schedule: 'Lịch học: Tối 3-5-7'},
  {id: 7, img: '/java.jpg', title: 'Lập trình Java từ A-Z', date: 'Ngày khai giảng: 11-05-2021', schedule: 'Lịch học: Tối 2-4-6'},
  {id: 8, img: '/php.jpg', title: 'Lập trình Web với Lavarel', date: 'Ngày khai giảng: 10-05-2021', schedule: 'Lịch học: Tối 3-5-7'}
];

function LichKhaiGiang(props){
  
  const content = props.posts.map((post) => 
    <div className="lichkhaigiang__content--respon">
      <ul>
        <li key = {post.id}>
          <div className="content--left">
            <a href="#"><img src={post.img}/></a>
          </div>
          <div className="content--right">
            <p><a href="#">{post.title}</a></p>
            <p>{post.date}</p>
            <p>{post.schedule}</p>
          </div>
        </li>
      </ul>
    </div>
  );
  return(
    <div className="lichkhaigiang">
      <div className="lichkhaigiang__title">
        <h2><a href="#">LỊCH KHAI GIẢNG</a></h2>
      </div>
      <div className="lichkhaigiang__content">
        {content}
      </div>
    </div>
  );
}

const posts_new =[
  {id: 1, img: '/khoahoc1.png', title: 'Lập trình cơ bản', date: 'Ngày khai giảng: 26-04-2021', time: 'Thời gian: 6 tháng', schedule: 'Suất học: Tối 2-4-6'},
  {id: 2, img: '/khoahoc2.png', title: 'Thiết kế đồ họa', date: 'Ngày khai giảng: 10-05-2021', time: 'Thời gian: 6 tháng', schedule: 'Suất học: Tối 3-5-7'},
  {id: 3, img: '/khoahoc3.png', title: 'Thiết kế nội thất', date: 'Ngày khai giảng: 11-05-2021', time: 'Thời gian: 6 tháng', schedule: 'Suất học: Tối 2-4-6'},
  {id: 4, img: '/khoahoc4.jpg', title: 'Thiết kế UI/UX', date: 'Ngày khai giảng: 10-05-2021', time: 'Thời gian: 6 tháng', schedule: 'Suất học: Tối 3-5-7'}
];

function CacKhoaKhac(props){
  const khoahoc = props.posts_new.map((news) => 
    <div className="khoakhoa" key = {news.id}>
      <div className="cackhoahoc_content--left">
        <a href="#"><img src={news.img}/></a>
      </div>
      <div className="cackhoahoc_content--right"> 
        <p><a href="#">{news.title}</a></p>
        <p>{news.date}</p>
        <p>{news.time}</p>
        <p>{news.schedule}</p>
      </div> 
  </div>
  );
  return(
    <div className="cackhoahoc">
    <div className="cackhoahoc_title">
      <h2><a href="#">CÁC KHÓA KHÁC</a></h2>
    </div>
    <div className="cackhoahoc_content">
      <ul>
        <li>{khoahoc}</li>
      </ul>
    </div>
  </div>
  );
}

export default KhaiGiang;

