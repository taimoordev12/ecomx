const SHOP_DATA = {
 hats: {
    id: 1,
    title: 'Hats',
    routeName: 'hats',
    
    items: [
      {
        id: 1,
        name: 'Brown Brim',
        description:'lorem is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using   making it look like readable English.',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25,
        Discountprice:23,
        weight:12,
        variants: {
          variant1: {
            name:'color',
            options:['yellow','blue','green'],
            price:123
          },
          variant2: {
            name:'size',
            options:['8','9','10'],
            price:100
          },
          variant3: {
            name:'cutting',
            options:['small','large','medium'],
            price:100
          }

        }
      },
      {
        id: 2,
        name: 'Blue Beanie',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 18
      },
      {
        id: 3,
        name: 'Brown Cowboy',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 35
      },
      {
        id: 4,
        name: 'Grey Brim',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25
      },
      {
        id: 5,
        name: 'Green Beanie',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 18
      },
      {
        id: 6,
        name: 'Palm Tree Cap',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 14
      },
      {
        id: 7,
        name: 'Red Beanie',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 18
      },
      {
        id: 8,
        name: 'Wolf Cap',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 14
      },
      {
        id: 9,
        name: 'Blue Snapback',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 16
      }
    ]
  },
  sneakers:{
    id: 2,
    title: 'Sneakers',
    routeName: 'sneakers',
    items: [
      {
        id: 10,
        name: 'Adidas NMD',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 220
      },
      {
        id: 11,
        name: 'Adidas Yeezy',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 280
      },
      {
        id: 12,
        name: 'Black Converse',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 110
      },
      {
        id: 13,
        name: 'Nike White AirForce',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 160
      },
      {
        id: 14,
        name: 'Nike Red High Tops',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 160
      },
      {
        id: 15,
        name: 'Nike Brown High Tops',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 160
      },
      {
        id: 16,
        name: 'Air Jordan Limited',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 190
      },
      {
        id: 17,
        name: 'Timberlands',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 200
      }
    ]
  },
 jackets: {
    id: 3,
    title: 'Jackets',
    routeName: 'jackets',
    items: [
      {
        id: 18,
        name: 'Black Jean Shearling',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 125
      },
      {
        id: 19,
        name: 'Blue Jean Jacket',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 90
      },
      {
        id: 20,
        name: 'Grey Jean Jacket',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 90
      },
      {
        id: 21,
        name: 'Brown Shearling',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 165
      },
      {
        id: 22,
        name: 'Tan Trench',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 185
      }
    ]
  },
 womens: {
    id: 4,
    title: 'Womens',
    routeName: 'womens',
    items: [
      {
        id: 23,
        name: 'Blue Tanktop',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25
      },
      {
        id: 24,
        name: 'Floral Blouse',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 20
      },
      {
        id: 25,
        name: 'Floral Dress',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 80
      },
      {
        id: 26,
        name: 'Red Dots Dress',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 80
      },
      {
        id: 27,
        name: 'Striped Sweater',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 45
      },
      {
        id: 28,
        name: 'Yellow Track Suit',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 135
      },
      {
        id: 29,
        name: 'White Blouse',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 20
      }
    ]
  },
 men: {
    id: 5,
    title: 'Mens',
    routeName: 'mens',
    items: [
      {
        id: 30,
        name: 'Camo Down Vest',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 325
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 20
      },
      {
        id: 32,
        name: 'Black & White Longsleeve',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25
      },
      {
        id: 33,
        name: 'Pink T-shirt',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25
      },
      {
        id: 34,
        name: 'Jean Long Sleeve',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 40
      },
      {
        id: 35,
        name: 'Burgundy T-shirt',
        imagesUrls: ['https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png','https://i.ibb.co/ZYW3VTp/brown-brim.png'],
        price: 25
      }
    ]
  }
};

export default SHOP_DATA;
