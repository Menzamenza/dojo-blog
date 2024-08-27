const Navbar= ()=>{
    return (
        <nav className="navbar">
            <div>
                <h1>The Menza Blog</h1>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/about" style={{
                    color:'white',
                    backgroundColor:'#f1356d',
                    borderRadius:'5px',
                    padding:'10px 20px',
                    textDecoration:'none',
                    fontWeight:'bold',
                    transition:'all 0.3s ease-in-out'   
                }}>New Blog </a>
            </div>
        </nav>
    )
}
export default Navbar;