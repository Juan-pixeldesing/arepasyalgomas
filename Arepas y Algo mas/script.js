// --- VARIABLES EDITABLES ---
const WHATSAPP_NUMBER = "59897330314";
const INSTAGRAM_URL = "https://www.instagram.com/arepasyalgomas_uy/";
const BUSINESS_NAME = "Arepas y Algo Más";
const ADDRESS = "Av. Giannattasio KM 22,000, 15000 Ciudad de la Costa, Canelones";
const HOURS = "Martes a Viernes: 19:00 - 23:00 \n Sábados y Domingos: 13:00 - 23:00";

const MENU_DATA = [

    // --- PATACONES ---
    { id: 1, name: "Patacón Carne, pollo, chorizo o cerdo", desc: "Plátano frito con el relleno de tu elección.", price: 490, category: "Patacones" },
    { id: 2, name: "Patacón Veggie", desc: "Plátano frito con vegetales.", price: 460, category: "Patacones" },
    { id: 3, name: "Tostones", desc: "Ración de tostones de plátano.", price: 250, category: "Patacones" },

    // --- CACHAPAS ---
    { id: 4, name: "Cachapa Carne, pollo, chorizo o cerdo", desc: "Fina masa de maíz tierno molido cocinada a la plancha en forma de tortilla y rellena con el gusto de tu preferencia.", price: 450, category: "Cachapas" },
    { id: 5, name: "Cachapa Burger", desc: "Cachapa rellena de 2 hamburguesas de carne vacuna, panceta y queso mozzarella acompañado de fritas.", price: 500, category: "Cachapas" },
    { id: 6, name: "Cachapa Crispy", desc: "Cachapa rellena de pollo crispy.", price: 450, category: "Cachapas" },
    { id: 7, name: "Cachapa Jamón y queso", desc: "Cachapa clásica con jamón y queso.", price: 420, category: "Cachapas" },
    { id: 8, name: "Cachapa Solo queso", desc: "Cachapa rellena de abundante queso.", price: 400, category: "Cachapas" },
    { id: 9, name: "Cachapa Veggie", desc: "Cachapa con vegetales y queso.", price: 410, category: "Cachapas" },

    // --- POLLO CRISPY ---
    { id: 10, name: "Pollo Crispy Solo", desc: "Ración de pollo crispy crujiente.", price: 350, category: "Pollo Crispy" },
    { id: 11, name: "Pollo Crispy Con fritas", desc: "Pollo crispy acompañado de papas fritas.", price: 450, category: "Pollo Crispy" },

    // --- AREPAS ESPECIALES ---
    { id: 12, name: "Burguer Especial (Arepa)", desc: "Doble hamburguesa de carne vacuna casera a la arepa con tomate, lechuga, huevo frito, panceta, queso y salsas.", price: 480, category: "Arepas Especiales" },
    { id: 13, name: "Arepa Pabellón", desc: "Carne mechada, porotos negros y queso mozzarella.", price: 390, category: "Arepas Especiales" },
    { id: 14, name: "Arepa Veggie Especial", desc: "Verduritas salteadas y queso mozzarella.", price: 350, category: "Arepas Especiales" },
    { id: 15, name: "Arepa Mixta Especial", desc: "Relleno de carne mechada, verduras salteadas y queso.", price: 380, category: "Arepas Especiales" },
    { id: 16, name: "Salchiarepa", desc: "Huevos revueltos con tomate, cebolla y panchos picado en trozos.", price: 360, category: "Arepas Especiales" },

    // --- TEQUEÑOS ---
    { id: 17, name: "Tequeños Mozarella x5", desc: "5 dedos de queso mozzarella envueltos en masa crujiente.", price: 275, category: "Tequeños" },
    { id: 18, name: "Tequeños Mozarella x10", desc: "10 dedos de queso mozzarella envueltos en masa crujiente.", price: 500, category: "Tequeños" },
    { id: 19, name: "Tequeños Cheddar x5", desc: "5 dedos de queso cheddar envueltos en masa crujiente.", price: 300, category: "Tequeños" },
    { id: 20, name: "Tequeños Cheddar x10", desc: "10 dedos de queso cheddar envueltos en masa crujiente.", price: 550, category: "Tequeños" },
    { id: 21, name: "Tequeños Chocolate x5", desc: "5 tequeños rellenos de chocolate.", price: 310, category: "Tequeños" },
    { id: 22, name: "Tequeños Chocolate x10", desc: "10 tequeños rellenos de chocolate.", price: 560, category: "Tequeños" },
    { id: 23, name: "Burger Tequeño", desc: "Hamburguesa con tequeños.", price: 580, category: "Tequeños" },

    // --- COMBOS ---
    { id: 24, name: "Combo la Llovizna", desc: "2 cachapas grandes a elección + 5 tequeños + bebida de 1.5.", price: 1200, category: "Combos" },
    { id: 25, name: "Combo los Roques", desc: "2 cachapas grandes a elección + bebida de 1.5.", price: 980, category: "Combos" },
    { id: 26, name: "Combo la Guaricha", desc: "3 cachapas medianas rellenas de queso + 10 tequeños + bebida de 1.5.", price: 1010, category: "Combos" },
    { id: 27, name: "Combo Canaima", desc: "3 cachapas medianas rellenas de queso + 3 tequeños + media ración de pollo frito.", price: 700, category: "Combos" },
    { id: 28, name: "Combo Cachamay", desc: "Tres cachapas rellenas de queso.", price: 460, category: "Combos" },
    { id: 29, name: "Combo Bien Resuelta", desc: "3 arepas a elección + 10 tequeños + bebida de 1.5.", price: 1600, category: "Combos" },
    { id: 30, name: "Combo Entre Panas", desc: "6 tequeños + media ración de pollo crispy y 3 mini arepitas a elección.", price: 630, category: "Combos" },
    { id: 31, name: "Combo Full Equipo", desc: "Pollo Crispy + 3 arepitas + 3 tequeños + 3 cachapas medianas rellenas con queso.", price: 840, category: "Combos" },

    // --- AREPAS CLÁSICAS ---
    { id: 32, name: "Arepa Reina Pepiada (Sola)", desc: "Una mezcla de pollo, palta y mayonesa.", price: 370, category: "Arepas" },
    { id: 33, name: "Arepa Reina Pepiada (Con tequeños)", desc: "Una mezcla de pollo, palta y mayonesa.", price: 650, category: "Arepas" },
    { id: 34, name: "Arepa Reina Pepiada (Con fritas)", desc: "Una mezcla de pollo, palta y mayonesa.", price: 550, category: "Arepas" },
    { id: 35, name: "Arepa Sifrina (Sola)", desc: "Una Reina Pepiada con mucho queso.", price: 360, category: "Arepas" },
    { id: 36, name: "Arepa Sifrina (Con tequeños)", desc: "Una Reina Pepiada con mucho queso.", price: 640, category: "Arepas" },
    { id: 37, name: "Arepa Sifrina (Con fritas)", desc: "Una Reina Pepiada con mucho queso.", price: 540, category: "Arepas" },
    { id: 38, name: "Arepa Pelua (Sola)", desc: "Carne vacuna en hierbas salteadas con morrón, cebolla y queso mozzarella.", price: 370, category: "Arepas" },
    { id: 39, name: "Arepa Pelua (Con tequeños)", desc: "Carne vacuna en hierbas salteadas con morrón, cebolla y queso mozzarella.", price: 650, category: "Arepas" },
    { id: 40, name: "Arepa Pelua (Con fritas)", desc: "Carne vacuna en hierbas salteadas con morrón, cebolla y queso mozzarella.", price: 550, category: "Arepas" },
    { id: 41, name: "Arepa Rumbera (Sola)", desc: "Carne de cerdo a la plancha y queso mozzarella.", price: 360, category: "Arepas" },
    { id: 42, name: "Arepa Rumbera (Con tequeños)", desc: "Carne de cerdo a la plancha y queso mozzarella.", price: 640, category: "Arepas" },
    { id: 43, name: "Arepa Rumbera (Con fritas)", desc: "Carne de cerdo a la plancha y queso mozzarella.", price: 540, category: "Arepas" },
    { id: 44, name: "Arepa Perico (Sola)", desc: "Huevos revueltos con morrones y cebolla.", price: 350, category: "Arepas" },
    { id: 45, name: "Arepa Perico (Con tequeños)", desc: "Huevos revueltos con morrones y cebolla.", price: 630, category: "Arepas" },
    { id: 46, name: "Arepa Perico (Con fritas)", desc: "Huevos revueltos con morrones y cebolla.", price: 530, category: "Arepas" },
    { id: 47, name: "Arepa Domino (Sola)", desc: "Porotos negros con queso mozzarella.", price: 350, category: "Arepas" },
    { id: 48, name: "Arepa Domino (Con tequeños)", desc: "Porotos negros con queso mozzarella.", price: 630, category: "Arepas" },
    { id: 49, name: "Arepa Domino (Con fritas)", desc: "Porotos negros con queso mozzarella.", price: 530, category: "Arepas" },
    { id: 50, name: "Arepa Veggie Sencilla (Sola)", desc: "Mix de vegetales, verduras salteadas y palta.", price: 350, category: "Arepas" },
    { id: 51, name: "Arepa Veggie Sencilla (Con tequeños)", desc: "Mix de vegetales, verduras salteadas y palta.", price: 630, category: "Arepas" },
    { id: 52, name: "Arepa Veggie Sencilla (Con fritas)", desc: "Mix de vegetales, verduras salteadas y palta.", price: 550, category: "Arepas" },
    { id: 53, name: "Arepa Gringa (Sola)", desc: "Queso, panceta y huevos revueltos.", price: 360, category: "Arepas" },
    { id: 54, name: "Arepa Gringa (Con tequeños)", desc: "Queso, panceta y huevos revueltos.", price: 640, category: "Arepas" },
    { id: 55, name: "Arepa Gringa (Con fritas)", desc: "Queso, panceta y huevos revueltos.", price: 540, category: "Arepas" },
    { id: 56, name: "Arepa Turca (Sola)", desc: "Tomate, lechuga, croquetas árabes (falafel) y un trozo de pollo.", price: 350, category: "Arepas" },
    { id: 57, name: "Arepa Turca (Con tequeños)", desc: "Tomate, lechuga, croquetas árabes (falafel) y un trozo de pollo.", price: 630, category: "Arepas" },
    { id: 58, name: "Arepa Turca (Con fritas)", desc: "Tomate, lechuga, croquetas árabes (falafel) y un trozo de pollo.", price: 530, category: "Arepas" },
    { id: 59, name: "Arepa Burguer Sencilla (Sola)", desc: "Arepa rellena con una hamburguesa, queso mozzarella, lechuga, tomate y salsa a elección.", price: 340, category: "Arepas" },
    { id: 60, name: "Arepa Burguer Sencilla (Con tequeños)", desc: "Arepa rellena con una hamburguesa, queso mozzarella, lechuga, tomate y salsa a elección.", price: 620, category: "Arepas" },
    { id: 61, name: "Arepa Burguer Sencilla (Con fritas)", desc: "Arepa rellena con una hamburguesa, queso mozzarella, lechuga, tomate y salsa a elección.", price: 520, category: "Arepas" },
    { id: 62, name: "Arepa Jamón y Queso (Sola)", desc: "Jamón en trocitos y queso mozzarella rallado.", price: 340, category: "Arepas" },
    { id: 63, name: "Arepa Jamón y Queso (Con tequeños)", desc: "Jamón en trocitos y queso mozzarella rallado.", price: 620, category: "Arepas" },
    { id: 64, name: "Arepa Jamón y Queso (Con fritas)", desc: "Jamón en trocitos y queso mozzarella rallado.", price: 520, category: "Arepas" },
    { id: 65, name: "Chori Arepa (Sola)", desc: "Trozos de chorizo premium a la plancha con queso.", price: 350, category: "Arepas" },
    { id: 66, name: "Chori Arepa (Con tequeños)", desc: "Trozos de chorizo premium a la plancha con queso.", price: 630, category: "Arepas" },
    { id: 67, name: "Chori Arepa (Con fritas)", desc: "Trozos de chorizo premium a la plancha con queso.", price: 530, category: "Arepas" },
    { id: 68, name: "Arepa Weekend (Sola)", desc: "Atún con tomates, cebolla, mayonesa y queso mozzarella.", price: 350, category: "Arepas" },
    { id: 69, name: "Arepa Weekend (Con tequeños)", desc: "Atún con tomates, cebolla, mayonesa y queso mozzarella.", price: 630, category: "Arepas" },
    { id: 70, name: "Arepa Weekend (Con fritas)", desc: "Atún con tomates, cebolla, mayonesa y queso mozzarella.", price: 530, category: "Arepas" },
    { id: 71, name: "Arepa Caprese (Sola)", desc: "Arepa rellena de queso, tomates, albahaca con un toque de aceite de oliva.", price: 350, category: "Arepas" },
    { id: 72, name: "Arepa Caprese (Con tequeños)", desc: "Arepa rellena de queso, tomates, albahaca con un toque de aceite de oliva.", price: 630, category: "Arepas" },
    { id: 73, name: "Arepa Caprese (Con fritas)", desc: "Arepa rellena de queso, tomates, albahaca con un toque de aceite de oliva.", price: 530, category: "Arepas" },
    { id: 74, name: "Arepa Carne Mechada (Sola)", desc: "Carne mechada jugosa.", price: 400, category: "Arepas" },
    { id: 75, name: "Arepa Carne Mechada (Con tequeños)", desc: "Carne mechada jugosa.", price: 660, category: "Arepas" },
    { id: 76, name: "Arepa Carne Mechada (Con fritas)", desc: "Carne mechada jugosa.", price: 560, category: "Arepas" },

    // --- CASA CHINA ---
    { id: 77, name: "Arroz chow fan con verduras", desc: "Ración de arroz salteado con huevo frito y las verduras de su preferencia. Sazonado con aceite de sésamo y salsa de soya.", price: 350, category: "Comida China" },
    { id: 78, name: "Arroz chow fan con verdura y una proteína", desc: "Arroz salteado con verduras y una proteína (cerdo, pollo, res o jamón).", price: 430, category: "Comida China" },
    { id: 79, name: "Arroz chow fan con dos proteínas", desc: "Arroz salteado con verduras y dos proteínas a elección.", price: 450, category: "Comida China" },
    { id: 80, name: "Arroz chow fan con verduras y tres proteínas", desc: "Arroz salteado con verduras y tres proteínas a elección.", price: 480, category: "Comida China" },
    { id: 81, name: "Arroz chow fan con verduras y cuatro proteínas", desc: "Arroz salteado con verduras y cuatro proteínas a elección.", price: 510, category: "Comida China" },
    { id: 82, name: "Chow mein de verduras", desc: "Fideos al wok con verduras sazonado con aceite de sésamo y salsa de soya.", price: 450, category: "Comida China" },
    { id: 83, name: "Chow mein con verduras y una proteína", desc: "Fideos al wok con verduras y una proteína a elección.", price: 510, category: "Comida China" },
    { id: 84, name: "Chow mein con verduras y dos proteínas", desc: "Fideos al wok con verduras y dos proteínas a elección.", price: 530, category: "Comida China" },
    { id: 85, name: "Chow mein con verduras y tres proteínas", desc: "Fideos al wok con verduras y tres proteínas a elección.", price: 570, category: "Comida China" },
    { id: 86, name: "Promo Arroz chow fan con verduras", desc: "Media ración de arroz salteado con huevo frito y verduras.", price: 310, category: "Comida China" },
    { id: 87, name: "Promo Arroz chow fan con verduras y una proteína", desc: "Media ración de arroz salteado con huevo frito, verduras y una proteína.", price: 330, category: "Comida China" },
    { id: 88, name: "Chop suey sencillo", desc: "Verduras salteadas. Sazonadas con aceite de sésamo y de soya.", price: 320, category: "Comida China" },
    { id: 89, name: "Chop suey con una proteína", desc: "Verduras salteadas con una proteína a elección.", price: 360, category: "Comida China" },
    { id: 90, name: "Pollo frito (Casa China)", desc: "Ración de pollo frito estilo chino.", price: 320, category: "Comida China" },
    { id: 91, name: "Arrolladitos de primavera", desc: "Ración de arrolladitos primavera.", price: 250, category: "Comida China" },
    { id: 92, name: "Combo China 1", desc: "Media ración arroz chow fan con verduras y media ración de pollo frito.", price: 340, category: "Comida China" },
    { id: 93, name: "Combo China 2", desc: "Media ración arroz chow fan con verduras, una proteína y acompañado pollo frito.", price: 470, category: "Comida China" },
    { id: 94, name: "Combo China 3", desc: "Media ración arroz chow fan con verduras y dos proteínas, acompañado de media ración de pollo frito.", price: 410, category: "Comida China" },
    { id: 95, name: "Combo China 4", desc: "Media ración arroz chow fan con verduras y proteína a elección y 2 arrolladitos de primavera.", price: 480, category: "Comida China" },
    { id: 96, name: "Combo China 5", desc: "Media ración de arroz chow fan y 1/4 de ración de pollo.", price: 330, category: "Comida China" },
    { id: 97, name: "Combo China 6", desc: "Media ración de arroz chow fan y 1 proteína.", price: 330, category: "Comida China" },

    // --- BEBIDAS & POSTRES ---
    { id: 98, name: "Coca Cola 600 ml", desc: "Refresco individual.", price: 130, category: "Bebidas" },
    { id: 99, name: "Coca Cola 1.5 L", desc: "Refresco familiar.", price: 220, category: "Bebidas" },
    { id: 100, name: "Postre Tres leches", desc: "Clásico postre tres leches.", price: 240, category: "Postres" },
    { id: 101, name: "Postre Tres leches de chocolate", desc: "Tres leches sabor chocolate.", price: 240, category: "Postres" },
    { id: 102, name: "Postre Tres leches de coco y DDL", desc: "Tres leches sabor coco y dulce de leche.", price: 240, category: "Postres" },
    { id: 103, name: "Quesillo", desc: "Postre tradicional tipo flan.", price: 240, category: "Postres" },
    { id: 104, name: "Salsa Soja", desc: "Porción extra de salsa de soja.", price: 40, category: "Extras" },
    { id: 105, name: "Salsa Agridulce", desc: "Porción extra de salsa agridulce.", price: 40, category: "Extras" },
];

// --- IMÁGENES CARPETA IMG ---
const imagesArray = Array.from({ length: 22 }, (_, i) => `img-${i + 1}.jpg`);

// --- ESTADO GLOBAL ---
let cart = [];
let currentCategory = 'Todas';
let toggleCartGlobal;

// --- INICIALIZACIÓN ---
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('info-direccion').textContent = ADDRESS;
    document.getElementById('info-horarios').innerHTML = HOURS.replace(/\n/g, '<br>');
    document.getElementById('info-whatsapp').textContent = `+${WHATSAPP_NUMBER.slice(0,3)} ${WHATSAPP_NUMBER.slice(3,5)} ${WHATSAPP_NUMBER.slice(5,8)} ${WHATSAPP_NUMBER.slice(8)}`;
    
    document.getElementById('btn-escribir-wa').href = `https://wa.me/${WHATSAPP_NUMBER}`;
    document.getElementById('hero-whatsapp-btn').href = `https://wa.me/${WHATSAPP_NUMBER}`;
    document.getElementById('btn-instagram').href = INSTAGRAM_URL;

    initNavbar();

    initMenu();
    initCarousel();
    initGallery();
    initCart();
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

    // Obtener categorías únicas
    const categories = ['Todas', ...new Set(MENU_DATA.map(item => item.category))];

    // Renderizar filtros
    categories.forEach(cat => {
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
    grid.style.gridTemplateRows = `repeat(${numRows}, 300px)`;
    grid.style.gridTemplateColumns = 'initial'; 
    grid.style.gridAutoFlow = 'column';
    grid.style.gridAutoColumns = '320px';

    if (filtered.length === 0) {
        grid.style.gridTemplateRows = 'auto';
        grid.style.gridTemplateColumns = '1fr';
        grid.innerHTML = '<p style="text-align:center; color: var(--text-muted); padding: 2rem;">No se encontraron productos.</p>';
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3>${item.name}</h3>
                    <span class="menu-price">$${item.price}</span>
                </div>
                <p class="menu-desc">${item.desc}</p>
                <button class="btn-add" onclick="addToCart(${item.id})">
                    <i class="fas fa-plus"></i> Agregar
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    // Reset scroll al inicio al filtrar
    grid.scrollTo({ left: 0, behavior: 'smooth' });
}



// --- CARRUSEL ---
function initCarousel() {
    const track = document.getElementById('carousel-track');
    const nav = document.getElementById('carousel-nav');
    
    if(imagesArray.length === 0) return;

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
        if(index < 0) index = imagesArray.length - 1;
        if(index >= imagesArray.length) index = 0;
        
        track.style.transform = `translateX(-${index * 100}%)`;
        
        const dots = nav.querySelectorAll('.carousel-indicator');
        dots.forEach(d => d.classList.remove('current-slide'));
        if(dots[index]) dots[index].classList.add('current-slide');
        
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

    toggleCartGlobal = function(forceOpen = false) {
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

function addToCart(productId) {
    const product = MENU_DATA.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    
    // Animación feedback
    const badge = document.getElementById('cart-badge');
    badge.style.transform = 'scale(1.5)';
    setTimeout(() => badge.style.transform = 'scale(1)', 200);

    // Toast notification
    showToast(`${product.name} agregado`);
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

function updateCartQty(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
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
        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            total += itemTotal;
            count += item.qty;

            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <span class="cart-item-price">$${item.price}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button class="cart-qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                    <button class="cart-remove" onclick="updateCartQty(${item.id}, -999)" title="Eliminar"><i class="fas fa-trash"></i></button>
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

    cart.forEach(item => {
        msg += `- ${item.qty} x ${item.name} - $${item.price * item.qty}\n`;
        total += item.price * item.qty;
    });

    msg += `\n*Total aproximado:* $${total}\n\n`;
    msg += `*Nombre:* ${nombre}\n`;
    msg += `*Dirección/Retiro:* ${direccion}\n`;
    
    if (comentarios) {
        msg += `*Comentarios:* ${comentarios}\n`;
    }

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
