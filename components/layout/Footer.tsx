import Link from "next/link";
import { FiGithub, FiTwitter, FiLinkedin, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "公司",
      links: [
        { name: "关于我们", href: "#about" },
        { name: "研究团队", href: "#team" },
        { name: "加入我们", href: "#careers" },
        { name: "新闻动态", href: "#news" },
      ],
    },
    {
      title: "解决方案",
      links: [
        { name: "病理图像分析", href: "#pathology" },
        { name: "多组学数据整合", href: "#omics" },
        { name: "电子病历挖掘", href: "#emr" },
        { name: "临床决策支持", href: "#clinical" },
      ],
    },
    {
      title: "资源",
      links: [
        { name: "研究成果", href: "#research" },
        { name: "技术博客", href: "#blog" },
        { name: "API文档", href: "#docs" },
        { name: "案例研究", href: "#case-studies" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FiTwitter size={20} />, href: "#", label: "Twitter" },
    { icon: <FiLinkedin size={20} />, href: "#", label: "LinkedIn" },
    { icon: <FiGithub size={20} />, href: "#", label: "GitHub" },
    { icon: <FiFacebook size={20} />, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Link href="/">
              <a className="inline-block mb-6">
                <span className="text-3xl font-bold text-white">百奥码克</span>
              </a>
            </Link>
            <p className="text-gray-300 mb-6 text-lg max-w-md">
              通过先进AI解决方案变革生物医学研究。我们将尖端人工智能技术与生物医学专业知识相结合，加速科学发现和精准医疗的实现。
            </p>
            <p className="text-primary-400 mb-8 text-xl font-bold">
              使用代码攻克生命百种奥秘！
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <FiMapPin className="text-primary-400 mr-3" size={18} />
                <span className="text-gray-300">上海市东安路130号，复旦大学生物医学研究院</span>
              </div>
              <div className="flex items-center">
                <FiMail className="text-primary-400 mr-3" size={18} />
                <span className="text-gray-300">info@baiomaike.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="text-primary-400 mr-3" size={18} />
                <span className="text-gray-300">+86 21 5566 7788</span>
              </div>
            </div>
            
            <div className="flex space-x-5">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-primary-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              {footerLinks.map((section) => (
                <div key={section.title} className="col-span-1">
                  <h3 className="font-semibold text-white text-lg mb-5">{section.title}</h3>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link.name}>
                        <Link href={link.href}>
                          <a className="text-gray-300 hover:text-primary-400 transition-colors">
                            {link.name}
                          </a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} 百奥码克生物科技有限公司。保留所有权利。
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="#privacy">
              <a className="text-gray-400 hover:text-white text-sm">隐私政策</a>
            </Link>
            <Link href="#terms">
              <a className="text-gray-400 hover:text-white text-sm">服务条款</a>
            </Link>
            <Link href="#cookies">
              <a className="text-gray-400 hover:text-white text-sm">Cookie政策</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 