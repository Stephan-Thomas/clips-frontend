"use client";

import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const DUMMY_USER = {
  name: "Alex",
  email: "alex@clipcash.ai",
  avatar: "/avatar.png",
};

export default function DashboardHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Sticky Header with Enhanced Glassmorphism for Active Processing State */}
      <header className="sticky top-0 z-50 mb-8 border-b border-white/10 bg-[#0A0A0A]/90 backdrop-blur-xl backdrop-saturate-150">
        <div className="flex items-center justify-between gap-4 px-6 py-4">
          {/* Left: Navigation Links - Always Accessible */}
          <nav className="flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <a
              href="/dashboard"
              className="text-sm font-medium text-white transition-all duration-200 hover:text-[#00FF9D] focus:outline-none focus:ring-2 focus:ring-[#00FF9D]/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded px-2 py-1"
              aria-current="page"
            >
              Dashboard
            </a>
            <a
              href="/clips"
              className="text-sm font-medium text-[#94A3B8] transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#00FF9D]/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A] rounded px-2 py-1"
            >
              My Clips
            </a>
          </nav>

          {/* Right: High-Visibility CTA and Profile */}
          <div className="flex items-center gap-4">
            {/* Upgrade Plan Button - Enhanced High Visibility CTA */}
            <button
              type="button"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-[#00FF9D] to-[#00E68A] px-5 py-2.5 text-sm font-semibold text-black shadow-[0_8px_24px_rgba(0,255,157,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_32px_rgba(0,255,157,0.5)] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#00FF9D] focus:ring-offset-2 focus:ring-offset-[#0A0A0A] active:scale-100"
              aria-label="Upgrade to premium plan"
            >
              <span className="relative z-10">Upgrade Plan</span>
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </button>

            {/* User Profile Dropdown - Top Right */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#00FF9D]/50 focus:ring-offset-2 focus:ring-offset-[#0A0A0A]"
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
                aria-label="User menu"
              >
                <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-[#1F2937] to-[#111827] ring-2 ring-white/10">
                  <Image
                    src={DUMMY_USER.avatar}
                    alt={`${DUMMY_USER.name}'s profile picture`}
                    fill
                    sizes="32px"
                    className="object-cover"
                  />
                </div>
                <ChevronDown
                  className={`h-4 w-4 text-[#94A3B8] transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown Menu with Enhanced Glassmorphism */}
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 origin-top-right animate-in fade-in slide-in-from-top-2 rounded-xl border border-white/10 bg-[#1A1A1A]/95 shadow-2xl backdrop-blur-xl backdrop-saturate-150"
                  role="menu"
                  aria-orientation="vertical"
                >
                  {/* User Info Section */}
                  <div className="border-b border-white/10 px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full bg-gradient-to-br from-[#1F2937] to-[#111827] ring-2 ring-white/10">
                        <Image
                          src={DUMMY_USER.avatar}
                          alt={DUMMY_USER.name}
                          fill
                          sizes="40px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-white truncate">
                          {DUMMY_USER.name}
                        </p>
                        <p className="text-xs text-[#94A3B8] truncate">
                          {DUMMY_USER.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Menu Items */}
                  <div className="py-2">
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-[#94A3B8] transition-all duration-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                      onClick={() => setIsDropdownOpen(false)}
                      role="menuitem"
                    >
                      <User className="h-4 w-4" />
                      <span>Profile</span>
                    </button>
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-[#94A3B8] transition-all duration-200 hover:bg-white/10 hover:text-white focus:bg-white/10 focus:text-white focus:outline-none"
                      onClick={() => setIsDropdownOpen(false)}
                      role="menuitem"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </button>
                    <div className="my-1 border-t border-white/10" />
                    <button
                      className="flex w-full items-center gap-3 px-4 py-2.5 text-sm text-[#EF4444] transition-all duration-200 hover:bg-red-500/10 hover:text-[#FF6B6B] focus:bg-red-500/10 focus:text-[#FF6B6B] focus:outline-none"
                      onClick={() => setIsDropdownOpen(false)}
                      role="menuitem"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Welcome Section */}
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-semibold leading-tight text-white">
          Welcome back, {DUMMY_USER.name}
        </h1>
        <p className="text-zinc-400">
          Your AI is currently processing 3 new viral clips from your last stream.
        </p>
      </div>
    </>
  );
}