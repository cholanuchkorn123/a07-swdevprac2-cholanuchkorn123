import DateReserve from '@/components/DateReserve';

export default function BookingPage() {
  return (
    <main className="min-h-screen pt-[60px] p-5 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 my-4">Venue Booking</h1>
      <DateReserve />
      <button
        type="submit"
        name="Book Venue"
        className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-5 py-2 text-white shadow-sm font-medium my-5"
      >
        Book Venue
      </button>
    </main>
  );
}
