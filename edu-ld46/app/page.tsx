import Image from "next/image";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="font-sans">
      <Header />

      <section
        className="relative w-full min-h-[600px] flex items-center"
        style={{
          backgroundImage: 'url(/images/banner-hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 flex flex-col justify-center h-full md:flex-row md:items-center">
          <div className="bg-white/80 rounded-lg p-8 max-w-lg md:mr-auto md:ml-0 ml-auto md:text-left text-center z-50">
            <h1 className="text-4xl font-bold mb-4">Edu PLF - Nền tảng giáo dục hiện đại</h1>
            <p className="text-lg mb-6">Khám phá khoá học, phát triển kỹ năng, kết nối cộng đồng học tập năng động.</p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Đọc thêm</button>
          </div>
          <div className="">
            <Image src="/images/banner-hero.jpg" alt="Banner" fill priority className="object-cover rounded-lg shadow-lg w-full h-full" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Chào mừng đến với Edu PLF</h2>
          <p className="text-lg text-gray-700">Nền tảng giáo dục hiện đại, hỗ trợ học tập và phát triển kỹ năng cho mọi lứa tuổi.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Lợi ích khi sử dụng Edu PLF</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Khoá học đa dạng</h3>
              <p>Đa dạng chủ đề, phù hợp với nhiều đối tượng học viên.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Giảng viên chất lượng</h3>
              <p>Đội ngũ giảng viên giàu kinh nghiệm, tận tâm hỗ trợ.</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Học tập linh hoạt</h3>
              <p>Học mọi lúc, mọi nơi, trên nhiều thiết bị khác nhau.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
