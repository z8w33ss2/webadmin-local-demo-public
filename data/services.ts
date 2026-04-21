import type { Service } from '@/types'

export const MOCK_SERVICES: Service[] = [
  {
    id: 'svc-001',
    slug: 'consulta-general',
    title: 'Consulta General',
    shortDescription:
      'Revisión completa de salud con médico veterinario certificado. Diagnóstico preciso y plan de tratamiento personalizado.',
    fullDescription: `Nuestra consulta general es el primer paso para garantizar el bienestar de tu mascota. 
Nuestros médicos veterinarios con más de 10 años de experiencia realizan una revisión integral 
que incluye evaluación física completa, análisis de historial médico y recomendaciones personalizadas.

Durante la consulta evaluamos:
- Estado general de salud
- Peso y condición corporal
- Revisión de mucosas y piel
- Auscultación cardio-pulmonar
- Palpación abdominal
- Revisión dental básica`,
    icon: '🩺',
    imageUrl:
      'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&q=80',
    price: { from: 350, currency: 'MXN', label: 'Desde $350 MXN' },
    features: [
      'Revisión física completa',
      'Diagnóstico profesional',
      'Plan de tratamiento',
      'Receta médica incluida',
      'Seguimiento post-consulta',
    ],
    duration: '30–45 min',
    category: 'consulta',
    isActive: true,
    isFeatured: true,
    order: 1,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
  {
    id: 'svc-002',
    slug: 'vacunacion',
    title: 'Vacunación',
    shortDescription:
      'Programa completo de vacunación para perros y gatos. Vacunas de importación con cadena de frío garantizada.',
    fullDescription: `Protege a tu mascota con nuestro programa de vacunación diseñado por especialistas. 
Contamos con todas las vacunas disponibles en el mercado, asegurando la máxima protección 
contra enfermedades infecciosas prevenibles.

Nuestro esquema de vacunación incluye:
- Vacunas core (obligatorias)
- Vacunas opcionales según estilo de vida
- Cartilla de vacunación actualizada
- Recordatorios automáticos por WhatsApp`,
    icon: '💉',
    imageUrl:
      'https://images.unsplash.com/photo-1559000357-f6b52ddfccef?w=800&q=80',
    price: { from: 180, currency: 'MXN', label: 'Desde $180 MXN' },
    features: [
      'Vacunas de importación certificadas',
      'Cartilla oficial incluida',
      'Recordatorio por WhatsApp',
      'Aplicación sin estrés',
      'Seguimiento de esquema completo',
    ],
    duration: '15–20 min',
    category: 'prevencion',
    isActive: true,
    isFeatured: true,
    order: 2,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
  {
    id: 'svc-003',
    slug: 'cirugia',
    title: 'Cirugía Veterinaria',
    shortDescription:
      'Procedimientos quirúrgicos con equipo de anestesia moderno y equipo especializado certificado.',
    fullDescription: `Nuestro quirófano equipado con tecnología de vanguardia garantiza procedimientos 
seguros y exitosos. Contamos con cirujanos certificados y equipo de soporte para monitoreo 
anestésico en tiempo real.

Procedimientos disponibles:
- Esterilización (ovariohisterectomía y orquiectomía)
- Cirugía ortopédica
- Cirugía de tejidos blandos
- Extracción dental
- Cirugía de emergencia`,
    icon: '🔬',
    imageUrl:
      'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
    price: { from: 1200, currency: 'MXN', label: 'Desde $1,200 MXN' },
    features: [
      'Quirófano equipado al 100%',
      'Anestesia monitorizada',
      'Cirujanos certificados',
      'Hospitalización post-operatoria',
      'Reporte quirúrgico detallado',
    ],
    duration: 'Variable',
    category: 'cirugia',
    isActive: true,
    isFeatured: true,
    order: 3,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
  {
    id: 'svc-004',
    slug: 'grooming',
    title: 'Grooming & Estética',
    shortDescription:
      'Servicio de baño, corte y estética profesional. Tu mascota luce y huele increíble.',
    fullDescription: `Nuestro servicio de grooming está a cargo de estilistas profesionales 
especializados en diferentes razas. Usamos productos premium, hipoalergénicos y libres 
de químicos agresivos para el cuidado de la piel y el pelo de tu mascota.

Incluye:
- Baño con shampoo especializado por tipo de pelo
- Secado profesional
- Corte según estándar de raza
- Limpieza de oídos
- Corte de uñas
- Pañuelo o moño de obsequio`,
    icon: '✂️',
    imageUrl:
      'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80',
    price: { from: 280, currency: 'MXN', label: 'Desde $280 MXN' },
    features: [
      'Productos premium hipoalergénicos',
      'Estilistas certificados',
      'Corte por estándar de raza',
      'Incluye limpieza de oídos y uñas',
      'Aromaterapia opcional',
    ],
    duration: '1–3 horas',
    category: 'estetica',
    isActive: true,
    isFeatured: false,
    order: 4,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
  {
    id: 'svc-005',
    slug: 'urgencias',
    title: 'Urgencias 24/7',
    shortDescription:
      'Atención de emergencias veterinarias las 24 horas. Equipo de guardia permanente para salvar vidas.',
    fullDescription: `Cuando tu mascota necesita ayuda urgente, estamos disponibles las 24 horas del día, 
los 7 días de la semana. Nuestro equipo de urgencias cuenta con el equipamiento necesario 
para atender cualquier emergencia médica.

Atendemos:
- Traumatismos y fracturas
- Intoxicaciones y envenenamientos
- Crisis convulsivas
- Dificultad respiratoria
- Partos complicados
- Cirugía de emergencia`,
    icon: '🚨',
    imageUrl:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    price: { from: 500, currency: 'MXN', label: 'Desde $500 MXN' },
    features: [
      'Atención 24/7 los 365 días',
      'Médico de guardia permanente',
      'Equipo de emergencia completo',
      'UCI veterinaria disponible',
      'Traslado de emergencia',
    ],
    duration: 'Inmediata',
    category: 'emergencia',
    isActive: true,
    isFeatured: true,
    order: 5,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
  {
    id: 'svc-006',
    slug: 'nutricion',
    title: 'Nutrición Veterinaria',
    shortDescription:
      'Planes de alimentación personalizados elaborados por nutriólogos veterinarios certificados.',
    fullDescription: `Una buena alimentación es la base de la salud de tu mascota. 
Nuestros nutriólogos veterinarios elaboran planes de alimentación completamente personalizados 
considerando la especie, raza, edad, peso y condición de salud de cada paciente.

El servicio incluye:
- Evaluación corporal y nutricional completa
- Plan de alimentación personalizado
- Recomendación de alimentos y suplementos
- Seguimiento mensual
- Ajustes según evolución`,
    icon: '🥗',
    imageUrl:
      'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=800&q=80',
    price: { from: 450, currency: 'MXN', label: 'Desde $450 MXN' },
    features: [
      'Evaluación corporal completa',
      'Plan 100% personalizado',
      'Seguimiento mensual incluido',
      'App de seguimiento',
      'Recetas caseras opcionales',
    ],
    duration: '45–60 min',
    category: 'nutricion',
    isActive: true,
    isFeatured: false,
    order: 6,
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-06-01T08:30:00Z',
  },
]
