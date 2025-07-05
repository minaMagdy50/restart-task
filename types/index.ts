export interface Product {
    id?: string;
    name: string;
    description: string;
    price: string;
    category: string;
    image: string;
  }


export  interface ProductTableProps {
    products: Product[];
    onEdit: (product: Product) => void;
    onDelete: (id: string) => void;
    onOpenModal: () => void;
    deletingId: string | null;
  }
  
export  interface NotificationProps {
    message: string;
    type: 'success' | 'error';
    onClose: () => void;
  }


export  interface ProductModalProps {
    isOpen: boolean;
    onClose: () => void;
    product: Product | null;
    onSave: (product: Product) => void;
    loading?: boolean;
  }

export  interface SidebarProps {
    logout: () => void;
    mobile?: boolean;
  }