import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../redux/store/department-slice";

const useGoback = () => {
  const dispatch = useDispatch();
  const olderBack = useSelector((state) => state.idChange.universalBack);
  const onBack = () => {
    const olderChildList = olderBack.ChildList;
    olderChildList?.pop();
    const olderChildListAfterBack = olderChildList;
    const olderChildHeight = olderBack.childHeight - 1;
    dispatch(
      idChangeAction.workUniversalBack({
        childList: olderChildListAfterBack,
        childHeight: olderChildHeight,
      })
    );
  };

  const onAddBack = (data) => {
    const olderChildList = olderBack.ChildList ?? [];
    let olderChildHeight = olderBack.childHeight;
    if (olderChildHeight === 0) olderChildHeight = 0;
    else olderChildHeight += 1;
    // console.info("this is go-back", olderBack);
    // console.info("this is go-olderChildList", olderChildList);
    olderChildList?.push(data);
    // console.info("this is after-olderChildList", olderChildList);

    dispatch(
      idChangeAction.workUniversalBack({
        childList: olderChildList,
        childHeight: olderChildHeight,
      })
    );
  };

  return { onBack, onAddBack };
};

export { useGoback };
