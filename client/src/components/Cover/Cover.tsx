import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { userStore } from "@/store/store";
import CoverWrapper from "@/styled/Cover/CoverWrapper";

const Cover = observer((): ReactElement => {
  return (
    <CoverWrapper>
      <h1>{userStore.fullname}</h1>
    </CoverWrapper>
  );
});

export default Cover;
