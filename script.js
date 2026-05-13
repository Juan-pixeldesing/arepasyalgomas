

// --- VARIABLES EDITABLES ---
const WHATSAPP_NUMBER = "59897330314";
const INSTAGRAM_URL = "https://www.instagram.com/arepasyalgomas_uy/";
const BUSINESS_NAME = "Arepas y Algo Más";
const ADDRESS = "Av. Giannattasio KM 22,000, 15000 Ciudad de la Costa, Canelones";
const HOURS = "Martes a Viernes: 19:00 - 23:00 \n Sábados y Domingos: 13:00 - 23:00";
// --- IMÁGENES CARPETA IMG ---
const imagesArray = Array.from({ length: 22 }, (_, i) => `img-${i + 1}.jpg`);

// --- ESTADO GLOBAL ---
let cart = [];
let currentCategory = 'Todas';
let toggleCartGlobal;

// --- ESTADO MODAL PRODUCTO ---
let currentConfigProduct = null;
let modalQty = 1;
let selectedOptions = {};

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('info-direccion').textContent = ADDRESS;
    document.getElementById('info-horarios').innerHTML = HOURS.replace(/\n/g, '<br>');
    document.getElementById('info-whatsapp').textContent = `+${WHATSAPP_NUMBER.slice(0, 3)} ${WHATSAPP_NUMBER.slice(3, 5)} ${WHATSAPP_NUMBER.slice(5, 8)} ${WHATSAPP_NUMBER.slice(8)}`;

    document.getElementById('btn-escribir-wa').href = `https://wa.me/${WHATSAPP_NUMBER}`;
    document.getElementById('hero-whatsapp-btn').href = `https://wa.me/${WHATSAPP_NUMBER}`;
    document.getElementById('btn-instagram').href = INSTAGRAM_URL;

    initNavbar();

    initMenu();
    initCarousel();
    initGallery();
    initCart();
    initProductModal();
    initReservations();
    initScrollReveal();

    // Set min date for reservations
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('res-fecha').setAttribute('min', today);
});

// --- SCROLL REVEAL ---
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.05
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('reveal');
        // Si ya es visible, revelarlo de inmediato
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            section.classList.add('reveal-active');
        }
        observer.observe(section);
    });
}

// --- NAVBAR ---
function initNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sticky navbar glass effect on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// --- MENÚ ---
function initMenu() {
    const grid = document.getElementById('menu-grid');
    const filtersContainer = document.getElementById('category-filters');
    const searchInput = document.getElementById('search-input');

    const orderedCategories = [
        'Todas', 'Arepas', 'Combos & Promos', 'Comida China', 'Cachapas',
        'Tequeños', 'Empanadas', 'Picadas & Entradas', 'Bebidas', 'Postres', 'Salsas & Extras', 'Otros & Snacks'
    ];

    // Asegurar que solo añadimos las que existen, más las adicionales
    const allCategoriesInMenu = [...new Set(MENU_DATA.map(item => item.category))];
    const finalCategories = [];

    // Añadir primero las ordenadas
    orderedCategories.forEach(cat => {
        if (cat === 'Todas' || allCategoriesInMenu.includes(cat)) {
            finalCategories.push(cat);
        }
    });

    // Añadir cualquier otra que no estuviera en el orden
    allCategoriesInMenu.forEach(cat => {
        if (!finalCategories.includes(cat)) {
            finalCategories.push(cat);
        }
    });

    // Renderizar filtros
    finalCategories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${cat === 'Todas' ? 'active' : ''}`;
        btn.textContent = cat;
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat;
            renderMenu(searchInput.value);
        });
        filtersContainer.appendChild(btn);
    });

    // Búsqueda
    searchInput.addEventListener('input', (e) => {
        renderMenu(e.target.value);
    });

    renderMenu();
}

function renderMenu(searchTerm = '') {
    const grid = document.getElementById('menu-grid');
    grid.innerHTML = '';

    const filtered = MENU_DATA.filter(item => {
        const matchCategory = currentCategory === 'Todas' || item.category === currentCategory;
        const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.desc.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    // Ajuste dinámico: priorizar horizontal si son pocos, máximo 3 filas
    let numRows = 1;
    if (filtered.length > 4) numRows = 2;
    if (filtered.length > 8) numRows = 3;
    grid.style.gridTemplateRows = `repeat(${numRows}, 150px)`;
    grid.style.gridTemplateColumns = 'initial';
    grid.style.gridAutoFlow = 'column';
    grid.style.gridAutoColumns = '320px';

    if (filtered.length === 0) {
        grid.style.gridTemplateRows = "auto";
        grid.style.gridTemplateColumns = "1fr";
        grid.innerHTML = `<p style="text-align:center; color: var(--text-muted); padding: 2rem;">No se encontraron productos.</p>`;
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        const displayPrice = item.hasOptions ? (item.priceBase > 0 ? `Desde $${item.priceBase}` : "Ver opciones") : `$${item.price}`;
        const btnText = "Agregar";
        const btnAction = item.hasOptions ? `openProductModal("${item.id}")` : `addToCart("${item.id}")`;

        card.style.cursor = "pointer";
        card.setAttribute("onclick", btnAction);

        let imgSrc = item.img;
        if (!imgSrc) {
            if (item.category === "Arepas") imgSrc = "IMG/menu-arepa.png";
            else if (item.category === "Cachapas") imgSrc = "";
            else if (item.category === "Comida China") imgSrc = "";
            else if (item.category === "Tequeños") imgSrc = "";
            else if (item.category === "Empanadas") imgSrc = "IMG/menu-empanada.png";
            else if (item.category === "Postres") imgSrc = "IMG/menu-postre.png";
            else imgSrc = "IMG/img-1.jpg";
        }

        card.innerHTML = `
            <div class="menu-card-img">
                <img src="${imgSrc}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="menu-price">${displayPrice}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <div class="menu-card-footer">
                    <button class="btn-add">
                        <i class="fas ${item.hasOptions ? "fa-cog" : "fa-plus"}"></i> ${btnText}
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });

    grid.scrollTo({ left: 0, behavior: "smooth" });
}



// --- CARRUSEL ---
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const nav = document.getElementById('carousel-nav');

    if (imagesArray.length === 0) return;

    // Crear slides
    imagesArray.forEach((img, index) => {
        const li = document.createElement('li');
        li.className = 'carousel-slide';
        const imgEl = document.createElement('img');
        imgEl.src = `IMG/${img}`;
        imgEl.alt = `Foto ${index + 1} de Arepas y Algo Más`;
        imgEl.loading = "lazy";
        li.appendChild(imgEl);
        track.appendChild(li);

        // Indicador
        const dot = document.createElement('button');
        dot.className = `carousel-indicator ${index === 0 ? 'current-slide' : ''}`;
        dot.setAttribute('aria-label', `Ir a diapositiva ${index + 1}`);
        dot.addEventListener('click', () => moveToSlide(index));
        nav.appendChild(dot);
    });

    let currentIndex = 0;
    let autoplayInterval;

    function moveToSlide(index) {
        if (index < 0) index = imagesArray.length - 1;
        if (index >= imagesArray.length) index = 0;

        track.style.transform = `translateX(-${index * 100}%)`;

        const dots = nav.querySelectorAll('.carousel-indicator');
        dots.forEach(d => d.classList.remove('current-slide'));
        if (dots[index]) dots[index].classList.add('current-slide');

        currentIndex = index;
    }

    document.getElementById('carousel-prev').addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
        resetAutoplay();
    });

    document.getElementById('carousel-next').addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
        resetAutoplay();
    });

    function startAutoplay() {
        autoplayInterval = setInterval(() => {
            moveToSlide(currentIndex + 1);
        }, 4000);
    }

    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }

    startAutoplay();

    // Pausar en hover
    track.parentElement.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    track.parentElement.addEventListener('mouseleave', startAutoplay);
}

// --- GALERÍA Y LIGHTBOX ---
function initGallery() {
    const grid = document.getElementById('gallery-grid');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    // Usamos más imágenes para permitir el scroll
    const galleryImages = imagesArray.slice(0, 30); // 30 imágenes para llenar el carrusel

    galleryImages.forEach(img => {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        const imgEl = document.createElement('img');
        imgEl.src = `IMG/${img}`;
        imgEl.alt = "Foto de platillo o local";
        imgEl.loading = "lazy";

        div.addEventListener('click', () => {
            lightboxImg.src = `IMG/${img}`;
            lightbox.style.display = 'block';
        });

        div.appendChild(imgEl);
        grid.appendChild(div);
    });

    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Centrar la galería al inicio
    setTimeout(() => {
        const center = (grid.scrollWidth - grid.clientWidth) / 2;
        grid.scrollLeft = center;
    }, 500);
}

// --- CARRITO DE COMPRAS ---
function initCart() {
    const cartBtn = document.getElementById('cart-floating-btn');
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartClose = document.getElementById('cart-close');
    const checkoutBtn = document.getElementById('btn-checkout');

    toggleCartGlobal = function (forceOpen = false) {
        if (forceOpen) {
            cartPanel.classList.add('active');
            cartOverlay.classList.add('active');
        } else {
            cartPanel.classList.toggle('active');
            cartOverlay.classList.toggle('active');
        }
    };

    cartBtn.addEventListener('click', () => toggleCartGlobal());
    cartClose.addEventListener('click', () => toggleCartGlobal());
    cartOverlay.addEventListener('click', () => toggleCartGlobal());

    checkoutBtn.addEventListener('click', handleCheckout);
}

function addToCart(productId, config = null) {
    const product = MENU_DATA.find(p => p.id == productId);
    if (!product) return;

    if (config) {
        // Items con configuración son únicos basados en su config
        const configId = btoa(JSON.stringify(config));
        const existingItem = cart.find(item => item.id == productId && item.configId === configId);

        if (existingItem) {
            existingItem.qty += config.qty;
        } else {
            cart.push({
                ...product,
                price: config.totalPrice / config.qty,
                qty: config.qty,
                config: config.details,
                configId: configId,
                notes: config.notes
            });
        }
        showToast(`${product.name} configurado agregado`);
    } else {
        // Items simples
        const existingItem = cart.find(item => item.id == productId && !item.config);
        if (existingItem) {
            existingItem.qty++;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        showToast(`${product.name} agregado`);
    }

    updateCartUI();

    // Animación feedback
    const badge = document.getElementById('cart-badge');
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);
}

// --- LOGICA MODAL PRODUCTO ---
function initProductModal() {
    const overlay = document.getElementById('product-modal-overlay');
    const closeBtn = document.getElementById('product-modal-close');
    const minusBtn = document.getElementById('modal-qty-minus');
    const plusBtn = document.getElementById('modal-qty-plus');
    const addBtn = document.getElementById('btn-modal-add');

    closeBtn.onclick = closeProductModal;
    overlay.onclick = closeProductModal;

    minusBtn.onclick = () => updateModalQty(-1);
    plusBtn.onclick = () => updateModalQty(1);

    addBtn.onclick = handleModalAdd;
}

function openProductModal(productId) {
    const product = MENU_DATA.find(p => p.id == productId);
    if (!product) return;

    currentConfigProduct = product;
    modalQty = 1;
    selectedOptions = {};

    // Inicializar opciones por defecto (primera opción si es requerida)
    if (product.options) {
        Object.keys(product.options).forEach(key => {
            const group = product.options[key];
            if (group.required) {
                selectedOptions[key] = group.items[0];
            } else if (group.multiple) {
                selectedOptions[key] = [];
            }
        });
    }

    renderModalOptions();
    updateModalUI();

    document.getElementById('product-modal-overlay').classList.add('active');
    document.getElementById('product-modal').classList.add('active');
}

function closeProductModal() {
    document.getElementById('product-modal-overlay').classList.remove('active');
    document.getElementById('product-modal').classList.remove('active');
    currentConfigProduct = null;
}

function renderModalOptions() {
    const body = document.getElementById('product-modal-body');
    const product = currentConfigProduct;

    document.getElementById('modal-product-name').textContent = product.name;
    updateSelectionSummary();
    body.innerHTML = '';

    if (product.options) {
        Object.keys(product.options).forEach(key => {
            const group = product.options[key];
            const groupDiv = document.createElement('div');
            groupDiv.className = 'option-group';

            groupDiv.innerHTML = `
                <h3>${group.title} ${group.required ? '<span>Obligatorio</span>' : ''}</h3>
            `;

            group.items.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                const isSelected = group.multiple ?
                    (selectedOptions[key] && selectedOptions[key].some(i => i.name === item.name)) :
                    (selectedOptions[key] && selectedOptions[key].name === item.name);

                itemDiv.className = `option-item ${isSelected ? 'selected' : ''}`;
                const inputId = `opt-${key}-${index}`;
                const inputType = group.multiple ? 'checkbox' : 'radio';

                itemDiv.innerHTML = `
                    <div class="option-info">
                        <span class="option-name">${item.name}</span>
                        <span class="option-price">${item.price > 0 ? `+$${item.price}` : (item.price < 0 ? `-$${Math.abs(item.price)}` : 'Incluido')}</span>
                    </div>
                    <div class="selection-box">
                        ${isSelected ? '<i class="fas fa-check"></i>' : ''}
                    </div>
                    <input type="${inputType}" id="${inputId}" name="${key}" ${isSelected ? 'checked' : ''}>
                `;

                itemDiv.onclick = () => {
                    const input = itemDiv.querySelector('input');
                    const wasChecked = input.checked;

                    if (inputType === 'radio') {
                        // Deseleccionar otros en el mismo grupo visualmente
                        groupDiv.querySelectorAll('.option-item').forEach(el => el.classList.remove('selected'));
                        groupDiv.querySelectorAll('.selection-box').forEach(el => el.innerHTML = '');
                    }

                    input.checked = inputType === 'radio' ? true : !wasChecked;
                    handleOptionChange(key, item, input.checked, group.multiple);

                    // Actualizar este item
                    if (input.checked) {
                        itemDiv.classList.add('selected');
                        itemDiv.querySelector('.selection-box').innerHTML = '<i class="fas fa-check"></i>';
                    } else {
                        itemDiv.classList.remove('selected');
                        itemDiv.querySelector('.selection-box').innerHTML = '';
                    }

                    // Re-renderizar si es radio para limpiar otros (o simplemente confiar en la lógica de arriba)
                    if (inputType === 'radio') renderModalOptions();
                };

                groupDiv.appendChild(itemDiv);
            });

            body.appendChild(groupDiv);
        });
    }

    // Campo de comentarios
    const commentDiv = document.createElement('div');
    commentDiv.className = 'option-group';
    commentDiv.innerHTML = `
        <h3>Instrucciones especiales</h3>
        <textarea id="modal-notes" class="comment-box" rows="2" placeholder="Ej: sin cebolla, más salsa..."></textarea>
    `;
    body.appendChild(commentDiv);
}

function updateSelectionSummary() {
    const summaryEl = document.getElementById('modal-selection-summary');
    const parts = [];

    Object.keys(selectedOptions).forEach(key => {
        const val = selectedOptions[key];
        if (Array.isArray(val) && val.length > 0) {
            parts.push(val.map(i => i.name).join(', '));
        } else if (val && val.name) {
            parts.push(val.name);
        }
    });

    summaryEl.textContent = parts.length > 0 ? parts.join(' | ') : 'Personaliza tu pedido';
}

function handleOptionChange(groupKey, item, isChecked, isMultiple) {
    if (isMultiple) {
        if (!selectedOptions[groupKey]) selectedOptions[groupKey] = [];
        if (isChecked) {
            selectedOptions[groupKey].push(item);
        } else {
            selectedOptions[groupKey] = selectedOptions[groupKey].filter(i => i.name !== item.name);
        }
    } else {
        selectedOptions[groupKey] = item;
    }
    updateModalUI();
    updateSelectionSummary();
}

function updateModalQty(delta) {
    modalQty = Math.max(1, modalQty + delta);
    updateModalUI();
}

function updateModalUI() {
    const qtyValue = document.getElementById('modal-qty-value');
    const totalPriceEl = document.getElementById('modal-total-price');

    qtyValue.textContent = modalQty;

    let total = currentConfigProduct.priceBase || 0;

    Object.keys(selectedOptions).forEach(key => {
        const val = selectedOptions[key];
        if (Array.isArray(val)) {
            val.forEach(item => total += item.price);
        } else if (val) {
            total += val.price;
        }
    });

    totalPriceEl.textContent = `$${total * modalQty}`;
}

function handleModalAdd() {
    const product = currentConfigProduct;
    const notes = document.getElementById('modal-notes').value.trim();

    // Validar requeridos
    let missing = [];
    if (product.options) {
        Object.keys(product.options).forEach(key => {
            if (product.options[key].required && !selectedOptions[key]) {
                missing.push(product.options[key].title);
            }
        });
    }

    if (missing.length > 0) {
        alert(`Por favor completa: ${missing.join(', ')}`);
        return;
    }

    // Calcular precio final por unidad
    let unitPrice = product.priceBase || 0;
    const details = {};

    Object.keys(selectedOptions).forEach(key => {
        const val = selectedOptions[key];
        if (Array.isArray(val)) {
            unitPrice += val.reduce((acc, i) => acc + i.price, 0);
            details[key] = val.map(i => i.name);
        } else if (val) {
            unitPrice += val.price;
            details[key] = val.name;
        }
    });

    const config = {
        qty: modalQty,
        totalPrice: unitPrice * modalQty,
        details: details,
        notes: notes
    };

    addToCart(product.id, config);
    closeProductModal();
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;

    container.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 10);

    // Animate cart button
    const cartBtn = document.getElementById('cart-floating-btn');
    cartBtn.classList.remove('cart-pop');
    void cartBtn.offsetWidth; // Trigger reflow
    cartBtn.classList.add('cart-pop');

    // Auto-remove
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 3000);
}

function updateCartQty(itemUid, delta) {
    const itemIndex = cart.findIndex(item => (item.configId || item.id) === itemUid);
    if (itemIndex > -1) {
        cart[itemIndex].qty += delta;
        if (cart[itemIndex].qty <= 0) {
            cart.splice(itemIndex, 1);
        }
        updateCartUI();
    }
}

function updateCartUI() {
    const container = document.getElementById('cart-items');
    const badge = document.getElementById('cart-badge');
    const totalEl = document.getElementById('cart-total-price');

    container.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        container.innerHTML = '<div class="empty-cart-msg">Tu carrito está vacío</div>';
    } else {
        cart.forEach((item, index) => {
            const itemPrice = item.price;
            const itemTotal = itemPrice * item.qty;
            total += itemTotal;
            count += item.qty;

            const itemUid = item.configId || item.id;

            let configHtml = '';
            if (item.config) {
                configHtml = '<div class="cart-item-config">';
                Object.keys(item.config).forEach(key => {
                    const val = item.config[key];
                    configHtml += `<span><strong>${key}:</strong> ${Array.isArray(val) ? val.join(', ') : val}</span>`;
                });
                if (item.notes) {
                    configHtml += `<span><strong>Notas:</strong> ${item.notes}</span>`;
                }
                configHtml += '</div>';
            }

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">$${itemPrice}</span>
                    ${configHtml}
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQty('${itemUid}', -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty('${itemUid}', 1)">+</button>
                    <button class="cart-remove" onclick="updateCartQty('${itemUid}', -999)" title="Eliminar"><i class="fas fa-trash"></i></button>
                </div>
            `;
            container.appendChild(div);
        });
    }

    badge.textContent = count;
    totalEl.textContent = `$${total}`;
}

function handleCheckout() {
    if (cart.length === 0) {
        alert("Agrega productos al carrito primero.");
        return;
    }

    const nombre = document.getElementById('cart-nombre').value.trim();
    const direccion = document.getElementById('cart-direccion').value.trim();
    const comentarios = document.getElementById('cart-comentarios').value.trim();

    if (!nombre || !direccion) {
        alert("Por favor, completa tu nombre y dirección/retiro.");
        return;
    }

    let msg = `Hola, quiero hacer un pedido en ${BUSINESS_NAME}:\n\n*Pedido:*\n`;
    let total = 0;

    cart.forEach((item, index) => {
        msg += `${index + 1}) *${item.name}* x${item.qty}\n`;
        if (item.config) {
            Object.keys(item.config).forEach(key => {
                const val = item.config[key];
                msg += `   - ${key}: ${Array.isArray(val) ? val.join(', ') : val}\n`;
            });
        }
        if (item.notes) {
            msg += `   - Notas: ${item.notes}\n`;
        }
        msg += `   Subtotal: $${item.price * item.qty}\n\n`;
        total += item.price * item.qty;
    });

    msg += `*Total a pagar:* $${total}\n\n`;
    msg += `*Nombre:* ${nombre}\n`;
    msg += `*Dirección/Retiro:* ${direccion}\n`;

    if (comentarios) {
        msg += `*Comentarios adicionales:* ${comentarios}\n`;
    }

    msg += `\n_¿Me confirman disponibilidad?_`;

    const encodedMsg = encodeURIComponent(msg);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

    window.open(url, '_blank');
}

// --- RESERVAS ---
function initReservations() {
    const form = document.getElementById('reservas-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = document.getElementById('res-nombre').value;
        const fecha = document.getElementById('res-fecha').value;
        const hora = document.getElementById('res-hora').value;
        const personas = document.getElementById('res-personas').value;
        const comentarios = document.getElementById('res-comentarios').value;

        // --- VALIDACIÓN DE HORARIOS ---
        const dateObj = new Date(fecha + 'T12:00:00');
        const dayOfWeek = dateObj.getDay(); // 0=Dom, 1=Lun, 2=Mar...

        if (dayOfWeek === 1) { // Lunes
            alert("¡Lo sentimos! Los lunes estamos cerrados. Por favor selecciona otro día.");
            return;
        }

        const [h, m] = hora.split(':').map(Number);
        const timeVal = h * 100 + m;

        // Nuevos Horarios de Reservas:
        // Martes a Viernes (2-5): 19:00 - 23:00
        // Sábados y Domingos (6, 0): 13:00 - 23:00

        let isValidTime = false;
        let scheduleMsg = "";

        if (dayOfWeek >= 2 && dayOfWeek <= 5) { // Mar-Vie
            isValidTime = (timeVal >= 1900 && timeVal <= 2300);
            scheduleMsg = "de Martes a Viernes: 19:00 a 23:00";
        } else { // Sáb-Dom
            isValidTime = (timeVal >= 1300 && timeVal <= 2300);
            scheduleMsg = "de Sábados y Domingos: 13:00 a 23:00";
        }

        if (!isValidTime) {
            alert(`Para el día seleccionado, nuestro horario de reservas es ${scheduleMsg}. Por favor elige una hora dentro de ese rango.`);
            return;
        }

        let msg = `Hola ${BUSINESS_NAME}, me gustaría hacer una reserva:\n\n`;
        msg += `*Nombre:* ${nombre}\n`;
        msg += `*Fecha:* ${fecha}\n`;
        msg += `*Hora:* ${hora}\n`;
        msg += `*Cantidad de personas:* ${personas}\n`;

        if (comentarios) {
            msg += `*Comentarios:* ${comentarios}\n`;
        }

        const encodedMsg = encodeURIComponent(msg);
        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMsg}`;

        window.open(url, '_blank');
        form.reset();
        showToast("Solicitud de reserva enviada");
    });
}







