import React from 'react';
import Forbidden from '@/pages/Forbidden/components/BasicForbidden'

export default function() {
  return (
    <div className="NotFound-page">
      {/* 404 报错提示 */}
      <Forbidden />
    </div>
  );
}
