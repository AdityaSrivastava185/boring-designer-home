export interface Product {
    href: string;
  id: string;
  name: string;
  description?: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

export const products: Product[] = [
  {
    href: "/vault/1",
    id: "1",
    name: "Water Sensing Device - Real-time Monitoring for Smart Environments",
    price: "$100",
    imageSrc:"/oglogo.png",
    imageAlt: "Product 1",
    description:
      "Our Water Sensing Device is a compact, intelligent IoT solution designed to monitor water presence, detect leaks, and track moisture levels in real time. Built specifically for industrial, agricultural, and smart home environments, it offers a seamless blend of reliability, sensitivity, and connectivity. Powered by advanced microcontrollers and low-power wireless modules, this device is ideal for both on-premise setups and cloud-integrated systems. Whether you're preventing water damage in a server room or optimizing irrigation in the field, this sensor provides critical environmental insight with minimal energy consumption.",
  },
  {
    href: "/vault/2",
    id: "2",
    name: "Temperature and Humidity Sensor - Real-time Monitoring for Smart Environments",
    price: "$200",
    imageSrc:"/oglogo.png",
    imageAlt: "/oglogo.png",
    description:
      "Our Temperature and Humidity Sensor is a compact, intelligent IoT solution designed to monitor temperature and humidity levels in real time. Built specifically for industrial, agricultural, and smart home environments, it offers a seamless blend of reliability, sensitivity, and connectivity. Powered by advanced microcontrollers and low-power wireless modules, this device is ideal for both on-premise setups and cloud-integrated systems. Whether you're preventing water damage in a server room or optimizing irrigation in the field, this sensor provides critical environmental insight with minimal energy consumption.",
  },
  {
    href: "/vault/3",
    id: "3",
    name: "Motion Sensor - Real-time Monitoring for Smart Environments",
    price: "$300",
    imageSrc:"/oglogo.png",
    imageAlt: "Product 3",
    description:
      "Our Motion Sensor is a compact, intelligent IoT solution designed to monitor motion in real time. Built specifically for industrial, agricultural, and smart home environments, it offers a seamless blend of reliability, sensitivity, and connectivity. Powered by advanced microcontrollers and low-power wireless modules, this device is ideal for both on-premise setups and cloud-integrated systems. Whether you're preventing water damage in a server room or optimizing irrigation in the field, this sensor provides critical environmental insight with minimal energy consumption.",
  },
];
