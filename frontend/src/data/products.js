// ROCK AGRI — product catalog (content extracted verbatim from company doc)

export const CATEGORIES = [
  { slug: "animal-feed", name: "Animal Feed", tagline: "High-protein meals for livestock, poultry & aqua" },
  { slug: "spices", name: "Spices", tagline: "Aromatic, oil-rich Indian spices for global kitchens" },
  { slug: "oil-seeds", name: "Oil Seeds", tagline: "High-yield seeds for oil extraction & food use" },
  { slug: "beans-pulses", name: "Beans & Pulses", tagline: "Protein-rich grains, beans and cereals" },
];

export const PRODUCTS = [
  // ---------------- ANIMAL FEED ----------------
  {
    slug: "rapeseed-meal",
    name: "Rapeseed Meal",
    category: "animal-feed",
    image: "/images/products/rapeseed-meal.jpeg",
    description:
      "Rapeseed Meal is a high-protein by-product obtained after the extraction of oil from rapeseeds. It is widely used as a cost-effective and nutritious ingredient in animal feed formulations. Rich in essential amino acids, especially methionine and cysteine, rapeseed meal supports healthy growth and improved productivity in livestock such as cattle, poultry, and aquaculture species. Its balanced nutritional profile makes it a reliable alternative to other protein meals. Processed under controlled conditions, Rapeseed Meal ensures consistent quality, low moisture content, and excellent digestibility. It is known for enhancing milk yield in dairy cattle and promoting weight gain in meat-producing animals. With its high protein content and energy value, it is an ideal choice for feed manufacturers and farmers seeking economical and efficient feed solutions.",
    specs: [
      ["Protein", "34% – 38%"],
      ["Moisture", "Max 10%"],
      ["Oil Content", "1% – 2%"],
      ["Fiber", "10% – 14%"],
      ["Ash", "Max 7%"],
      ["Sand/Silica", "Max 2.5%"],
      ["Urease Activity", "Negligible"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 Months"],
    ],
    about:
      "Rapeseed Meal is commonly used in compound feed for dairy cattle, poultry, goats, sheep, and fish farming. It is particularly valued for its ability to improve feed efficiency and support muscle development. Due to its moderate fiber content, it is highly suitable for ruminants, while properly processed meal can also be included in poultry and aqua feed formulations in controlled proportions. The product is manufactured through modern solvent extraction methods, ensuring the removal of excess oil while preserving nutritional integrity. Rapeseed Meal is widely traded in the global feed market due to its affordability, availability, and consistent quality. It is an excellent choice for feed producers looking to optimize cost without compromising on nutritional value.",
  },
  {
    slug: "soybean-meal",
    name: "Soybean Meal",
    category: "animal-feed",
    image: "/images/products/soybean-meal.jpeg",
    description:
      "Soybean Meal is one of the most widely used and highly valued protein sources in the animal feed industry. It is obtained after extracting oil from soybeans and is known for its exceptional protein content and superior amino acid profile. Rich in lysine and other essential nutrients, soybean meal plays a crucial role in promoting growth, improving feed efficiency, and enhancing overall animal performance across poultry, livestock, and aquaculture sectors. Processed using advanced techniques, Soybean Meal ensures high digestibility, uniform quality, and minimal anti-nutritional factors. It is considered a premium feed ingredient due to its consistent nutritional value and versatility in feed formulations. Its inclusion in animal diets helps improve weight gain, milk production, and egg yield, making it a preferred choice for feed manufacturers and farmers worldwide.",
    specs: [
      ["Protein", "44% – 48%"],
      ["Moisture", "Max 10%"],
      ["Oil Content", "0.5% – 1.5%"],
      ["Fiber", "5% – 7%"],
      ["Ash", "Max 6.5%"],
      ["Sand/Silica", "Max 2%"],
      ["Urease Activity", "0.05 – 0.20"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 Months"],
    ],
    about:
      "Soybean Meal is extensively used in feed for poultry, dairy cattle, pigs, fish, and other livestock due to its high protein concentration and excellent digestibility. It is particularly effective in supporting rapid growth in broilers, increasing milk yield in dairy animals, and enhancing feed conversion ratios. Its balanced amino acid profile makes it an essential component in both commercial and customized feed formulations. The product is produced through a solvent extraction process followed by proper heat treatment to deactivate anti-nutritional factors like trypsin inhibitors. Soybean Meal is globally recognized as a benchmark protein source in the feed industry and is widely traded due to its reliability, availability, and nutritional superiority. It is an ideal choice for achieving optimal animal health and productivity.",
  },
  {
    slug: "castor-meal",
    name: "Castor Meal",
    category: "animal-feed",
    image: "/images/products/castor-meal.jpeg",
    description:
      "Castor Meal is an organic by-product obtained after the extraction of oil from castor seeds. It is widely recognized for its high nitrogen content, making it an excellent organic fertilizer and soil conditioner. Rich in essential nutrients, Castor Meal improves soil fertility, enhances microbial activity, and supports sustainable agricultural practices. It is especially valued in organic farming due to its natural composition and long-lasting nutrient release. Processed under strict quality control, Castor Meal is available in detoxified as well as non-edible forms. The detoxified variant can be used in limited quantities for animal feed applications, while the non-edible grade is primarily used as organic manure. Its eco-friendly nature and high nutrient value make it a preferred choice for farmers and agricultural industries worldwide.",
    specs: [
      ["Protein", "30% – 35%"],
      ["Moisture", "Max 10%"],
      ["Oil Content", "1% – 2%"],
      ["Nitrogen (N)", "4% – 6%"],
      ["Phosphorus (P)", "1% – 2%"],
      ["Potash (K)", "1% – 1.5%"],
      ["Fiber", "10% – 15%"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 Months"],
    ],
    about:
      "Castor Meal is primarily used as an organic fertilizer due to its rich nutrient profile and natural pest-repelling properties. It enhances soil structure, improves water retention, and promotes healthy plant growth. It is widely used in crops like fruits, vegetables, oilseeds, and plantation crops. Its slow-release nature ensures long-term soil nourishment without harming the environment. In its detoxified form, Castor Meal can also be used cautiously in animal feed formulations; however, due to the presence of toxic compounds like ricin in raw form, it must be properly processed before any feed application. Globally, Castor Meal is a highly demanded product in the agricultural sector, especially among organic farming communities seeking sustainable and chemical-free solutions.",
  },
  {
    slug: "mustard-meal",
    name: "Mustard Meal",
    category: "animal-feed",
    image: "/images/products/mustard-meal.jpeg",
    description:
      "Mustard Meal is a protein-rich by-product obtained after the extraction of oil from mustard seeds. It is widely used as an economical and nutritious ingredient in animal feed, especially for cattle, poultry, and other livestock. Known for its balanced protein content and good amino acid profile, mustard meal supports healthy growth, improved digestion, and enhanced productivity in animals. Manufactured through modern oil extraction processes, Mustard Meal ensures consistent quality, low moisture, and high nutritional value. It is particularly beneficial for dairy animals as it helps in improving milk yield and overall health. Due to its cost-effectiveness and availability, it is commonly used as a partial substitute for other protein meals in feed formulations.",
    specs: [
      ["Protein", "32% – 38%"],
      ["Moisture", "Max 10%"],
      ["Oil Content", "1% – 2%"],
      ["Fiber", "10% – 14%"],
      ["Ash", "Max 7%"],
      ["Sand/Silica", "Max 2.5%"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 Months"],
    ],
    about:
      "Mustard Meal is extensively used in feed for cattle, sheep, goats, and in limited quantities for poultry feed. It is known to improve feed intake and digestion when used in balanced proportions. The presence of natural compounds like glucosinolates requires controlled inclusion levels, making it more suitable for ruminants compared to non-ruminant animals. The product is available in both expeller and solvent-extracted forms, depending on the oil extraction method. Mustard Meal is widely traded in domestic and international markets due to its affordability and nutritional benefits. It is an ideal choice for feed manufacturers aiming to reduce feed costs while maintaining quality and performance.",
  },
  {
    slug: "cottonseed-meal",
    name: "Cottonseed Meal",
    category: "animal-feed",
    image: "/images/products/cottonseed-meal.jpeg",
    description:
      "Cottonseed Meal is a high-protein by-product obtained after the extraction of oil from cotton seeds. It is widely used as a valuable ingredient in animal feed, particularly for ruminants such as cattle, buffalo, sheep, and goats. Known for its rich protein content and energy value, cottonseed meal supports muscle development, improves milk production, and enhances overall animal performance. Produced through modern processing methods, Cottonseed Meal offers consistent quality, good palatability, and high digestibility for livestock. It serves as a cost-effective alternative to other protein meals and is especially suitable for dairy feed formulations. Its balanced nutritional profile makes it a reliable choice for feed manufacturers and farmers aiming to optimize feed efficiency and reduce costs.",
    specs: [
      ["Protein", "24% – 32%"],
      ["Moisture", "Max 10%"],
      ["Oil Content", "1% – 2%"],
      ["Fiber", "12% – 16%"],
      ["Ash", "Max 7%"],
      ["Sand/Silica", "Max 2.5%"],
      ["Free Gossypol", "Max 0.04% (400 ppm)"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 Months"],
    ],
    about:
      "Cottonseed Meal is primarily used in feed for dairy cattle and other ruminants due to its high fiber and protein content. It plays an important role in improving milk yield and supporting healthy weight gain. However, due to the presence of gossypol, its usage in non-ruminant feed such as poultry and pigs should be limited and carefully monitored. Available in both expeller and solvent-extracted varieties, Cottonseed Meal is widely traded in global markets for its affordability and nutritional benefits. It is a preferred choice in regions with strong cotton production, offering a sustainable and economical feed solution for livestock producers.",
  },

  // ---------------- SPICES ----------------
  {
    slug: "turmeric",
    name: "Turmeric",
    category: "spices",
    image: "/images/products/turmeric.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Turmeric, carefully sourced from reliable agricultural regions known for producing high-curcumin, vibrant-colored turmeric. Recognized globally for its natural healing properties, strong aroma, and rich color, turmeric is widely used in food, pharmaceutical, cosmetic, and wellness industries. Our turmeric is carefully selected and processed to ensure high purity, uniform finger/bulb quality, and excellent curcumin content. It is known for its natural golden-yellow color, strong flavor, and rich nutritional and medicinal value. We follow strict cleaning, boiling, drying, and grading processes to maintain superior quality standards. The product is hygienically processed and securely packed to preserve its aroma, color, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Curcumin Content", "2% – 5% (varies by grade)"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Form", "Fingers / Bulbs / Powder (as per requirement)"],
      ["Color", "Natural deep yellow to golden"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Turmeric is widely used in cooking as a natural spice and coloring agent. It is also extensively used in the pharmaceutical industry, Ayurvedic medicines, cosmetic products, and health supplements due to its anti-inflammatory and antioxidant properties.",
  },
  {
    slug: "red-chilli",
    name: "Red Chilli",
    category: "spices",
    image: "/images/products/red-chilli.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Red Chilli, carefully sourced from selected farming regions known for producing high heat, vibrant color, and strong aroma varieties. Red Chilli is one of the most important spices in global trade, widely used for its pungency, natural color, and flavor-enhancing properties. Our Red Chilli is carefully handpicked and processed under strict quality control to ensure uniform size, deep red color, and high pungency levels. It is widely valued in international markets for its strong aroma, natural coloring strength, and culinary versatility. We follow advanced cleaning, drying, and grading processes to maintain premium quality standards. The product is hygienically processed and securely packed to preserve its color, pungency, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Pungency (Heat Level)", "Medium to High (varies by variety)"],
      ["ASTA Color Value", "As per grade requirement"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Form", "Whole / Stemless / Powder (as per requirement)"],
      ["Color", "Deep red to bright red"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Red Chilli is widely used in food preparation, spice blends, sauces, seasoning, and food processing industries. It is also used as a natural coloring and flavoring agent in global cuisines.",
  },
  {
    slug: "coriander",
    name: "Coriander",
    category: "spices",
    image: "/images/products/coriander.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Coriander, carefully sourced from selected agricultural regions known for producing aromatic, high-oil-content seeds. Coriander is widely appreciated in global markets for its refreshing aroma, mild flavor, and versatile culinary applications. Our coriander is carefully cleaned, dried, and graded to ensure uniform seed size, natural greenish-brown color, and high purity. It is rich in essential oils, making it highly valued in spice blending, food processing, and seasoning industries worldwide. We follow strict quality control measures, including advanced cleaning and sorting processes, to ensure premium-grade consistency. The product is hygienically processed and securely packed to preserve its natural aroma, flavor, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Split Seeds", "As per export grade"],
      ["Color", "Natural greenish-brown / golden"],
      ["Form", "Whole seeds / Split / Powder (as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Coriander is widely used in culinary preparations, spice blends, seasoning mixes, and food processing industries. It is also used in pickles, sauces, and traditional cuisines across various countries.",
  },
  {
    slug: "cloves",
    name: "Cloves",
    category: "spices",
    image: "/images/products/cloves.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Cloves, carefully sourced from selected regions known for producing high-aroma, oil-rich, and high-grade spice buds. Cloves are widely valued in global markets for their strong fragrance, intense flavor, and medicinal properties. Our cloves are carefully handpicked and naturally dried to ensure uniform size, deep brown color, and high essential oil content. They are known for their strong aroma and rich taste, making them one of the most important spices in global culinary and pharmaceutical industries. We follow strict quality control measures, including advanced cleaning, sorting, and grading processes, to maintain premium export standards. The product is hygienically processed and securely packed to preserve its natural aroma, freshness, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "High (as per grade requirement)"],
      ["Size", "Uniform bud size"],
      ["Color", "Deep brown"],
      ["Form", "Whole cloves"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Cloves are widely used in food preparation, spice blends, bakery products, beverages, and seasoning industries. They are also used in pharmaceutical and dental applications due to their antiseptic and medicinal properties.",
  },
  {
    slug: "black-pepper",
    name: "Black Pepper",
    category: "spices",
    image: "/images/products/black-pepper.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Black Pepper, carefully sourced from selected farming regions known for producing bold, aromatic, and high-pungency peppercorns. Black Pepper is one of the most widely traded spices globally, valued for its strong flavor, aroma, and versatile applications across food and industrial sectors. Our black pepper is naturally harvested, sun-dried, and carefully processed to ensure uniform size, deep black color, and high essential oil content. It is widely recognized for its strong pungency and rich aroma, making it a key ingredient in global cuisine and seasoning industries. We follow strict cleaning, grading, and sorting processes to maintain premium export quality. The product is hygienically processed and securely packed to preserve its freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Pungency", "High (based on grade)"],
      ["Size", "500 GL / 550 GL / 600 GL (as per requirement)"],
      ["Color", "Deep black"],
      ["Form", "Whole / Powder (as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Black Pepper is widely used in food seasoning, spice blends, sauces, meat processing, and culinary preparations worldwide. It is also used in pharmaceutical and nutraceutical industries due to its digestive and medicinal properties.",
  },
  {
    slug: "cumin-seed",
    name: "Cumin Seed",
    category: "spices",
    image: "/images/products/cumin-seed.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Cumin Seeds, carefully sourced from selected agricultural regions known for producing highly aromatic, oil-rich, and bold-flavored cumin. Cumin is one of the most essential spices in global trade, widely valued for its strong aroma, distinct taste, and wide culinary applications. Our cumin seeds are naturally harvested, properly sun-dried, and carefully cleaned to ensure uniform size, rich brown color, and high purity. They are known for their strong aroma and high essential oil content, making them ideal for food seasoning, spice blends, and industrial use. We follow strict quality control processes, including advanced cleaning, sorting, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to maintain freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "High (as per grade requirement)"],
      ["Size", "Uniform seed size"],
      ["Color", "Natural brown"],
      ["Form", "Whole seeds / Powder (as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Cumin Seeds are widely used in culinary preparations, spice blends, seasoning mixes, bakery products, and food processing industries. They are also used in traditional medicine and herbal applications due to their digestive and health benefits.",
  },
  {
    slug: "ajwain",
    name: "Ajwain (Carom Seeds)",
    category: "spices",
    image: "/images/products/ajwain.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Ajwain (Carom Seeds), carefully sourced from selected agricultural regions known for producing highly aromatic and oil-rich seeds. Ajwain is widely valued in global markets for its strong aroma, distinctive taste, and traditional medicinal benefits. Our Ajwain seeds are naturally harvested, properly sun-dried, and carefully cleaned to ensure uniform size, dark brown color, and high purity. They are known for their strong pungent aroma and rich essential oil content, making them highly suitable for culinary, medicinal, and industrial applications. We follow strict quality control measures, including advanced cleaning, sorting, and grading processes, to ensure consistent export-grade quality. The product is hygienically processed and securely packed to preserve its natural aroma, freshness, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "High (as per grade requirement)"],
      ["Size", "Uniform seed size"],
      ["Color", "Natural brown"],
      ["Form", "Whole seeds / Powder (as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Ajwain is widely used in culinary preparations, spice blends, bakery products, and traditional cuisines. It is also highly valued in herbal medicine and Ayurvedic applications for its digestive and health-supporting properties.",
  },
  {
    slug: "star-anise",
    name: "Star Anise",
    category: "spices",
    image: "/images/products/star-anise.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Star Anise, carefully sourced from selected regions known for producing highly aromatic, naturally shaped, and oil-rich spice pods. Star Anise is widely valued in global markets for its strong licorice-like flavor, rich aroma, and versatile applications in culinary and medicinal industries. Our Star Anise is naturally harvested and carefully sun-dried to preserve its unique star shape, deep brown color, and high essential oil content. It is known for its strong fragrance and distinct taste, making it a highly demanded spice in international food and beverage markets. We follow strict quality control processes, including advanced cleaning, sorting, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to maintain its aroma, freshness, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "High (as per grade requirement)"],
      ["Form", "Whole pods"],
      ["Color", "Natural brown"],
      ["Size", "Uniform star-shaped pods"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Star Anise is widely used in culinary preparations, spice blends, bakery products, beverages, and food processing industries. It is also used in pharmaceutical and herbal applications due to its antimicrobial and digestive benefits.",
  },
  {
    slug: "bay-leaf",
    name: "Bay Leaf",
    category: "spices",
    image: "/images/products/bay-leaf.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Bay Leaf, carefully sourced from selected regions known for producing naturally aromatic, clean, and high-oil-content leaves. Bay Leaf is widely used in global cuisines for its subtle fragrance, earthy flavor, and ability to enhance the taste of a wide variety of dishes. Our bay leaves are naturally harvested, carefully dried, and sorted to ensure uniform size, natural greenish-brown color, and high purity. They are known for their strong aroma and long-lasting flavor, making them a key ingredient in culinary and food processing industries worldwide. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to ensure premium export standards. The product is hygienically processed and securely packed to maintain its natural aroma, freshness, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "Natural aromatic oil retained"],
      ["Form", "Whole dried leaves"],
      ["Color", "Natural greenish-brown"],
      ["Size", "Uniform leaf size"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Bay Leaf is widely used in soups, curries, rice dishes, sauces, and spice blends. It is an essential ingredient in global culinary traditions and is also used in food processing industries for flavor enhancement.",
  },
  {
    slug: "fenugreek-seeds",
    name: "Fenugreek Seeds",
    category: "spices",
    image: "/images/products/fenugreek-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Fenugreek Seeds, carefully sourced from selected agricultural regions known for producing highly aromatic, nutrient-rich, and oil-balanced seeds. Fenugreek is widely valued in global markets for its strong aroma, slightly bitter taste, and wide applications in food, medicinal, and industrial sectors. Our fenugreek seeds are naturally harvested, properly sun-dried, and carefully cleaned to ensure uniform size, golden-brown color, and high purity. They are rich in essential nutrients, dietary fiber, and natural compounds that make them highly useful in culinary preparations and herbal applications. We follow strict quality control processes, including advanced cleaning, sorting, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to preserve its natural aroma, freshness, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "Natural seed oil retained"],
      ["Form", "Whole seeds / Powder (as per requirement)"],
      ["Color", "Golden brown"],
      ["Size", "Uniform seed size"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Fenugreek Seeds are widely used in culinary preparations, spice blends, pickles, seasoning mixes, and food processing industries. They are also highly valued in traditional medicine and herbal formulations due to their health-supporting properties.",
  },
  {
    slug: "fennel-seeds",
    name: "Fennel Seeds",
    category: "spices",
    image: "/images/products/fennel-seeds.png",
    description:
      "Rock Agri is a trusted exporter of premium quality Fennel Seeds, carefully sourced from selected agricultural regions known for producing highly aromatic, sweet-flavored, and oil-rich seeds. Fennel is widely used across global markets for its refreshing taste, natural aroma, and wide applications in food, confectionery, and herbal industries. Our fennel seeds are naturally harvested, carefully dried, and processed to ensure uniform size, light green to greenish-yellow color, and high purity. They are known for their sweet aroma and cooling effect, making them highly preferred in culinary preparations and mouth freshener industries. We follow strict quality control processes, including advanced cleaning, sorting, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to preserve its natural aroma, flavor, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Oil Content", "Natural aromatic oil retained"],
      ["Form", "Whole seeds / Powder (as per requirement)"],
      ["Color", "Light green / greenish yellow"],
      ["Size", "Uniform seed size"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Fennel Seeds are widely used in culinary dishes, spice blends, bakery products, confectionery, mouth fresheners, and herbal medicine. They are highly valued for their digestive and cooling properties.",
  },
  {
    slug: "red-chilli-flakes",
    name: "Red Chilli Flakes",
    category: "spices",
    image: "/images/products/red-chilli-flakes.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Red Chilli Flakes, carefully processed from selected high-quality dried red chillies known for their vibrant color, strong aroma, and balanced pungency. Red Chilli Flakes are widely used in global food markets as a convenient spice ingredient for adding heat, color, and flavor to a wide range of dishes. Our red chilli flakes are produced through controlled drying, cleaning, and crushing processes to ensure uniform flake size, bright red color, and consistent pungency. They are carefully processed to retain natural oils and flavor, making them ideal for culinary and food processing applications. We follow strict quality control measures, including advanced cleaning, sorting, and grading, to maintain premium export standards. The product is hygienically processed and securely packed to preserve freshness, color, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Pungency", "Medium to High (as per requirement)"],
      ["ASTA Color Value", "As per grade requirement"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Form", "Flakes (uniform crushed size)"],
      ["Color", "Bright red to deep red"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Red Chilli Flakes are widely used in pizza toppings, sauces, seasoning blends, fast food, snacks, and global cuisines. They are also used in food processing industries for flavor enhancement and visual appeal.",
  },
  {
    slug: "white-pepper",
    name: "White Pepper",
    category: "spices",
    image: "/images/products/white-pepper.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality White Pepper, carefully sourced from selected regions known for producing high-aroma, bold-flavored, and high-essential-oil pepper berries. White pepper is widely valued in global markets for its mild heat, smooth flavor, and wide culinary applications. Our white pepper is produced from fully ripened pepper berries that are carefully processed to remove the outer skin, resulting in clean, uniform white seeds. It is known for its sharp yet refined flavor, making it highly suitable for sauces, soups, seasoning blends, and gourmet food preparations. We follow strict quality control processes, including advanced cleaning, soaking, drying, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to preserve its natural aroma, pungency, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Pungency", "Medium to High (as per grade)"],
      ["Form", "Whole / Powder (as per requirement)"],
      ["Color", "Natural white / off-white"],
      ["Size", "Uniform seed size"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "White Pepper is widely used in soups, sauces, salad dressings, seafood dishes, seasoning blends, and food processing industries. It is also valued in gourmet and international cuisines for its subtle heat and refined flavor profile.",
  },

  // ---------------- OIL SEEDS ----------------
  {
    slug: "castor-seeds",
    name: "Castor Seeds",
    category: "oil-seeds",
    image: "/images/products/castor-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Castor Seeds, carefully sourced from selected agricultural regions known for producing high-oil-content and superior-grade seeds. Castor seeds are widely used in global markets for oil extraction and industrial applications due to their high ricinoleic acid content and strong commercial value. Our castor seeds are naturally harvested, sun-dried, and carefully cleaned to ensure uniform size, natural color, and high purity. They are known for their high oil yield potential, making them a key raw material for the manufacturing of castor oil and its derivatives used in various industries. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to ensure premium export standards. The product is hygienically processed and securely packed to maintain quality, purity, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "45% – 50% (approx.)"],
      ["Moisture", "Max. 6% – 8%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform seed size"],
      ["Color", "Natural brown to blackish brown"],
      ["Form", "Whole seeds"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Castor seeds are primarily used for castor oil extraction, which is widely applied in industries such as lubricants, pharmaceuticals, cosmetics, paints, and biodiesel production. It is also used in chemical and industrial manufacturing processes.",
  },
  {
    slug: "groundnut-seeds",
    name: "Groundnut Seeds",
    category: "oil-seeds",
    image: "/images/products/groundnut-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Groundnut Seeds, carefully sourced from selected agricultural regions known for producing high-oil-content, bold, and naturally fresh peanuts. Groundnuts are widely demanded in global markets for oil extraction, food consumption, and various industrial applications. Our groundnut seeds are carefully selected, shelled, and graded to ensure uniform size, natural color, and high purity. They are known for their rich taste, high protein content, and excellent oil yield, making them a valuable commodity in both food and processing industries. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to ensure premium export standards. The product is hygienically processed and securely packed to preserve freshness, taste, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "45% – 50% (approx.)"],
      ["Moisture", "Max. 6% – 8%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform kernel size"],
      ["Color", "Natural light brown / pinkish / red (as per variety)"],
      ["Form", "Shelled / Unshelled (as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Groundnut Seeds are widely used for edible oil extraction, snacks, confectionery, peanut butter production, and food processing industries. They are also used as a protein-rich ingredient in animal feed.",
  },
  {
    slug: "mustard-seeds",
    name: "Mustard Seeds",
    category: "oil-seeds",
    image: "/images/products/mustard-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Black Mustard Seeds, carefully sourced from selected agricultural regions known for producing high-pungency, oil-rich, and naturally strong-flavored seeds. Black mustard seeds are widely demanded in global markets for culinary use, oil extraction, and traditional applications. Our black mustard seeds are naturally harvested, properly sun-dried, and carefully cleaned to ensure uniform size, deep black color, and high purity. They are known for their strong aroma, sharp taste, and high oil content, making them a valuable ingredient in spice processing and edible oil industries. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to maintain premium export standards. The product is hygienically processed and securely packed to preserve freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "38% – 42% (approx.)"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform seed size"],
      ["Color", "Deep black"],
      ["Form", "Whole seeds"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Black Mustard Seeds are widely used in cooking, spice blends, pickles, seasoning, and oil extraction industries. They are also an essential ingredient in traditional cuisines across many regions.",
  },
  {
    slug: "white-sesame-seeds",
    name: "White Sesame Seeds",
    category: "oil-seeds",
    image: "/images/products/white-sesame-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality White Sesame Seeds, carefully sourced from selected agricultural regions known for producing clean, oil-rich, and naturally nutty-flavored seeds. White sesame seeds are highly valued in global markets for food consumption, oil extraction, bakery products, and confectionery applications. Our white sesame seeds are carefully harvested, cleaned, and graded to ensure uniform size, bright white color, and high purity. They are known for their rich oil content, mild nutty taste, and excellent nutritional value, making them a key ingredient in both traditional and modern food industries. We follow strict quality control processes, including advanced cleaning, de-hulling (where required), grading, and sorting, to maintain premium export standards. The product is hygienically processed and securely packed to preserve freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "48% – 52% (approx.)"],
      ["Moisture", "Max. 6% – 8%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Color", "Natural white / creamy white"],
      ["Form", "Whole seeds (hulled / unhulled as per requirement)"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "White Sesame Seeds are widely used in bakery products, confectionery, cooking, tahini production, oil extraction, and health foods. They are highly valued for their nutritional benefits and rich oil content.",
  },
  {
    slug: "soya-bean",
    name: "Soya Bean",
    category: "oil-seeds",
    image: "/images/products/soya-bean.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Soybean, carefully sourced from selected agricultural regions known for producing high-protein, high-oil-content, and naturally clean seeds. Soybean is one of the most important agricultural commodities in global trade, widely used for food processing, oil extraction, and animal feed industries. Our soybeans are carefully selected, cleaned, and graded to ensure uniform size, natural yellow color, and high purity. They are known for their rich protein content, balanced nutrition, and high oil yield, making them a key raw material in multiple industrial and food applications worldwide. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to ensure premium export standards. The product is hygienically processed and securely packed to maintain freshness, quality, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Protein Content", "36% – 40% (approx.)"],
      ["Oil Content", "18% – 20% (approx.)"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform bean size"],
      ["Color", "Natural yellow"],
      ["Form", "Whole beans"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Soybeans are widely used for edible oil extraction, soy milk, tofu production, food processing, and as a high-protein ingredient in animal feed industries. It is one of the most traded agricultural commodities globally.",
  },
  {
    slug: "yellow-mustard-seeds",
    name: "Yellow Mustard Seeds",
    category: "oil-seeds",
    image: "/images/products/yellow-mustard-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Yellow Mustard Seeds, carefully sourced from selected agricultural regions known for producing mild-flavored, high-oil-content, and naturally clean seeds. Yellow mustard seeds are widely used in global markets for culinary applications, oil extraction, seasoning, and food processing industries. Our yellow mustard seeds are naturally harvested, sun-dried, and carefully cleaned to ensure uniform size, bright yellow color, and high purity. They are known for their mild pungency, rich aroma, and excellent oil content, making them highly suitable for cooking, pickling, and industrial oil production. We follow strict quality control processes, including advanced cleaning, grading, and sorting, to ensure premium export standards. The product is hygienically processed and securely packed to maintain freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "38% – 42% (approx.)"],
      ["Moisture", "Max. 10% – 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform seed size"],
      ["Color", "Bright yellow"],
      ["Form", "Whole seeds"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Yellow Mustard Seeds are widely used in cooking, spice blends, pickles, seasoning mixes, and edible oil extraction industries. They are also an essential ingredient in many international culinary traditions.",
  },
  {
    slug: "black-sesame-seeds",
    name: "Black Sesame Seeds",
    category: "oil-seeds",
    image: "/images/products/black-sesame-seeds.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Black Sesame Seeds, carefully sourced from selected agricultural regions known for producing nutrient-rich, high-oil-content, and naturally aromatic seeds. Black sesame seeds are widely valued in global markets for their rich flavor, high nutritional benefits, and diverse applications in food and health industries. Our black sesame seeds are carefully harvested, cleaned, and graded to ensure uniform size, deep black color, and high purity. They are known for their strong nutty flavor, high oil content, and excellent nutritional profile, making them a highly demanded ingredient in bakery, confectionery, and health food products. We follow strict quality control processes, including advanced cleaning, sorting, and grading, to ensure premium export standards. The product is hygienically processed and securely packed to preserve freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Oil Content", "48% – 52% (approx.)"],
      ["Moisture", "Max. 6% – 8%"],
      ["Admixture", "1% – 2% Max"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform seed size"],
      ["Color", "Natural black"],
      ["Form", "Whole seeds"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Black Sesame Seeds are widely used in bakery products, confectionery, cooking, oil extraction, and health food industries. They are highly valued for their rich antioxidant content and nutritional benefits.",
  },

  // ---------------- BEANS & PULSES ----------------
  {
    slug: "white-peas",
    name: "White Peas",
    category: "beans-pulses",
    image: "/images/products/white-peas.jpeg",
    description:
      "Rock Agri is a trusted exporter of high-quality white peas, carefully sourced from reliable agricultural regions to meet international market standards. Known for their excellent nutritional value and versatility, our white peas are widely used in food processing and direct consumption across global markets. Our white peas are selected with strict quality control to ensure uniform size, natural color, and high purity. They are rich in protein, fiber, and essential nutrients, making them suitable for various culinary applications including soups, snacks, and traditional dishes. We follow advanced cleaning, sorting, and grading processes to remove impurities and maintain premium quality. The product is hygienically processed and securely packed to preserve freshness and extend shelf life during transit.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 14%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grading available"],
      ["Color", "Natural white / cream"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "White peas are widely used in food industries and households for preparing snacks, curries, soups, and processed food products. They are also used in animal feed and other agro-based industries.",
  },
  {
    slug: "moong-whole",
    name: "Moong Whole",
    category: "beans-pulses",
    image: "/images/products/moong-whole.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Moong Whole (Green Gram), carefully sourced from reliable agricultural regions to meet international quality standards. Known for its high nutritional value and easy digestibility, Moong Whole is widely used in global markets for both household consumption and food processing industries. Our Moong Whole is selected through strict quality control processes to ensure uniform size, natural green color, and high purity. It is rich in protein, fiber, and essential nutrients, making it a preferred choice for healthy diets and various culinary applications. We follow advanced cleaning, grading, and sorting processes to maintain superior quality. The product is hygienically processed and packed to preserve freshness, taste, and shelf life during transportation and storage.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grading available"],
      ["Color", "Natural green"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Moong Whole is widely used for preparing traditional dishes, sprouts, soups, and processed food products. It is also valued in health-focused diets due to its high protein content and easy digestion.",
  },
  {
    slug: "chickpeas",
    name: "Chickpeas (Kabuli Chana)",
    category: "beans-pulses",
    image: "/images/products/chickpeas.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Kabuli Chana (Chickpeas), sourced from the finest agricultural regions to meet international market standards. Known for its large size, smooth texture, and rich nutritional value, Kabuli Chana is widely demanded across global markets for both food processing and direct consumption. Our Kabuli Chana is carefully selected and processed to ensure uniform size, natural color, and high purity. It is rich in protein, fiber, and essential nutrients, making it an ideal ingredient for a variety of cuisines and healthy food products. We follow advanced cleaning, grading, and sorting processes to maintain consistent quality. The product is hygienically processed and securely packed to retain freshness and extend shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "7mm, 8mm, 9mm+ (or as per buyer requirement)"],
      ["Color", "Natural cream / beige"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Kabuli Chana is widely used in various food preparations such as curries, salads, snacks, and processed food products. It is a key ingredient in international cuisines and is also used in flour production and ready-to-eat food industries.",
  },
  {
    slug: "desi-chana",
    name: "Desi Chana",
    category: "beans-pulses",
    image: "/images/products/desi-chana.jpeg",
    description:
      "Rock Agri is a reliable exporter of high-quality Desi Chana, carefully sourced from trusted agricultural regions to meet international standards. Known for its small size, dark color, and rich nutritional profile, Desi Chana is widely used across global markets for both traditional cooking and food processing applications. Our Desi Chana is selected through strict quality control measures to ensure uniform size, natural color, and high purity. It is rich in protein, dietary fiber, and essential minerals, making it a preferred choice for a variety of food products and health-conscious consumers. We follow advanced cleaning, grading, and sorting processes to maintain consistent quality. The product is hygienically processed and packed to preserve freshness, taste, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "As per standard grading / buyer requirement"],
      ["Color", "Natural brown"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Desi Chana is widely used in the preparation of traditional dishes, snacks, and flour (besan). It is also used in food processing industries and as a key ingredient in various culinary applications across different regions.",
  },
  {
    slug: "black-eye-beans",
    name: "Black Eye Beans (Chori)",
    category: "beans-pulses",
    image: "/images/products/black-eye-beans.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Black Eyed Beans (Cowpeas), carefully sourced from reliable agricultural regions to meet international market standards. Recognized for their distinctive appearance with a black \u201ceye\u201d and creamy texture, these beans are widely used across global markets for both traditional cuisines and food processing applications. Our Black Eyed Beans are selected through strict quality control processes to ensure uniform size, natural color, and high purity. They are rich in protein, dietary fiber, and essential nutrients, making them a healthy and versatile choice for various food preparations. We follow advanced cleaning, grading, and sorting methods to maintain superior quality. The product is hygienically processed and securely packed to preserve freshness, taste, and shelf life during storage and transit.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 14%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grading available"],
      ["Color", "Creamy white with black eye"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Black Eyed Beans are widely used in soups, curries, salads, and traditional dishes across various cuisines. They are also used in processed food products and are valued for their nutritional benefits.",
  },
  {
    slug: "black-gram-whole",
    name: "Black Gram Whole",
    category: "beans-pulses",
    image: "/images/products/black-gram-whole.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Black Gram Whole (Urad), carefully sourced from reliable agricultural regions to meet international market standards. Recognized for its deep black color and creamy inner texture, Black Gram is widely used across global markets for both traditional cuisines and food processing applications. Our Black Gram is selected through strict quality control processes to ensure uniform size, natural color, and high purity. It is rich in protein, dietary fiber, and essential nutrients, making it a healthy and versatile choice for various food preparations. We follow advanced cleaning, grading, and sorting methods to maintain superior quality. The product is hygienically processed and securely packed to preserve freshness, taste, and shelf life during storage and transit.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 14%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grading available"],
      ["Color", "Natural black"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Black Gram Whole is widely used in soups, curries, dal preparations, and traditional dishes across various cuisines. It is also used in processed food products and is valued for its nutritional benefits.",
  },
  {
    slug: "chana-dal",
    name: "Chana Dal",
    category: "beans-pulses",
    image: "/images/products/chana-dal.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Chana Dal, carefully sourced from reliable agricultural regions to meet international market standards. Known for its rich taste, golden color, and high nutritional value, Chana Dal is widely used across global markets for daily cooking and food processing applications. Our Chana Dal is processed with strict quality control measures to ensure uniform size, natural color, and high purity. It is an excellent source of protein, dietary fiber, and essential nutrients, making it a staple ingredient in healthy and balanced diets. We follow advanced cleaning, splitting, polishing, and grading processes to maintain consistent quality. The product is hygienically processed and securely packed to preserve freshness, taste, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform split grains"],
      ["Color", "Natural golden yellow"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Chana Dal is widely used in traditional cooking, soups, snacks, and various food processing applications. It is also used in flour production and ready-to-eat food products due to its nutritional value and versatility.",
  },
  {
    slug: "green-millets",
    name: "Green Millets",
    category: "beans-pulses",
    image: "/images/products/green-millets.jpeg",
    description:
      "Rock Agri is a trusted exporter of high-quality Green Millets, carefully sourced from reliable agricultural regions to meet international market standards. Known for their high nutritional value, natural taste, and health benefits, Green Millets are widely consumed across global markets as a healthy alternative grain. Our Green Millets are selected through strict quality control processes to ensure uniform grain size, natural greenish-yellow color, and high purity. They are rich in dietary fiber, essential minerals, and plant-based nutrients, making them highly suitable for health-conscious diets and food processing industries. We follow advanced cleaning, grading, and sorting processes to maintain superior quality standards. The product is hygienically processed and securely packed to preserve freshness, nutritional value, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 13%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grain size"],
      ["Color", "Natural greenish-yellow"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Green Millets are widely used for human consumption in traditional dishes, health foods, flour production, and processed food products. They are also gaining global demand as a nutritious and gluten-free food option.",
  },
  {
    slug: "yellow-corn",
    name: "Yellow Corn",
    category: "beans-pulses",
    image: "/images/products/yellow-corn.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Yellow Corn, carefully sourced from reliable agricultural regions to meet international market standards. Known for its bright color, high starch content, and nutritional value, Yellow Corn is widely used across global markets for food, feed, and industrial applications. Our Yellow Corn is selected through strict quality control processes to ensure uniform grain size, natural yellow color, and high purity. It is rich in carbohydrates, fiber, and essential nutrients, making it a versatile commodity for both human consumption and animal feed industries. We follow advanced cleaning, drying, and grading processes to maintain superior quality standards. The product is hygienically processed and securely packed to preserve freshness, quality, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 14%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grain size"],
      ["Color", "Natural yellow"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Yellow Corn is widely used in food processing, animal feed production, starch manufacturing, corn flour, snacks, and various industrial applications. It is one of the most in-demand agricultural commodities in global trade.",
  },
  {
    slug: "wheat-whole",
    name: "Wheat Whole",
    category: "beans-pulses",
    image: "/images/products/wheat-whole.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Wheat Whole, carefully sourced from reliable agricultural regions to meet international market standards. Known for its high nutritional value, natural taste, and wide usage, Wheat is one of the most important staple grains in global food consumption. Our Wheat Whole is selected through strict quality control processes to ensure uniform grain size, natural golden color, and high purity. It is rich in carbohydrates, dietary fiber, protein, and essential nutrients, making it a vital ingredient for daily food consumption and food processing industries. We follow advanced cleaning, drying, and grading processes to maintain superior quality standards. The product is hygienically processed and securely packed to preserve freshness, nutritional value, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 13%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken/Defective", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Size", "Uniform grain size"],
      ["Color", "Natural golden brown"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Wheat Whole is widely used for flour production, bakery products, traditional foods, and various food processing industries. It is a staple commodity in global trade and a key ingredient in daily diets across many countries.",
  },
  {
    slug: "rice",
    name: "Rice",
    category: "beans-pulses",
    image: "/images/products/rice.jpeg",
    description:
      "Rock Agri is a trusted exporter of premium quality Rice, carefully sourced from reliable farming regions to meet international market standards. Known for its rich aroma, fine texture, and high nutritional value, Rice is one of the most widely consumed staple foods across global markets. Our Rice is selected through strict quality control processes to ensure uniform grain size, natural color, and high purity. It is rich in carbohydrates and essential nutrients, making it an important part of daily diets and food industries worldwide. We follow advanced cleaning, milling, polishing, and grading processes to maintain superior quality standards. The product is hygienically processed and securely packed to preserve freshness, aroma, and shelf life during storage and transportation.",
    specs: [
      ["Purity", "98% – 99.5%"],
      ["Moisture", "Max. 12% – 13%"],
      ["Admixture", "1% – 2% Max"],
      ["Broken Grains", "As per export standards"],
      ["Foreign Matter", "Minimal / Nil"],
      ["Grain Type", "Long grain / medium grain (as per requirement)"],
      ["Color", "Natural white / cream"],
      ["Packaging", "25kg / 50kg PP Bags or customized packaging"],
      ["Origin", "India"],
    ],
    about:
      "Rice is widely used for direct human consumption and in various food industries. It is a staple ingredient in global cuisines and is also used in processed food products.",
  },
  {
    slug: "sorghum-seed",
    name: "Sorghum Seed",
    category: "beans-pulses",
    image: "/images/products/sorghum-seed.jpeg",
    description:
      "Sorghum Seed, also known as Jowar, is a versatile cereal grain widely used in animal feed as well as for human consumption in many parts of the world. It is a rich source of energy, carbohydrates, and essential nutrients, making it an ideal ingredient in feed formulations for poultry, cattle, and other livestock. Sorghum is naturally gluten-free and known for its excellent digestibility, supporting better feed efficiency and overall animal health. Carefully cleaned and processed, Sorghum Seed ensures uniform quality, low moisture, and high purity. It is widely preferred as a cost-effective substitute for maize in feed applications due to its comparable nutritional value. With consistent supply and stable quality, sorghum seed is a reliable choice for feed manufacturers and grain traders in both domestic and international markets.",
    specs: [
      ["Moisture", "Max 12%"],
      ["Protein", "9% – 12%"],
      ["Carbohydrates", "70% – 75%"],
      ["Fiber", "2% – 4%"],
      ["Foreign Matter", "Max 2%"],
      ["Broken Grains", "Max 3%"],
      ["Damaged Grains", "Max 2%"],
      ["Packaging", "50 Kg PP Bags / Bulk"],
      ["Shelf Life", "6 – 12 Months"],
    ],
    about:
      "Sorghum is widely used in livestock feed formulations as a cost-effective substitute for maize. It is also consumed as a gluten-free staple grain across Africa and parts of Asia.",
  },
];

export const getProductsByCategory = (categorySlug) =>
  PRODUCTS.filter((p) => p.category === categorySlug);

export const getProductBySlug = (slug) => PRODUCTS.find((p) => p.slug === slug);

export const getCategoryBySlug = (slug) => CATEGORIES.find((c) => c.slug === slug);

// Company contact info
export const COMPANY = {
  name: "ROCK AGRI",
  tagline: "Global Exporter of Spices, Oil Seeds, Beans & Animal Feed Since 2010",
  phone: "+91 9913404650",
  whatsapp: "919913404650", // international format, no plus
  email: "info@rockagri.in",
  website: "www.rockagri.in",
  address: {
    line1: "Bizhub-209, 150 Feet Ring Rd",
    line2: "Near Pearl Woman's Hospital",
    line3: "Ambedkar Circle, Mavdi",
    line4: "Rajkot, Gujarat – 360004, India",
  },
  addressFull:
    "Bizhub-209, 150 Feet Ring Rd, Near Pearl Woman's Hospital, Ambedkar Circle, Mavdi, Rajkot, Gujarat – 360004, India",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Bizhub-209,%20150%20Feet%20Ring%20Rd,%20Mavdi,%20Rajkot,%20Gujarat%20360004&output=embed",
  since: "2010",
};
