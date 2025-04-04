import  { useState ,useEffect} from "react";
import { FaEdit, FaTrash,FaSync} from "react-icons/fa";


const products = [
  { id: 1, name: "PlayStation 5", available: 202, sold: 58741, price: 699, salePrice: 599, image: "xiamoi.png" },
  { id: 2, name: "iPhone 13 Pro Max", available: 5221, sold: 36874, price: 1199, salePrice: 1099, image: "xiamoi.png" },
  { id: 3, name: "SteamDeck ", available: 369, sold: 22841, price: 499, salePrice: 449, image: "xiamoi.png" },
  { id: 4, name: "LCD CPU Cooler", available: 641, sold: 20053, price: 600, salePrice: 569, image: "xiamoi.png" },
  { id: 5, name: "Xbox Series X", available: 1006, sold: 19874, price: 599, salePrice: 579, image: "xiamoi.png" },
  { id: 6, name: "iPhone 12 Pro Max", available: 1152, sold: 10802, price: 1109, salePrice: 1099, image: "xiamoi.png" },
  { id: 7, name: "Samsung Odyssey ", available: 995, sold: 10452, price: 499, salePrice: 449, image: "xiamoi.png" },
  { id: 8, name: "Quadcopter UAV", available: 0, sold: 3471, price: 399, salePrice: 389, image: "xiamoi.png" },
  { id: 9, name: "AMD Ryzen 7 ", available: 102, sold: 1923, price: 300, salePrice: 289, image: "xiamoi.png" },
  { id: 10, name: "Acer Laptop Silver", available: 52, sold: 54, price: 620, salePrice: 589, image: "xiamoi.png" },
  { id: 11, name: "Radeon RX 6750 ", available: 27, sold: 662, price: 620, salePrice: 589, image: "xiamoi.png" },
  { id: 12, name: "Naraka  Keyboard", available: 2, sold: 651, price: 139, salePrice: 129, image: "xiamoi.png" },
];

const ProductGrid = () => {
  const [category, setCategory] = useState("Electronics");
  const [sortOption, setSortOption] = useState("Best Selling");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const updateDate = () => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString("en-US", {
        month: "long",
        day: "2-digit",
        year: "numeric",
      });

      const formattedTime = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false, // Use 24-hour format
      });

      setCurrentDate(`${formattedDate} ${formattedTime} PM`);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="product-grid-container">
      {/* Header */}
      <div className="orders-header ">
              <h2>Products Grid</h2>
              <div className="data-refresh">
              <span>
                  Data Refresh <FaSync className="sync" title="Sync"/> <span className="date">{currentDate}</span>
                </span>
              </div>
            </div>

      {/* Filters */}
      <div className="filters-product">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Electronics</option>
          <option>Clothing</option>
          <option>Home & Kitchen</option>
        </select>

        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option>Best Selling</option>
          <option>Newest First</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>
      </div>

      {/* Product Grid (4-column layout) */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p className="available">Available: {product.available}</p>
            <p className="sold">Already sold: {product.sold}</p>
            <p className="regular-price">Regular price: <span>${product.price}</span></p>
            <p className="sale-price">Sale price: ${product.salePrice}</p>
            <div className="button-group">
              <button className="edit-btn"><FaEdit /> Edit</button>
              <button className="delete-btn"><FaTrash /> Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
