import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import connectDB from '@/lib/db';
import Service from '@/models/Service';
import { verifyToken } from '@/lib/auth';

export async function GET() {
  try {
    await connectDB();
    const services = await Service.find({}).sort({ createdAt: -1 });
    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch services' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;
    
    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { title, description, href } = await req.json();
    
    if (!title || !description) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();
    const newService = await Service.create({ title, description, href });

    (revalidateTag as any)('services');

    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create service' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Missing service ID' }, { status: 400 });
    }

    await connectDB();
    await Service.findByIdAndDelete(id);

    (revalidateTag as any)('services');

    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const token = req.cookies.get('token')?.value;

    if (!token || !(await verifyToken(token))) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { id, title, description, href } = await req.json();

    if (!id) {
      return NextResponse.json({ error: 'Missing service ID' }, { status: 400 });
    }

    await connectDB();
    const updatedService = await Service.findByIdAndUpdate(
      id,
      { title, description, href },
      { new: true }
    );

    if (!updatedService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    (revalidateTag as any)('services');

    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update service' }, { status: 500 });
  }
}

