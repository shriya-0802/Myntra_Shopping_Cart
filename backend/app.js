const express = require('express');
const bodyParser = require('body-parser');

const { getStoredItems, storeItems } = require('./data/items');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/items', async (req, res) => {
  const storedItems = await getStoredItems();
  await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
  res.json({ items: storedItems });
});

app.get('/items/:id', async (req, res) => {
  const data = await getStoredItems(); // returns [ [ {...}, {...} ] ]
  const itemId = req.params.id.trim();

  // Check that data[0] exists and is an array
  if (!Array.isArray(data) || !Array.isArray(data[0])) {
    console.log("❌ Data format invalid. Expected nested arrays.");
    return res.status(500).json({ message: "Data format error." });
  }

  const itemsArray = data[0];

  console.log("🔍 Looking for id:", itemId);
  console.log("📦 Available IDs:", itemsArray.map(item => item.id));

  const item = itemsArray.find((item) => item.id === itemId);

  if (item) {
    console.log(`✅ Fetched item with id ${itemId}:`, item);
    res.json({ item });
  } else {
    console.log(`❌ No item found with id ${itemId}`);
    res.status(404).json({ message: 'Item not found.' });
  }
});




// app.get('/items/:id', async (req, res) => {
//   const storedItems = await getStoredItems();
//   console.log(req.params.id);
//   const item = storedItems.find((item) => item.id === req.params.id);
//   res.json({ item });
// });

app.post('/items', async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  console.log(newItem);
  res.status(201).json({ message: 'Stored new item.', item: newItem });
});

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`✅ Server is running. You can access your API at:`);
  console.log(`GET all items:     http://localhost:${PORT}/items`);
  console.log(`GET single item:   http://localhost:${PORT}/items/:id`);
  console.log(`POST new item:     http://localhost:${PORT}/items`);
});

// const express = require('express');
// const bodyParser = require('body-parser');

// const { getStoredItems, storeItems } = require('./data/items');

// const app = express();

// app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

// app.get('/items', async (req, res) => {
//   const storedItems = await getStoredItems();
//   await new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
//   res.json({ items: storedItems });
// });

// app.get('/items/:id', async (req, res) => {
//   const storedItems = await getStoredItems();
//   const item = storedItems.find((item) => item.id === req.params.id);
//   res.json({ item });
// });

// app.post('/items', async (req, res) => {
//   const existingItems = await getStoredItems();
//   const itemData = req.body;
//   const newItem = {
//     ...itemData,
//     id: Math.random().toString(),
//   };
//   const updatedItems = [newItem, ...existingItems];
//   await storeItems(updatedItems);
//   res.status(201).json({ message: 'Stored new item.', item: newItem });
// });

// app.listen(8080);