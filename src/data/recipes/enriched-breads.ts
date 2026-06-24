import type { Recipe } from '../../types/recipe';
import { RecipeCategory as RC } from '../../types/recipe';

export const enrichedBreads: Recipe[] = [
  // ═══════════════════════════════════════════
  // 1. Pullman Sandwich Toast — 三明治吐司
  // ═══════════════════════════════════════════
  {
    id: 'pullman-toast',
    name: 'Pullman Sandwich Toast',
    nameZh: '三明治吐司',
    category: RC.ENRICHED_BREAD,
    description:
      'A classic square-top sandwich loaf with a fine, even crumb and a soft, tender texture. Perfect for sandwiches — slices cleanly, toasts evenly, and stays fresh for days. The tangzhong method ensures exceptional softness and shelf life.',
    descriptionZh:
      '经典的方形三明治吐司，组织细腻均匀，口感柔软蓬松。非常适合制作三明治——切片整齐、烘烤均匀、可保鲜数天。采用汤种法确保极致柔软和保质期。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 65,
    fatPercentage: 8,
    sugarPercentage: 5,
    difficulty: 'beginner',
    totalTime: 240,
    yieldDescription: '1 loaf / 1条',
    yieldDescriptionZh: '1 loaf / 1条',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 38, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 27, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 8, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 5, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 2, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.5, isFlour: false },
    ],
    tangzhong: {
      flourPercentage: 5,
      waterRatio: 5,
      instructions:
        'Whisk 5% of total flour with water at a 1:5 ratio in a small saucepan. Cook over medium-low heat, stirring constantly, until the mixture thickens to a paste-like consistency (65°C / 149°F). Transfer to a bowl, cover with plastic wrap touching the surface to prevent a skin from forming, and cool completely to room temperature before use.',
      instructionsZh:
        '取总面粉的5%与水按1:5比例在小锅中搅匀。中小火加热，不停搅拌，直至混合物浓稠呈糊状（约65°C）。转移至碗中，保鲜膜贴面覆盖防止结皮，完全冷却至室温后使用。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare tangzhong: Cook 5% of total flour with water (1:5 ratio) over medium-low heat, stirring constantly until thickened to a pudding-like consistency (~65°C / 149°F). Cover and cool completely to room temperature.',
        instructionZh:
          '制作汤种：取总面粉的5%与水（1:5比例）混合，中小火加热并不断搅拌至呈布丁状（约65°C）。盖好冷却至室温。',
        durationMinutes: 30,
        tip: 'Cool the tangzhong fully — warm tangzhong will raise dough temperature and accelerate fermentation unpredictably.',
        tipZh: '汤种必须完全冷却——温热的汤种会提高面团温度，导致发酵速度不可控。',
      },
      {
        stepNumber: 2,
        instruction:
          'Mix dough: Combine bread flour, sugar, and instant yeast in a mixing bowl. Add cooled tangzhong, water, and milk. Mix on low speed for 3 minutes until a rough dough forms, then knead on medium speed for 8–10 minutes until the dough passes the windowpane test (stretch a small piece — it should form a thin, translucent membrane without tearing).',
        instructionZh:
          '搅拌面团：将高筋面粉、糖和即发酵母放入搅拌碗。加入冷却的汤种、水和牛奶。低速搅拌3分钟至成团，转中速揉面8–10分钟，直至面团通过手套膜测试（拉伸不破、薄而透光）。',
        durationMinutes: 15,
      },
      {
        stepNumber: 3,
        instruction:
          'Add butter and salt: With the mixer running on low speed, add softened butter in small pieces followed by salt. Once incorporated, increase to medium speed and knead for 5–7 minutes until the dough is smooth, elastic, and passes the windowpane test again. The dough should feel supple and slightly tacky but not sticky.',
        instructionZh:
          '加入黄油和盐：低速搅拌，分次加入软化黄油和盐。融合后转中速揉5–7分钟，至面团光滑有弹性并再次通过手套膜测试。面团应柔软微粘但不沾手。',
        durationMinutes: 8,
        tip: 'Add butter after gluten develops — fat coats gluten strands and inhibits formation if added too early.',
        tipZh: '面筋形成后再加入黄油——过早加入油脂会包裹面筋蛋白，抑制面筋形成。',
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk fermentation: Form dough into a smooth ball, place in a lightly oiled bowl, cover with plastic wrap. Ferment at 26–28°C (79–82°F) for 60–75 minutes until doubled in size. Divide into 3 equal pieces (or 2 for a larger loaf), gently degas, round into balls. Bench rest covered for 15 minutes. Shape each piece into a log and place seam-side down in a greased Pullman pan (with lid).',
        instructionZh:
          '基础发酵：将面团滚圆，放入抹油碗中，保鲜膜覆盖。26–28°C发酵60–75分钟至体积翻倍。分割成3等份（大吐司2份），轻拍排气，滚圆。盖好松弛15分钟。将每份擀卷整形成圆柱体，接缝朝下放入抹油的加盖吐司模中。',
        durationMinutes: 90,
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof and bake: Proof the dough in the covered Pullman pan at 30–32°C (86–90°F) for 50–60 minutes until the dough reaches about 1 cm below the pan rim (roughly 80% of pan height). Slide the lid closed. Preheat oven to 190°C (375°F). Bake for 35–40 minutes until golden brown and the internal temperature reaches 93°C (200°F). Remove from pan immediately and cool on a wire rack for at least 1 hour before slicing.',
        instructionZh:
          '最终发酵和烘烤：加盖吐司模中30–32°C发酵50–60分钟，至面团距离模具边缘约1厘米（模具高度的80%左右）。滑上盖子。预热烤箱至190°C，烘烤35–40分钟至金黄，中心温度达93°C。立即脱模，在晾架上冷却至少1小时再切片。',
        durationMinutes: 100,
        tip: 'For a perfectly square loaf, the lid should be closed before baking — the dough will fill the corners during oven spring.',
        tipZh: '想要完美方形吐司，烘烤前必须盖好盖子——面团会在烤箱膨胀期填满四个角。',
      },
    ],
    tips: [
      'The windowpane test is your best indicator of proper gluten development — stretch a small piece of dough slowly; it should form a thin, translucent membrane before tearing.',
      'For a softer crust, brush the hot loaf with melted butter immediately after removing from the pan.',
      'Pullman loaves freeze beautifully — slice first, then freeze with parchment between slices for easy separation.',
    ],
    tipsZh: [
      '手套膜测试是判断面筋是否揉到位的最佳方法——慢慢拉伸一小块面团，应能形成薄而透光的膜状再破裂。',
      '想要更软的表皮，出炉脱模后立即刷一层融化黄油。',
      'Pullman吐司非常适合冷冻——先切片，每片之间垫烘焙纸冷冻，方便取用。',
    ],
  },

  // ═══════════════════════════════════════════
  // 2. Hokkaido Milk Bread — 北海道牛奶吐司
  // ═══════════════════════════════════════════
  {
    id: 'hokkaido-milk-bread',
    name: 'Hokkaido Milk Bread',
    nameZh: '北海道牛奶吐司',
    category: RC.ENRICHED_BREAD,
    description:
      'The legendary Hokkaido milk bread — impossibly soft, pillowy, and fragrant with the richness of milk, cream, and butter. The tangzhong method yields a feather-light texture that stays fresh for days. This is the gold standard of Asian enriched breads.',
    descriptionZh:
      '传奇的北海道牛奶吐司——极致柔软、蓬松如云，牛奶、奶油和黄油的浓郁香气交织。汤种法带来轻盈如羽毛的组织，数天保持柔软。这是亚洲软质面包的黄金标准。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 72,
    fatPercentage: 10,
    sugarPercentage: 8,
    difficulty: 'intermediate',
    totalTime: 300,
    yieldDescription: '1 loaf / 1条',
    yieldDescriptionZh: '1 loaf / 1条',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 15, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 42, isFlour: false },
      { id: 'cream', name: 'Heavy Cream', nameZh: '淡奶油（动物性）', percentage: 15, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 10, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 8, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.5, isFlour: false },
    ],
    tangzhong: {
      flourPercentage: 6,
      waterRatio: 5,
      instructions:
        'Combine 6% of total flour with water at a 1:5 ratio in a small saucepan. Whisk until smooth with no lumps. Cook over medium-low heat, stirring continuously with a silicone spatula, until the mixture reaches 65°C (149°F) and thickens to a pudding-like consistency with visible trail lines from the spatula. Transfer immediately to a clean bowl, cover with plastic wrap directly on the surface, and cool completely to room temperature (about 30 minutes). For best results, refrigerate overnight — cold tangzhong also helps control final dough temperature.',
      instructionsZh:
        '取总面粉的6%与水按1:5比例在小锅中混合，搅拌至无颗粒顺滑。中小火加热，用硅胶刮刀不停搅拌，至混合物达65°C并浓稠如布丁状、刮刀划过留下明显痕迹时即可。立即转移至干净碗中，保鲜膜贴面覆盖，完全冷却至室温（约30分钟）。最佳做法是冷藏过夜——冷藏的汤种也有助于控制最终面团温度。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare tangzhong: Whisk 6% of total flour with water (1:5 ratio). Cook over medium-low heat, stirring constantly, until thickened (65°C / 149°F). The mixture should leave ribbon trails when the spatula is lifted. Cover with plastic wrap touching the surface and cool completely. For best results, refrigerate for at least 2 hours or overnight.',
        instructionZh:
          '制作汤种：将总面粉的6%与水（1:5比例）搅匀。中小火加热，不停搅拌，至浓稠（65°C）。拉起刮刀时混合物应呈带状流下。保鲜膜贴面覆盖，完全冷却。最佳做法是冷藏至少2小时或隔夜。',
        durationMinutes: 35,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix initial dough: In the bowl of a stand mixer, combine bread flour, sugar, and instant yeast. Add cooled tangzhong, water, milk, and heavy cream. Mix with the dough hook on low speed (speed 2) for 2–3 minutes until ingredients come together into a shaggy dough. Increase to medium speed (speed 4–5) and knead for 6–8 minutes until the dough is smooth and starts pulling away from the bowl sides.',
        instructionZh:
          '搅拌初面团：在厨师机搅拌碗中混合高筋面粉、糖和即发酵母。加入冷却的汤种、水、牛奶和淡奶油。用面团勾低速（2档）搅拌2–3分钟至材料成团。转中速（4–5档）揉6–8分钟至面团光滑并开始离缸。',
        durationMinutes: 12,
      },
      {
        stepNumber: 3,
        instruction:
          'Incorporate butter and salt: Add softened butter in 2–3 additions with the mixer running on low speed, followed by salt. Once the butter is fully absorbed (the dough may look broken temporarily — this is normal), increase to medium speed and knead for 8–10 minutes. The dough should be very smooth, supple, and pass the windowpane test with an exceptionally thin, strong membrane. Final dough temperature should be 24–26°C (75–79°F).',
        instructionZh:
          '加入黄油和盐：低速运转时分2–3次加入软化黄油，然后加盐。黄油完全吸收后（面团暂时看起来粗糙是正常现象），转中速揉8–10分钟。面团应非常光滑柔软，通过手套膜测试时形成极薄而坚韧的膜。最终面团温度应在24–26°C。',
        durationMinutes: 12,
        tip: 'The heavy cream and butter make this a very rich dough — it requires more kneading than lean doughs to achieve full gluten development. Be patient.',
        tipZh: '淡奶油和黄油使这款面团非常富有——比瘦面团需要更长时间揉面才能达到充分的面筋发展。要有耐心。',
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk fermentation: Shape dough into a smooth ball, place in a lightly oiled bowl, cover. Ferment at 26–28°C (79–82°F) for 60–75 minutes until doubled. Gently degas. Divide into 3 equal pieces (use a scale for accuracy). Round each piece, cover, and bench rest for 15–20 minutes. Shape each piece: flatten into an oval, fold the sides toward the center, then roll up tightly from the short end into a log. Place 3 logs seam-side down in a greased loaf pan.',
        instructionZh:
          '基础发酵：面团滚圆，放入抹油碗中盖好。26–28°C发酵60–75分钟至两倍大。轻拍排气，分割成3等份（用秤确保准确）。每份滚圆，盖好松弛15–20分钟。整形：将每份擀成椭圆形，两侧向中间折叠，从短边紧实卷起成圆柱体。3个面卷接缝朝下放入抹油的吐司模。',
        durationMinutes: 95,
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof: Proof at 30–32°C (86–90°F) with humidity (cover loosely with oiled plastic wrap) for 60–75 minutes until the dough crowns about 2–3 cm above the pan rim. The surface should look puffy and jiggle slightly when the pan is gently shaken.',
        instructionZh:
          '最终发酵：30–32°C、保持湿度（用抹油保鲜膜松松覆盖）发酵60–75分钟，至面团高出模具边缘2–3厘米。表面看起来蓬松饱满，轻摇模具时微微颤动。',
        durationMinutes: 70,
        tip: 'If proofing without a lid (mountain-top style), proof until the highest point reaches 1.5–2 cm above the rim for a dramatic crown.',
        tipZh: '如果做不带盖的山形吐司，发酵至最高点高出模具边缘1.5–2厘米，可获得漂亮的山峰造型。',
      },
      {
        stepNumber: 6,
        instruction:
          'Bake and finish: Preheat oven to 175°C (350°F). For a flat-top loaf, cover with the Pullman lid. Bake for 30–35 minutes until golden brown and the internal temperature reaches 93°C (200°F). If baking without a lid, tent with foil after 15 minutes to prevent over-browning. Remove from pan immediately, brush the top with melted butter while hot. Cool on a wire rack for at least 90 minutes before slicing — the crumb needs time to set.',
        instructionZh:
          '烘烤和完成：预热烤箱至175°C。做平顶吐司盖上盖子。烘烤30–35分钟至金黄色，中心温度达93°C。如果不盖盖子，15分钟后盖锡纸防止过度上色。立即脱模，趁热在表面刷融化黄油。在晾架上冷却至少90分钟再切片——内部组织需要时间定型。',
        durationMinutes: 80,
        tip: 'Let the bread cool completely before slicing — cutting into warm enriched bread compresses the crumb and creates a gummy texture.',
        tipZh: '必须彻底冷却再切片——趁热切软质面包会压缩组织，产生黏牙口感。',
      },
    ],
    tips: [
      'Use high-quality heavy cream with at least 35% milk fat — the richness makes a noticeable difference in both flavor and texture.',
      'The dough is very sticky during mixing due to the high enrichment; resist adding extra flour — it will come together with proper kneading.',
      'Warm your milk and cream to about 30°C (86°F) before mixing to jump-start yeast activity without shocking it.',
      'This bread makes incredible French toast after day 2 — the enriched crumb soaks up custard beautifully.',
    ],
    tipsZh: [
      '使用乳脂含量35%以上的优质淡奶油——浓郁度对口感和风味的影响非常明显。',
      '由于高油脂含量，搅拌时面团会很黏——不要额外加粉，充分揉面后自然会变得光滑。',
      '将牛奶和淡奶油加热至约30°C再使用，可温和激活酵母而不会烫死。',
      '这款面包放置两天后做法式吐司堪称一绝——丰富的油脂组织能完美吸收蛋奶液。',
    ],
  },

  // ═══════════════════════════════════════════
  // 3. Japanese Shokupan — 日式生吐司
  // ═══════════════════════════════════════════
  {
    id: 'shokupan',
    name: 'Japanese Shokupan',
    nameZh: '日式生吐司',
    category: RC.ENRICHED_BREAD,
    description:
      'Shokupan — literally "fresh bread" — is the quintessential Japanese milk loaf. Milder and more delicate than Hokkaido milk bread, it features a whisper of honey that adds a subtle floral sweetness. The crumb is ethereally soft with a thin, tender crust that practically melts on the tongue.',
    descriptionZh:
      '生吐司——日式牛奶面包的精髓。比北海道吐司更加温润细腻，蜂蜜的加入带来若有若无的花香甜美。组织如云朵般轻柔，表皮薄嫩，入口即化。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 70,
    fatPercentage: 8,
    sugarPercentage: 7,
    difficulty: 'intermediate',
    totalTime: 300,
    yieldDescription: '1 loaf / 1条',
    yieldDescriptionZh: '1 loaf / 1条',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 55, isFlour: false },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 5, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 8, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 7, isFlour: false },
      { id: 'honey', name: 'Honey', nameZh: '蜂蜜', percentage: 3, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.5, isFlour: false },
    ],
    tangzhong: {
      flourPercentage: 5,
      waterRatio: 5,
      instructions:
        'Combine 5% of total flour with water at a 1:5 ratio. Whisk until smooth. Heat over medium-low, stirring constantly with a silicone spatula, until the mixture thickens and reaches 65°C (149°F) — it should hold its shape when the spatula is drawn through. Transfer to a bowl, cover with plastic wrap directly on the surface, and cool completely. For the best shokupan texture, chill the tangzhong for at least 4 hours or overnight.',
      instructionsZh:
        '取总面粉的5%与水按1:5比例混合，搅拌至顺滑。中小火加热，用硅胶刮刀不停搅拌，至混合物浓稠并达65°C——刮刀划过时应能留下清晰痕迹。转移至碗中，保鲜膜贴面覆盖，完全冷却。为获得最佳生吐司口感，冷藏至少4小时或隔夜。',
    },
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare tangzhong with 5% of total flour and water at 1:5 ratio. Cook to 65°C (149°F), stirring constantly until thickened. Cover with plastic wrap directly on the surface and cool completely — refrigerate for at least 4 hours for the best result.',
        instructionZh:
          '取总面粉的5%与水按1:5比例制作汤种。加热至65°C，不停搅拌至浓稠。保鲜膜贴面覆盖，完全冷却——最佳冷藏至少4小时。',
        durationMinutes: 20,
      },
      {
        stepNumber: 2,
        instruction:
          'Warm the milk to about 30°C (86°F). In a small bowl, dissolve honey in the warm milk. In the stand mixer bowl, combine bread flour, sugar, and instant yeast. Add the tangzhong, honey-milk mixture, and water. Mix with dough hook on low speed for 3 minutes until a rough dough forms, then knead on medium speed for 7–9 minutes until the dough is smooth and elastic.',
        instructionZh:
          '牛奶加热至约30°C。小碗中将蜂蜜溶解于温牛奶中。厨师机搅拌碗中混合高筋面粉、糖和即发酵母。加入汤种、蜂蜜牛奶液和水。用面团勾低速搅拌3分钟至成团，转中速揉7–9分钟至面团光滑有弹性。',
        durationMinutes: 14,
      },
      {
        stepNumber: 3,
        instruction:
          'Add softened butter and salt. Mix on low speed until the butter is absorbed (the dough will temporarily become slick and messy — do not add flour). Once absorbed, increase to medium speed and knead for 7–9 minutes until the dough is exceptionally smooth, glossy, and passes a strong windowpane test. The honey makes this dough slightly stickier than standard enriched dough — this is normal.',
        instructionZh:
          '加入软化黄油和盐。低速搅拌至黄油吸收（面团暂时会变得油滑凌乱——不要加粉）。吸收后转中速揉7–9分钟，至面团异常光滑有光泽，通过强韧的手套膜测试。蜂蜜使这款面团比普通软质面团更黏——属正常现象。',
        durationMinutes: 11,
        tip: 'Honey is hygroscopic (attracts moisture) — it contributes to shokupan\'s exceptional softness and extended shelf life.',
        tipZh: '蜂蜜具有吸湿性——这是生吐司格外柔软且保质期长的重要原因。',
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk fermentation: Shape into a smooth ball, place in a lightly oiled bowl, cover. Ferment at 26–28°C (79–82°F) for 70–90 minutes until doubled in volume (the honey will slightly slow fermentation — this is expected). Gently degas, divide into 3 equal pieces by weight. Round each piece, cover, and bench rest for 15–20 minutes.',
        instructionZh:
          '基础发酵：滚圆面团，放入抹油碗中盖好。26–28°C发酵70–90分钟至体积翻倍（蜂蜜会略微减缓发酵速度——属正常现象）。轻拍排气，按重量分割成3等份。每份滚圆，盖好松弛15–20分钟。',
        durationMinutes: 105,
      },
      {
        stepNumber: 5,
        instruction:
          'First shaping: Flatten each ball into an oval, fold the left and right sides to the center (like a letter), then roll from the top down into a tight cylinder. Cover and rest for 10 minutes. Second shaping: repeat the same process — flatten, fold, and roll tightly. This double-shaping technique creates the characteristic fine, even crumb of shokupan. Place the 3 rolls seam-side down in a greased loaf pan, evenly spaced.',
        instructionZh:
          '第一次整形：将每个面团擀成椭圆形，左右两侧向中间折叠（如折信纸），从上往下紧实卷成圆柱。盖好松弛10分钟。第二次整形：重复相同操作——擀开、折叠、卷紧。这种二次擀卷手法造就生吐司标志性的细腻均匀组织。3个面卷接缝朝下，均匀间隔放入抹油的吐司模。',
        durationMinutes: 25,
        tip: 'Double-shaping (两次擀卷) is the secret to shokupan\'s signature fine crumb — it aligns gluten strands for a tender, pull-apart texture.',
        tipZh: '两次擀卷是生吐司细腻组织的秘诀——可使面筋排列整齐，产生可撕拉的柔软口感。',
      },
      {
        stepNumber: 6,
        instruction:
          'Final proof and bake: Proof at 30–32°C (86–90°F) with humidity for 55–70 minutes until the dough crowns about 2 cm above the pan rim (flat-top: proof to 80% of pan height and close lid). Preheat oven to 175°C (350°F). Bake for 32–38 minutes. For a flat top, lid on throughout. For a mountain top, tent with foil after 18 minutes. Internal temperature should reach 93°C (200°F). Remove from pan immediately and cool on a rack for 2 hours before slicing.',
        instructionZh:
          '最终发酵和烘烤：30–32°C潮湿环境发酵55–70分钟，至面团高出模具边缘约2厘米（平顶：发酵至模具80%高度后盖盖子）。预热烤箱至175°C。烘烤32–38分钟。平顶全程盖盖子；山形则在18分钟后盖锡纸。中心温度达93°C。立即脱模，晾架上冷却2小时再切片。',
        durationMinutes: 130,
        tip: 'Shokupan tastes best the day after baking — the crumb fully sets and the honey-milk flavor deepens overnight.',
        tipZh: '生吐司隔天食用风味最佳——组织充分定型，蜂蜜与牛奶的风味隔夜后更加融合醇厚。',
      },
    ],
    tips: [
      'Use a mild honey (acacia or clover) rather than a strong varietal — the goal is subtle floral notes, not a dominant honey flavor.',
      'The double-shaping technique is non-negotiable for authentic shokupan texture — skipping it results in a coarser, less tender crumb.',
      'This bread is particularly wonderful eaten fresh and untoasted, simply torn by hand to appreciate its texture.',
    ],
    tipsZh: [
      '选用清淡的蜂蜜（洋槐蜜或苜蓿蜜），避免风味过强的品种——目标是若有若无的花香，而非浓郁的蜂蜜味。',
      '两次擀卷手法是正宗生吐司口感的关键——跳过此步骤会导致组织粗糙、不够细腻。',
      '这款面包最妙的吃法是新鲜手撕不烤，直接感受其组织的柔软质感。',
    ],
  },

  // ═══════════════════════════════════════════
  // 4. Brioche — 布里欧修
  // ═══════════════════════════════════════════
  {
    id: 'brioche',
    name: 'Brioche',
    nameZh: '布里欧修',
    category: RC.ENRICHED_BREAD,
    description:
      'The queen of enriched breads — brioche is extraordinarily rich with butter and eggs, walking the line between bread and pastry. With a deep golden crumb, an impossibly tender texture, and a buttery aroma that fills the kitchen, this is the ultimate luxury loaf. The overnight cold fermentation develops complex, almost nutty flavors.',
    descriptionZh:
      '软质面包中的女王——布里欧修黄油和鸡蛋含量极高，介于面包与糕点之间。组织呈深金色，口感极致柔软，黄油香气弥漫整个厨房。隔夜冷藏发酵发展出复杂、近乎坚果的香气。这是奢华面包的巅峰之作。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 55,
    fatPercentage: 50,
    sugarPercentage: 10,
    eggPercentage: 20,
    difficulty: 'advanced',
    totalTime: 900,
    yieldDescription: '1 loaf / 1条',
    yieldDescriptionZh: '1 loaf / 1条',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'eggs', name: 'Eggs', nameZh: '鸡蛋', percentage: 40, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 50, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 10, isFlour: false },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 10, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.5, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 1, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Prepare ingredients: All ingredients must be cold — chill the bowl and dough hook in the refrigerator for 15 minutes. Cut butter into 1 cm cubes and keep refrigerated until use. Whisk eggs together. The key to brioche is keeping everything cold to prevent the butter from melting during mixing.',
        instructionZh:
          '准备材料：所有材料必须冰冷——搅拌碗和面团勾冷藏15分钟。黄油切1厘米小方块，使用前保持冷藏。鸡蛋打散备用。布里欧修的关键是全程保持低温，防止搅拌过程中黄油融化。',
        durationMinutes: 20,
        tip: 'Cold butter = successful brioche. If the butter starts to melt during mixing, the dough will become greasy and fail to develop proper structure.',
        tipZh: '冷黄油 = 成功的布里欧修。如果搅拌中黄油开始融化，面团会变得油腻且无法形成正确结构。',
      },
      {
        stepNumber: 2,
        instruction:
          'Mix initial dough: In the chilled mixer bowl, combine bread flour, sugar, instant yeast, and salt. Add the whisked eggs and cold milk. Mix with the dough hook on low speed for 4–5 minutes until a stiff, rough dough forms. Scrape down the bowl. Knead on medium speed for 8–10 minutes until the dough becomes smooth, elastic, and completely pulls away from the bowl sides. The dough should pass a preliminary windowpane test at this stage (before adding butter).',
        instructionZh:
          '搅拌初始面团：在冷藏过的搅拌碗中混合高筋面粉、糖、即发酵母和盐。加入打散的鸡蛋和冷牛奶。面团勾低速搅拌4–5分钟至形成粗糙的硬面团。刮缸。中速揉8–10分钟至面团光滑有弹性，完全离缸。在加入黄油前，面团应能通过初步的手套膜测试。',
        durationMinutes: 15,
      },
      {
        stepNumber: 3,
        instruction:
          'Incorporate butter: This is the most critical step. With the mixer on medium-low speed, add the cold butter cubes one at a time, waiting until each piece is nearly absorbed before adding the next. This process takes 10–15 minutes. The dough will break down and look separated after the first few additions — this is normal and expected. Keep mixing; it will eventually come back together into a silky, glossy dough. Once all butter is incorporated, increase to medium speed and knead for 5–7 minutes until the dough is extremely smooth, shiny, and passes a strong windowpane test. The dough will be very soft and slightly sticky but should hold its shape.',
        instructionZh:
          '加入黄油：最关键的一步。中低速搅拌，一次只加一块冷黄油，等每块几乎完全吸收后再加下一块。此过程需要10–15分钟。加入头几块黄油后面团会分离破碎——这是完全正常的现象。继续搅拌；最终会重新融合成丝绸般光泽的面团。所有黄油吸收后，转中速揉5–7分钟，至面团极度光滑、有光泽，通过强韧的手套膜测试。面团非常柔软微黏但能保持形状。',
        durationMinutes: 20,
        tip: 'Patience is essential. The dough will look like a broken mess after adding the first few butter cubes. Do not panic. Do not add flour. Keep mixing and it will transform.',
        tipZh: '耐心是关键。加入头几块黄油后面团看起来像一塌糊涂的烂泥。不要慌。不要加粉。继续搅拌，它会蜕变。',
      },
      {
        stepNumber: 4,
        instruction:
          'Bulk fermentation: Transfer the dough to a lightly oiled bowl. Cover tightly with plastic wrap. Let ferment at room temperature (22–24°C / 72–75°F) for 60–90 minutes until noticeably puffy but not necessarily doubled — the high butter content weighs down the dough, so it will not rise as dramatically as lean doughs. Gently degas by folding the edges to the center. Cover tightly and refrigerate overnight (12–16 hours). The cold fermentation is essential for flavor development and makes the dough much easier to handle.',
        instructionZh:
          '基础发酵：将面团转移至抹油碗中，保鲜膜盖紧。室温（22–24°C）发酵60–90分钟至明显膨胀但不必翻倍——高黄油含量会拉坠面团，所以膨胀不会像瘦面团那样显著。轻轻排气，边缘向中间折叠。盖紧后冷藏隔夜（12–16小时）。冷藏发酵是风味发展的关键，也使面团更容易操作。',
        durationMinutes: 810,
        tip: 'The overnight cold fermentation is not optional for brioche — it develops the complex, nutty, almost cheese-like flavor notes that define proper brioche.',
        tipZh: '布里欧修的隔夜冷藏发酵不可省略——它发展出复杂、坚果般、近乎奶酪的风味层次，这是正宗布里欧修的标志。',
      },
      {
        stepNumber: 5,
        instruction:
          'Shape and proof: Remove the chilled dough from the refrigerator. It will be firm and easy to handle. Divide into 8 equal pieces (traditional brioche à tête uses a fluted mold; for a loaf, divide into 3 or 4 pieces). Shape each piece tightly into a ball. For a loaf pan: arrange balls in a greased 9x5 inch pan. Cover loosely and proof at 25–26°C (77–79°F) for 2–2.5 hours. The cold dough proofs slowly — be patient. The dough should nearly triple in volume and look very puffy and jiggly.',
        instructionZh:
          '整形和发酵：取出冷藏面团，此时面团硬挺容易操作。分割成8等份（传统布里欧修小头面包用花边模具；做吐司则分3或4份）。每份紧实滚圆。吐司模：将面团球排列在抹油的9x5寸模具中。松松盖好，25–26°C发酵2–2.5小时。冷面团发酵较慢——要有耐心。面团应膨胀近三倍，看起来非常蓬松且有晃动感。',
        durationMinutes: 150,
      },
      {
        stepNumber: 6,
        instruction:
          'Egg wash and bake: Preheat oven to 175°C (350°F). Gently brush the proofed brioche with egg wash (1 egg yolk + 1 tablespoon milk, strained). Be careful not to deflate the delicate dough. Bake for 30–35 minutes until deeply golden brown — brioche should be darker than regular bread; a rich mahogany color indicates proper caramelization of the egg and butter. The internal temperature should reach 88–90°C (190–194°F). If the top browns too quickly, tent loosely with foil after 20 minutes. Cool in the pan for 5 minutes, then transfer to a wire rack. Cool for at least 1 hour before slicing.',
        instructionZh:
          '刷蛋液和烘烤：预热烤箱至175°C。轻轻在发酵好的布里欧修表面刷蛋液（1个蛋黄+1汤匙牛奶，过筛）。小心不要弄瘪娇嫩的面团。烘烤30–35分钟至深金黄色——布里欧修应比普通面包颜色更深；浓郁的桃花心木色说明蛋和黄油充分焦糖化。中心温度应达88–90°C。如果表面上色太快，20分钟后盖锡纸。模具中冷却5分钟，再转移到晾架。至少冷却1小时再切片。',
        durationMinutes: 40,
        tip: 'A dark, rich bake is desirable for brioche — the caramelized egg-butter crust is one of its greatest pleasures. Do not underbake.',
        tipZh: '布里欧修理想的烘烤成色是偏深的——焦糖化的蛋液黄油表皮是其最诱人之处。不要烤得太浅。',
      },
    ],
    tips: [
      'Use the best butter you can find — European-style butter (82–84% butterfat) produces a noticeably richer, more flavorful brioche than standard American butter.',
      'If at any point during mixing the dough temperature exceeds 24°C (75°F), stop and chill the bowl in the freezer for 10 minutes before continuing.',
      'Day-old brioche makes the world\'s best French toast and bread pudding — its richness soaks up custard like a dream.',
      'For brioche à tête (traditional fluted shape), use dedicated brioche molds and shape the dough into a large ball with a smaller ball on top.',
    ],
    tipsZh: [
      '选用最好的黄油——欧式黄油（乳脂82–84%）做出的布里欧修比普通黄油明显更浓郁、风味更佳。',
      '搅拌过程中如果面团温度超过24°C，立即停止，将搅拌碗放入冷冻室冷却10分钟后再继续。',
      '隔夜的布里欧修做成的法式吐司和面包布丁堪称一绝——丰富的油脂能完美吸收蛋奶液。',
      '制作传统布里欧修小头面包时，需使用专用花边模具，面团整形为一个大球上面放一个小球。',
    ],
  },

  // ═══════════════════════════════════════════
  // 5. Challah — 哈拉面包
  // ═══════════════════════════════════════════
  {
    id: 'challah',
    name: 'Challah',
    nameZh: '哈拉面包',
    category: RC.ENRICHED_BREAD,
    description:
      'The beautiful braided Jewish Sabbath bread, enriched with eggs and oil rather than butter. Challah has a deep golden color, a soft, slightly sweet crumb, and a tender crust. Its distinctive braided shape makes it a stunning centerpiece — and tearing into the strands is one of life\'s simple pleasures.',
    descriptionZh:
      '美丽的辫子形犹太安息日面包，以鸡蛋和植物油增添浓郁而非黄油。哈拉面包色泽金黄，组织柔软微甜，表皮柔嫩。标志性的辫子造型使其成为惊艳的餐桌焦点——手撕面包辫是最简单的生活乐趣之一。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 55,
    fatPercentage: 8,
    sugarPercentage: 8,
    eggPercentage: 15,
    difficulty: 'intermediate',
    totalTime: 240,
    yieldDescription: '1 braided loaf / 1个辫子面包',
    yieldDescriptionZh: '1 braided loaf / 1个辫子面包',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 20, isFlour: false },
      { id: 'eggs', name: 'Eggs', nameZh: '鸡蛋', percentage: 35, isFlour: false },
      { id: 'oil', name: 'Vegetable Oil', nameZh: '植物油', percentage: 8, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 8, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.5, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.8, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Bloom the yeast: Warm the water to about 35°C (95°F). Add a pinch of sugar and the instant yeast. Let stand for 5–8 minutes until foamy — this confirms the yeast is active. Whisk the eggs with the remaining sugar and oil until well combined.',
        instructionZh:
          '激活酵母：将水加热至约35°C，加入一小撮糖和即发酵母。静置5–8分钟至起泡——确认酵母活跃。将鸡蛋与剩余的糖和油搅拌均匀。',
        durationMinutes: 10,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix dough: In a large bowl, combine bread flour and salt. Make a well in the center and pour in the yeast mixture and the egg-oil mixture. Mix with a wooden spoon or your hands until a shaggy dough forms. Turn out onto a lightly floured surface and knead by hand for 10–12 minutes, or use a stand mixer with the dough hook on medium speed for 6–8 minutes. The dough should be smooth, supple, and only slightly tacky. Challah dough should be firmer than brioche — it needs to hold its shape during braiding.',
        instructionZh:
          '搅拌面团：大碗中混合高筋面粉和盐。中间挖一个坑，倒入酵母液和蛋油混合物。用木勺或手搅拌至成粗糙面团。倒在撒薄粉的台面上手揉10–12分钟，或厨师机面团勾中速揉6–8分钟。面团应光滑柔软，微黏但不粘手。哈拉面团应比布里欧修硬挺——需要在编辫子时保持形状。',
        durationMinutes: 15,
        tip: 'Challah dough should be smooth and firm — if it feels too soft or sticky, it may spread during proofing and lose the braided definition.',
        tipZh: '哈拉面团应光滑挺实——如果感觉太软或太黏，发酵时可能摊开变形，失去辫子造型。',
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk fermentation: Place the dough in a lightly oiled bowl, turning to coat all sides. Cover with plastic wrap. Ferment at 24–26°C (75–79°F) for 90–120 minutes until doubled in size. Gently punch down to degas. Divide the dough: for a 3-strand braid, divide into 3 equal pieces; for a 4-strand braid, divide into 4; for a stunning 6-strand braid, divide into 6. Use a scale for accuracy. Round each piece, cover, and bench rest for 10–15 minutes.',
        instructionZh:
          '基础发酵：面团放入抹油碗中，转一圈使各面沾油。保鲜膜覆盖。24–26°C发酵90–120分钟至体积翻倍。轻压排气。分割面团：三股辫分3等份；四股辫分4等份；华丽的六股辫分6等份。用秤确保准确。每份滚圆，盖好松弛10–15分钟。',
        durationMinutes: 110,
      },
      {
        stepNumber: 4,
        instruction:
          'Braid the challah: Roll each piece into a rope about 30–35 cm (12–14 inches) long, tapering the ends slightly. For a 3-strand braid: pinch the three ropes together at one end, then braid as you would hair — left over center, right over center, repeat. Tuck both ends underneath. For a 6-strand braid: arrange strands, take the far-right strand over to the far left, then take the second-from-left strand over to the far right; repeat this pattern. Pinch ends and tuck under. Transfer the braided loaf to a parchment-lined baking sheet.',
        instructionZh:
          '编辫子：将每份搓成约30–35厘米长的面条，两端略细。三股辫：将三根面条的一端捏在一起，像编头发一样——左边过中间，右边过中间，重复。两端收入底部。六股辫：排列面条，最右边的跨到最左边，然后左边第二根跨到最右边；重复此规律。两端捏紧收入底部。将编好的面包转移到铺有烘焙纸的烤盘上。',
        durationMinutes: 20,
        tip: 'Keep the ropes evenly thick along their entire length. Uneven ropes produce an uneven braid. Work quickly but gently to avoid tearing the dough.',
        tipZh: '保持每根面条从头到尾粗细均匀。粗细不一会导致辫子不均匀。动作要快但轻，避免扯断面团。',
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof and bake: Cover the braided challah loosely with oiled plastic wrap. Proof at 25–27°C (77–81°F) for 60–80 minutes until noticeably puffy and nearly doubled — when gently pressed, the dough should spring back slowly, leaving a slight indentation. Preheat oven to 180°C (350°F). Brush the loaf generously with egg wash (1 egg yolk + 1 tablespoon water, beaten and strained). Optional: sprinkle with sesame seeds or poppy seeds. Bake for 25–30 minutes until deeply golden brown and the internal temperature reaches 90°C (194°F). The braid should sound hollow when tapped on the bottom. Cool completely on a wire rack before slicing.',
        instructionZh:
          '最终发酵和烘烤：用抹油保鲜膜松松覆盖编好的哈拉面包。25–27°C发酵60–80分钟至明显膨大近乎翻倍——轻压时面团应慢慢回弹，留下微凹痕迹。预热烤箱至180°C。面包上大量刷蛋液（1个蛋黄+1汤匙水，打匀过筛）。可选：撒芝麻或罂粟籽。烘烤25–30分钟至深金黄色，中心温度达90°C。敲击面包底部应有空心声。晾架上完全冷却再切片。',
        durationMinutes: 100,
        tip: 'A generous egg wash applied just before baking gives challah its signature glossy, mahogany crust. Don\'t be shy — brush every exposed strand thoroughly.',
        tipZh: '入炉前大量刷蛋液赋予哈拉面包标志性的光亮、桃花心木色表皮。不要吝啬——每一根暴露的面条都要刷到。',
      },
    ],
    tips: [
      'For extra-rich challah (popular for holidays), increase the egg content and replace water with additional egg — this is called "water challah" vs "egg challah."',
      'If the dough resists rolling into ropes (springs back), let it rest for 5 minutes to relax the gluten, then try again.',
      'Challah freezes exceptionally well — double-wrap in plastic and foil, freeze for up to 3 months. Thaw at room temperature and refresh in a 150°C oven for 5–10 minutes.',
    ],
    tipsZh: [
      '节日版更浓郁哈拉：增加鸡蛋用量，用水换成蛋液——即"水哈拉"与"蛋哈拉"的区别。',
      '如果面团搓条时回缩严重，让它静置5分钟松弛面筋，再重新尝试。',
      '哈拉冷冻保存效果极佳——双层包裹保鲜膜和锡纸，可冷冻保存3个月。室温解冻，150°C烤箱回温5–10分钟即可。',
    ],
  },

  // ═══════════════════════════════════════════
  // 6. Parker House Rolls — 帕克晚餐卷
  // ═══════════════════════════════════════════
  {
    id: 'parker-house-rolls',
    name: 'Parker House Rolls',
    nameZh: '帕克晚餐卷',
    category: RC.ENRICHED_BREAD,
    description:
      'The iconic American dinner roll — soft, buttery, and slightly sweet with a distinctive folded shape and a burnished golden top. Legend has it these were invented at Boston\'s Parker House Hotel in the 1870s. Pulling apart the buttery layers at the dinner table is one of the great pleasures of a holiday meal.',
    descriptionZh:
      '标志性的美式晚餐卷——柔软、黄油香浓、微甜，独特的折叠造型和金灿灿的表面。传说1870年代诞生于波士顿帕克豪斯酒店。餐桌上手撕开层层黄油面包卷，是节日聚餐最幸福的时刻之一。',
    bakerSystem: 'flour-anchor',
    defaultAnchorWeight: 500,
    anchorLabel: 'Total Flour',
    anchorLabelZh: '总面粉',
    hydration: 62,
    fatPercentage: 12,
    sugarPercentage: 8,
    difficulty: 'beginner',
    totalTime: 180,
    yieldDescription: '12 rolls / 12个卷',
    yieldDescriptionZh: '12 rolls / 12个卷',
    ingredients: [
      { id: 'bread-flour', name: 'Bread Flour', nameZh: '高筋面粉', percentage: 100, isFlour: true },
      { id: 'milk', name: 'Whole Milk', nameZh: '全脂牛奶', percentage: 45, isFlour: false },
      { id: 'water', name: 'Water', nameZh: '水', percentage: 10, isFlour: false },
      { id: 'butter', name: 'Unsalted Butter', nameZh: '无盐黄油', percentage: 12, isFlour: false },
      { id: 'sugar', name: 'Sugar', nameZh: '细砂糖', percentage: 8, isFlour: false },
      { id: 'salt', name: 'Sea Salt', nameZh: '海盐', percentage: 1.8, isFlour: false },
      { id: 'yeast', name: 'Instant Yeast', nameZh: '即发酵母', percentage: 0.6, isFlour: false },
    ],
    steps: [
      {
        stepNumber: 1,
        instruction:
          'Warm the milk and water together to about 35°C (95°F) — lukewarm to the touch, not hot. Add the sugar and stir to dissolve. Sprinkle the instant yeast over the surface and let stand for 5–8 minutes until foamy. Melt 30g of the butter (about half of the total 12%) and set aside to cool slightly; keep the remaining butter soft for shaping.',
        instructionZh:
          '将牛奶和水一起加热至约35°C——手触微温不烫。加入糖搅拌溶解。表面撒入即发酵母，静置5–8分钟至起泡。融化30克黄油（占总黄油12%的一半），稍微冷却备用；剩余黄油保持软化用于整形。',
        durationMinutes: 12,
      },
      {
        stepNumber: 2,
        instruction:
          'Mix dough: In a stand mixer bowl, combine bread flour and salt. Add the yeast-milk mixture and the melted cooled butter. Mix with the dough hook on low speed for 2 minutes until a rough dough forms, then knead on medium speed for 6–8 minutes. The dough should be smooth, soft, and slightly tacky. It should clear the bowl sides but stick slightly to the bottom. Alternatively, knead by hand on a lightly floured surface for 10–12 minutes.',
        instructionZh:
          '搅拌面团：厨师机搅拌碗中混合高筋面粉和盐。加入酵母牛奶混合液和融化冷却的黄油。面团勾低速搅拌2分钟成团，转中速揉6–8分钟。面团应光滑柔软，微黏但不粘手。应能离缸但底部微粘。也可手揉：撒薄粉台面上揉10–12分钟。',
        durationMinutes: 12,
      },
      {
        stepNumber: 3,
        instruction:
          'Bulk fermentation: Shape dough into a smooth ball and place in a lightly oiled bowl, turning to coat. Cover with plastic wrap. Ferment at 24–26°C (75–79°F) for 60–75 minutes until doubled in size. The dough should feel light and airy.',
        instructionZh:
          '基础发酵：面团滚圆，放入抹油碗中，转一圈使表面沾油。保鲜膜覆盖。24–26°C发酵60–75分钟至体积翻倍。面团应感觉轻盈充满气体。',
        durationMinutes: 70,
      },
      {
        stepNumber: 4,
        instruction:
          'Shape the rolls: Gently punch down the dough and turn onto a lightly floured surface. Roll out into a rectangle about 30 x 40 cm (12 x 16 inches) and about 1 cm (1/2 inch) thick. Brush the entire surface generously with the remaining softened butter. Using a sharp knife or pizza cutter, cut the dough in half lengthwise, then cut each half crosswise into 6 strips (12 total). Fold each strip in half loosely, buttered side in, and place folded-side down in a buttered 23 x 33 cm (9 x 13 inch) baking pan. Arrange in 4 rows of 3, leaving a small gap between each roll for expansion.',
        instructionZh:
          '整形：轻压排气，倒在撒薄粉的台面上。擀成约30 x 40厘米的长方形，厚约1厘米。在整个表面大量涂抹剩余软化黄油。用锋利的刀或披萨轮刀纵向切成两半，每半横向切成6条（共12条）。每条对折（黄油面朝内），折叠面朝下放入抹油的23 x 33厘米烤盘中。排列为4行3列，每卷之间留小缝隙供膨胀。',
        durationMinutes: 15,
        tip: 'Brushing the dough with butter before folding creates the signature pull-apart layers — each roll will separate along buttery seams when torn.',
        tipZh: '折叠前涂抹黄油创造出标志性的可撕拉层次——每卷撕开时都会沿黄油层分离。',
      },
      {
        stepNumber: 5,
        instruction:
          'Final proof and bake: Cover the pan loosely with oiled plastic wrap. Proof at 26–28°C (79–82°F) for 40–55 minutes until the rolls have nearly doubled and are touching each other — they should look puffy and fill most of the pan. Preheat oven to 180°C (350°F). Brush the tops of the rolls with melted butter or egg wash (1 egg + 1 tablespoon milk) for a glossy finish. Bake for 20–25 minutes until deeply golden brown on top. Immediately after removing from the oven, brush generously with melted butter. Serve warm.',
        instructionZh:
          '最终发酵和烘烤：抹油保鲜膜松松覆盖烤盘。26–28°C发酵40–55分钟，至面包卷接近翻倍并互相接触——应看起来蓬松且几乎填满烤盘。预热烤箱至180°C。面包卷表面刷融化黄油或蛋液（1个蛋+1汤匙牛奶）以获得光亮效果。烘烤20–25分钟至表面深金黄色。出炉后立即大量刷融化黄油。趁热食用。',
        durationMinutes: 70,
        tip: 'The second butter brush right after baking melts into the hot rolls, creating an irresistible glossy, buttery crust.',
        tipZh: '出炉后立即刷第二次黄油会融化渗透进热面包卷中，创造出无法抗拒的光亮黄油表皮。',
      },
    ],
    tips: [
      'For the softest rolls, use bread flour (higher protein) — it gives enough structure to support the buttery richness without becoming dense.',
      'These rolls are best served warm from the oven. To make ahead: after shaping, cover and refrigerate overnight. The next day, let them come to room temperature and proof for about 1 hour before baking.',
      'For a savory twist, sprinkle flaky sea salt and chopped fresh rosemary on top after the final butter brush.',
    ],
    tipsZh: [
      '追求最柔软的口感，请使用高筋面粉——更高的蛋白质含量能支撑黄油浓郁的质地而不致密。',
      '这些面包卷最好趁热享用。提前准备：整形后盖好冷藏过夜。第二天回温后发酵约1小时再烘烤。',
      '咸味变化：最后一次刷黄油后撒上海盐片和新鲜迷迭香碎。',
    ],
  },
];
