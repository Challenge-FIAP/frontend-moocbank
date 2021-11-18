import Menu from "../components/Menu"
import Footer from "../components/Footer"

const Admin = () => {
  return (
    <div className="w-100 h-100 d-flex flex-column">
      <Menu admin={true} />
      <div className="flex-grow-1 container d-flex flex-wrap w-100">
        ADMIN
      </div>
      <Footer />
    </div>
  )
}

export default Admin