import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Plus, Minus, Compass, Building2 } from 'lucide-react';

export const GoogleMapsLocationSection: React.FC = () => {
  const [isInteractive, setIsInteractive] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [copiedAddress, setCopiedAddress] = useState(false);

  const address = 'Tầng 28, Tòa tháp Tài chính Matrix, Số 1 Phố Doanh Nhân, Quận Cầu Giấy, Hà Nội';

  const handleCopyAddress = () => {
    navigator.clipboard?.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleOpenGoogleMaps = () => {
    const encoded = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encoded}`, '_blank');
  };

  return (
    <section
      id="section-map"
      className="w-full py-16 sm:py-24 bg-[#f8fafc] text-[#0A192F] relative overflow-hidden select-none border-t border-slate-200"
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION (Khớp 100% ảnh 3) */}
        <div className="max-w-2xl mb-10 sm:mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[#0d1d2f] font-bold text-xs tracking-widest uppercase">
              LIÊN HỆ
            </span>
            <span className="w-8 h-[1.5px] bg-[#00c2ff]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#0d1d2f] tracking-tight leading-tight mb-3">
            Một địa chỉ. <span className="text-[#00c2ff]">Điểm bắt đầu kết nối.</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
            Chúng tôi luôn sẵn sàng lắng nghe và đồng hành cùng bạn trên những cơ hội hợp tác.
          </p>
        </div>

        {/* BỐ CỤC 2 CỘT: CỘT TRÁI BẢN ĐỒ HIỆN ĐẠI / CỘT PHẢI BẢNG THÔNG TIN NỀN TỐI SANG TRỌNG */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CỘT TRÁI (8 CỘT): KHUNG BẢN ĐỒ HIỆN ĐẠI VỚI PIN PHÁT SÁNG & SÔNG HỒ */}
          <div className="lg:col-span-8 relative rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-[#e2e8f0] min-h-[420px] sm:min-h-[480px] flex items-center justify-center">
            
            {/* Lớp bản đồ Vector đồ họa chi tiết mô phỏng Hà Nội & Sông Hồng */}
            <div
              className="absolute inset-0 transition-transform duration-300"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <svg className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice" fill="none">
                {/* Nền bản đồ xám ngọc hiện đại */}
                <rect width="800" height="600" fill="#f1f5f9" />
                
                {/* Khối công viên cây xanh */}
                <path d="M 50 100 Q 150 120 180 220 T 50 300 Z" fill="#dcfce7" opacity="0.7" />
                <path d="M 600 350 Q 700 380 750 500 T 600 550 Z" fill="#dcfce7" opacity="0.6" />

                {/* Dòng sông uốn lượn xanh ngọc lớn xuyên qua thành phố */}
                <path
                  d="M 0 160 C 200 240, 250 420, 500 480 C 650 520, 750 480, 800 420 L 800 490 C 750 550, 650 590, 500 550 C 250 490, 200 310, 0 230 Z"
                  fill="#bae6fd"
                  opacity="0.8"
                />

                {/* Các đường phố chính */}
                <path d="M 0 350 L 800 260" stroke="#cbd5e1" strokeWidth="12" />
                <path d="M 0 350 L 800 260" stroke="#ffffff" strokeWidth="8" />

                <path d="M 400 0 L 400 600" stroke="#cbd5e1" strokeWidth="14" />
                <path d="M 400 0 L 400 600" stroke="#ffffff" strokeWidth="10" />

                <path d="M 150 0 L 650 600" stroke="#cbd5e1" strokeWidth="10" />
                <path d="M 150 0 L 650 600" stroke="#ffffff" strokeWidth="6" />

                {/* Vòng xuyến giao thông trung tâm quanh trụ sở */}
                <circle cx="420" cy="330" r="45" stroke="#cbd5e1" strokeWidth="10" fill="none" />
                <circle cx="420" cy="330" r="45" stroke="#ffffff" strokeWidth="6" fill="none" />
              </svg>
            </div>

            {/* PIN ĐỊA ĐIỂM TRỤ SỞ VỚI CÁC VÒNG SÓNG CYAN LAN TỎA (Khớp ảnh 3) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center pointer-events-none select-none">
              
              {/* Các vòng sóng tròn cyan lan tỏa */}
              <div className="absolute w-32 h-32 rounded-full bg-[#00c2ff]/15 animate-ping" />
              <div className="absolute w-24 h-24 rounded-full bg-[#00c2ff]/25" />
              <div className="absolute w-14 h-14 rounded-full bg-[#00c2ff]/40" />

              {/* Pin giọt nước xanh navy đậm */}
              <div className="relative w-10 h-10 rounded-full bg-[#071629] border-2 border-white shadow-2xl flex items-center justify-center text-[#00c2ff] z-10 ring-4 ring-sky-300">
                <MapPin className="w-5 h-5 fill-[#00c2ff] text-[#071629]" />
              </div>

              {/* Nhãn [Vị trí trụ sở] */}
              <div className="mt-2 px-3 py-1 rounded-full bg-[#071629] text-white text-[11px] font-black shadow-lg border border-slate-700 whitespace-nowrap">
                Vị trí trụ sở Matrix Holding
              </div>
            </div>

            {/* HUY HIỆU GÓC TRÊN TRÁI: BẢN ĐỒ MINH HỌA */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1.5">
              <span>🗺</span>
              <span>Bản đồ minh họa</span>
            </div>

            {/* NÚT ĐIỀU KHIỂN ZOOM BẢN ĐỒ BÊN TRÁI */}
            <div className="absolute bottom-4 left-4 z-20 flex flex-col gap-1.5 bg-white/95 rounded-2xl p-1.5 shadow-lg border border-slate-200">
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.min(prev + 0.2, 1.8))}
                className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
                title="Phóng to"
              >
                <Plus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel((prev) => Math.max(prev - 0.2, 0.8))}
                className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
                title="Thu nhỏ"
              >
                <Minus className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setZoomLevel(1)}
                className="w-8 h-8 rounded-xl hover:bg-slate-100 flex items-center justify-center text-slate-700 cursor-pointer"
                title="Về mặc định"
              >
                <Compass className="w-4 h-4" />
              </button>
            </div>

            {/* NÚT KÍCH HOẠT TƯƠNG TÁC GÓC DƯỚI PHẢI (Tránh chiếm quyền cuộn trang) */}
            <div className="absolute bottom-4 right-4 z-20">
              <button
                type="button"
                onClick={() => setIsInteractive(!isInteractive)}
                className="px-4 py-2 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs font-bold text-slate-700 hover:text-[#00c2ff] shadow-md flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>👆</span>
                <span>{isInteractive ? 'Đang tương tác' : 'Chạm vào bản đồ để tương tác'}</span>
              </button>
            </div>

          </div>

          {/* CỘT PHẢI (4 CỘT): BẢNG THÔNG TIN NỀN TỐI SANG TRỌNG (Khớp ảnh 3) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#071629] text-white p-7 sm:p-9 shadow-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            
            <div>
              {/* Kicker: ĐỊA ĐIỂM — */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[#00c2ff] font-bold text-xs tracking-widest uppercase">
                  ĐỊA ĐIỂM
                </span>
                <span className="w-6 h-[1.5px] bg-[#00c2ff]" />
              </div>

              {/* Tiêu đề văn phòng */}
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug mb-4">
                Văn phòng Matrix Holding
              </h3>

              {/* Trụ sở chính */}
              <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-3">
                <Building2 className="w-4 h-4" />
                <span>Trụ sở chính</span>
              </div>

              {/* Địa chỉ chi tiết */}
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                <MapPin className="w-4 h-4 text-[#00c2ff] shrink-0 mt-0.5" />
                <span>{address}</span>
              </div>

              {/* NÚT 1: SAO CHÉP ĐỊA CHỈ */}
              <button
                type="button"
                onClick={handleCopyAddress}
                className="w-full py-3 px-4 rounded-2xl bg-[#0d223a] hover:bg-[#122e4e] border border-slate-700 text-xs sm:text-sm font-bold text-white flex items-center justify-center gap-2 mb-3 cursor-pointer transition-all active:scale-98"
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">Đã sao chép địa chỉ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span>Sao chép địa chỉ</span>
                  </>
                )}
              </button>

              {/* NÚT 2: MỞ GOOGLE MAPS ĐỂ CHỈ ĐƯỜNG ↗ (Cyan rực rỡ chuẩn ảnh) */}
              <button
                type="button"
                onClick={handleOpenGoogleMaps}
                className="w-full py-3.5 px-4 rounded-2xl bg-[#00c2ff] hover:bg-[#38bdf8] text-[#051120] font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-cyan-500/25 transition-all active:scale-98"
              >
                <Navigation className="w-4 h-4" />
                <span>Mở Google Maps để chỉ đường</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Ảnh kiến trúc cao ốc chìm góc dưới phải */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>Thông tin minh họa</span>
              <div className="w-16 h-10 opacity-30">
                <Building2 className="w-full h-full text-white" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
