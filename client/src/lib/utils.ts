import type { DictionaryEntry } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isStringArray = (arr: unknown): arr is string[] =>
  Array.isArray(arr) &&
  arr.length > 0 &&
  arr.every((item) => typeof item === "string");

export const isDictionaryEntry = (
  entry: string | { shortdef: string[] }
): entry is DictionaryEntry => typeof entry === "object" && entry !== null;
