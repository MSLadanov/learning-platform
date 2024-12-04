import { observer } from "mobx-react-lite";
import { ReactElement } from "react";
import { userStore } from "@/store/store";

const Cover = observer((): ReactElement => {
  return (
    <div>
      <h1>{userStore.fullname}</h1>
    </div>
  );
});

export default Cover