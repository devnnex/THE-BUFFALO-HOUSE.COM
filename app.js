// app.js — lógica completa para The Boss (con imágenes locales)

// ---------- Config ----------
const BUSINESS_PHONE = '573144399364'; // <- reemplaza por el número real (sin '+')
const DELIVERY_FEE = 5000; // tarifa por defecto de domicilio

// ---------- Datos de ejemplo ----------
const products = [
  // ===== MENU INFANTIL =====
   {
  id: 'ent1',
  category: 'Entraditas',
  title: 'Wings 6 Piezas',
  price: 29500,
  desc: '¡Nuestras originales Alas deliciosamente preparadas para chuparse los dedos! + Papas a la francesa',
  ingredients: ['Wings 6 piezas', 'Papas a la francesa'],
  extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/wings.png'
},
{
  id: 'ent2',
  category: 'Entraditas',
  title: 'Nachos',
  price: 25900,
  desc: 'Totopos de maíz bañados en queso cheddar y acompañados de guacamole, crema agria y pico de gallo.',
  ingredients: ['Totopos de maíz', 'Queso cheddar', 'Guacamole', 'Crema agria', 'Pico de gallo'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/nachos.png'
},
{
  id: 'ent3',
  category: 'Entraditas',
  title: 'Chorizo Artesanal',
  price: 22300,
  desc: 'Tradicional chorizo traído desde nuestros campos, acompañado de arepitas, cascos de limón y suero costeño.',
  ingredients: ['Chorizo artesanal', 'Arepitas', 'Cascos de limón', 'Suero costeño'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chorizo-artesanal.png'
},
{
  id: 'ent4',
  category: 'Entraditas',
  title: 'Sticks de Mozzarella x6',
  price: 24000,
  desc: 'Dediliciosos deditos rellenos con queso mozzarella acompañados de miel mostaza o mermelada de guayaba.',
  ingredients: ['Sticks de mozzarella', 'Miel mostaza', 'Mermelada de guayaba'],
   extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mozzarella-sticks.png'
},
{
  id: 'ent5',
  category: 'Entraditas',
  title: 'Empanadas de Lechón x6',
  price: 22000,
  desc: 'Empanadas crocantes rellenas de lechón asado lentamente por 8 horas. Acompañadas de ají de la casa.',
  ingredients: ['Empanadas de lechón', 'Ají de la casa'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/empanadas-lechon.png'
},
{
  id: 'ent6',
  category: 'Entraditas',
  title: 'Anillos de Cebolla',
  price: 23700,
  desc: 'Aros crocantes acompañados de nuestra salsa BBQ.',
  ingredients: ['Aros de cebolla', 'Salsa BBQ'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/anillos-cebolla.png'
},
{
  id: 'ent7',
  category: 'Entraditas',
  title: 'Festival de Arepas',
  price: 21000,
  desc: '6 unidades de arepitas acompañadas de pollo desmechado, piña de la casa, queso costeño y hogao.',
  ingredients: ['Arepitas', 'Pollo desmechado', 'Piña de la casa', 'Queso costeño', 'Hogao'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/festival-arepas.png'
},
{
  id: 'ent8',
  category: 'Entraditas',
  title: 'Mazorquitas Asadas',
  price: 21500,
  desc: 'Doraditas, a la brasa, con toque de sour cream y queso rallado.',
  ingredients: ['Mazorquitas asadas', 'Sour cream', 'Queso rallado'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mazorquitas-asadas.png'
},
{
  id: 'ent9',
  category: 'Entraditas',
  title: 'Cornaletas con Tocineta',
  price: 6900,
  desc: 'Cornaletas especiales con cobertura de tocineta.',
  ingredients: ['Cornaletas', 'Tocineta'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/cornaletas-tocineta.png'
},
{
  id: 'ens1',
  category: 'Green House',
  title: 'Ensalada del Rancho con Pollo Parrillado',
  price: 33900,
  desc: 'Mezcla de lechugas, tocineta ahumada, tomates cherry, cebolla roja, maíz, crutones, queso rallado, topos y aderezo ranch.',
  ingredients: ['Lechugas', 'Tocineta', 'Tomates cherry', 'Cebolla roja', 'Maíz', 'Crutones', 'Queso rallado', 'Topos', 'Aderezo ranch'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ensalada-rancho.png'
},
{
  id: 'ens2',
  category: 'Green House',
  title: 'Bowl California',
  price: 29600,
  desc: 'Mix de lechugas, aguacate, queso mozzarella, quinoa, maíz, pepino, frijol, pico de gallo, aderezo de miel mostaza y crocantes.',
  ingredients: ['Lechugas', 'Aguacate', 'Queso mozzarella', 'Quinoa', 'Maíz', 'Pepino', 'Frijol', 'Pico de gallo', 'Miel mostaza', 'Crocantes'],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/bowl-california.png'
}
,
{
  id: 'cl1',
  category: 'Classic Burgers',
  title: 'Top Master',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, BBQ Jack Daniels, queso cheddar, tocineta glaseada en teriyaki, cebolla crispy, vegetales y pepinillos.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'BBQ Jack Daniels',
    'Queso cheddar',
    'Tocineta glaseada teriyaki',
    'Cebolla crispy',
    'Vegetales',
    'Pepinillos'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/top-master.png'
},
{
  id: 'cl2',
  category: 'Classic Burgers',
  title: 'Tradicional',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, queso mozzarella, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso mozzarella',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/tradicional.png'
},
{
  id: 'cl3',
  category: 'Classic Burgers',
  title: 'Chipotle',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, queso mozzarella, mayonesa de chipotle, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso mozzarella',
    'Mayonesa de chipotle',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chipotle.png'
},
{
  id: 'cl4',
  category: 'Classic Burgers',
  title: 'Hawaiana',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, tocineta ahumada, queso mozzarella, piña asada, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Tocineta ahumada',
    'Queso mozzarella',
    'Piña asada',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/hawaiana.png'
},
{
  id: 'cl5',
  category: 'Classic Burgers',
  title: 'Mixta',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, filete de pechuga parrillada, queso mozzarella, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Pechuga parrillada',
    'Queso mozzarella',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mixta.png'
},
{
  id: 'cl6',
  category: 'Classic Burgers',
  title: 'Especial',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, filete de pechuga parrillada, tocineta ahumada, queso mozzarella, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Pechuga parrillada',
    'Tocineta ahumada',
    'Queso mozzarella',
    'Tomate',
    'Lechuca',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/especial.png'
},
{
  id: 'cl7',
  category: 'Classic Burgers',
  title: 'Gaucha',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, queso mozzarella chorizo artesal, mayonesa de chimichurri, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso mozzarella',
    'Chorizo artesanal',
    'Mayonesa de chimichurri',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/gaucha.png'
}
,
{
  id: 'gas1',
  category: 'Gastro Burger',
  title: 'Chicken Beef',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, pollo desmechado y aderezado en salsa de la casa, ripio de papa, queso mozzarella, tomate y lechuga.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Pollo desmechado',
    'Salsa de la casa',
    'Ripio de papa',
    'Queso mozzarella',
    'Tomate',
    'Lechuga'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chicken-beef.png'
},
{
  id: 'gas2',
  category: 'Gastro Burger',
  title: 'Bacon Cheese',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, doble queso cheddar, doble tocineta ahumada, tomate, lechuga y cebolla.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso cheddar x2',
    'Tocineta ahumada x2',
    'Tomate',
    'Lechuga',
    'Cebolla'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/bacon-cheese.png'
},
{
  id: 'gas3',
  category: 'Gastro Burger',
  title: 'Parrillera',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, queso mozzarella, julianas de pechuga parrillada y julianas de res a la parrilla, aguacate, cebolla roja, lechuga y tomate.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso mozzarella',
    'Pechuga parrillada en julianas',
    'Res a la parrilla en julianas',
    'Aguacate',
    'Cebolla roja',
    'Lechuga',
    'Tomate'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/parrillera.png'
},
{
  id: 'gas4',
  category: 'Gastro Burger',
  title: 'Jack Daniels',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, tocineta glaseada en reducción de whisky JACK DANIELS, queso cheddar, cebolla grillada y mezcla de vegetales frescos.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Tocineta glaseada Jack Daniels',
    'Queso cheddar',
    'Cebolla grillada',
    'Vegetales frescos'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/jack-daniels.png'
},
{
  id: 'gas5',
  category: 'Gastro Burger',
  title: 'Habana',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, pulled pork en BBQ artesanal, queso mozzarella, plátano maduro, aguacate, lechuga y tomate.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Pulled pork en BBQ artesanal',
    'Queso mozzarella',
    'Plátano maduro',
    'Aguacate',
    'Lechuga',
    'Tomate'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/habana.png'
},
{
  id: 'gas6',
  category: 'Gastro Burger',
  title: 'Colombiana',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, tocineta ahumada, salsa de la casa, tocineta crunch, queso mozzarella, maíz tierno, cebolla roja y lechuga.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Tocineta ahumada',
    'Salsa de la casa',
    'Tocineta crunch',
    'Queso mozzarella',
    'Maíz tierno',
    'Cebolla roja',
    'Lechuga'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/colombiana.png'
},
{
  id: 'gas7',
  category: 'Gastro Burger',
  title: 'Ruta 66',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, queso cheddar, cebolla grille, tocineta, aderezo con toques de kétchup Heinz, tomate y lechuga.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Queso cheddar',
    'Cebolla grille',
    'Tocineta',
    'Ketchup Heinz',
    'Tomate',
    'Lechuga'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ruta-66.png'
},
{
  id: 'gas8',
  category: 'Gastro Burger',
  title: 'Warrior',
  price: 0,
  desc: 'Pan artesanal, proteína favorita, chorizo frito, huevo frito, queso mozzarella, cebolla grille, tomate, lechuga y mayonesa.',
  ingredients: [
    'Pan artesanal',
    'Proteína favorita',
    'Chorizo frito',
    'Huevo frito',
    'Queso mozzarella',
    'Cebolla grille',
    'Tomate',
    'Lechuga',
    'Mayonesa'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/warrior.png'
}
,
{
  id: 'chk1',
  category: 'Chicken Sandwich',
  title: 'Chicken Buffalo',
  price: 27500,
  desc: 'Pan brioche, 200 g de pollo crocante, queso americano, ensalada coleslaw, salsa de la casa y papas a la francesa.',
  ingredients: [
    'Pan brioche',
    'Pollo crocante 200 g',
    'Queso americano',
    'Ensalada coleslaw',
    'Salsa de la casa',
    'Papas a la francesa'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chicken-buffalo.png'
},
{
  id: 'chk2',
  category: 'Chicken Sandwich',
  title: 'Chicken Bacon',
  price: 35200,
  desc: 'Pan brioche, 200 g de pollo crocante bañado en mermelada de tocineta, queso americano, ensalada coleslaw, pepinillos Heinz y papas a la francesa.',
  ingredients: [
    'Pan brioche',
    'Pollo crocante 200 g',
    'Mermelada de tocineta',
    'Queso americano',
    'Ensalada coleslaw',
    'Pepinillos Heinz',
    'Papas a la francesa'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chicken-bacon.png'
},
{
  id: 'chk3',
  category: 'Chicken Sandwich',
  title: 'Chicken Crispy',
  price: 31500,
  desc: 'Pan brioche, 220 g de pechuga apanada, cebolla crispy, tocineta ahumada, ensalada coleslaw, salsa de la casa y papas a la francesa.',
  ingredients: [
    'Pan brioche',
    'Pechuga apanada 220 g',
    'Cebolla crispy',
    'Tocineta ahumada',
    'Ensalada coleslaw',
    'Salsa de la casa',
    'Papas a la francesa'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/chicken-crispy.png'
}
,
{
  id: 'ff1',
  category: 'French Fries',
  title: 'Bacon Cheese Fries',
  price: 29400,
  desc: 'Papas a la francesa bañadas en queso cheddar y bits de tocineta crocante.',
  ingredients: [
    'Papas a la francesa',
    'Queso cheddar',
    'Tocineta crocante'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/bacon-cheese-fries.png'
},
{
  id: 'ff2',
  category: 'French Fries',
  title: 'Buffalo Fries',
  price: 41700,
  desc: 'Papas a la francesa con julianas de lomito y pollo, chorizo fazenda, tocineta ahumada, ripio de papa, lechuga, salsas y queso rallado.',
  ingredients: [
    'Papas a la francesa',
    'Julianas de lomito',
    'Pollo',
    'Chorizo fazenda',
    'Tocineta ahumada',
    'Ripio de papa',
    'Lechuga',
    'Salsas',
    'Queso rallado'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/buffalo-fries.png'
},
{
  id: 'ff3',
  category: 'French Fries',
  title: 'Salchifries',
  price: 29500,
  desc: 'Papas a la francesa, salchicha americana salteada en BBQ, ripio de papa, queso costeño, cebolla grille y salsa tártara.',
  ingredients: [
    'Papas a la francesa',
    'Salchicha americana',
    'Salsa BBQ',
    'Ripio de papa',
    'Queso costeño',
    'Cebolla grille',
    'Salsa tártara'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/salchifries.png'
}
,
{
  id: 'hd1',
  category: 'Hot Dogs',
  title: 'Philly Hot Dog',
  price: 32400,
  desc: 'Salchicha americana con julianas de carne y pollo salteados, queso mozzarella, salsa de queso, lechuga, cebolla y salsas.',
  ingredients: [
    'Salchicha americana',
    'Carne en julianas',
    'Pollo en julianas',
    'Queso mozzarella',
    'Salsa de queso',
    'Lechuga',
    'Cebolla',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/hd-philly.png'
},
{
  id: 'hd2',
  category: 'Hot Dogs',
  title: 'Mixto',
  price: 36000,
  desc: 'Salchicha americana con pollo desmechado, tocineta ahumada, queso doble crema, piña caramelizada y salsas.',
  ingredients: [
    'Salchicha americana',
    'Pollo desmechado',
    'Tocineta ahumada',
    'Queso doble crema',
    'Piña caramelizada',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/hd-mixto.png'
},
{
  id: 'hd3',
  category: 'Hot Dogs',
  title: 'Perro Loco',
  price: 38900,
  desc: 'Salchicha americana con pollo desmechado, tocineta ahumada, queso mozzarella, cebolla crispy, relish de pepinillos, ripio de papa y salsas.',
  ingredients: [
    'Salchicha americana',
    'Pollo desmechado',
    'Tocineta ahumada',
    'Queso mozzarella',
    'Cebolla crispy',
    'Relish de pepinillos',
    'Ripio de papa',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/hd-perroloco.png'
},
{
  id: 'hd4',
  category: 'Hot Dogs',
  title: 'Americano',
  price: 29800,
  desc: 'Salchicha americana con tocineta ahumada en BBQ, papa a la francesa y salsa de queso cheddar.',
  ingredients: [
    'Salchicha americana',
    'Tocineta ahumada BBQ',
    'Papas a la francesa',
    'Salsa de queso cheddar'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/hd-americano.png'
}
,
{
  id: 'dg1',
  category: 'Desgranados',
  title: 'Desgranado TBH',
  price: 41900,
  desc: 'Maíz criollo salteado con lomito fino, pechuga de pollo, chorizo, ripio de papa, lechuga, queso costeño y salsas.',
  ingredients: [
    'Maíz criollo salteado',
    'Lomito fino',
    'Pechuga de pollo',
    'Chorizo',
    'Ripio de papa',
    'Lechuga',
    'Queso costeño',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/dg-tbh.png'
},
{
  id: 'dg2',
  category: 'Desgranados',
  title: 'Desgranado Lomito',
  price: 38000,
  desc: 'Maíz criollo salteado con lomito fino, ripio de papa, lechuga, queso costeño y salsas.',
  ingredients: [
    'Maíz criollo salteado',
    'Lomito fino',
    'Ripio de papa',
    'Lechuga',
    'Queso costeño',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/dg-lomito.png'
},
{
  id: 'dg3',
  category: 'Desgranados',
  title: 'Desgranado Pollo',
  price: 33700,
  desc: 'Maíz criollo salteado con pechuga de pollo, ripio de papa, lechuga, queso costeño y salsas.',
  ingredients: [
    'Maíz criollo salteado',
    'Pechuga de pollo',
    'Ripio de papa',
    'Lechuga',
    'Queso costeño',
    'Salsas'
  ],
    extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/dg-pollo.png'
},
{
  id: 'dg4',
  category: 'Desgranados',
  title: 'Desgranado Mixto',
  price: 35000,
  desc: 'Maíz criollo salteado con lomito fino y pechuga de pollo, ripio de papa, lechuga, queso costeño y salsas.',
  ingredients: [
    'Maíz criollo salteado',
    'Lomito fino',
    'Pechuga de pollo',
    'Ripio de papa',
    'Lechuga',
    'Queso costeño',
    'Salsas'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/dg-mixto.png'
}
,
{
  id: 'ag1',
  category: 'American Grill',
  title: 'Costillas de Cerdo',
  price: 68000,
  desc: 'Costillas de cerdo a la parrilla o B.B.Q. (500 gr).',
  ingredients: [
    'Costillas de cerdo 500g',
    'Salsa B.B.Q.',
    'Preparadas a la parrilla'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-costillas.png'
},
{
  id: 'ag2',
  category: 'American Grill',
  title: 'Pechuga de Pollo',
  price: 44000,
  desc: 'Pechuga a la parrilla, B.B.Q. o gratinada con hogao y queso. (300 gr).',
  ingredients: [
    'Pechuga de pollo 300g',
    'Preparación a la parrilla o B.B.Q.',
    'Hogao',
    'Queso gratinado'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-pechuga.png'
},
{
  id: 'ag3',
  category: 'American Grill',
  title: 'Punta de Anca Angus Beef',
  price: 69000,
  desc: 'Corte de alta calidad preparado a la parrilla al término de su elección. (300 gr).',
  ingredients: [
    'Punta de anca Angus 300g',
    'Preparada a la parrilla',
    'Término a elección'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-angus.png'
},
{
  id: 'ag4',
  category: 'American Grill',
  title: 'Buffalo Steak',
  price: 59000,
  desc: 'Steak de 300g, pídalo a la parrilla, criolla o a caballo.',
  ingredients: [
    'Buffalo steak 300g',
    'Preparación a la parrilla',
    'Opción criolla',
    'Opción a caballo'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-buffalo.png'
},
{
  id: 'ag5',
  category: 'American Grill',
  title: 'Bife Chorizo',
  price: 64900,
  desc: '300g de jugoso corte madurado de la parte trasera del lomo ancho.',
  ingredients: [
    'Bife chorizo 300g',
    'Corte madurado',
    'Lomo ancho'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-bife.png'
},
{
  id: 'ag6',
  category: 'American Grill',
  title: 'Churrasco de Cerdo',
  price: 52900,
  desc: 'Punta de anca en corte mariposa jugoso y tierno.',
  ingredients: [
    'Churrasco de cerdo',
    'Corte mariposa',
    'Jugoso y tierno'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-churrasco.png'
},
{
  id: 'ag7',
  category: 'American Grill',
  title: 'Punta de Anca Premium',
  price: 61000,
  desc: 'Corte ubicado en la cadera de la res, buen marmoleo y 350g.',
  ingredients: [
    'Punta de anca premium 350g',
    'Corte de cadera',
    'Buen marmoleo'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/ag-premium.png'
}
,
{
  id: 'mg1',
  category: 'Mix Grill',
  title: 'Picada Criolla',
  price: 91000,
  desc: 'Carne de búfalo, costilla de cerdo, pechuga de pollo, chorizo tradicional, mazorquitas asadas, hogao y ají. Incluye arepa, papa criolla, madurito y ensalada fresca.',
  ingredients: [
    'Carne de búfalo 150g',
    'Costilla de cerdo 250g',
    'Pechuga de pollo 150g',
    'Chorizo tradicional 200g',
    'Mazorquitas asadas',
    'Hogao',
    'Ají',
    'Arepa',
    'Papa criolla',
    'Madurito',
    'Ensalada fresca'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mg-picada-criolla.png'
},
{
  id: 'mg2',
  category: 'Mix Grill',
  title: 'Parrillada Mixta',
  price: 48000,
  desc: 'Carne de búfalo y pechuga de pollo parrillada.',
  ingredients: [
    'Carne de búfalo 150g',
    'Pechuga de pollo parrillada 150g'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mg-parrillada-mixta.png'
},
{
  id: 'mg3',
  category: 'Mix Grill',
  title: 'Parrillada Trifasica',
  price: 75000,
  desc: 'Carne de búfalo, pechuga de pollo parrillada y costilla de cerdo.',
  ingredients: [
    'Carne de búfalo 150g',
    'Pechuga de pollo parrillada 150g',
    'Costilla de cerdo 250g'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/mg-parrillada-trifasica.png'
}
,
{
  id: 'br1',
  category: 'Brochetas',
  title: 'Brocheta Mixta o Pollo',
  price: 34900,
  desc: 'Carne de búfalo o res, pollo parrillado y vegetales. Incluye papa criolla.',
  ingredients: [
    'Carne de búfalo o res',
    'Pollo parrillado',
    'Vegetales',
    'Papa criolla'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/brocheta-mixta.png'
},
{
  id: 'br2',
  category: 'Brochetas',
  title: 'Brocheta Especial',
  price: 42700,
  desc: 'Carne de búfalo o res, pollo parrillado, costilla de cerdo B.B.Q., chorizo y vegetales. Incluye papa criolla.',
  ingredients: [
    'Carne de búfalo o res',
    'Pollo parrillado',
    'Costilla de cerdo B.B.Q.',
    'Chorizo',
    'Vegetales',
    'Papa criolla'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/brocheta-especial.png'
},
{
  id: 'br3',
  category: 'Brochetas',
  title: 'Brocheta Carnívora',
  price: 41900,
  desc: 'Carne de búfalo o res y vegetales. Incluye papa criolla.',
  ingredients: [
    'Carne de búfalo o res',
    'Vegetales',
    'Papa criolla'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/brocheta-carnivora.png'
}
,
{
  id: 'tc1',
  category: 'Tacos',
  title: 'Pulled Pork',
  price: 33900,
  desc: '3 tacos blandos con pulled pork, queso mozzarella, salsa mayo Sriracha y coleslaw.',
  ingredients: [
    'Tacos blandos',
    'Pulled pork',
    'Queso mozzarella',
    'Salsa mayo Sriracha',
    'Coleslaw'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/tacos-pulled-pork.png'
},
{
  id: 'tc2',
  category: 'Tacos',
  title: 'Porkbelly',
  price: 33900,
  desc: '3 tacos blandos con queso mozzarella, tocino crocante bañado en miel ligeramente picante y guacamole.',
  ingredients: [
    'Tacos blandos',
    'Queso mozzarella',
    'Tocino crocante en miel picante',
    'Guacamole'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/tacos-porkbelly.png'
},
{
  id: 'tc3',
  category: 'Tacos',
  title: 'Al Pastor',
  price: 31900,
  desc: '3 tacos blandos con queso mozzarella, bondiola de cerdo al pastor, cebolla, cilantro y piña caramelizada.',
  ingredients: [
    'Tacos blandos',
    'Queso mozzarella',
    'Bondiola de cerdo al pastor',
    'Cebolla',
    'Cilantro',
    'Piña caramelizada'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/tacos-al-pastor.png'
},
{
  id: 'tc4',
  category: 'Tacos',
  title: 'Burger Tacos',
  price: 36900,
  desc: '3 tacos blandos con queso americano, hamburguesa finamente picada, carne de burger certified angus beef, salsa de la casa, pepinillos y tocineta crispy.',
  ingredients: [
    'Tacos blandos',
    'Queso americano',
    'Hamburguesa finamente picada',
    'Carne certified angus beef',
    'Salsa de la casa',
    'Pepinillos',
    'Tocineta crispy'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/tacos-burger.png'
}
,
{
  id: 'km1',
  category: 'Kids Menu',
  title: 'Hamburguesa Bufalita',
  price: 28000,
  desc: 'Pan, carne de búfalo, queso mozzarella, papa a la francesa, salsas y jugo tetra pack.',
  ingredients: [
    'Pan',
    'Carne de búfalo',
    'Queso mozzarella',
    'Papa a la francesa',
    'Salsas',
    'Jugo tetra pack'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/kids-hamburguesa-bufalita.png'
},
{
  id: 'km2',
  category: 'Kids Menu',
  title: 'Nuggets de Pollo',
  price: 28000,
  desc: 'Nuggets de pollo apanados acompañados de papa a la francesa y jugo tetra pack.',
  ingredients: [
    'Nuggets de pollo apanados',
    'Papa a la francesa',
    'Jugo tetra pack'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/kids-nuggets.png'
},
{
  id: 'km3',
  category: 'Kids Menu',
  title: 'Hot Dog Kids',
  price: 28000,
  desc: 'Pan, salchicha americana, ripio de papa, queso rallado, salsas, papas a la francesa y jugo tetra pack.',
  ingredients: [
    'Pan',
    'Salchicha americana',
    'Ripio de papa',
    'Queso rallado',
    'Salsas',
    'Papas a la francesa',
    'Jugo tetra pack'
  ],
      extras: [
  { name: 'Carne hamburguesa búfalo 150 grs', price: 13500 },
  { name: 'Carne hamburguesa Angus beef 200 grs', price: 14000 },
  { name: 'Filete de pechuga 150 grs', price: 8250 },
  { name: 'Pollo desmechado en salsa de la casa 150 grs', price: 9500 },
  { name: 'Chorizo tradicional de búfalo 100 grs', price: 13300 },
  { name: 'Chorizo fazenda de cerdo 100 grs', price: 9000 },
  { name: 'Tocineta ahumada', price: 7000 },
  { name: 'Huevo frito', price: 2900 },
  { name: 'Jeringa queso cheddar', price: 3900 },
  { name: 'Jalapeños', price: 6000 },
  { name: 'Papa a la francesa', price: 9000 },
  { name: 'Casquitos de papa', price: 9000 },
  { name: 'Brownie con helado', price: 18000 }
]
,
  image: 'images/kids-hotdog.png'
}
,
// ===== MARGARITAS =====
  {
    id: 'mrg1',
    category: 'Margaritas',
    title: 'Tradicional',
    price: 29900,
    desc: 'Margarita clásica con base cítrica y borde escarchado.',
    image: 'images/margarita-tradicional.png',
    ingredients: ['Cítricos', 'Licor', 'Hielo frappé']
  },
  {
    id: 'mrg2',
    category: 'Margaritas',
    title: 'Maracuyá',
    price: 29900,
    desc: 'Margarita afrutada con maracuyá natural.',
    image: 'images/margarita-maracuya.png',
    ingredients: ['Maracuyá', 'Licor', 'Hielo frappé']
  },
  {
    id: 'mrg3',
    category: 'Margaritas',
    title: 'Frutos Rojos',
    price: 29900,
    desc: 'Mezcla refrescante de frutos rojos en margarita.',
    image: 'images/margarita-frutosrojos.png',
    ingredients: ['Frutos rojos', 'Licor', 'Hielo frappé']
  },
  {
    id: 'mrg4',
    category: 'Margaritas',
    title: 'Mango',
    price: 29900,
    desc: 'Margarita dulce y tropical de mango.',
    image: 'images/margarita-mango.png',
    ingredients: ['Mango', 'Licor', 'Hielo frappé']
  }
,
// ===== GRANIZADAS =====
 {
    id: 'grz1',
    category: 'Granizadas',
    title: 'Natural',
    price: 8500,
    desc: 'Granizado clásico natural y refrescante.',
    image: 'images/granizado-natural.png',
    ingredients: ['Hielo', 'Saborizante natural']
  },
  {
    id: 'grz2',
    category: 'Granizadas',
    title: 'Panela',
    price: 8500,
    desc: 'Granizado tradicional endulzado con panela.',
    image: 'images/granizado-panela.png',
    ingredients: ['Panela', 'Hielo triturado']
  },
  {
    id: 'grz3',
    category: 'Granizadas',
    title: 'Cerezada',
    price: 13500,
    desc: 'Granizado dulce de cereza con color vibrante.',
    image: 'images/granizado-cerezada.png',
    ingredients: ['Cereza', 'Hielo', 'Endulzante']
  },
  {
    id: 'grz4',
    category: 'Granizadas',
    title: 'Maracuyá',
    price: 11400,
    desc: 'Granizado cítrico de maracuyá natural.',
    image: 'images/granizado-maracuya.png',
    ingredients: ['Maracuyá', 'Hielo frappé']
  },
  {
    id: 'grz5',
    category: 'Granizadas',
    title: 'Frutos Rojos',
    price: 11400,
    desc: 'Mezcla refrescante de frutos rojos.',
    image: 'images/granizado-frutosrojos.png',
    ingredients: ['Frutos rojos', 'Hielo']
  },
  {
    id: 'grz6',
    category: 'Granizadas',
    title: 'Mandarina',
    price: 11400,
    desc: 'Granizado cítrico de mandarina.',
    image: 'images/granizado-mandarina.png',
    ingredients: ['Mandarina', 'Hielo']
  },
  {
    id: 'grz7',
    category: 'Granizadas',
    title: 'Naranja',
    price: 11400,
    desc: 'Granizado refrescante de naranja.',
    image: 'images/granizado-naranja.png',
    ingredients: ['Naranja', 'Hielo']
  },
  {
    id: 'grz8',
    category: 'Granizadas',
    title: 'Tamarindo',
    price: 11400,
    desc: 'Granizado dulce y ácido de tamarindo.',
    image: 'images/granizado-tamarindo.png',
    ingredients: ['Tamarindo', 'Hielo']
  },
  {
    id: 'grz9',
    category: 'Granizadas',
    title: 'Coco',
    price: 16000,
    desc: 'Granizado cremoso de coco.',
    image: 'images/granizado-coco.png',
    ingredients: ['Coco', 'Hielo']
  },
  {
    id: 'grz10',
    category: 'Granizadas',
    title: 'Mango Biche',
    price: 11400,
    desc: 'Granizado ácido de mango biche.',
    image: 'images/granizado-mangobiche.png',
    ingredients: ['Mango verde', 'Hielo']
  },
  {
    id: 'grz11',
    category: 'Granizadas',
    title: 'Piña Colada',
    price: 16000,
    desc: 'Granizado tropical mezcla piña y coco.',
    image: 'images/granizado-pinacolada.png',
    ingredients: ['Piña', 'Coco', 'Hielo']
  },

// ===== BEBIDAS =====
  {
    id: 'beb1',
    category: 'Bebidas',
    title: 'Gaseosa Pet 400 ml',
    price: 7500,
    desc: 'Gaseosa en presentación individual 400 ml.',
    image: 'images/bebida-gaseosa400.png',
    ingredients: []
  },
  {
    id: 'beb2',
    category: 'Bebidas',
    title: 'Gaseosa Pet 250 ml',
    price: 5900,
    desc: 'Gaseosa en presentación personal 250 ml.',
    image: 'images/bebida-gaseosa250.png',
    ingredients: []
  },
  {
    id: 'beb3',
    category: 'Bebidas',
    title: 'Té Limón / Durazno',
    price: 7500,
    desc: 'Té frío sabor limón o durazno.',
    image: 'images/bebida-te.png',
    ingredients: []
  },
  {
    id: 'beb4',
    category: 'Bebidas',
    title: 'Agua',
    price: 6000,
    desc: 'Botella de agua pura.',
    image: 'images/bebida-agua.png',
    ingredients: []
  },
  {
    id: 'beb5',
    category: 'Bebidas',
    title: 'Agua con gas',
    price: 6000,
    desc: 'Botella de agua con gas.',
    image: 'images/bebida-aguagas.png',
    ingredients: []
  },
  {
    id: 'beb6',
    category: 'Bebidas',
    title: 'Jugo tetra pack',
    price: 4900,
    desc: 'Jugo en empaque tipo caja.',
    image: 'images/bebida-jugo.png',
    ingredients: []
  },
// ===== BEBIDAS ALCOHÓLICAS =====
   {
    id: 'alc1',
    category: 'Bebidas Alcohólicas',
    title: 'Cerveza Nacional',
    price: 8000,
    desc: 'Cerveza nacional fría en presentación individual.',
    image: 'images/cerveza-nacional.png',
    ingredients: []
  },
  {
    id: 'alc2',
    category: 'Bebidas Alcohólicas',
    title: 'BBC Artesanal',
    price: 12000,
    desc: 'Cerveza artesanal BBC con sabor distintivo.',
    image: 'images/cerveza-bbc.png',
    ingredients: []
  },
  {
    id: 'alc3',
    category: 'Bebidas Alcohólicas',
    title: 'Cerveza Importada',
    price: 12000,
    desc: 'Cerveza importada premium.',
    image: 'images/cerveza-importada.png',
    ingredients: []
  },
   {
    id: 'hats1',
    category: 'Sodas Hatsu',
    title: 'Uva blanca y romero',
    price: 12000,
    desc: 'Soda refrescante de uva blanca con aroma ligero a romero.',
    image: 'images/hatsu-uva.png',
    ingredients: ['Uva blanca', 'Toque de romero']
  },
  {
    id: 'hats2',
    category: 'Sodas Hatsu',
    title: 'Sandía y albahaca',
    price: 12000,
    desc: 'Soda suave de sandía con notas de albahaca.',
    image: 'images/hatsu-sandia.png',
    ingredients: ['Sandía', 'Albahaca']
  },
  {
    id: 'hats3',
    category: 'Sodas Hatsu',
    title: 'Frambuesa y rosas',
    price: 12000,
    desc: 'Soda dulce de frambuesa con esencia floral.',
    image: 'images/hatsu-frambuesa.png',
    ingredients: ['Frambuesa', 'Rosas']
  }


];

const categories = [...new Set(products.map(p=>p.category))];

// ---------- Estado ----------
let cart = JSON.parse(localStorage.getItem('tb_cart') || '[]');
let activeCategory = 'Entraditas';

// ---------- DOM refs ----------
const catalogEl = document.getElementById('catalog');
const categoriesEl = document.querySelector('.categories');
const navBtns = document.querySelectorAll('.nav-btn');
const cartCountEl = document.getElementById('cart-count');
const cartDrawer = document.getElementById('cart-drawer');
const cartItemsEl = document.getElementById('cart-items');
const cartSubtotalEl = document.getElementById('cart-subtotal');
const cartDeliveryEl = document.getElementById('cart-delivery');
const cartTotalEl = document.getElementById('cart-total');
const openCartBtn = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart');
const checkoutBtn = document.getElementById('checkout-btn');
const productModal = document.getElementById('product-modal');
const modalContent = document.getElementById('modal-content');
const modalClose = document.getElementById('modal-close');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');
const addressLabel = document.getElementById('address-label');
const checkoutClose = document.getElementById('checkout-close');
const backToCartBtn = document.getElementById('back-to-cart');
const clearCartBtn = document.getElementById('clear-cart');
const searchInput = document.getElementById('search');

// ---------- Init ----------
function init(){
  renderCategories();
  setActiveCategory(activeCategory);
  bindEvents();
  refreshCartUI();
}
init();

// ---------- Render categorías ----------
function renderCategories(){
  categoriesEl.innerHTML = '';
  categories.forEach(cat=>{
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = cat === activeCategory ? 'active' : '';
    btn.dataset.cat = cat;
    btn.textContent = capitalize(cat);
    btn.addEventListener('click', ()=> switchCategory(cat));
    categoriesEl.appendChild(btn);
  });
}

// ---------- Cambiar categoría ----------
function setActiveCategory(cat){
  activeCategory = cat;
  Array.from(document.querySelectorAll('.categories button')).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  Array.from(navBtns).forEach(b=> b.classList.toggle('active', b.dataset.cat === cat));
  renderProducts(cat);
}

function switchCategory(cat){
  const ct = catalogEl;
  ct.classList.remove('fade-in');
  ct.classList.add('fade-out');
  setTimeout(()=>{
    setActiveCategory(cat);
    ct.classList.remove('fade-out');
    ct.classList.add('fade-in');
  }, 180);
}
// ---------- Render productos ----------
function renderProducts(cat) { 
  const q = (searchInput.value || '').trim().toLowerCase();
  const items = products.filter(p => 
    p.category === cat && 
    (p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
  );

  catalogEl.innerHTML = '';

  if (items.length === 0) {
    catalogEl.innerHTML = `<div class="no-results">No hay productos</div>`;
    return;
  }

  items.forEach(p => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <img src="${escapeHtml(p.image)}" alt="${escapeHtml(p.title)}">
      <div class="title">${escapeHtml(p.title)}</div>
      <div class="desc">${escapeHtml(p.desc)}</div>
      <div class="meta">
        <div class="price">$${numberWithCommas(p.price)}</div>
        <button class="add" data-id="${p.id}">Agregar</button>
      </div>
    `;
    el.querySelector('.add').addEventListener('click', () => openProductModal(p.id));
    catalogEl.appendChild(el);
  });
}


// ---------- MINI MODAL CLEAN ----------
// ---------- FUNCION CORREGIDA: openProductModal ----------
function openProductModal(id, cartIndex = null) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  // === CREAR OVERLAY ===
  const overlay = document.createElement("div");
  overlay.className = "product-overlay";
  overlay.innerHTML = `
    <div class="product-sheet">
      <div class="modal-header">
        <span class="close">&times;</span>
      </div>

      <div class="modal-body">
        <div class="image-wrap">
          <img src="${p.image}" alt="${p.title}">
        </div>

        <div class="info">
          <h2>${p.title}</h2>
          <p>${p.desc}</p>

          ${
            p.extras?.length
              ? `<h3>Adiciones</h3>
              <div class="extras-list">
                ${p.extras
                  .map(
                    (e, i) => `
                      <label>
                        <input type="checkbox" data-name="${e.name}" data-price="${e.price}">
                        <span>${e.name}</span>
                        <span class="extra-controls" data-index="${i}">
                          <button class="minus-extra">−</button>
                          <span class="extra-qty">0</span>
                          <button class="plus-extra">+</button>
                        </span>
                        <small>+$${numberWithCommas(e.price)}</small>
                      </label>
                    `
                  )
                  .join("")}
              </div>` : ""
          }

          <div class="quantity">
            <button class="minus">−</button>
            <span class="qty">1</span>
            <button class="plus">+</button>
          </div>

          <button class="add-btn">
            ${cartIndex !== null ? 'Actualizar' : 'Agregar'} <span class="price">$${numberWithCommas(p.price)}</span>
          </button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // === CIERRE DEL MODAL ===
  const closeBtn = overlay.querySelector(".close");
  closeBtn.addEventListener("click", () => overlay.remove());
  overlay.addEventListener("click", e => {
    if (e.target === overlay) overlay.remove();
  });

  // === VARIABLES ===
  let qty = 1;
  const qtyEl = overlay.querySelector(".qty");
  const priceEl = overlay.querySelector(".price");
  const extrasQty = Array(p.extras?.length || 0).fill(0);
  const extrasInputs = overlay.querySelectorAll(".extras-list input");

  // --- SI ES EDICIÓN, CARGAR VALORES EXISTENTES ---
  if (cartIndex !== null) {
    const item = cart[cartIndex];
    qty = item.qty;
    qtyEl.textContent = qty;
    if (item.extras?.length) {
      item.extras.forEach(e => {
        const index = p.extras.findIndex(pe => pe.name === e.name);
        if (index > -1) extrasQty[index] = e.qty;
      });
    }
    extrasInputs.forEach((input, i) => {
      input.checked = extrasQty[i] > 0;
      const qtyDisplay = input.closest('label').querySelector('.extra-qty');
      qtyDisplay.textContent = extrasQty[i];
    });
    updatePrice();
  }

  // === ACTUALIZAR PRECIO ===
  function updatePrice() {
    const extrasTotal = (p.extras || []).reduce((sum, e, i) => sum + e.price * extrasQty[i], 0);
    const total = (p.price + extrasTotal) * qty;
    priceEl.textContent = `$${numberWithCommas(total)}`;
  }

  // === BOTONES DE CANTIDAD PRINCIPAL ===
  overlay.querySelector(".plus").addEventListener("click", () => { qty++; qtyEl.textContent = qty; updatePrice(); });
  overlay.querySelector(".minus").addEventListener("click", () => { if(qty>1){qty--;qtyEl.textContent=qty;updatePrice();} });

  // === BOTONES DE CADA EXTRA ===
  overlay.querySelectorAll(".plus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { extrasQty[index]++; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); });
  });
  overlay.querySelectorAll(".minus-extra").forEach(btn => {
    const index = Number(btn.parentElement.dataset.index);
    const qtyDisplay = btn.parentElement.querySelector(".extra-qty");
    btn.addEventListener("click", () => { if(extrasQty[index]>0){ extrasQty[index]--; qtyDisplay.textContent=extrasQty[index]; extrasInputs[index].checked=extrasQty[index]>0; updatePrice(); } });
  });

  // === AGREGAR O ACTUALIZAR EN EL CARRITO ===
  overlay.querySelector(".add-btn").addEventListener("click", () => {
    const extras = (p.extras || []).map((e, i) => ({ name: e.name, price: e.price, qty: extrasQty[i] })).filter(e => e.qty > 0);
    const extrasSum = extras.reduce((a, e) => a + e.price * e.qty, 0);
    const finalUnitPrice = p.price + extrasSum;

    const item = { productId: p.id, title: p.title, price: finalUnitPrice, qty, image: p.image, extras };

    if (cartIndex !== null) {
      cart[cartIndex] = item; // actualizar producto existente
    } else {
      addToCart(item); // agregar producto nuevo
    }

    persistCart();
    refreshCartUI();
    updateCartBadge();
    overlay.remove();
    cartDrawer.classList.remove('hidden'); // mostrar carrito actualizado
  });
}




// ---------- Carrito ----------

// Agregar producto al carrito
function addToCart(item) {
  // Si ya existe el mismo producto con las mismas adiciones, solo aumentar cantidad
  const existing = cart.find(c => 
    c.productId === item.productId && 
    JSON.stringify(c.extras) === JSON.stringify(item.extras)
  );

  if (existing) {
    existing.qty += item.qty;
  } else {
    cart.push(item);
  }
  persistCart();
  refreshCartUI();
  updateCartBadge();
}

// Guardar en localStorage
function persistCart() {
  localStorage.setItem('tb_cart', JSON.stringify(cart));
}

// Actualizar contador del ícono del carrito
function updateCartBadge() {
  const count = cart.reduce((sum, i) => sum + i.qty, 0);
  cartCountEl.textContent = count;
}

// Renderizar los ítems del carrito
// ---------- Carrito ----------
// ---------- refreshCartUI CORREGIDA PARA REFLEJAR CAMBIOS ----------
function refreshCartUI() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<div class="empty">Tu carrito está vacío 🍦</div>';
    cartSubtotalEl.textContent = '$0';
    cartDeliveryEl.textContent = '$0';
    cartTotalEl.textContent = '$0';
    updateCartBadge();
    return;
  }

  let subtotal = 0;

  cart.forEach((item, idx) => {
    // --- CALCULAR PRECIO REAL DEL ITEM CON EXTRAS ---
    const extrasTotal = item.extras?.reduce((sum, e) => sum + e.price * e.qty, 0) || 0;
    const itemUnitPrice = item.price - extrasTotal; // precio base
    const itemTotal = (itemUnitPrice + extrasTotal) * item.qty;
    subtotal += itemTotal;

    const extrasText = item.extras?.length
      ? item.extras.map(e => `+ ${e.name} x${e.qty} ($${numberWithCommas(e.price * e.qty)})`).join('<br>')
      : '';

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="cart-item-img" src="${item.image}" alt="${item.title}">
      <div class="info">
        <h4>${item.title}</h4>
        ${extrasText ? `<small>${extrasText}</small>` : ''}
        <div class="qty-controls">
          <button class="minus">−</button>
          <span>${item.qty}</span>
          <button class="plus">+</button>
        </div>
      </div>
      <div class="price">
        <span>$${numberWithCommas(itemTotal)}</span>
        <button class="remove-btn" title="Eliminar producto">🗑️</button>
      </div>
    `;

    // --- CONTROL DE CANTIDAD ---
    div.querySelector('.plus').addEventListener('click', () => {
      item.qty++;
      persistCart();
      refreshCartUI();
    });

    div.querySelector('.minus').addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(idx, 1);
      }
      persistCart();
      refreshCartUI();
    });

    // --- ELIMINAR PRODUCTO ---
    div.querySelector('.remove-btn').addEventListener('click', () => {
      if (confirm(`¿Eliminar "${item.title}" del carrito?`)) {
        cart.splice(idx, 1);
        persistCart();
        refreshCartUI();
      }
    });

    // --- EDITAR PRODUCTO DESDE EL CARRITO ---
    div.addEventListener('click', (e) => {
      if (!e.target.classList.contains('minus') && !e.target.classList.contains('plus') && !e.target.classList.contains('remove-btn')) {
        cartDrawer.classList.add('hidden'); // esconder carrito
        openProductModal(item.productId, idx); // enviar índice para edición
      }
    });

    cartItemsEl.appendChild(div);
  });

  cartSubtotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  cartDeliveryEl.textContent = `$${numberWithCommas(DELIVERY_FEE)}`;
  cartTotalEl.textContent = `$${numberWithCommas(subtotal)}`;
  updateCartBadge();
}













// ---------- Interacciones UI ----------
openCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.remove('hidden'); cartDrawer.setAttribute('aria-hidden','false'); });
closeCartBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); cartDrawer.setAttribute('aria-hidden','true'); });
checkoutBtn.addEventListener('click', ()=>{ cartDrawer.classList.add('hidden'); openCheckout(); });
clearCartBtn.addEventListener('click', ()=>{ if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });

// ---------- Checkout ----------

// ---------- Checkout ----------
function openCheckout() {
  if (cart.length === 0) { 
    alert('El carrito está vacío.'); 
    return; 
  }

  // 🔹 Recalcular subtotal actual (incluyendo extras)
const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);


  const delivery = 0; // por defecto
  const total = subtotal + delivery;

  // 🔹 Actualizar DOM inicial
  document.getElementById('cart-subtotal').textContent = `$${numberWithCommas(subtotal)}`;
  document.getElementById('cart-delivery').textContent = `$${numberWithCommas(delivery)}`;
  document.getElementById('cart-total').textContent = `$${numberWithCommas(total)}`;
  document.getElementById('cart-total-checkout').textContent = `$${numberWithCommas(total)}`;

  // 🔹 Reset formulario
  checkoutForm.reset();
  document.getElementById('address-label').classList.add('hidden');
  document.getElementById('envio-row').classList.add('hidden');

  // 🔹 Mostrar modal
  checkoutModal.classList.remove('hidden');
  checkoutModal.setAttribute('aria-hidden', 'false');

  // 🔹 Recalcular al cambiar método (recoger/domicilio)
  const radios = checkoutForm.querySelectorAll('input[name="method"]');
  radios.forEach(radio => {
    radio.addEventListener('change', () => {
      const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
      const addressLabel = document.getElementById('address-label');
      const envioRow = document.getElementById('envio-row');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalCheckoutEl = document.getElementById('cart-total-checkout');

      const DELIVERY_FEE = 5000;
      const delivery = (method === 'domicilio' && subtotal > 0) ? DELIVERY_FEE : 0;
      const totalUpdated = subtotal + delivery;

      // Mostrar/ocultar campos
      addressLabel.classList.toggle('hidden', method !== 'domicilio');
      envioRow.classList.toggle('hidden', method !== 'domicilio');

      // Actualizar montos
      deliveryEl.textContent = `$${numberWithCommas(delivery)}`;
      totalCheckoutEl.textContent = `$${numberWithCommas(totalUpdated)}`;
    });
  });
}


checkoutClose.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  checkoutModal.setAttribute('aria-hidden', 'true');
});

backToCartBtn.addEventListener('click', () => {
  checkoutModal.classList.add('hidden');
  cartDrawer.classList.remove('hidden');
});

// === Calcular totales del checkout ===
function updateCheckoutTotals() {
  const method = checkoutForm.querySelector('input[name="method"]:checked')?.value || 'recoger';
  const envioRow = document.getElementById('envio-row');
  const subtotalEl = document.getElementById('cart-subtotal-checkout');
  const deliveryEl = document.getElementById('cart-delivery-checkout');
  const totalEl = document.getElementById('cart-total-checkout');

  const DELIVERY_FEE = 5000; // mismo valor usado en refreshCartUI

  // Mostrar u ocultar campo de dirección
  addressLabel.classList.toggle('hidden', method !== 'domicilio');

  // 🧾 Heredamos los valores que ya calcula refreshCartUI()
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  // 🚚 Si el método es domicilio, se suma el envío
  const delivery = method === 'domicilio' && subtotal > 0 ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Mostrar/ocultar fila de envío
  envioRow.classList.toggle('hidden', method !== 'domicilio');

  // ✅ Actualizar DOM (heredado del refreshCartUI, con ajuste solo si hay envío)
  subtotalEl.textContent = document.getElementById('cart-subtotal').textContent;
  deliveryEl.textContent = document.getElementById('cart-delivery').textContent;
  totalEl.textContent = method === 'domicilio'
    ? `$${numberWithCommas(total)}`
    : document.getElementById('cart-total-checkout').textContent;
}


checkoutForm.addEventListener('change', updateCheckoutTotals);






// Envío por WhatsApp
checkoutForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const fd = new FormData(checkoutForm);
  const clientName = fd.get('name')?.trim() || '';
  const clientPhone = fd.get('phone')?.trim() || '';
  const method = fd.get('method') || 'recoger';
  const payment = fd.get('payment') || '';
  const address = fd.get('address')?.trim() || '';
  const notes = fd.get('notes')?.trim() || '';

  let textParts = [];

  // Cabecera
  textParts.push('🧾 *Nuevo Pedido - The Buffalo House✅*');
  textParts.push(`👤 Cliente: ${clientName}`);
  textParts.push(`📞 Teléfono: ${clientPhone}`);
  textParts.push(`🚚 Tipo: ${method}`);
  if (method === 'domicilio') textParts.push(`🏠 Dirección: ${address}`);
  textParts.push(`💳 Pago: ${payment}`);
  textParts.push('');
  textParts.push('🍔 *Detalle del pedido:*');

  let subtotal = 0;

  cart.forEach(item => {
    // Calcular precio de extras individualmente
    const extras = item.extras || [];
    const extrasLines = extras.map(e => `   ➕ ${e.qty}x ${e.name} ($${numberWithCommas(e.price * e.qty)})`).join('\n');
    const extrasSum = extras.reduce((sum, e) => sum + e.price * e.qty, 0);

    const itemTotal = (item.price + extrasSum) * item.qty;
    subtotal += itemTotal;

    // Mostrar solo precio del artículo base + extras detallados
    textParts.push(`${item.qty}x ${item.title} — *$${numberWithCommas(item.price * item.qty)}*`);
    if (extrasLines) textParts.push(extrasLines);

    // Si hay toppings removidos
    if (item.removed && item.removed.length) {
      textParts.push(`   ⚠️ Toppings removidos: ${item.removed.join(', ')}`);
    }
  });

  const delivery = method === 'domicilio' ? DELIVERY_FEE : 0;
  const total = subtotal + delivery;

  // Resumen de totales
  textParts.push('');
  textParts.push(`🧮 Subtotal: $${numberWithCommas(subtotal)}`);
  textParts.push(method === 'domicilio'
    ? `🚗 Envío: $${numberWithCommas(delivery)}`
    : '🏪 Envío: Sin costo (recoge en el local)');
  textParts.push(`💰 *Total: $${numberWithCommas(total)}*`);

  if (notes) textParts.push(`📝 Notas: ${notes}`);

  // Construir URL para WhatsApp
  const bp = String(BUSINESS_PHONE || '').replace(/\D/g, '');
  if (!bp || bp.length < 8) {
    alert('Configura BUSINESS_PHONE en app.js con el número del negocio.');
    return;
  }

  const msg = encodeURIComponent(textParts.join('\n'));
  const waUrl = `https://wa.me/${bp}?text=${msg}`;

  window.open(waUrl, '_blank');
});





// ---------- Utilidades ----------
function bindEvents(){
  navBtns.forEach(b=> b.addEventListener('click', ()=> setActiveCategory(b.dataset.cat)));
  cartCountEl.addEventListener('dblclick', ()=> { if(confirm('Vaciar carrito?')){ cart = []; persistCart(); refreshCartUI(); } });
  checkoutModal.addEventListener('click', (e)=> { if(e.target === checkoutModal) checkoutModal.classList.add('hidden'); });
  searchInput.addEventListener('input', ()=> renderProducts(activeCategory));
}

function capitalize(s){ return String(s || '').charAt(0).toUpperCase() + String(s || '').slice(1); }
function numberWithCommas(x){ return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function escapeHtml(s){ return String(s || '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }



// ====== MENÚ LATERAL ======
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');
const closeMenu = document.getElementById('close-menu');

menuBtn.addEventListener('click', () => {
  // Primero activamos el menú
  sideMenu.classList.add('show');
  sideMenu.style.opacity = 0;
  sideMenu.style.transform = 'translateX(-20px)'; // empieza desplazado
  sideMenu.style.transition = 'opacity 0.5s ease, transform 0.5s ease';

  // Forzamos el repaint antes de animar
  requestAnimationFrame(() => {
    sideMenu.style.opacity = 1;
    sideMenu.style.transform = 'translateX(0)';
  });
  sideMenu.classList.remove('hidden');
});


closeMenu.addEventListener('click', () => {
  sideMenu.classList.remove('show');
  setTimeout(() => sideMenu.classList.add('hidden'), 350);
});

// Cerrar tocando fuera del panel
sideMenu.addEventListener('click', (e) => {
  if (e.target === sideMenu) {
    sideMenu.classList.remove('show');
    setTimeout(() => sideMenu.classList.add('hidden'), 350);
  }
});




// ====== FORMULARIO DE PAGO ======

document.addEventListener("DOMContentLoaded", () => {
  const paymentSelect = document.getElementById("payment-method");
  const transferInfo = document.getElementById("transfer-info");
  const methodRadios = document.querySelectorAll('input[name="method"]');
  const addressLabel = document.getElementById("address-label");
  const envioRow = document.getElementById("envio-row");
  const cartDelivery = document.getElementById("cart-delivery");
  const DELIVERY_FEE = 5000; // 💰 valor del domicilio
  const accountNumber = document.getElementById("account-number");
  const copyBtn = document.getElementById("copy-account");

  // 🔸 Mostrar u ocultar dirección según método de entrega
  methodRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "domicilio" && radio.checked) {
        addressLabel.classList.remove("hidden");
        envioRow.classList.remove("hidden");
        cartDelivery.textContent = `$${DELIVERY_FEE.toLocaleString()}`;
      } else if (radio.value === "recoger" && radio.checked) {
        addressLabel.classList.add("hidden");
        envioRow.classList.add("hidden");
        cartDelivery.textContent = "$0";
      }
    });
  });

  // 🔸 Mostrar info bancaria solo si selecciona transferencia
  paymentSelect.addEventListener("change", () => {
    if (paymentSelect.value === "transferencia") {
      transferInfo.classList.remove("hidden");
    } else {
      transferInfo.classList.add("hidden");
    }
  });

  // 🔸 Copiar número de cuenta
  copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(accountNumber.textContent.trim())
      .then(() => {
        copyBtn.textContent = "¡Copiado!";
        copyBtn.classList.add("copied");
        setTimeout(() => {
          copyBtn.textContent = "Copiar";
          copyBtn.classList.remove("copied");
        }, 1800);
      })
      .catch(() => alert("No se pudo copiar"));
  });
});


// --- FORM MULTIPASO (compatible con checkout actual) ---
const form = document.getElementById("checkout-form");
const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const nextStep1 = document.getElementById("next-step1");
const backStep2 = document.getElementById("back-step2");
const clientSummary = document.getElementById("client-summary");

if (nextStep1) {
  nextStep1.addEventListener("click", () => {
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();

    if (!name || !phone) {
      alert("Por favor completa tu nombre y teléfono.");
      return;
    }

    // Mostrar resumen
    clientSummary.innerHTML = `<strong>${name} </strong><span>${phone}</span>`;

    // Animación de transición
    step1.classList.remove("active");
    step2.classList.add("active");
  });
}

if (backStep2) {
  backStep2.addEventListener("click", () => {
    step2.classList.remove("active");
    step1.classList.add("active");
  });
}



const checkoutOverlay = document.getElementById("checkout-modal");
const btnConfirmOrder = document.getElementById("confirm-order"); // botón en el carrito
const btnBackToCart = document.getElementById("back-to-cart");

btnConfirmOrder?.addEventListener("click", () => {
  checkoutOverlay.classList.remove("hidden");
});

btnBackToCart?.addEventListener("click", () => {
  checkoutOverlay.classList.add("hidden");
});


// También cerrar si se toca fuera del panel
checkoutOverlay.addEventListener("click", (e) => {
  if (e.target === checkoutOverlay) {
    checkoutOverlay.classList.remove("show");
  }
});

/* ================================
   STORY SLIDER INSTAGRAM STYLE
   ================================ */

const storyImages = [
  "images/bg.png",
  "images/b6.png",
  "images/b3.png",
  "images/b4.png",
  "images/b7.png"
];

const overlay = document.getElementById("story-slider-overlay");
const track = document.getElementById("story-slider-track");
const dots = document.getElementById("story-slider-dots");
const closeBtn = document.getElementById("story-slider-close");

let current = 0;
let autoPlayInterval = null;

// Crear slides + punticos
storyImages.forEach((src, i) => {
  const slide = document.createElement("div");
  slide.className = "story-slide";
  slide.innerHTML = `<img src="${src}" />`;
  track.appendChild(slide);

  const dot = document.createElement("div");
  dot.className = "story-slider-dot" + (i === 0 ? " active" : "");
  dots.appendChild(dot);
});

// Función para cambiar slide
function goToStory(n) {
  current = n;
  track.style.transform = `translateX(-${n * 100}%)`;

  [...dots.children].forEach((d, i) =>
    d.classList.toggle("active", i === n)
  );
}

// Auto avance cada 0.5 segundos
function startAutoPlay() {
  autoPlayInterval = setInterval(() => {
    current = (current + 1) % storyImages.length;
    goToStory(current);
  }, 2000);
}

function stopAutoPlay() {
  clearInterval(autoPlayInterval);
}

closeBtn.onclick = () => {
  overlay.classList.add("hidden");
  stopAutoPlay();
};

// Abrir (llámalo desde donde quieras)
window.openStorySlider = () => {
  overlay.classList.remove("hidden");
  current = 0;
  goToStory(0);
  startAutoPlay();
};

// Abrir automáticamente al cargar (opcional)
setTimeout(() => {
  window.openStorySlider();
}, 1200);
