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
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* 主图像 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[80%] h-[80%]">
                  {/* 删除AI医疗技术图片 */}
                </div>
              </div>
              
              {/* 装饰环 */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[90%] h-[90%] rounded-full border-2 border-dashed border-primary-300/50 animate-spin-slow"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[70%] h-[70%] rounded-full border border-accent-300/30 animate-reverse-spin-slow"></div>
              </div>
              
              {/* 数据连接图 - 全新设计 */}
              <div className="absolute inset-0">
                {/* 中心AI节点 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <motion.div 
                    className="tech-card p-4 shadow-lg"
                    animate={{ boxShadow: ["0 0 20px rgba(99, 102, 241, 0.3)", "0 0 30px rgba(99, 102, 241, 0.5)", "0 0 20px rgba(99, 102, 241, 0.3)"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-base font-medium">AI算法</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 组学数据节点 */}
                <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div 
                    className="tech-card p-3"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium">组学数据</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 病理数据节点 */}
                <div className="absolute top-[65%] right-[10%] z-20">
                  <motion.div 
                    className="tech-card p-3"
                    animate={{ x: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium">病理数据</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 电子病历节点 */}
                <div className="absolute top-[65%] left-[10%] z-20">
                  <motion.div 
                    className="tech-card p-3"
                    animate={{ x: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    <div className="flex items-center space-x-2">
                      <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <div className="text-sm font-medium">电子病历</div>
                    </div>
                  </motion.div>
                </div>
                
                {/* 连接线和数据流 */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="blue-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="purple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
                    </linearGradient>
                    <linearGradient id="cyan-gradient" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="1" />
                    </linearGradient>
                    
                    <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feFlood floodColor="#3b82f6" floodOpacity="0.5" result="color"/>
                      <feComposite in="color" in2="blur" operator="in" result="glow"/>
                      <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                    </filter>
                    <filter id="glow-purple" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feFlood floodColor="#8b5cf6" floodOpacity="0.5" result="color"/>
                      <feComposite in="color" in2="blur" operator="in" result="glow"/>
                      <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                    </filter>
                    <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feFlood floodColor="#06b6d4" floodOpacity="0.5" result="color"/>
                      <feComposite in="color" in2="blur" operator="in" result="glow"/>
                      <feComposite in="SourceGraphic" in2="glow" operator="over"/>
                    </filter>
                  </defs>
                  
                  {/* 中心到组学数据的连接 - 实线 */}
                  <path 
                    d="M200,200 C200,150 200,100 200,50" 
                    fill="none"
                    stroke="url(#blue-gradient)"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                  
                  {/* 中心到病理数据的连接 - 实线 */}
                  <path 
                    d="M200,200 C240,220 280,240 320,260" 
                    fill="none"
                    stroke="url(#purple-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* 中心到电子病历的连接 - 实线 */}
                  <path 
                    d="M200,200 C160,220 120,240 80,260" 
                    fill="none"
                    stroke="url(#cyan-gradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  
                  {/* 发光效果叠加层 */}
                  <path 
                    d="M200,200 C200,150 200,100 200,50" 
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                    strokeLinecap="round"
                    filter="url(#glow-blue)"
                    opacity="1"
                  />
                  
                  {/* 额外的上方连接线 - 确保可见性 */}
                  <line 
                    x1="200" y1="200" 
                    x2="200" y2="50" 
                    stroke="#3b82f6" 
                    strokeWidth="4"
                    strokeLinecap="round"
                    opacity="0.8"
                  />
                  
                  <path 
                    d="M200,200 C240,220 280,240 320,260" 
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow-purple)"
                    opacity="0.8"
                  />
                  
                  <path 
                    d="M200,200 C160,220 120,240 80,260" 
                    fill="none"
                    stroke="#06b6d4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    filter="url(#glow-cyan)"
                    opacity="0.8"
                  />
                  
                  {/* 数据流动效果 */}
                  <motion.circle 
                    cx="200" cy="200" r="5" 
                    fill="#3b82f6"
                    animate={{
                      cy: [200, 50],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                    filter="url(#glow-blue)"
                  />
                  
                  <motion.circle 
                    cx="200" cy="200" r="5" 
                    fill="#8b5cf6"
                    animate={{
                      cx: [200, 320],
                      cy: [200, 260],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                      times: [0, 0.5, 1]
                    }}
                    filter="url(#glow-purple)"
                  />
                  
                  <motion.circle 
                    cx="200" cy="200" r="5" 
                    fill="#06b6d4"
                    animate={{
                      cx: [200, 80],
                      cy: [200, 260],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                      times: [0, 0.5, 1]
                    }}
                    filter="url(#glow-cyan)"
                  />
                </svg>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 