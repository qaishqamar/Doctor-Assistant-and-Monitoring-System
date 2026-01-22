'use client';

import React from 'react';
import DashboardLayoutComponent from '../../components/layouts/DashboardLayout';
import AuthWrapper from '../../components/AuthWrapper';

const DashboardGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthWrapper>
      <DashboardLayoutComponent>
        {children}
      </DashboardLayoutComponent>
    </AuthWrapper>
  );
};

export default DashboardGroupLayout;