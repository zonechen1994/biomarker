import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Features from "../components/sections/Features";
import Solutions from "../components/sections/Solutions";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>百奥码克 - 生物医学AI的先驱</title>
        <meta
          name="description"
          content="百奥码克专注于病理图像、多组学数据和电子病历的AI分析，为医疗机构提供全面的智能诊断和精准医疗解决方案"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="flex-grow">
        <Hero />
        
        <div className="py-8 md:py-12 bg-white">
          {/* 分隔线 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        
        <Features />
        
        <div className="py-8 md:py-12 bg-gray-50">
          {/* 分隔线 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        
        <Solutions />
        
        <div className="py-8 md:py-12 bg-white">
          {/* 分隔线 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        
        <About />
        
        <div className="py-8 md:py-12 bg-gray-50">
          {/* 分隔线 */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home; 