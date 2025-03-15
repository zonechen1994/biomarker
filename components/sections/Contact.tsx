import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟API调用
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-36 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-white"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-tech-grid opacity-30"></div>
        <div className="absolute top-1/4 right-0 bg-gradient-radial from-primary-400/10 to-transparent w-[600px] h-[600px] rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 bg-gradient-radial from-accent-400/10 to-transparent w-[600px] h-[600px] rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-primary-50 border border-primary-200 text-primary-700 mb-6">
            <span className="text-sm font-medium">联系我们</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-6">
            联系我们
          </h2>
          <p className="text-lg text-gray-600">
            如果您对我们的AI解决方案有任何疑问，或者想了解更多关于百奥码克如何帮助您的研究和临床工作，请随时联系我们
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="tech-card p-8 border-t-4 border-primary-500">
              <h3 className="text-2xl font-bold gradient-text mb-8">联系方式</h3>
              
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 tech-icon rounded-lg flex items-center justify-center text-white mr-4">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">公司地址</h4>
                    <p className="text-gray-600">上海市东安路130号</p>
                    <p className="text-gray-600">复旦大学生物医学研究院</p>
                    <p className="text-gray-600">200032</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 tech-icon rounded-lg flex items-center justify-center text-white mr-4">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">电子邮件</h4>
                    <p className="text-gray-600">info@baiomaike.com</p>
                    <p className="text-gray-600">support@baiomaike.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 tech-icon rounded-lg flex items-center justify-center text-white mr-4">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">电话</h4>
                    <p className="text-gray-600">+86 21 5566 7788</p>
                    <p className="text-gray-600">+86 400 888 9999</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 w-12 h-12 tech-icon rounded-lg flex items-center justify-center text-white mr-4">
                    <FiClock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-1">工作时间</h4>
                    <p className="text-gray-600">周一至周五: 9:00 - 18:00</p>
                    <p className="text-gray-600">周六周日: 休息</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <div className="tech-card h-96 md:h-[500px] overflow-hidden relative">
              {/* 科技感地图背景 */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="absolute inset-0" style={{ 
                  backgroundImage: `
                    linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
                  `,
                  backgroundSize: '20px 20px'
                }}></div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] rounded-full border border-primary-200 animate-pulse-slow opacity-30"></div>
                  <div className="absolute w-[60%] h-[60%] rounded-full border border-accent-200 animate-pulse-slow opacity-30" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute w-[40%] h-[40%] rounded-full border border-primary-200 animate-pulse-slow opacity-30" style={{ animationDelay: '2s' }}></div>
                </div>
                
                {/* 地图标记 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center text-white animate-pulse-slow">
                      <FiMapPin size={24} />
                    </div>
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full gradient-bg opacity-50 animate-ping"></div>
                  </div>
                  
                  <div className="mt-4 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-lg text-center">
                    <h3 className="text-xl font-bold mb-2 gradient-text">百奥码克总部</h3>
                    <p className="text-gray-600 mb-4">上海市东安路130号</p>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <a href="https://map.baidu.com/poi/%E5%A4%8D%E6%97%A6%E5%A4%A7%E5%AD%A6(%E6%9E%AB%E6%9E%97%E6%A0%A1%E5%8C%BA)/@13520680.12394895,3636815.5156813003,18z?uid=6d9aeace3bba5626ca2915f5&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&pcevaname=pc4.1&querytype=detailConInfo&da_src=shareurl" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-4 py-2 gradient-bg rounded-md text-white text-sm font-medium shadow-md">
                        查看完整地图
                      </a>
                    </motion.div>
                  </div>
                </div>
                
                {/* 装饰元素 */}
                <div className="absolute top-10 left-10 w-6 h-6 gradient-bg rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 gradient-bg rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 