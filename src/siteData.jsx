import {
  BadgeIndianRupee,
  Banknote,
  BookOpenCheck,
  Bus,
  CarFront,
  CreditCard,
  FileBadge,
  FileCheck2,
  Files,
  Headphones,
  IdCard,
  Landmark,
  Phone,
  Printer,
  ScanLine,
  ShieldCheck,
  Smartphone,
  Sparkles,
  TrainFront,
  WalletCards,
} from 'lucide-react';

export const PHONE_NUMBER = '919514474999';
export const DISPLAY_PHONE = '+91 95144 74999';
export const ADDRESS =
  '10/103, Pattur Main Road, Chinnapanicheri, Paraniputhur, Chennai - 600122';
export const BUSINESS_NAME = 'Rithika Hub / Rithika Mobiles';
export const DIRECTIONS_URL = 'https://maps.app.goo.gl/DtzjzNVCMf9snpyh9';

export const filters = ['All', 'Documents', 'Printing', 'Payments', 'Travel', 'Mobile'];

export const bentoCategories = [
  {
    title: 'Documents & ID Support',
    filter: 'Documents',
    icon: IdCard,
    description: 'Guidance and support for key public documents and identity services.',
    services: [
      { name: 'Aadhaar Card services', icon: IdCard },
      { name: 'PAN Card services', icon: CreditCard },
      { name: 'Passport support', icon: FileBadge },
      { name: 'Voter ID support', icon: FileCheck2 },
      { name: 'Motor insurance', icon: ShieldCheck },
    ],
  },
  {
    title: 'Print Studio',
    filter: 'Printing',
    icon: Printer,
    description: 'Clean copies, colour prints, scans, binding, lamination, and photo prints.',
    services: [
      { name: 'Xerox', icon: Files },
      { name: 'Colour print', icon: Printer },
      { name: 'Lamination', icon: Sparkles },
      { name: 'Spiral binding', icon: BookOpenCheck },
      { name: 'Passport size photo print', icon: FileBadge },
      { name: 'Scanning', icon: ScanLine },
    ],
  },
  {
    title: 'Payments & Banking',
    filter: 'Payments',
    icon: Banknote,
    description: 'Money transfer, EMI payment, cash withdrawal, and practical payment help.',
    services: [
      { name: 'Money transfer', icon: Banknote },
      { name: 'EMI payment', icon: BadgeIndianRupee },
      { name: 'Cash withdrawal', icon: Banknote },
    ],
  },
  {
    title: 'Recharge & Utilities',
    filter: 'Payments',
    icon: WalletCards,
    description: 'Recharge and bill support for everyday household and mobile needs.',
    services: [
      { name: 'EB Bill payment', icon: Landmark },
      { name: 'Mobile recharge', icon: Smartphone },
      { name: 'DTH recharge', icon: WalletCards },
    ],
  },
  {
    title: 'Travel Booking',
    filter: 'Travel',
    icon: Bus,
    description: 'Booking support for bus, train, and local ride needs.',
    services: [
      { name: 'Bus ticket booking', icon: Bus },
      { name: 'Train ticket booking', icon: TrainFront },
      { name: 'Ola booking support', icon: CarFront },
    ],
  },
  {
    title: 'Mobile Essentials',
    filter: 'Mobile',
    icon: Smartphone,
    description: 'Mobile accessories and recharge support from Rithika Mobiles.',
    services: [{ name: 'Mobile accessories', icon: Headphones }],
  },
];

export const allServices = bentoCategories.flatMap((category) => category.services);

export function createWhatsAppLink(serviceName) {
  const message = `Hi Rithika Hub, I want to know about ${serviceName}. Please share details.`;
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function createWhatsAppMessageLink(message) {
  return `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
