'use client';
import ProductTable from '@/components/ProductTable';
import ProductModal from '@/components/ProductModal';
import Notification from '@/components/Notification';
import ProductsPageHook from '@/hooks/ProductsPageHook';
import { IoIosAddCircleOutline } from 'react-icons/io';

const ProductsPage = () => {

  const {
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
  }  = ProductsPageHook();

  return (
    <div className="space-y-6">
      <div className="products-header flex flex-col md:flex-row md:items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-600">Manage your product inventory</p>
        </div>
        <button
          onClick={() => {
            setSelectedProduct(null);
            setIsModalOpen(true);
          }}
          className="mt-4 md:mt-0 px-4 py-2 bg-gradient-to-b from-gray-600 to-gray-500 cursor-pointer flex items-center gap-2 rounded-2xl text-white hover:from-lime-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Product <IoIosAddCircleOutline />
        </button>
      </div>

      <ProductTable 
        products={products} 
        onEdit={setSelectedProduct}
        onDelete={handleDelete}
        onOpenModal={() => setIsModalOpen(true)}
        deletingId={deletingId}
      />

      <ProductModal
        isOpen={isModalOpen}
        loading={isSaving}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProduct(null);
        }}
        product={selectedProduct}
        onSave={handleSave}
      />

      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map((notification) => (
          <Notification
            key={notification.id}
            message={notification.message}
            type={notification.type}
            onClose={() => removeNotification(notification.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;