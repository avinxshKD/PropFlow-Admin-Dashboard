import { CheckSquare, Building, Tag } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const leadsData = [
  { date: '1 May', leads: 45 }, { date: '3 May', leads: 62 }, { date: '5 May', leads: 78 },
  { date: '7 May', leads: 55 }, { date: '9 May', leads: 85 }, { date: '11 May', leads: 65 },
  { date: '13 May', leads: 72 }, { date: '15 May', leads: 58 }, { date: '17 May', leads: 48 },
]

const unitStatus = [
  { label: 'AVAILABLE UNITS', value: 18, color: 'bg-amber-400' },
  { label: 'RESERVED UNITS', value: 21, color: 'bg-zinc-400' },
  { label: 'OFFERED UNITS', value: 11, color: 'bg-zinc-600' },
  { label: 'SOLD UNITS', value: 28, color: 'bg-zinc-900' },
]

export default function Dashboard() {
  const totalUnits = unitStatus.reduce((acc, s) => acc + s.value, 0)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-zinc-900">Dashboard</h1>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <CheckSquare size={20} className="text-zinc-400 mb-3" />
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Total Sales</p>
          <p className="text-xl font-semibold text-zinc-900 mt-1">CA$15,182,000</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <Building size={20} className="text-zinc-400 mb-3" />
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Units Sold</p>
          <p className="text-xl font-semibold text-zinc-900 mt-1">28</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <Tag size={20} className="text-zinc-400 mb-3" />
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Ave Price Per Sq. Ft</p>
          <p className="text-xl font-semibold text-zinc-900 mt-1">CA$42</p>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-4">
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Remaining Units</p>
          <p className="text-3xl font-semibold text-zinc-900 mt-1">18</p>
          <div className="mt-3">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Total Amount</p>
            <p className="text-lg font-semibold text-zinc-900">CA$11,273,000</p>
          </div>
          <div className="mt-3">
            <p className="text-xs text-zinc-500 uppercase tracking-wider">Ave Price Per Sq. Ft</p>
            <p className="text-lg font-semibold text-zinc-900">CA$39</p>
          </div>
          <div className="mt-4 flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-zinc-900 rounded-sm"></span>Sold</span>
            <span className="flex items-center gap-1"><span className="w-3 h-3 bg-amber-400 rounded-sm"></span>Remaining</span>
          </div>
          <div className="mt-2 flex h-4 rounded overflow-hidden">
            <div className="bg-zinc-900" style={{ width: '60%' }}></div>
            <div className="bg-amber-400" style={{ width: '40%' }}></div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <h2 className="text-sm font-medium text-zinc-900 mb-4">Units per Status</h2>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {unitStatus.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-semibold text-zinc-900">{s.value}</p>
              <p className="text-xs text-zinc-500 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="flex h-6 rounded overflow-hidden">
          {unitStatus.map((s) => (
            <div key={s.label} className={s.color} style={{ width: `${(s.value / totalUnits) * 100}%` }}></div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl border border-zinc-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-medium text-zinc-900">Total Leads by Day</h2>
          <div className="flex items-center gap-2">
            <select className="text-sm border border-zinc-200 rounded-lg px-3 py-1.5 text-zinc-600 bg-white">
              <option>Canada</option>
            </select>
            <select className="text-sm border border-zinc-200 rounded-lg px-3 py-1.5 text-zinc-600 bg-white">
              <option>This month</option>
            </select>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={leadsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f4f4f5" vertical={false} />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#71717a' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e4e4e7', borderRadius: '8px', fontSize: '12px' }} />
              <Bar dataKey="leads" fill="#18181b" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
