import "./ProductCard.css"
import { FaEye } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";

const ProductCard = ({ title, price, image }) => {

return (

<div className="product-card">

<div className="img-container">

<img src={image} alt={title} />

<div className="overlay">

<div className="icon-overlay">
<FaEye />
</div>

<div className="icon-overlay">
<TiContacts />
</div>

</div>

</div>

<h3>{title}</h3>
<p>{price}</p>

</div>

)

}

export default ProductCard