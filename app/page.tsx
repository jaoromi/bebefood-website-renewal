// app/page.tsx
import MainSlider from "./components/MainSlider";

export default function Home() {
  return (
    <section>
      <MainSlider />
      {/* 3개 섹션 (제품 리뷰, 회사 소식, 제품 구매) */}
      <section className="max-w-5xl mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1) 제품 리뷰 */}
          <div className="border p-4">
            <h2 className="text-lg font-bold mb-2">제품 리뷰</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>베베푸드 쌀과자 후기</li>
              <li>신제품 오곡크런치 체험단 리뷰</li>
              <li>아기 과자 베스트셀러 정리</li>
            </ul>
          </div>

          {/* 2) 회사 소식 */}
          <div className="border p-4">
            <h2 className="text-lg font-bold mb-2">회사 소식</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>베베푸드, 성남시 우수기업 선정</li>
              <li>신규 라인업 출시 안내</li>
              <li>휴무 일정 및 고객센터 공지</li>
            </ul>
          </div>

          {/* 3) 제품 구매 */}
          <div className="border p-4">
            <h2 className="text-lg font-bold mb-2">제품 구매</h2>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>공식 쇼핑몰 할인 이벤트</li>
              <li>오프라인 판매점 목록</li>
              <li>온라인 채널(쿠팡, 11번가 등) 안내</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
