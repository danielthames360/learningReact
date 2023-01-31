export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
            <i className="fas fa-calendar-alt me-2"></i>
            Daniel
        </span>

        <button className="btn btn-outline-danger">
            <i className="fas fa-sign-out-alt me-1"></i>
            <span>Logout</span>
        </button>
    </div>
  )
}
