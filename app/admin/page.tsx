'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import ServiceForm from './components/ServiceForm';
import ServiceList from './components/ServiceList';
import ConfirmModal from './components/ConfirmModal';
import toast, { Toaster } from 'react-hot-toast';

interface ServiceItem {
  _id: string;
  title: string;
  description: string;
  href: string;
}

const API_URL = '/api/services';

const initialFormState = {
  title: '',
  description: '',
  href: '/services/',
};

const baseToastStyle = {
  background: '#0a0d0b',
  fontSize: '13px',
  fontWeight: 'bold',
};



export default function AdminDashboard() {
  const router = useRouter();

  const [services, setServices] = useState<ServiceItem[]>([]);
  const [formData, setFormData] = useState(initialFormState);

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [idToDelete, setIdToDelete] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleAuthError = useCallback(() => {
    toast.error('Session expired. Redirecting to login...', {
      duration: 3000,
      style: {
        ...baseToastStyle,
        color: '#ff4b4b',
        border: '1px solid rgba(255, 75, 75, 0.2)',
      },
    });

    setTimeout(() => {
      router.replace('/login');
    }, 1500);
  }, [router]);


  const reloadServices = async () => {
  try {
    const res = await fetch(API_URL);

    if (res.status === 401) return handleAuthError();

    const data: ServiceItem[] = await res.json();
    setServices(data);
  } catch (err) {
    console.error(err);
    toast.error('Failed to refresh services');
  }
};


 useEffect(() => {
  let ignore = false;

  async function fetchData() {
    try {
      const res = await fetch(API_URL);

      if (res.status === 401) return handleAuthError();

      const data: ServiceItem[] = await res.json();

      if (!ignore) setServices(data);
    } catch (err) {
      console.error(err);
      toast.error('Failed to fetch services');
    } finally {
      if (!ignore) setFetching(false);
    }
  }

  fetchData();

  return () => {
    ignore = true;
  };
}, [handleAuthError]);

  // ================= LOGOUT =================
  const handleLogout = async () => {
    try {
      await fetch('/api/logout', { method: 'POST' });
    } catch (err) {
      console.error('Logout error:', err);
    } finally {
      router.replace('/login');
    }
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const method = editingId ? 'PATCH' : 'POST';
      const body = editingId
        ? { ...formData, id: editingId }
        : formData;

      const res = await fetch(API_URL, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 401) return handleAuthError();

      if (!res.ok) throw new Error('Failed request');

      toast.success(
        editingId
          ? 'Service updated successfully'
          : 'Service added successfully',
        {
          style: {
            ...baseToastStyle,
            color: '#00b050',
            border: '1px solid rgba(0, 176, 80, 0.2)',
          },
        }
      );

      setFormData(initialFormState);
      setEditingId(null);

     await  reloadServices()
    } catch (err) {
      console.error('Submit error:', err);
      toast.error('Failed to save service');
    } finally {
      setLoading(false);
    }
  };

  // ================= EDIT =================
  const handleEdit = (service: ServiceItem) => {
    setFormData({
      title: service.title,
      description: service.description,
      href: service.href,
    });

    setEditingId(service._id);

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setFormData(initialFormState);
    setEditingId(null);
  };

  // ================= DELETE =================
  const openDeleteModal = (id: string) => {
    setIdToDelete(id);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!idToDelete) return;

    setDeleteLoading(true);

    try {
      const res = await fetch(`${API_URL}?id=${idToDelete}`, {
        method: 'DELETE',
      });

      if (res.status === 401) return handleAuthError();

      if (!res.ok) throw new Error('Delete failed');

      setServices((prev) =>
        prev.filter((s) => s._id !== idToDelete)
      );

      toast.success('Service deleted successfully', {
        style: {
          ...baseToastStyle,
          color: '#00b050',
          border: '1px solid rgba(0, 176, 80, 0.2)',
        },
      });

      setIsModalOpen(false);
    } catch (err) {
      console.error('Delete error:', err);
      toast.error('Failed to delete service');
    } finally {
      setDeleteLoading(false);
      setIdToDelete(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#010504] text-white font-sans">
      <Toaster position="bottom-right" reverseOrder={false} />

      <div className="max-w-[1000px] mx-auto px-6 py-10">
        <Header onLogout={handleLogout} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <ServiceForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={handleSubmit}
            loading={loading}
            isEditing={!!editingId}
            onCancelEdit={cancelEdit}
          />

          <ServiceList
            services={services}
            fetching={fetching}
            onDelete={openDeleteModal}
            onEdit={handleEdit}
          />
        </div>
      </div>

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmDelete}
        title="Delete Service?"
        message="This action cannot be undone. The service will be permanently removed."
        loading={deleteLoading}
      />
    </div>
  );
}