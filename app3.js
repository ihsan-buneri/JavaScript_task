// products
const products = [
  {
    id: 1,
    name: "Peach",
    price: 5,
    url: "https://freepngimg.com/save/4407-peach-png-image/400x400",
  },
  {
    id: 2,
    name: "banana",
    price: 4,
    url: "https://thumbs.dreamstime.com/b/bananas-19506880.jpg",
  },
  {
    id: 3,
    name: "apple",
    price: 5,
    url: "https://media.istockphoto.com/photos/royal-gala-picture-id146793069?k=20&m=146793069&s=612x612&w=0&h=Zf8JvJi_YLCDWazuEBa6_2WP9vRyPVk4kxXRfd0h7rA=",
  },
];

// render table of selected item

let renderTable = () => {
  document
    .getElementById("my-table")
    .getElementsByTagName("tbody")[0].innerHTML = selectedItems
    .map(
      (fruit) =>
        `<tr>
    <td>${fruit.name}</td>
    <td>${fruit.price}</td>
    </tr>
    `
    )
    .join("");
};

// total price

let total = () => {
  let sum = 0;
  selectedItems.forEach((fruit) => {
    sum += fruit.price;
  });

  document.getElementById("sum-result").textContent = sum;
};

// addBorder
let addBoder = (id) => {
  let addClass = document.getElementById(`card${id - 1}`);

  addClass.classList.add("border");
};
// removeBorder

let removeBorder = (id) => {
  let addClass = document.getElementById(`card${id - 1}`);

  addClass.classList.remove("border");
};

// Getting selected items
const selectedItems = [];
const clictItem = (product) => {
  const isProductAvailable = selectedItems.find(
    (select) => select.id === product.id
  );
  if (isProductAvailable) {
    selectedItems.splice(selectedItems.indexOf(product), 1);
    renderTable();
    total();
    removeBorder(product.id);
  } else {
    selectedItems.push(product);

    renderTable();
    total();
    addBoder(product.id);
  }
};

// Render cards
const cardsId = document.getElementById("cards");
for (let i = 0; i <= products.length; i++) {
  cardsId.innerHTML += `
     <div id="card${i}" onclick="clictItem(products[${i}])">
           <img src=${products[i].url} alt="">
           <div class="card-description">
             <h3>${products[i].name}</h3>
             <p>${products[i].price}</p>
           </div>
        </div>
  `;
}
