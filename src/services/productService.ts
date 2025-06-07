import productModel from "../models/productModel.js";

const imgUrl1 =
  "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/inspiron-notebooks/14-5440/media-gallery/ice-blue/laptop-inspiron-14-5440nt-ice-bl-metal-fpr-gallery-3.psd?fmt=png-alpha&pscan=auto&scl=1&hei=402&wid=515&qlt=100,1&resMode=sharp2&size=515,402&chrss=full";
const imaUrl2 =
  "https://storage-asset.msi.com/global/picture/image/feature/nb/2025_AMD-KRK/Stealth-A16-AI-plus-A3HW/audio-pd.webp";
const imaUrl3 =
  "https://dlcdnwebimgs.asus.com/files/media/4cc9cb86-dd74-4ab0-bad7-8c65047f47cc/v1/features/sections/software/images/outer/large/1x/s1/main.jpg";

export const getAllProducts = async () => {
  return await productModel.find({});
};

export const seedInitialProducts = async () => {
  const products = [
    {
      title: "Dell laptop",
      image: imgUrl1,
      price: 1500,
      stoke: 10,
    },
    {
      title: "msi laptop",
      image: imaUrl2,
      price: 1200,
      stoke: 20,
    },
    {
      title: "Product 3",
      image: imaUrl3,
      price: 1300,
      stoke: 30,
    },
  ];

  const exportedProducts = await getAllProducts();
  if (exportedProducts.length === 0) {
    await productModel.insertMany(products);
  }
};
