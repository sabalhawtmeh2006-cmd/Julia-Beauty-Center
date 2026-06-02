export interface Service {
  name: string;
  price?: string;
  subtitle?: string;
}

export interface Subsection {
  name: string;
  services: Service[];
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  services: Service[];
  subsections?: Subsection[];
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
      { name: "هايدروفيشال", price: "20 دينار" },
      { name: "ديرمابن مع بلازما", price: "15 دينار" },
      { name: "ديرمابن مع ميزوثيرابي", price: "25 دينار" },
      { name: "هايدروفيشال مع ديرمابن وبلازما", price: "30 دينار" },
      { name: "هايدروفيشال مع ديرمابن وميزو", price: "35 دينار" },
      { name: "هايدروفيشال + توريد شفايف", price: "30 دينار" },
      { name: "تقشير البيبي فيس", price: "35 دينار" },
      { name: "التقشير الذكي PRX-T33", price: "45 دينار" },
      { name: "تقشير الميلاين", price: "60 دينار" },
      { name: "تقشير الطحالب للوجه", price: "25 دينار" },
      { name: "تقشير الطحالب للجسم", price: "60 دينار" },
      { name: "تقشير أصفر", price: "35 دينار" },
      { name: "تقشير الـ TCA", price: "45 دينار" },
      { name: "جلسة تفتيح ركب أو أكواع أو بكيني أو اندر آرم", price: "35 دينار" },
      { name: "هايدروفيشال مع ديرمابن وبلازما + توريد شفايف", price: "40 دينار" },
      { name: "ميزو الشعر", price: "35 دينار" },
    ],
    subsections: [
      {
        name: "عروض قسم البشرة",
        services: [
          { name: "جلسة Skin Clear لحب الشباب", price: "25 دينار", subtitle: "3 جلسات: 60 دينار" },
          { name: "جلسة ميزو تحت العين", price: "25 دينار", subtitle: "3 جلسات: 60 دينار" },
          { name: "حقن بلازما", price: "40 دينار", subtitle: "3 جلسات: 110 دينار" },
          { name: "توريد شفايف", price: "25 دينار", subtitle: "3 جلسات: 60 دينار" },
        ]
      }
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
