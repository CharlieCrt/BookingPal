import { NextResponse } from "next/server";

const barbers = [
  {
    id: 1,
    name: "Shaving Ken Barbershop",
    distance: "0.3 mi",
    address: "4 Dover Street, CT1 3HD, Canterbury",
    rating: 5.0,
    reviews: 551,
    services: [
      { name: "Haircut & Style", price: 24.00, duration: 30 },
      { name: "Haircut & Beard trim", price: 32.00, duration: 45 },
      { name: "Student Haircut", price: 20.00, duration: 30 },
    ],
  },
  {
    id: 2,
    name: "Fresh Fades",
    distance: "0.7 mi",
    address: "12 High Street, CT1 2AA, Canterbury",
    rating: 4.8,
    reviews: 324,
    services: [
      { name: "Skin Fade", price: 28.00, duration: 40 },
      { name: "Buzz Cut", price: 15.00, duration: 20 },
    ],
  },
];

export async function GET() {
  return NextResponse.json(barbers);
}