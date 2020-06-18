import React from 'react';
import BasicError from '@/pages/Error/components/BasicError'

export default function() {
  return (
    <div className="NotFound-page">
      {/* 404 报错提示 */}
      <BasicError />
    </div>
  );
}
