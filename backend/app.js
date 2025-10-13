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

app.get('/api/resturants', async (req, res) => {
  const fileContent = await fs.readFile('./data/resturants.json');

  const resturantData = JSON.parse(fileContent);

  res.status(200).json({ resturants: resturantData });
});

app.get('/api/resturant-menu', async (req, res) => {
  const fileContent = await fs.readFile('./data/resturant-menu.json');

  const menuData = JSON.parse(fileContent);

  res.status(200).json({ menu: menuData });
});

app.get('/api/cart', async (req, res) => {
  try {
    const newCartItem = req.body.data;
    console.log("cart body" + newCartItem);

    const fileContent = await fs.readFile('./data/cart.json');
    const data = JSON.parse(fileContent);
    console.log("Cart Return data" + data);
    res.status(200).json({ cartItems: data });
  } catch (err) {
    console.error("Error fetching data:", err);
    res.status(500).json({ error: err.message });
  }

});

app.post('/api/cart', async (req, res) => {
  try {
    const newCartItem = req.body; // expect the new cart item in request body
    if (!newCartItem || !newCartItem.id) {
      return res.status(400).json({ error: "Invalid cart item data" });
    }

    // Read existing cart data
    const cartFile = './data/cart-item.json';
    const fileData = await fs.readFile(cartFile, "utf-8");
    const cartData = JSON.parse(fileData || '{"cartItems": []}');

    // Add new item
    cartData.cartItems.push(newCartItem);

    // Write updated cart back to file
    await fs.writeFile(cartFile, JSON.stringify(cartData, null, 2));

    res.status(200).json({ data: cartData, message: "Cart Added Successfully!" });
  } catch (err) {
    console.error("Error adding to cart:", err);
    res.status(500).json({ error: "Failed to add item to cart" });
  }

});

app.put('/api/cart/:userId', async (req, res) => {
  const { userId } = req.params;
  const updateCart = req.body;

  const fileContent = await fs.readFile('./data/cart.json');

  const index = fileContent.findIndex(c => c.userId === userId);
  if (index === -1) {
    return res.status(404).json({ message: "Cart not found for this user" });
  }

  fileContent[index] = { ...fileContent[index], ...updateCart };
  const cartItem = JSON.parse(fileContent);
  await fs.writeFile('./data/cart.json', JSON.stringify(cartData));
  res.status(200).json({ message: "Cart updated successfully", data: cartItem });
});

app.post('/api/orders', async (req, res) => {
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
