import { ReactElement } from "react";

const ProtectedRouteError = (): ReactElement => {
  return (
    <div>
      <h1>Этот раздел доступен только для авторизированных пользователей!</h1>
    </div>
  );
};

export default ProtectedRouteError;
