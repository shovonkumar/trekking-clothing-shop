import men_tshirt from "../../assets/images/men_tshirt.png";
import men_pant from "../../assets/images/men_pant.png";
import men_bag from "../../assets/images/men_bag.png";
import men_shirt from "../../assets/images/men_shirt.png";
import women_jacket from "../../assets/images/women_jacket.png";
import women_handbag from "../../assets/images/women_handbag.png";
import women_jacket2 from "../../assets/images/women_jacket2.png";
import women_tshirt from "../../assets/images/women_tshirt.png";
import child_bag from "../../assets/images/child_bag.png";
import child_tshirt from "../../assets/images/child_tshirt.png";
import child_jacket from "../../assets/images/child_jacket.png";
import child_pant from "../../assets/images/child_pant.png";

export const ProductsData = {
  men: [
    {
      id: 101,
      name: "Mens T-Shirt",
      price: 5,
      image: men_tshirt,
      brand: "Lotto",
      color: "Black",
      size: "L",
    },
    {
      id: 102,
      name: "Mens Pant",
      price: 20,
      image: men_pant,
      brand: "Lotto",
      color: "Gray",
      size: "XL",
    },
    {
      id: 103,
      name: "Bagpack",
      price: 15,
      image: men_bag,
      brand: "Adidas",
      color: "Black",
      size: "N/A",
    },
    {
      id: 104,
      name: "Mens shirt",
      price: 17,
      image: men_shirt,
      brand: "Zara",
      color: "Light Blue",
      size: "XL",
    },
  ],
  women: [
    {
      id: 105,
      name: "Winter Jacket",
      price: 15,
      image: women_jacket,
      brand: "Polo",
      color: "Sky Blue",
      size: "L",
    },

    {
      id: 106,
      name: "Handbag",
      price: 10,
      image: women_handbag,
      brand: "Adidas",
      color: "Blue",
      size: "N/A",
    },
    {
      id: 107,
      name: "Womens Jacket",
      price: 25,
      image: women_jacket2,
      brand: "Lotto",
      color: "Light Green",
      size: "XL",
    },
    {
      id: 108,
      name: "Pink T-Shirt",
      price: 10,
      image: women_tshirt,
      brand: "Zara",
      color: "Light Pink",
      size: "M",
    },
  ],
  children: [
    {
      id: 109,
      name: "Kid's Bagpack",
      price: 5,
      image: child_bag,
      brand: "Doremon",
      color: "Pink",
      size: "XS",
    },
    {
      id: 110,
      name: "Kid's T-shirt",
      price: 7,
      image: child_tshirt,
      brand: "Lotto",
      color: "Blue",
      size: "S",
    },
    {
      id: 111,
      name: "Kid's jacket",
      price: 15,
      image: child_jacket,
      brand: "Levis",
      color: "Green",
      size: "S",
    },
    {
      id: 112,
      name: "Kid's Pant",
      price: 10,
      image: child_pant,
      brand: "Zara",
      color: "Blue",
      size: "XS",
    },
  ],
};

export default ProductsData;
