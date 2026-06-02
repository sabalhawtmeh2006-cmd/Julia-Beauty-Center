export interface Service {
  name: string;
  price?: string;
  subtitle?: string;
}

export interface Subsection {
  name: string;
  services: Service[];
  note?: string;
}

export interface LaserPackage {
  name: string;
  pricePerSession: string;
  priceFor3: string;
  imageFile: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description?: string;
  services: Service[];
  subsections?: Subsection[];
  packages?: LaserPackage[];
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
      { name: "بوتوكس (اليرجان)", price: "100 دينار" },
      { name: "فيلر توسيال منطقة تحت العين", price: "120 دينار" },
      { name: "فيلر شفاه نوع فيلمد", price: "100 دينار" },
      { name: "فيلر خطوط ابتسامة نوع فيلمد", price: "100 دينار" },
      { name: "فيلر خدود نوع فيلمد", price: "100 دينار" },
      { name: "بلوريال سيلك - إبرة الحرير", price: "180 دينار" },
    ]
  },
  {
    id: "3",
    name: "إبر النضارة",
    slug: "mesotherapy",
    icon: "Droplet",
    type: "list",
    services: [],
    subsections: [
      {
        name: "المجموعة الأولى",
        note: "مدة الإبر المذكورة أعلاه سنة وأقل",
        services: [
          { name: "نيوفاوند نضارة", price: "100 دينار" },
          { name: "نيوفاوند تفتيح", price: "120 دينار" },
          { name: "بروفايلو", price: "120 دينار" },
          { name: "سايتوكير", price: "95 دينار" },
          { name: "سايتوكير (Sline)", price: "120 دينار" },
          { name: "العنبر الرباعية", price: "180 دينار" },
        ]
      },
      {
        name: "المجموعة الثانية",
        note: "مدة الإبر المذكورة أعلاه سنتين",
        services: [
          { name: "سكلبترا", price: "350 دينار" },
          { name: "استافيل", price: "300 دينار" },
          { name: "اوليديا", price: "280 دينار" },
          { name: "اسبلا", price: "300 دينار" },
        ]
      }
    ]
  },
  {
    id: "4",
    name: "قسم التغذية",
    slug: "nutrition",
    icon: "Apple",
    type: "list",
    services: [
      { name: "فحص الأنبدي", price: "4 دينار" },
      { name: "اشتراك شهر تغذية", price: "25 دينار" },
      { name: "اشتراك شهرين تغذية", price: "40 دينار" },
      { name: "اشتراك ثلاثة أشهر تغذية", price: "55 دينار" },
      { name: "إبرة إذابة الدهون", price: "50 دينار" },
      { name: "عشر جلسات تكسير دهون", price: "120 دينار" },
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
      ["نصف ايدي", "8 دينار", "20 دينار"],
      ["ايدي كاملة", "10 دينار", "25 دينار"],
      ["أرجل كاملة", "15 دينار", "40 دينار"],
      ["نصف أرجل", "12 دينار", "30 دينار"],
      ["بكيني", "7 دينار", "18 دينار"],
      ["إبط", "6 دينار", "15 دينار"],
      ["وجه", "7 دينار", "18 دينار"],
      ["شوارب", "2 دينار", "4 دينار"],
    ],
    packages: [
      {
        name: "توتال بدي",
        pricePerSession: "40 دينار",
        priceFor3: "100 دينار",
        imageFile: "/laser-total-body.png",
      },
      {
        name: "فل بدي",
        pricePerSession: "30 دينار",
        priceFor3: "75 دينار",
        imageFile: "/laser-full-body.png",
      },
      {
        name: "هاف بدي",
        pricePerSession: "25 دينار",
        priceFor3: "63 دينار",
        imageFile: "/laser-half-body.png",
      },
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
      ["وجه", "10 دينار"],
      ["رقبة", "7 دينار"],
      ["رقبة كاملة", "15 دينار"],
      ["صدر", "10 دينار"],
      ["بطن", "20 دينار"],
      ["ظهر", "25 دينار"],
      ["أكتاف", "15 دينار"],
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
