import type { Bottleneck } from "@/types";

export const bottlenecks: Bottleneck[] = [
  {
    id: "b1",
    title: "الموقع لا يحوّل الزيارة طلباً",
    department: "marketing",
    description: "ica-jo.com — الموقع عربي مختصر وأخبار هيئة عامة. الكتالوج التفصيلي غير ظاهر للزائر.",
    signalToInvestigate: "من يرد على النموذج/الهاتف خلال ساعة؟",
  },
  {
    id: "b2",
    title: "مدير المبيعات هو النظام",
    department: "sales",
    description: "الطلب يصل واتساباً أو مكالمة. لا طابور ظاهر ولا بطاقة متابعة. أي غياب شخصي يوقف الصفقة.",
    signalToInvestigate: "كم رسالة يومياً تُنسى بعد الدوام؟",
  },
  {
    id: "b3",
    title: "الكتالوج غير مربوط بمسار تسعير",
    department: "marketing",
    description: "مجال معلن: كيماويات وعناية شخصية. التفاصيل الرقيقة لا تُختلق — المصدر أو الاعتذار.",
    signalToInvestigate: "هل توجد نشرة داخلية لكل خط؟",
  },
  {
    id: "b4",
    title: "السعر والعرض يبقيان بشريين — وهذا صحيح — لكن بلا مسار",
    department: "quality",
    description: "طلب موزّع عناية شخصية يُلتقط من واتساب ويُسعَّر باعتماد بشري",
    signalToInvestigate: "من يعتمد العرض النهائي اليوم؟ كم يستغرق؟",
  },
  {
    id: "b5",
    title: "لا مسار ظاهر لـ «موزّعو العناية»",
    department: "schools",
    description: "الموزّع يريد تشكيلة شامبو ومنظّف اليوم. المنصة ترتّب الطلب وأنت تعتمد السعر الموقع الحالي لا يُظهر هذا المسار كطابور.",
    signalToInvestigate: "أين تُحفظ طلبات هذا الأسبوع؟",
  },
];
