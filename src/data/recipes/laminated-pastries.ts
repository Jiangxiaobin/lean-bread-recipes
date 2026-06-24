import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC, BakerSystem as BS } from '../../types/recipe';

export const laminatedPastries: Recipe[] = [
  {
    id: 'croissant',
    name: 'Classic Croissant',
    nameZh: '经典可颂',
    category: RC.LAMINATED_PASTRY,
    description:
      'The quintessential French laminated pastry — hundreds of paper-thin, buttery layers with a shatteringly crisp exterior and a tender, honeycombed interior. Mastering the détrempe, butter block, and three book folds is a rite of passage for every serious baker.',
    descriptionZh:
      '法式酥皮的代表之作——数百层薄如蝉翼的黄油酥皮，外壳酥脆易碎，内部组织如蜂巢般柔软细致。掌握基础面团、黄油块与三次书式折叠是每位严肃烘焙师的必经之路。',
    bakerSystem: BS.DUAL_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Détrempe Flour',
    anchorLabelZh: '基础面团面粉',
    hydration: 55,
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 90, isFlour: true },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 28, isFlour: false },
      { id: 'milk', name: 'Whole milk', nameZh: '全脂牛奶', percentage: 22, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 5, isFlour: false },
      { id: 'butter-detrempe', name: 'Butter (softened)', nameZh: '黄油（软化）', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 0.8, isFlour: false },
    ],
    butterBlock: {
      percentageOfDetrempe: 25,
      ingredients: [
        { id: 'butter-block', name: 'European-style butter (82%+ fat)', nameZh: '欧式黄油（82%以上脂肪）', percentage: 100, isFlour: false },
      ],
      instructions:
        'Shape cold butter into a 18×18 cm square between parchment paper. Pound gently with a rolling pin to plasticize — the butter must be cold but pliable, bending without cracking. Aim for the same consistency as the détrempe.',
      instructionsZh:
        '将冷藏黄油在烘焙纸之间擀成18×18厘米的正方形。用擀面杖轻轻敲打使其塑化——黄油需保持低温但柔韧可弯，弯折不开裂。目标质地与基础面团一致。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the détrempe: Dissolve yeast in warm milk and water. Combine flours, sugar, salt in a stand mixer bowl. Add liquids and mix on low speed for 3 minutes until a shaggy dough forms. Add softened butter and mix on medium for 5–6 minutes until smooth and elastic but not fully developed — the gluten will strengthen during lamination. Shape into a 20×30 cm rectangle, wrap tightly, and refrigerate overnight (8–12 hours).',
        instructionZh:
          '制作基础面团：将酵母溶于温牛奶和水中。在搅拌缸中混合面粉、糖、盐。加入液体以低速搅拌3分钟至形成粗糙面团。加入软化黄油，中速搅拌5–6分钟至光滑有弹性但无需完全扩展——面筋在折叠过程中将继续强化。整形成20×30厘米长方形，密封包裹，冷藏过夜（8–12小时）。',
        durationMinutes: 720,
      },
      {
        stepNumber: 2,
        instruction:
          'Prepare the butter block: Cut cold butter into slices and arrange in a 18×18 cm square on parchment paper. Cover with another sheet and gently pound with a rolling pin to flatten and plasticize. Roll to an even 18×18 cm square. The butter should be cold (13–16°C) but pliable — when you bend it, it should flex without cracking. Refrigerate briefly if too soft.',
        instructionZh:
          '准备黄油块：将冷藏黄油切片，在烘焙纸上排列成18×18厘米的正方形。盖上另一张烘焙纸，用擀面杖轻轻敲打至扁平并塑化。擀成均匀的18×18厘米正方形。黄油需保持低温（13–16°C）但柔韧——弯折时应能弯曲而不开裂。过软则短暂冷藏。',
        durationMinutes: 20,
      },
      {
        stepNumber: 3,
        instruction:
          'Lock-in: Place the chilled détrempe on a lightly floured surface. Position the butter square rotated 45° (diamond orientation) in the center of the dough. Fold the four corners of the dough over the butter to meet in the center, completely enclosing it. Pinch seams to seal. Gently roll the package into a 20×60 cm rectangle, keeping edges straight.',
        instructionZh:
          '封入黄油：将冷藏的基础面团放在轻撒面粉的工作台上。将黄油块旋转45°（菱形方向）置于面团中央。将面团的四个角向中心折叠，完全包覆黄油。捏合接缝密封。轻轻将包裹擀成20×60厘米的长方形，保持边缘平直。',
        durationMinutes: 15,
      },
      {
        stepNumber: 4,
        instruction:
          'First fold (book fold / double turn): Brush off excess flour. Fold the left third over the center, then the right third over — like a business letter. Rotate the dough 90° so the open side faces you. This is a single (letter) fold. For a classic croissant, perform a second fold immediately: fold the top third down and bottom third up (another letter fold). This combined sequence gives you 9 total layers. Wrap tightly and refrigerate for 45–60 minutes.',
        instructionZh:
          '第一次折叠（书信折叠）：扫去多余干粉。将左侧三分之一折向中心，再将右侧三分之一折上——如叠信。将面团旋转90°使开口面朝你。经典可颂应立即进行第二次折叠：上三分之一折下，下三分之一折上（再次书信折叠）。此组合序列共形成9层。密封包裹，冷藏45–60分钟。',
        durationMinutes: 60,
      },
      {
        stepNumber: 5,
        instruction:
          'Second fold: With the dough cold and relaxed, repeat a book fold (double turn). Roll the dough to 20×60 cm, fold both short ends to meet in the center (like closing a book), then fold in half again. This creates 4 more layers (9 × 4 = 36 total so far). Wrap and refrigerate for 45–60 minutes. Then perform a final single (letter) fold: roll to 20×60 cm, fold in thirds. Total layers: 36 × 3 = 108. Refrigerate at least 30 minutes before final sheeting.',
        instructionZh:
          '第二次折叠：待面团冷却松弛，重复书式折叠。将面团擀至20×60厘米，两端向中心对折（如合书），再对折一次。此步增加4层（当前36层）。包裹冷藏45–60分钟。最后进行一次书信折叠：擀至20×60厘米，三折。总层数：36×3=108层。至少冷藏30分钟后再进行最终擀制。',
        durationMinutes: 120,
      },
      {
        stepNumber: 6,
        instruction:
          'Shaping: Roll the rested dough to a 4 mm thickness, approximately 30×60 cm. Trim edges to expose layers. Cut into triangles with a 10 cm base and 25 cm height. Cut a small notch in the center of the base. Gently stretch each triangle lengthwise, then roll from the base toward the tip, keeping the tip tucked underneath. Place on parchment-lined baking sheets, cover loosely with plastic, and proof at 24–26°C (no warmer — butter must not melt) for 2–2.5 hours until visibly puffy and jiggly when the tray is shaken.',
        instructionZh:
          '整形：将松弛好的面团擀至4毫米厚度，约30×60厘米。切齐边缘以显露层次。切成底边10厘米、高25厘米的三角形。在底边中央切一小口。轻轻将每个三角形纵向拉伸，从底边向尖端卷起，尖端收在底部。摆放在铺有烘焙纸的烤盘上，松散覆盖保鲜膜，在24–26°C（不可过高——黄油不得融化）下醒发2–2.5小时，至明显蓬松、轻摇烤盘时有颤动感。',
        durationMinutes: 150,
      },
      {
        stepNumber: 7,
        instruction:
          'Bake: Preheat oven to 200°C (390°F). Gently brush croissants with egg wash (1 egg + 1 tbsp milk, strained). Avoid letting egg wash drip onto the baking sheet as it will glue the layers and prevent proper rise. Bake for 18–22 minutes until deeply golden brown with darker edges. Cool on a wire rack for at least 20 minutes before serving — the interior continues to set as it cools.',
        instructionZh:
          '烘烤：预热烤箱至200°C。轻柔刷上蛋液（1个鸡蛋+1汤匙牛奶，过筛）。避免蛋液滴落烤盘，否则会粘合层次阻碍膨胀。烘烤18–22分钟至深金黄色，边缘略深。在晾架上至少冷却20分钟后食用——内部结构在冷却过程中继续定型。',
        durationMinutes: 22,
      },
    ],
    tips: [
      'Use European-style butter with 82%+ butterfat — lower water content means less steam that can rupture layers and more plasticity for smooth lamination.',
      'Temperature is everything: aim for a dough temperature of 15–18°C during lamination. If the butter feels too soft at any point, stop and refrigerate for 20 minutes. Working with butter that is too warm will cause it to absorb into the dough rather than forming distinct layers.',
      'When trimming edges before shaping, save the scraps and press them together gently (do not knead) — these make excellent "baker\'s snacks" when baked with cinnamon sugar.',
      'Proof in a turned-off oven with a pan of warm water below to maintain consistent humidity and temperature without drafts.',
    ],
    tipsZh: [
      '使用脂肪含量82%以上的欧式黄油——含水量更低意味着产生更少的破坏层次的蒸汽，且塑性更好，更易均匀折叠。',
      '温度是关键：折叠过程中面团温度保持在15–18°C。任何时候感觉黄油变软，立即停止并冷藏20分钟。黄油过暖会被面团吸收而非形成独立层次。',
      '切边时保留边角料，轻轻压合（勿揉），撒上肉桂糖烘烤即是绝佳的"烘焙师零食"。',
      '在关闭的烤箱中醒发，下方放一盆温水以维持稳定的湿度和温度，避免气流干扰。',
    ],
    difficulty: 'advanced',
    totalTime: 1200,
    yieldDescription: '12 croissants',
    yieldDescriptionZh: '12个可颂',
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    nameZh: '巧克力可颂',
    category: RC.LAMINATED_PASTRY,
    description:
      'The croissant\'s elegant cousin — the same impossibly flaky laminated dough wrapped around two batons of dark chocolate. Each bite delivers the contrast of crisp, buttery pastry and barely melted bittersweet chocolate. In French bakeries, the rectangular shape distinguishes it from the crescent croissant.',
    descriptionZh:
      '可颂的优雅近亲——同样薄如蝉翼的酥皮包裹两根黑巧克力棒。每一口都交织着酥脆黄油面皮与微融苦甜巧克力的对比之美。在法式面包房中，矩形外观使其与新月形可颂区别开来。',
    bakerSystem: BS.DUAL_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Détrempe Flour',
    anchorLabelZh: '基础面团面粉',
    hydration: 55,
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 90, isFlour: true },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 10, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 28, isFlour: false },
      { id: 'milk', name: 'Whole milk', nameZh: '全脂牛奶', percentage: 22, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 5, isFlour: false },
      { id: 'butter-detrempe', name: 'Butter (softened)', nameZh: '黄油（软化）', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 0.8, isFlour: false },
    ],
    butterBlock: {
      percentageOfDetrempe: 25,
      ingredients: [
        { id: 'butter-block', name: 'European-style butter (82%+ fat)', nameZh: '欧式黄油（82%以上脂肪）', percentage: 100, isFlour: false },
      ],
      instructions:
        'Shape cold butter into a 18×18 cm square between parchment paper. Pound gently with a rolling pin to plasticize — the butter must be cold but pliable, bending without cracking.',
      instructionsZh:
        '将冷藏黄油在烘焙纸之间擀成18×18厘米的正方形。用擀面杖轻轻敲打塑化——黄油必须保持低温但柔韧可弯，弯折不开裂。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the détrempe as for croissants: dissolve yeast in warm milk and water. Mix flours, sugar, salt in a stand mixer. Add liquids and mix on low until shaggy, then add softened butter. Mix on medium for 5–6 minutes until smooth and elastic. Shape into a 20×30 cm rectangle, wrap tightly, and refrigerate overnight (8–12 hours).',
        instructionZh:
          '如可颂般制作基础面团：将酵母溶于温牛奶和水中。在搅拌缸中混合面粉、糖、盐。加入液体低速搅拌至粗糙，加入软化黄油。中速搅拌5–6分钟至光滑有弹性。整形成20×30厘米长方形，密封包裹，冷藏过夜（8–12小时）。',
        durationMinutes: 720,
      },
      {
        stepNumber: 2,
        instruction:
          'Prepare the butter block: plasticize cold butter between parchment to an 18×18 cm even square. The butter should be cohesive, cold, and pliable — it should bend without breaking when flexed gently.',
        instructionZh:
          '准备黄油块：将冷藏黄油在烘焙纸间塑化成18×18厘米的均匀方块。黄油应整体凝聚、低温且柔韧——轻轻弯折时应能弯曲而不断裂。',
        durationMinutes: 20,
      },
      {
        stepNumber: 3,
        instruction:
          'Lock-in and lamination: Enclose the butter in the détrempe (diamond orientation, corners folded to center). Perform the same lamination schedule as croissants — one double-book fold (9 layers), one book fold (36 layers), one single fold (108 total layers). Refrigerate 45–60 minutes between each fold. Rest the final dough at least 30 minutes before shaping.',
        instructionZh:
          '封入与折叠：将黄油封入基础面团（菱形方向，四角向中心折叠）。采用与可颂相同的折叠流程——一次双书式折叠（9层）、一次书式折叠（36层）、一次单折（共108层）。每次折叠间隔冷藏45–60分钟。最终面团在整形前至少松弛30分钟。',
        durationMinutes: 120,
      },
      {
        stepNumber: 4,
        instruction:
          'Shaping: Roll the rested dough to 4 mm thickness into a 30×40 cm rectangle. Trim edges. Cut into 8×15 cm rectangles. Place two chocolate batons (or a row of dark chocolate chips) about 2 cm from each short edge. Fold the top edge over the chocolate and roll to enclose the first baton. Place the second baton on top and continue rolling, ending seam-side down. Proof at 24–26°C for 2–2.5 hours until doubled and jiggly.',
        instructionZh:
          '整形：将松弛面团擀至4毫米厚度，成30×40厘米长方形。修边。切成8×15厘米长方形。在距每条短边约2厘米处放置巧克力棒（或一排黑巧克力碎）。将上边折过巧克力，继续卷起包裹第一根巧克力棒。在卷好的面团上放置第二根巧克力棒，继续卷至接缝朝下。在24–26°C下醒发2–2.5小时至体积翻倍且有颤动感。',
        durationMinutes: 150,
      },
      {
        stepNumber: 5,
        instruction:
          'Preheat oven to 200°C (390°F). Brush pain au chocolat gently with strained egg wash (1 egg + 1 tbsp milk), being careful not to let egg drip down the sides. For a glossy finish, apply a second thin coat of egg wash just before baking. Bake for 18–20 minutes until deeply golden with defined layers visible at the sides.',
        instructionZh:
          '预热烤箱至200°C。轻柔刷上过筛蛋液（1个鸡蛋+1汤匙牛奶），小心避免蛋液流到侧面。为获得光亮表面，入炉前再薄刷第二层蛋液。烘烤18–20分钟至深金黄色，侧面可见清晰的酥皮层理。',
        durationMinutes: 20,
      },
      {
        stepNumber: 6,
        instruction:
          'Cool on a wire rack for at least 15 minutes before serving. The chocolate will be molten straight from the oven — waiting allows it to achieve the perfect barely-set texture while the pastry layers fully crisp. Best eaten the same day; reheat briefly at 160°C for 3 minutes to recrisp if needed.',
        instructionZh:
          '在晾架上至少冷却15分钟后食用。刚出炉的巧克力为熔融状——稍微等待可使其达到刚好半凝的完美质地，同时酥皮层完全脆化。建议当天食用；如需恢复酥脆，可160°C复热3分钟。',
        durationMinutes: 15,
      },
    ],
    tips: [
      'Use high-quality dark chocolate batons (50-70% cacao) designed specifically for viennoiserie — standard chocolate chips contain stabilizers that prevent the proper semi-liquid melt.',
      'Mark the top of each pain au chocolat with the back of a knife (two light diagonal scores) for the classic boulangerie look — do this before proofing.',
      'If the dough resists rolling during lamination, let it rest for 10 minutes. Never force it — forcing tears the dough and exposes butter layers.',
      'Baking from cold (straight from refrigerator after proofing) can sometimes yield better layer definition — experiment with chilling shaped pastries for 15 minutes before the oven.',
    ],
    tipsZh: [
      '使用专为维也纳甜酥面包设计的优质黑巧克力棒（可可含量50-70%）——普通巧克力碎含有稳定剂，无法达到理想的半融质地。',
      '用刀背在每块巧克力可颂表面轻划两道斜纹以呈现经典面包店外观——在醒发前完成。',
      '折叠时如面团回缩难以擀开，静置10分钟让其松弛。切勿强行——强行擀开会撕裂面团并暴露黄油层。',
      '醒发后直接从冰箱取出烘烤有时可获得更清晰的分层——可尝试将整形好的面胚冷藏15分钟后再入炉。',
    ],
    difficulty: 'advanced',
    totalTime: 1200,
    yieldDescription: '12 pain au chocolat',
    yieldDescriptionZh: '12个巧克力可颂',
  },
  {
    id: 'danish-pastry',
    name: 'Danish Pastry',
    nameZh: '丹麦酥皮',
    category: RC.LAMINATED_PASTRY,
    description:
      'A richer, slightly sweeter laminated dough with egg and more butter in both the détrempe and the butter block. Danish pastry is the canvas for countless filled pastries — fruit, custard, cream cheese, almond, or spiced nuts. The higher enrichment yields a softer crumb with a tender, cake-like quality beneath the crisp layers.',
    descriptionZh:
      '更为浓郁微甜的酥皮面团，基础面团中即含有鸡蛋，黄油含量更高。丹麦酥皮是无数夹馅酥点的画布——水果、卡仕达酱、奶油芝士、杏仁或香料坚果。更高的油脂含量使得酥脆层次之下带有蛋糕般柔软的组织。',
    bakerSystem: BS.DUAL_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Détrempe Flour',
    anchorLabelZh: '基础面团面粉',
    hydration: 52,
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 85, isFlour: true },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 15, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 25, isFlour: false },
      { id: 'milk', name: 'Whole milk', nameZh: '全脂牛奶', percentage: 22, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 8, isFlour: false },
      { id: 'butter-detrempe', name: 'Butter (softened)', nameZh: '黄油（软化）', percentage: 8, isFlour: false },
      { id: 'egg', name: 'Whole egg', nameZh: '全蛋', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.5, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 1, isFlour: false },
    ],
    butterBlock: {
      percentageOfDetrempe: 25,
      ingredients: [
        { id: 'butter-block', name: 'European-style butter (82%+ fat)', nameZh: '欧式黄油（82%以上脂肪）', percentage: 100, isFlour: false },
      ],
      instructions:
        'Beat cold butter with a small amount of flour (5% of butter weight) between parchment paper. The flour absorbs excess moisture and helps the butter block stay pliable without melting. Shape into a 20×20 cm square.',
      instructionsZh:
        '将冷藏黄油与少量面粉（黄油重量的5%）在烘焙纸之间敲打混合。面粉吸收多余水分，帮助黄油块保持柔韧而不融化。塑形成20×20厘米的方形。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the détrempe: Whisk egg into the milk-water mixture. Dissolve yeast in the liquid. Combine flours, sugar, salt in a mixer bowl. Add liquids and mix on low for 3 minutes. Add softened butter and mix on medium speed for 5–7 minutes until the dough is smooth, supple, and passes the windowpane test moderately (medium gluten development). Shape into a rectangle, wrap, and refrigerate for at least 4 hours, ideally overnight.',
        instructionZh:
          '制作基础面团：将鸡蛋打入牛奶水混合物中搅匀。将酵母溶于液体。在搅拌缸中混合面粉、糖、盐。加入液体低速搅拌3分钟。加入软化黄油中速搅拌5–7分钟，至面团光滑柔顺，可拉开适度薄膜（中等面筋发展）。整形成长方形，包裹冷藏至少4小时，理想为过夜。',
        durationMinutes: 480,
      },
      {
        stepNumber: 2,
        instruction:
          'Prepare the butter block: Beat cold butter with 5% flour of butter weight between parchment to a 20×20 cm square. The flour helps stabilize the butter block during lamination. Keep cold but pliable — 13–16°C is ideal.',
        instructionZh:
          '准备黄油块：将冷藏黄油与5%面粉（以黄油重计）在烘焙纸间敲打混合成20×20厘米正方形。面粉有助于在折叠过程中稳定黄油块。保持低温但柔韧——13–16°C为理想温度。',
        durationMinutes: 20,
      },
      {
        stepNumber: 3,
        instruction:
          'Lock-in: Roll the chilled détrempe to 25×50 cm. Place the butter square in the center. Fold both long sides over the butter to meet in the middle, then fold the other two sides over — like wrapping a package. Pinch all seams to seal completely. Gently roll the package to 2 cm thickness to begin laminating.',
        instructionZh:
          '封入黄油：将冷藏基础面团擀至25×50厘米。将黄油块置于中央。将两条长边向中间折叠盖住黄油，再将另外两边折上——如包裹礼物。捏合所有接缝完全密封。轻轻将包裹擀至2厘米厚度，开始折叠流程。',
        durationMinutes: 15,
      },
      {
        stepNumber: 4,
        instruction:
          'Lamination — three single (letter) folds: Roll the dough to 30×60 cm. Brush off excess flour. Fold into thirds like a business letter. This is your first single fold (3 layers × existing layers = 3). Wrap and refrigerate 45–60 minutes. Repeat the roll-and-fold process two more times for a total of three single folds (3 × 3 × 3 = 27 layers). The richness of this dough means fewer folds suffice — the butter does the heavy lifting.',
        instructionZh:
          '折叠——三次书信折叠：将面团擀至30×60厘米。扫去多余干粉。如叠信般折成三折。此为第一次单折（3层×现有层数=3层）。包裹冷藏45–60分钟。重复擀折过程两次，共三次单折（3×3×3=27层）。此面团油脂含量高，较少折叠次数即已足够——黄油承担了主要的酥化作用。',
        durationMinutes: 180,
      },
      {
        stepNumber: 5,
        instruction:
          'Final sheeting and shaping: Roll the rested laminated dough to 4–5 mm thickness. For traditional Danish shapes: cut into squares (10×10 cm), fold corners to center for pinwheels; cut into ovals for fruit-topped "spandauer" style; or cut long strips for twisted shapes. Transfer to parchment-lined sheets. Proof at 26–28°C (slightly warmer than croissant dough due to higher fat content) for 1.5–2 hours until nearly doubled.',
        instructionZh:
          '最终擀制与整形：将松弛好的折叠面团擀至4–5毫米厚。传统丹麦造型：切成正方形（10×10厘米），四角向中心折叠成风车状；切成椭圆形以制水果顶饰风格；或切成长条扭转成型。移至铺有烘焙纸的烤盘。在26–28°C下醒发1.5–2小时至体积接近翻倍。',
        durationMinutes: 120,
      },
      {
        stepNumber: 6,
        instruction:
          'Fill and egg wash: After proofing, press a shallow well in the center of each pastry. Pipe in your filling — vanilla pastry cream, almond frangipane, cream cheese, or fruit compote. Brush the exposed dough edges carefully with strained egg wash, avoiding the filling. Top fruit-topped versions with fresh or drained fruit.',
        instructionZh:
          '填馅与刷蛋液：醒发后在每块酥皮中央压出浅凹。挤入馅料——香草卡仕达酱、杏仁奶油馅、奶油芝士或水果酱。小心地在暴露的面团边缘刷上过筛蛋液，避开馅料。水果顶饰款摆放新鲜或沥干的果粒。',
        durationMinutes: 15,
      },
      {
        stepNumber: 7,
        instruction:
          'Bake at 190°C (375°F) for 16–20 minutes until the pastry is deeply golden, with the crisp layers visibly separated at the edges and the filling set. Danish pastry browns faster than croissants due to higher sugar — watch closely in the final minutes. Cool on a wire rack. Glaze warm pastries with thinned apricot jam for a professional shine, then drizzle with thin icing if desired.',
        instructionZh:
          '以190°C烘烤16–20分钟，至表面深金色，边缘分层清晰可见且馅料凝固。丹麦酥皮因含糖量较高，上色速度比可颂快——最后几分钟需密切关注。在晾架上冷却。趁温热刷上稀杏桃果酱以获得专业光泽，如喜欢可淋上稀糖霜。',
        durationMinutes: 20,
      },
    ],
    tips: [
      'Danish dough benefits from a slightly warmer proof than croissants (26–28°C vs 24–26°C). The higher fat and sugar content slows yeast activity, so the extra warmth helps achieve proper volume.',
      'The classic "spandauer" shape uses a round or oval cut with a deep indent pressed in the center after proofing. Fill with remonce (butter-sugar-almond paste) for the authentic Danish bakery experience.',
      'Always drain fresh fruit fillings well — excess liquid will create a soggy bottom and may leak into the lamination, steaming the interior layers instead of crisping them.',
      'For a professional bakery finish, brush baked pastries with a thin apricot glaze (apricot jam thinned with equal parts water, heated and strained) while still warm. This seals in moisture and gives a mirror-like shine.',
    ],
    tipsZh: [
      '丹麦面团比可颂需要稍高的醒发温度（26–28°C对比24–26°C）。较高的油脂和糖含量减缓了酵母活性，额外温度有助于达到理想的体积。',
      '经典"spandauer"造型使用圆形或椭圆形面团，醒发后在中央压出深凹。填入remsonce（黄油-糖-杏仁酱）以获得地道的丹麦面包店体验。',
      '新鲜水果馅料务必充分沥干——多余的水分会造成底部湿软，甚至渗入酥皮层中蒸煮内部层次，而非使其酥脆。',
      '为获得专业面包店的成品效果，在温热的面包上刷一层薄杏桃亮面（杏桃果酱加等量水稀释，加热并过筛）。这能锁住水分并呈现出镜面般的光泽。',
    ],
    difficulty: 'advanced',
    totalTime: 1200,
    yieldDescription: '12 danish pastries',
    yieldDescriptionZh: '12个丹麦酥皮',
  },
  {
    id: 'kouign-amann',
    name: 'Kouign-Amann',
    nameZh: '焦糖黄油酥',
    category: RC.LAMINATED_PASTRY,
    description:
      'From Brittany comes the mightiest laminated pastry of all — Kouign-Amann ("butter cake" in Breton). Layers of laminated dough are coated with sugar between each fold, which caramelizes during baking into crackling, amber crusts of intense butterscotch flavor. With a staggering 30% butter block, this is the most decadent member of the laminated family.',
    descriptionZh:
      '源自布列塔尼的酥皮之王——Kouign-Amann（布列塔尼语意为"黄油蛋糕"）。层层酥皮面团在每次折叠时撒上砂糖，烘烤时焦化成嘎吱作响的琥珀色焦糖脆壳，散发出浓郁的奶油糖果风味。高达30%的黄油块比例，使其成为酥皮家族中最奢靡的一员。',
    bakerSystem: BS.DUAL_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Détrempe Flour',
    anchorLabelZh: '基础面团面粉',
    hydration: 55,
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water (tepid)', nameZh: '水（微温）', percentage: 40, isFlour: false },
      { id: 'milk', name: 'Whole milk', nameZh: '全脂牛奶', percentage: 10, isFlour: false },
      { id: 'butter-detrempe', name: 'Butter (softened)', nameZh: '黄油（软化）', percentage: 5, isFlour: false },
      { id: 'sugar-detrempe', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 8, isFlour: false },
      { id: 'salt', name: 'Fine sea salt (fleur de sel preferred)', nameZh: '细海盐（优选盐之花）', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 0.8, isFlour: false },
    ],
    butterBlock: {
      percentageOfDetrempe: 30,
      ingredients: [
        { id: 'butter-block', name: 'European-style butter (82%+ fat)', nameZh: '欧式黄油（82%以上脂肪）', percentage: 60, isFlour: false },
        { id: 'flour-block', name: 'Bread flour (for butter block)', nameZh: '高筋面粉（黄油块用）', percentage: 20, isFlour: false },
        { id: 'sugar-block', name: 'Granulated sugar (for lamination layers)', nameZh: '细砂糖（折叠层用）', percentage: 20, isFlour: false },
      ],
      instructions:
        'For Kouign-Amann, the sugar is incorporated during lamination rather than in a premixed block. Mix cold butter with flour to plasticize into a 20×20 cm square. Reserve the sugar for sprinkling between folds.',
      instructionsZh:
        'Kouign-Amann的砂糖是在折叠过程中加入的，而非预混在黄油块中。将冷藏黄油与面粉混合塑化成20×20厘米正方形。砂糖留待折叠时撒入。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Make the détrempe: Dissolve yeast in tepid water and milk. In a mixer, combine bread flour, sugar, and salt. Add liquids and mix on low speed for 3 minutes. Add softened butter and continue mixing on medium for 5–6 minutes until the dough is smooth and extensible — it should feel soft and slightly tacky but not sticky. Shape into a rectangle, wrap tightly, and refrigerate for at least 4 hours, ideally overnight.',
        instructionZh:
          '制作基础面团：将酵母溶于微温的水与牛奶中。在搅拌缸中混合高筋面粉、糖、盐。加入液体低速搅拌3分钟。加入软化黄油，中速继续搅拌5–6分钟至面团光滑有延展性——应手感柔软微粘但不黏手。整形成长方形，密封包裹，冷藏至少4小时，理想为过夜。',
        durationMinutes: 480,
      },
      {
        stepNumber: 2,
        instruction:
          'Prepare the butter block: Beat cold butter with the flour until plasticized and cohesive. Shape into a 20×20 cm square between parchment paper. The flour additions absorb excess moisture and make the butter block more workable at cold temperatures. Chill briefly if needed to maintain 13–16°C.',
        instructionZh:
          '准备黄油块：将冷藏黄油与面粉敲打混合至塑化凝聚。在烘焙纸之间塑形成20×20厘米正方形。加入的面粉吸收多余水分，使黄油块在低温下更易操作。如需要可短暂冷藏以维持在13–16°C。',
        durationMinutes: 20,
      },
      {
        stepNumber: 3,
        instruction:
          'First turn with sugar: Roll the détrempe to 25×50 cm. Enclose the butter block in a package fold. Roll to 30×60 cm. Sprinkle one-third of the reserved lamination sugar evenly over the surface. Perform a single (letter) fold — fold in thirds like a business letter. Wrap and refrigerate for 45 minutes.',
        instructionZh:
          '第一次含糖折叠：将基础面团擀至25×50厘米。以包裹方式封入黄油块。擀至30×60厘米。均匀撒上三分之一预留的折叠用糖。进行一次书信折叠——如叠信般三折。包裹冷藏45分钟。',
        durationMinutes: 45,
      },
      {
        stepNumber: 4,
        instruction:
          'Second and third turns with sugar: Repeat the process twice more — roll, sprinkle with sugar, single fold, refrigerate — for a total of three single folds with sugar between each (3 × 3 × 3 = 27 layers). After the final fold, wrap and refrigerate for at least 1 hour. The sugar draws moisture and partially dissolves between layers; this is what creates the caramelized crust during baking.',
        instructionZh:
          '第二与第三次含糖折叠：重复上述流程两次——擀开、撒糖、单折、冷藏——共三次含糖单折（3×3×3=27层）。最后一次折叠后包裹冷藏至少1小时。糖在层间吸收水分并部分溶解——正是烘烤时形成焦糖脆壳的关键。',
        durationMinutes: 180,
      },
      {
        stepNumber: 5,
        instruction:
          'Shaping: Generously butter individual ring molds (8–10 cm diameter, 4 cm tall) and coat the interiors with granulated sugar. Roll the rested dough to approximately 1.5–2 cm thickness. Cut into squares sized to fit inside your molds. Fold the corners of each square into the center and press into the sugared molds, folded side down. Alternatively, place squares directly in the molds and gather the edges accordion-style for a more rustic look.',
        instructionZh:
          '整形：在独立环形模具（直径8–10厘米，高4厘米）内壁大量涂抹黄油并裹上砂糖。将松弛好的面团擀至约1.5–2厘米厚。切成适合模具大小的方形。将每块方形面团的四角向中心折叠，折叠面朝下压入裹了糖的模具中。亦可直接将方形放入模具，将边缘如手风琴般聚拢，呈现更质朴的外观。',
        durationMinutes: 30,
      },
      {
        stepNumber: 6,
        instruction:
          'Proof and bake: Place filled molds on a parchment-lined baking sheet (the sugar will bubble and drip — parchment is essential). Proof at 25–27°C for 45–60 minutes until the dough rises just above the rim of the molds. Sprinkle the tops generously with additional sugar. Preheat oven to 200°C (390°F). Bake for 30–40 minutes, rotating halfway. The kouign-amann is done when deeply amber, with caramel bubbling around the edges. If browning too fast, tent with foil after 20 minutes. Invert onto a cooling rack immediately (the caramel will harden and stick to the mold if left to cool). Let cool for at least 30 minutes — the caramel needs time to set into a crackly shell.',
        instructionZh:
          '醒发与烘烤：将装好面团的模具摆放在铺有烘焙纸的烤盘上（糖会沸腾滴落——烘焙纸必不可少）。在25–27°C下醒发45–60分钟，至面团刚刚高出模具边缘。表面大量撒上额外的糖。预热烤箱至200°C。烘烤30–40分钟，中途旋转烤盘。当表面呈深琥珀色、边缘有焦糖沸腾冒泡时即熟。如上色过快，20分钟后覆盖锡纸。立即倒扣脱模至晾架上（若在模具中冷却，焦糖会硬化粘模）。至少冷却30分钟——焦糖需要时间凝结成脆壳。',
        durationMinutes: 40,
      },
    ],
    tips: [
      'Fleur de sel (or any flaky sea salt) is traditional — the trace salt crystals punctuate the caramel sweetness with bursts of savory complexity. Sprinkle a few crystals on top before baking.',
      'Kouign-Amann is best eaten within 2–3 hours of baking while the caramel shell is at its crackliest. If you must reheat, use a 180°C oven for 5 minutes — never a microwave, which will turn the caramel to chewy taffy.',
      'The butter-sugar liquid that pools in the bottom of the molds during baking is essentially Breton caramel sauce — scrape it off the parchment and drizzle over ice cream.',
      'If you do not have ring molds, use a well-buttered muffin tin — the shape will be less traditional but the flavor is just as extraordinary. Halve the dough squares for standard muffin cavities.',
    ],
    tipsZh: [
      '盐之花（或任何片状海盐）是传统选择——微量盐结晶在焦糖甜味中点缀出咸鲜的复杂度。入炉前在表面撒上几粒。',
      'Kouign-Amann 最好在出炉2–3小时内食用，此时焦糖脆壳最为酥脆。如需复热，180°C烤箱烘5分钟——切勿使用微波炉，否则焦糖会变成耐嚼的太妃糖。',
      '烘烤时在模具底部汇集的黄油糖液本质上就是布列塔尼焦糖酱——从烘焙纸上刮下淋在冰淇淋上享用。',
      '如无环形模具，可用涂足黄油的麦芬烤盘——形状虽不那么传统，但风味同样非凡。将面团方块减半以适应标准麦芬杯。',
    ],
    difficulty: 'advanced',
    totalTime: 900,
    yieldDescription: '12 kouign-amann',
    yieldDescriptionZh: '12个焦糖黄油酥',
  },
];
