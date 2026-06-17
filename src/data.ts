/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceDetail, Testimonial, GalleryItem } from './types';

export const CLINIC_SERVICES: ServiceDetail[] = [
  {
    id: 'orthodontics',
    name: 'Orthodontics & Aligner Therapy',
    category: 'dental',
    brief: 'Advanced alignment solutions including luxury clear aligners and traditional corrective bracket systems.',
    description: 'Dr. Zahid Medicare & Dental Specialists offers bespoke orthodontic treatments designed to restore natural bite mechanics and enhance facial symmetry. We specialize in state-of-the-art clear aligners, ceramic brace systems, and self-ligating brackets for both adult and pediatric care with minimum aesthetic disruption.',
    benefits: ['Invisible aesthetic options (Clear Aligners)', 'Accelerated treatment programs', 'Customized digital profile forecasting', 'Retainer follow-up program included'],
    icon: 'Sparkles'
  },
  {
    id: 'implants',
    name: 'Advanced Dental Implants',
    category: 'dental',
    brief: 'High-precision titanium implants crafted for lifelong structural durability and natural jaw integrity.',
    description: 'Our restorative dental implantology relies on premier materials to replicate the natural root structure. Dr. Zahid employs minimally invasive guided surgery techniques to place grade-5 titanium implants that fuse seamlessly with the jawbone, supporting custom-tailored dental crowns with high visual fidelity.',
    benefits: ['Grade-5 biocompatible medical titanium', '3D guided digital placement planning', 'Saves native surrounding tooth structure', 'Lifelong durability with proper hygiene'],
    icon: 'ShieldCheck'
  },
  {
    id: 'cosmetic',
    name: 'Cosmetic Smile Makeovers',
    category: 'dental',
    brief: 'Artistic smile design using luxury hand-layered ceramic veneers, porcelain crowns, and laser whitening.',
    description: 'Every smile design is a tailored collaboration. We customize natural teeth contours, hue calibration, and spacing with high-quality porcelain veneers (laminates) or biological gold-ceramic crowns. Complete with clinical laser whitening systems that safely elevate shades without sensitivity.',
    benefits: ['Individually calibrated color mapping', 'Premium ultra-thin porcelain veneers', 'Immediate and safe laser whitening results', 'Natural light transmission and biomimetic finish'],
    icon: 'Heart'
  },
  {
    id: 'root-canal',
    name: 'Micro-Endodontics & Restorations',
    category: 'dental',
    brief: 'Advanced pain-free root canal therapies performed under advanced clinical magnification.',
    description: 'Say goodbye to surgical anxieties. Our micro-endodontics service addresses advanced inner tooth pulp infection using painless anesthesia procedures and rotary file instrumentation, ensuring thorough canal disinfection and sealing to protect native teeth from extraction.',
    benefits: ['100% pain-controlled anesthesia flow', 'Rotary precision instruments', 'Hermetic tooth root sealing', 'Avoids expensive extractions'],
    icon: 'Activity'
  },
  {
    id: 'oral-surgery',
    name: 'Specialist Oral Surgery',
    category: 'dental',
    brief: 'Surgical tooth extractions, impacted wisdom tooth relief, and bone grafting procedures.',
    description: 'Our clinical suite handles complicated surgical tasks like fully impacted wisdom teeth beneath the ridge, alveolar bone graft preparation for dental implants, and corrective gum contouring. Each procedure prioritizes ultra-fast healing timelines and strict sterile protocols.',
    benefits: ['At-home recovery guidance and starter kits', 'Laser assisted minor oral surgery', 'Minimally-invasive extraction tools', 'Aesthetic tissue suture closure'],
    icon: 'Stethoscope'
  },
  {
    id: 'primary-care',
    name: 'Comprehensive Medicare & Family Consultations',
    category: 'medicare',
    brief: 'Multi-system physical checkups, chronic health management, and customized diagnostic care.',
    description: 'Dedicated to total system vitality. Dr. Zahid offers comprehensive general medicine checkups, medical therapy optimization, diagnostic assessment, and continuous management of lifestyle ailments (hypertension, diabetes, lipid management) tailored to your biology.',
    benefits: ['Thorough multi-system somatic evaluations', 'Preventive cardiovascular testing profiles', 'Chronic therapeutic dosage matching', 'Senior lifestyle vitality support'],
    icon: 'HeartHandshake'
  },
  {
    id: 'preventive-health',
    name: 'Biomedical Screenings & Health Advisory',
    category: 'medicare',
    brief: 'Early indicator panels, wellness consultations, and age-specific diagnostic screening guidelines.',
    description: 'Preventive healthcare is the highest level of medicine. We conduct tailored wellness risk assessments, metabolic profiling, and physical diagnostics to intercept chronic illness early. Receive custom-engineered nutritional, fitness, and stress guidance based on empirical facts.',
    benefits: ['Detailed metabolic laboratory analyses', 'Personalized biomarker optimization maps', 'Actionable longevity blueprints', 'Age-appropriate screening recommendations'],
    icon: 'Award'
  }
];

export const PATIENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Zainab Fatima',
    rating: 5,
    date: '2026-05-18',
    experience: 'Dr. Zahid Iqbal is a true master of dentistry! I had extreme anxiety about custom clear aligners, but he explained the process digitally. The beige, pristine clinic runs with immaculate hygiene, and the consultation on Wednesday evening was phenomenal.',
    serviceReceived: 'Clear Aligner Orthodontics',
    authorTitle: 'DHA Phase 5 Resident'
  },
  {
    id: 't2',
    name: 'Kamran Alvi',
    rating: 5,
    date: '2026-06-02',
    experience: 'Excellent Medicare diagnostic care. Dr. Zahid diagnosed my persistent hypertension and prescribed a customized routine that brought it down immediately. A truly modern specialist who respects the patient’s time. Booking via WhatsApp is seamless.',
    serviceReceived: 'Medicare Cardiovascular Wellness',
    authorTitle: 'Business Owner'
  },
  {
    id: 't3',
    name: 'Dr. Sameera Siddiqui',
    rating: 5,
    date: '2026-06-10',
    experience: 'As a fellow medical practitioner, I am highly critical of sterilization protocols. Dr. Zahid’s sanitation is world-class. My wisdom tooth extraction was completed effortlessly and took less than 20 minutes under excellent local anesthesia. Recommended highly!',
    serviceReceived: 'Wisdom Tooth Surgical Extraction',
    authorTitle: 'Consultant Pediatrician'
  },
  {
    id: 't4',
    name: 'Hamza Malik',
    rating: 5,
    date: '2026-06-14',
    experience: 'The smile makeover has changed my life. I received premium ceramic dental crowns and laser whitening. The aesthetics of the teeth are amazingly natural under multiple lighting spectrums. Dr. Zahid Dental Specialists is the gold standard in Karachi.',
    serviceReceived: 'Cosmetic Smile Makeover',
    authorTitle: 'Creative Director'
  }
];

export const CLINIC_GALLERY: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Modern Clinic Suite',
    category: 'clinical',
    description: 'Immaculate consulting workspace styled in neutral warm tones and gold accents for peak psychological comfort and hygiene.',
    imageUrl: '/src/assets/images/dr_zahid_clinic_interior_1781676720259.jpg'
  },
  {
    id: 'g2',
    title: 'Sophisticated Diagnostics',
    category: 'equipment',
    description: 'Biomimetic dental treatment engines equipped with modern high-frequency imaging for precise therapeutic assessments.',
    imageUrl: '/src/assets/images/dr_zahid_dental_tech_1781676735077.jpg'
  },
  {
    id: 'g3',
    title: 'Consultative Excellence',
    category: 'specialist',
    description: 'Professor Dr. Zahid Iqbal discussing custom therapeutic parameters with an absolute focus on personalized patient success.',
    imageUrl: '/src/assets/images/dr_zahid_dentist_consult_1781676751303.jpg'
  }
];
