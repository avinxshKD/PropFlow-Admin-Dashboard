import { useState } from 'react';
import { GripVertical, Plus, MoreHorizontal, X, DollarSign, Home, User } from 'lucide-react';

interface Deal {
  id: string;
  title: string;
  value: number;
  client: string;
  property: string;
  daysInStage: number;
}

interface Column {
  id: string;
  title: string;
  color: string;
  deals: Deal[];
}

const initialColumns: Column[] = [
  {
    id: 'lead',
    title: 'New Lead',
    color: 'bg-blue-500',
    deals: [
      { id: '1', title: 'Condo Purchase', value: 450000, client: 'John Smith', property: '123 Main St', daysInStage: 2 },
      { id: '2', title: 'Investment Property', value: 890000, client: 'Sarah Johnson', property: '456 Oak Ave', daysInStage: 5 },
    ]
  },
  {
    id: 'qualified',
    title: 'Qualified',
    color: 'bg-amber-500',
    deals: [
      { id: '3', title: 'Family Home', value: 650000, client: 'Mike Brown', property: '789 Pine Rd', daysInStage: 8 },
    ]
  },
  {
    id: 'proposal',
    title: 'Proposal',
    color: 'bg-purple-500',
    deals: [
      { id: '4', title: 'Luxury Penthouse', value: 1200000, client: 'Emily Davis', property: '101 Sky Tower', daysInStage: 3 },
      { id: '5', title: 'Beach House', value: 980000, client: 'Tom Wilson', property: '55 Ocean Blvd', daysInStage: 12 },
    ]
  },
  {
    id: 'negotiation',
    title: 'Negotiation',
    color: 'bg-orange-500',
    deals: [
      { id: '6', title: 'Commercial Space', value: 2100000, client: 'ABC Corp', property: '200 Business Park', daysInStage: 6 },
    ]
  },
  {
    id: 'closed',
    title: 'Closed Won',
    color: 'bg-green-500',
    deals: [
      { id: '7', title: 'Starter Home', value: 320000, client: 'Lisa Chen', property: '33 Maple St', daysInStage: 1 },
    ]
  }
];

export default function Pipeline() {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedDeal, setDraggedDeal] = useState<{ deal: Deal; sourceColumnId: string } | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedColumn, setSelectedColumn] = useState<string>('lead');

  const handleDragStart = (deal: Deal, columnId: string) => {
    setDraggedDeal({ deal, sourceColumnId: columnId });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (targetColumnId: string) => {
    if (!draggedDeal) return;
    if (draggedDeal.sourceColumnId === targetColumnId) {
      setDraggedDeal(null);
      return;
    }

    setColumns(prev => prev.map(col => {
      if (col.id === draggedDeal.sourceColumnId) {
        return { ...col, deals: col.deals.filter(d => d.id !== draggedDeal.deal.id) };
      }
      if (col.id === targetColumnId) {
        return { ...col, deals: [...col.deals, { ...draggedDeal.deal, daysInStage: 0 }] };
      }
      return col;
    }));
    setDraggedDeal(null);
  };

  const handleAddDeal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newDeal: Deal = {
      id: Date.now().toString(),
      title: formData.get('title') as string,
      value: Number(formData.get('value')),
      client: formData.get('client') as string,
      property: formData.get('property') as string,
      daysInStage: 0,
    };
    setColumns(prev => prev.map(col => col.id === selectedColumn ? { ...col, deals: [...col.deals, newDeal] } : col));
    setShowAddModal(false);
  };

  const totalValue = columns.reduce((sum, col) => sum + col.deals.reduce((s, d) => s + d.value, 0), 0);
  const totalDeals = columns.reduce((sum, col) => sum + col.deals.length, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Sales Pipeline</h1>
          <p className="text-sm text-zinc-500 mt-1">Drag deals between stages to update status</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-zinc-900 rounded-lg hover:bg-amber-500 font-medium">
          <Plus size={20} /> Add Deal
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500">Total Pipeline Value</p>
          <p className="text-2xl font-bold text-zinc-900">CA${(totalValue / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500">Active Deals</p>
          <p className="text-2xl font-bold text-zinc-900">{totalDeals}</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500">Avg Deal Size</p>
          <p className="text-2xl font-bold text-zinc-900">CA${totalDeals ? Math.round(totalValue / totalDeals / 1000) : 0}K</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-sm text-zinc-500">Won This Month</p>
          <p className="text-2xl font-bold text-green-600">{columns.find(c => c.id === 'closed')?.deals.length || 0}</p>
        </div>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map(column => (
          <div
            key={column.id}
            className="flex-shrink-0 w-72 bg-zinc-50 rounded-xl border border-zinc-200"
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(column.id)}
          >
            <div className="p-3 border-b border-zinc-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`${column.color} w-3 h-3 rounded-full`}></div>
                  <span className="font-medium text-zinc-900">{column.title}</span>
                  <span className="text-xs bg-zinc-200 px-2 py-0.5 rounded-full">{column.deals.length}</span>
                </div>
                <button onClick={() => { setSelectedColumn(column.id); setShowAddModal(true); }} className="p-1 hover:bg-zinc-200 rounded">
                  <Plus size={16} className="text-zinc-500" />
                </button>
              </div>
              <p className="text-sm text-zinc-500 mt-1">CA${(column.deals.reduce((s, d) => s + d.value, 0) / 1000).toFixed(0)}K</p>
            </div>
            <div className="p-2 space-y-2 min-h-[200px]">
              {column.deals.map(deal => (
                <div
                  key={deal.id}
                  draggable
                  onDragStart={() => handleDragStart(deal, column.id)}
                  className="bg-white rounded-lg border border-zinc-200 p-3 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <GripVertical size={14} className="text-zinc-400" />
                      <span className="font-medium text-zinc-900 text-sm">{deal.title}</span>
                    </div>
                    <button className="p-1 hover:bg-zinc-100 rounded">
                      <MoreHorizontal size={14} className="text-zinc-400" />
                    </button>
                  </div>
                  <div className="space-y-1.5 text-xs text-zinc-600">
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={12} className="text-green-600" />
                      <span>CA${deal.value.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User size={12} className="text-blue-500" />
                      <span>{deal.client}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Home size={12} className="text-amber-500" />
                      <span>{deal.property}</span>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-zinc-100 flex justify-between items-center">
                    <span className="text-xs text-zinc-400">{deal.daysInStage}d in stage</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">Add New Deal</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-zinc-100 rounded">
                <X size={20} />
              </button>
            </div>
            <form onSubmit={handleAddDeal} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Deal Title</label>
                <input name="title" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" placeholder="e.g. Luxury Condo Sale" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Value (CAD)</label>
                <input name="value" type="number" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" placeholder="500000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Client Name</label>
                <input name="client" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Property Address</label>
                <input name="property" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" placeholder="123 Main St" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Stage</label>
                <select name="stage" value={selectedColumn} onChange={(e) => setSelectedColumn(e.target.value)} className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400">
                  {columns.map(col => (
                    <option key={col.id} value={col.id}>{col.title}</option>
                  ))}
                </select>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-50">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-amber-400 text-zinc-900 rounded-lg hover:bg-amber-500 font-medium">Add Deal</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
