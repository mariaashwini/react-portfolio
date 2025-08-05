import Sidebar from "./Sidebar";

const Layout = ({ children }) => (
  <>
    <Sidebar/>
    <main>{children}</main>
  </>
);

export default Layout;