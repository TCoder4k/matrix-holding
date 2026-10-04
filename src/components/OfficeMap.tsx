import React from 'react';
import { Building2, MapPin, ArrowUpRight } from 'lucide-react';

const address = 'KĐT Bắc Linh Đàm, Phường Hoàng Liệt, Hà Nội';
const query = encodeURIComponent(address);

export default function OfficeMap() {
  return (
    <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm">
      {/* Thông tin văn phòng */}
      <div className="flex items-start gap-4 p-5 sm:p-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sky-50 text-blue-800">
          <Building2 className="h-7 w-7" strokeWidth={1.8} />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[#0A192F]">
            Văn phòng Matrix Holding
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600">
            {address}
          </p>
        </div>
      </div>

      {/* Google Maps thật nhúng qua iframe */}
      <iframe
        title="Bản đồ văn phòng Matrix Holding"
        src={`https://www.google.com/maps?q=${query}&z=15&output=embed`}
        width="100%"
        height="280"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="block h-[260px] w-full border-0 sm:h-[280px]"
      />

      {/* Nút chỉ đường */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex items-center gap-3 px-5 py-5
          text-sm font-semibold text-blue-800
          transition-colors hover:bg-sky-50
          focus-visible:outline focus-visible:outline-2
          focus-visible:outline-offset-[-4px]
          focus-visible:outline-blue-600 sm:px-7
        "
      >
        <MapPin className="h-5 w-5 shrink-0" />

        <span className="flex-1">
          Mở Google Maps để chỉ đường
        </span>

        <ArrowUpRight className="h-5 w-5 shrink-0" />
      </a>
    </div>
  );
}
