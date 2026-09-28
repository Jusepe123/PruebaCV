# Mi Portafolio Web

Un portafolio profesional de una sola página desarrollado con HTML, CSS y JavaScript puro, sin frameworks. Diseñado para ser completamente responsive y optimizado para despliegue en AWS Amplify.

![Portafolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Mi+Portafolio+Web)

## Características

- ✅ **Diseño moderno y responsive** - Se adapta a todos los dispositivos
- ✅ **Navegación suave** - Scroll animado entre secciones
- ✅ **Formulario de contacto funcional** - Con validación en tiempo real
- ✅ **Animaciones interactivas** - Barras de habilidades, tarjetas de proyectos
- ✅ **Optimizado para SEO** - Meta tags y estructura semántica
- ✅ **Despliegue en AWS Amplify** - Configuración lista para producción
- ✅ **Sin dependencias externas** - Solo HTML, CSS y JavaScript vanilla
- ✅ **Código limpio y comentado** - Fácil de entender y modificar

## Estructura del Proyecto

```
portafolio-web/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interactivo
├── amplify.yml         # Configuración AWS Amplify
├── README.md           # Documentación
└── cv-data.md          # Datos del CV (opcional)
```

## Secciones del Portafolio

1. **Inicio (Hero)** - Presentación con animación de código
2. **Sobre mí** - Información personal, educación y experiencia
3. **Proyectos** - Tarjetas interactivas con trabajos destacados
4. **Habilidades** - Barras de progreso animadas por categorías
5. **Contacto** - Formulario funcional e información de contacto

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Flexbox, Grid, variables CSS, animaciones
- **JavaScript ES6+** - Funcionalidades interactivas
- **Font Awesome** - Iconografía
- **Google Fonts** - Tipografía (Poppins, Roboto)

## Despliegue en AWS Amplify

Este proyecto está configurado para despliegue automático en AWS Amplify:

### Pasos para desplegar:

1. **Crear repositorio Git** (GitHub, GitLab, Bitbucket, CodeCommit)
2. **Conectar a AWS Amplify Console**
3. **Seleccionar rama principal** (main/master)
4. **Configuración automática** - Amplify detectará `amplify.yml`
5. **Despliegue completo** en minutos

### Configuración Amplify (`amplify.yml`):
- Build optimizado para proyectos estáticos
- Headers de seguridad configurados
- Cache control apropiado
- No requiere dependencias de Node.js

## Configuración Local

1. Clonar el repositorio:
   ```bash
   git clone <url-del-repositorio>
   ```

2. Abrir `index.html` en cualquier navegador moderno
   - No se requiere servidor local
   - Funciona directamente desde el sistema de archivos

3. Para desarrollo:
   - Editar archivos HTML, CSS o JS según necesidad
   - Actualizar información personal en `index.html`

## Personalización

### Cambiar información personal:
1. Editar `index.html` - Sección "Sobre mí" y datos de contacto
2. Modificar `styles.css` - Variables CSS en `:root` para colores
3. Actualizar proyectos en la sección correspondiente

### Cambiar colores principales:
Editar las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2563eb;     /* Color principal */
    --secondary-color: #7c3aed;   /* Color secundario */
    --dark-color: #1e293b;        /* Color oscuro */
    --light-color: #f8fafc;       /* Color claro */
}
```

### Añadir nuevos proyectos:
Agregar nuevas tarjetas en la sección "Proyectos" de `index.html` siguiendo la estructura existente.

## Optimizaciones Implementadas

- **Performance**: Carga rápida, sin dependencias pesadas
- **Accesibilidad**: HTML semántico, ARIA labels, contraste adecuado
- **SEO**: Meta tags, títulos descriptivos, estructura jerárquica
- **Seguridad**: Headers HTTP configurados en Amplify
- **Mobile First**: Diseño responsive desde 320px

## Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ iOS Safari 12+
- ✅ Chrome Android 88+

## Licencia

Este proyecto está disponible bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.

## Contacto

Si tienes preguntas o sugerencias:
- **Email**: jusepe@ejemplo.com
- **GitHub**: [@tu-usuario](https://github.com/tu-usuario)

---

*Desarrollado con ❤️ usando solo HTML, CSS y JavaScript. Desplegable en AWS Amplify.*