import { MenuItem } from '../types';

export const menuItems: MenuItem[] = [
  {
    id: 'greek-salad',
    nameEn: 'Authentic Greek Salad (Horiatiki)',
    nameAr: 'سلطة يونانية أصلية (هورياتيكي)',
    category: 'meze',
    categoryLabelEn: 'Greek Meze',
    categoryLabelAr: 'مزة يونانية',
    descriptionEn: 'Generous slab of rich and creamy imported Greek feta cheese sprinkled with wild Aegean oregano, vine-ripened tomatoes, crisp cucumbers, Kalamata olives, red onions, and cold-pressed extra virgin olive oil.',
    descriptionAr: 'قطعة سخية من جبنة الفيتا اليونانية الأصلية الكريمية مع الأوريجانو البري، طماطم طازجة، خيار مقرمش، زيتون كالاماتا، بصل أحمر، وزيت زيتون بكر ممتاز معصور على البارد.',
    price: '220 EGP',
    image: '/src/assets/images/greek_salad.jpg',
    badgeEn: 'Best Seller · Guest Favorite',
    badgeAr: 'الأكثر طلباً · المفضلة',
    isPopular: true,
    cookingStyles: {
      en: ['Traditional Style with Greek Feta Slab', 'Tossed with Oregano & Olive Oil'],
      ar: ['النمط التقليدي بقطعة فيتا يونانية كاملة', 'متبلة بالأوريجانو وزيت الزيتون']
    }
  },
  {
    id: 'grilled-octopus',
    nameEn: 'Aegean Charred Grilled Octopus',
    nameAr: 'أخطبوط مشوي على الطريقة اليونانية',
    category: 'catch',
    categoryLabelEn: 'Seafood Special',
    categoryLabelAr: 'أطباق بحرية خاصة',
    descriptionEn: 'Tender simmered octopus tentacles, flash-charred over open charcoal grills, glazed with lemon-oregano emulsion, caper berries, and a touch of sea salt. Signature dish of Greek Nautical Club.',
    descriptionAr: 'أذرع أخطبوط طرية ومتبلة بعناية، مشوية على الفحم المشتعل مع مستحلب الليمون وزيت الزيتون والأوريجانو وحبات الكبر وملح البحر. الطبق الأيقوني للنادي البحري اليوناني.',
    price: '460 EGP',
    image: '/src/assets/images/grilled_octopus.jpg',
    badgeEn: 'Chef Signature',
    badgeAr: 'توقيع الشيف',
    isPopular: true,
    cookingStyles: {
      en: ['Charcoal Grilled with Lemon & Oregano', 'Pan-seared in Olive Oil & Garlic'],
      ar: ['مشوي على الفحم بالليمون والأوريجانو', 'تشويح سريع بزيت الزيتون والثوم']
    }
  },
  {
    id: 'seafood-platter',
    nameEn: 'White & Blue Grand Seafood Platter',
    nameAr: 'صينية وايت أند بلو الملكية للمأكولات البحرية',
    category: 'catch',
    categoryLabelEn: 'Fresh Catch',
    categoryLabelAr: 'صيد اليوم',
    descriptionEn: 'A magnificent harvest for seafood lovers: grilled fresh Sea Bass fillets, jumbo Red Sea butterflied prawns, tender calamari, blue crabs, and steamed harbor clams served with Greek lemon-garlic emulsion.',
    descriptionAr: 'تشكيلة بحرية فاخرة لعشاق السي فود: سمك قاروص مشوي، جمبري جامبو البحر الأحمر بالزبدة والليمون، كالاماري طري، كابوريا طازجة، وبلح بحر مطهو على البخار مع صلصة الليمون والثوم اليونانية.',
    price: '1,450 EGP',
    image: '/src/assets/images/seafood_platter.jpg',
    badgeEn: 'Perfect for Sharing (2-3 Guests)',
    badgeAr: 'مثالية للمشاركة (٢-٣ أفراد)',
    isPopular: true,
    isCatchOfDay: true,
    cookingStyles: {
      en: ['Charcoal Grilled Greek Style', 'Alexandrian Singari Oven Baked', 'Half Grilled & Half Fried'],
      ar: ['مشوي على الفحم بالطريقة اليونانية', 'سنجاري في الفرن بالخلطة الإسكندرانية', 'نصف مشوي ونصف مقلي']
    }
  },
  {
    id: 'spaghetti-frutti-di-mare',
    nameEn: 'Spaghetti ai Frutti di Mare',
    nameAr: 'سباغيتي فواكه البحر الإيطالية اليونانية',
    category: 'pasta',
    categoryLabelEn: 'Pasta & Risotto',
    categoryLabelAr: 'باستا وريزوتو',
    descriptionEn: 'Artisan spaghetti tossed with tender calamari rings, jumbo shrimp, fresh clams, and mussels in a fragrant seafood bisque reduction with cherry tomatoes, basil, and garlic.',
    descriptionAr: 'سباغيتي إيطالية محضرة مع حلقات الكاليماري، الجمبري الجامبو، المحار وبلح البحر الطازج في صوص بيسك غني بنكهة الطماطم الكرزية والريحان وزيت الزيتون.',
    price: '380 EGP',
    image: '/src/assets/images/seafood_platter.jpg',
    badgeEn: 'Popular Classic',
    badgeAr: 'كلاسيك محبوب',
    cookingStyles: {
      en: ['Rich Red Seafood Bisque Sauce', 'White Wine & Garlic Butter Sauce (Non-alcoholic)'],
      ar: ['صوص بيسك الطماطم الغني بالريحان', 'صوص الثوم وزيت الزيتون والزبدة']
    }
  },
  {
    id: 'seafood-risotto',
    nameEn: 'Aegean Seafood Saffron Risotto',
    nameAr: 'ريزوتو ثمار البحر بالزعفران',
    category: 'pasta',
    categoryLabelEn: 'Pasta & Risotto',
    categoryLabelAr: 'باستا وريزوتو',
    descriptionEn: 'Creamy Carnaroli arborio rice slowly simmered in rich crustacean stock with saffron threads, loaded with fresh Alexandrian shrimp, tender squid, and grated Parmigiano-Reggiano.',
    descriptionAr: 'أرز كارنارولي الإيطالي الكريمي مطهو على نار هادئة بمرق ثمار البحر المركز وخيوط الزعفران الفاخرة مع جمبري وحبار طازج وجبنة بارميزان.',
    price: '390 EGP',
    image: '/src/assets/images/hero_qaitbay.jpg',
    badgeEn: 'Creamy & Delicate',
    badgeAr: 'قوام كريمي فاخر',
    cookingStyles: {
      en: ['Golden Saffron Cream', 'Black Cuttlefish Ink Risotto (Upon Request)'],
      ar: ['كريمة الزعفران الذهبية', 'بحبر الحبار الأسود الفاخر (حسب التوفر)']
    }
  },
  {
    id: 'fritto-misto',
    nameEn: 'Crispy Fritto Misto & Calamari',
    nameAr: 'فواكه بحر مقلية مقرمشة وكالاماري (فريتو ميستو)',
    category: 'calamari',
    categoryLabelEn: 'Fried Seafood',
    categoryLabelAr: 'مقليات بحرية',
    descriptionEn: 'Golden crispy dusted Alexandrian calamari rings, tender baby shrimp, and white fish bites, served piping hot with house Greek skordalia garlic dip, tartar sauce, and charred lemons.',
    descriptionAr: 'حلقات كالاماري إسكندراني مقرمشة ذهبية، مع جمبري صغير وقطع سمك أبيض مقلية بخفة، تقدم ساخنة مع صوص سكوروداليا اليوناني بالثوم وصلصة التارتار وشرائح الليمون المشوي.',
    price: '360 EGP',
    image: '/src/assets/images/grilled_octopus.jpg',
    badgeEn: 'Crispy Favorite',
    badgeAr: 'الأكثر قرمشة',
    isPopular: true,
    cookingStyles: {
      en: ['Crispy Golden Semolina Fry', 'Light Salt & Pepper Tempura'],
      ar: ['مقلي ذهبي بالسميد الخفيف', 'مقلي خفيف بملح البحر والفلفل']
    }
  },
  {
    id: 'catch-sea-bass',
    nameEn: 'Fresh Sea Bass (Loup de Mer / قاروص)',
    nameAr: 'سمك قاروص البحر المتوسط الطازج',
    category: 'catch',
    categoryLabelEn: 'Market Counter',
    categoryLabelAr: 'معرض الأسماك',
    descriptionEn: 'Whole wild Mediterranean Sea Bass selected from our ice counter, prepared to your exact preference with rosemary, garlic, and Greek lemon oil.',
    descriptionAr: 'سمكة قاروص طازجة كاملة يتم اختيارها بالوزن من معرضنا الجليدي، وتُطهى حسب طلبك بالأعشاب والليمون وزيت الزيتون اليوناني.',
    price: 'Market Price / بالوزن',
    image: '/src/assets/images/hero_qaitbay.jpg',
    badgeEn: 'Catch of the Day',
    badgeAr: 'صيد اليوم بالوزن',
    isCatchOfDay: true,
    cookingStyles: {
      en: ['Singari Open-Faced Alexandrian Bake', 'Charcoal Grilled with Oregano & Olive Oil', 'Fried Egyptian Coastal Style', 'Baked in Sea Salt Crust'],
      ar: ['سنجاري مفتوح بالخلطة الإسكندرانية بالفرن', 'مشوي على الفحم بالأوريجانو وزيت الزيتون', 'مقلي مقرمش بتتبيلة الثوم والكمون', 'مطهو داخل قشرة ملح البحر في الفرن']
    }
  },
  {
    id: 'greek-meze-trio',
    nameEn: 'Greek Meze Trio (Tzatziki, Tarama & Tirokafteri)',
    nameAr: 'ثلاثي المزة اليونانية (تزاتزيكي، تاراما، وتيروكافتيري)',
    category: 'meze',
    categoryLabelEn: 'Greek Meze',
    categoryLabelAr: 'مزة يونانية',
    descriptionEn: 'Authentic trio of Greek spreads: cucumber-dill Tzatziki yogurt, pink carp roe Taramosalata, and spicy whipped feta dip, served with warm Greek pita bread and marinated olives.',
    descriptionAr: 'تشكيلة مميزة من أشهى مقبلات اليونان: زبادي تزاتزيكي بالخيار والشبت، تاراموسالاتا ببطارخ السمك الوردية، وتيروكافتيري بالجبنة الفيتا الحارة، مع خبز بيتا دافئ وزيتون يوناني.',
    price: '190 EGP',
    image: '/src/assets/images/greek_salad.jpg',
    badgeEn: 'Traditional Greek Starter',
    badgeAr: 'مقبلات يونانية تقليدية',
    cookingStyles: {
      en: ['Served Chilled with Warm Pita Bread'],
      ar: ['يقدم بارداً مع خبز البيتا اليوناني الدافئ']
    }
  },
  {
    id: 'greek-beverages',
    nameEn: 'Aegean Breeze Citrus Mocktail & Beer Selection',
    nameAr: 'مشروب نسيم إيجه المنعش وتشكيلة المشروبات والبيرة',
    category: 'drinks',
    categoryLabelEn: 'Beverages',
    categoryLabelAr: 'مشروبات وعصائر',
    descriptionEn: 'Refreshing iced drinks including fresh Alexandrian lemon-mint, sparkling pomegranate Aegean spritz, chilled premium beers, and traditional Greek iced frappé coffee.',
    descriptionAr: 'مرطبات منعشة تشمل ليمون بالنعناع الإسكندراني الطازج، سباركلينج رمان إيجه، بيرة مثلجة، وقهوة فرابيه اليونانية المثلجة المنعشة.',
    price: '95 EGP - 160 EGP',
    image: '/src/assets/images/sunset_qaitbay.jpg',
    badgeEn: 'Refreshing Coastal Sips',
    badgeAr: 'مشروبات ساحلية منعشة',
    cookingStyles: {
      en: ['Fresh Lemon-Mint Cooler', 'Greek Frappé Iced Coffee', 'Chilled Beer Bottle', 'Sparkling Mediterranean Tonic'],
      ar: ['ليمون بالنعناع إسكندراني طازج', 'قهوة فرابيه مثلجة يونانية', 'بيرة باردة مثلجة', 'تونيك المتوسط الفوار بالأعشاب']
    }
  }
];
