import type { BlogPost } from '@/types'

export const MOCK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-001',
    slug: 'guia-completa-vacunacion-perros',
    title: 'Guía completa de vacunación para perros en México',
    excerpt:
      'Todo lo que necesitas saber sobre el esquema de vacunación para tu perro: qué vacunas son obligatorias, cuándo aplicarlas y por qué son esenciales para su salud.',
    content: `## ¿Por qué vacunar a tu perro?

La vacunación es una de las medidas preventivas más importantes que puedes tomar para proteger 
la salud de tu mascota y la de tu familia. Las vacunas preparan el sistema inmunológico 
de tu perro para combatir enfermedades potencialmente mortales.

## Esquema de vacunación básico

### Cachorros (6–16 semanas)
- **6 semanas**: Primera dosis de vacuna séxtuple
- **9 semanas**: Segunda dosis de vacuna séxtuple  
- **12 semanas**: Tercera dosis + primera rabia
- **16 semanas**: Cuarta dosis séxtuple + bordetella

### Adultos (refuerzos anuales)
- Vacuna antirrábica (obligatoria por ley en México)
- Séxtuple o quíntuple
- Leptospirosis (según exposición)

## Vacunas opcionales según estilo de vida

Si tu perro frecuenta parques, convive con otros perros o viaja contigo, considera:
- **Influenza canina**
- **Lyme** (si viajan a zonas boscosas)
- **Rattlesnake** (zonas rurales)

## Recomendaciones del equipo VetCare

Siempre consulta con tu veterinario antes de iniciar o modificar el esquema de vacunación. 
Cada perro es único y puede requerir un esquema personalizado según su raza, salud y estilo de vida.

> "La prevención siempre será más barata y menos dolorosa que el tratamiento." — Dr. Carlos Mendoza, VetCare`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
    author: {
      id: 'author-001',
      name: 'Dra. Ana García Ruiz',
      role: 'Médico Veterinario Zootecnista',
      avatarUrl: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=0f766e&color=fff',
    },
    category: 'salud',
    tags: ['vacunación', 'prevención', 'perros', 'salud canina'],
    readingTimeMinutes: 6,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-05-15T09:00:00Z',
    updatedAt: '2024-06-01T10:00:00Z',
    seo: {
      metaTitle: 'Guía de Vacunación para Perros en México 2024 | VetCare',
      metaDescription:
        'Conoce el esquema completo de vacunación para perros en México. Qué vacunas son obligatorias, cuándo aplicarlas y costos aproximados.',
    },
  },
  {
    id: 'blog-002',
    slug: 'alimentacion-gatos-adultos',
    title: '¿Qué debe comer tu gato adulto? Guía de nutrición felina',
    excerpt:
      'Los gatos tienen necesidades nutricionales muy específicas. Aprende qué alimentos son mejores para tu gato adulto y cuáles debes evitar a toda costa.',
    content: `## La nutrición del gato: un caso único

Los gatos son carnívoros obligados, lo que significa que su cuerpo está diseñado 
para obtener todos sus nutrientes de fuentes animales. A diferencia de los perros, 
los gatos no pueden sintetizar ciertos aminoácidos esenciales y dependen 100% de su dieta.

## Nutrientes esenciales para gatos

### Proteínas
Mínimo 26% en materia seca para gatos adultos. Las mejores fuentes:
- Pollo y pavo
- Salmón y atún (con moderación)
- Res magra

### Grasas
Fuente principal de energía. Busca alimentos con:
- Omega-3 y Omega-6 en proporción adecuada
- Ácido araquidónico (esencial para gatos)

### Taurina
**Fundamental.** Los gatos no pueden sintetizarla. Su deficiencia causa ceguera 
y cardiomiopatía dilatada. Asegúrate que el alimento la incluya.

## Alimentos prohibidos para gatos

❌ **Nunca** ofrezcas:
- Cebolla y ajo (tóxicos)
- Uvas y pasas
- Chocolate
- Alcohol
- Leche de vaca (la mayoría son intolerantes)
- Aguacate

## Hidratación

Los gatos tienen bajo instinto de sed. Considera:
- Fuente de agua corriente
- Combinar alimento seco con húmedo
- Agregar agua al alimento húmedo`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1200&q=80',
    author: {
      id: 'author-002',
      name: 'MVZ. Roberto Sánchez',
      role: 'Nutriólogo Veterinario',
      avatarUrl: 'https://ui-avatars.com/api/?name=Roberto+Sanchez&background=0f766e&color=fff',
    },
    category: 'nutricion',
    tags: ['nutrición', 'gatos', 'alimentación felina', 'salud'],
    readingTimeMinutes: 7,
    isPublished: true,
    isFeatured: true,
    publishedAt: '2024-05-22T09:00:00Z',
    updatedAt: '2024-06-01T10:00:00Z',
    seo: {
      metaTitle: 'Guía de Nutrición para Gatos Adultos | VetCare',
      metaDescription:
        'Descubre qué debe comer tu gato adulto. Nutrientes esenciales, alimentos prohibidos y recomendaciones de nuestros nutriólogos veterinarios.',
    },
  },
  {
    id: 'blog-003',
    slug: 'como-detectar-dolor-mascota',
    title: '7 señales de que tu mascota tiene dolor y no lo sabes',
    excerpt:
      'Los animales son expertos en ocultar el dolor. Estas señales te ayudarán a detectar a tiempo si tu mascota está sufriendo y necesita atención veterinaria.',
    content: `## Por qué las mascotas ocultan el dolor

Evolutivamente, los animales ocultan su dolor como mecanismo de supervivencia. 
En la naturaleza, mostrar debilidad significa ser vulnerable a depredadores. 
Por eso, cuando tu mascota muestra señales evidentes de dolor, muchas veces ya es un caso avanzado.

## 7 señales de alerta

### 1. Cambios en el comportamiento
Un perro sociable que de repente se vuelve huraño o agresivo al tocarle cierta zona 
puede estar experimentando dolor.

### 2. Cambios en el apetito
La pérdida o aumento súbito del apetito puede indicar dolor dental, 
gastrointestinal o sistémico.

### 3. Postura anormal
Arquear la espalda, agacharse exageradamente o evitar ciertas posiciones 
son señales claras de incomodidad.

### 4. Cambios en la vocalización
Gimoteos, maullidos más frecuentes o silencio inusual en animales expresivos 
merecen atención.

### 5. Lamerse o rascarse en exceso
Cuando una mascota se enfoca obsesivamente en una zona específica del cuerpo, 
puede haber dolor subyacente.

### 6. Dificultad para moverse
Cojera, renuencia a subir escaleras o levantarse con esfuerzo son señales clásicas 
de dolor musculoesquelético.

### 7. Cambios en los ojos
Ojos entrecerrados, pupilas dilatadas o expresión "apagada" pueden indicar dolor.

## ¿Cuándo ir al veterinario?

**Inmediatamente** si observas:
- Más de 2 señales simultáneas
- Dificultad respiratoria
- Incapacidad para moverse
- Llanto persistente`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&q=80',
    author: {
      id: 'author-001',
      name: 'Dra. Ana García Ruiz',
      role: 'Médico Veterinario Zootecnista',
      avatarUrl: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=0f766e&color=fff',
    },
    category: 'salud',
    tags: ['salud', 'dolor', 'diagnóstico', 'bienestar animal'],
    readingTimeMinutes: 5,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-06-03T09:00:00Z',
    updatedAt: '2024-06-03T09:00:00Z',
  },
  {
    id: 'blog-004',
    slug: 'esterilizacion-beneficios-mitos',
    title: 'Esterilización: beneficios reales y mitos que debes olvidar',
    excerpt:
      'La esterilización es una de las decisiones más importantes para tu mascota. Desmontamos los mitos más comunes y te explicamos los verdaderos beneficios médicos.',
    content: `## Los mitos más comunes sobre la esterilización

### Mito 1: "Mi mascota va a engordar"
**Realidad**: El peso aumenta por sobrealimentación y falta de ejercicio, no por la cirugía. 
Con una dieta apropiada y actividad física, tu mascota mantendrá su peso ideal.

### Mito 2: "Es malo que no tenga una camada"
**Realidad**: Las mascotas no tienen instinto maternal frustrado. 
No experimenan la maternidad como los humanos.

### Mito 3: "Va a perder su personalidad"
**Realidad**: La personalidad se define por la genética y el entorno, no por las hormonas reproductivas.

## Beneficios médicos reales

### En hembras
- Elimina el riesgo de piometra (infección uterina, mortal si no se trata)
- Reduce dramáticamente el riesgo de cáncer mamario (95% si se hace antes del primer celo)
- Previene embarazos no deseados y sus riesgos asociados

### En machos
- Previene el cáncer testicular
- Reduce el riesgo de hiperplasia prostática benigna
- Disminuye comportamientos como marcaje, monta y agresividad

## ¿Cuándo esterilizar?

**Perros pequeños**: A partir de los 6 meses  
**Perros grandes**: Entre 12 y 18 meses (consultar con tu veterinario)  
**Gatos**: A partir de los 5–6 meses`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1200&q=80',
    author: {
      id: 'author-003',
      name: 'Dr. Carlos Mendoza López',
      role: 'Cirujano Veterinario',
      avatarUrl: 'https://ui-avatars.com/api/?name=Carlos+Mendoza&background=0f766e&color=fff',
    },
    category: 'salud',
    tags: ['esterilización', 'cirugía', 'prevención', 'salud reproductiva'],
    readingTimeMinutes: 8,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-06-10T09:00:00Z',
    updatedAt: '2024-06-10T09:00:00Z',
  },
  {
    id: 'blog-005',
    slug: 'tips-grooming-casa',
    title: '5 tips de grooming en casa entre visitas profesionales',
    excerpt:
      'Mantener el pelaje de tu mascota en buen estado entre citas de grooming no tiene por qué ser difícil. Nuestros expertos te comparten sus mejores técnicas.',
    content: `## Por qué el mantenimiento en casa es importante

Las visitas profesionales de grooming son esenciales, pero el mantenimiento diario 
en casa determina en gran medida la salud del pelaje y la piel de tu mascota.

## Tip 1: El cepillado correcto

Cepilla en la dirección del pelo, nunca contra él. La frecuencia depende del tipo de pelo:
- **Pelo corto**: 2 veces por semana
- **Pelo largo**: Diario para evitar nudos
- **Pelo rizado**: Diario con cepillo de dientes específico

## Tip 2: Revisión de oídos semanal

Con una gasa limpia y solución limpiadora para oídos, limpia solo la parte visible del canal auditivo. 
**Nunca** introduzcas hisopos.

## Tip 3: Cuidado de las patas

Revisa las almohadillas semanalmente. Hidrata con bálsamo específico para mascotas 
(nunca crema humana). Corta el pelo entre las almohadillas para evitar acumulación de suciedad.

## Tip 4: Higiene dental

El 80% de los perros mayores de 3 años tienen enfermedad periodontal. 
Cepilla los dientes 3 veces por semana con pasta dental específica para mascotas.

## Tip 5: Baño correcto

Usa siempre shampoo específico para la especie y tipo de pelo. Enjuaga perfectamente 
(el shampoo residual irrita la piel). Seca completamente para evitar hongos.`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80',
    author: {
      id: 'author-004',
      name: 'Lic. Sofía Torres',
      role: 'Groomer Certificada',
      avatarUrl: 'https://ui-avatars.com/api/?name=Sofia+Torres&background=0f766e&color=fff',
    },
    category: 'cuidados',
    tags: ['grooming', 'cuidados', 'pelaje', 'higiene'],
    readingTimeMinutes: 4,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-06-18T09:00:00Z',
    updatedAt: '2024-06-18T09:00:00Z',
  },
  {
    id: 'blog-006',
    slug: 'estres-gatos-cambios-hogar',
    title: 'Cómo ayudar a tu gato a adaptarse a los cambios del hogar',
    excerpt:
      'Los gatos son animales de hábitos y los cambios pueden generarles estrés significativo. Aprende a identificar el estrés felino y cómo minimizar su impacto.',
    content: `## Los gatos y el estrés: una relación compleja

Los gatos son criaturas de rutina y territorio. Cualquier cambio en su entorno 
puede desencadenar respuestas de estrés que afectan tanto su salud física como emocional.

## Cambios que estresan a los gatos

- Mudanza a un nuevo hogar
- Llegada de un bebé o nueva mascota
- Cambio en los horarios del dueño
- Reordenamiento de muebles
- Visitas frecuentes de extraños

## Señales de estrés en gatos

- Marcaje con orina fuera del arenero
- Esconderse más de lo normal
- Cambios en el apetito
- Sobre-acicalamiento hasta alopecia
- Agresividad repentina

## Estrategias de manejo

### Feromonas sintéticas
Productos como Feliway liberan feromonas faciales sintéticas que generan 
sensación de seguridad en los gatos.

### Enriquecimiento ambiental
- Rascadores en lugares estratégicos
- Estantes y perchas para trepar
- Juguetes interactivos rotativos
- Ventanas accesibles para observar el exterior

### Rutina estable
Mantén horarios fijos de alimentación, juego e interacción.

## Cuándo consultar al veterinario

Si los síntomas de estrés persisten más de 2 semanas o afectan significativamente 
la calidad de vida, consulta a un veterinario especializado en medicina del comportamiento.`,
    coverImageUrl:
      'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=1200&q=80',
    author: {
      id: 'author-001',
      name: 'Dra. Ana García Ruiz',
      role: 'Médico Veterinario Zootecnista',
      avatarUrl: 'https://ui-avatars.com/api/?name=Ana+Garcia&background=0f766e&color=fff',
    },
    category: 'comportamiento',
    tags: ['gatos', 'estrés', 'comportamiento', 'bienestar'],
    readingTimeMinutes: 6,
    isPublished: true,
    isFeatured: false,
    publishedAt: '2024-07-01T09:00:00Z',
    updatedAt: '2024-07-01T09:00:00Z',
  },
]
