import { useEffect,useState } from "react";
import { FaSync } from "react-icons/fa";
const ProductEditor = () => {
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
        <div className="product-grid-container ">
              {/* Header */}
                  <div className="orders-header ">
                          <h1>Product Editor</h1>
                          <div className="data-refresh">
                          <span>
                              Data Refresh <FaSync className="sync" title="Sync"/> <span className="date">{currentDate}</span>
                            </span>
                          </div>
                        </div>

                        {/* contents */}
                        <div className="product-editor ">
      <h2>Product Settings</h2>
      <div className="editor-grid">
        <div className="left-panel">
        <label>Product Images</label>
          <div className="image-grid ">
            
            <div className="image-box large">Browse image</div>
            <div className="image-box large">Browse image</div>
            <div className="small">
            <div className="image-box small">Browse image</div>
            <div className="image-box small">Browse image</div>
          </div>
          </div>

          <a href="#" className="link">More Gallery Options</a>
          <p className="placeholder-text">
            Donec luctus metus nec enim imperdiet, in dignissim risus fringilla... Suspendisse at lorem eleifend
          </p>
          <a href="#" className="attachment-link">Attachment files 📎</a>

          <div className="attribute-grid">
            <div className="input-group">
              <label>Attributes</label>
              <select>
                <option>Simple Product</option>
              </select>
            </div>
            <div className="input-group">
              <label>L * W * H, inches</label>
              <input type="text" placeholder="10 * 10 * 10" />
            </div>
            <div className="input-group">
              <label>Weight, kg</label>
              <input type="text" placeholder="0.1" />
            </div>
          </div>

          <div className="input-group">
            <label>Description</label>
            <textarea placeholder="Description" rows="6"></textarea>
          </div>
        </div>

        <div className="right-panel">
          <div className="input-group">
            <label>Product Name</label>
            <input type="text" placeholder="Product Name" value="Sport Smart Watch" />
          </div>
          <div className="dual-input">
            <div className="input-group">
              <label>Brand Name</label>
              <input type="text" placeholder="Brand Name" value="Pineapple" />
            </div>
            <div className="input-group">
              <label>Category</label>
              <select>
                <option>Electronics</option>
              </select>
            </div>
          </div>
          <div className="dual-input">
            <div className="input-group">
              <label>Regular Price</label>
              <input type="number" placeholder="Regular Price" value="1000" />
            </div>
            <div className="input-group">
              <label>Sale Price</label>
              <input type="number" placeholder="Sale Price" value="800" />
            </div>
          </div>
          <div className="dual-input">
            <div className="input-group">
              <label>Schedule</label>
              <input type="text" placeholder="Schedule" value="20/04/2025 - 26/04/2025" />
            </div>
            <div className="input-group">
              <label>Promotion</label>
              <select>
                <option>Category 1</option>
              </select>
            </div>
          </div>
          <div className="dual-input">
            <div className="input-group">
              <label>Product Type</label>
              <select>
                <option>Simple Product</option>
              </select>
            </div>
            <div className="input-group">
              <label>Stock Status</label>
              <select>
                <option>In Stock</option>
              </select>
            </div>
          </div>
          <div className="input-group">
            <label>SKU</label>
            <input type="text" placeholder="SKU" value="SKU-123456" />
          </div>
          <div className="dual-input">
            <div className="input-group">
              <label>Stock Status</label>
              <select>
                <option>In Stock</option>
              </select>
            </div>
            <div className="input-group">
              <label>Quantity in Stock</label>
              <input type="number" placeholder="100" />
            </div>
            <div className="input-group">
              <label>Unit</label>
              <select>
                <option>Pieces</option>
              </select>
            </div>
          </div>

          <div className="payment-methods">
            <label>Payment Methods</label>
            <div className="icons">
              <img src="card.svg" alt="MasterCard" />
              <img src="visa.svg" alt="Visa" />
              <img src="gpay.svg" alt="GPay" />
              <img src="applepay.svg" alt="ApplePay" />
              <img src="paypal.svg" alt="PayPal" />
            
              <button className="add-method">+</button>
            </div>
          </div>

          <div className="buttons">
            <button className="draft">Save to Drafts</button>
            <button className="publish">Publish Product</button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ProductEditor;