import { withAuth } from "../HOC/withAuth";
import { Cart } from "../pages/Cart";

export const ProtectedCart = withAuth(Cart);
