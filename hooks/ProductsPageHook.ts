import { useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Product } from '@/types';

const ProductsPageHook = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [notifications, setNotifications] = useState<{
    id: string;
    message: string;
    type: 'success' | 'error';
  }[]>([]);

  const showNotification = (message: string, type: 'success' | 'error') => {
    const id = Math.random().toString(36).substring(2, 9);
    setNotifications((prev) => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      removeNotification(id);
    }, 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

  useGSAP(() => {
    gsap.fromTo(
      '.products-header',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
    );
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch(`${baseUrl}/product`);
      
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      }
      
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error('Fetch products error:', error);
      showNotification('Failed to load products. Please try again.', 'error');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setDeletingId(id);
      
      const response = await fetch(`${baseUrl}/product/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `Delete failed: ${response.status} - ${errorData.message || response.statusText}`
        );
      }
      setProducts(prev => prev.filter(product => product.id !== id));
      showNotification('Product deleted successfully!', 'success');
    } catch (error : any) {
      console.error('Delete product error:', error);
      showNotification(`Failed to delete product: ${error.message}`, 'error');
    } finally {
      setDeletingId(null);
    }
  };

  const handleSave = async (product: Product) => {
    try {
      setIsSaving(true);
      
      const method = product.id ? 'PUT' : 'POST';
      const url = product.id 
        ? `${baseUrl}/product/${product.id}`
        : `${baseUrl}/product`;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `API Error: ${response.status} - ${errorData.message || response.statusText}`
        );
      }
      const updatedProduct = await response.json();
      
      setProducts(prev => {
        if (product.id) {
          return prev.map(p => p.id === product.id ? updatedProduct : p);
        } else {
          return [...prev, updatedProduct];
        }
      });
      
      setIsModalOpen(false);
      setSelectedProduct(null);
      
      showNotification(
        product.id ? 'Product updated successfully!' : 'Product created successfully!',
        'success'
      );
    } catch (error : any) {
      console.error('Save product error:', error);
      showNotification(
        `Failed to ${product.id ? 'update' : 'create'} product: ${error.message}`,
        'error'
      );
    } finally {
      setIsSaving(false);
    }
  };

  
    return {
      products,
      selectedProduct,
      isModalOpen,
      isSaving,
      deletingId,
      notifications,
      handleDelete,
      handleSave,
      setIsModalOpen,
      setSelectedProduct,
      removeNotification
  }
}

export default ProductsPageHook