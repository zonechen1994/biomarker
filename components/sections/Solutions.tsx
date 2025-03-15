import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const Solutions = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const solutions = [
    {
      id: 0,
      title: "病理AI助手",
      description: "利用深度学习技术自动分析数字病理切片，识别异常细胞和组织结构，提高诊断准确率和效率。",
      features: [
        "自动识别和分类细胞形态",
        "肿瘤区域精确定位与分级",
        "免疫组化染色定量分析",
        "与现有LIS/PACS系统无缝集成"
      ],
      image: "/images/pathology-ai.jpg",
      stats: [
        { label: "诊断准确率", value: "96%" },
        { label: "分析速度提升", value: "85×" },
        { label: "工作效率提升", value: "60%" }
      ]
    },
    {
      id: 1,
      title: "基因组分析平台",
      description: "整合多组学数据分析工具，快速处理基因组、转录组和蛋白组数据，发现生物标志物和疾病机制。",
      features: [
        "高通量测序数据处理与分析",
        "变异检测与注释",
        "基因表达谱分析与可视化",
        "多组学数据整合与解读"
      ],
      image: "/images/genomics-platform.jpg",
      stats: [
        { label: "数据处理速度", value: "120×" },
        { label: "变异检出率", value: "99.8%" },
        { label: "研究周期缩短", value: "75%" }
      ]
    },
    {
      id: 2,
      title: "临床决策支持系统",
      description: "基于患者电子病历和医学知识库，提供个性化治疗方案建议和预后预测，辅助医生做出更精准的临床决策。",
      features: [
        "患者风险分层与预测",
        "个性化治疗方案推荐",
        "药物相互作用检测",
        "疾病进展监测与预警"
      ],
      image: "/images/clinical-decision.jpg",
      stats: [
        { label: "治疗方案优化", value: "45%" },
        { label: "不良反应减少", value: "38%" },
        { label: "住院时间缩短", value: "28%" }
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
    <section id="solutions" className="py-24 md:py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-primary-400/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-accent-400/10 to-transparent rounded-full blur-3xl"></div>
        
        {/* 科技感线条 */}
        <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-primary-300/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-300/30 to-transparent"></div>
        
        {/* 装饰元素 */}
        <div className="absolute top-40 right-20 w-10 h-10 border border-primary-300/50 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-14 h-14 border border-accent-300/50 rounded-full animate-pulse-slow" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
            <span className="text-sm font-medium">AI解决方案</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            为生物医学研究与临床应用提供AI动力
          </h2>
          <p className="text-lg text-gray-600">
            我们的AI解决方案覆盖从基础研究到临床应用的全流程，帮助科研人员和医疗专业人士更高效地工作
          </p>
        </motion.div>

        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {solutions.map((solution) => (
              <motion.button
                key={solution.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(solution.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === solution.id 
                    ? "gradient-bg text-white shadow-glow" 
                    : "bg-white text-gray-700 border border-gray-200 hover:border-primary-300"
                }`}
              >
                {solution.title}
              </motion.button>
            ))}
          </div>
          
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="tech-card p-0 overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
                    {solutions[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-8">
                    {solutions[activeTab].description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">主要功能</h4>
                    <ul className="space-y-3">
                      {solutions[activeTab].features.map((feature, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start"
                        >
                          <div className="flex-shrink-0 w-5 h-5 gradient-bg rounded-full flex items-center justify-center text-white mr-3 mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4">
                  {solutions[activeTab].stats.map((stat, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="tech-card p-4 text-center"
                    >
                      <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <Link href="/contact">
                    <a className="inline-flex items-center px-6 py-3 rounded-lg gradient-bg text-white font-medium shadow-glow transition-all duration-300 hover:shadow-glow-lg">
                      预约产品演示
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </Link>
                </motion.div>
              </div>
              
              <div className="relative h-[300px] lg:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 to-accent-900/90"></div>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      {solutions[activeTab].title}
                    </h3>
                    <p className="text-white/80 text-lg mb-6">
                      {solutions[activeTab].description}
                    </p>
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

export default Solutions; 