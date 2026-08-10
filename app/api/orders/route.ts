import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export interface OrderPayload {
  id?: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  flavourId: string;
  flavourName: string;
  bottles: number;
  totalPrice: number;
  createdAt?: string;
}

// In-memory / file persistent storage for demo orders
let ordersDatabase: OrderPayload[] = [
  {
    id: 'ELAN-BHOPAL-90812',
    name: 'Vikramaditya Sharma',
    phone: '+91 98260 12345',
    address: 'Arera Colony, Phase 1',
    city: 'Bhopal, Madhya Pradesh',
    flavourId: 'mango-bliss',
    flavourName: 'Mango Bliss',
    bottles: 4,
    totalPrice: 996,
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString(),
  },
  {
    id: 'ELAN-BHOPAL-90811',
    name: 'Ananya Roy',
    phone: '+91 94250 67890',
    address: 'Shyamla Hills, Lake View Estate',
    city: 'Bhopal, Madhya Pradesh',
    flavourId: 'guava-glow',
    flavourName: 'Guava Glow',
    bottles: 2,
    totalPrice: 458,
    createdAt: new Date(Date.now() - 3600000 * 12).toISOString(),
  },
];

// GET /api/orders - Fetch all orders (Admin Portal)
export async function GET() {
  return NextResponse.json({
    success: true,
    totalOrders: ordersDatabase.length,
    totalRevenue: ordersDatabase.reduce((acc, curr) => acc + curr.totalPrice, 0),
    orders: ordersDatabase,
  });
}

// POST /api/orders - Create new vintage reservation
export async function POST(request: Request) {
  try {
    const body: OrderPayload = await request.json();

    if (!body.name || !body.phone || !body.address) {
      return NextResponse.json(
        { success: false, message: 'Missing required customer details.' },
        { status: 400 }
      );
    }

    const orderId = `ELAN-BHOPAL-${Math.floor(10000 + Math.random() * 90000)}`;

    const newOrder: OrderPayload = {
      id: orderId,
      name: body.name,
      phone: body.phone,
      address: body.address,
      city: body.city || 'Bhopal, Madhya Pradesh',
      flavourId: body.flavourId || 'mango-bliss',
      flavourName: body.flavourName || 'Mango Bliss',
      bottles: Number(body.bottles) || 1,
      totalPrice: Number(body.totalPrice) || 249,
      createdAt: new Date().toISOString(),
    };

    ordersDatabase.unshift(newOrder);

    return NextResponse.json(
      {
        success: true,
        message: 'Reservation created successfully',
        order: newOrder,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}
