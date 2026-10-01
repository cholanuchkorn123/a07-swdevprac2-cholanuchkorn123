import Image from "next/image";

type VenueDetail = {
    name: string;
    image: string;
    description: string;
};

const mockVenues: Record<string, VenueDetail> = {
    "001": {
        name: "The Bloom Pavilion",
        image: "/bloom.jpg",
        description: "A serene garden-inspired venue perfect for weddings and social gatherings.",
    },
    "002": {
        name: "Spark Space",
        image: "/sparkspace.jpg",
        description: "A modern, high-tech venue ideal for conferences, workshops, and meetups.",
    },
    "003": {
        name: "The Grand Table",
        image: "/grandtable.jpg",
        description: "An elegant ballroom-style banquet hall for luxury dinners and corporate events.",
    },
};

export default async function VenueDetailPage({
    params,
}: {
    params: Promise<{ vid: string }>;
}) {
    const { vid } = await params;
    const venue = mockVenues[vid] || {
        name: "Unknown Venue",
        image: "/bloom.jpg",
        description: "Venue details not found.",
    };

    return (
        <main className="p-8 max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-indigo-900 mb-6">{venue.name}</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                <img
                    src={venue.image}
                    alt={venue.name}
                    className="w-full md:w-1/2 h-[300px] object-cover rounded-xl shadow-lg"
                />
                <div className="text-left md:w-1/2 space-y-4">
                    <p className="text-gray-700 text-lg">{venue.description}</p>
                    <p className="text-sm font-semibold text-gray-500">Venue Code: {vid}</p>
                </div>
            </div>
        </main>
    );
}
