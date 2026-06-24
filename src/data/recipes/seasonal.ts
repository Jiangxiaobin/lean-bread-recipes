import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC, BakerSystem as BS } from '../../types/recipe';

export const seasonal: Recipe[] = [
  {
    id: 'panettone',
    name: 'Panettone',
    nameZh: '潘娜托尼',
    category: RC.SEASONAL,
    description:
      "The towering dome of Italian Christmas -- a sweet, egg-and-butter-enriched bread studded with candied fruit and raisins, its crumb as soft as spun sugar. Authentic panettone requires a multi-day natural fermentation that develops its signature ethereal texture and complex, slightly tangy flavor. Hung upside down after baking to preserve its dramatic height, panettone is the ultimate test of an enriched dough baker's patience and skill.",
    descriptionZh:
      "意大利圣诞的巍峨穹顶--一款富含鸡蛋与黄油的甜面包，缀满糖渍水果与葡萄干，组织如拉丝糖果般柔软。正宗的潘娜托尼需要多日的天然发酵来形成其标志性的空灵质地与复杂微酸的风味。烘烤后需倒挂以保持其壮观的高度，潘娜托尼是对浓厚面团烘焙师耐心与技艺的终极考验。",
    bakerSystem: BS.FLOUR_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 50,
    fatPercentage: 40,
    sugarPercentage: 25,
    eggPercentage: 30,
    difficulty: 'advanced',
    totalTime: 2880,
    yieldDescription: '2 panettoni',
    yieldDescriptionZh: '2个',
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour (high-gluten)', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'egg-yolks', name: 'Egg yolks', nameZh: '蛋黄', percentage: 40, isFlour: false },
      { id: 'butter', name: 'Unsalted butter (softened)', nameZh: '无盐黄油（软化）', percentage: 40, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 25, isFlour: false },
      { id: 'water', name: 'Water (tepid)', nameZh: '水（微温）', percentage: 20, isFlour: false },
      { id: 'honey', name: 'Orange blossom honey', nameZh: '橙花蜂蜜', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.2, isFlour: false },
      { id: 'starter', name: 'Sourdough starter (100% hydration, active)', nameZh: '酸面团酵种（100%水合，活跃）', percentage: 20, isFlour: false },
      { id: 'candied-fruit', name: 'Candied orange and citron peel', nameZh: '糖渍橙皮与香橼皮', percentage: 30, isFlour: false },
      { id: 'raisins', name: 'Golden raisins', nameZh: '金色葡萄干', percentage: 20, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "First dough (day 1, evening): Prepare the stiff starter refreshment 4 hours before mixing. In a stand mixer, combine the refreshed starter with half the flour (250 g) and half the water (50 g). Mix on low speed for 3 minutes until a shaggy dough forms. Cover and ferment at 26-28°C for 12 hours overnight. This extended preferment builds the complex flavor that defines great panettone.",
        instructionZh:
          "第一次面团（第一天晚间）：混合前4小时更新酵种。在搅拌缸中将更新后的酵种与一半面粉（250克）和一半水（50克）混合。低速搅拌3分钟至形成粗糙面团。覆盖后于26-28°C下发酵12小时过夜。此长时间的预发酵建立了优质潘娜托尼所定义的复杂风味。",
        durationMinutes: 720,
      },
      {
        stepNumber: 2,
        instruction:
          "Second dough (day 2, morning): Add the remaining flour (250 g), sugar, honey, salt, egg yolks, and remaining water to the first dough. Mix on low speed for 4 minutes, then increase to medium speed and mix for 15-20 minutes until the dough climbs the hook, slaps the sides of the bowl, and shows strong gluten development -- it should form a very thin, strong windowpane. The dough will be very sticky and stringy; this is correct.",
        instructionZh:
          "第二次面团（第二天上午）：将剩余面粉（250克）、糖、蜂蜜、盐、蛋黄和剩余水加入第一次面团。低速搅拌4分钟，然后加速至中速搅拌15-20分钟，至面团沿搅拌钩攀升、拍打缸壁并展现强大的面筋扩展--应能拉出极薄而坚韧的薄膜。面团将非常黏手且呈丝缕状；这是正确的状态。",
        durationMinutes: 30,
      },
      {
        stepNumber: 3,
        instruction:
          "Incorporate the butter: With the mixer running on medium speed, add the softened butter in 4-5 additions, waiting until each addition is completely absorbed before adding the next. The dough will appear to break and become greasy after each addition -- keep mixing and it will re-form into a smooth, satiny mass. This process takes 20-25 minutes. The final dough should be extremely supple, shiny, and elastic.",
        instructionZh:
          "融入黄油：搅拌机中速运转，分4-5次加入软化黄油，每次待完全吸收后再加入下一批。每次加入后面团看似断裂变油腻--继续搅拌，它将重新聚合成光滑如缎的面团。此过程需20-25分钟。最终面团应极为柔顺、光亮且有弹性。",
        durationMinutes: 25,
      },
      {
        stepNumber: 4,
        instruction:
          "Add fruit and first rise: Toss the candied peel and raisins with a tablespoon of flour to help them adhere. Add to the dough and mix on low speed just until evenly distributed -- about 1 minute. Transfer the dough to a large, lightly buttered bowl. Cover and ferment at 28-30°C for 3-4 hours until tripled in volume. The dough should be domed, jiggly, and extremely fragrant.",
        instructionZh:
          "加入果料与一发：将糖渍果皮和葡萄干裹上一汤匙面粉以助粘附。加入面团中，低速搅拌仅至均匀分布--约1分钟。将面团转移至大型轻涂黄油的碗中。覆盖后于28-30°C下发酵3-4小时至体积三倍大。面团应呈圆顶状、颤动且香气浓郁。",
        durationMinutes: 240,
      },
      {
        stepNumber: 5,
        instruction:
          "Shape and proof: Gently turn the dough out onto a lightly floured surface (do not punch down). Divide into portions sized for your panettone molds (traditional 750 g or 1 kg paper molds). Shape each portion into a tight ball by tucking the edges under and rolling against the counter to create surface tension. Place seam-side down in the paper molds. The dough should fill each mold no more than one-third full -- panettone undergoes dramatic oven spring. Proof at 28-30°C for a second rise of 2-4 hours until the dough crests just below the rim of the mold. Score a cross in the top with a sharp blade and place a knob of butter in the center.",
        instructionZh:
          "整形与醒发：将面团轻轻倒在轻撒面粉的工作台上（勿排气）。按潘娜托尼纸模大小分割（传统为750克或1千克纸模）。将每份整形成紧致的球形，将边缘收入底部并在台面上滚圆以产生表面张力。接缝朝下放入纸模中。面团应仅填充模具的三分之一--潘娜托尼在烘烤中有剧烈的烤箱膨胀。于28-30°C下二次醒发2-4小时，至面团升至模具边缘下方。用锋利的刀片在顶部划出十字，中央放置一小块黄油。",
        durationMinutes: 240,
      },
      {
        stepNumber: 6,
        instruction:
          "Bake: Preheat oven to 180°C (350°F) with a rack positioned in the lower third. Place the panettone molds on a baking sheet. Bake for 45-55 minutes for 750 g molds (60-70 minutes for 1 kg), until a skewer inserted into the center comes out clean and the internal temperature reaches 93-95°C. The top should be deeply brown and the crust firm. If browning too fast, tent loosely with foil after 30 minutes.",
        instructionZh:
          "烘烤：预热烤箱至180°C，烤架置于下三分之一处。将潘娜托尼纸模置于烤盘上。750克模具烘烤45-55分钟（1千克模具60-70分钟），至竹签插入中心干净拔出且内部温度达93-95°C。顶部应为深棕色，外壳坚实。如上色过快，30分钟后松散地盖上锡纸。",
        durationMinutes: 55,
      },
      {
        stepNumber: 7,
        instruction:
          "Cool upside down: This step is non-negotiable for authentic panettone. Immediately after removing from the oven, insert long metal skewers or knitting needles through the base of each panettone (through the paper mold) and suspend upside down between two supports (e.g., stacked books, the rungs of a cooling rack). The panettone must cool completely in this inverted position -- at least 4 hours, ideally overnight. Hanging prevents the delicate crumb structure from collapsing under its own weight. Once fully cooled, remove the skewers and wrap tightly. Panettone improves with age and keeps for up to 2 weeks.",
        instructionZh:
          "倒挂冷却：此步骤对正宗潘娜托尼而言是不可妥协的。出炉后立即将长金属扦或毛衣针穿过每个潘娜托尼底部（穿过纸模），倒挂悬空在两个支撑物之间（如摞起的书本、晾架横杆）。潘娜托尼必须在此倒置状态中完全冷却--至少4小时，理想为过夜。倒挂防止精细的组织结构在自身重量下塌陷。完全冷却后取出金属扦，紧密包裹。潘娜托尼随时间愈佳，可保存长达两周。",
        durationMinutes: 480,
      },
    ],
    tips: [
      "The gluten development for panettone must be extreme -- the windowpane should be so thin you can read text through it. This is what allows the dough to support its own weight (with all that butter) and achieve the signature cotton-candy crumb. If your mixer struggles, give it breaks to avoid overheating the dough.",
      "Panettone paper molds are essential; the tall cylindrical shape and the paper's breathability create the right baking environment. Do not substitute with a regular loaf pan -- the dough needs tall, insulating walls to rise properly.",
      "Temperature control throughout the multi-day process is critical. Invest in a proofing box or use your oven with the light on and a bowl of warm water. Fluctuations in temperature will produce inconsistent fermentation and unpredictable results.",
      "The fruit must be completely dry before adding to the dough. Excess moisture will create a gummy layer around each piece and may cause the panettone to collapse during cooling.",
    ],
    tipsZh: [
      "潘娜托尼的面筋扩展必须达到极致--薄膜应薄到可透过它阅读文字。正是这强大的面筋使面团能支撑自身重量（在如此多的黄油下）并实现标志性的棉花糖般组织。若搅拌机吃力，让其间歇休息以避免面团过热。",
      "潘娜托尼纸模是必不可少的；其高圆柱形与纸张的透气性创造了正确的烘烤环境。切勿用普通吐司模替代--面团需要高而隔热的侧壁才能正确膨胀。",
      "多日过程中的温度控制至关重要。投资一个醒发箱，或在烤箱中开灯并放置一碗温水。温度波动将产生不一致的发酵和不可预测的结果。",
      "果料在加入面团前必须完全干燥。多余的水分会在每块果料周围形成胶质层，并可能导致潘娜托尼在冷却过程中塌陷。",
    ],
  },
  {
    id: 'mooncakes',
    name: 'Cantonese Mooncakes',
    nameZh: '广式月饼',
    category: RC.SEASONAL,
    description:
      "The iconic pastry of the Mid-Autumn Festival, when families gather under the full moon to share these dense, symbolic cakes. A thin, golden-brown skin wrapper -- made with golden syrup for its characteristic sheen and tenderness -- encases a sphere of silky lotus seed paste with a salted egg yolk at its heart, representing the full moon. Mooncakes require patience: the dough must rest, the filled cakes must be pressed in elaborate wooden molds, and after baking they age for 2-3 days to achieve the perfect soft, glossy crust.",
    descriptionZh:
      "中秋节的标志性糕点，家人团聚于满月之下分享这些质地紧密、富有象征意义的饼食。薄而金黄的饼皮--以转化糖浆制成以获得其特有的光泽与柔软--包裹着丝滑的莲蓉馅，中央一颗咸蛋黄象征着满月。月饼需要耐心：面团需静置，包馅后需用精美木模压制成型，烘烤后还需回油2-3天以达到完美柔软光亮的外皮。",
    bakerSystem: BS.DIRECT_WEIGHT,
    defaultAnchorWeight: 0,
    anchorLabel: 'N/A',
    anchorLabelZh: '不适用',
    difficulty: 'intermediate',
    totalTime: 240,
    yieldDescription: '8 mooncakes',
    yieldDescriptionZh: '8个月饼',
    ingredients: [
      { id: 'golden-syrup', name: 'Golden syrup (or invert sugar syrup)', nameZh: '转化糖浆', percentage: 150, isFlour: false },
      { id: 'alkaline-water', name: 'Alkaline water (kansui / lye water)', nameZh: '枧水', percentage: 4, isFlour: false },
      { id: 'peanut-oil', name: 'Peanut oil', nameZh: '花生油', percentage: 50, isFlour: false },
      { id: 'cake-flour', name: 'Cake flour', nameZh: '低筋面粉', percentage: 200, isFlour: true },
      { id: 'lotus-paste', name: 'Lotus seed paste (fine, low-sugar)', nameZh: '莲蓉（细腻低糖）', percentage: 400, isFlour: false },
      { id: 'salted-yolks', name: 'Salted duck egg yolks', nameZh: '咸鸭蛋黄', percentage: 8, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Prepare the salted egg yolks: Separate the yolks from the salted duck eggs (discard the whites or reserve for other uses). Rinse the yolks gently under cold water to remove any clinging white. Pat completely dry. Place on a parchment-lined baking sheet and spray lightly with rice wine or Shaoxing wine to remove any fishy odor. Steam over boiling water for 5 minutes, or bake at 160°C for 8 minutes, until just set but still slightly soft in the center. Cool completely.",
        instructionZh:
          "准备咸蛋黄：将咸鸭蛋的蛋黄与蛋白分离（蛋白弃去或留作他用）。用冷水轻轻冲洗蛋黄以去除任何附着的蛋白。彻底拍干。摆放在铺有烘焙纸的烤盘上，轻轻喷洒米酒或绍兴酒以去腥。隔沸水蒸5分钟，或以160°C烘烤8分钟，至刚刚凝固但中心仍稍软。完全冷却。",
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        instruction:
          "Make the skin dough: In a large bowl, combine the golden syrup, alkaline water, and peanut oil. Whisk vigorously until fully emulsified -- the mixture should be uniform and slightly thickened. Sift the cake flour over the liquid mixture. Fold together with a spatula until a smooth, cohesive dough forms. The dough will be soft and slightly oily; do not overwork it. Wrap tightly in plastic wrap and rest at room temperature for at least 1 hour, preferably 2-3 hours. This resting period is essential: the alkaline water reacts with the golden syrup to create the skin's signature tenderness and sheen after baking.",
        instructionZh:
          "制作饼皮面团：在大碗中混合转化糖浆、枧水和花生油。用力搅打至完全乳化--混合物应均匀且略微浓稠。将低筋面粉筛入液体混合物中。用刮刀翻拌至形成光滑凝聚的面团。面团柔软微油；切勿过度搅拌。用保鲜膜紧密包裹，室温静置至少1小时，最好2-3小时。此静置步骤至关重要：枧水与转化糖浆反应，形成饼皮烘烤后特有的柔软与光泽。",
        durationMinutes: 70,
      },
      {
        stepNumber: 3,
        instruction:
          "Prepare the filling: Divide the lotus seed paste into 50 g portions. Flatten each portion into a disc in your palm, place a cooled salted egg yolk in the center, and wrap the paste around the yolk to form a smooth ball. You should have 8 balls of lotus paste-wrapped yolks. If the paste is too sticky to handle, lightly oil your hands or dust with a minimal amount of cooked glutinous rice flour (gao fen). Cover the prepared balls with plastic wrap to prevent drying.",
        instructionZh:
          "准备馅料：将莲蓉分成每份50克。将每份在掌心压成圆片，中央放入一颗冷却的咸蛋黄，将莲蓉包裹蛋黄搓成光滑的圆球。应制成8个莲蓉包蛋黄的球体。若莲蓉过黏难以操作，可在手上轻抹油或以极少量的熟糯米粉（糕粉）防粘。用保鲜膜覆盖已备好的球体以防干燥。",
        durationMinutes: 20,
      },
      {
        stepNumber: 4,
        instruction:
          "Wrap the mooncakes: Divide the rested skin dough into 8 equal portions (about 30 g each for a 50 g filling, yielding an 80 g mooncake). Flatten each dough portion into a thin, even disc large enough to enclose the filling ball. Place the filling ball in the center. Gently push the dough upward around the filling, stretching it to cover the entire surface. Pinch the seams closed at the top and roll gently between your palms to form a smooth ball. The skin should be thin and even -- ideally 3-4 mm all around. Lightly dust the wooden mooncake mold with flour, tap out excess. Press the ball into the mold, flattening it to fill the cavity. Knock the mold firmly against the counter to release the shaped mooncake onto a parchment-lined baking sheet.",
        instructionZh:
          "包月饼：将静置好的饼皮面团分成8等份（每份约30克，搭配50克馅料，制成80克月饼）。将每份面团压成足够包裹馅球的薄而均匀的圆片。将馅球置于中央。轻轻将面皮沿馅球向上推，延展至完全覆盖。在顶部捏合接缝，在双掌间轻搓成光滑球体。饼皮应薄而均匀--理想为周围3-4毫米。在木制月饼模具中轻撒面粉，磕去多余。将球体压入模具中，填满模腔。将模具在台面上用力敲击，使成型的月饼脱模至铺有烘焙纸的烤盘上。",
        durationMinutes: 30,
      },
      {
        stepNumber: 5,
        instruction:
          "First bake and rest: Preheat oven to 180°C (350°F). Spray the shaped mooncakes very lightly with water from a spray bottle -- this prevents the skin from cracking during baking. Bake on the middle rack for 5 minutes exactly. Remove from the oven and let cool for 10 minutes until the surface is just warm to the touch. Meanwhile, prepare the egg wash: beat 1 egg yolk with 1 teaspoon of water and strain through a fine sieve for a smooth, even glaze.",
        instructionZh:
          "第一次烘烤与静置：预热烤箱至180°C。用喷水瓶在成型月饼表面极轻微地喷水--可防止烘烤时饼皮开裂。中层烤架烘烤恰好5分钟。取出冷却10分钟至表面仅微温。同时准备蛋液：将1个蛋黄与1茶匙水打散，过细筛以获得光滑均匀的刷液。",
        durationMinutes: 15,
      },
      {
        stepNumber: 6,
        instruction:
          "Glaze and final bake: Using a very soft pastry brush, apply the thinnest possible layer of egg wash to the top and sides of each mooncake -- barely a whisper of glaze. Too much egg wash will fill the intricate mold patterns and obscure the design. Return to the oven and bake at 170°C (340°F) for 10-12 minutes until the mooncakes are a uniform golden brown. The crust should look matte-glossy with clearly defined mold impressions. Cool completely on the baking sheet. The mooncakes will be hard straight from the oven; this is normal -- they soften dramatically during the aging period (回油). Store in an airtight container at room temperature for 2-3 days before serving for the authentic soft, glossy crust.",
        instructionZh:
          "刷蛋液与最终烘烤：用极软的毛刷，在每个月饼的顶部和侧面刷上尽可能薄的一层蛋液--几乎只是轻掠而过。蛋液过多会填满精细的模具花纹，使图案模糊。送回烤箱以170°C烘烤10-12分钟至月饼呈均匀金黄色。饼皮应呈哑光光泽，模具图案清晰可见。在烤盘上完全冷却。刚出炉的月饼很硬；这是正常的--在回油期将大幅变软。密封容器室温存放2-3天后食用，以获得正宗的柔软光泽饼皮。",
        durationMinutes: 12,
      },
    ],
    tips: [
      "Golden syrup (转化糖浆) is the soul of Cantonese mooncake skin. Its acidity from the inversion process reacts with alkaline water to create the characteristic tenderness, sheen, and deep amber color. Store-bought Lyle's Golden Syrup is an acceptable substitute, but traditional homemade invert syrup aged for at least 1 month yields superior results.",
      "The aging period (回油) is non-negotiable: after baking, store mooncakes in an airtight container at room temperature for 2-3 days. During this time, moisture from the filling migrates into the crust, transforming it from hard to soft, glossy, and tender. Opening the container prematurely will result in dry, hard mooncakes.",
      "When pressing the mooncake into the wooden mold, apply firm, even pressure and hold for 5 seconds before releasing. A loose press results in a blurred pattern and an uneven surface.",
      "For variety, replace lotus seed paste with red bean paste or a mixture of toasted nuts and candied winter melon (五仁 filling). Adjust the sweetness of the filling to balance the salted yolk.",
    ],
    tipsZh: [
      "转化糖浆是广式月饼饼皮的灵魂。其转化过程中产生的酸性与枧水反应，形成特有的柔软、光泽与深琥珀色。市售Lyle's金黄糖浆是可接受的替代品，但传统自制并陈化至少1个月的转化糖浆效果更佳。",
      "回油期是不可妥协的：烘烤后将月饼存放于密封容器中室温放置2-3天。在此期间，馅料中的水分迁移至饼皮中，使其从硬变软、光亮且柔嫩。过早打开容器将导致月饼干硬。",
      "将月饼压入木模时，施加稳固均匀的压力并保持5秒钟后脱模。按压不足将导致图案模糊和表面不平。",
      "变换口味：将莲蓉替换为红豆沙或混合烤坚果与糖渍冬瓜的伍仁馅。调整馅料甜度以平衡咸蛋黄的咸味。",
    ],
  },
  {
    id: 'stollen',
    name: 'Dresdner Stollen',
    nameZh: '德式圣诞面包',
    category: RC.SEASONAL,
    description:
      "Dresden's legendary Christmas bread -- a dense, buttery loaf laden with rum-soaked fruits, almonds, and warm spices, its folded shape symbolizing the swaddled infant Christ. Stollen improves profoundly with age: baked weeks before Christmas, it is wrapped and stored in a cool place while the flavors of rum, spice, and butter deepen and meld. The thick blanket of melted butter and generous snowfall of powdered sugar applied after baking create its iconic white-dusted appearance.",
    descriptionZh:
      "德累斯顿传奇的圣诞面包--一款质地紧密的黄油面包，满载朗姆酒浸泡的果干、杏仁与温暖香料，其折叠造型象征襁褓中的圣婴。史多伦随时间愈佳：圣诞前数周烘烤，包裹后存放于阴凉处，朗姆酒、香料与黄油的风味在此期间不断深化融合。烘烤后涂上的厚厚融化黄油与慷慨的糖粉雪衣造就了其标志性的白霜外观。",
    bakerSystem: BS.FLOUR_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 45,
    fatPercentage: 30,
    sugarPercentage: 20,
    difficulty: 'intermediate',
    totalTime: 1200,
    yieldDescription: '2 loaves',
    yieldDescriptionZh: '2个',
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'milk', name: 'Whole milk (lukewarm)', nameZh: '全脂牛奶（微温）', percentage: 35, isFlour: false },
      { id: 'butter', name: 'Unsalted butter (softened)', nameZh: '无盐黄油（软化）', percentage: 30, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 20, isFlour: false },
      { id: 'raisins', name: 'Raisins (soaked in rum overnight)', nameZh: '葡萄干（朗姆酒浸泡过夜）', percentage: 40, isFlour: false },
      { id: 'candied-peel', name: 'Candied orange and lemon peel', nameZh: '糖渍橙皮与柠檬皮', percentage: 25, isFlour: false },
      { id: 'almonds', name: 'Whole almonds (blanched, roughly chopped)', nameZh: '整粒杏仁（去皮，粗切）', percentage: 20, isFlour: false },
      { id: 'rum', name: 'Dark rum (for soaking fruit)', nameZh: '黑朗姆酒（浸泡果干用）', percentage: 10, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 1.5, isFlour: false },
      { id: 'spices', name: 'Mixed spice (cinnamon, nutmeg, cardamom)', nameZh: '混合香料（肉桂、肉豆蔻、小豆蔻）', percentage: 2, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Soak the fruit (night before): Place raisins in a bowl and pour the dark rum over them. Add the candied peel. Stir to coat, cover, and let soak at room temperature overnight (8-12 hours). The fruit should absorb most of the rum and become plump and aromatic. In the morning, drain any excess liquid but reserve it -- it can be brushed on the baked stollen for extra flavor.",
        instructionZh:
          "浸泡果干（前一晚）：将葡萄干放入碗中，倒入黑朗姆酒。加入糖渍果皮。搅拌均匀，覆盖，室温浸泡过夜（8-12小时）。果干应吸收大部分朗姆酒，变得饱满芬芳。翌日沥去多余液体但保留--可刷在烤好的史多伦上增添风味。",
        durationMinutes: 600,
      },
      {
        stepNumber: 2,
        instruction:
          "Mix the dough: In a stand mixer, combine bread flour, sugar, salt, spices, and instant yeast. Add lukewarm milk and mix on low speed for 3 minutes until a shaggy dough forms. Add the softened butter gradually in 3 additions, mixing on medium speed after each until fully incorporated. Increase to medium-high and knead for 8-10 minutes until the dough is smooth, supple, and passes a medium windowpane test. The dough is heavily enriched but should still show gluten development -- it will be soft and slightly tacky.",
        instructionZh:
          "混合面团：在搅拌缸中混合高筋面粉、糖、盐、混合香料和即发干酵母。加入微温牛奶，低速搅拌3分钟至形成粗糙面团。分3次逐渐加入软化黄油，每次中速搅拌至完全吸收。加速至中高速揉面8-10分钟至面团光滑柔顺，通过中等薄膜测试。面团高度营养富化但仍应展现面筋发展--柔软微黏。",
        durationMinutes: 20,
      },
      {
        stepNumber: 3,
        instruction:
          "Incorporate fruit: Add the rum-soaked fruit and chopped almonds to the dough. Mix on the lowest speed just until evenly distributed -- about 1 minute. Avoid overmixing, which crushes the fruit and turns the dough gray. Transfer to a lightly buttered bowl, cover, and ferment at 26-28°C for 1.5-2 hours until noticeably puffy but not necessarily doubled. The heavy fruit load will slow the rise; do not expect dramatic doubling.",
        instructionZh:
          "加入果料：将朗姆酒浸泡的果干和碎杏仁加入面团中。最低速搅拌仅至均匀分布--约1分钟。避免过度搅拌，否则会压碎果干并使面团变灰。转移至轻涂黄油的碗中，覆盖，于26-28°C下发酵1.5-2小时至明显鼓胀但未必翻倍。大量的果料负荷会减缓发酵；不必期待显著的体积翻倍。",
        durationMinutes: 120,
      },
      {
        stepNumber: 4,
        instruction:
          "Shape: Turn the dough onto a lightly floured surface. Gently pat into an oval about 2 cm thick. The traditional Dresden stollen shape: fold one long side over about two-thirds of the width, then fold the other side over the top, offset so the long fold creates a distinctive hump -- this represents the swaddled infant. The finished loaf should be roughly 25-30 cm long with a characteristic ridge down the center. Transfer to a parchment-lined baking sheet, cover loosely, and proof at 26-28°C for 45-60 minutes until puffy.",
        instructionZh:
          "整形：将面团倒在轻撒面粉的工作台上。轻拍成约2厘米厚的椭圆形。传统德累斯顿史多伦造型：将一条长边向另一侧折叠约三分之二宽度，再将另一条长边折上，使其错位在顶部形成独特的隆起--代表襁褓中的圣婴。成品应约25-30厘米长，中央有标志性的隆起脊线。移至铺有烘焙纸的烤盘上，松散覆盖，于26-28°C下醒发45-60分钟至鼓胀。",
        durationMinutes: 60,
      },
      {
        stepNumber: 5,
        instruction:
          "Bake: Preheat oven to 180°C (350°F). Bake the stollen for 45-55 minutes, rotating the pan halfway. The stollen is done when deeply golden brown, firm to the touch, and its internal temperature reaches 90-93°C. If the top browns too quickly, tent loosely with foil. The crust should be quite dark -- stollen is traditionally baked to a deeper color than most enriched breads.",
        instructionZh:
          "烘烤：预热烤箱至180°C。烘烤史多伦45-55分钟，中途旋转烤盘。至深金黄色、触感坚实且内部温度达90-93°C时即熟。若顶部上色过快，松散地盖上锡纸。外壳应相当深色--史多伦传统上烘烤至比多数浓厚面包更深的颜色。",
        durationMinutes: 55,
      },
      {
        stepNumber: 6,
        instruction:
          "Butter coat and sugar: Immediately upon removing from the oven -- while the stollen is still scorching hot -- brush the entire surface generously with melted unsalted butter (at least 80-100 g). The hot crust will absorb the butter like a sponge. Wait 5 minutes for the first coat to absorb, then brush on a second generous coat. While the butter is still tacky, sift a thick, even blanket of powdered sugar over the entire stollen -- do not be shy; the sugar coating should be at least 3-5 mm thick, completely white. Let cool completely. Wrap tightly in foil and store in a cool place for at least 1 week before serving. Stollen can be stored for 3-4 weeks, improving all the while.",
        instructionZh:
          "涂黄油与裹糖粉：一出炉--趁史多伦仍烫手--立即用融化无盐黄油大量涂刷整个表面（至少80-100克）。热外壳会像海绵般吸收黄油。等待5分钟使第一层吸收，再涂刷第二层大量黄油。趁黄油仍黏时，在整条史多伦上筛上厚而均匀的糖粉层--不要吝啬；糖粉层应至少3-5毫米厚，完全雪白。完全冷却。用铝箔紧紧包裹，存放于阴凉处至少1周后食用。史多伦可保存3-4周，期间风味持续升华。",
        durationMinutes: 20,
      },
    ],
    tips: [
      "Stollen is designed to be made well in advance -- the flavor maturation during storage is part of the recipe. Bakers in Dresden begin making stollen in November for Christmas. The rum, spices, and butter need time to meld into the complex, harmonious flavor that defines authentic Dresdner Stollen.",
      "The butter coating while hot is crucial: it seals the crust and creates a barrier that traps moisture inside, keeping the stollen moist for weeks. Do not reduce the butter quantity -- the seemingly excessive amount is what gives stollen its legendary keeping quality.",
      "For the most authentic flavor, use a combination of dark rum, almond extract (a few drops), and genuine vanilla extract in the fruit soak. Some traditional recipes also add a small amount of marzipan (almond paste) rolled into the center of the stollen before shaping.",
      "When slicing stollen, cut thin wedges from the end rather than across the middle -- this preserves the remaining loaf from drying out and is the traditional serving method.",
    ],
    tipsZh: [
      "史多伦需要提前制作--储存期间的风味熟成是配方的一部分。德累斯顿的面包师从11月便开始制作圣诞史多伦。朗姆酒、香料与黄油需要时间融合成复杂和谐的风味，这正是正宗德累斯顿史多伦的定义。",
      "趁热涂黄油至关重要：它封闭外壳并形成屏障将水分锁在内部，使史多伦可湿润保存数周。切勿减少黄油用量--看似过量的黄油正是史多伦传奇保质能力的来源。",
      "为获得最正宗的风味，在浸泡果干的液体中使用黑朗姆酒、几滴杏仁精与纯正香草精的组合。一些传统配方还会在整形前在史多伦中央卷入少量杏仁膏（Marzipan）。",
      "切片时从一端切薄片而非横切中间--这样可保持剩余部分不干燥，也是传统的食用方式。",
    ],
  },
  {
    id: 'hot-cross-buns',
    name: 'Hot Cross Buns',
    nameZh: '十字面包',
    category: RC.SEASONAL,
    description:
      "The spiced, fruit-studded bun of Good Friday -- soft, fragrant, and marked with a pale flour-paste cross that stands in quiet symbolism atop each glossy dome. Eaten warm from the oven, split and buttered, these buns fill the kitchen with the unmistakable scent of cinnamon, allspice, and citrus. The cross paste is piped before baking and sets into a distinct, slightly crisp contrast against the soft enriched dough.",
    descriptionZh:
      "圣周五的香料果干小面包--柔软芬芳，顶部以浅色面糊画出十字，在每一个光亮的面包穹顶上静默地象征着信仰。趁热出炉、掰开涂抹黄油，满屋弥漫着肉桂、多香果与柑橘的独特香气。十字面糊在烘烤前挤上，烤后凝结成与柔软浓厚面团形成对比的微脆质地。",
    bakerSystem: BS.FLOUR_ANCHOR,
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 58,
    fatPercentage: 10,
    sugarPercentage: 15,
    difficulty: 'intermediate',
    totalTime: 210,
    yieldDescription: '12 buns',
    yieldDescriptionZh: '12个面包',
    ingredients: [
      { id: 'bread-flour', name: 'Bread flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'milk', name: 'Whole milk (lukewarm)', nameZh: '全脂牛奶（微温）', percentage: 45, isFlour: false },
      { id: 'water', name: 'Water (tepid)', nameZh: '水（微温）', percentage: 5, isFlour: false },
      { id: 'butter', name: 'Unsalted butter (softened)', nameZh: '无盐黄油（软化）', percentage: 10, isFlour: false },
      { id: 'sugar', name: 'Granulated sugar', nameZh: '细砂糖', percentage: 15, isFlour: false },
      { id: 'egg', name: 'Whole egg', nameZh: '全蛋', percentage: 10, isFlour: false },
      { id: 'spices', name: 'Mixed spice (cinnamon, allspice, nutmeg)', nameZh: '混合香料（肉桂、多香果、肉豆蔻）', percentage: 2, isFlour: false },
      { id: 'salt', name: 'Fine sea salt', nameZh: '细海盐', percentage: 1.2, isFlour: false },
      { id: 'yeast', name: 'Instant yeast', nameZh: '即发干酵母', percentage: 1, isFlour: false },
      { id: 'raisins', name: 'Raisins (plumped in warm water)', nameZh: '葡萄干（温水泡软）', percentage: 30, isFlour: false },
      { id: 'currants', name: 'Dried currants', nameZh: '干醋栗', percentage: 15, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          "Activate the yeast and plump the fruit: Combine lukewarm milk and tepid water -- the mixture should feel barely warm to your wrist (about 35°C). Sprinkle instant yeast over the liquid along with a pinch of the sugar and let stand for 5-10 minutes until frothy. Meanwhile, cover the raisins and currants with warm water and let soak for 10 minutes, then drain thoroughly and pat dry. Toss the dried fruit with a tablespoon of the flour to prevent them from sinking during baking.",
        instructionZh:
          "激活酵母与泡软果干：将微温牛奶与微温水混合--液体在手腕处应仅感微温（约35°C）。在液体表面撒上即发干酵母及一小撮糖，静置5-10分钟至起泡。同时将葡萄干和醋栗用温水浸泡10分钟，然后彻底沥干并拍干。将果干裹上一汤匙面粉以防烘烤时下沉。",
        durationMinutes: 15,
      },
      {
        stepNumber: 2,
        instruction:
          "Mix the dough: In a stand mixer bowl, whisk bread flour, remaining sugar, salt, and mixed spices together. Add the frothy yeast mixture and the beaten egg. Mix on low speed for 3-4 minutes until a shaggy dough forms. Add the softened butter and continue mixing on medium speed for 8-10 minutes until the dough is smooth, elastic, and passes the windowpane test -- stretch a small piece; it should form a thin, translucent membrane without tearing. The dough will be soft and slightly tacky but not sticky.",
        instructionZh:
          "混合面团：在搅拌缸中将高筋面粉、剩余糖、盐和混合香料搅拌均匀。加入起泡的酵母液和打散的鸡蛋。低速搅拌3-4分钟至形成粗糙面团。加入软化黄油，中速继续搅拌8-10分钟至面团光滑有弹性，通过薄膜测试--拉扯一小块应能形成薄而透光的膜且不撕裂。面团柔软微黏但不粘手。",
        durationMinutes: 15,
      },
      {
        stepNumber: 3,
        instruction:
          "Add fruit and first rise: Add the floured raisins and currants to the dough. Mix on the lowest speed just until evenly distributed -- about 1 minute. Transfer to a lightly oiled bowl, cover with plastic wrap or a damp cloth, and ferment at 26-28°C for 1.5-2 hours until the dough has doubled in size. The fruit slows fermentation slightly; be patient. The dough should feel puffy and spring back slowly when poked gently.",
        instructionZh:
          "加入果料与一发：将裹了面粉的葡萄干和醋栗加入面团。最低速搅拌仅至均匀分布--约1分钟。转移至轻涂油的碗中，盖上保鲜膜或湿布，于26-28°C下发酵1.5-2小时至面团体积翻倍。果料略微减缓发酵；请耐心。面团应感觉蓬松，轻轻戳入后缓慢回弹。",
        durationMinutes: 120,
      },
      {
        stepNumber: 4,
        instruction:
          "Shape: Turn the risen dough onto a very lightly floured surface. Without punching down, divide into 12 equal portions (about 80 g each). Shape each portion into a tight ball: cup your hand over the dough, press lightly, and rotate in a circular motion on the counter to create surface tension. Place the buns on a parchment-lined baking tray or in a greased rectangular baking dish, arranging them close together so they will join during baking -- about 1 cm apart. Cover loosely with oiled plastic wrap and proof at 26-28°C for 45-60 minutes until the buns have doubled, are touching each other, and feel puffy to the touch.",
        instructionZh:
          "整形：将发酵好的面团倒在极轻撒面粉的工作台上。勿排气，分成12等份（每份约80克）。将每份搓成紧致圆球：手掌罩住面团，轻压，在台面上做圆周运动以产生表面张力。将面包坯摆放在铺有烘焙纸的烤盘或涂油的矩形烤皿中，紧密排列使其在烘烤时相连--间距约1厘米。松散覆盖涂油的保鲜膜，于26-28°C下醒发45-60分钟至面包坯翻倍、互相接触且触感蓬松。",
        durationMinutes: 60,
      },
      {
        stepNumber: 5,
        instruction:
          "Pipe the crosses: While the buns proof, make the cross paste: mix 75 g all-purpose flour with 5 g powdered sugar, a pinch of salt, and about 80-90 ml water -- enough to form a thick, pipeable paste that holds its shape. Transfer to a small piping bag fitted with a fine round tip (or a zip-lock bag with the corner snipped). When the buns are fully proofed, pipe a continuous line of paste across each row of buns in one direction, then pipe perpendicular lines across the columns to form crosses on each bun.",
        instructionZh:
          "挤十字面糊：面包醒发期间制作十字面糊：将75克中筋面粉与5克糖粉、一小撮盐和约80-90毫升水混合--调成能保持形状的浓稠可挤面糊。装入安有细圆嘴的小裱花袋（或剪角的食品袋）。面包坯醒发完成后，先沿每排面包挤一条连贯的横线，再沿每列挤竖线，在每只面包上形成十字。",
        durationMinutes: 10,
      },
      {
        stepNumber: 6,
        instruction:
          "Bake and glaze: Preheat oven to 200°C (390°F). Place the tray of crossed buns in the oven and immediately reduce the temperature to 180°C (350°F). Bake for 20-25 minutes until the buns are a uniform deep golden brown and the cross paste is pale and set. While the buns bake, make the glaze: heat 3 tablespoons of apricot jam with 2 tablespoons of water until dissolved, then strain through a fine sieve. As soon as the buns come out of the oven, brush them generously with the hot apricot glaze -- this gives the characteristic shiny, sticky top. Transfer to a wire rack to cool for at least 15 minutes. Serve warm, split and slathered with salted butter.",
        instructionZh:
          "烘烤与上光：预热烤箱至200°C。将画好十字的烤盘放入烤箱，立即将温度降至180°C。烘烤20-25分钟至面包均匀深金黄色且十字面糊呈浅色定型。烘烤期间制作亮面液：将3汤匙杏桃果酱与2汤匙水加热至溶解，过细筛。面包一出炉立即大量刷上热杏桃亮面液--赋予标志性闪亮微粘的顶部。移至晾架上冷却至少15分钟。趁温热食用，掰开抹上含盐黄油。",
        durationMinutes: 25,
      },
    ],
    tips: [
      "The cross paste should be thick enough to hold a defined line when piped but not so thick that it cracks or separates from the bun during baking. Test the consistency: pipe a test line on parchment -- it should hold its shape without spreading. Adjust with more flour if too thin, more water if too stiff.",
      "Traditional mixed spice for hot cross buns is a blend of cinnamon (dominant), allspice, nutmeg, and sometimes a whisper of ground cloves and ginger. You can also add the finely grated zest of one orange to the dough for a bright citrus note that complements the spices beautifully.",
      "Arranging the buns close together so they touch during baking creates the classic soft-sided pull-apart appearance. If you prefer individual buns with crust all around (and more cross paste per bun), space them 5 cm apart.",
      "Hot cross buns freeze beautifully. Freeze them fully baked and cooled, then reheat from frozen in a 160°C oven for 10-12 minutes. They emerge almost indistinguishable from freshly baked -- an excellent make-ahead strategy for Easter morning.",
    ],
    tipsZh: [
      "十字面糊应浓稠到能挤出清晰的线条但不至于太硬而烘烤时开裂或与面包分离。测试质地：在烘焙纸上挤一条测试线--应保持形状而不摊开。太稀则加面粉，太硬则加水。",
      "传统的十字面包混合香料以肉桂为主，配以多香果、肉豆蔻，有时加入极少量丁香粉和姜粉。也可在面团中加入一颗橙子的细刨皮屑，以明亮的柑橘香气美妙衬托香料。",
      "将面包坯紧密排列使其烘烤时互相接触，可形成经典的柔软侧面、可撕开的外观。若偏爱四周皆有脆壳的独立面包（且每只有更多十字面糊），则将它们间隔5厘米摆放。",
      "十字面包冷冻效果极佳。将完全烘烤并冷却的面包冷冻，需要时从冷冻状态在160°C烤箱中复热10-12分钟。成品几乎与新鲜出炉无异--是复活节早晨绝佳的提前备餐策略。",
    ],
  },
];
