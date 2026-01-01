import { useState } from 'react';
import { Search, Plus, MoreHorizontal, X, Phone, Mail, MapPin, Star, Award, TrendingUp } from 'lucide-react';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  deals: number;
  revenue: number;
  rating: number;
  status: 'active' | 'away' | 'offline';
}

const initialTeam: TeamMember[] = [
  { id: '1', name: 'Sarah Johnson', role: 'Senior Agent', email: 'sarah@propflow.com', phone: '(555) 123-4567', location: 'Downtown', avatar: 'SJ', deals: 24, revenue: 4200000, rating: 4.9, status: 'active' },
  { id: '2', name: 'Michael Chen', role: 'Agent', email: 'michael@propflow.com', phone: '(555) 234-5678', location: 'Midtown', avatar: 'MC', deals: 18, revenue: 2800000, rating: 4.7, status: 'active' },
  { id: '3', name: 'Emily Davis', role: 'Junior Agent', email: 'emily@propflow.com', phone: '(555) 345-6789', location: 'Suburbs', avatar: 'ED', deals: 12, revenue: 1500000, rating: 4.5, status: 'away' },
  { id: '4', name: 'James Wilson', role: 'Senior Agent', email: 'james@propflow.com', phone: '(555) 456-7890', location: 'Beachfront', avatar: 'JW', deals: 31, revenue: 5800000, rating: 4.8, status: 'active' },
  { id: '5', name: 'Lisa Rodriguez', role: 'Team Lead', email: 'lisa@propflow.com', phone: '(555) 567-8901', location: 'Commercial', avatar: 'LR', deals: 42, revenue: 8200000, rating: 5.0, status: 'active' },
  { id: '6', name: 'David Kim', role: 'Agent', email: 'david@propflow.com', phone: '(555) 678-9012', location: 'East Side', avatar: 'DK', deals: 15, revenue: 2100000, rating: 4.6, status: 'offline' },
];

export default function Team() {
  const [team, setTeam] = useState<TeamMember[]>(initialTeam);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const filteredTeam = team.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddMember = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      role: formData.get('role') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      location: formData.get('location') as string,
      avatar: (formData.get('name') as string).split(' ').map(n => n[0]).join('').toUpperCase(),
      deals: 0,
      revenue: 0,
      rating: 0,
      status: 'active',
    };
    setTeam(prev => [...prev, newMember]);
    setShowAddModal(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('Remove this team member?')) {
      setTeam(prev => prev.filter(m => m.id !== id));
    }
  };

  const totalRevenue = team.reduce((sum, m) => sum + m.revenue, 0);
  const totalDeals = team.reduce((sum, m) => sum + m.deals, 0);
  const avgRating = team.length ? (team.reduce((sum, m) => sum + m.rating, 0) / team.length).toFixed(1) : '0';

  const statusColors = {
    active: 'bg-green-500',
    away: 'bg-amber-500',
    offline: 'bg-zinc-400'
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Team</h1>
          <p className="text-sm text-zinc-500 mt-1">{team.length} team members</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="flex items-center gap-2 px-4 py-2 bg-amber-400 text-zinc-900 rounded-lg hover:bg-amber-500 font-medium">
          <Plus size={20} /> Add Member
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={18} className="text-green-500" />
            <p className="text-sm text-zinc-500">Total Revenue</p>
          </div>
          <p className="text-2xl font-bold text-zinc-900">CA${(totalRevenue / 1000000).toFixed(1)}M</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-1">
            <Award size={18} className="text-amber-500" />
            <p className="text-sm text-zinc-500">Total Deals</p>
          </div>
          <p className="text-2xl font-bold text-zinc-900">{totalDeals}</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-1">
            <Star size={18} className="text-amber-400" />
            <p className="text-sm text-zinc-500">Avg Rating</p>
          </div>
          <p className="text-2xl font-bold text-zinc-900">{avgRating}/5.0</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <p className="text-sm text-zinc-500">Active Now</p>
          </div>
          <p className="text-2xl font-bold text-zinc-900">{team.filter(m => m.status === 'active').length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200">
        <div className="p-4 border-b border-zinc-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
            <input
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {filteredTeam.map(member => (
            <div key={member.id} className="border border-zinc-200 rounded-xl p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-semibold">
                      {member.avatar}
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full border-2 border-white ${statusColors[member.status]}`}></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900">{member.name}</h3>
                    <p className="text-sm text-zinc-500">{member.role}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedMember(member)} className="p-1 hover:bg-zinc-100 rounded">
                  <MoreHorizontal size={18} className="text-zinc-400" />
                </button>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-zinc-600">
                  <Mail size={14} />
                  <span>{member.email}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <Phone size={14} />
                  <span>{member.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-600">
                  <MapPin size={14} />
                  <span>{member.location}</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-lg font-bold text-zinc-900">{member.deals}</p>
                  <p className="text-xs text-zinc-500">Deals</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-zinc-900">${(member.revenue / 1000000).toFixed(1)}M</p>
                  <p className="text-xs text-zinc-500">Revenue</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-amber-500 flex items-center justify-center gap-1">
                    <Star size={14} fill="currentColor" /> {member.rating}
                  </p>
                  <p className="text-xs text-zinc-500">Rating</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">Add Team Member</h2>
              <button onClick={() => setShowAddModal(false)} className="p-1 hover:bg-zinc-100 rounded"><X size={20} /></button>
            </div>
            <form onSubmit={handleAddMember} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Full Name</label>
                <input name="name" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Role</label>
                <select name="role" className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400">
                  <option>Junior Agent</option>
                  <option>Agent</option>
                  <option>Senior Agent</option>
                  <option>Team Lead</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Phone</label>
                <input name="phone" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">Location/Territory</label>
                <input name="location" required className="w-full px-3 py-2 border border-zinc-300 rounded-lg focus:ring-2 focus:ring-amber-400" />
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="flex-1 px-4 py-2 border border-zinc-300 rounded-lg hover:bg-zinc-50">Cancel</button>
                <button type="submit" className="flex-1 px-4 py-2 bg-amber-400 text-zinc-900 rounded-lg hover:bg-amber-500 font-medium">Add Member</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-zinc-900">{selectedMember.name}</h2>
              <button onClick={() => setSelectedMember(null)} className="p-1 hover:bg-zinc-100 rounded"><X size={20} /></button>
            </div>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 text-left hover:bg-zinc-50 rounded-lg flex items-center gap-2">
                <Mail size={18} /> Send Email
              </button>
              <button className="w-full px-4 py-2 text-left hover:bg-zinc-50 rounded-lg flex items-center gap-2">
                <Phone size={18} /> Call
              </button>
              <button onClick={() => { handleDelete(selectedMember.id); setSelectedMember(null); }} className="w-full px-4 py-2 text-left hover:bg-red-50 text-red-600 rounded-lg flex items-center gap-2">
                <X size={18} /> Remove from Team
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
