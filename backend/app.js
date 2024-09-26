import fs from 'node:fs/promises';

import bodyParser from 'body-parser';
import express from 'express';

const app = express();

app.use(express.static('images'));
app.use(bodyParser.json());

// CORS

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // allow all domains
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  next();
});

app.get('/resturants', async (req, res) => {
  const fileContent = await fs.readFile('./data/resturants.json');

  const resturantData = JSON.parse(fileContent);

  res.status(200).json({ resturants: resturantData });
});

app.get('/resturant-menu', async (req, res) => {
  const fileContent = await fs.readFile('./data/resturant-menu.json');

  const menuData = JSON.parse(fileContent);

  res.status(200).json({ menu: menuData });
});

app.get('/cart-item', async (req, res) => {
  const fileContent = await fs.readFile('./data/cart-item.json');

  const cartItem = JSON.parse(fileContent);

  res.status(200).json({ data: cartItem });
});

app.put('/cart-item', async (req, res) => {
  const newCartItem = req.body.data;

  const data = await fs.readFile('./data/cart-item.json', 'utf8');
  const cartData = JSON.parse(data);
  cartData.cartItems.push(newCartItem);

  await fs.writeFile('./data/cart-item.json', JSON.stringify(cartData));

  res.status(200).json({ data: cartData, message: 'Cart Item updated!' });
});

app.post('/orders', async (req, res) => {
  const orderData = req.body.order;

  if (orderData === null || orderData.items === null) {
    return res
      .status(400)
      .json({ message: 'Missing data.' });
  }

  if (
    orderData.customer.email === null ||
    !orderData.customer.email.includes('@') ||
    orderData.customer.name === null ||
    orderData.customer.name.trim() === '' ||
    orderData.customer.street === null ||
    orderData.customer.street.trim() === '' ||
    orderData.customer['postal-code'] === null ||
    orderData.customer['postal-code'].trim() === '' ||
    orderData.customer.city === null ||
    orderData.customer.city.trim() === ''
  ) {
    return res.status(400).json({
      message:
        'Missing data: Email, name, street, postal code or city is missing.',
    });
  }

  const newOrder = {
    ...orderData,
    id: (Math.random() * 1000).toString(),
  };
  const orders = await fs.readFile('./data/orders.json', 'utf8');
  const allOrders = JSON.parse(orders);
  allOrders.push(newOrder);
  await fs.writeFile('./data/orders.json', JSON.stringify(allOrders));
  res.status(201).json({ message: 'Order created!' });
});

// 404
app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  res.status(404).json({ message: '404 - Not Found' });
});

app.listen(3000);
