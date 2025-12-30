import { Plus, MoreHorizontal, DollarSign } from 'lucide-react'

const pipelineStages = [
  {
    name: 'New Leads',
    color: 'bg-blue-500',
    deals: [
      { id: 1, title: 'Unit 4B - Tower A', value: '$450,000', contact: 'James Wilson', daysInStage: 2 },
      { id: 2, title: 'Penthouse Suite', value: '$1,200,000', contact: 'Amanda Roberts', daysInStage: 1 },
      { id: 3, title: 'Unit 12A', value: '$380,000', contact: 'Tom Bradley', daysInStage: 5 },
    ],
  },
  {
    name: 'Contacted',
    color: 'bg-amber-500',
    deals: [
      { id: 4, title: 'Unit 8C - Tower B', value: '$520,000', contact: 'Lisa Chen', daysInStage: 3 },
      { id: 5, title: 'Ground Floor Retail', value: '$890,000', contact: 'Mark Stevens', daysInStage: 7 },
    ],
  },
  {
    name: 'Viewing Scheduled',
    color: 'bg-purple-500',
    deals: [
      { id: 6, title: 'Unit 15D', value: '$410,000', contact: 'Rachel Green', daysInStage: 2 },
      { id: 7, title: 'Unit 3A - Tower A', value: '$395,000', contact: 'Susan Miller', daysInStage: 1 },
      { id: 8, title: 'Duplex Unit 7', value: '$680,000', contact: 'David Thompson', daysInStage: 4 },
      { id: 9, title: 'Unit 9B', value: '$445,000', contact: 'Emily Watson', daysInStage: 2 },
    ],
  },
  {
    name: 'Offer Made',
    color: 'bg-orange-500',
    deals: [
      { id: 10, title: 'Unit 2A - Tower C', value: '$475,000', contact: 'Michael Chen', daysInStage: 6 },
      { id: 11, title: 'Corner Unit 11', value: '$560,000', contact: 'Jennifer Adams', daysInStage: 3 },
    ],
  },
  {
    name: 'Negotiation',
    color: 'bg-pink-500',
    deals: [
      { id: 12, title: 'Unit 6B', value: '$430,000', contact: 'Robert Taylor', daysInStage: 8 },
    ],
  },
  {
    name: 'Closed Won',
    color: 'bg-green-500',
    deals: [
      { id: 13, title: 'Unit 1A - Tower A', value: '$510,000', contact: 'Sarah Mitchell', daysInStage: 0 },
      { id: 14, title: 'Unit 5C', value: '$420,000', contact: 'Chris Brown', daysInStage: 0 },
    ],
  },
]

export default function Pipeline() {
  const totalValue = pipelineStages.reduce((acc, stage) => 
    acc + stage.deals.reduce((sum, deal) => sum + parseInt(deal.value.replace(/[$,]/g, '')), 0), 0
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">Sales Pipeline</h1>
          <p className="text-sm text-zinc-500 mt-1">
            Total pipeline value: <span className="font-semibold text-zinc-900">${(totalValue / 1000000).toFixed(2)}M</span>
          </p>
        </div>
        <button className="flex items-center gap-2 bg-amber-400 text-zinc-900 px-4 py-2 rounded-lg font-medium hover:bg-amber-500 transition-colors">
          <Plus className="w-4 h-4" />
          Add Deal
        </button>
      </div>

      {/* Pipeline Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {pipelineStages.map((stage) => (
          <div key={stage.name} className="flex-shrink-0 w-72">
            <div className="bg-white rounded-xl border border-zinc-200 overflow-hidden">
              {/* Stage Header */}
              <div className="p-4 border-b border-zinc-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${stage.color}`}></div>
                    <h3 className="font-medium text-zinc-900">{stage.name}</h3>
                  </div>
                  <span className="text-sm text-zinc-500">{stage.deals.length}</span>
                </div>
                <p className="text-sm text-zinc-500 mt-1">
                  ${stage.deals.reduce((sum, deal) => sum + parseInt(deal.value.replace(/[$,]/g, '')), 0).toLocaleString()}
                </p>
              </div>

              {/* Deals */}
              <div className="p-2 space-y-2 max-h-[500px] overflow-y-auto">
                {stage.deals.map((deal) => (
                  <div
                    key={deal.id}
                    className="p-3 bg-zinc-50 rounded-lg border border-zinc-100 hover:border-zinc-200 cursor-pointer transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-zinc-900 text-sm">{deal.title}</h4>
                      <button className="p-1 text-zinc-400 hover:text-zinc-600 rounded transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 text-amber-600 font-semibold text-sm mb-2">
                      <DollarSign className="w-4 h-4" />
                      {deal.value}
                    </div>
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{deal.contact}</span>
                      <span>{deal.daysInStage}d</span>
                    </div>
                  </div>
                ))}

                {/* Add Deal Button */}
                <button className="w-full p-3 border border-dashed border-zinc-300 rounded-lg text-sm text-zinc-500 hover:border-zinc-400 hover:text-zinc-600 transition-colors">
                  + Add Deal
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
