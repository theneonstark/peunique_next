"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "QwikForm",
    designation: "User Friendly",
    image:
      "/form.avif",
  },
  {
    id: 2,
    name: "eNACH",
    designation: "fastest",
    image:
      "/retail.jpg",
  },
  {
    id: 3,
    name: "B2B e-Collect",
    designation: "Easiest",
    image:
      "/b2b.jpg",
  },
  {
    id: 4,
    name: "Offline Payments",
    designation: "Oldest",
    image:
      "/money.avif",
  },
  {
    id: 5,
    name: "LinkPaisa",
    designation: "/contactless.jpg",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Payouts",
    designation: "virtual",
    image:
      "/3004573.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    (<div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>)
  );
}
