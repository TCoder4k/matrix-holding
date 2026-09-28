export default function Footer() {
  return (
    <footer className="bg-[#081c31] text-slate-400 py-16 border-t border-white/10 text-xs sm:text-sm">
      <div className="container-page">
        {/* Top 6 Columns matching Mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Tagline with 3D Metallic M Emblem */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 shrink-0 flex items-center justify-center">
                <img
                  src="/images/logo-matrix-holding.svg"
                  alt="Logo Matrix Holding"
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_4px_rgba(30,96,168,0.5)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base tracking-tight text-white leading-none">
                  MATRIX
                </span>
                <span className="text-[9px] tracking-[0.25em] text-[#27d9ef] font-semibold uppercase mt-0.5">
                  HOLDING
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Kiến tạo giá trị bền vững vì một tương lai tốt đẹp hơn.
            </p>
          </div>

          {/* Col 2: Về chúng tôi */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Về chúng tôi
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#ve-chung-toi" className="hover:text-white transition-colors">Tổng quan</a></li>
              <li><a href="#ve-chung-toi" className="hover:text-white transition-colors">Sứ mệnh – Tầm nhìn</a></li>
              <li><a href="#ve-chung-toi" className="hover:text-white transition-colors">Giá trị cốt lõi</a></li>
              <li><a href="#ve-chung-toi" className="hover:text-white transition-colors">Đội ngũ</a></li>
            </ul>
          </div>

          {/* Col 3: Hệ sinh thái */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Hệ sinh thái
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#he-sinh-thai" className="hover:text-white transition-colors">MATRIX Network</a></li>
              <li><a href="#he-sinh-thai" className="hover:text-white transition-colors">MATRIX Connect</a></li>
              <li><a href="#he-sinh-thai" className="hover:text-white transition-colors">MATRIX Capital</a></li>
              <li><a href="#he-sinh-thai" className="hover:text-white transition-colors">Các đơn vị chuyên môn</a></li>
            </ul>
          </div>

          {/* Col 4: Dự án */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Dự án
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#du-an" className="hover:text-white transition-colors">Tất cả dự án</a></li>
              <li><a href="#du-an" className="hover:text-white transition-colors">Lĩnh vực hoạt động</a></li>
            </ul>
          </div>

          {/* Col 5: Tin tức */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Tin tức
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#tin-tuc" className="hover:text-white transition-colors">Bài viết nổi bật</a></li>
              <li><a href="#tin-tuc" className="hover:text-white transition-colors">Câu chuyện Matrix</a></li>
              <li><a href="#tin-tuc" className="hover:text-white transition-colors">Góc nhìn chuyên gia</a></li>
            </ul>
          </div>

          {/* Col 6: Tuyển dụng */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white">
              Tuyển dụng
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#tuyen-dung" className="hover:text-white transition-colors">Cơ hội nghề nghiệp</a></li>
              <li><a href="#tuyen-dung" className="hover:text-white transition-colors">Văn hóa doanh nghiệp</a></li>
              <li><a href="#tuyen-dung" className="hover:text-white transition-colors">Lộ trình phát triển</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar matching Mockup */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2024 MATRIX HOLDING. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-slate-300 transition-colors">
              Chính sách bảo mật
            </a>
            <span aria-hidden="true">|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">
              Điều khoản sử dụng
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
