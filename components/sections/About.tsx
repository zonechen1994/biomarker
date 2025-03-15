import { motion } from "framer-motion";
import { useRef } from "react";
import { FiCheck } from "react-icons/fi";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, isInView] = useInView({ 
    triggerOnce: true,
    rootMargin: "-100px"
  });

  const achievements = [
    "病理AI诊断准确率达到96.8%，超过人类专家平均水平",
    "基因组数据分析速度提升85倍，从数天缩短至数小时",
    "电子病历信息提取准确率达92.5%，大幅减少人工整理时间",
    "多组学数据整合分析发现了15个新的生物标志物",
    "已服务超过300家医疗机构和研究中心，分析500万+病理切片",
  ];

  return (
    <section id="about" className="section py-24 md:py-36 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gray-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-30"></div>
        <div className="absolute top-1/3 right-0 bg-gradient-radial from-accent-400/10 to-transparent w-[600px] h-[600px] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 bg-gradient-radial from-primary-400/10 to-transparent w-[600px] h-[600px] rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
              <span className="text-sm font-medium">关于我们</span>
            </div>
            <h2 className="heading-lg mb-8">
              通过<span className="gradient-text">人工智能</span>变革生物医学研究
            </h2>
            <p className="text-muted text-lg mb-8">
              百奥码克由生物医学专家和AI研究人员共同创立，致力于通过尖端人工智能技术加速生物医学研究和临床应用。我们相信，AI技术能够解锁隐藏在海量生物医学数据中的关键洞察。
            </p>
            <p className="text-muted text-lg mb-10">
              我们的跨学科团队结合了深度学习、计算病理学、基因组学和生物信息学方面的专业知识，创造出不仅技术先进，而且适用于实际研究和临床环境的解决方案。
            </p>
            <p className="gradient-text text-xl mb-10 font-bold">
              使用代码攻克生命百种奥秘！
            </p>

            <div className="space-y-4 mb-10">
              {achievements.map((achievement, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="flex items-start tech-card p-4 border-l-4 border-primary-500"
                >
                  <div className="flex-shrink-0 w-6 h-6 gradient-bg rounded-full flex items-center justify-center text-white mr-3 mt-0.5">
                    <FiCheck size={14} />
                  </div>
                  <p className="text-lg">{achievement}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* 科技感视觉元素 */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden flex items-center justify-center shadow-xl">
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-0 left-0 w-full h-full" style={{ 
                    backgroundImage: "radial-gradient(circle at 20px 20px, rgba(0,0,0,0.05) 2px, transparent 0)",
                    backgroundSize: "40px 40px"
                  }}></div>
                </div>
                
                <div className="text-center p-10 relative z-10">
                  <div className="w-20 h-20 mx-auto gradient-bg rounded-full flex items-center justify-center mb-6 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold mb-6 gradient-text">我们的愿景</h3>
                  <p className="max-w-md mx-auto text-muted text-lg">
                    打造一个AI赋能的生物医学研究生态系统，使研究人员和医疗专业人员能够更快速、更准确地从复杂的生物医学数据中获取洞察，加速科学发现和精准医疗的实现。
                  </p>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute top-6 right-6 w-12 h-12 border-2 border-primary-300 rounded-lg rotate-45 animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-2 border-accent-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
              
              {/* 浮动装饰元素 */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-xl -z-10 animate-float" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-xl -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
              
              {/* 科技感连接线 */}
              <div className="absolute top-1/4 -right-4 w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold">AI</span>
              </div>
              <div className="absolute bottom-1/4 -left-4 w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-white">
                <span className="text-xs font-bold">ML</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 