import { Outlet } from "react-router-dom"
import { Header } from "../Header"
import { Footer } from "../Footer"

export const Layout = () => {
  return (
    <>
        <Header />
        <main className="h-full" >
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
