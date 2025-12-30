import { ChevronLeft, ChevronRight, Plus, Clock, MapPin } from 'lucide-react'

export default function Calendar() {
  const currentMonth = 'December 2025'
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  
  const calendarDays = [
    { day: 1 }, { day: 2 }, { day: 3 }, { day: 4 }, { day: 5 }, { day: 6 }, { day: 7 },
    { day: 8 }, { day: 9, hasEvent: true }, { day: 10 }, { day: 11 }, { day: 12, hasEvent: true },
    { day: 13 }, { day: 14 }, { day: 15, hasEvent: true }, { day: 16 }, { day: 17 }, { day: 18 },
    { day: 19 }, { day: 20 }, { day: 21 }, { day: 22, hasEvent: true }, { day: 23 }, { day: 24 },
    { day: 25 }, { day: 26 }, { day: 27 }, { day: 28 }, { day: 29 }, { day: 30, isToday: true }, { day: 31 },
  ]

  const upcomingEvents = [
    { title: 'Property Viewing - Unit 4B', time: '10:00 AM', location: 'Tower A' },
    { title: 'Contract Signing', time: '2:00 PM', location: 'Main Office' },
    { title: 'Team Standup', time: '4:00 PM', location: 'Virtual' },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-zinc-900">Calendar</h1>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500">
          <Plus className="w-4 h-4" />
          Add Event
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-zinc-900">{currentMonth}</h2>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-zinc-100 rounded-lg"><ChevronLeft className="w-5 h-5 text-zinc-600" /></button>
              <button className="p-2 hover:bg-zinc-100 rounded-lg"><ChevronRight className="w-5 h-5 text-zinc-600" /></button>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {days.map((day) => (<div key={day} className="p-2 text-center text-sm font-medium text-zinc-500">{day}</div>))}
            <div className="p-2"></div>
            {calendarDays.map((item, idx) => (
              <div key={idx} className={`p-2 text-center text-sm rounded-lg cursor-pointer relative ${item.isToday ? 'bg-amber-400 text-zinc-900 font-semibold' : 'hover:bg-zinc-100 text-zinc-900'}`}>
                {item.day}
                {item.hasEvent && !item.isToday && (<div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full"></div>)}
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-zinc-200 p-6">
          <h2 className="text-lg font-semibold text-zinc-900 mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                <h3 className="font-medium text-zinc-900 mb-2">{event.title}</h3>
                <div className="flex items-center gap-4 text-sm text-zinc-500">
                  <div className="flex items-center gap-1"><Clock className="w-4 h-4" />{event.time}</div>
                  <div className="flex items-center gap-1"><MapPin className="w-4 h-4" />{event.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
