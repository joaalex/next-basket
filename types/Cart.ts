export interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    thumbnail: string
  }
  
  export interface CartOpen {
    isOpen: boolean
  }