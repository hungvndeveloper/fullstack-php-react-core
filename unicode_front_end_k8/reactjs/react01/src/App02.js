import React from "react";
import Header from "./Components/Header";
import UserItem from "./Components/UserItem";
import Footer from "./Components/Footer";
import Content from "./Components/Content";

const App = () => {
  //const text = "<p>Hello World</p>"; //Inner Text

  //const text = <p>Hello World</p>;

  //const content = `<p>Vài ngày gần đây, thương hiệu Phở Thìn Lò Đúc nhận được sự quan tâm của nhiều người xoay quanh câu chuyện mâu thuẫn giữa nhà sáng lập và người tự giới thiệu là vận hành công ty liên quan đến thương hiệu này.</p> <p>Hiện thông tin từ Cổng thông tin Thông tin từ Cổng thông tin quốc gia về đăng ký <a href="https://dantri.com.vn/kinh-doanh/doanh-nghiep.htm" data-auto-link-id="6132363afb044100119a1455" data-track-content="" data-content-name="article-content-autolink" data-content-piece="article-content-autolink_6132363afb044100119a1455" data-content-target="/kinh-doanh/ai-dang-thuc-su-so-huu-thuong-hieu-pho-thin-20230224144036507.htm">doanh nghiệp</a> có 3 doanh nghiệp liên quan đến thương hiệu này bao gồm: Công ty TNHH Phở Thìn Hà Nội, Công ty Hợp danh bảo tồn và phát triển thương hiệu Phở Thìn 13 Lò Đúc Hà Nội, Công ty cổ phần Tập đoàn VieThin.</p> <p>Tuy nhiên thông tin từ Cục Sở hữu trí tuệ, nhãn hiệu Phở Thìn đều không thuộc sở hữu của 3 công ty này. Từ năm 2003 đến nay có 14 đơn nộp về Cục Sở hữu trí tuệ để được cấp bằng nhưng chỉ có 2 hồ sơ được phê duyệt bao gồm: Phở Thìn do ông Bùi Chí Đạt địa chỉ tại Số 2 phố Lò Đúc, quận Hai Bà Trưng, TP Hà Nội làm chủ bằng; Phở Tâm do Công ty cổ phần Đầu tư và phát triển phở Thìn Mỹ Đình làm chủ bằng.</p> <p>Năm 2003, ông Bùi Chí Đạt đăng ký bảo hộ cho nhãn hiệu Phở Thìn, văn bản này đã hết hiệu lực vào năm 2013. Đến năm 2015, ông Đạt đăng ký lại và được cấp bằng, có hiệu lực đến ngày 26/12/2024.</p> <figure class="image align-center" contenteditable="false"><img title="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 1" src="https://icdn.dantri.com.vn/thumb_w/680/2023/02/24/anh-man-hinh-2023-02-24-luc-124759-1677223754704.png" alt="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 1" data-width="2224" data-height="996" data-original="https://icdn.dantri.com.vn/2023/02/24/anh-man-hinh-2023-02-24-luc-124759-1677223754704.png" data-photo-id="2360864" data-track-content="" data-content-name="article-content-image" data-content-piece="article-content-image_2360864" data-content-target="/kinh-doanh/ai-dang-thuc-su-so-huu-thuong-hieu-pho-thin-20230224144036507.htm" data-adbro-processed="true"> <figcaption> <p>Nhãn hiệu Phở Thìn được cấp cho ông Bùi Chí Đạt, tại số 2 Lò Đúc (Ảnh chụp màn hình).</p> </figcaption></figure> <p>Năm 2009, ông Nguyễn Trọng Thìn đăng ký bảo hộ cho nhãn hiệu Phở Thìn nhưng bị từ chối. Nhãn hiệu&nbsp;của ông Đạt và ông Thìn đăng ký chỉ khác nhau về cách viết hoa và viết thường trên nhãn hiệu. Điều này có dấu hiệu trùng hoặc tương tự đến mức gây nhầm lẫn với nhãn hiệu đã được đăng ký sớm hơn.</p> <p>Một chi tiết thú vị là năm 2014, một tập đoàn bất động sản lớn của Việt Nam cũng từng nộp đơn đăng ký bảo hộ nhãn hiệu Phở Thìn nhưng bị từ chối.</p> <figure class="image align-center" contenteditable="false"><img title="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 2" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2512 1136'%2F%3E" alt="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 2" data-width="2512" data-height="1136" data-original="https://icdn.dantri.com.vn/2023/02/24/bat-ngo-vingroup-tung-dang-ky-nhan-hieu-pho-thin-nhung-bi-tu-choi-2-edited-1677230280455.jpeg" data-photo-id="2361128" data-track-content="" data-content-name="article-content-image" data-content-piece="article-content-image_2361128" data-content-target="/kinh-doanh/ai-dang-thuc-su-so-huu-thuong-hieu-pho-thin-20230224144036507.htm" data-src="https://icdn.dantri.com.vn/thumb_w/680/2023/02/24/bat-ngo-vingroup-tung-dang-ky-nhan-hieu-pho-thin-nhung-bi-tu-choi-2-edited-1677230280455.jpeg"> <figcaption> <p>(Ảnh chụp màn hình).</p> </figcaption></figure> <p>Đến năm 2019, Công ty cổ phần Phở Thìn 13 Lò Đúc nộp đơn đăng ký cho Phở Thìn với thay đổi về màu sắc. Hồ sơ này đang ở trạng thái giải quyết.</p> <p>Năm 2020, ông Nguyễn Trọng Thìn tiếp tục nộp 3 đăng ký bảo hộ cho nhãn hiệu với việc thay đổi ghi rõ địa chỉ và hình ảnh. Những đơn này đang ở trạng thái giải quyết.</p> <p>Năm 2022, ông Đoàn Hải Trung và Công ty Hợp danh bảo tồn và phát triển thương hiệu Phở Thìn 13 Lò Đúc Hà Nội nộp 2 đơn lên Cục Sở hữu trí tuệ. Lần này nhãn hiệu có sự cách điệu về chữ Thìn so với những lần đăng ký trước. Tuy nhiên 2 đơn này cũng đang trong tình trạng giải quyết, chưa được cấp chứng nhận.</p> <figure class="image align-center" contenteditable="false"><img title="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 3" src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg' viewBox%3D'0 0 2498 1092'%2F%3E" alt="Ai đang thực sự sở hữu thương hiệu Phở Thìn? - 3" data-width="2498" data-height="1092" data-original="https://icdn.dantri.com.vn/2023/02/24/anh-man-hinh-2023-02-24-luc-143306-1677224069469.png" data-photo-id="2360875" data-track-content="" data-content-name="article-content-image" data-content-piece="article-content-image_2360875" data-content-target="/kinh-doanh/ai-dang-thuc-su-so-huu-thuong-hieu-pho-thin-20230224144036507.htm" data-src="https://icdn.dantri.com.vn/thumb_w/680/2023/02/24/anh-man-hinh-2023-02-24-luc-143306-1677224069469.png"> <figcaption> <p>Đơn đăng ký bảo hộ nhãn hiệu Phở Thìn của ông Nguyễn Trọng Thìn và ông Đoàn Hải Trung đang trong trạng thái giải quyết (Ảnh chụp màn hình).</p> </figcaption></figure> <p>Theo Cục Sở hữu trí tuệ, nhãn hiệu là những dấu hiệu dùng để phân biệt hàng hóa, dịch vụ của các tổ chức, cá nhân khác nhau. Dấu hiệu dùng làm nhãn hiệu phải là những dấu hiệu nhìn thấy được dưới dạng chữ cái, từ ngữ, hình ảnh, hình vẽ hoặc sự kết hợp của các yếu tố đó được thể hiện bằng một hoặc nhiều màu sắc.</p> <p>Điều 87 Luật Sở hữu trí tuệ (điều này được sửa đổi bổ sung năm 2009) quy định tổ chức, cá nhân có quyền đăng ký nhãn hiệu dùng cho&nbsp;hàng hóa do mình sản xuất&nbsp;hoặc&nbsp;dịch vụ do mình cung cấp.</p> <p>Luật cũng quy định Hai hoặc nhiều tổ chức, cá nhân có quyền cùng đăng ký một nhãn hiệu để trở thành đồng chủ sở hữu với những điều kiện sau đây:</p> <p>a) Việc sử dụng nhãn hiệu đó phải nhân danh tất cả các đồng chủ sở hữu hoặc sử dụng cho hàng hóa, dịch vụ mà tất cả các đồng chủ sở hữu đều tham gia vào quá trình sản xuất, kinh doanh;</p> <p>b) Việc sử dụng nhãn hiệu đó không gây nhầm lẫn cho người <a href="https://dantri.com.vn/kinh-doanh/tieu-dung.htm" data-auto-link-id="61327da4fb044100119a145c" data-track-content="" data-content-name="article-content-autolink" data-content-piece="article-content-autolink_61327da4fb044100119a145c" data-content-target="/kinh-doanh/ai-dang-thuc-su-so-huu-thuong-hieu-pho-thin-20230224144036507.htm">tiêu dùng</a> về nguồn gốc của hàng hóa, dịch vụ.</p>`;

  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nguyenvanc@gmail.com",
    },
  ];

  const jsxUsers = users.map((user) => (
    // <UserItem key={id} name={name} email={email} />
    <UserItem key={user.id} {...user} />
  ));

  //Event Handler
  const handleGetData = (text) => {
    console.log(text);
  };

  return (
    <div>
      <Header name="ABC" onGetData={handleGetData} />
      <Footer>
        <h2>Unicode Academy</h2>
        <h3>Khóa học Front-End Dev</h3>
        <Content />
      </Footer>
      {/* <h2>Danh sách người dùng</h2>
      {jsxUsers} */}
    </div>
  );
};

export default App;

//   dangerouslySetInnerHTML={{
//     __html: content,
//   }}
