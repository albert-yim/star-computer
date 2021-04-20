const SHOP_DATA = [
  {
    id: 1,
    title: 'CPU',
    routeName: 'cpus',
    items: [
      {
        id: 1,
        name: 'Intel Core i5-11400 Desktop Processor 6 Cores up to 4.4 GHz LGA1200',
        // Intel Core i5-11400 Desktop Processor 6 Cores up to 4.4 GHz LGA1200 (Intel 500 Series & Select 400 Series Chipset) 65W
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 204.99
      },
      {
        id: 2,
        name: 'Intel Core i5-10400F Boxed Desktop Processor CPU with 2.9GHz 12MB Advanced Cache LAG1200',
        // Intel Core i5-10400F Boxed Desktop Processor CPU with 2.9GHz 12MB Advanced Cache LAG1200 Pin
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 198.00
      },
      {
        id: 3,
        name: 'AMD Ryzen 5 3600 6-Core',
        // AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 249.95
      },
      {
        id: 4,
        name: 'AMD Ryzen 5 5600X 6-core',
        // AMD Ryzen 5 5600X 6-core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 388.00
      },
      {
        id: 5,
        name: 'Intel Core i7-10700 Desktop Processor 8 Cores up to 4.8 GHz LGA 1200',
        // Intel Core i7-10700 Desktop Processor 8 Cores up to 4.8 GHz LGA 1200 (Intel 400 Series Chipset) 65W, BX8070110700
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 274.99
      },
      {
        id: 6,
        name: 'AMD Ryzen 5 PRO 4650G Processor',
        // AMD Ryzen 5 PRO 4650G Processor 7nm 3.7Ghz 6 cores 12 Threads Processor only (Tray)
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 299.99
      },
      {
        id: 7,
        name: 'Intel Core i5-10400 Desktop Processor 6 Cores up to 4.3 GHz  LGA1200',
        // Intel Core i5-10400 Desktop Processor 6 Cores up to 4.3 GHz  LGA1200 (Intel 400 Series Chipset) 65W, Model Number: BX8070110400
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 189.99
      },
      {
        id: 8,
        name: 'AMD Ryzen 3 PRO 4350G Processor',
        // AMD Ryzen 3 PRO 4350G Processor 7nm 3.8Ghz 4 cores 8 Threads Processor only (Tray)
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 249.00
      },
    ]
  },
  {
    id: 2,
    title: 'Motherboard',
    routeName: 'motherboard',
    items: [
      {
        id: 10,
        name: 'ASUS X570-Plus',
        // ASUS AM4 TUF Gaming X570-Plus (Wi-Fi) AM4 Zen 3 Ryzen 5000 & 3rd Gen Ryzen ATX Motherboard with PCIe 4.0, Dual M.2, 12+2 with Dr. MOS Power Stage
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 229.00
      },
      {
        id: 11,
        name: 'MSI Z490-A PRO',
        // MSI Z490-A PRO ProSeries ATX Motherboard (10th Gen Intel Core, LGA 1200 Socket, DDR4, Dual M.2 Slots, USB 3.2 Gen 2, 2.5G LAN, DP/HDMI)
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 280
      },
      {
        id: 12,
        name: 'MSI MEG Z490 GODLIKE Gaming Motherboard',
        // MSI MEG Z490 GODLIKE Gaming Motherboard (E-ATX, 10th Gen Intel Core, LGA 1200 Socket, DDR4, SLI/CF, Triple M.2 Slots, Thunderbolt 3 Type-C, Wi-Fi 6, Mystic Light RGB)
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 169.99
      },
      {
        id: 13,
        name: 'ASRock X570 Taichi',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 192.99
      },
      {
        id: 14,
        name: 'ASUS ROG Strix B450-F Gaming Motherboard',
        // ASUS ROG Strix B450-F Gaming Motherboard (ATX) AMD Ryzen 2 AM4 DDR4 DP HDMI M.2 USB 3.1 Gen2 B450
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 199.00
      },
    ]
  },
  {
    id: 3,
    title: 'Ram',
    routeName: 'ram',
    items: [
      {
        id: 18,
        name: 'Corsair Vengeance LED DDR4 16GB Kit (2 x 8GB)',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 229.99
      },
      {
        id: 19,
        name: 'G.Skill Trident Z RGB DDR4 16GB Kit (2 x 8GB)',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 149.99
      },
      {
        id: 20,
        name: 'Kingston HyperX Predator DDR3 8GB',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 66.40
      },
      {
        id: 21,
        name: 'Kingston HyperX Fury DDR4 16GB',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 148.99
      },
      {
        id: 22,
        name: 'Corsair Dominator Platinum RGB DDR4 16GB',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 254.99
      }
    ]
  },
  {
    id: 4,
    title: 'Power Supply',
    routeName: 'power-supply',
    items: [
      {
        id: 23,
        name: 'Corsair CX450',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 60.00
      },
      {
        id: 24,
        name: 'Corsair RM550x',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 114.99
      },
      {
        id: 25,
        name: 'XPG Core Reactor 650W',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 129.99
      },
      {
        id: 26,
        name: 'be quiet! Dark Power Pro 12 1500W',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 239.90
      },
    ]
  },
  {
    id: 5,
    title: 'GPU',
    routeName: 'gpu',
    items: [
      {
        id: 30,
        name: 'Nvidia GeForce RTX 3090',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 1499.99
      },
      {
        id: 31,
        name: 'AMD Radeon RX 6900 XT',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 999.99
      },
      {
        id: 32,
        name: 'AMD Radeon RX 6800 XT',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 649.99
      },
      {
        id: 33,
        name: 'Nvidia GeForce RTX 3080',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 699.99
      },
      {
        id: 34,
        name: 'AMD Radeon RX 6800',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 579.99
      },
      {
        id: 35,
        name: 'Nvidia GeForce RTX 3070',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 499.99
      },
      {
        id: 36,
        name: 'AMD Radeon RX 6700 XT',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 479.99
      },
      {
        id: 37,
        name: 'Nvidia GeForce RTX 3060 Ti',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 399.99
      },
      {
        id: 38,
        name: 'AMD Radeon RX 6700 XT',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 479.99
      },
      {
        id: 37,
        name: 'Nvidia GeForce RTX 3060 12GB',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 329.99
      },
      {
        id: 36,
        name: 'Nvidia GeForce GTX 1660 Super',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 229.99
      },
      {
        id: 37,
        name: 'Nvidia GeForce GTX 1650 Super',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 159.99
      },
      {
        id: 38,
        name: 'AMD Radeon RX 5600 XT 6GB',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 169.99
      },
    ]
  }
];

export default SHOP_DATA;
