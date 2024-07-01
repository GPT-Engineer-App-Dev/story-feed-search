import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonPlaceholder = () => {
  return (
    <div>
      <Skeleton count={10} />
    </div>
  );
};

export default SkeletonPlaceholder;