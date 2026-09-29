/**
 * GKCollection - Ana JavaScript Dosyası (main.js)
 * 
 * Bu dosya:
 * 1. Koleksiyon altındaki kategorilere göre filtreleme yapar (Tümü, Çantalar, Cüzdanlar, Diğer).
 * 2. Ürün kartına tıklandığında ürünün detay sayfasına (urun-detay.html?id=...) gitmesini sağlar.
 * 3. Ürün detay sayfasında seçilen ürünün bilgilerini, el emeği mesajını ve renk seçeneklerini dinamik gösterir.
 * 4. Mobil menü açılıp kapanmasını yönetir.
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Mobil Menü Toggle İşlevi
    setupMobileMenu();

    // 2. Ana Sayfa Koleksiyon Filtreleme & Ürün Listesi
    const productGrid = document.getElementById("product-grid");
    if (productGrid) {
        initProductListing();
    }

    // 3. Ürün Detay Sayfası Yükleme
    const detailContainer = document.getElementById("product-detail-container");
    if (detailContainer) {
        initProductDetailPage();
    }
});

/**
 * Mobil Menü Aç/Kapa
 */
function setupMobileMenu() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector("nav ul");

    if (navToggle && navMenu) {
        navToggle.addEventListener("click", () => {
            navToggle.classList.toggle("active");
            navMenu.classList.toggle("open");
        });

        // Menüdeki linklere tıklanınca menüyü kapat
        navMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navToggle.classList.remove("active");
                navMenu.classList.remove("open");
            });
        });
    }
}

/**
 * Ürün İkonu / Çizimi Üreten Yardımcı Fonksiyon
 * (Gerçek fotoğraflar eklenene kadar şık ve zarif bir placeholder sunar)
 */
function getCategoryIcon(category) {
    if (category === "cantalar") {
        return `
            <svg class="placeholder-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 22V14a12 12 0 0 1 24 0v8" />
                <rect x="10" y="22" width="44" height="34" rx="6" />
                <path d="M10 32h44" />
                <path d="M32 30v4" />
                <path d="M18 40l6 6" />
                <path d="M40 40l6 6" />
            </svg>
        `;
    } else if (category === "cuzdanlar") {
        return `
            <svg class="placeholder-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="8" y="16" width="48" height="34" rx="5" />
                <path d="M8 26h48" />
                <rect x="42" y="30" width="14" height="10" rx="2" />
                <circle cx="46" cy="35" r="1.5" fill="currentColor" />
            </svg>
        `;
    } else {
        return `
            <svg class="placeholder-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 18h40" />
                <path d="M32 18v8" />
                <path d="M22 26l10 10 10-10" />
                <path d="M22 36l10 10 10-10" />
                <path d="M32 46v12" />
                <path d="M26 58h12" />
            </svg>
        `;
    }
}

/**
 * ANA SAYFA: Koleksiyon Filtreleme ve Ürün Listesi
 */
function initProductListing() {
    const productGrid = document.getElementById("product-grid");
    const filterButtons = document.querySelectorAll(".filter-btn");

    if (typeof PRODUCTS_DATA === "undefined" || !PRODUCTS_DATA.length) {
        productGrid.innerHTML = "<p>Ürünler yüklenirken bir sorun oluştu.</p>";
        return;
    }

    // İlk açılışta tüm ürünleri listele
    renderProducts("all");

    // Kategori butonlarına tıklama olayları
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Aktif buton sınıfını güncelle
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const selectedCategory = button.getAttribute("data-category");
            renderProducts(selectedCategory);
        });
    });

    function renderProducts(category) {
        // İlgili kategoriye göre ürünleri filtrele
        const filtered = category === "all" 
            ? PRODUCTS_DATA 
            : PRODUCTS_DATA.filter(item => item.category === category);

        if (filtered.length === 0) {
            productGrid.innerHTML = `
                <div class="empty-state">
                    <p>Bu kategoride henüz ürün bulunmuyor.</p>
                </div>
            `;
            return;
        }

        // Kartları HTML olarak oluştur
        productGrid.innerHTML = filtered.map(product => {
            // Renk önizleme noktacıkları
            const colorDots = product.colors ? product.colors.slice(0, 4).map(c => 
                `<span class="color-dot" style="background-color: ${c.code};" title="${c.name}"></span>`
            ).join("") : "";

            const extraColors = product.colors && product.colors.length > 4 
                ? `<span class="color-more">+${product.colors.length - 4}</span>` 
                : "";

            // Ürün görseli veya zarif SVG yer tutucu
            const visualHtml = product.image 
                ? `<img src="${product.image}" alt="${product.name}" class="product-thumb-img">`
                : `
                    <div class="img-placeholder">
                        ${getCategoryIcon(product.category)}
                        <span class="placeholder-caption">El Emeği Özel Tasarım</span>
                    </div>
                `;

            return `
                <article class="product-card" onclick="window.location.href='urun-detay.html?id=${encodeURIComponent(product.id)}'">
                    <div class="card-visual">
                        ${product.badge ? `<span class="badge">${product.badge}</span>` : ""}
                        ${visualHtml}
                    </div>
                    <div class="card-body">
                        <span class="card-category">${product.categoryLabel}</span>
                        <h3 class="card-title">${product.name}</h3>
                        <p class="card-desc">${product.shortDesc}</p>
                        
                        <div class="card-colors">
                            <span class="colors-label">Renkler:</span>
                            <div class="dots-wrapper">
                                ${colorDots}
                                ${extraColors}
                            </div>
                        </div>

                        <div class="card-footer">
                            <span class="card-price">${product.price}</span>
                            <a href="urun-detay.html?id=${encodeURIComponent(product.id)}" class="btn-detail" onclick="event.stopPropagation();">
                                İncele &rarr;
                            </a>
                        </div>
                    </div>
                </article>
            `;
        }).join("");
    }
}

/**
 * ÜRÜN DETAY SAYFASI: Seçilen Ürünü Yükleme ve Etkileşimler
 */
function initProductDetailPage() {
    const detailContainer = document.getElementById("product-detail-container");
    const breadcrumbCategory = document.getElementById("breadcrumb-category");
    const breadcrumbProduct = document.getElementById("breadcrumb-product");

    // URL'den ?id=... parametresini al
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId || typeof PRODUCTS_DATA === "undefined") {
        showProductNotFound(detailContainer);
        return;
    }

    // Ürünü veritabanında bul
    const product = PRODUCTS_DATA.find(item => item.id === productId);

    if (!product) {
        showProductNotFound(detailContainer);
        return;
    }

    // Sayfa Başlığını Güncelle
    document.title = `${product.name} | GKCollection`;

    // Breadcrumb (Sayfa Yolu) Güncelle
    if (breadcrumbCategory) {
        breadcrumbCategory.textContent = product.categoryLabel;
        breadcrumbCategory.href = `index.html#koleksiyon`;
    }
    if (breadcrumbProduct) {
        breadcrumbProduct.textContent = product.name;
    }

    // Varsayılan seçili renk (ilk renk)
    let selectedColor = product.colors && product.colors.length > 0 ? product.colors[0].name : "Doğal";

    // Renk seçenekleri HTML'i
    const colorsHtml = product.colors && product.colors.length > 0 ? `
        <div class="detail-color-selection">
            <div class="color-selection-header">
                <strong>Renk Seçenekleri:</strong>
                <span id="selected-color-text" class="selected-color-badge">${selectedColor}</span>
            </div>
            <div class="color-swatches" id="color-swatches">
                ${product.colors.map((c, index) => `
                    <button type="button" 
                            class="color-swatch-btn ${index === 0 ? 'active' : ''}" 
                            data-color-name="${c.name}" 
                            title="${c.name}"
                            aria-label="${c.name}">
                        <span class="swatch-circle" style="background-color: ${c.code};"></span>
                        <span class="swatch-name">${c.name}</span>
                    </button>
                `).join("")}
            </div>
            <p class="custom-color-note">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                ${product.colorNote || "Farklı renk ve özel ebat talepleriniz mevcuttur. Dilediğiniz özel ton için sipariş verirken belirtebilirsiniz."}
            </p>
        </div>
    ` : "";

    // Ürün görseli / placeholder
    const visualContent = product.image 
        ? `<img src="${product.image}" alt="${product.name}" class="detail-main-img">`
        : `
            <div class="detail-placeholder">
                ${getCategoryIcon(product.category)}
                <div class="placeholder-text-group">
                    <span class="artisan-stamp">%100 El Emeği</span>
                    <p>Sizin için özel olarak üretilecektir</p>
                </div>
            </div>
        `;

    // Detay sayfası içeriği
    detailContainer.innerHTML = `
        <div class="product-detail-layout">
            <!-- Sol Sütun: Görsel ve El Emeği Rozeti -->
            <div class="detail-visual-col">
                <div class="detail-visual-card">
                    ${product.badge ? `<span class="detail-badge">${product.badge}</span>` : ""}
                    ${visualContent}
                </div>
                
                <div class="detail-trust-badges">
                    <div class="trust-badge-item">
                        <span class="trust-icon">🧶</span>
                        <div>
                            <strong>%100 El Yapımı</strong>
                            <p>Özen ve sevgiyle örülür</p>
                        </div>
                    </div>
                    <div class="trust-badge-item">
                        <span class="trust-icon">🌿</span>
                        <div>
                            <strong>Doğal Malzemeler</strong>
                            <p>Çevre dostu pamuk & jüt</p>
                        </div>
                    </div>
                    <div class="trust-badge-item">
                        <span class="trust-icon">⏳</span>
                        <div>
                            <strong>Sipariş Üzerine</strong>
                            <p>${product.productionTime || "3-5 iş günü"}</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sağ Sütun: Başlık, Fiyat, El Emeği Notu, Renkler ve Sipariş -->
            <div class="detail-info-col">
                <span class="detail-category-tag">${product.categoryLabel}</span>
                <h1 class="detail-title">${product.name}</h1>
                <div class="detail-price-box">
                    <span class="detail-price">${product.price}</span>
                    <span class="tax-info">Kişiye özel el işçiliği dahil</span>
                </div>

                <!-- KULLANICININ ÖZEL İSTEDİĞİ ÖNEMLİ VURGU KUTUSU -->
                <div class="artisan-guarantee-box">
                    <div class="artisan-icon">✨</div>
                    <div class="artisan-text">
                        <h4>Özel Sipariş & El Emeği Güvencesi</h4>
                        <p class="highlighted-quote">"${product.artisanNote || "Her ürün sipariş üzerine yapılır, %100 kendi ellerimle yapıyorum."}"</p>
                        <small>Seri üretim fabrikasyon ürünler yerine, doğrudan size özel, ilmek ilmek dokunmuş benzersiz bir tasarım teslim alırsınız.</small>
                    </div>
                </div>

                <!-- Renk Seçenekleri -->
                ${colorsHtml}

                <!-- Sipariş ve İletişim Butonları -->
                <div class="detail-actions">
                    <a id="btn-whatsapp-order" href="#" target="_blank" class="btn btn-primary btn-order">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893 0-3.177-1.237-6.164-3.488-8.413z"/>
                        </svg>
                        Sipariş Ver / WhatsApp'tan Yaz
                    </a>
                    <a href="index.html#iletisim" class="btn btn-secondary">
                        İletişim Bilgileri
                    </a>
                </div>

                <!-- Detaylı Bilgi Sekmeleri -->
                <div class="detail-accordion">
                    <div class="accordion-item open">
                        <h3 class="accordion-title">Ürün Açıklaması</h3>
                        <div class="accordion-content">
                            <p>${product.description}</p>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h3 class="accordion-title">Özellikler & Malzeme</h3>
                        <div class="accordion-content">
                            <ul class="specs-list">
                                <li><strong>Malzeme:</strong> ${product.material}</li>
                                <li><strong>Ölçüler:</strong> ${product.dimensions}</li>
                                <li><strong>Üretim Süresi:</strong> ${product.productionTime}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="accordion-item">
                        <h3 class="accordion-title">Bakım & Temizlik</h3>
                        <div class="accordion-content">
                            <p>${product.careInstructions}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    `;

    // Renk Seçimi Tıklama Olayları ve WhatsApp Link Güncellemesi
    setupColorSelection(product, selectedColor);

    // İlgili Diğer Ürünleri Yükle
    renderRelatedProducts(product);
}

/**
 * Renk Seçimini ve WhatsApp Sipariş Butonunu Yönetir
 */
function setupColorSelection(product, initialColor) {
    let currentColor = initialColor;
    const colorTextBadge = document.getElementById("selected-color-text");
    const swatchButtons = document.querySelectorAll(".color-swatch-btn");
    const whatsappBtn = document.getElementById("btn-whatsapp-order");

    function updateWhatsappLink() {
        if (!whatsappBtn) return;
        // İletişim bilgisi henüz kullanıcı tarafından tam girilmediyse genel bir WhatsApp mesaj şablonu oluşturuyoruz
        const message = `Merhaba GKCollection! "${product.name}" ürününüz hakkında bilgi almak ve sipariş vermek istiyorum. Tercih ettiğim renk: ${currentColor}.`;
        const encodedMsg = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/?text=${encodedMsg}`;
    }

    updateWhatsappLink();

    swatchButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            swatchButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentColor = btn.getAttribute("data-color-name");
            if (colorTextBadge) {
                colorTextBadge.textContent = currentColor;
            }
            updateWhatsappLink();
        });
    });
}

/**
 * İlgili / Diğer Ürünleri Listeler
 */
function renderRelatedProducts(currentProduct) {
    const relatedGrid = document.getElementById("related-products-grid");
    if (!relatedGrid) return;

    // Şu anki ürün hariç, tercihen aynı kategorideki diğer ürünleri seç
    let related = PRODUCTS_DATA.filter(item => item.id !== currentProduct.id && item.category === currentProduct.category);
    
    // Eğer aynı kategoride yeterli ürün yoksa diğer kategorilerden tamamla
    if (related.length < 3) {
        const others = PRODUCTS_DATA.filter(item => item.id !== currentProduct.id && item.category !== currentProduct.category);
        related = related.concat(others);
    }

    const displayItems = related.slice(0, 3);

    relatedGrid.innerHTML = displayItems.map(item => `
        <article class="product-card" onclick="window.location.href='urun-detay.html?id=${encodeURIComponent(item.id)}'">
            <div class="card-visual">
                ${item.badge ? `<span class="badge">${item.badge}</span>` : ""}
                <div class="img-placeholder mini">
                    ${getCategoryIcon(item.category)}
                </div>
            </div>
            <div class="card-body">
                <span class="card-category">${item.categoryLabel}</span>
                <h4 class="card-title">${item.name}</h4>
                <div class="card-footer">
                    <span class="card-price">${item.price}</span>
                    <a href="urun-detay.html?id=${encodeURIComponent(item.id)}" class="btn-detail">İncele &rarr;</a>
                </div>
            </div>
        </article>
    `).join("");
}

/**
 * Ürün Bulunamadı Durumu
 */
function showProductNotFound(container) {
    container.innerHTML = `
        <div class="not-found-box">
            <h2>Ürün Bulunamadı</h2>
            <p>Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
            <a href="index.html#koleksiyon" class="btn btn-primary" style="margin-top: 20px;">
                Tüm Koleksiyonu Görüntüle
            </a>
        </div>
    `;
}
