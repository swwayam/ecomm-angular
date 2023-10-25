import { EventEmitter, Injectable, signal } from '@angular/core';
import { Product } from '../Product.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  private cartItems = new Subject<number>();
  cartData: Observable<number> = this.cartItems.asObservable();

  private productsDB: Product[] = [
    {
      title: 'Ashu For You',
      price: 231,
      id: 1,
      image: 'https://m.media-amazon.com/images/I/81Pd2t1jbGL._AC_UL320_.jpg',
      rating: [1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Wallted For You',
      price: 231,
      id: 2,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 3,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 4,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 5,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 6,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 7,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 8,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 9,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 10,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 11,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 12,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
    {
      title: 'Books For You',
      price: 231,
      id: 13,
      image:
        'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476740195/the-library-book-9781476740195_hr.jpg',
      rating: [1, 1, 1, 1, 1],
      availableQuantity: 20,
      purchaseQuantity: 1,
      isInCart: false,
    },
  ];

  cartCount = signal(0);
  cartPrice = signal(0);

  constructor() {}

  countItemsInCart(): void {
    let count = 0;
    for (const product of this.productsDB) {
      if (product.isInCart == true) {
        count += 1;
      }
    }
    this.cartCount.set(count);
  }

  getProducts(): Product[] {
    this.countItemsInCart();
    return this.productsDB;
  }

  getCartItems(): Product[] {
    let cartItem: Product[] = [];
    this.countItemsInCart();
    for (let product of this.productsDB) {
      if (product.isInCart) {
        cartItem.push(product);
      }
    }
    return cartItem;
  }

  removeCartItems(id: number): void {
    for (const product of this.productsDB) {
      if (product.id == id) {
        product.isInCart = false;
      }
    }
    this.cartCount.update((curr) => curr - 1);
    this.cartItems.next(1);
    this.calculateTotal();
  }

  changeQuantity(id: number, quantity: number): void {
    for (let product of this.productsDB) {
      if (product.id == id) {
        product.purchaseQuantity = quantity;
      }
    }
    this.calculateTotal();
  }

  pushToCart(id: number): void {
    for (let product of this.productsDB) {
      if (product.id == id) {
        product.isInCart = true;
        console.log(product);
      }
    }
    this.cartCount.update((curr) => curr + 1);
    this.cartItems.next(1);

    this.calculateTotal();
  }

  calculateTotal(): void {
    let totalPrice = 0;
    for (const product of this.getCartItems()) {
      if (product.purchaseQuantity > 1) {
        totalPrice += product.price * product.purchaseQuantity;
      } else {
        totalPrice += product.price;
      }
    }
    this.cartPrice.set(totalPrice);
  }
}
