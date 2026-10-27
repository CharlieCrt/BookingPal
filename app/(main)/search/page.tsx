type Barber = {
  id: number;
  name: string;
  distance: string;
  address: string;
  rating: number;
  reviews: number;
  services: {
    name: string;
    price: number;
    duration: number;
  }[];
};


export default async function SearchPage() {
  const res = await fetch("http://localhost:3000/api/barbers", {
    cache: "no-store",
  });
  const barbers: Barber[] = await res.json();

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      <p>Found {barbers.length} barbers</p>
      
    {barbers.map((barber)  => (
        <p key={barber.id}>{barber.name}</p>
    ))}
    </div>
  );
}
