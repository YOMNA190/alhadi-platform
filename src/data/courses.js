// هذا الملف هو "مصدر الحقيقة" الوحيد لبيانات الكورسات في المشروع.
// أي تعديل أو إضافة تتم هنا فقط.

export const coursesData = [
  {
    id: 'c1', // استخدام معرفات نصية فريدة أفضل للمستقبل
    title: 'النحو الشامل للمرحلة الثانوية',
    instructor: 'سلامة الهادي',
    price: 250, // استخدام أرقام للسعر أفضل للمعالجة لاحقاً
    imageUrl: 'https://via.placeholder.com/400x225/0052CC/FFFFFF?text=النحو',
    category: 'النحو',
    stage: 'الثانوية',
    isFeatured: true, // علامة لتمييز الكورسات في الصفحة الرئيسية
    description: 'كورس شامل يغطي جميع قواعد النحو للمرحلة الثانوية بأسلوب مبسط وتطبيقات عملية من الامتحانات السابقة.'
  },
  {
    id: 'c2',
    title: 'أسرار البلاغة والتعبير',
    instructor: 'سلامة الهادي',
    price: 220,
    imageUrl: 'https://via.placeholder.com/400x225/00875A/FFFFFF?text=البلاغة',
    category: 'البلاغة',
    stage: 'الثانوية',
    isFeatured: true,
    description: 'تعمق في فنون البلاغة من تشبيه واستعارة وكناية، وتعلم كيفية كتابة موضوعات تعبير إبداعية.'
  },
  {
    id: 'c3',
    title: 'أساسيات اللغة العربية للإعدادي',
    instructor: 'سلامة الهادي',
    price: 150,
    imageUrl: 'https://via.placeholder.com/400x225/172B4D/FFFFFF?text=أساسيات',
    category: 'شامل',
    stage: 'الإعدادية',
    isFeatured: true,
    description: 'كورس تأسيسي يغطي أهم فروع اللغة العربية للمرحلة الإعدادية، لبناء قاعدة قوية للطالب.'
  },
  {
    id: 'c4',
    title: 'مراجعة ليلة الامتحان: نصوص وقراءة',
    instructor: 'سلامة الهادي',
    price: 100,
    imageUrl: 'https://via.placeholder.com/400x225/5E6C84/FFFFFF?text=مراجعة',
    category: 'مراجعات',
    stage: 'الثانوية',
    isFeatured: false, // هذا الكورس لن يظهر في القسم المميز بالصفحة الرئيسية
    description: 'مراجعة مركزة وسريعة لأهم النصوص المقررة ومنهجية الإجابة على أسئلة القراءة المتحررة.'
  }
];