function generateRandomId(length) {
   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   let result = '';
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
 }
 
export const products = [
   {
     id: generateRandomId(10),
     name: 'Home Decor',
     image: 'images/pic/box1-1.jpg'
   },
   {
     id: generateRandomId(10),
     name: 'Shop activity trackers and smartwatches',
     image: 'images/pic/box1-2.jpg'
   },
   {
     id: generateRandomId(10),
     name: 'Toy under $25',
     image: 'images/pic/box1-3.jpg'
   },
   {
     id: generateRandomId(10),
     name: 'Deals in PCs',
     image: 'images/pic/box1-4.jpg'
   },

   {
      id: generateRandomId(10),
      name: 'Grooming Products',
      image: 'images/pic/box2-1.jpg'
    },
    {
      id: generateRandomId(10),
      name: 'Latest Devices',
      image: 'images/pic/box2-2.jpg'
    },
    {
      id: generateRandomId(10),
      name: 'Pets Food',
      image: 'images/pic/box2-3.jpg'
    },
    {
      id: generateRandomId(10),
      name: 'Fashion Mart',
      image: 'images/pic/box2-4.jpg'
    },

    {
      id: generateRandomId(10),
      name: 'Stationary',
      image: 'images/pic/box3-1.jpg'
    },

    {
      id: generateRandomId(10),
      name: 'Laptops',
      image: 'images/pic/box3-2.jpg'
    },

    {
      id: generateRandomId(10),
      name: 'Study Chairs',
      image: 'images/pic/box3-3.jpg'
    },

    {
      id: generateRandomId(10),
      name: 'Monitors',
      image: 'images/pic/box3-4.jpg'
    },

    
 ];
