// app/page.tsx
import MainSlider from "./components/MainSlider";

export default function Home() {
  return (
    <section>
      <MainSlider />
      <h2 className="text-xl font-bold mt-4">메인 슬라이더 아래 내용(예시)</h2>
      <p className="mt-2">
        여기부터 제품 리뷰, 회사 소식, 제품 구매 영역을 이어서 추가할
        예정입니다.
      </p>
    </section>
  );
}
