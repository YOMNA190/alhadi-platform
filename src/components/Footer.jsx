import React from 'react';
import { Link } from 'react-router-dom';
// 1. استيراد الأيقونات من المكتبة الرئيسية مباشرة
import { FaFacebook, FaYoutube, FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          
          {/* قسم الشعار */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">أكاديمية الهادي</h2>
            <p className="text-gray-400 mt-2">بوابتك لإتقان اللغة العربية.</p>
          </div>

          {/* قسم الروابط */}
          <div>
            <h3 className="text-lg font-semibold mb-4">روابط مهمة</h3>
            <ul className="space-y-2">
              <li><Link to="/courses" className="hover:text-blue-400 transition-colors">جميع الكورسات</Link></li>
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">عن المحاضر</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">تواصل معنا</Link></li>
            </ul>
          </div>

          {/* قسم التواصل */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
            <div className="flex justify-center md:justify-end space-x-5 space-x-reverse">
              {/* 2. استخدام الأيقونات الصحيحة */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaFacebook />
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaYoutube />
              </a>
              <a href="#" aria-label="Telegram" className="text-gray-400 hover:text-white text-2xl transition-colors">
                <FaTelegram />
              </a>
            </div>
          </div>

        </div>
        
        {/* حقوق النشر */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} أكاديمية الهادي. جميع الحقوق محفوظة.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;