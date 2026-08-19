import type { CatalogProduct } from "@/types";

export const products: CatalogProduct[] = [
  {
    id: "p1",
    nameAr: "كيماويات",
    nameEn: "Chemicals",
    family: "mego",
    notes: "تخصص مجموعة الإنتاج حسب الموقع",
    reuse: "حسب الاستخدام التشغيلي",
    sourceUrl: "https://ica-jo.com/",
    contentStatus: "published",
  },
  {
    id: "p2",
    nameAr: "عناية شخصية",
    nameEn: "Personal care",
    family: "mego",
    notes: "معلن كمجال رئيسي",
    reuse: "حسب الاستخدام التشغيلي",
    sourceUrl: "https://ica-jo.com/",
    contentStatus: "published",
  }
];
