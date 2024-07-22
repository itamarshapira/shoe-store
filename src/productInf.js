// extarnal js file to shoes data
//Notice! the export is diffrent between componneta and like that file just an array or OBJ
//hence: the import in the app.js will be diffrent
import a from './photos/1.jpg';
import b from './photos/2.jpg';
import c from './photos/3.jpg';
import d from './photos/4.jpg';
import e from './photos/5.jpg';
import f from './photos/6.jpg';
import g from './photos/7.jpg';
import h from './photos/8.jpg';
import i from './photos/9.jpg';

export const productInf = [ // important ! here we export the obj itself and not deafult
  {
    id: 1,
    name: 'Nike Air Max',
    text: 'Comfortable and stylish',
    price: '$120',
    image: `https://www.jdsports.co.il/cdn/shop/products/jd_DA4086-100_a_700x.jpg?v=1665081713` // web url example
  },
  {
    id: 2,
    name: 'Adidas Superstar',
    text: 'Classic and trendy',
    price: '$90',
    image: a, // example with img that inside the photos folder!
  },
  {
    id: 3,
    name: 'Puma Suede',
    text: 'Elegant and durable',
    price: '$80',
    image: b, // example with img that inside the photos folder!
  },
  {
    id: 4,
    name: 'Reebok Classic',
    text: 'Timeless design',
    price: '$70',
    image: c, // example with img that inside the photos folder!
  },
  {
    id: 5,
    name: 'New Balance 574',
    text: 'Casual and comfy',
    price: '$100',
    image: d, // example with img that inside the photos folder!
  },
  {
    id: 6,
    name: 'Vans Old Skool',
    text: 'Skater’s favorite',
    price: '$65',
    image: e, // example with img that inside the photos folder!
  },
  {
    id: 7,
    name: 'Converse Chuck Taylor',
    text: 'Iconic silhouette',
    price: '$55',
    image: f, // example with img that inside the photos folder!
  },
  {
    id: 8,
    name: 'Asics Gel-Lyte',
    text: 'Performance and style',
    price: '$95',
    image: g, // example with img that inside the photos folder!
  },
  {
    id: 9,
    name: 'Under Armour HOVR',
    text: 'Cushioned and responsive',
    price: '$110',
    image: h, // example with img that inside the photos folder!
  }

  ];
  