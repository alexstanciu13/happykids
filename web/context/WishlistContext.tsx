"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type WishlistItem = {
    id: string;
    name: string;
    price: number;
    image: string;
    inStock: boolean;
    slug: string;
};

type WishlistContextType = {
    items: WishlistItem[];
    addItem: (item: WishlistItem) => void;
    removeItem: (id: string) => void;
    isInWishlist: (id: string) => boolean;
};

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from local storage on mount - client side only
    useEffect(() => {
        const saved = localStorage.getItem("wishlist");
        if (saved) {
            try {
                setItems(JSON.parse(saved));
            } catch (e) {
                console.error("Failed to parse wishlist", e);
            }
        }
        setIsLoaded(true);
    }, []);

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem("wishlist", JSON.stringify(items));
        }
    }, [items, isLoaded]);

    const addItem = (item: WishlistItem) => {
        setItems(prev => {
            if (prev.find(i => i.id === item.id)) return prev;
            return [...prev, item];
        });
    };

    const removeItem = (id: string) => {
        setItems(prev => prev.filter(i => i.id !== id));
    };

    const isInWishlist = (id: string) => items.some(i => i.id === id);

    return (
        <WishlistContext.Provider value={{ items, addItem, removeItem, isInWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
}

export const useWishlist = () => {
    const context = useContext(WishlistContext);
    if (!context) throw new Error("useWishlist must be used within WishlistProvider");
    return context;
};
