import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

import { Product } from '../../types/products';

import styles from './Cart.module.scss';

const stripePromise = loadStripe(
    'pk_live_51RGbRpLm7E4giwCGBvBUDG0CxIZRRlGhOBIE88ydDSVtwwhgviY3CucPc8fairEoOv8gbBrZGrr80uLVSog7EKAr00HHhwAaaP'
);

// Extend Product with quantity for cart tracking
type CartItem = Product & { quantity: number };

type CartProps = {
    initialItems?: CartItem[];
};

const Cart = ({ initialItems = [] }: CartProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

    // Increase quantity
    const increment = (id: string) => {
        setCartItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
        );
    };

    // Decrease quantity
    const decrement = (id: string) => {
        setCartItems((prev) =>
            prev
                .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
                .filter((item) => item.quantity > 0)
        );
    };

    // Remove item
    const removeItem = (id: string) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    // Calculate total
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    // Checkout
    const handleCheckout = async () => {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_BACKEND_URL}/api/create-checkout-session`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ cartItems }),
                }
            );

            if (!response.ok) {
                console.error('Backend error:', response.status, await response.text());
                return;
            }

            const session = await response.json();
            const stripe = await stripePromise;
            await stripe?.redirectToCheckout({ sessionId: session.id });
        } catch (error) {
            console.error('Stripe checkout error:', error);
        }
    };

    return (
        <div className={styles.cart}>
            <h2>Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className={styles.cartList}>
                    {cartItems.map((item) => (
                        <li key={item.id} className={styles.cartItem}>
                            <div>
                                <strong>{item.title}</strong>
                                <p>£{item.price.toFixed(2)}</p>
                            </div>
                            <div className={styles.cartControls}>
                                <button onClick={() => decrement(item.id)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => increment(item.id)}>+</button>
                                <button onClick={() => removeItem(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {cartItems.length > 0 && (
                <div className={styles.cartFooter}>
                    <p>Total: £{total.toFixed(2)}</p>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
