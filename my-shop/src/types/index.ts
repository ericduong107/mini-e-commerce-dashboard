// Định nghĩa cấu trúc của 1 sản phẩm từ API
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

// Định nghĩa cấu trúc sản phẩm trong giỏ hàng (kế thừa Product và thêm số lượng)
export interface CartItem extends Product {
  quantity: number;
}