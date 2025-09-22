import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        
        {/* العنوان الرئيسي */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
          أكاديمية <span className="text-blue-700">الهادي</span>
        </h1>
        
        {/* الوصف */}
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          منصة تعليم اللغة العربية الأولى للمراحل الإعدادية والثانوية. 
          ادرس مع <span className="font-semibold text-blue-700">الأستاذ سلامة الهادي</span> 
          واختصر على نفسك طريق النجاح.
        </p>
        
        {/* الأزرار */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-medium text-lg transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            ابدأ رحلتك التعليمية الآن
          </button>
          <button className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-xl font-medium text-lg transition duration-300">
            <span className="flex items-center justify-center">
              شاهد عينة مجانية
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* إحصائيات */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">+500</div>
            <div className="text-gray-600">طالب مسجل</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">+30</div>
            <div className="text-gray-600">كورس متاح</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">98%</div>
            <div className="text-gray-600">نسبة النجاح</div>
          </div>
        </div>
        
      </div>
      
      {/* عنصر زخرفي */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/50"></div>
    </section>
  );
};

export default Hero;