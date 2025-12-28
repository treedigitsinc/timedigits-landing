"use client";
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface WordConfig {
  text: string;
  color: string;
  cursorColor?: string;
}

export const RotatingText = ({
  words,
  suffix = "time.",
  className,
  interval = 3000,
}: {
  words: (string | WordConfig)[];
  suffix?: string;
  className?: string;
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedChars, setDisplayedChars] = useState(0);
  const [phase, setPhase] = useState<"typing" | "waiting" | "deleting">("typing");

  // Normalize words to WordConfig format
  const normalizedWords = useMemo(() => {
    if (!words || words.length === 0) {
      return [{ text: "Track", color: "text-teal-400", cursorColor: "bg-teal-400" }];
    }
    return words.map(w =>
      typeof w === "string"
        ? { text: w, color: "text-teal-400", cursorColor: "bg-teal-400" }
        : { ...w, cursorColor: w.cursorColor || w.color.replace("text-", "bg-") }
    );
  }, [words]);

  const currentWord = normalizedWords[currentIndex];

  // Typing animation
  useEffect(() => {
    if (phase !== "typing") return;
    if (displayedChars >= currentWord.text.length) {
      setPhase("waiting");
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedChars(d => d + 1);
    }, 80);
    return () => clearTimeout(timeout);
  }, [phase, displayedChars, currentWord.text.length]);

  // Waiting before delete
  useEffect(() => {
    if (phase !== "waiting") return;

    const timeout = setTimeout(() => {
      setPhase("deleting");
    }, interval);
    return () => clearTimeout(timeout);
  }, [phase, interval]);

  // Deleting animation
  useEffect(() => {
    if (phase !== "deleting") return;
    if (displayedChars <= 0) {
      // Move to next word
      setCurrentIndex(i => (i + 1) % normalizedWords.length);
      setPhase("typing");
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedChars(d => d - 1);
    }, 50);
    return () => clearTimeout(timeout);
  }, [phase, displayedChars, normalizedWords.length]);

  const displayedText = currentWord.text.slice(0, displayedChars);

  return (
    <span className={cn("inline-flex items-baseline", className)}>
      <span className="relative">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className={cn("transition-colors duration-300", currentWord.color)}
        >
          {displayedText}
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className={cn(
            "inline-block w-[3px] h-[0.9em] ml-0.5 align-baseline translate-y-[0.1em] transition-colors duration-300",
            currentWord.cursorColor
          )}
        />
      </span>
      <span className="ml-[0.3em]">{suffix}</span>
    </span>
  );
};
