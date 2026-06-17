/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceDetail {
  id: string;
  name: string;
  category: 'dental' | 'medicare';
  brief: string;
  description: string;
  benefits: string[];
  icon: string; // lucide icon name
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  date: string;
  experience: string;
  serviceReceived: string;
  authorTitle?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'clinical' | 'equipment' | 'specialist';
  description: string;
  imageUrl: string;
}

export interface InquiryFormState {
  fullName: string;
  phoneNumber: string;
  email: string;
  selectedService: string;
  preferredDateTime: string;
  message: string;
  submitted: boolean;
  routingChoice: 'direct' | 'whatsapp' | 'email';
}
