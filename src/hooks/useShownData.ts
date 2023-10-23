import { useState } from 'react';

export function useShownData(data: any[], shownCount: number) {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? data : data.slice(0, shownCount);
  const shouldRenderExpandButton = data.length > shownCount && !showAll;
  const handleShowAll = () => {
    setShowAll(true);
  };

  return {
    itemsToShow,
    handleShowAll,
    shouldRenderExpandButton,
  };
}
