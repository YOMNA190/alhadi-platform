import React from 'react';
import { Link } from 'react-router-dom'; // 1. استيراد مكون Link

const Header = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* الشعار */}
        <div className="text-2xl font-bold text-blue-600">
          <Link to="/">أكاديمية الهادي</Link> {/* استخدام Link للرئيسية */}
        </div>

        {/* قائمة التنقل */}
        <nav className="hidden md:flex space-x-8 space-x-reverse items-center">
          <Link to="/" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            الرئيسية
          </Link>
          <Link to="/courses" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            الكورسات
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            عن المحاضر
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 transition-colors duration-300">
            تواصل معنا
          </Link>
        </nav>

        {/* زر الدخول */}
        <div className="hidden md:block">
          <a href="#" className="bg-blue-500 text-white font-bold py-2 px-5 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            تسجيل الدخول
          </a>
        </div>

        {/* قائمة الموبايل (Burger Menu) - لاحقاً */}
        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;