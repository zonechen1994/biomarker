import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 粒子动画效果
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16 pb-32 md:pt-24 md:pb-40">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* 动态粒子 */}
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-primary-500/30"
            style={{
              width: particle.size,
              height: particle.size,
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
        
        {/* 科技感线条 */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-300/50 to-transparent"></div>
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-accent-300/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
              <span className="text-sm font-medium">人工智能 × 生物医学</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 gradient-text leading-tight">
              用人工智能引领<br />生物医学革命
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-lg">
              使用代码攻克生命百种奥秘，百奥码克致力于通过AI技术加速生物医学研究与临床应用
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="#features">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 gradient-bg text-white font-medium rounded-lg shadow-glow cursor-pointer"
                >
                  了解我们的解决方案
                </motion.a>
              </Link>
              <Link href="#solutions">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-primary-700 font-medium rounded-lg border border-primary-200 hover:border-primary-300 transition-colors cursor-pointer"
                >
                  预约演示
                </motion.a>
              </Link>
            </div>
            
            {/* 统计数据 */}
            <div className="mt-12 grid grid-cols-3 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="tech-card p-4 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">99%</div>
                <div className="text-sm text-gray-600">准确率</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="tech-card p-4 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">200+</div>
                <div className="text-sm text-gray-600">研究机构</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="tech-card p-4 text-center"
              >
                <div className="text-3xl font-bold gradient-text mb-1">50M+</div>
                <div className="text-sm text-gray-600">数据点</div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* 数据连接图 - 使用SVG */}
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* 外围装饰虚线圆 */}
                <circle cx="200" cy="200" r="150" stroke="#94a3b8" strokeWidth="1" strokeDasharray="8 4" className="animate-light-spin" />
                <circle cx="200" cy="200" r="135" stroke="#94a3b8" strokeWidth="1" strokeDasharray="6 4" strokeDashoffset="20" className="animate-light-reverse-spin" />
                
                {/* 连接线 */}
                {/* 顶部紫色线 (病理数据 -> AI算法) */}
                <line x1="200" y1="95" x2="200" y2="170" stroke="#a855f7" strokeWidth="6" />
                
                {/* 右下蓝色线 (组学数据 -> AI算法) */}
                <line x1="320" y1="300" x2="220" y2="200" stroke="#3b82f6" strokeWidth="6" />
                
                {/* 左下青色线 (电子病历 -> AI算法) */}
                <line x1="80" y1="300" x2="180" y2="200" stroke="#06b6d4" strokeWidth="6" />
                
                {/* 数据流动动画 */}
                <circle className="animate-dataflow-vertical" cx="200" cy="120" r="6" fill="#a855f7" stroke="white" strokeWidth="2" />
                <circle className="animate-dataflow-right" cx="270" cy="250" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
                <circle className="animate-dataflow-left" cx="130" cy="250" r="6" fill="#06b6d4" stroke="white" strokeWidth="2" />
              </svg>
              
              {/* AI算法节点 - 中心 */}
              <div className="absolute z-30" style={{ top: "calc(50% - 30px)", left: "calc(50% - 60px)" }}>
                <div className="bg-white shadow-xl rounded-xl p-4 flex items-center space-x-3">
                  <div className="w-14 h-14 bg-primary-600 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div className="text-lg font-medium">AI算法</div>
                </div>
              </div>
              
              {/* 病理数据节点 - 顶部 */}
              <div className="absolute z-20" style={{ top: "20px", left: "calc(50% - 50px)" }}>
                <div className="bg-white shadow-lg rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">病理数据</div>
                  </div>
                </div>
              </div>
              
              {/* 组学数据节点 - 右下 */}
              <div className="absolute z-20" style={{ bottom: "70px", right: "20px" }}>
                <div className="bg-white shadow-lg rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">组学数据</div>
                  </div>
                </div>
              </div>
              
              {/* 电子病历节点 - 左下 */}
              <div className="absolute z-20" style={{ bottom: "70px", left: "20px" }}>
                <div className="bg-white shadow-lg rounded-xl p-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="text-sm font-medium">电子病历</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 