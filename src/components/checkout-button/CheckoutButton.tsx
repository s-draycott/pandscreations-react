import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

import { Product } from '../../types/products';

import styles from './CheckoutButton.module.scss';

const stripePromise = loadStripe(
    'pk_live_51RGbRpLm7E4giwCGBvBUDG0CxIZRRlGhOBIE88ydDSVtwwhgviY3CucPc8fairEoOv8gbBrZGrr80uLVSog7EKAr00HHhwAaaP'
);

// Extend Product with quantity for cart tracking
type CartItem = Product & {
    quantity: number;
};

type CheckoutButtonProps = {
    product: Product;
};

const CheckoutButton = ({ product }: CheckoutButtonProps) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    // Add product to cart
    const addToCart = () => {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                // Increment quantity if item already in cart
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // Checkout all items in cart
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
        <div>
            <button
                className={styles.checkoutBtn}
                onClick={addToCart}
                disabled={!product.available}
            >
                {product.available ? 'ADD TO CART' : 'SOLD OUT'}
            </button>

            {cartItems.length > 0 && (
                <button className={styles.checkoutBtn} onClick={handleCheckout}>
                    CHECKOUT ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                </button>
            )}
        </div>
    );
};

export default CheckoutButton;
