import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import { useEffect } from "react";

import Spinner from "./Spinner";
import styled from "styled-components";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ProtectedRoute({ children }) {
  const { user, isLoading, isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isLoading, navigate, isAuthenticated]);

  if (isLoading)
    return (
      <FullPage>
        <Spinner />;
      </FullPage>
    );

  if (user?.role === "authenticated") return children;
}

export default ProtectedRoute;
