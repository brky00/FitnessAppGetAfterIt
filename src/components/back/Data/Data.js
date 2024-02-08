import hoodieImage from "../../images/hoodie.png";
import shortsImage from "../../images/shorts.png";
import jacketImage from "../../images/jakke.png";

import purplehoodie from '../../images/purple-hoodie.png';
import orangehoodie from '../../images/orange-hoodie.png';
import bluehoodie from '../../images/blue-hoodie.png';
import greenhoodie from '../../images/green-hoodie.png';

import greenShorts from '../../images/green-shorts.png';
import blueShorts from '../../images/blue-shorts.png';
import redShorts from '../../images/red-shorts.png';

import greenJacket from '../../images/green-jacket.png';
import blueJacket from '../../images/blue-jacket.png';
import yellowJacket from '../../images/yellow-jacket.png';

const data = {
  productItems: [
    {
      id: "1",
      name: "Gti hoodie",
      price: 320,
      image: hoodieImage,
      description: "Premium Cotton Training Hoodie",
      sizes: ["S", "M", "L", "XL"],
      selectionImages:[purplehoodie,orangehoodie,bluehoodie,greenhoodie],
      inStock: true
    },
    {
      id: "2",
      name: "Gti shorts",
      price: 230,
      image: shortsImage,
      description: "Gti Cotton Shorts",
      sizes: ["S", "M", "XL"],
      selectionImages:[greenShorts,blueShorts,redShorts,]
      ,
      inStock: true
    },
    {
      id: "3",
      name: "Gti collage jacket",
      price: 220,
      image: jacketImage,
      description: "Premium Gti Jacket",
      sizes: ["M", "L", "XL"],
      selectionImages:[greenJacket,blueJacket,yellowJacket]
      ,
      inStock: true
    },
    /*orginal ends here*/
 
  {
    id: "4",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
      inStock: false
  },
  {
    id: "5",
    name: "Gti test-product",
    price: 520,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },
  {
    id: "6",
    name: "Gti test-product",
    price: 420,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "7",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Gti test-product",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "8",
    name: "Gti collage jacket",
    price: 220,
    image: jacketImage,
    description: "Gti test-product",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "9",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Gti test-product",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "10",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "11",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },{
    id: "12",
    name: "Gti test-product",
    price: 220,
    image: jacketImage,
    description: "Premium Gti Jacket",
    sizes: ["M", "L", "XL"],
    selectionImages:[greenJacket,blueJacket,yellowJacket],
    inStock: false
  },
  ],
};

export default data;
