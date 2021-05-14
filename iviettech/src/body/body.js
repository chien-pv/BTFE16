import DaoTao from "./CTDT/ctdt";
import GioiThieu from "./GioiThieu/gioithieu";
import KhaiGiang from "./LichKhaiGiang/lichkhaigiang";
import Slide from "./Slide/slide";
import Sukientuyendung from './TinTucSuKien/tintucsukien';


function Body(){
  return(
    <div>
      <Slide></Slide>
      <DaoTao></DaoTao>
      <GioiThieu></GioiThieu>
      <KhaiGiang></KhaiGiang>
      <Sukientuyendung></Sukientuyendung>
    </div>

  )
}

export default Body;