const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9"; // 10" × 5.625"
pres.author = "Lean Bread Recipes";
pres.title = "低糖油主食面包烘焙食谱软件";

// ── Color Palette (Warm Bread Tones) ──────────────────────────
const C = {
  espresso: "3A2A1A",      // dark background
  crust: "B85042",          // warm terracotta accent
  wheat: "C7882E",          // golden wheat
  dough: "F5E6D0",          // cream
  lightBg: "FEFAF5",        // warm white
  darkText: "2D1F10",       // dark brown text
  mutedText: "8B7355",      // muted brown
  cardBg: "FFFFFF",         // card white
  softBorder: "E8D5C0",    // soft tan border
  hydrationLow: "8B9A5A",   // sage green
  hydrationMid: "C7882E",   // wheat
  hydrationHigh: "C7512E",  // terracotta
  accentGreen: "4A8C5C",    // for checkmarks
};

// ── Helper Functions ───────────────────────────────────────────

/** Create a fresh shadow factory to avoid mutation reuse bugs */
const makeShadow = () => ({
  type: "outer", color: "000000", blur: 6, offset: 2, angle: 135, opacity: 0.12,
});

/** Add a decorative wheat-colored bar at slide top */
function addTopAccent(slide) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 10, h: 0.06, fill: { color: C.wheat },
  });
}

/** Standard content slide background + accent */
function contentSlide(title) {
  const slide = pres.addSlide();
  slide.background = { color: C.lightBg };
  addTopAccent(slide);
  // Title
  slide.addText(title, {
    x: 0.7, y: 0.25, w: 8.6, h: 0.55,
    fontSize: 30, fontFace: "Georgia", color: C.darkText,
    bold: true, margin: 0,
  });
  // Thin separator
  slide.addShape(pres.shapes.LINE, {
    x: 0.7, y: 0.85, w: 1.2, h: 0,
    line: { color: C.wheat, width: 2.5 },
  });
  return slide;
}

/** Card shape helper */
function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: opts.fill || C.cardBg },
    shadow: opts.shadow !== false ? makeShadow() : undefined,
    line: opts.border ? { color: opts.border, width: 0.5 } : undefined,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 1: 封面 (Cover)
// ═══════════════════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.espresso };

  // Decorative wheat shapes
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -0.8, w: 3.5, h: 3.5,
    fill: { color: C.wheat, transparency: 92 },
  });
  slide.addShape(pres.shapes.OVAL, {
    x: -1.2, y: 3.5, w: 3, h: 3,
    fill: { color: C.crust, transparency: 90 },
  });

  // Icon: bread loaf (simple circle)
  slide.addShape(pres.shapes.OVAL, {
    x: 0.7, y: 0.7, w: 0.5, h: 0.5,
    fill: { color: C.wheat, transparency: 40 },
  });

  // Main title
  slide.addText("低糖油主食面包\n烘焙食谱软件", {
    x: 0.7, y: 1.4, w: 7, h: 1.8,
    fontSize: 42, fontFace: "Georgia", color: C.dough,
    bold: true, lineSpacingMultiple: 1.15, margin: 0,
  });

  // Subtitle
  slide.addText("基于烘焙百分比 · 智能食材动态调整", {
    x: 0.7, y: 3.3, w: 7, h: 0.45,
    fontSize: 16, fontFace: "Calibri", color: C.wheat,
    margin: 0,
  });

  // English subtitle
  slide.addText("Lean Bread Recipe Software — Baker's Percentages Engine", {
    x: 0.7, y: 3.75, w: 7, h: 0.35,
    fontSize: 12, fontFace: "Calibri", color: C.mutedText,
    italic: true, margin: 0,
  });

  // Bottom tagline
  slide.addText("硬欧面包 · 法棍 · 恰巴塔 · 佛卡夏", {
    x: 0.7, y: 4.8, w: 7, h: 0.35,
    fontSize: 13, fontFace: "Calibri", color: C.mutedText,
    charSpacing: 4, margin: 0,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 2: 产品概述 (Product Overview)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("产品概述");

  // Left section: Core value proposition
  slide.addText("核心价值", {
    x: 0.7, y: 1.2, w: 4.3, h: 0.4,
    fontSize: 18, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });

  const features = [
    { text: "修改任意食材重量，全配方自动联动更新", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: "Calibri", color: C.darkText } },
    { text: "基于专业烘焙百分比（Baker's Percentages）体系", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: "Calibri", color: C.darkText } },
    { text: "8 款预置低糖油主食面包配方，涵盖 4 大品类", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: "Calibri", color: C.darkText } },
    { text: "含水量可视化仪表，一眼掌握面团状态", options: { bullet: true, breakLine: true, fontSize: 14, fontFace: "Calibri", color: C.darkText } },
    { text: "中英双语步骤说明 + 酵种面板 + 烘焙技巧", options: { bullet: true, fontSize: 14, fontFace: "Calibri", color: C.darkText } },
  ];
  slide.addText(features, {
    x: 0.7, y: 1.7, w: 4.8, h: 2.8,
    paraSpaceAfter: 10, valign: "top",
  });

  // Right section: Stats cards
  const stats = [
    { num: "8", label: "预置食谱" },
    { num: "4", label: "面包品类" },
    { num: "1", label: "核心公式" },
  ];
  stats.forEach((s, i) => {
    const cx = 6.0 + i * 1.4;
    const cy = 1.5;
    addCard(slide, cx, cy, 1.15, 1.4);
    slide.addText(s.num, {
      x: cx, y: cy + 0.15, w: 1.15, h: 0.65,
      fontSize: 36, fontFace: "Georgia", color: C.crust, bold: true,
      align: "center", margin: 0,
    });
    slide.addText(s.label, {
      x: cx, y: cy + 0.85, w: 1.15, h: 0.35,
      fontSize: 11, fontFace: "Calibri", color: C.mutedText,
      align: "center", margin: 0,
    });
  });

  // Bottom highlight box
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.3, w: 8.6, h: 0.65,
    fill: { color: C.dough, transparency: 50 },
  });
  slide.addText([
    { text: "一键修改 → ", options: { bold: true, fontSize: 14, fontFace: "Calibri", color: C.crust } },
    { text: "输入任意食材的新重量，系统逆推面粉总量，重新计算所有食材克数并四舍五入", options: { fontSize: 14, fontFace: "Calibri", color: C.darkText } },
  ], {
    x: 0.9, y: 4.3, w: 8.2, h: 0.65, valign: "middle", margin: 0,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 3: 烘焙百分比系统 (Baker's Percentages)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("烘焙百分比系统 (Baker's Percentages)");

  // Formula display - large
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 1.2, w: 8.6, h: 0.9,
    fill: { color: C.espresso },
  });
  slide.addText("食材重量 (g)  =  ( 百分比 ÷ 100 )  ×  面粉总重 (g)", {
    x: 0.7, y: 1.2, w: 8.6, h: 0.9,
    fontSize: 20, fontFace: "Georgia", color: C.dough,
    align: "center", valign: "middle", margin: 0,
  });

  // Three columns: Flour, Water, Salt/Yeast
  const cols = [
    { title: "面粉 = 100%", desc: "总面粉永远是\n烘焙百分比的基准", color: C.wheat },
    { title: "水 = 60-82%", desc: "含水量决定面团\n质地与气孔结构", color: C.crust },
    { title: "盐/酵母 ≤ 2%", desc: "小剂量食材精确\n四舍五入到 0.1g", color: C.accentGreen },
  ];

  cols.forEach((col, i) => {
    const cx = 0.7 + i * 3.0;
    const cy = 2.5;
    addCard(slide, cx, cy, 2.7, 2.2);

    // Color accent top
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy, w: 2.7, h: 0.06, fill: { color: col.color },
    });

    slide.addText(col.title, {
      x: cx + 0.2, y: cy + 0.25, w: 2.3, h: 0.45,
      fontSize: 17, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
    });
    slide.addText(col.desc, {
      x: cx + 0.2, y: cy + 0.85, w: 2.3, h: 1.0,
      fontSize: 13, fontFace: "Calibri", color: C.mutedText, margin: 0,
    });

    // Circle number
    slide.addShape(pres.shapes.OVAL, {
      x: cx + 2.1, y: cy + 0.2, w: 0.4, h: 0.4,
      fill: { color: col.color, transparency: 30 },
    });
    slide.addText(String(i + 1), {
      x: cx + 2.1, y: cy + 0.2, w: 0.4, h: 0.4,
      fontSize: 14, fontFace: "Calibri", color: C.darkText, bold: true,
      align: "center", valign: "middle", margin: 0,
    });
  });

  // Bottom note
  slide.addText("所有食材均以面粉总量为基准按比例定义，确保配方可任意缩放", {
    x: 0.7, y: 4.95, w: 8.6, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: C.mutedText, italic: true, margin: 0,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 4: 动态调整功能 (Dynamic Adjustment)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("核心功能：动态食材调整");

  // Flow diagram using shapes + text
  const stepY = 1.3;
  const steps = [
    { label: "用户修改\n任意食材克数", color: C.crust },
    { label: "逆推新\n面粉总重", color: C.wheat },
    { label: "重算所有\n食材重量", color: C.accentGreen },
    { label: "四舍五入\n刷新界面", color: C.mutedText },
  ];

  steps.forEach((s, i) => {
    const sx = 0.7 + i * 2.35;
    addCard(slide, sx, stepY, 1.95, 1.15);

    slide.addText(s.label, {
      x: sx, y: stepY, w: 1.95, h: 1.15,
      fontSize: 13, fontFace: "Calibri", color: C.darkText,
      align: "center", valign: "middle", margin: 0,
    });

    // Arrow between steps (except last)
    if (i < 3) {
      slide.addText("→", {
        x: sx + 1.95, y: stepY, w: 0.4, h: 1.15,
        fontSize: 22, fontFace: "Calibri", color: C.wheat, bold: true,
        align: "center", valign: "middle", margin: 0,
      });
    }
  });

  // Example: Before / After
  const exY = 2.9;

  // Before card
  addCard(slide, 0.7, exY, 4.1, 1.85);
  slide.addText("示例：将盐从 10g 改为 12g", {
    x: 0.9, y: exY + 0.12, w: 3.7, h: 0.35,
    fontSize: 14, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });

  slide.addShape(pres.shapes.LINE, {
    x: 0.9, y: exY + 0.52, w: 3.7, h: 0,
    line: { color: C.softBorder, width: 0.5 },
  });

  const beforeAfter = [
    { text: "盐 2% → 新面粉 = 12 ÷ 2% = 600g", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "原面粉 500g → 自动更新为 600g", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "水 70% → 350g 自动更新为 420g", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "所有食材按百分比同步缩放 ✓", options: { fontSize: 12, fontFace: "Calibri", color: C.accentGreen, bold: true } },
  ];
  slide.addText(beforeAfter, {
    x: 0.9, y: exY + 0.6, w: 3.7, h: 1.15,
    paraSpaceAfter: 4, valign: "top",
  });

  // Right: Key features
  addCard(slide, 5.2, exY, 4.1, 1.85);
  slide.addText("精度规则", {
    x: 5.4, y: exY + 0.12, w: 3.7, h: 0.35,
    fontSize: 14, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });
  slide.addShape(pres.shapes.LINE, {
    x: 5.4, y: exY + 0.52, w: 3.7, h: 0,
    line: { color: C.softBorder, width: 0.5 },
  });
  const precision = [
    { text: "盐、酵母（≤2%）：四舍五入到 0.1g", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "面粉、水等主料（>2%）：四舍五入到整克", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "输入验证：拒绝负数、零值、空输入", options: { breakLine: true, fontSize: 12, fontFace: "Calibri", color: C.darkText } },
    { text: "一键重置：恢复默认配方", options: { fontSize: 12, fontFace: "Calibri", color: C.darkText } },
  ];
  slide.addText(precision, {
    x: 5.4, y: exY + 0.6, w: 3.7, h: 1.15,
    paraSpaceAfter: 4, valign: "top",
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 5: 4大分类8款食谱 (Recipes)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("预置食谱（4 大分类 · 8 款配方）");

  const categories = [
    {
      name: "硬欧面包", en: "Hard European", color: C.crust,
      recipes: [
        { zh: "乡村面包", en: "Pain de Campagne", hyd: "70%" },
        { zh: "天然酵母面包", en: "Pain au Levain", hyd: "72%" },
      ],
    },
    {
      name: "法棍", en: "Baguette", color: C.wheat,
      recipes: [
        { zh: "传统法棍", en: "Baguette Tradition", hyd: "75%" },
        { zh: "波兰种法棍", en: "Baguette Poolish", hyd: "76%" },
      ],
    },
    {
      name: "恰巴塔", en: "Ciabatta", color: C.hydrationHigh,
      recipes: [
        { zh: "经典恰巴塔", en: "Ciabatta Classica", hyd: "80%" },
        { zh: "意式酵种恰巴塔", en: "Ciabatta Biga", hyd: "82%" },
      ],
    },
    {
      name: "其他主食", en: "Other Staples", color: C.accentGreen,
      recipes: [
        { zh: "佛卡夏", en: "Focaccia Genovese", hyd: "75%" },
        { zh: "德式黑麦面包", en: "100% Rye Bread", hyd: "68%" },
      ],
    },
  ];

  const startX = 0.5;
  const cardW = 2.1;
  const gap = 0.17;

  categories.forEach((cat, ci) => {
    const cx = startX + ci * (cardW + gap);

    // Category header
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: 1.15, w: cardW, h: 0.5,
      fill: { color: cat.color },
    });
    slide.addText(cat.name, {
      x: cx, y: 1.15, w: cardW, h: 0.5,
      fontSize: 14, fontFace: "Georgia", color: "FFFFFF", bold: true,
      align: "center", valign: "middle", margin: 0,
    });

    // Recipe cards
    cat.recipes.forEach((r, ri) => {
      const ry = 1.85 + ri * 1.55;
      addCard(slide, cx, ry, cardW, 1.3);

      // Hydration badge
      slide.addShape(pres.shapes.RECTANGLE, {
        x: cx + cardW - 0.65, y: ry + 0.1, w: 0.5, h: 0.28,
        fill: { color: cat.color, transparency: 20 },
      });
      slide.addText(r.hyd, {
        x: cx + cardW - 0.65, y: ry + 0.1, w: 0.5, h: 0.28,
        fontSize: 10, fontFace: "Calibri", color: cat.color, bold: true,
        align: "center", valign: "middle", margin: 0,
      });

      slide.addText(r.zh, {
        x: cx + 0.12, y: ry + 0.15, w: cardW - 0.85, h: 0.35,
        fontSize: 13, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0,
      });
      slide.addText(r.en, {
        x: cx + 0.12, y: ry + 0.5, w: cardW - 0.3, h: 0.3,
        fontSize: 9, fontFace: "Calibri", color: C.mutedText, italic: true, margin: 0,
      });
      slide.addText(`含水量 ${r.hyd}`, {
        x: cx + 0.12, y: ry + 0.85, w: cardW - 0.3, h: 0.25,
        fontSize: 9, fontFace: "Calibri", color: C.mutedText, margin: 0,
      });
    });
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 6: 含水量可视化仪表 (Hydration Gauge)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("含水量可视化仪表");

  // Left: Explanation
  slide.addText("SVG 环形水量仪表", {
    x: 0.7, y: 1.2, w: 4.5, h: 0.4,
    fontSize: 18, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });

  const gaugeFeatures = [
    { text: "基于 SVG 圆环（donut chart）实现", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: "Calibri", color: C.darkText } },
    { text: "环形弧长 = 含水量百分比，视觉直觉", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: "Calibri", color: C.darkText } },
    { text: "颜色编码：绿（低）→ 金（中）→ 橙（高）→ 红（超高）", options: { bullet: true, breakLine: true, fontSize: 13, fontFace: "Calibri", color: C.darkText } },
    { text: "stroke-dasharray 动画过渡效果", options: { bullet: true, fontSize: 13, fontFace: "Calibri", color: C.darkText } },
  ];
  slide.addText(gaugeFeatures, {
    x: 0.7, y: 1.7, w: 5.2, h: 1.8,
    paraSpaceAfter: 8, valign: "top",
  });

  // Right: Simulated gauge levels
  const levels = [
    { label: "低水量", range: "< 65%", color: C.hydrationLow },
    { label: "中水量", range: "65-72%", color: C.hydrationMid },
    { label: "高水量", range: "72-80%", color: C.hydrationHigh },
    { label: "超高水量", range: "≥ 80%", color: C.crust },
  ];

  levels.forEach((l, i) => {
    const ly = 1.3 + i * 0.85;
    const lx = 6.5;

    // Color dot
    slide.addShape(pres.shapes.OVAL, {
      x: lx, y: ly + 0.07, w: 0.28, h: 0.28,
      fill: { color: l.color },
    });
    slide.addText(l.label, {
      x: lx + 0.42, y: ly, w: 1.4, h: 0.28,
      fontSize: 14, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0,
    });
    slide.addText(l.range, {
      x: lx + 0.42, y: ly + 0.28, w: 1.4, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: C.mutedText, margin: 0,
    });
  });

  // Bottom: Example values per recipe
  slide.addText("各食谱含水量一览", {
    x: 0.7, y: 3.5, w: 8.6, h: 0.35,
    fontSize: 14, fontFace: "Georgia", color: C.darkText, bold: true, margin: 0,
  });

  const hydrationData = [
    ["食谱", "含水量", "等级"],
    ["Ciabatta Biga", "82%", "超高水量"],
    ["Ciabatta Classica", "80%", "超高水量"],
    ["Baguette Poolish", "76%", "高水量"],
    ["Baguette Tradition", "75%", "高水量"],
    ["Focaccia Genovese", "75%", "高水量"],
    ["Pain au Levain", "72%", "中水量"],
    ["Pain de Campagne", "70%", "中水量"],
    ["100% Rye Bread", "68%", "中水量"],
  ];

  slide.addTable(hydrationData, {
    x: 0.7, y: 3.9, w: 5.2,
    colW: [1.7, 1.1, 1.1],
    border: { pt: 0.5, color: C.softBorder },
    rowH: [0.22, 0.18, 0.18, 0.18, 0.18, 0.18, 0.18, 0.18, 0.18],
    fontFace: "Calibri",
    fontSize: 9,
    color: C.darkText,
    align: "center",
    valign: "middle",
    autoPage: false,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 7: 技术架构 (Technical Architecture)
// ═══════════════════════════════════════════════════════════════
{
  const slide = contentSlide("技术架构");

  // Left: Tech stack
  slide.addText("技术栈", {
    x: 0.7, y: 1.2, w: 4.3, h: 0.4,
    fontSize: 18, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });

  const techItems = [
    { label: "React 19", desc: "组件化 UI，受控输入框 + 自定义 Hook" },
    { label: "TypeScript", desc: "严格模式，编译期类型安全检查" },
    { label: "Vite 5", desc: "极速 HMR 开发服务器，生产构建优化" },
    { label: "CSS Modules", desc: "组件级样式隔离，零运行时成本" },
    { label: "clsx", desc: "条件类名工具（~300B）" },
    { label: "零路由依赖", desc: "useState 管理两个视图切换" },
  ];

  techItems.forEach((t, i) => {
    const ty = 1.7 + i * 0.52;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: 0.7, y: ty + 0.05, w: 0.08, h: 0.32,
      fill: { color: C.wheat },
    });
    slide.addText(t.label, {
      x: 0.95, y: ty, w: 1.5, h: 0.25,
      fontSize: 13, fontFace: "Calibri", color: C.darkText, bold: true, margin: 0,
    });
    slide.addText(t.desc, {
      x: 0.95, y: ty + 0.24, w: 3.5, h: 0.22,
      fontSize: 10, fontFace: "Calibri", color: C.mutedText, margin: 0,
    });
  });

  // Right: Component architecture
  slide.addText("组件架构", {
    x: 5.5, y: 1.2, w: 4, h: 0.4,
    fontSize: 18, fontFace: "Georgia", color: C.crust, bold: true, margin: 0,
  });

  const components = [
    { name: "App", indent: 0, color: C.espresso },
    { name: "Header", indent: 1, color: C.crust },
    { name: "RecipeBrowser", indent: 1, color: C.crust },
    { name: "CategoryFilter", indent: 2, color: C.wheat },
    { name: "RecipeCard × 8", indent: 2, color: C.wheat },
    { name: "RecipeDetail", indent: 1, color: C.crust },
    { name: "AdjustmentPanel ⭐", indent: 2, color: C.hydrationHigh },
    { name: "IngredientRow", indent: 3, color: C.wheat },
    { name: "HydrationGauge", indent: 2, color: C.crust },
    { name: "InstructionsPanel", indent: 2, color: C.wheat },
    { name: "utils/bakerMath", indent: 0, color: C.accentGreen },
    { name: "hooks/useIngredientAdjustment", indent: 0, color: C.accentGreen },
  ];

  components.forEach((c, i) => {
    const cy = 1.75 + i * 0.26;
    const cx = 5.5 + c.indent * 0.35;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: cx, y: cy + 0.02, w: 2.8 - c.indent * 0.3, h: 0.24,
      fill: { color: c.color, transparency: c.indent === 0 ? 0 : 85 },
    });
    slide.addText(c.name, {
      x: cx + 0.08, y: cy, w: 2.8 - c.indent * 0.3 - 0.15, h: 0.28,
      fontSize: 10, fontFace: "Consolas", color: c.indent === 0 ? "FFFFFF" : C.darkText,
      bold: c.indent <= 1, margin: 0, valign: "middle",
    });
  });

  // Bottom file stats
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fill: { color: C.dough, transparency: 50 },
  });
  slide.addText("51 个源文件 · 生产构建 74 kB (gzip) · TypeScript 严格模式 · 移动端响应式", {
    x: 0.7, y: 4.85, w: 8.6, h: 0.4,
    fontSize: 11, fontFace: "Calibri", color: C.mutedText,
    align: "center", valign: "middle", margin: 0,
  });
}


// ═══════════════════════════════════════════════════════════════
// SLIDE 8: 结束页 (Closing)
// ═══════════════════════════════════════════════════════════════
{
  const slide = pres.addSlide();
  slide.background = { color: C.espresso };

  // Decorative circles
  slide.addShape(pres.shapes.OVAL, {
    x: 7.5, y: -0.8, w: 3.5, h: 3.5,
    fill: { color: C.wheat, transparency: 92 },
  });
  slide.addShape(pres.shapes.OVAL, {
    x: -1.2, y: 3.5, w: 3, h: 3,
    fill: { color: C.crust, transparency: 90 },
  });

  slide.addText("谢谢", {
    x: 0.7, y: 1.5, w: 8.6, h: 1.0,
    fontSize: 52, fontFace: "Georgia", color: C.dough,
    bold: true, align: "center", valign: "middle", margin: 0,
  });

  slide.addText("低糖油主食面包烘焙食谱软件", {
    x: 0.7, y: 2.5, w: 8.6, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: C.wheat,
    align: "center", valign: "middle", margin: 0,
  });

  slide.addShape(pres.shapes.LINE, {
    x: 3.5, y: 3.2, w: 3, h: 0,
    line: { color: C.wheat, width: 1 },
  });

  slide.addText("github.com/Jiangxiaobin/lean-bread-recipes", {
    x: 0.7, y: 3.5, w: 8.6, h: 0.4,
    fontSize: 12, fontFace: "Calibri", color: C.mutedText,
    align: "center", valign: "middle", margin: 0,
  });

  slide.addText("基于 Baker's Percentages 构建 · 精确到克", {
    x: 0.7, y: 4.0, w: 8.6, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: C.mutedText,
    italic: true, align: "center", valign: "middle", margin: 0,
  });
}


// ── Write Output ───────────────────────────────────────────────
const outPath = "E:/traeProjects/Demo/lean-bread-recipes/LeanBreadRecipes.pptx";
pres.writeFile({ fileName: outPath })
  .then(() => console.log("PPT generated: " + outPath))
  .catch((err) => console.error("Error:", err));
