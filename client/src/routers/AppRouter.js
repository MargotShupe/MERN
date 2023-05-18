import { Route, Routes } from "react-router-dom";
import AccountPage from "../pages/AccountPage";
import UsersPage from "../pages/admin/UsersPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import ProjectPage from "../pages/ProjectPage";
import ProjectsPage from "../pages/ProjectsPage";
import RegisterPage from "../pages/RegisterPage";
import Layout from "../components/layouts/Layout";

function AppRouter() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/project/:projectId" element={<ProjectPage />} />
          <Route path="/admin/users" element={<UsersPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default AppRouter;

//line 14 is a route that is going to show us on project in specific showing all the task for this project

//line 17 will be modify later as 404 error page
