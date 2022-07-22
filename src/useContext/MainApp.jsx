import { Navigate, Route, Routes } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProviders } from "./context/UserProviders"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { Navbar } from "./Navbar"


export const MainApp = () => {
  return (
    <UserProviders>
        <h1>Main</h1>
        <Navbar />
        <hr/>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/*" element={<Navigate to='/login'/>} />
        </Routes>
    </UserProviders>
  )
}
