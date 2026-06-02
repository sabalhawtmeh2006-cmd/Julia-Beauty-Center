export interface Service {
  name: string;
  price?: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  services: Service[];
  type?: 'list' | 'table';
  tableCols?: string[];
  tableData?: string[][];
}

export const departments: Department[] = [
  {
    id: "1",
    name: "جلسات البشرة",
    slug: "skin",
    icon: "Sparkles",
    type: "list",
    services: [
      { name: "هيدروفاشل" },
      { name: "ديرمابن" },
      { name: "ديرمابن مع بلازما" },
      { name: "ديرمابن مع ميزوثيرابي" },
      { name: "PRX-T33" },
      { name: "تقشير الميلادين" },
      { name: "تقشير الطحالب للوجه" },
      { name: "تقشير الطحالب للجسم" },
      { name: "تقشير TCA" },
      { name: "توريد الشفايف" },
      { name: "ميزو الشعر" },
      { name: "فيلر تحت العين" },
      { name: "بوتوكس" },
    ]
  },
  {
    id: "2",
    name: "التجميل الإجرائي",
    slug: "filler-botox",
    icon: "Syringe",
    type: "list",
    services: [
      { name: "فيلر الشفايف" },
      { name: "فيلر الخدود" },
      { name: "فيلر تحت العين" },
      { name: "بوتوكس الجبهة" },
      { name: "بوتوكس الخطوط" },
      { name: "بوتوكس التعرق" },
      { name: "خيوط الشد" },
      { name: "حقن البلازما" },
    ]
  },
  {
    id: "3",
    name: "إبر النضارة",
    slug: "mesotherapy",
    icon: "Droplet",
    type: "list",
    services: [
      { name: "إبر النضارة للوجه" },
      { name: "إبر النضارة للشعر" },
      { name: "إبر الميزوثيرابي للجسم" },
      { name: "كوكتيل النضارة" },
    ]
  },
  {
    id: "4",
    name: "قسم التغذية",
    slug: "nutrition",
    icon: "Apple",
    type: "list",
    services: [
      { name: "فحص الأنبدي" },
      { name: "اشتراك شهر تغذية" },
      { name: "اشتراك شهرين تغذية" },
      { name: "اشتراك 3 أشهر تغذية" },
      { name: "إبرة إذابة الدهون" },
      { name: "جلسات تكسير" },
    ]
  },
  {
    id: "5",
    name: "قسم الليزر",
    slug: "laser",
    icon: "Zap",
    type: "table",
    tableCols: ["اسم المنطقة", "سعر الجلسة", "سعر 3 جلسات"],
    tableData: [
      ["وجه", "---", "---"],
      ["رقبة", "---", "---"],
      ["رقبة كاملة", "---", "---"],
      ["صدر", "---", "---"],
      ["بطن", "---", "---"],
      ["ظهر", "---", "---"],
      ["أكتاف", "---", "---"],
      ["ذراعين", "---", "---"],
      ["ساقين", "---", "---"],
      ["إبطين", "---", "---"],
      ["بيكيني", "---", "---"],
    ],
    services: []
  },
  {
    id: "6",
    name: "تشقير الشعر بالليزر",
    slug: "laser-hair",
    icon: "Scissors",
    type: "table",
    tableCols: ["اسم المنطقة", "سعر الجلسة"],
    tableData: [
      ["وجه", "---"],
      ["رقبة", "---"],
      ["رقبة كاملة", "---"],
      ["صدر", "---"],
      ["بطن", "---"],
      ["ظهر", "---"],
      ["أكتاف", "---"],
    ],
    services: []
  },
  {
    id: "7",
    name: "قسم الأظافر",
    slug: "nails",
    icon: "Hand",
    type: "list",
    services: [
      { name: "بدكير ومانيكير" },
      { name: "بدكير ومانيكير مع لون" },
      { name: "جلسة علاجية للقدم" },
      { name: "جل كلر" },
      { name: "سوفت جل" },
      { name: "تركيب أسبوعي مع جل" },
      { name: "تركيب شهري مع جل" },
    ]
  }
];
