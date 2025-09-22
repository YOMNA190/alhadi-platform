import React from 'react';

// سنقوم بإنشاء مكون منفصل للبطاقة لاحقاً لسهولة الاستخدام
const CourseCard = ({ title, instructor, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">الأستاذ: {instructor}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-blue-600">{price}</span>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300">
            عرض التفاصيل
          </button>
        </div>
      </div>
    </div>
  );
};

const CourseList = () => {
  // بيانات مؤقتة لعرضها
  const courses = [
    {
      id: 1,
      title: 'أساسيات النحو للمرحلة الإعدادية',
      instructor: 'سلامة الهادي',
      price: '١٥٠ ج.م',
      imageUrl: 'https://via.placeholder.com/400x225.png/2E5BFF/FFFFFF?text=لغة+عربية'
    },
    {
      id: 2,
      title: 'البلاغة المتقدمة للثانوية العامة',
      instructor: 'سلامة الهادي',
      price: '٢٥٠ ج.م',
      imageUrl: 'https://via.placeholder.com/400x225.png/1E40AF/FFFFFF?text=بلاغة'
    },
    {
      id: 3,
      title: 'مراجعة ليلة الامتحان في النصوص',
      instructor: 'سلامة الهادي',
      price: '١٠٠ ج.م',
      imageUrl: 'https://via.placeholder.com/400x225.png/6B7280/FFFFFF?text=نصوص'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          أحدث الكورسات المتاحة
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              instructor={course.instructor}
              price={course.price}
              imageUrl={course.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;