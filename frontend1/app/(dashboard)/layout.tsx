'use client';

import React from 'react';
import { DashboardLayout } from '../../components/layouts/DashboardLayout';
import AuthWrapper from '../../components/AuthWrapper';

const DashboardGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </AuthWrapper>
  );
};

export default DashboardGroupLayout;