'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { User, LogOut, Bell, Shield } from 'lucide-react';
import NotificationDropdown from './NotificationDropdown';

const ShieldLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <clipPath id="logo-shield">
      <path d="M18 2L4 7.8V17.5C4 25.8 10.3 33.4 18 35.2C25.7 33.4 32 25.8 32 17.5V7.8L18 2Z" />
    </clipPath>
    <rect x="4" y="2" width="14" height="34" clipPath="url(#logo-shield)" fill="rgba(238,39,55,0.18)" />
    <rect x="18" y="2" width="14" height="34" clipPath="url(#logo-shield)" fill="rgba(35,91,168,0.18)" />
    <path d="M18 2L4 7.8V17.5C4 25.8 10.3 33.4 18 35.2" fill="none" stroke="#ee2737" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M18 2L32 7.8V17.5C32 25.8 25.7 33.4 18 35.2" fill="none" stroke="#235ba8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="18" y1="2" x2="18" y2="35.2" stroke="rgba(255,255,255,0.10)" strokeWidth="0.8" />
    <line x1="11" y1="15" x2="25" y2="15" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="18" y1="12.5" x2="18" y2="25" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" strokeLinecap="round" />
    <line x1="11" y1="15" x2="11" y2="19.5" stroke="rgba(255,255,255,0.70)" strokeWidth="0.9" strokeLinecap="round" />
    <line x1="25" y1="15" x2="25" y2="19.5" stroke="rgba(255,255,255,0.70)" strokeWidth="0.9" strokeLinecap="round" />
    <path d="M8.5 19.5 Q11 22.5 13.5 19.5" stroke="rgba(255,255,255,0.70)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
    <path d="M22.5 19.5 Q25 22.5 27.5 19.5" stroke="rgba(255,255,255,0.70)" strokeWidth="0.9" fill="none" strokeLinecap="round" />
    <line x1="15.5" y1="25" x2="20.5" y2="25" stroke="rgba(255,255,255,0.85)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="18" cy="12" r="1.1" fill="#ffffff" />
  </svg>
);

const DotIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Asset Recovery', href: '/asset-recovery' },
  { name: 'Banking', href: '/banking' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { user, userProfile, logout, loading } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);
  const notificationRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
      localStorage.clear();
      sessionStorage.clear();
      window.location.href = '/';
    } catch {
      // silently fail
    } finally {
      setIsLoggingOut(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const fetchNotifications = useCallback(async () => {
    try {
      const response = await fetch(`/api/user-notifications?referralCode=${userProfile?.userCode}`);
      const result = await response.json();
      if (result.success) {
        setUnreadCount(result.data.filter((n: { read: boolean }) => !n.read).length);
      }
    } catch {
      // silently fail
    }
  }, [userProfile?.userCode]);

  useEffect(() => {
    if (userProfile?.userCode) {
      fetchNotifications();
      const interval = setInterval(fetchNotifications, 30000);
      return () => clearInterval(interval);
    }
  }, [userProfile?.userCode, fetchNotifications]);

  const handleMarkAsRead = async (notificationId: string) => {
    try {
      await fetch('/api/notifications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: notificationId, read: true }),
      });
      setUnreadCount(prev => Math.max(0, prev - 1));
    } catch {
      // silently fail
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className={`mx-auto h-[60px] mobile:h-[68px] rounded-full flex items-center justify-between transition-all duration-500 ${isScrolled
          ? 'max-w-[1200px] bg-[#0d1b2e] shadow-[0_8px_32px_rgba(238,39,55,0.12),0_4px_16px_rgba(35,91,168,0.14),0_2px_8px_rgba(0,0,0,0.18)] px-[18px] mobile:px-[28px] mobile:pl-[24px]'
          : 'max-w-full bg-transparent shadow-none px-6 mobile:px-10'
        }`}>
        <Link href="/" className="flex items-center gap-[9px] mobile:gap-[11px] shrink-0" aria-label="Nexus Banking Home">
          <ShieldLogo className="w-[30px] h-[30px] mobile:w-[36px] mobile:h-[36px] shrink-0" />
          <div className="flex flex-col leading-none gap-[2px]">
            <span className="text-[14px] mobile:text-[17px] font-extrabold tracking-[0.20em] text-white uppercase leading-none">Nexus</span>
            <span className="text-[7.5px] mobile:text-[9px] font-medium tracking-[0.36em] text-[#cfd6e0] uppercase leading-none">Banking</span>
          </div>
        </Link>

        <ul className="hidden mobile:flex items-center gap-[38px] absolute left-1/2 -translate-x-1/2 list-none">
          {navItems.map(item => (
            <li key={item.name} className="flex flex-col items-center relative">
              <Link
                href={item.href}
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase no-underline pb-[2px] transition-colors duration-200 ${isActive(item.href) ? 'text-primary-500' : 'text-white/80 hover:text-white'
                  }`}
              >
                {item.name}
              </Link>
              {isActive(item.href) && (
                <span className="w-[4px] h-[4px] rounded-full bg-primary-500 mt-[4px] shadow-[0_0_6px_rgba(238,39,55,0.6)]" />
              )}
              {!isActive(item.href) && (
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-white/40 transition-all duration-250 group-hover:w-full" />
              )}
            </li>
          ))}
        </ul>

        <div className="hidden mobile:flex items-center gap-[10px] shrink-0">
          {user ? (
            <>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-semibold tracking-[0.10em] uppercase px-[22px] h-[40px] bg-transparent border-[1.5px] border-white/55 text-white/88 hover:bg-white/8 hover:border-white/85 hover:text-white hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-180 no-underline whitespace-nowrap"
              >
                Dashboard
              </Link>

              <div className="relative" ref={notificationRef}>
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative w-[40px] h-[40px] rounded-full border-[1.5px] border-white/20 flex items-center justify-center text-white/70 hover:bg-white/8 hover:border-white/40 hover:text-white transition-all duration-180"
                >
                  <Bell className="w-[15px] h-[15px]" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-[2px] -right-[2px] bg-primary-500 text-white text-[9px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-[3px] shadow-[0_0_8px_rgba(238,39,55,0.5)]">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                  )}
                </button>
                {showNotifications && (
                  <NotificationDropdown
                    userReferralCode={userProfile?.userCode || ''}
                    isOpen={showNotifications}
                    onClose={() => setShowNotifications(false)}
                    unreadCount={unreadCount}
                    onMarkAsRead={handleMarkAsRead}
                  />
                )}
              </div>

              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-[8px] rounded-full border-[1.5px] border-white/15 pl-[6px] pr-[14px] h-[40px] hover:bg-white/8 hover:border-white/30 transition-all duration-180"
                >
                  <div className="w-[28px] h-[28px] rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-[11px] border border-white/20">
                    {userProfile?.firstName?.[0] || user.email?.[0]?.toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-white/85 tracking-[0.04em]">{userProfile?.firstName || 'Client'}</span>
                </button>
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-[220px] bg-[#0d1b2e] border border-white/10 rounded-[16px] py-2 z-50 shadow-[0_16px_48px_rgba(0,0,0,0.4)] overflow-hidden">
                    <div className="px-4 py-3 border-b border-white/6">
                      <p className="text-sm font-bold text-white">{userProfile?.firstName} {userProfile?.lastName}</p>
                      <p className="text-[11px] text-white/40">{user.email}</p>
                    </div>
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-4 py-3 text-[12px] text-white/70 hover:text-white hover:bg-white/5 transition-all duration-150"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <User className="w-[14px] h-[14px]" />
                      <span>Client Dashboard</span>
                    </Link>
                    <button
                      onClick={() => { setShowLogoutModal(true); setShowUserMenu(false); }}
                      className="flex items-center gap-3 px-4 py-3 text-[12px] text-primary-500 hover:bg-primary-500/10 w-full text-left transition-all duration-150"
                    >
                      <LogOut className="w-[14px] h-[14px]" />
                      <span>Secure Logout</span>
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-semibold tracking-[0.10em] uppercase px-[22px] h-[40px] bg-transparent border-[1.5px] border-white/55 text-white/88 hover:bg-white/8 hover:border-white/85 hover:text-white hover:-translate-y-[1px] hover:shadow-[0_4px_14px_rgba(0,0,0,0.2)] active:translate-y-0 active:shadow-none transition-all duration-180 no-underline whitespace-nowrap"
              >
                Client Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-bold tracking-[0.10em] uppercase px-[22px] h-[40px] bg-primary-500 border-[1.5px] border-primary-500 text-white hover:bg-[#f5404f] hover:border-[#f5404f] hover:-translate-y-[1px] hover:shadow-[0_4px_20px_rgba(238,39,55,0.40)] active:translate-y-0 active:shadow-none transition-all duration-180 no-underline whitespace-nowrap"
              >
                Open Account
              </Link>
            </>
          )}
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile:hidden bg-none border-none cursor-pointer p-[8px] flex flex-col gap-[5px] items-end rounded-[8px] hover:bg-primary-500/10 transition-all duration-200"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`block h-[2px] bg-primary-500 rounded-[2px] transition-all duration-300 origin-center ${isMenuOpen ? 'w-[20px] translate-y-[7px] rotate-45' : 'w-[22px]'}`} />
          <span className={`block h-[2px] bg-primary-500 rounded-[2px] transition-all duration-300 ${isMenuOpen ? 'opacity-0 w-0' : 'w-[16px]'}`} />
          <span className={`block h-[2px] bg-primary-500 rounded-[2px] transition-all duration-300 origin-center ${isMenuOpen ? 'w-[20px] -translate-y-[7px] -rotate-45' : 'w-[20px]'}`} />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="mobile:hidden mt-[10px] bg-[#0d1b2e] rounded-[20px] overflow-hidden shadow-[0_16px_48px_rgba(13,27,46,0.20),0_6px_20px_rgba(238,39,55,0.08),0_2px_8px_rgba(0,0,0,0.12)]">
          <div className="py-[8px] pb-[24px]">
            <ul className="list-none py-[4px]">
              {navItems.map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`flex items-center w-full px-[22px] py-[16px] no-underline text-[11px] font-semibold tracking-[0.15em] uppercase border-b border-white/5 transition-all duration-200 ${isActive(item.href)
                        ? 'text-primary-500 pl-[28px]'
                        : 'text-white/75 hover:text-white hover:bg-white/4 hover:pl-[28px]'
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isActive(item.href) && (
                      <span className="w-[5px] h-[5px] rounded-full bg-primary-500 shrink-0 mr-[12px] shadow-[0_0_8px_rgba(238,39,55,0.65)]" />
                    )}
                    {item.name}
                    <DotIcon />
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-[1px] bg-white/7 mx-[22px] my-[4px]" />
            <div className="px-[22px] pt-[20px] flex flex-col gap-[10px]">
              {user ? (
                <>
                  <div className="px-[14px] py-[14px] bg-white/5 rounded-[12px] border border-white/8">
                    <div className="flex items-center gap-3">
                      <div className="w-[36px] h-[36px] rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-[12px] border border-white/20">
                        {userProfile?.firstName?.[0] || user.email?.[0]?.toUpperCase()}
                      </div>
                      <div>
                        <p className="text-[13px] font-bold text-white">{userProfile?.firstName} {userProfile?.lastName}</p>
                        <p className="text-[11px] text-white/40">{user.email}</p>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/dashboard"
                    className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-bold tracking-[0.12em] uppercase h-[48px] w-full bg-transparent border-[1.5px] border-white/40 text-white/85 hover:bg-white/7 hover:border-white/75 hover:text-white transition-all duration-180 no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { setShowLogoutModal(true); setIsMenuOpen(false); }}
                    className="flex items-center justify-center gap-[9px] rounded-full font-sans text-[11.5px] font-bold tracking-[0.16em] uppercase h-[48px] w-full border-[1.5px] border-primary-500/55 bg-primary-500/7 text-primary-500 hover:bg-primary-500/15 hover:border-primary-500/85 transition-all duration-180 cursor-pointer"
                  >
                    <LogOut className="w-[14px] h-[14px]" />
                    Secure Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-bold tracking-[0.12em] uppercase h-[48px] w-full bg-transparent border-[1.5px] border-white/40 text-white/85 hover:bg-white/7 hover:border-white/75 hover:text-white transition-all duration-180 no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Client Login
                  </Link>
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-full font-sans text-[11.5px] font-bold tracking-[0.12em] uppercase h-[48px] w-full bg-primary-500 border-[1.5px] border-primary-500 text-white hover:bg-[#f5404f] hover:shadow-[0_4px_20px_rgba(238,39,55,0.45)] transition-all duration-180 no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Open Account
                  </Link>
                </>
              )}
            </div>
            <div className="flex items-center gap-[10px] px-[22px] pt-[20px]">
              <div className="flex-1 h-[1px] bg-white/7" />
              <span className="text-[8.5px] font-semibold tracking-[0.22em] uppercase text-white/35 whitespace-nowrap">Trusted. Secure. Confidential.</span>
              <div className="flex-1 h-[1px] bg-white/7" />
            </div>
          </div>
        </div>
      )}

      {showLogoutModal && (
        <div className="fixed inset-0 bg-[#0d1b2e]/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0d1b2e] rounded-[20px] border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.5)] p-6 max-w-md w-full">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-[48px] h-[48px] rounded-full bg-primary-500/10 flex items-center justify-center">
                <Shield className="w-[22px] h-[22px] text-primary-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Secure Logout</h3>
                <p className="text-[13px] text-white/50">End your secure session?</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLogoutModal(false)}
                disabled={isLoggingOut}
                className="flex-1 px-4 py-3 rounded-full border border-white/15 text-white/70 hover:bg-white/8 font-semibold text-[12px] tracking-[0.06em] transition-all duration-150"
              >
                Cancel
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className="flex-1 px-4 py-3 rounded-full bg-primary-500 text-white font-bold text-[12px] tracking-[0.06em] hover:bg-[#f5404f] shadow-[0_4px_16px_rgba(238,39,55,0.3)] transition-all duration-150 flex items-center justify-center gap-2"
              >
                {isLoggingOut && <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />}
                <span>{isLoggingOut ? 'Ending Session...' : 'Logout Now'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
