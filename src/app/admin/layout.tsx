'use client';

import { UserProvider, useUser } from '../../../context/UserContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard' },
  { label: 'Create Product', href: '/admin/create-product' },
  { label: 'All Products', href: '/admin/products' },
  { label: 'Create Post', href: '/admin/create-post' },
  { label: 'All Posts', href: '/admin/posts' },
  { label: 'Orders', href: '/admin/orders' },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const { logout } = useUser();
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <UserProvider>
      <div className="flex min-h-screen bg-gray-100">
        {/* Mobile Header with Hamburger */}
        <header className="flex items-center justify-between md:hidden w-full bg-white shadow p-4 fixed top-0 left-0 right-0 z-50">
          <div className="text-xl font-bold text-[#0481EC]">Admin Dashboard</div>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle menu"
            className="text-3xl text-[#0481EC]"
          >
            {sidebarOpen ? <FiX /> : <FiMenu />}
          </button>
        </header>

        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 ease-in-out
            md:translate-x-0
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Sidebar Header for md+ */}
          <div className="hidden md:block p-6 text-xl font-bold text-[#0481EC]">Admin Dashboard</div>

          {/* Nav Links */}
          <nav className="flex flex-col gap-2 px-4 pt-20 md:pt-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setSidebarOpen(false)} // Close sidebar on mobile after click
                className={`block px-4 py-2 rounded-lg ${
                  pathname === item.href
                    ? 'bg-[#0481EC] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="absolute bottom-10 left-4 right-4">
            <button
              onClick={logout}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded"
            >
              Log Out
            </button>
          </div>
        </aside>

        {/* Overlay when sidebar open on mobile */}
        {sidebarOpen && (
          <div
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          />
        )}

        {/* Main content */}
        <main className="flex-1 pt-16 md:pt-6 md:ml-64 p-6">
          {children}
        </main>
      </div>
    </UserProvider>
  );
}
