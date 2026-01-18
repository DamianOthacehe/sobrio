# 🍷 SOBRIO - Club de Vinos

**Sobrio** es una Landing Page moderna y sofisticada para un club de vinos exclusivo. El proyecto está diseñado con un enfoque en la experiencia de usuario (UX), animaciones fluidas y una integración robusta con servicios de backend.

---

## 🚀 Características Principales

- **Diseño Premium:** Estética minimalista con efectos de *sticky scrolling* y animaciones sutiles.
- **Gestión de Datos:** Integración con **Firebase Cloud Firestore** para el almacenamiento de suscriptores y consultas.
- **Notificaciones Automáticas:** Sistema de correos electrónicos vía **EmailJS** (Confirmación al usuario y aviso al administrador).
- **Validación Avanzada:** Formularios protegidos con **Regex** y feedback visual dinámico en botones.
- **SEO Ready:** Optimización de metadatos nativa de **React 19** para una mejor indexación y visualización en redes sociales.
- **UI/UX Fluida:** Notificaciones elegantes mediante **Sonner** y estados de carga animados.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:** React 19, Vite, CSS3 (Custom Properties & Keyframes).
* **Backend as a Service:** Firebase (Firestore).
* **Comunicación:** EmailJS.
* **Librerías de UI:** Sonner (Toasts), Lucide React (Icons), React Router Dom.

---

## 📸 Vista Previa

> [Link al sitio en vivo](https:sobrio.vercel.app)

---

## 🔧 Instalación y Configuración

1. **Clona el repositorio:**
   ```bash
   git clone [https://github.com/DamianOthacehe/sobrio.git](https://github.com/DamianOthacehe/sobrio.git)

2. **Instala las dependencias:**
    npm install

3. **Variables de entorno:**
Crea un archivo .env en la raíz y añade tus credenciales de Firebase y EmailJS:

VITE_FIREBASE_API_KEY=tu_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=tu_dominio.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tu_proyecto_id
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ADMIN=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key

4. **Inicia el servidor de desarrollo:**
npm run dev