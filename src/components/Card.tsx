"use client";

import Link from "next/link";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import InteractiveCard from "./InteractiveCard";

type CardProps = {
    vid: string;
    venueName: string;
    imgSrc: string;
    onRatingChange?: (venueName: string, rating: number) => void;
};

export default function Card({
    vid,
    venueName,
    imgSrc,
    onRatingChange,
}: CardProps) {
    const [rating, setRating] = useState<number | null>(0);

    const handleRatingChange = (
        _event: React.SyntheticEvent,
        newValue: number | null
    ) => {
        setRating(newValue);
        if (onRatingChange) {
            onRatingChange(venueName, newValue ?? 0);
        }
    };

    return (
        <InteractiveCard>
            <Link href={`/venue/${vid}`}>
                <img
                    src={imgSrc}
                    alt={venueName}
                    className="h-[200px] w-full rounded-lg object-cover"
                />
                <h2 className="mx-[5px] mt-[10px] mb-[5px] text-xl font-semibold text-indigo-900 text-center">
                    {venueName}
                </h2>
            </Link>
            <div className="flex justify-center pb-2">
                <Rating
                    id={`${venueName} Rating`}
                    name={`${venueName} Rating`}
                    data-testid={`${venueName} Rating`}
                    value={rating}
                    onChange={handleRatingChange}
                />
            </div>
        </InteractiveCard>
    );
}
