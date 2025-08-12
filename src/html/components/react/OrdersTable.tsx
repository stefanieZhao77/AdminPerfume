import React, { useEffect, useState } from 'react'

type Order = { id: string; customerName: string; status: string }

const STATUS_LABEL: Record<string, string> = {
  customer_request: '客户提出需求',
  ai_analysis: 'AI分析',
  ai_formula: 'AI配方',
  order_dispatch: '派单',
  perfumer_prep: '配香',
  perfumer_adjust: '调整',
  application: '应用',
  evaluation: '评香',
  quality_check: '质检',
  customer_feedback: '反馈',
  completed: '完成'
}

export default function OrdersTable(){
  const [items, setItems] = useState<Order[]>([])
  const [customerName, setCustomerName] = useState('')
  const [status, setStatus] = useState('customer_request')

  async function load(){
    const res = await fetch('/api/orders')
    setItems(await res.json())
  }

  async function add(){
    if(!customerName.trim()) return
    await fetch('/api/orders', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ customerName, status })
    })
    setCustomerName('')
    setStatus('customer_request')
    load()
  }

  async function next(o: Order){
    const flow = [
      'customer_request','ai_analysis','ai_formula','order_dispatch','perfumer_prep','perfumer_adjust','application','evaluation','quality_check','customer_feedback','completed'
    ]
    const idx = flow.indexOf(o.status)
    const nextStatus = flow[Math.min(idx+1, flow.length-1)]
    await fetch(`/api/orders/${o.id}`, { method:'PUT', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ status: nextStatus }) })
    load()
  }

  useEffect(()=>{ load() }, [])

  return (
    <div>
      <div style={{ display:'flex', gap:8, marginBottom:12 }}>
        <input placeholder="客户名称" value={customerName} onChange={e=>setCustomerName(e.target.value)} />
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          {Object.keys(STATUS_LABEL).map(k=> <option key={k} value={k}>{STATUS_LABEL[k]}</option>)}
        </select>
        <button onClick={add}>新增订单</button>
      </div>
      <table className="table">
        <thead>
          <tr><th>订单号</th><th>客户</th><th>状态</th><th>操作</th></tr>
        </thead>
        <tbody>
          {items.map(o=> (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.customerName}</td>
              <td>{STATUS_LABEL[o.status] ?? o.status}</td>
              <td>
                <button onClick={()=>next(o)}>推进</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}


