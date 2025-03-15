import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "首页", href: "/" },
    { name: "解决方案", href: "#solutions" },
    { name: "功能", href: "#features" },
    { name: "关于我们", href: "#about" },
    { name: "联系我们", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center">
              <span className={`text-2xl font-bold ${isScrolled ? "text-primary-600" : "text-primary-600"}`}>
                百奥码克
              </span>
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className={`text-lg font-medium transition-colors ${
                    isScrolled
                      ? "text-gray-700 hover:text-primary-600"
                      : "text-gray-800 hover:text-primary-600"
                  }`}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href}>
                <a
                  className="text-lg font-medium text-gray-700 hover:text-primary-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 