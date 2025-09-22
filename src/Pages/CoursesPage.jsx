import React from 'react';
import { coursesData } from '../data/courses';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    return (
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
        <div className="relative">
          <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover" />
          <div className="absolute top-0 right-0 bg-blue-900 text-white text-xs font-bold px-3 py-1 m-2 rounded-md bg-opacity-70">{course.stage}</div>
        </div>
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 h-14">{course.title}</h3>
          <p className="text-sm text-gray-600 mb-4">مع الأستاذ: {course.instructor}</p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-extrabold text-blue-900">{course.price} ج.م</span>
            {/* هذا هو السطر الذي تم تصحيحه */}
            <Link to={/courses/${course.id}} className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300">
              التفاصيل
            </Link>
          </div>
        </div>
      </div>
    );
  };

const CoursesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">جميع الكورسات المتاحة</h1>
          <p className="text-gray-600 mt-2">اختر الكورس الذي يناسبك وابدأ التعلم الآن.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {coursesData.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;