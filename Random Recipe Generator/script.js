// Your recipes data (copy from your JS object)
const recipes = [
  {
    title: "Strawberry Shortcake",
    price: 140.00,
    description: "Light and fluffy cake layered with fresh strawberries and whipped cream.",
    image: "https://i.pinimg.com/736x/59/1c/3c/591c3ce2671196757e3da0efb179adef.jpg",
    ingredients: [
      "2 cups all-purpose flour",
      "1/2 cup sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup cold butter",
      "2/3 cup milk",
      "1 tsp vanilla extract",
      "2 cups sliced fresh strawberries",
      "1 cup whipped cream"
    ],
    instructions: [
      "Preheat oven to 200°C (400°F).",
      "Mix flour, sugar, baking powder, and salt.",
      "Cut in butter until mixture resembles coarse crumbs.",
      "Stir in milk and vanilla until just combined.",
      "Drop spoonfuls onto baking sheet and bake for 15 minutes.",
      "Slice cake horizontally, layer with strawberries and whipped cream.",
      "Serve chilled."
    ]
  },
  {
    title: "Classic Chocolate Chip Cookies",
    description: "Crispy on the edges and chewy in the middle — a cookie everyone loves.",
    image: "https://i.pinimg.com/1200x/d7/87/d9/d787d92c09e0e3d8d216c3a17f2f54f8.jpg",
    ingredients: [
      "1 cup butter, softened",
      "1 cup white sugar",
      "1 cup brown sugar",
      "2 eggs",
      "2 tsp vanilla extract",
      "3 cups flour",
      "1 tsp baking soda",
      "1/2 tsp salt",
      "2 cups chocolate chips"
    ],
    instructions: [
      "Preheat oven to 175°C (350°F).",
      "Cream butter and sugars until smooth.",
      "Beat in eggs and vanilla.",
      "Mix in flour, baking soda, and salt.",
      "Fold in chocolate chips.",
      "Drop by spoonfuls onto baking sheet.",
      "Bake 10-12 minutes until golden.",
      "Cool before serving."
    ]
  },
  {
    title: "Lemon Drizzle Cake",
    description: "A moist, zesty cake topped with a tangy lemon glaze.",
    image: "https://i.pinimg.com/736x/a0/78/3c/a0783c08fb1b849f295cf5b75cb79482.jpg",
    ingredients: [
      "1 1/2 cups flour",
      "1 cup sugar",
      "1/2 cup butter",
      "2 eggs",
      "1/4 cup milk",
      "2 lemons, zest and juice",
      "1 tsp baking powder"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F).",
      "Cream butter and sugar.",
      "Add eggs one at a time.",
      "Mix in flour, baking powder, and lemon zest.",
      "Stir in milk and lemon juice.",
      "Bake for 40 minutes.",
      "Pour lemon glaze over cake after cooling."
    ]
  },
  {
    title: "Vanilla Cupcakes",
    description: "Light and fluffy vanilla cupcakes topped with creamy frosting.",
    image: "https://i.pinimg.com/1200x/3f/8c/67/3f8c67ac1ebcb23a7fe124ba855f10b8.jpg",
    ingredients: [
      "1 1/2 cups flour",
      "1 cup sugar",
      "1/2 cup butter",
      "2 eggs",
      "1/2 cup milk",
      "1 tsp vanilla extract",
      "1 1/2 tsp baking powder"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F).",
      "Cream butter and sugar.",
      "Add eggs one at a time.",
      "Mix in flour and baking powder.",
      "Stir in milk and vanilla.",
      "Fill cupcake tins 2/3 full.",
      "Bake 20-25 minutes.",
      "Cool and frost as desired."
    ]
  },
  {
    title: "Banana Bread",
    description: "Moist and flavorful banana bread, perfect for breakfast or snack time.",
    image: "https://i.pinimg.com/1200x/a8/f8/d8/a8f8d8a93b029d5e96cab4d5d55b31a0.jpg",
    ingredients: [
      "2-3 ripe bananas",
      "1/3 cup melted butter",
      "3/4 cup sugar",
      "1 egg",
      "1 tsp vanilla extract",
      "1 tsp baking soda",
      "Pinch of salt",
      "1 1/2 cups flour"
    ],
    instructions: [
      "Preheat oven to 175°C (350°F).",
      "Mash bananas and mix with melted butter.",
      "Add sugar, egg, and vanilla.",
      "Stir in baking soda, salt, and flour.",
      "Pour into loaf pan.",
      "Bake for 60 minutes.",
      "Cool before slicing."
    ]
  },
  {
    title: "Fresh Garden Salad",
    description: "A crisp, refreshing salad with tomatoes, cucumbers, and olives.",
    image: "https://i.pinimg.com/1200x/47/85/dc/4785dc0b803a3692e967a084697fcc5d.jpg",
    ingredients: [
      "Lettuce leaves",
      "Cherry tomatoes",
      "Cucumber slices",
      "Olives",
      "Feta cheese",
      "Olive oil & lemon juice"
    ],
    instructions: [
      "Wash and chop all vegetables.",
      "Mix in a bowl.",
      "Drizzle olive oil and lemon juice.",
      "Toss well and serve fresh."
    ]
  },
  {
    title: "Pancakes with Maple Syrup",
    description: "Fluffy pancakes perfect for a cozy weekend breakfast.",
    image: "https://i.pinimg.com/1200x/0d/4c/15/0d4c1549d5a31553dff933e6253822f9.jpg",
    ingredients: [
      "1 cup flour",
      "1 tbsp sugar",
      "1 tbsp baking powder",
      "1 cup milk",
      "1 egg",
      "2 tbsp melted butter"
    ],
    instructions: [
      "Mix flour, sugar, and baking powder.",
      "Add milk, egg, and melted butter.",
      "Whisk until smooth.",
      "Pour batter on hot griddle.",
      "Cook until bubbles form, flip and cook other side.",
      "Serve with maple syrup."
    ]
  },
  {
    title: "Chicken Curry",
    description: "Spicy and savory curry with tender chicken pieces and rich sauce.",
    image: "https://i.pinimg.com/1200x/d1/1a/0e/d11a0e8e7534e30dad28d96b9d4891db.jpg",
    ingredients: [
      "500g chicken pieces",
      "2 tbsp curry powder",
      "1 onion (chopped)",
      "200ml coconut milk",
      "2 potatoes (diced)",
      "Salt to taste"
    ],
    instructions: [
      "Sauté onion until soft.",
      "Add curry powder and stir for 1 min.",
      "Add chicken, cook until no longer pink.",
      "Pour coconut milk, add potatoes.",
      "Simmer 20 minutes until cooked.",
      "Serve hot with rice."
    ]
  }
];

const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('closeBtn');
const popupTitle = document.getElementById('popup-title');
const popupImage = document.getElementById('popup-image');
const popupDesc = document.getElementById('popup-desc');
const popupIngredients = document.getElementById('popup-ingredients');
const popupInstructions = document.getElementById('popup-instructions');
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const cartItemsEl = document.getElementById('cart-items');

let cart = [];

// Build recipe cards dynamically with Add to Cart button
function createCard(recipe, index) {
  const card = document.createElement('div');
  card.classList.add('card');

  const img = document.createElement('img');
  img.src = recipe.image;
  img.alt = recipe.title;

  const title = document.createElement('h3');
  title.textContent = recipe.title;

  // Add to Cart button
  const addToCartBtn = document.createElement('button');
  addToCartBtn.classList.add('add-to-cart');
  addToCartBtn.textContent = "Add to Cart";
  addToCartBtn.setAttribute('data-index', index);

  // Show popup on card click except on button click
  card.addEventListener('click', (e) => {
    if (e.target !== addToCartBtn) {
      showRecipe(index);
    }
  });

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(addToCartBtn);

  return card;
}

function showRecipe(index) {
  const recipe = recipes[index];
  popupTitle.textContent = recipe.title;
  popupImage.src = recipe.image;
  popupImage.alt = recipe.title;
  popupDesc.textContent = recipe.description;

  popupIngredients.innerHTML = '';
  recipe.ingredients.forEach(ing => {
    const li = document.createElement('li');
    li.textContent = ing;
    popupIngredients.appendChild(li);
  });

  popupInstructions.innerHTML = '';
  recipe.instructions.forEach(step => {
    const li = document.createElement('li');
    li.textContent = step;
    popupInstructions.appendChild(li);
  });

  popup.classList.remove('hidden');
}

document.getElementById('cart-closeBtn').addEventListener('click', () => {
  cartModal.style.display = 'none';
});

document.getElementById('closeBtn').addEventListener('click', () => {
  popup.classList.add('hidden');
});


  // Build gallery
recipes.forEach((recipe, i) => {
  const card = createCard(recipe, i);
  gallery.appendChild(card);
});
  cartModal.style.display = 'none';
  



// Add to Cart functionality
gallery.addEventListener('click', (e) => {
  if (e.target.classList.contains('add-to-cart')) {
    const index = e.target.getAttribute('data-index');
    const recipe = recipes[index];
    cart.push(recipe.title);
    updateCartButton();
  }
});

function updateCartButton() {
  cartBtn.textContent = `🛒 Cart (${cart.length})`;
}


cartBtn.addEventListener('click', () => {
  renderCartItems();
  cartModal.style.display = 'block';
});


function renderCartItems() {
  cartItemsEl.innerHTML = '';
  if (cart.length === 0) {
    cartItemsEl.innerHTML = '<li>Your cart is empty 💔</li>';
    return;
  }
  cart.forEach((item, i) => {
    const li = document.createElement('li');
    li.textContent = item;
    cartItemsEl.appendChild(li);
  });
}

function closeCart() {
  cartModal.style.display = 'none';
}

document.getElementById('checkout-btn').addEventListener('click', () => {


  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  // Show thank you message inside modal
  const thankyouMsg = document.getElementById('thankyou-msg');
  thankyouMsg.style.display = 'block';

  // Clear cart
  cart = [];
  updateCartButton();
  renderCartItems();

  // After 3 seconds redirect to order.php with the cart items if you want
  setTimeout(() => {
    thankyouMsg.style.display = 'none';
    cartModal.classList.remove('show');
    
    // If you want to redirect, uncomment the following lines:
    /*
    const params = new URLSearchParams();
    cart.forEach((item, i) => {
      params.append('item' + (i + 1), item);
    });
    window.location.href = 'order.php?' + params.toString();
    */
  }, 3000);
}

)

