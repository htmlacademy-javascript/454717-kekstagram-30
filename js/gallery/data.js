const applyRandomFilter = (picturesData, itemLimit = 10) => {
  const compare = () => 0.5 - Math.random();
  return picturesData.toSorted(compare).slice(0, itemLimit);
};

const applyDiscussedFilter = (picturesData) => {
  const compare = (thumbnailA, thumbnailB) => thumbnailB.comments.length - thumbnailA.comments.length;
  return picturesData.toSorted(compare);
};

export {applyRandomFilter, applyDiscussedFilter};
