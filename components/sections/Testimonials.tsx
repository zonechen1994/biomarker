import Image from "next/image";

const testimonials = [
  {
    content: "百奥码克的AI诊断系统帮助我们将诊断时间缩短了40%，同时提高了准确率。这是医疗领域的一场革命。",
    author: "张教授",
    title: "北京协和医院 放射科主任",
  },
  {
    content: "我们医院使用百奥码克的解决方案已有一年多，它极大地提高了我们的工作效率，让我们能够更好地关注患者护理。",
    author: "李医生",
    title: "上海瑞金医院 心脏科专家",
  },
  {
    content: "作为一家专注于精准医疗的机构，我们发现百奥码克的AI工具在识别复杂模式方面表现出色，帮助我们提供更个性化的治疗方案。",
    author: "王研究员",
    title: "中国医学科学院 研究主管",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            客户评价
          </h2>
          <p className="text-lg text-gray-600">
            了解百奥码克如何帮助医疗机构提升诊断准确率、优化工作流程并改善患者护理
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 bg-primary-600 flex items-center justify-center text-white font-bold">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2">
            <span className="text-primary-600 font-medium">与我们合作的医疗机构</span>
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-gray-500 font-medium">北京协和医院</span>
              <span className="text-gray-500 font-medium">上海瑞金医院</span>
              <span className="text-gray-500 font-medium">中国医学科学院</span>
              <span className="text-gray-500 font-medium">浙江大学医学院</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 