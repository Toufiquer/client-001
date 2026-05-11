/*
|-----------------------------------------
| setting up Page for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: Toufiquer, May, 2026
|-----------------------------------------
*/

'use client';

import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { Plus, RefreshCw, Trash2, Loader2, Globe } from 'lucide-react';

interface PathItem {
  _id: string;
  path: string;
  createdAt: string;
}

function AddPathModal({ onClose, onAdd }: { onClose: () => void; onAdd: (path: string) => Promise<void> }) {
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    setLoading(true);
    await onAdd(trimmed);
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-slate-900 border border-white/20 rounded-sm shadow-2xl p-8 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-widest italic mb-6">Add Path</h2>
        <input
          autoFocus
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleConfirm()}
          placeholder="e.g. /about or /"
          className="h-12 w-full bg-white/5 border border-white/20 rounded-sm px-4 text-white placeholder:text-white/20 focus:border-white/50 outline-none transition-all mb-6"
        />
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="h-10 px-5 bg-white/5 hover:bg-white/10 text-white/70 rounded-sm font-bold text-xs uppercase tracking-widest transition-all border border-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!value.trim() || loading}
            className="h-10 px-5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Plus className="w-3.5 h-3.5" />}
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

function RevalidateModal({ item, onClose, onConfirm }: { item: PathItem; onClose: () => void; onConfirm: () => Promise<void> }) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-slate-900 border border-white/20 rounded-sm shadow-2xl p-8 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-widest italic mb-2">Revalidate Path</h2>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-6">This will clear the cache for the path below.</p>
        <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 mb-6">
          <span className="text-indigo-400 font-mono font-bold text-sm">{item.path}</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="h-10 px-5 bg-white/5 hover:bg-white/10 text-white/70 rounded-sm font-bold text-xs uppercase tracking-widest transition-all border border-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="h-10 px-5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-sm font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <RefreshCw className="w-3.5 h-3.5" />}
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteModal({ item, onClose, onConfirm }: { item: PathItem; onClose: () => void; onConfirm: () => Promise<void> }) {
  const [loading, setLoading] = useState(false);

  const handleConfirm = async () => {
    setLoading(true);
    await onConfirm();
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 bg-slate-900 border border-white/20 rounded-sm shadow-2xl p-8 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-widest italic mb-2">Delete Path</h2>
        <p className="text-white/40 text-xs uppercase tracking-widest mb-6">Remove this path from the list permanently.</p>
        <div className="bg-white/5 border border-white/10 rounded-sm px-4 py-3 mb-6">
          <span className="text-rose-400 font-mono font-bold text-sm">{item.path}</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button
            onClick={onClose}
            className="h-10 px-5 bg-white/5 hover:bg-white/10 text-white/70 rounded-sm font-bold text-xs uppercase tracking-widest transition-all border border-white/10"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={loading}
            className="h-10 px-5 bg-rose-600 hover:bg-rose-700 text-white rounded-sm font-bold text-xs uppercase tracking-widest transition-all disabled:opacity-50 flex items-center gap-2"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Trash2 className="w-3.5 h-3.5" />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default function WebsiteUpdatePage() {
  const [paths, setPaths] = useState<PathItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [revalidateTarget, setRevalidateTarget] = useState<PathItem | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<PathItem | null>(null);

  const fetchPaths = async () => {
    try {
      const res = await fetch('/api/website-update');
      const data = await res.json();
      if (data.paths) setPaths(data.paths);
    } catch {
      toast.error('Failed to load paths');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPaths();
  }, []);

  const handleAddPath = async (path: string) => {
    try {
      const res = await fetch('/api/website-update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Failed to add path');
        return;
      }
      setPaths(prev => [data.path, ...prev]);
      toast.success(`Path "${path}" saved`);
      setShowAddModal(false);
    } catch {
      toast.error('Failed to add path');
    }
  };

  const handleRevalidate = async () => {
    if (!revalidateTarget) return;
    try {
      const res = await fetch('/api/website-update', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path: revalidateTarget.path }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || 'Revalidation failed');
        return;
      }
      toast.success(`Revalidated "${revalidateTarget.path}"`);
      setRevalidateTarget(null);
    } catch {
      toast.error('Revalidation failed');
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    try {
      const res = await fetch('/api/website-update', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deleteTarget._id }),
      });
      if (!res.ok) {
        toast.error('Failed to delete path');
        return;
      }
      setPaths(prev => prev.filter(p => p._id !== deleteTarget._id));
      toast.success(`Path "${deleteTarget.path}" deleted`);
      setDeleteTarget(null);
    } catch {
      toast.error('Failed to delete path');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans relative overflow-hidden p-4 md:p-8">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 space-y-10">
        <ToastContainer position="bottom-right" theme="dark" hideProgressBar />

        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-8">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold italic tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/40">
              Website Update
            </h1>
            <p className="text-[10px] text-white/40 font-bold uppercase tracking-[0.3em]">Cache Revalidation Manager</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="h-10 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-sm font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all shadow-lg shadow-indigo-500/20"
          >
            <Plus className="w-4 h-4" />
            Add Path
          </button>
        </header>

        <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-sm shadow-2xl overflow-hidden">
          <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
            <Globe className="w-4 h-4 text-indigo-400" />
            <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Saved Paths</span>
            <span className="ml-auto text-[10px] font-black text-white/30 bg-white/5 px-3 py-1 rounded-sm border border-white/10">
              {paths.length}
            </span>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-16">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin opacity-50" />
            </div>
          ) : paths.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Globe className="w-10 h-10 text-white/10" />
              <p className="text-[10px] font-black text-white/20 uppercase tracking-widest">No paths saved yet</p>
            </div>
          ) : (
            <ul className="divide-y divide-white/5">
              {paths.map(item => (
                <li key={item._id} className="flex items-center gap-4 px-6 py-4 hover:bg-white/5 transition-all group">
                  <span className="flex-1 font-mono font-bold text-sm text-white/80 group-hover:text-white transition-colors truncate">
                    {item.path}
                  </span>
                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => setRevalidateTarget(item)}
                      className="h-8 px-4 bg-emerald-600/20 hover:bg-emerald-600 border border-emerald-500/30 hover:border-emerald-500 text-emerald-400 hover:text-white rounded-sm font-bold text-[10px] uppercase tracking-widest transition-all flex items-center gap-1.5"
                    >
                      <RefreshCw className="w-3 h-3" />
                      Update
                    </button>
                    <button
                      onClick={() => setDeleteTarget(item)}
                      className="h-8 w-8 bg-rose-600/10 hover:bg-rose-600/30 border border-rose-500/20 hover:border-rose-500/50 text-rose-400/50 hover:text-rose-400 rounded-sm transition-all flex items-center justify-center"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {showAddModal && <AddPathModal onClose={() => setShowAddModal(false)} onAdd={handleAddPath} />}

      {revalidateTarget && (
        <RevalidateModal item={revalidateTarget} onClose={() => setRevalidateTarget(null)} onConfirm={handleRevalidate} />
      )}

      {deleteTarget && (
        <DeleteModal item={deleteTarget} onClose={() => setDeleteTarget(null)} onConfirm={handleDelete} />
      )}
    </div>
  );
}
