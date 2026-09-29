/**
 * GKCollection - Ürün Veritabanı
 * 
 * Bu dosya sitedeki tüm ürünlerin bilgilerini içerir.
 * Yeni bir ürün eklemek veya mevcut ürünü düzenlemek için bu dosyadaki listeyi güncellemeniz yeterlidir.
 */

const PRODUCTS_DATA = [
    // --- 1. ÇANTALAR ---
    {
        id: "bohem-makrome-omuz-cantasi",
        name: "Bohem Makrome Omuz Çantası",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "850 ₺",
        shortDesc: "Doğal pamuk iplikten elde örülmüş, astarlı ve şık omuz çantası.",
        description: "Geleneksel makrome el düğümleme sanatı ile modern çizgilerin buluştuğu bu özel çanta, günlük stilinize sıcak ve zarif bir dokunuş katar. %100 pamuklu ip kullanılarak tamamen elde üretilmiştir. İç kısmı kumaş astarlı olup eşyalarınızın güvenle taşınmasını sağlar.",
        dimensions: "Genişlik: 28 cm | Yükseklik: 24 cm | Askı Boyu: 95 cm",
        material: "%100 Doğal Pamuk Makrome İpi, Pamuklu İç Astar, Fermuarlı İç Cep",
        productionTime: "3 - 5 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özen ve sevgiyle dokuyorum.",
        colorNote: "Farklı renk ve ebat seçenekleri mevcuttur. Aşağıdaki renklerden dilediğinizi seçebilir veya özel renk talebiniz için bizimle iletişime geçebilirsiniz.",
        colors: [
            { name: "Doğal Ekru", code: "#F4EFE6" },
            { name: "Kiremit Toprak", code: "#C87965" },
            { name: "Adaçayı Yeşili", code: "#8A9A86" },
            { name: "Hardal Sarısı", code: "#D4A373" },
            { name: "Mat Siyah", code: "#2B2B2B" }
        ],
        careInstructions: "Nemli bir bezle hafifçe silinmesi önerilir. Çamaşır makinesinde yıkamayınız. Direkt güneş altında uzun süre bırakmayınız.",
        badge: "Çok Satan"
    },
    {
        id: "vintage-orgu-baget-canta",
        name: "Vintage Burgu Örgü Baget Çanta",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "720 ₺",
        shortDesc: "Zarif burgu desenli, fermuar kapamalı retro kol çantası.",
        description: "Minimalist ve retro görünümü bir arada sunan burgu örgü baget çanta, gündüzden geceye her kombininize uyum sağlar. Sık dokulu yapısı sayesinde formunu uzun yıllar korur. Metal fermuarı ve dayanıklı sapı ile konforlu kullanım sunar.",
        dimensions: "Genişlik: 25 cm | Yükseklik: 15 cm | Derinlik: 6 cm",
        material: "Özel Bükümlü Pamuk Kordon İp, Fermuarlı Kapanış, Şık İç Astar",
        productionTime: "3 - 4 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle ilmek ilmek işliyorum.",
        colorNote: "Farklı renk seçenekleri mevcuttur. Gardırobunuza en uygun tonu seçebilir veya özel renk talep edebilirsiniz.",
        colors: [
            { name: "Krem Bej", code: "#EFE8DA" },
            { name: "Taba Kahve", code: "#9C6644" },
            { name: "Pudra Pembe", code: "#E8B4B8" },
            { name: "Gece Mavisi", code: "#1D2D44" }
        ],
        careInstructions: "Elde ılık su ile nazikçe temizlenebilir. Düz zeminde kurutunuz.",
        badge: "Yeni Sezon"
    },
    {
        id: "buyuk-hasir-plaj-alisveris-cantasi",
        name: "Doğal Jüt & Örgü Tote Çanta",
        category: "cantalar",
        categoryLabel: "Çantalar",
        price: "980 ₺",
        shortDesc: "Geniş iç hacimli, sağlam örgü askılı sahil ve şehir çantası.",
        description: "Doğal jüt lifleri ve pamuk ipliğin harmanlanmasıyla elde örülen bu tote çanta, hem şehir hayatının koşturmacasında hem de sahil günlerinde en kullanışlı yardımcınız olacak. Geniş hacmi sayesinde kitap, tablet, cüzdan ve kişisel eşyalarınızı rahatlıkla sığdırabilirsiniz.",
        dimensions: "Genişlik: 38 cm | Yükseklik: 34 cm | Taban Derinliği: 12 cm",
        material: "Doğal Jüt Lif & Pamuk Karışımı, Güçlendirilmiş Omuz Askısı",
        productionTime: "4 - 6 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sağlam ve titiz bir işçilikle hazırlıyorum.",
        colorNote: "Doğal jüt rengine ek olarak askı ve kenar örgü detaylarında farklı renk seçenekleri sunulmaktadır.",
        colors: [
            { name: "Doğal Jüt & Krem", code: "#D8C3A5" },
            { name: "Doğal Jüt & Kiremit", code: "#B85D43" },
            { name: "Doğal Jüt & Antrasit", code: "#4A4E69" }
        ],
        careInstructions: "Sadece leke temizliği yapınız. Islak bez ile silip havalandırınız.",
        badge: "Özel Tasarım"
    },

    // --- 2. CÜZDANLAR ---
    {
        id: "mini-makrome-kartlik-cuzdan",
        name: "Mini Makrome Kartlık & Bozuk Para Cüzdanı",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "290 ₺",
        shortDesc: "Kompakt boyutlu, antik bronz kilitli el örgüsü mini cüzdan.",
        description: "Küçük çantalara kolayca sığabilen veya tek başına elde taşınabilecek tatlılıkta bir tasarım. Kartlarınızı, nakit paranızı ve küçük eşyalarınızı düzenli tutar. Antik bronz çıtçıtı ve özel dokusuyla el yapımının sıcaklığını hissettirir.",
        dimensions: "Genişlik: 12 cm | Yükseklik: 9 cm",
        material: "İnce Pamuk Makrome İpi, Antik Bronz Kilit, Kumaş Astar",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sevgiyle yapıyorum.",
        colorNote: "Zengin renk kartelamızdan istediğiniz rengi seçebilirsiniz. Kişiye özel hediye için harika bir seçenektir.",
        colors: [
            { name: "Kiremit", code: "#C87965" },
            { name: "Kum Beji", code: "#EAE0D5" },
            { name: "Zümrüt Yeşili", code: "#2D5A4C" },
            { name: "Gül Kurusu", code: "#B5838D" },
            { name: "Kömür Grisi", code: "#3D3D3D" }
        ],
        careInstructions: "Nemli bir süngerle silinebilir.",
        badge: "Favori"
    },
    {
        id: "zarf-model-fermuarli-portfoy",
        name: "Zarf Model Fermuarlı Portföy Cüzdan",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "420 ₺",
        shortDesc: "Telefon ve nakit bölmeli, bilek askılı el örgüsü portföy cüzdan.",
        description: "Telefonunuzu, anahtarlarınızı ve makyaj malzemelerinizi taşıyabileceğiniz pratik portföy cüzdan. Çıkarılabilir bilek askısı sayesinde hem cüzdan hem de mini el çantası olarak kullanılabilir.",
        dimensions: "Genişlik: 20 cm | Yükseklik: 12 cm",
        material: "%100 Pamuklu İplik, Yüksek Kalite Metal Fermuar, Çıkarılabilir Askı",
        productionTime: "2 - 4 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özenle dikip örüyorum.",
        colorNote: "Farklı renk seçenekleri mevcut olup kişisel istekleriniz doğrultusunda renk kombinasyonları da yapılabilmektedir.",
        colors: [
            { name: "Karamel", code: "#A66E38" },
            { name: "Taş Rengi", code: "#D5CEA3" },
            { name: "Bordo", code: "#6B2D35" },
            { name: "Lacivert", code: "#1C3144" }
        ],
        careInstructions: "Elde nazikçe soğuk suda yıkanabilir. Sıkma yapmayınız.",
        badge: "Kullanışlı"
    },
    {
        id: "pusullu-bohem-cuzdan",
        name: "Püskül & Ahşap Boncuk Detaylı Cüzdan",
        category: "cuzdanlar",
        categoryLabel: "Cüzdanlar",
        price: "340 ₺",
        shortDesc: "Doğal ahşap boncuklar ve el yapımı püskülle süslenmiş bohem cüzdan.",
        description: "Bohem tarzı sevenler için hazırlanan bu modelde, ahşap boncuklar ve zarif püskül detayları el örgüsünün güzelliğini tamamlıyor. Hem pratik hem de göz alıcı bir tasarım.",
        dimensions: "Genişlik: 15 cm | Yükseklik: 10 cm",
        material: "Doğal Pamuk Kordon, Ahşap Boncuk, Metal Çıtçıt Kapama",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle üretiyorum.",
        colorNote: "Farklı renk alternatiflerimiz mevcuttur. Tercih ettiğiniz renk tonunda özel olarak örülür.",
        colors: [
            { name: "Ekru / Naturel", code: "#F7F4EE" },
            { name: "Kiremit Tonu", code: "#C87965" },
            { name: "Zeytin Yeşili", code: "#606C38" },
            { name: "Tarçın", code: "#9C4121" }
        ],
        careInstructions: "Ahşap boncukları ıslatmamaya özen göstererek nemli bezle siliniz.",
        badge: "El Emeği"
    },

    // --- 3. DİĞER (EV DEKORU & AKSESUAR) ---
    {
        id: "makrome-duvar-susu-bohem",
        name: "Bohem Makrome Duvar Dekoru",
        category: "diger",
        categoryLabel: "Diğer",
        price: "550 ₺",
        shortDesc: "Doğal ahşap dal üzerine dokunmuş, sıcak ve estetik duvar süsü.",
        description: "Doğadan özenle toplanıp zımparalanan ve koruyucu uygulanan kuru ağaç dalları üzerine el emeği ile işlenen bohem duvar makromesi. Salon, yatak odası, balkon veya ofislerinize huzur veren doğal bir dokunuş kazandırır.",
        dimensions: "Ahşap Dal Genişliği: 45 cm | Saçak Boyu: 65 cm",
        material: "Doğal Ahşap Dal, %100 Bükümlü Pamuk Makrome İpi",
        productionTime: "3 - 5 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle tek tek ilmek atarak hazırlıyorum.",
        colorNote: "Klasik doğal ekru rengin yanında yaprak detaylarında ve ara düğümlerde istediğiniz renk tonları uygulanabilir.",
        colors: [
            { name: "Klasik Doğal Ekru", code: "#FAF6EE" },
            { name: "Ekru & Kiremit Detaylı", code: "#DCA798" },
            { name: "Ekru & Adaçayı Yeşili", code: "#B5C99A" },
            { name: "Ekru & Hardal", code: "#E9C46A" }
        ],
        careInstructions: "Belirli aralıklarla saçak kısımlarını geniş dişli bir tarakla nazikçe tarayabilirsiniz.",
        badge: "Dekorasyon"
    },
    {
        id: "el-yapimi-makrome-anahtarlik",
        name: "Makrome Anahtarlık & Çanta Süsü (İkili Set)",
        category: "diger",
        categoryLabel: "Diğer",
        price: "180 ₺",
        shortDesc: "Gold klipsli, çantalarınıza ve anahtarlarınıza neşe katacak ikili set.",
        description: "Hem anahtarlarınızı kolayca bulmanızı sağlayan hem de çantalarınıza zarif bir süs katan el yapımı makrome anahtarlık seti. Sağlam gold metal döner klipsleri ve zarif düğümleriyle uzun ömürlü kullanım sağlar. Sevdikleriniz için harika ve anlamlı bir hediye seçeneğidir.",
        dimensions: "Uzunluk: 16 cm (klips dahil)",
        material: "Pamuk Makrome İpi, Paslanmaz Gold Metal Klips",
        productionTime: "1 - 2 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle sevgiyle yapıyorum.",
        colorNote: "Farklı renk seçenekleri mevcuttur. İkili sette dilerseniz iki farklı rengi kombinleyebilirsiniz.",
        colors: [
            { name: "Kiremit & Ekru", code: "#C87965" },
            { name: "Adaçayı & Pudra", code: "#8A9A86" },
            { name: "Hardal & Karamel", code: "#D4A373" },
            { name: "Siyah & Taş Rengi", code: "#3A3532" }
        ],
        careInstructions: "Püskül kısmını zaman zaman fırçalayarak düzeltebilirsiniz.",
        badge: "Hediye Önerisi"
    },
    {
        id: "orgu-bardak-altligi-seti",
        name: "Örgü Bardak & Kupa Altlığı Seti (4'lü)",
        category: "diger",
        categoryLabel: "Diğer",
        price: "240 ₺",
        shortDesc: "Püsküllü kenarları ve yumuşak dokusuyla sofralarınıza şıklık katan 4'lü set.",
        description: "Kahve ve çay keyiflerinize sıcaklık katacak 4 adet el örgüsü bardak altlığı seti. Sıcak kupaların masanızı zedelemesini önlerken estetik bir sofra düzeni yaratır. Özel bağlama ipi ile hediye paketi olarak gönderilir.",
        dimensions: "Çap: 13 cm (saçaklar dahil)",
        material: "%100 Kalın Pamuk Halat İplik",
        productionTime: "2 - 3 iş günü",
        artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle özenle sarıp dikiyorum.",
        colorNote: "Tek renk 4'lü set veya 4 farklı renkten oluşan karma set seçebilirsiniz.",
        colors: [
            { name: "Ekru / Krem", code: "#FAF6EE" },
            { name: "Kiremit Tonu", code: "#C87965" },
            { name: "Adaçayı Yeşili", code: "#8A9A86" },
            { name: "Karma Renkli (4 Farklı)", code: "#D4A373" }
        ],
        careInstructions: "Leke durumunda ılık su ve sabunla elde yıkayınız, düz zeminde kurutunuz.",
        badge: "Set Ürün"
    }
];
