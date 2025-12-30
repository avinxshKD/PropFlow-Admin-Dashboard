import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutDashboard, Tag, Mail, Calendar, FileText, Users, ChevronDown, Bell, BarChart3, User, LogOut, Plus } from 'lucide-react'

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/offers', icon: Tag, label: 'Offers' },
  { to: '/inbox', icon: Mail, label: 'Email Inbox' },
  { to: '/calendar', icon: Calendar, label: 'Calendar' },
  { to: '/contracts', icon: FileText, label: 'Contract Templates' },
  { to: '/team', icon: Users, label: 'Team', expandable: true },
  { to: '/contacts', icon: Users, label: 'Contacts' },
]

const bottomNavItems = [
  { to: '/pipeline', icon: BarChart3, label: 'Sales Pipeline', expandable: true },
  { to: '/notifications', icon: Bell, label: 'Notifications' },
  { to: '/reports', icon: BarChart3, label: 'Reports' },
]

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState<'general' | 'project'>('general')

  return (
    <aside className="w-64 bg-white border-r border-zinc-200 flex flex-col h-screen">
      <div className="p-4 border-b border-zinc-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center">
            <span className="text-white text-xs font-bold">P</span>
          </div>
          <span className="font-semibold text-zinc-900">PropFlow</span>
        </div>
      </div>

      <div className="p-4 border-b border-zinc-200">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center">
            <span className="text-zinc-900 font-bold">P</span>
          </div>
          <button className="p-2 border border-zinc-200 rounded-lg hover:bg-zinc-50">
            <Plus size={16} className="text-zinc-500" />
          </button>
        </div>
        <div className="flex bg-zinc-100 rounded-lg p-1">
          <button onClick={() => setActiveTab('general')} className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'general' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500'}`}>General</button>
          <button onClick={() => setActiveTab('project')} className={`flex-1 py-1.5 text-sm font-medium rounded-md transition-colors ${activeTab === 'project' ? 'bg-white text-zinc-900 shadow-sm' : 'text-zinc-500'}`}>Project</button>
        </div>
      </div>

      <nav className="flex-1 py-2 px-3 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.to === '/'} className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-0.5 ${isActive ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}>
            <div className="flex items-center gap-3"><item.icon size={18} /><span>{item.label}</span></div>
            {item.expandable && <ChevronDown size={16} className="text-zinc-400" />}
          </NavLink>
        ))}
        <div className="my-4 border-t border-zinc-100" />
        {bottomNavItems.map((item) => (
          <NavLink key={item.to} to={item.to} className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors mb-0.5 ${isActive ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-600 hover:bg-zinc-50'}`}>
            <div className="flex items-center gap-3"><item.icon size={18} /><span>{item.label}</span></div>
            {item.expandable && <ChevronDown size={16} className="text-zinc-400" />}
          </NavLink>
        ))}
      </nav>

      <div className="p-3 border-t border-zinc-200">
        <NavLink to="/profile" className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50">
          <User size={18} /><span>Profile</span>
        </NavLink>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-50">
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  )
}
