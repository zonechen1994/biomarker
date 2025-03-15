import { motion } from "framer-motion";
import { useState } from "react";
import { FiImage, FiDatabase, FiFileText, FiLayers, FiShield, FiTrendingUp } from "react-icons/fi";
import Link from "next/link";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  const features = [
    {
      id: 0,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
      title: "病理图像分析",
      description: "利用深度学习技术自动分析病理切片，识别异常细胞和组织结构，提高诊断准确率和效率。",
      details: [
        "支持H&E、IHC等多种染色方法",
        "细胞核分割与计数",
        "肿瘤区域识别与分级",
        "与现有LIS/PACS系统集成"
      ]
    },
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "多组学数据整合",
      description: "整合基因组学、转录组学、蛋白组学等多维数据，发现生物标志物和治疗靶点。",
      details: [
        "单细胞测序数据分析",
        "基因表达谱聚类与可视化",
        "生物标志物筛选与验证",
        "药物靶点预测"
      ]
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "临床决策支持",
      description: "基于患者电子病历和医学知识库，提供个性化治疗方案建议和预后预测。",
      details: [
        "疾病风险评估",
        "治疗方案推荐",
        "药物相互作用检测",
        "预后预测与随访管理"
      ]
    }
  ];

  // 动画变体
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 md:py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-primary-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* 科技感线条 */}
        <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-300/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-300/30 to-transparent"></div>
        
        {/* 装饰元素 */}
        <div className="absolute top-20 left-20 w-8 h-8 border border-primary-300/50 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border border-accent-300/50 rounded-full animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
            <span className="text-sm font-medium">核心功能</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            AI驱动的生物医学解决方案
          </h2>
          <p className="text-lg text-gray-600">
            我们的人工智能平台提供全面的生物医学数据分析能力，从病理图像到多组学数据，再到临床决策支持
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* 功能选择器 */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 space-y-6"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                onClick={() => setActiveFeature(feature.id)}
                className={`tech-card p-6 cursor-pointer transition-all duration-300 ${
                  activeFeature === feature.id 
                    ? "border-l-4 border-primary-500 shadow-glow" 
                    : "hover:translate-x-2"
                }`}
              >
                <div className="flex items-start">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    activeFeature === feature.id 
                      ? "gradient-bg text-white" 
                      : "bg-gray-100 text-gray-500"
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-medium mb-1 ${
                      activeFeature === feature.id 
                        ? "gradient-text" 
                        : "text-gray-900"
                    }`}>
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* 功能详情 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            key={activeFeature}
            className="lg:col-span-8"
          >
            <div className="tech-card p-8 border-t-4 border-primary-500 h-full">
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 gradient-bg rounded-lg flex items-center justify-center text-white mr-4">
                  {features[activeFeature].icon}
                </div>
                <h3 className="text-2xl font-bold gradient-text">
                  {features[activeFeature].title}
                </h3>
              </div>
              
              <p className="text-gray-600 mb-8 text-lg">
                {features[activeFeature].description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <div className="tech-card glow h-full p-6 border-l-2 border-primary-500">
                    <h4 className="text-lg font-medium gradient-text mb-4">核心功能</h4>
                    <ul className="space-y-3">
                      {features[activeFeature].details.map((detail, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 w-5 h-5 gradient-bg rounded-full flex items-center justify-center text-white mr-3 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="tech-card h-full overflow-hidden">
                    {/* 技术可视化 */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {activeFeature === 0 && (
                          <div className="w-full h-full p-6 flex items-center justify-center">
                            <div className="relative w-full h-full max-w-[300px] max-h-[300px] mx-auto">
                              {/* 病理图像分析可视化 */}
                              <div className="absolute inset-0 rounded-lg overflow-hidden border border-gray-200">
                                <div className="w-full h-full bg-white">
                                  <div className="grid grid-cols-4 grid-rows-4 gap-0.5 w-full h-full p-2">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                      <motion.div 
                                        key={i}
                                        className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-sm"
                                        initial={{ opacity: 0 }}
                                        animate={{ 
                                          opacity: [0.3, 0.7, 0.3],
                                          scale: [1, 1.05, 1]
                                        }}
                                        transition={{ 
                                          duration: 3, 
                                          repeat: Infinity, 
                                          delay: i * 0.2,
                                          ease: "easeInOut"
                                        }}
                                      />
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              {/* 分析框 */}
                              <motion.div 
                                className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border-2 border-accent-500 rounded-md pointer-events-none"
                                animate={{ 
                                  scale: [1, 1.1, 1],
                                  borderColor: ["#6366f1", "#ec4899", "#6366f1"]
                                }}
                                transition={{ duration: 4, repeat: Infinity }}
                              />
                              
                              {/* 数据点 */}
                              <motion.div 
                                className="absolute top-[30%] left-[30%] w-3 h-3 bg-primary-500 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <motion.div 
                                className="absolute top-[60%] left-[60%] w-3 h-3 bg-accent-500 rounded-full"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              />
                            </div>
                          </div>
                        )}
                        
                        {activeFeature === 1 && (
                          <div className="w-full h-full p-6 flex items-center justify-center">
                            <div className="relative w-full h-full max-w-[300px] max-h-[300px] mx-auto">
                              {/* 多组学数据可视化 */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                {/* 热图背景 */}
                                <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-0.5 p-2">
                                  {Array.from({ length: 64 }).map((_, i) => {
                                    const intensity = Math.random();
                                    let bgColor;
                                    if (intensity < 0.3) bgColor = "bg-blue-100";
                                    else if (intensity < 0.6) bgColor = "bg-blue-300";
                                    else if (intensity < 0.8) bgColor = "bg-primary-400";
                                    else bgColor = "bg-primary-600";
                                    
                                    return (
                                      <div 
                                        key={i}
                                        className={`${bgColor} rounded-sm`}
                                      />
                                    );
                                  })}
                                </div>
                                
                                {/* 连接线 */}
                                <div className="absolute inset-0">
                                  <svg className="w-full h-full" viewBox="0 0 100 100">
                                    <motion.path 
                                      d="M20,20 C40,20 40,80 60,80 L80,80" 
                                      stroke="rgba(99, 102, 241, 0.5)" 
                                      strokeWidth="1" 
                                      fill="none"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                                    />
                                    <motion.path 
                                      d="M20,50 C30,50 30,30 50,30 L80,30" 
                                      stroke="rgba(236, 72, 153, 0.5)" 
                                      strokeWidth="1" 
                                      fill="none"
                                      initial={{ pathLength: 0 }}
                                      animate={{ pathLength: 1 }}
                                      transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        
                        {activeFeature === 2 && (
                          <div className="w-full h-full p-6 flex items-center justify-center">
                            <div className="relative w-full h-full max-w-[300px] max-h-[300px] mx-auto">
                              {/* 临床决策支持可视化 */}
                              <div className="absolute inset-0 flex flex-col items-center justify-center">
                                {/* 患者数据 */}
                                <div className="w-full tech-card p-3 mb-4 border-l-2 border-primary-500">
                                  <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                                    <div>
                                      <div className="h-2.5 w-24 bg-gray-200 rounded mb-1.5"></div>
                                      <div className="h-2 w-16 bg-gray-100 rounded"></div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* 处理指示器 */}
                                <div className="w-full flex justify-center mb-4">
                                  <motion.div 
                                    className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center"
                                    animate={{ 
                                      scale: [1, 1.1, 1],
                                      rotate: [0, 180, 360]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                  >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                  </motion.div>
                                </div>
                                
                                {/* 结果 */}
                                <div className="w-full space-y-2">
                                  <motion.div 
                                    className="tech-card p-2 border-l-2 border-accent-500"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                  >
                                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                                  </motion.div>
                                  <motion.div 
                                    className="tech-card p-2 border-l-2 border-primary-500"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                  >
                                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                                  </motion.div>
                                  <motion.div 
                                    className="tech-card p-2 border-l-2 border-green-500"
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.9 }}
                                  >
                                    <div className="h-2 w-full bg-gray-100 rounded"></div>
                                  </motion.div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
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

export default Features; 