export const populateSort = (dataList) => {
  const stateList = dataList.sort(
    (view1, view2) => parseFloat(view2.views) - parseFloat(view1.views)
  );
  return stateList;
};

export const markSort = (dataList) => {
  const stateList = dataList.sort(
    (view1, view2) => parseFloat(view2.marks) - parseFloat(view1.marks)
  );
  return stateList;
};
