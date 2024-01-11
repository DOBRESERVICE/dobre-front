import React, { useState } from 'react';

interface UseShownDataReturnType<T> {
  itemsToShow: T[];
  setShowAll: React.Dispatch<React.SetStateAction<boolean>>;
  showAll: boolean;
  shouldRenderExpandButton: boolean;
}

export function useShownData<T>(data: T[], shownCount: number): UseShownDataReturnType<T> {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data : data?.slice(0, shownCount);
  const shouldRenderExpandButton = data?.length > shownCount;

  return {
    itemsToShow,
    setShowAll,
    showAll,
    shouldRenderExpandButton,
  };
}
