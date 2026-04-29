'use client';

import { HiPlus, HiLink } from 'react-icons/hi';

interface ServiceFormProps {
  formData: {
    title: string;
    description: string;
    href: string;
  };
  setFormData: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
  isEditing?: boolean;
  onCancelEdit?: () => void;
}

export default function ServiceForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  loading,
  isEditing = false,
  onCancelEdit
}: ServiceFormProps) {
  return (
    <div className="bg-[#0a0d0b] border border-white/10 rounded-2xl p-8 sticky top-10">
      <h2 className="text-[18px] font-bold mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <HiPlus className={`text-[#00b050] transition-transform ${isEditing ? 'rotate-45' : ''}`} /> 
          {isEditing ? 'Edit Service' : 'New Service'}
        </div>
        {isEditing && (
          <button 
            onClick={onCancelEdit}
            className="text-[11px] text-[#9ca3af] hover:text-white transition-colors"
          >
            Cancel
          </button>
        )}
      </h2>

      <form onSubmit={onSubmit} className="space-y-5">
        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Title</label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            placeholder="e.g. Global Trading & Export"
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00b050]/50 outline-none transition-all"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Link (HREF)</label>
          <div className="relative">
            <HiLink className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" size={16} />
            <input
              type="text"
              required
              value={formData.href}
              onChange={(e) => setFormData({...formData, href: e.target.value})}
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:border-[#00b050]/50 outline-none transition-all text-[11px]"
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-bold uppercase tracking-widest text-[#9ca3af] mb-2">Description</label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00b050]/50 outline-none transition-all resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-[#00b050] hover:bg-[#009040] text-white font-bold uppercase tracking-widest rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? (isEditing ? 'Updating...' : 'Publishing...') : (isEditing ? 'Update Service' : 'Add Service')}
        </button>
      </form>
    </div>
  );
}
