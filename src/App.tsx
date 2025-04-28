import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

// Define the structure for a streaming platform offering
interface Platform {
  id: number;
  name: string;
  description: string;
  price: number; // Assuming price is a number, e.g., monthly cost
  whatsappLink: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category?: string;
  subcategory?: string;
  duration?: string;
  devices?: string;
  whatsappLink: string;
  image?: string; // Added image property
  info?: string; // Added info property
}

// Placeholder logo component
const PlaceholderLogo: React.FC<{ bgColor?: string }> = ({ bgColor = 'bg-gray-200' }) => (
  <div className={`flex-shrink-0 ${bgColor} border border-gray-300 rounded-lg w-16 h-16 flex items-center justify-center`}>
     <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
  </div>
);

export default function App() {
  const yourWhatsAppNumber = '573175014262'; // REEMPLAZAR CON TU NÚMERO DE WHATSAPP

  const categories = {
    "Streaming Premium": {
      "Netflix": [
        { 
          id: 1, 
          name: 'Netflix Semi', 
          description: 'Plan personal con calidad HD', 
          price: 12000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Netflix%20Semi`,
          image: 'https://st.nexwhite.com/images/productos/logo46(2).png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 2, 
          name: 'Netflix Original', 
          description: 'Plan personal con máxima calidad', 
          price: 16000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Netflix%20Original`,
          image: 'https://st.nexwhite.com/images/productos/logo1%20N.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 3, 
          name: 'Netflix Semi Completa', 
          description: 'Cuenta completa con calidad HD', 
          price: 48000, 
          duration: '1 mes', 
          type: 'Cuenta Completa', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Netflix%20Semi`,
          image: 'https://st.nexwhite.com/images/productos/logo45(1).png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Disney+": [
        { 
          id: 4, 
          name: 'Disney+ Estándar', 
          description: 'Plan personal estándar', 
          price: 8000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Disney%2B%20Estándar`,
          image: 'https://st.nexwhite.com/images/productos/disneysp.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 5, 
          name: 'Disney+ Premium', 
          description: 'Plan personal premium', 
          price: 12000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Disney%2B%20Premium`,
          image: 'https://st.nexwhite.com/images/productos/disneypp.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 6, 
          name: 'Disney+ Estándar Completa', 
          description: 'Cuenta completa estándar', 
          price: 25000, 
          duration: '1 mes', 
          type: 'Cuenta Completa', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Disney%2B%20Estándar`,
          image: 'https://st.nexwhite.com/images/productos/disneys.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 7 Perfiles
✅ Cantidad de dispositivos: 2 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 7, 
          name: 'Disney+ Premium Completa', 
          description: 'Cuenta completa premium', 
          price: 32000, 
          duration: '1 mes', 
          type: 'Cuenta Completa', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Disney%2B%20Premium`,
          image: 'https://st.nexwhite.com/images/productos/disneyp.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 7 Perfiles
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Amazon Prime": [
        { 
          id: 8, 
          name: 'Amazon Prime', 
          description: 'Plan personal', 
          price: 7000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Amazon%20Prime`,
          image: 'https://st.nexwhite.com/images/productos/logo4.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 9, 
          name: 'Amazon Prime Completa', 
          description: 'Cuenta completa', 
          price: 16000, 
          duration: '1 mes', 
          type: 'Cuenta Completa', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Amazon%20Prime`,
          image: 'https://st.nexwhite.com/images/productos/logo91.png', 
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 6 Perfiles
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Max": [
        { 
          id: 10, 
          name: 'Max', 
          description: 'Plan personal', 
          price: 6000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Max`,
          image: 'https://st.nexwhite.com/images/productos/MAXP1_.png',
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 11, 
          name: 'Max Completa', 
          description: 'Cuenta completa', 
          price: 14000, 
          duration: '1 mes', 
          type: 'Cuenta Completa', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Max`,
          image: 'https://st.nexwhite.com/images/productos/MAXC1.png', // URL de la imagen
          info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 6 Perfiles
✅ Cantidad de dispositivos: 3 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Plex": [
  { 
    id: 42, 
    name: 'Plex 1 Mes', 
    description: 'Cuenta Plex mensual', 
    price: 12000, 
    duration: '1 mes', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Plex%201M`,
    image: 'https://st.nexwhite.com/images/productos/logo34.png',
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` // URL de la imagen
  },
  {
    id: 18, 
    name: 'Plex 1 Mes', 
    description: 'Cuenta Plex mensual', 
    price: 20000, 
    duration: '1 mes', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Plex%201M`,
    image: 'https://st.nexwhite.com/images/productos/logo11.png',
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 4 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` // URL de la imagen
  },
  { 
    id: 19, 
    name: 'Plex 3 Meses', 
    description: 'Cuenta Plex trimestral', 
    price: 51000, 
    duration: '3 meses', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Plex%203M`,
    image: 'https://st.nexwhite.com/images/productos/logo42.0.png', 
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

    ✅ Cantidad de perfiles: 1 Perfil
    ✅ Cantidad de dispositivos: 4 Dispositivo
    ✅ Duración y garantía: 89 a 90 días
    ✅ Solicitar la renovación 2 días antes
    Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
    🚨 TÉRMINOS Y CONDICIONES 🚨
    El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
    ✅ NO cambiar ninguno de los datos de la cuenta
    ✅ NO usar la cuenta fuera de Colombia
    ✅ Usar solo el número de dispositivos adquirido
    Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` 
  },
  { 
    id: 20, 
    name: 'Plex 6 Meses', 
    description: 'Cuenta Plex semestral', 
    price: 90000, 
    duration: '6 meses', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Plex%206M`,
    image: 'https://st.nexwhite.com/images/productos/logo42.2.png', // URL de la imagen
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

    ✅ Cantidad de perfiles: 1 Perfil
    ✅ Cantidad de dispositivos: 4 Dispositivo
    ✅ Duración y garantía: 179 a 180 días
    ✅ Solicitar la renovación 2 días antes
    Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
    🚨 TÉRMINOS Y CONDICIONES 🚨
    El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
    ✅ NO cambiar ninguno de los datos de la cuenta
    ✅ NO usar la cuenta fuera de Colombia
    ✅ Usar solo el número de dispositivos adquirido
    Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` 
  },
  { 
    id: 21, 
    name: 'Plex 12 Meses', 
    description: 'Cuenta Plex anual', 
    price: 170000, 
    duration: '12 meses', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Plex%2012M`,
    image: 'https://st.nexwhite.com/images/productos/logo42.1.png', // URL de la imagen
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

    ✅ Cantidad de perfiles: 1 Perfil
    ✅ Cantidad de dispositivos: 4 Dispositivo
    ✅ Duración y garantía: 364 a 365 días
    ✅ Solicitar la renovación 2 días antes
    Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
    🚨 TÉRMINOS Y CONDICIONES 🚨
    El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
    ✅ NO cambiar ninguno de los datos de la cuenta
    ✅ NO usar la cuenta fuera de Colombia
    ✅ Usar solo el número de dispositivos adquirido
    Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` 
  }
],
  "Paramount+": [{ 
    id: 12, 
    name: 'Paramount+', 
    description: 'Plan personal', 
    price: 6000, 
    duration: '1 mes', 
    type: 'Personal', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Paramount%2B`,
    image: 'https://st.nexwhite.com/images/productos/logo39.png', // URL de la imagen
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  },
  {
    id: 15, 
    name: 'Paramount+ Completa', 
    description: 'Cuenta completa', 
    price: 13000, 
    duration: '1 mes', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Paramount%2B`,
    image: 'https://st.nexwhite.com/images/productos/logo66(1).png', // URL de la imagen
    info: `🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 6 Perfiles
✅ Cantidad de dispositivos: 4 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  }
],  
  "Crunchyroll+": [{
    id: 13, 
    name: 'Crunchyroll', 
    description: 'Plan personal', 
    price: 7000, 
    duration: '1 mes', 
    type: 'Personal', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Crunchyroll`,
    image: 'https://st.nexwhite.com/images/productos/logo44(1).png', // URL de la imagen
    info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  },
  { 
    id: 16, 
    name: 'Crunchyroll Completa', 
    description: 'Cuenta completa', 
    price: 12000, 
    duration: '1 mes', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Crunchyroll`,
    image: 'https://st.nexwhite.com/images/productos/logo7.png', // URL de la imagen
    info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 5 Perfiles
✅ Cantidad de dispositivos: 4 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  }
],
  
  "Vix": [{ 
    id: 14, 
    name: 'Vix', 
    description: 'Plan personal', 
    price: 9000, 
    duration: '1 mes', 
    type: 'Personal', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20P.%20Vix`,
    image: 'https://st.nexwhite.com/images/productos/VIX%20PANt.png', // URL de la imagen
    info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  },
  { 
    id: 17, 
    name: 'Vix Completa', 
    description: 'Cuenta completa', 
    price: 16000, 
    duration: '1 mes', 
    type: 'Cuenta Completa', 
    whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20C.%20Vix`,
    image: 'https://st.nexwhite.com/images/productos/VIX%20CUn.png', // URL de la imagen
    info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 5 Perfiles
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
  }
]
    },
    "Música y Entretenimiento": {
  "Música": [
    { 
      id: 22, 
      name: 'Spotify Premium', 
      description: '1 dispositivo', 
      price: 9000, 
      duration: '1 mes', 
      type: 'Personal', 
      whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Spotify%201D%201M`,
      image: 'https://st.nexwhite.com/images/productos/logo16(1).png', // URL de la imagen
      info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
    },
     { 
      id: 24, 
      name: 'Tidal HiFi', 
      description: '1 dispositivo', 
      price: 7000, 
      duration: '1 mes', 
      type: 'Personal', 
      whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Tidal%201D%201M`,
      image: 'https://st.nexwhite.com/images/productos/logo60(1).png', // URL de la imagen
      info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfiles
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
    },
    { 
      id: 44, 
      name: 'Deezer', 
      description: '1 dispositivo', 
      price: 7000, 
      duration: '1 mes', 
      type: 'Personal', 
      whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Tidal%201D%201M`,
      image: 'https://st.nexwhite.com/images/productos/deezer.png', // URL de la imagen
      info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfiles
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
    }
  ],
  "Gaming": [
    { 
      id: 25, 
      name: 'Xbox Game Pass', 
      description: 'Acceso a +100 juegos', 
      price: 32000, 
      duration: '1 mes', 
      type: 'Gaming', 
      whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Xbox%20Game%20Pass%201M`,
      image: 'https://st.nexwhite.com/images/productos/logo17.webp', // URL de la imagen
      info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
    }
  ]
},
    "TV en Vivo": {
      "IPTV": [
        { 
          id: 26, 
          name: 'IPTV 1 Dispositivo', 
          description: 'Servicio IPTV básico', 
          price: 12000, 
          duration: '1 mes', 
          type: 'Personal', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20IPTV%201D%201M`,
          image: 'https://st.nexwhite.com/images/productos/iptvp1.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 27, 
          name: 'IPTV 3 Dispositivos', 
          description: 'Servicio IPTV familiar', 
          price: 23000, 
          duration: '1 mes', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20IPTV%204D%201M`,
          image: 'https://st.nexwhite.com/images/productos/IPTVCe1.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 28, 
          name: 'IPTV 3D 3M', 
          description: 'Servicio IPTV familiar trimestral', 
          price: 55000, 
          duration: '3 meses', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20IPTV%204D%203M`,
          image: 'https://st.nexwhite.com/images/productos/IPTVCe3.png',
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 89 a 90 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` // URL de la imagen
        },
        { 
          id: 29, 
          name: 'IPTV 3D 6M', 
          description: 'Servicio IPTV familiar semestral', 
          price: 100000, 
          duration: '6 meses', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20IPTV%204D%206M`,
          image: 'https://st.nexwhite.com/images/productos/IPTVCe6.png',
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 179 a 180 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.` // URL de la imagen
        },
        { 
          id: 30, 
          name: 'IPTV 3D 12M', 
          description: 'Servicio IPTV familiar anual', 
          price: 180000, 
          duration: '12 meses', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20IPTV%204D%2012M`,
          image: 'https://st.nexwhite.com/images/productos/IPTVCe12.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 364 a 365 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Otros Servicios TV": [
        { 
          id: 31, 
          name: 'Tele Latino', 
          description: '3 dispositivos', 
          price: 22000, 
          duration: '1 mes', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Tele%20Latino%203D%201M`,
          image: 'https://st.nexwhite.com/images/productos/logo123.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 32, 
          name: 'Flujo TV', 
          description: '3 dispositivos', 
          price: 35000, 
          duration: '1 mes', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Flujo%20TV%203D%201M`,
          image: 'https://st.nexwhite.com/images/productos/flujotev.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfiles
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 40, 
          name: 'Invictus Pass', 
          description: '2 dispositivos', 
          price: 12000, 
          duration: '1 mes', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Flujo%20TV%203D%201M`,
          image: 'https://st.nexwhite.com/images/productos/C.%20INVIC.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 3 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 41, 
          name: 'Directv Go & Win Sports +', 
          description: '1 dispositivo', 
          price: 39000, 
          duration: '1 mes', 
          type: 'Familiar', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Flujo%20TV%203D%201M`,
          image: 'https://st.nexwhite.com/images/productos/logo71(2).png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ]
    },
    "Software y Servicios": {
      "Microsoft y Seguridad": [
        { 
          id: 33, 
          name: 'Microsoft Office 365', 
          description: 'Suite completa de Office', 
          price: 80000, 
          duration: '1 año', 
          type: 'Software', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Microsoft%20Office%20365`,
          image: 'https://st.nexwhite.com/images/productos/logo142(2).png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 364 a 365 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 34, 
          name: 'McAfee Antivirus', 
          description: '5 dispositivos', 
          price: 9000, 
          duration: '1 mes', 
          type: 'Seguridad', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20McAfee%20Antivirus`,
          image: 'https://st.nexwhite.com/images/productos/MCAFEE.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 5 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "IA y Educación": [
        { 
          id: 35, 
          name: 'Jarvis AI GPT 4.5', 
          description: 'Asistente IA avanzado', 
          price: 23000, 
          duration: '1 mes', 
          type: 'IA', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Jarvis%20AI%20GPT%204.5`,
          image: 'https://st.nexwhite.com/images/productos/Jarvis%20AI.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 36, 
          name: 'Ask Pro', 
          description: 'Servicio de consultas IA', 
          price: 23000, 
          duration: '1 mes', 
          type: 'IA', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Ask%20Pro`,
          image: 'https://st.nexwhite.com/images/productos/IASKS.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 37, 
          name: 'Super Duolingo', 
          description: 'Aprende idiomas sin límites', 
          price: 8500, 
          duration: '1 mes', 
          type: 'Educación', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Super%20Duolingo`,
          image: 'https://st.nexwhite.com/images/productos/logo142().png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ],
      "Herramientas Creativas": [
        { 
          id: 38, 
          name: 'Prezi Plus', 
          description: 'Presentaciones profesionales', 
          price: 18000, 
          duration: '20 días', 
          type: 'Creatividad', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Prezi%20Plus`,
          image: 'https://st.nexwhite.com/images/productos/Prezi%20plus.png', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivos
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        },
        { 
          id: 39, 
          name: 'Canva', 
          description: 'Diseño gráfico simplificado', 
          price: 10000, 
          duration: '1 mes', 
          type: 'Creatividad', 
          whatsappLink: `https://wa.me/${yourWhatsAppNumber}?text=Hola%2C%20me%20interesa%20Canva`,
          image: 'https://st.nexwhite.com/images/productos/canva.jpg', // URL de la imagen
          info:`🔖 DESCRIPCIÓN DEL PRODUCTO 🔖

✅ Cantidad de perfiles: 1 Perfil
✅ Cantidad de dispositivos: 1 Dispositivo
✅ Duración y garantía: 29 a 30 días
✅ Solicitar la renovación 2 días antes
Al comprar este producto, aceptas todos los términos y condiciones. Entiendes que la cuenta puede tener fallos o caídas y que conoces la información de los banners y tutoriales sobre cómo reportar novedades de los productos.
🚨 TÉRMINOS Y CONDICIONES 🚨
El incumplimiento de los siguientes términos resulta en la pérdida inmediata de la garantía y el acceso del producto.
✅ NO cambiar ninguno de los datos de la cuenta
✅ NO usar la cuenta fuera de Colombia
✅ Usar solo el número de dispositivos adquirido
Tenga en cuenta que se considera el producto como funcional hasta el momento en que se reporta alguna novedad, por lo que nos basaremos en la fecha del reporte para realizar la entrega de la respectiva garantía o si aplica el reembolso correspondiente a los días faltantes del producto. Por eso, les recomendamos reportar cualquier falla tan pronto como se evidencie.`
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Servicios Premium
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Las mejores plataformas a precios increíbles
          </p>
        </header>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {Object.entries(categories).map(([categoryName, subcategories]) => (
            <AccordionItem 
              key={categoryName} 
              value={categoryName} 
              className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/50 dark:border-gray-700/50"
            >
              <AccordionTrigger className="px-6 py-4 text-xl font-semibold hover:bg-gray-50/50 dark:hover:bg-gray-800/50 rounded-t-lg transition-all">
                {categoryName}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {Object.entries(subcategories).map(([subcategoryName, products]) => (
                    <Card key={subcategoryName} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 dark:bg-gray-900/90">
                      <CardHeader className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 rounded-t-lg">
                        <CardTitle className="text-lg font-semibold">{subcategoryName}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <div className="space-y-4">
                          {products.map((product: Product) => (
                            <div key={product.id} className="p-4 rounded-lg bg-gray-50/80 dark:bg-gray-800/80 hover:bg-gray-100/80 dark:hover:bg-gray-700/80 transition-colors">
                              <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-32 object-contain rounded-lg mb-4" 
                              />
                              <div className="flex justify-between items-start mb-3">
                                <div>
                                  <h3 className="font-medium text-gray-900 dark:text-white">
                                    {product.name}
                                  </h3>
                                  <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {product.duration && `${product.duration} • `}
                                    {product.devices && `${product.devices} • `}
                                    {product.description}
                                  </p>
                                </div>
                                <span className="text-lg font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                                  ${product.price.toLocaleString()}
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <a
                                  href={product.whatsappLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full inline-flex justify-center items-center px-4 py-2.5 bg-gray-300 hover:bg-gray-400 text-white rounded-lg text-sm font-medium transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                  Comprar por WhatsApp
                                </a>
                                <button
                                  onClick={() => alert(product.info)} // Muestra el atributo info en un popup
                                  className="ml-2 p-3 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors shadow-lg"
                                  title="Más información"
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-blue-600 dark:text-blue-400"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59-8-8 3.59-8 8-8zm-.88-13h1.75v1.75h-1.75V7zm0 3.5h1.75v7h-1.75v-7z" />
                                  </svg>
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <section className="mt-16">
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.imgur.com/5Q0wFR4.jpeg" 
              alt="Preguntas frecuentes" 
              className="rounded-lg shadow-lg w-full max-w-md"
            />
          </div>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Preguntas frecuentes
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="text-xl font-semibold">¿Cómo funciona el servicio?</h3>
              <p>
                Después de realizar tu compra, recibirás en tu WhatsApp las credenciales de acceso a la plataforma que adquiriste. Estas credenciales son compartidas con otros usuarios, pero cada uno tiene su propio perfil independiente.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Es legal este servicio?</h3>
              <p>
                Sí, completamente legal. Utilizamos cuentas familiares o planes compartidos que permiten múltiples usuarios, tal como lo ofrecen las propias plataformas de streaming.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Qué pasa si cambian las credenciales?</h3>
              <p>
                En caso de que haya algún cambio en las credenciales (lo cual es muy poco frecuente), te enviaremos las nuevas inmediatamente por WhatsApp sin costo adicional.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">¿Qué métodos de pago aceptan?</h3>
              <p>
                Aceptamos transferencias bancarias, Mercado Pago, PayPal y criptomonedas. Los detalles de pago se proporcionan al contactarnos por WhatsApp.
              </p>
            </div>
          </div>
        </section>
        <footer className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-400">&copy; {new Date().getFullYear()} Tu Tienda Virtual</p>
          <p className="mt-2 text-gray-500 dark:text-gray-500">¿Preguntas? Contáctanos por WhatsApp</p>
        </footer>

        
      </div>
    </div>
  );
};
