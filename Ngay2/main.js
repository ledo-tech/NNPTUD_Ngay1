// Cau 1
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
// Cau 2
const products = [
  new Product(1, "iPhone 15", 35000000, 10, "Phone", true),
  new Product(2, "Samsung Galaxy S24", 28000000, 5, "Phone", true),
  new Product(3, "MacBook Air M2", 32000000, 3, "Laptop", true),
  new Product(4, "AirPods Pro", 6000000, 0, "Accessories", true),
  new Product(5, "Apple Watch", 12000000, 7, "Accessories", false),
  new Product(6, "Dell XPS 13", 30000000, 2, "Laptop", true),
];
// Cau 3
const namePriceList = products.map((p) => ({
  name: p.name,
  price: p.price,
}));
// Cau 4
const inStockProducts = products.filter((p) => p.quantity > 0);
// Cau 5
const hasExpensiveProduct = products.some((p) => p.price > 30000000);
// Cau 6
const allAccessoriesAvailable = products
  .filter((p) => p.category === "Accessories")
  .every((p) => p.isAvailable === true);
// Cau 7
const totalInventoryValue = products.reduce(
  (total, p) => total + p.price * p.quantity,
  0
);
// Cau 8
for (const p of products) {
  console.log(
    `Tên: ${p.name} | Danh mục: ${p.category} | Trạng thái: ${
      p.isAvailable ? "Đang bán" : "Ngừng bán"
    }`
  );
}
// Cau 9
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
// Cau 10
const availableProductNames = products
  .filter((p) => p.isAvailable && p.quantity > 0)
  .map((p) => p.name);

console.log("Name & Price:", namePriceList);
console.log("Còn hàng:", inStockProducts);
console.log("Có SP > 30 triệu:", hasExpensiveProduct);
console.log("Accessories đều đang bán:", allAccessoriesAvailable);
console.log("Tổng giá trị kho:", totalInventoryValue);
console.log("SP đang bán & còn hàng:", availableProductNames);
