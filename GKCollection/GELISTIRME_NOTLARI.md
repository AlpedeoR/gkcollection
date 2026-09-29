# GKCollection Geliştirme Notları & Kullanım Kılavuzu

Bu belge, GKCollection web sitesine yapılan tüm geliştirmeleri, mimari kararları, eklenen dosyaları ve sitenin nasıl çalıştığını adım adım açıklamaktadır.

---

## 📌 1. Yapılan Genel Değişiklikler ve Mimari Özeti

| Dosya | Görevi ve Yapılan Değişiklikler |
| :--- | :--- |
| **`products.js`** | **Merkezi Ürün Veritabanı:** Tüm ürünlerin (Çantalar, Cüzdanlar, Diğer) isimleri, kategorileri, fiyatları, detaylı açıklamaları, renk seçenekleri, ölçüleri ve el emeği notlarının tutulduğu dosya. |
| **`main.js`** | **İnteraktif İş Mantığı:** Kategori filtreleme, ürün kartlarına tıklanınca detay sayfasına yönlendirme, URL parametresinden ürün verisini çekip detay sayfasını oluşturma, renk seçimi ve WhatsApp sipariş şablonu oluşturma. |
| **`index.html`** | **Ana Sayfa:** Karşılama alanı (Hero), Koleksiyon altındaki kategori butonları (Tümü, Çantalar, Cüzdanlar, Diğer), Hikayemiz bölümü ve yapılandırılmış İletişim alanı. |
| **`urun-detay.html`** | **Ürün Detay Sayfası:** Tıklanan ürünün açıldığı sayfa. Sayfa yolu (breadcrumbs), büyük ürün vitrini, özel el emeği garanti kutusu, renk seçici butonlar, sipariş butonları ve benzer ürünler önerisi. |
| **`style.css`** | **Tasarım & Responsive Stil:** Doğal krem (`#FDFBF7`), kiremit (`#C87965`) ve toprak tonlarıyla el emeği butik ruhunu yansıtan modern CSS kodları, mobil uyumlu hamburger menü ve ürün ızgarası. |

---

## 📂 2. Adım Adım Neden ve Nasıl Yapıldı?

### Adım 1: Merkezi Ürün Veritabanı Oluşturuldu (`products.js`)
* **Neden yapıldı?**  
  Her ürün için tek tek ayrı HTML dosyaları yazmak yerine, ürünleri tek bir merkezden yönetmek çok daha kolay ve profesyoneldir. Yeni bir ürün eklemek veya bir ürünün fiyatını/rengini değiştirmek istediğinizde sadece bu dosyadaki listeyi güncellemeniz yeterlidir.
* **Nasıl yapıldı?**  
  Ürünler 3 ana kategoride sınıflandırıldı:
  1. `cantalar` (Bohem Omuz Çantası, Burgu Baget Çanta, Hasır & Jüt Tote Çanta)
  2. `cuzdanlar` (Mini Makrome Kartlık, Zarf Model Portföy, Püsküllü Bohem Cüzdan)
  3. `diger` (Makrome Duvar Dekoru, Anahtarlık Seti, Örgü Bardak Altlığı Seti)  
  Her ürüne ait `colors` dizisi, `dimensions` (ölçüler), `material` (malzeme) ve özel el emeği notları tanımlandı.

---

### Adım 2: Koleksiyon ve Kategori Filtreleme Sistemi (`index.html` & `main.js`)
* **Neden yapıldı?**  
  İstediğiniz gibi ürünleri **Koleksiyon** çatısı altında **Çantalar**, **Cüzdanlar** ve **Diğer** şeklinde sınıflandırmak için.
* **Nasıl yapıldı?**  
  - `index.html` içerisine 4 adet filtre butonu eklendi: `Tüm Ürünler`, `👜 Çantalar`, `👛 Cüzdanlar`, `✨ Diğer Tasarımlar`.
  - `main.js` içerisindeki `initProductListing()` fonksiyonu, tıklanan kategori butonunu dinler (`data-category`).
  - Sayfa yenilenmeden, seçilen kategoriye ait ürünler anında ekranda listelenir.
  - Her ürün kartında kategorisi, adı, kısa açıklaması, mevcut renk noktacıkları, fiyatı ve "İncele" butonu yer alır.

---

### Adım 3: Ürün Detay Sayfası ve URL Yönlendirmesi (`urun-detay.html`)
* **Neden yapıldı?**  
  Ürün kartına tıklandığında ilgili ürünün tüm detaylarının, büyük görselinin, ölçülerinin ve sipariş seçeneklerinin yer aldığı bir sayfaya gidilmesi gerekiyordu.
* **Nasıl yapıldı?**  
  - Ürün kartına tıklandığında tarayıcı `urun-detay.html?id=urun-id-kodu` adresine yönlenir.
  - `main.js`, URL'deki `?id=...` parametresini okur (`new URLSearchParams`).
  - Veritabanından o ID'ye ait ürünü bulur ve sayfayı sıfırdan o ürüne göre giydirir.
  - Sayfa başlığı (title) ve sayfa yolu (breadcrumbs: *Ana Sayfa > Koleksiyon > Çantalar > Ürün Adı*) otomatik güncellenir.
  - Sayfanın en altında müşterinin sitede gezmeye devam etmesi için *"Koleksiyondan Diğer Seçenekler"* (benzer ürünler) gösterilir.

---

### Adım 4: "Her Ürün Sipariş Üzerine Yapılır" Vurgusu ve Renk Seçenekleri
* **Neden yapıldı?**  
  Özellikle belirttiğiniz: *"Her ürün sipariş üzerine yapılır, %100 Kendi ellerimle yapıyorum"* vurgusunu ve farklı renk seçeneklerinin olduğunu müşteriye en güven verici şekilde göstermek için.
* **Nasıl yapıldı?**  
  1. **El Emeği Vurgu Kutusu (`artisan-guarantee-box`):**  
     Ürün detay sayfasında fiyatın hemen altına göz alıcı, sıcak tonlu özel bir kutu eklendi:
     > ✨ **Özel Sipariş & El Emeği Güvencesi**  
     > *"Her ürün sipariş üzerine yapılır, %100 kendi ellerimle yapıyorum."*  
     > Seri üretim fabrikasyon ürünler yerine, doğrudan size özel, ilmek ilmek dokunmuş benzersiz bir tasarım teslim alırsınız.
  2. **İnteraktif Renk Seçici (`color-swatches`):**  
     Ürünün sahip olduğu renkler yuvarlak renk numuneleri ve isimleriyle listelendi. Müşteri bir renge tıkladığında:
     - Seçilen rengin ismi anında güncellenir.
     - Altındaki WhatsApp sipariş butonunun mesajına seçilen renk otomatik eklenir (Örn: *"Merhaba GKCollection! Bohem Makrome Omuz Çantası ürününüz hakkında bilgi almak istiyorum. Tercih ettiğim renk: Adaçayı Yeşili."*).
  3. **Özel Renk Notu:**  
     Renk kutusunun altına *"Farklı renk ve özel ebat talepleriniz mevcuttur. Dilediğiniz özel ton için sipariş verirken belirtebilirsiniz."* notu eklendi.

---

### Adım 5: Hikayemiz ve İletişim Hazırlığı (`index.html`)
* **Neden yapıldı?**  
  Web sitesinin eksik olan hikaye bölümünü tamamlamak, el yapımı markanın sıcaklığını aktarmak ve bir sonraki adımda yapacağımız iletişim bilgilerine zemin hazırlamak için.
* **Nasıl yapıldı?**  
  - `#hikayemiz` bölümü eklenerek atölye ruhu, doğal iplikler (pamuk & jüt) ve kişiye özel üretim süreci (3-5 iş günü) anlatıldı.
  - `#iletisim` alanında e-posta, Instagram ve WhatsApp için hazır şablonlar oluşturuldu.

---

## 🛠️ 3. Yeni Ürün Nasıl Eklenir veya Düzenlenir?

Yeni bir ürün eklemek veya var olan bir ürünü değiştirmek için sadece **`products.js`** dosyasını açmanız yeterlidir.

Örnek ürün şablonu:
```javascript
{
    id: "yeni-canta-modeli",               // Linkte görünecek benzersiz kod
    name: "Özel Tasarım Zincirli Çanta",    // Ürün adı
    category: "cantalar",                  // "cantalar", "cuzdanlar" veya "diger"
    categoryLabel: "Çantalar",             // Ekranda yazacak kategori adı
    price: "890 ₺",                        // Fiyat
    shortDesc: "Kısa tanıtım yazısı.",
    description: "Detaylı ürün açıklaması.",
    dimensions: "Genişlik: 26 cm | Yükseklik: 18 cm",
    material: "Doğal Pamuk Kordon İp",
    productionTime: "3 - 5 iş günü",
    artisanNote: "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle yapıyorum.",
    colorNote: "Farklı renk seçenekleri mevcuttur.",
    colors: [
        { name: "Ekru", code: "#F4EFE6" },
        { name: "Kiremit", code: "#C87965" },
        { name: "Siyah", code: "#2B2B2B" }
    ],
    careInstructions: "Nemli bezle temizleyiniz.",
    badge: "Yeni",                         // İsteğe bağlı etiket ("Çok Satan", "Yeni" vb.)
    image: "images/yeni-canta.jpg"         // Fotoğraf eklediğinizde buraya yolunu yazabilirsiniz
}
```

---

## 🔜 4. Sıradaki Adım: İletişim Bilgileri
Sizin de belirttiğiniz gibi:
- Telefon numaranız ve WhatsApp hattınız
- Gerçek Instagram kullanıcı adınız
- E-posta adresiniz
- Varsa şehir/atölye konumu veya kargo/sipariş koşulları  
bir sonraki adımda iletişim alanına ve sipariş butonlarına tam olarak entegre edilecektir.
