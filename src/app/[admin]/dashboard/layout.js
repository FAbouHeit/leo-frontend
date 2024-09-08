// app/admin/dashboard/layout.js
"use client"; // Ensures it's a client component

import MiniDrawer from '@/components/Drawer';
import React from 'react';

export default function DashboardLayout({ children }) {
  return (
    <MiniDrawer>
      {children}
    </MiniDrawer>
  );
}
