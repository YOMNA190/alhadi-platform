import React from 'react';

const Instructor = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">

          {/* قسم الصورة */}
          <div className="md:w-1/3 text-center">
            <img 
              src="https://via.placeholder.com/300x300.png/2E5BFF/FFFFFF?text=أ.+سلامة+الهادي" 
              alt="الأستاذ سلامة الهادي" 
              className="rounded-full shadow-lg mx-auto w-48 h-48 md:w-64 md:h-64 object-cover"
            />
          </div>

          {/* قسم المحتوى النصي */}
          <div className="md:w-2/3 text-center md:text-right">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">
              عن المحاضر: الأستاذ سلامة الهادي
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              خبير في اللغة العربية للمراحل الإعدادية والثانوية بخبرة تمتد لأكثر من 15 عامًا. رسالتي هي تبسيط قواعد اللغة العربية وجعلها مادة ممتعة ومفهومة للجميع، ومساعدة كل طالب على تحقيق أعلى الدرجات بثقة وتميز.
            </p>
            
            {/* قسم الإنجازات */}
            <div className="flex justify-center md:justify-start space-x-6 space-x-reverse mb-6">
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">+15</span>
                <span className="text-gray-500">سنة خبرة</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">+5000</span>
                <span className="text-gray-500">طالب</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-bold text-blue-600">+20</span>
                <span className="text-gray-500">كورس</span>
              </div>
            </div>

            <a href="#courses" className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 inline-block">
              تصفح جميع الكورسات
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Instructor;