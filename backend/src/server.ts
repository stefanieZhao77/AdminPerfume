import Fastify from 'fastify'

type Material = {
  id: string
  name: string
  stock: number
}
type Customer = { id: string; name: string; contact: string; phone: string }
type Order = { id: string; customerName: string; status: string }

const app = Fastify()

// In-memory mock data
let materials: Material[] = [
  { id: 'MAT-0001', name: '香茅醇', stock: 120 },
  { id: 'MAT-0002', name: '玫瑰醇', stock: 85 },
  { id: 'MAT-0003', name: '香豆素', stock: 40 }
]

let customers: Customer[] = [
  { id: 'C-0001', name: '企业客户1', contact: '张三', phone: '13800000001' },
  { id: 'C-0002', name: '个人客户2', contact: '李四', phone: '13900000002' }
]

const orders: Order[] = [
  { id: 'O-0001', customerName: '企业客户1', status: 'customer_request' },
  { id: 'O-0002', customerName: '个人客户2', status: 'ai_analysis' }
]

app.get('/api/materials', async () => materials)

app.post('/api/materials', async (req) => {
  const body = req.body as Partial<Material>
  const id = `MAT-${String(materials.length + 1).padStart(4, '0')}`
  const item: Material = {
    id,
    name: body.name ?? '未命名',
    stock: body.stock ?? 0
  }
  materials.push(item)
  return item
})

app.put('/api/materials/:id', async (req, res) => {
  const { id } = req.params as { id: string }
  const body = req.body as Partial<Material>
  const idx = materials.findIndex(m => m.id === id)
  if (idx === -1) return res.code(404).send({ message: 'Not Found' })
  materials[idx] = { ...materials[idx], ...body }
  return materials[idx]
})

app.delete('/api/materials/:id', async (req, res) => {
  const { id } = req.params as { id: string }
  const before = materials.length
  materials = materials.filter(m => m.id !== id)
  if (materials.length === before) return res.code(404).send({ message: 'Not Found' })
  return { ok: true }
})

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen({ port, host: '0.0.0.0' })

// Customers
app.get('/api/customers', async () => customers)
app.post('/api/customers', async (req) => {
  const body = req.body as Partial<Customer>
  const id = `C-${String(customers.length + 1).padStart(4, '0')}`
  const item: Customer = {
    id,
    name: body.name ?? '未命名客户',
    contact: body.contact ?? '联系人',
    phone: body.phone ?? '13800000000'
  }
  customers.push(item)
  return item
})
app.delete('/api/customers/:id', async (req, res) => {
  const { id } = req.params as { id: string }
  const before = customers.length
  customers = customers.filter(c => c.id !== id)
  if (customers.length === before) return res.code(404).send({ message: 'Not Found' })
  return { ok: true }
})

// Orders
app.get('/api/orders', async () => orders)
app.post('/api/orders', async (req) => {
  const body = req.body as Partial<Order>
  const id = `O-${String(orders.length + 1).padStart(4, '0')}`
  const item: Order = {
    id,
    customerName: body.customerName ?? '未知客户',
    status: body.status ?? 'customer_request'
  }
  orders.push(item)
  return item
})
app.put('/api/orders/:id', async (req, res) => {
  const { id } = req.params as { id: string }
  const body = req.body as Partial<Order>
  const idx = orders.findIndex(o => o.id === id)
  if (idx === -1) return res.code(404).send({ message: 'Not Found' })
  orders[idx] = { ...orders[idx], ...body }
  return orders[idx]
})

// Auth mock
app.post('/api/login', async (req, res) => {
  const body = req.body as { username: string; password: string }
  const users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'perfumer1', password: 'perfumer123', role: 'perfumer' },
    { username: 'perfumer2', password: 'perfumer123', role: 'perfumer' },
    { username: 'evaluator1', password: 'evaluator123', role: 'evaluator' },
    { username: 'evaluator2', password: 'evaluator123', role: 'evaluator' }
  ]
  const user = users.find(u => u.username === body.username && u.password === body.password)
  if (!user) return res.code(401).send({ success: false, message: 'Invalid credentials' })
  return { success: true, user }
})


