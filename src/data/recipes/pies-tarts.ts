import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC, BakerSystem as BS } from '../../types/recipe';

export const piesTarts: Recipe[] = [
  {
    id: 'galette-des-rois',
    name: 'Galette des Rois',
    nameZh: '国王饼',
    category: RC.PIES_TARTS,
    description:
      "The crown jewel of French Epiphany celebrations -- two discs of ethereal puff pastry encasing a core of almond frangipane, baked until the pastry shatters in golden flakes and the filling puffs to a fragrant, tender cloud. Traditionally a fève (small charm) is hidden inside; whoever finds it is crowned king or queen for the day. This recipe focuses on the frangipane using a butter-anchor system, with puff pastry as the shell component.",
    descriptionZh:
      "法国主显节的皇冠明珠--两片轻如空气的千层酥皮包裹着杏仁奶油馅,烘烤至酥皮碎裂成金色薄片、内馅膨起为芬芳柔云。传统上会在内部藏入小瓷偶(fève);找到者即被加冕为当日的国王或王后。本配方以黄油锚定系统聚焦杏仁奶油馅,千层酥皮作为外壳部件。",
    bakerSystem: BS.BUTTER_ANCHOR,
    defaultAnchorWeight: 200,
    anchorLabel: 'Total Butter',
    anchorLabelZh: '总黄油',
    ingredients: [
      { id: 'butter', name: 'Unsalted butter (softened)', nameZh: '无盐黄油(软化)', percentage: 100, isFlour: false },
      { id: 'almond-flour', name: 'Almond flour', nameZh: '杏仁粉', percentage: 100, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 80, isFlour: false },
      { id: 'eggs', name: 'Whole eggs', nameZh: '全蛋', percentage: 80, isFlour: false },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 20, isFlour: true },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Prepare the puff pastry: If using frozen all-butter puff pastry, thaw in the refrigerator overnight -- never at room temperature, which causes the butter layers to merge. Roll out two 25-26 cm discs from the pastry sheets on a lightly floured surface to 3 mm thickness. Place one disc on a parchment-lined baking sheet. Using a 23 cm plate or cake ring as a guide, lightly score a circle in the center -- this marks your filling boundary. Refrigerate both discs while making the frangipane.",
        instructionZh:
          "准备千层酥皮:如使用冷冻全黄油酥皮,在冰箱中解冻过夜--切勿室温解冻,否则黄油层会融合。在轻撒面粉的工作台上,将酥皮擀至3毫米厚度,切成两个直径25-26厘米的圆片。将一片放在铺有烘焙纸的烤盘上。以直径23厘米的盘子或蛋糕圈为导引,在中央轻划一个圆圈--此为馅料边界。将两片酥皮冷藏备用,期间制作杏仁奶油馅。",
        durationMinutes: 30,
      },
      {
        stepNumber: 2,
        instruction:
          "Make the frangipane (crème d'amandes): In a stand mixer with the paddle attachment, cream the softened butter until smooth and pale -- about 2 minutes. Add granulated sugar and beat until light and fluffy, scraping the bowl occasionally. Add the almond flour and all-purpose flour, mixing on low speed until incorporated. Add eggs one at a time, beating well after each addition. The frangipane should be smooth, spreadable, and fragrant. If it curdles, warm the bowl gently over a bain-marie while whisking to re-emulsify.",
        instructionZh:
          "制作杏仁奶油馅(crème d'amandes):使用桨形搅拌头,将软化黄油搅打至顺滑发白--约2分钟。加入细砂糖搅打至轻盈蓬松,间或刮缸壁。加入杏仁粉和中筋面粉,低速搅拌至融合。逐个加入鸡蛋,每次充分搅打。杏仁奶油馅应顺滑、可涂抹、芬芳。若出现油水分离,将盆隔水微温同时搅拌以重新乳化。",
        durationMinutes: 15,
      },
      {
        stepNumber: 3,
        instruction:
          "Assemble: Spread the frangipane evenly within the scored circle on the chilled pastry disc, leaving a 2-3 cm border. Mound it slightly higher in the center for a domed profile after baking. If using a fève (traditional porcelain charm or a whole almond), press it into the frangipane near the edge so it is less likely to be hit by the knife when slicing. Brush the uncovered border lightly with beaten egg. Lay the second pastry disc on top, pressing gently around the filling to seal and expel air pockets. Press the edges firmly all around with your fingertips.",
        instructionZh:
          "组装:将杏仁奶油馅均匀涂抹在冷藏酥皮圆片上的划线圆圈内,留出2-3厘米边缘。中心稍堆高以获得烘烤后的圆顶外观。若使用小瓷偶(传统瓷器护身符或整颗杏仁),将其按入馅料中靠近边缘处,减少切片时被刀切到的几率。在未覆盖的边缘轻刷打散的蛋液。盖上第二张酥皮圆片,沿馅料四周轻轻按压以密封并排出气泡。用指尖沿边缘四周用力压实。",
        durationMinutes: 10,
      },
      {
        stepNumber: 4,
        instruction:
          "Decorate and chill: Trim the edges with a sharp knife if needed to achieve a clean circle. Using the back of a small knife, crimp the sealed edge decoratively -- press and pull outward every 2 cm around the circumference to create a scalloped pattern. Refrigerate the assembled galette for at least 30 minutes. This is essential: cold pastry with chilled filling produces the most dramatic, even puff.",
        instructionZh:
          "装饰与冷藏:必要时用锋利小刀修整边缘以获得干净圆形。用刀背在密封边缘做装饰纹--沿圆周每隔2厘米向外按压拉扯以形成扇形花边。将组装好的国王饼冷藏至少30分钟。这至关重要:冷酥皮配冷馅料能产生最壮观均匀的膨胀效果。",
        durationMinutes: 35,
      },
      {
        stepNumber: 5,
        instruction:
          "Score and glaze: Remove the chilled galette from the refrigerator. Brush the top surface evenly and thoroughly with egg wash (1 egg + 1 tbsp water, strained), taking care not to let it drip down the sides which would glue the layers and prevent proper rise. Using the tip of a paring knife, score a decorative pattern on the surface -- traditional designs include a cross-hatch diamond pattern, concentric arcs, or a sunburst radiating from the center. Do not cut through to the filling. Poke 5-6 small steam vents with a pin in the center area.",
        instructionZh:
          "刻纹与上光:取出冷藏好的国王饼。将表面均匀完整地刷上蛋液(1个鸡蛋+1汤匙水,过筛),小心避免流到侧面,否则会粘合酥皮层阻碍膨胀。用削皮刀尖在表面刻出装饰图案--传统设计包括菱形网格、同心圆弧或从中心辐射的阳光图案。切勿切穿至馅料。在中央区域用针扎5-6个小蒸汽孔。",
        durationMinutes: 10,
      },
      {
        stepNumber: 6,
        instruction:
          "Bake: Preheat oven to 200°C (390°F). Bake the galette for 15 minutes, then reduce temperature to 180°C (350°F) and continue baking for 30-35 minutes. The galette is done when the pastry is deeply golden brown, dramatically risen, and the almond fragrance fills the kitchen. If the top browns too quickly, tent loosely with aluminum foil. Transfer to a wire rack. Let cool for at least 30 minutes before serving -- the frangipane sets as it cools. Serve at room temperature, optionally crowned with a gold paper crown for the traditional Epiphany ceremony.",
        instructionZh:
          "烘烤:预热烤箱至200°C。烘烤国王饼15分钟,然后将温度降至180°C继续烘烤30-35分钟。至酥皮深金黄色、大幅膨胀、满屋杏仁香时即熟。若顶部上色过快,松散地盖上铝箔纸。移至晾架上。至少冷却30分钟后食用--杏仁奶油馅在冷却中凝固。室温食用,依传统主显节仪式可搭配金色纸质王冠。",
        durationMinutes: 50,
      },
    ],
    tips: [
      "The quality of the puff pastry makes or breaks the galette. Use all-butter puff pastry (look for 'pur beurre' on French brands) -- avoid margarine-based pastry, which lacks flavor and will not puff as dramatically. If making your own, a détrempe rested overnight and laminated over 5-6 turns produces the flakiest shell.",
      "For a toasty, intensified almond flavor, toast the almond flour in a dry skillet over medium heat for 3-4 minutes until golden and fragrant. Cool completely before incorporating into the frangipane.",
      "The fève tradition: beyond the classic porcelain charm, a whole almond is the traditional simplified fève. Whoever finds it is crowned king or queen and chooses their royal partner for the day.",
      "If the frangipane puffs unevenly or cracks the top crust, your oven temperature was likely too high. The two-stage baking (200°C then 180°C) is designed to give an initial burst of steam lift followed by even setting.",
    ],
    tipsZh: [
      "千层酥皮的品质决定了国王饼的成败。使用全黄油酥皮(法国品牌上标有'pur beurre')--避免人造黄油酥皮,缺乏风味且膨胀效果逊色。如自制,基础面团冷藏过夜并经5-6次折叠后的酥皮,能做出最酥脆轻盈的外壳。",
      "为获得烘烤后更浓郁的杏仁风味,将杏仁粉在干锅中以中火烘炒3-4分钟至金黄飘香。完全冷却后再混入杏仁奶油馅中。",
      "小瓷偶传统:除了经典瓷偶,一整颗杏仁是传统的简化版fève。找到者即为国王或王后并可选择其当日的皇室伴侣。",
      "若杏仁奶油馅膨胀不均或撑裂顶部酥皮,很可能是烤箱温度过高。两阶段烘烤法(先200°C再180°C)旨在先产生蒸汽爆发提升,随后均匀定型。",
    ],
    difficulty: 'advanced',
    totalTime: 240,
    yieldDescription: '1 galette (serves 8)',
    yieldDescriptionZh: '1个(8人份)',
  },
  {
    id: 'fruit-tart',
    name: 'Classic Fruit Tart',
    nameZh: '法式水果挞',
    category: RC.PIES_TARTS,
    description:
      "The showpiece of every French pâtisserie window -- a crisp, buttery pâte sucrée shell filled with silken vanilla pastry cream and topped with gleaming, artfully arranged fresh seasonal fruit. Each component is simple; the artistry lies in their assembly. The tart should glisten under a thin apricot glaze, each slice revealing perfectly distinct layers of crust, cream, and fruit.",
    descriptionZh:
      "每间法式甜点店橱窗中的焦点之作--酥脆的甜酥挞皮承载着丝绸般的香草卡仕达酱,顶部铺满精心排列、光泽闪烁的新鲜时令水果。每个组成部分都简单;艺术在于它们的组合。薄薄一层杏桃亮面令挞面熠熠生辉,每一刀切下都展现出完美的层次:挞皮、奶酱、水果。",
    bakerSystem: BS.BUTTER_ANCHOR,
    defaultAnchorWeight: 200,
    anchorLabel: 'Total Butter',
    anchorLabelZh: '总黄油',
    ingredients: [
      { id: 'butter', name: 'Unsalted butter (cold)', nameZh: '无盐黄油(冷藏)', percentage: 100, isFlour: false },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 50, isFlour: true },
      { id: 'almond-flour', name: 'Almond flour', nameZh: '杏仁粉', percentage: 20, isFlour: false },
      { id: 'powdered-sugar', name: 'Powdered sugar', nameZh: '糖粉', percentage: 40, isFlour: false },
      { id: 'egg-yolk', name: 'Egg yolk', nameZh: '蛋黄', percentage: 15, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 0.5, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Make the pâte sucrée: Sift powdered sugar, all-purpose flour, almond flour, and salt together into a large bowl. Cut cold butter into 1 cm cubes. In a food processor, pulse the dry ingredients and butter until the mixture resembles fine breadcrumbs -- no visible butter pieces should remain. Add egg yolks and pulse just until the dough begins to clump together when pressed between your fingers. Turn out onto plastic wrap, gather into a flat disc without kneading, wrap tightly, and refrigerate for at least 1 hour (up to 2 days). This resting period relaxes the gluten and fully hydrates the flour, preventing shrinkage during baking.",
        instructionZh:
          "制作甜酥挞皮:将糖粉、中筋面粉、杏仁粉与盐一同过筛入大碗中。冷藏黄油切成1厘米小丁。在食物处理器中,将干料与黄油脉冲搅打至呈细面包糠状--不应有可见的黄油颗粒。加入蛋黄,脉冲搅拌至面团在手指间按压时能聚合成团。倒在保鲜膜上,聚拢成扁圆形(勿揉),紧密包裹,冷藏至少1小时(最多2天)。此静置过程松弛面筋并充分水合面粉,防止烘烤时收缩。",
        durationMinutes: 70,
      },
      {
        stepNumber: 2,
        instruction:
          "Line the tart ring: Remove the dough from the refrigerator and let it temper for 5-10 minutes until slightly pliable but still cold and firm. Roll between two sheets of parchment paper to 3 mm thickness (about 30 cm diameter for a 24 cm ring). Peel off the top parchment. Invert the dough over a 24 cm tart ring placed on a parchment-lined baking sheet. Gently press the dough into the corners of the ring -- the hallmark of a professional finish is a sharp 90-degree corner between the base and the sides. Trim the excess dough flush with the top of the ring. Prick the base all over with a fork. Freeze for at least 30 minutes.",
        instructionZh:
          "铺挞模:取出面团回温5-10分钟至稍具可塑性但仍冰凉坚实。在两张烘焙纸之间擀至3毫米厚度(24厘米挞圈需擀至约30厘米直径)。揭去上层烘焙纸。将面团翻转覆盖在置于铺有烘焙纸烤盘上的24厘米挞圈上。轻轻将面团压入挞圈角落--专业成品的关键在于底部与侧壁之间的锐利90度转角。切除超出挞圈顶部多余的面团。用叉子在底部均匀扎孔。冷冻至少30分钟。",
        durationMinutes: 45,
      },
      {
        stepNumber: 3,
        instruction:
          "Blind bake: Preheat oven to 180°C (350°F). Line the frozen tart shell with a sheet of crumpled parchment paper (crumpling makes it more flexible for fitting). Fill to the brim with pie weights, dried beans, or rice -- the weights must support the sides to prevent slumping. Bake for 18-20 minutes until the edges are set and lightly golden. Carefully remove the parchment and weights. Return the shell to the oven and bake for another 10-12 minutes until the base is fully baked, dry to the touch, and evenly golden -- this thorough blind-baking is crucial to prevent a soggy bottom. Cool completely in the ring before removing.",
        instructionZh:
          "盲烤:预热烤箱至180°C。在冷冻好的挞壳内铺上揉皱的烘焙纸(揉皱后更贴合)。填入满至边缘的烘焙石、干豆或大米--重物必须支撑侧壁以防塌落。烘烤18-20分钟至边缘定型、微金黄。小心取出烘焙纸与重物。将挞壳送回烤箱再烘烤10-12分钟至底部完全烤熟、触感干燥、均匀金黄--充分的盲烤是防止底部湿软的关键。在挞圈内完全冷却后脱模。",
        durationMinutes: 35,
      },
      {
        stepNumber: 4,
        instruction:
          "Prepare the crème pâtissière (pastry cream): Heat 500 ml whole milk with half the sugar (40 g) and a split vanilla bean (or 2 tsp vanilla paste) until steaming but not boiling. In a bowl, whisk 6 egg yolks with the remaining sugar (40 g) and 40 g cornstarch until pale and smooth. Slowly pour the hot milk over the egg mixture while whisking constantly to temper. Return everything to the saucepan and cook over medium heat, whisking vigorously and continuously, until the cream thickens and begins to boil with large, slow bubbles -- about 2 minutes after boiling starts. Remove from heat, whisk in 30 g of cold butter until melted and glossy. Pass through a fine-mesh sieve into a clean bowl. Press plastic wrap directly onto the surface to prevent a skin. Cool to room temperature, then refrigerate until set (at least 2 hours).",
        instructionZh:
          "制作卡仕达酱(crème pâtissière):将500毫升全脂牛奶与一半糖(40克)及一根剖开的香草荚(或2茶匙香草膏)加热至冒蒸汽但未沸腾。在碗中将6个蛋黄与剩余糖(40克)和40克玉米淀粉搅打至发白顺滑。一边持续搅拌一边将热牛奶缓慢倒入蛋黄混合物中使其回温。全部倒回锅中,中火加热,用力并持续搅拌,至奶酱变稠并开始冒出大而缓慢的气泡沸腾--沸腾后继续约2分钟。离火,拌入30克冷藏黄油至融化并光亮。过细筛入干净碗中。将保鲜膜直接贴在奶酱表面以防结皮。冷却至室温后冷藏至凝固(至少2小时)。",
        durationMinutes: 25,
      },
      {
        stepNumber: 5,
        instruction:
          "Assemble and glaze: Remove the cooled tart shell from the ring. Whisk the chilled pastry cream until smooth and pipeable. Fill the tart shell with an even layer of pastry cream, smoothing the surface with an offset spatula. Arrange fresh seasonal fruit on top in a decorative pattern -- concentric circles of strawberry halves, kiwi slices, mango fans, and blueberry clusters are classic. For a professional glaze, warm 3 tablespoons of apricot jam with 1 tablespoon of water, strain through a fine sieve, and gently brush over all the fruit. The glaze prevents the fruit from drying out and gives a glossy, jewel-like finish. Refrigerate the assembled tart for at least 30 minutes before serving to allow the cream to set firmly.",
        instructionZh:
          "组装与亮面:将冷却的挞壳从挞圈中取出。将冷藏卡仕达酱搅打至顺滑可挤。在挞壳内均匀铺上一层卡仕达酱,用曲柄抹刀抹平表面。在顶部艺术性地排列新鲜时令水果--草莓半颗、猕猴桃片、芒果扇形切片与蓝莓簇的同心圆排列是经典之选。制作专业亮面:将3汤匙杏桃果酱与1汤匙水加热,过细筛,轻柔刷在水果表面。亮面可防止水果干燥,赋予宝石般的晶莹光泽。组装好的挞冷藏至少30分钟后食用,使奶酱充分凝固。",
        durationMinutes: 40,
      },
    ],
    tips: [
      "The most common fruit tart failure is a soggy bottom. Blind-bake until the base is fully golden and dry to the touch -- do not rush this step. Additionally, brushing the still-warm shell with a thin layer of melted white chocolate creates a waterproof barrier between the crust and the pastry cream.",
      "The pastry cream can be made up to 3 days ahead and stored in the refrigerator. Whisk vigorously before using to restore its smooth, pipeable consistency. If it seems too stiff after chilling, fold in a tablespoon of softly whipped cream to lighten it.",
      "For a nut-free version, replace almond flour with an equal weight of all-purpose flour. The texture will be slightly less tender but still excellent. Add 1/2 teaspoon of almond extract to the pastry cream if you miss the almond note.",
      "To achieve perfectly sharp, clean slices, refrigerate the assembled tart for at least 2 hours and use a sharp, thin-bladed knife wiped clean with a damp cloth between each cut.",
    ],
    tipsZh: [
      "水果挞最常见的失败是底部湿软。盲烤至底部完全金黄且触感干燥--切勿仓促完成此步。此外,在仍温热的挞壳内刷上一层薄薄的融化白巧克力,可在挞皮与卡仕达酱之间形成防水屏障。",
      "卡仕达酱可提前3天制作并冷藏保存。使用前用力搅打至恢复顺滑可挤的质地。若冷藏后显得过硬,拌入一汤匙轻柔打发的奶油使其轻盈。",
      "无坚果版本:以等量中筋面粉替代杏仁粉。口感会稍欠绵柔但仍出色。若怀念杏仁风味,可在卡仕达酱中加入半茶匙杏仁精。",
      "为获得完美利落的切面,将组装好的挞冷藏至少2小时,使用锋利薄刃刀,每切一刀用湿布擦拭干净。",
    ],
    difficulty: 'intermediate',
    totalTime: 180,
    yieldDescription: '1 tart (serves 8)',
    yieldDescriptionZh: '1个(8人份)',
  },
  {
    id: 'pate-sucree',
    name: 'Pâte Sucrée',
    nameZh: '甜酥挞皮',
    category: RC.PIES_TARTS,
    description:
      "The foundational sweet tart dough of French pâtisserie -- rich with butter, delicately sweet, and tenderly crisp. Where pâte brisée is flaky and pâte sablée is crumbly, pâte sucrée occupies the perfect middle ground: it holds its shape beautifully, cuts cleanly, and melts in the mouth. Almond flour adds flavor and tenderness while inhibiting gluten formation. This is the essential building block for all sweet tarts, from fruit tarts to chocolate ganache and lemon curd.",
    descriptionZh:
      "法式甜点的基础甜挞皮--黄油丰腴、甜度雅致、酥中带脆。若说pâte brisée是酥脆分层、pâte sablée是沙质松散,pâte sucrée则完美地占据了中间地带:形状保持力强、切面整洁、入口即化。杏仁粉增添风味与绵柔度的同时抑制面筋形成。这是所有甜挞的基本构件,适用于水果挞、巧克力甘纳许挞到柠檬凝乳挞。",
    bakerSystem: BS.BUTTER_ANCHOR,
    defaultAnchorWeight: 200,
    anchorLabel: 'Total Butter',
    anchorLabelZh: '总黄油',
    ingredients: [
      { id: 'butter', name: 'Unsalted butter (cold)', nameZh: '无盐黄油(冷藏)', percentage: 100, isFlour: false },
      { id: 'ap-flour', name: 'All-purpose flour', nameZh: '中筋面粉', percentage: 80, isFlour: true },
      { id: 'almond-flour', name: 'Almond flour', nameZh: '杏仁粉', percentage: 20, isFlour: false },
      { id: 'powdered-sugar', name: 'Powdered sugar (sifted)', nameZh: '糖粉(过筛)', percentage: 45, isFlour: false },
      { id: 'egg-yolk', name: 'Egg yolk', nameZh: '蛋黄', percentage: 15, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1, isFlour: false },
      { id: 'vanilla', name: 'Vanilla extract', nameZh: '香草精', percentage: 2, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Combine dry ingredients: Sift the all-purpose flour, almond flour, powdered sugar, and salt together into a large bowl or the bowl of a food processor. The powdered sugar must be sifted -- it clumps easily, and those lumps will create dense, sugary spots in the finished shell rather than an even texture. Cold butter is essential; take it directly from the refrigerator and work quickly.",
        instructionZh:
          "混合干料:将中筋面粉、杏仁粉、糖粉与盐一同过筛入大碗或食物处理器缸中。糖粉必须过筛--极易结块,那些结块会在成品挞皮中形成不均匀的糖斑块而非均匀质地。冷藏黄油至关重要;直接从冰箱取出使用并快速操作。",
        durationMinutes: 5,
      },
      {
        stepNumber: 2,
        instruction:
          "Cut in the butter: Cut cold butter into 1 cm cubes and add to the dry ingredients. Food processor method: pulse 8-10 times until the mixture looks like coarse sand with no visible butter chunks -- stop before it forms a paste. Hand method: rub the butter into the flour with your fingertips, lifting your hands high above the bowl as you work to keep the butter cold. The goal is a uniform sandy texture: every flour particle should be coated in butter. The visible tiny butter flecks will create the tender, melt-away texture.",
        instructionZh:
          "切入黄油:将冷藏黄油切成1厘米小丁加入干料中。食物处理器法:脉冲8-10次至呈粗沙状且无可见黄油块--在形成膏状前即停止。手工法:用指尖将黄油搓入面粉中,操作时双手抬高离开碗面以保持黄油低温。目标是均匀的沙状质地:每粒面粉都应被黄油包裹。可见的细微黄油粒将创造出入口即化的绵柔口感。",
        durationMinutes: 5,
      },
      {
        stepNumber: 3,
        instruction:
          "Add wet ingredients: Whisk egg yolks with vanilla extract until combined. Sprinkle the mixture evenly over the sandy flour-butter mixture. Pulse (or stir with a fork) just until the dough begins to form small, pea-sized clumps -- it will still look crumbly as a whole but should hold together when pressed between your fingers. Do not overwork: stop before it forms a cohesive ball in the processor. Turn the crumbly dough out onto a sheet of plastic wrap. Using the plastic wrap to assist, gather and press the dough firmly into a flat disc without kneading. Wrap tightly and refrigerate for at least 1 hour, preferably 2-3 hours or overnight. This rest is mandatory: it allows the flour to fully hydrate, the gluten to relax thoroughly, and the butter to re-firm, all of which prevent shrinkage and toughness during baking.",
        instructionZh:
          "加入湿料:将蛋黄与香草精打散混合。均匀淋撒在沙状的面粉黄油混合物上。脉冲搅拌(或用叉子搅拌)仅至面团开始形成豌豆大小的小颗粒--整体看来仍松散但用手指按压能聚合成团。切勿过度搅拌:在处理器中完全成球之前即停止。将松散面团倒在保鲜膜上。借助保鲜膜将面团聚拢用力压实成扁圆形,切勿揉搓。紧密包裹冷藏至少1小时,最好2-3小时或过夜。此静置步骤是强制性的:使面粉充分水合、面筋彻底松弛、黄油重新回硬,三者共同防止烘烤时收缩与变硬。",
        durationMinutes: 65,
      },
      {
        stepNumber: 4,
        instruction:
          "Roll, line, and blind bake: Let the chilled dough temper at room temperature for 5-10 minutes until it is pliable enough to roll but still distinctly cold -- if it cracks when you press it, let it warm slightly longer. Roll between two sheets of lightly floured parchment paper to an even 3 mm thickness. Line your tart ring or pan: press the dough firmly into the corners for sharp, professional edges, trim the excess flush with the top. Prick the base all over with a fork at regular intervals. Freeze the lined shell for 30 minutes (this sets the butter and prevents slumping). Preheat oven to 180°C (350°F). Line the frozen shell with crumpled parchment paper, fill to the brim with ceramic pie weights or dried beans, and blind-bake for 18-20 minutes until the edges are set and pale golden. Carefully remove the weights and parchment, return to the oven, and bake for another 8-12 minutes until the base is dry to the touch and evenly light golden. Cool completely in the ring before filling. The shell can be baked a day ahead and stored airtight at room temperature.",
        instructionZh:
          "擀制、铺模与盲烤:将冷藏面团室温回温5-10分钟至可擀但依然明显冰凉--如按压时开裂则需稍多回温。在两张撒有薄面粉的烘焙纸之间擀至均匀的3毫米厚度。铺入挞圈或挞模:将面团用力压入角落以获得锐利的专业边缘,切除与顶部齐平的多余部分。用叉子在底部以均匀间隔扎孔。将铺好的挞壳冷冻30分钟(此步固定黄油防止塌落)。预热烤箱至180°C。在冷冻好的挞壳内铺上揉皱的烘焙纸,填入满至边缘的陶瓷烘焙石或干豆,盲烤18-20分钟至边缘定型并呈浅金色。小心取出重物与烘焙纸,送回烤箱继续烘烤8-12分钟至底部触感干燥、均匀浅金色。在挞圈内完全冷却后再填入馅料。挞壳可提前一天烘烤,密封室温保存。",
        durationMinutes: 50,
      },
    ],
    tips: [
      "Almond flour is the secret weapon of pâte sucrée -- it contains no gluten-forming proteins, so it acts as a built-in tenderizer. It also adds a subtle nuttiness and helps the dough brown evenly. Do not skip it unless necessary for allergies.",
      "If your kitchen is warm, freeze the butter for 10 minutes before cutting it in, and chill the flour and almond flour as well. The colder all ingredients are, the more tender (less tough) your crust will be because the butter stays in discrete particles longer.",
      "For a chocolate pâte sucrée variation, replace 15% of the total flour weight with Dutch-process cocoa powder. Sift it with the dry ingredients -- the result is a deep, dark, sophisticated shell perfect for chocolate ganache or caramel tarts.",
      "When rolling, work from the center outward in all directions, rotating the dough frequently by quarter-turns to maintain an even thickness and round shape. If the dough sticks at any point, slide the whole parchment package onto a tray and refrigerate for 5 minutes -- never add more flour, which will toughen the dough.",
    ],
    tipsZh: [
      "杏仁粉是甜酥挞皮的秘密武器--它不含形成面筋的蛋白质,因此充当内置嫩化剂。它还增添微妙的坚果风味并帮助面团均匀上色。除非过敏,否则不要省略。",
      "如果厨房温度较高,将黄油冷冻10分钟后再切入,并将面粉和杏仁粉也冷藏。所有材料越冷,挞皮越绵柔(不硬韧),因为黄油能更长时间保持为独立的颗粒。",
      "巧克力甜酥挞皮变体:以15%荷兰工艺可可粉替代总面粉重量。与干料一同过筛--成品为深色精致的挞壳,搭配巧克力甘纳许或焦糖挞堪称完美。",
      "擀制时从中心向外各方面擀开,经常四分之一旋转面团以保持均匀厚度和圆形。若面团任何时候粘黏,将整张烘焙纸包滑入托盘中冷藏5分钟--切勿额外加面粉,否则会使面团变硬。",
    ],
    difficulty: 'beginner',
    totalTime: 90,
    yieldDescription: '1 tart shell',
    yieldDescriptionZh: '1个挞皮',
  },
];
