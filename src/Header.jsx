
function Header(){
    return(
<nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 shadow">
    <a href="index.html" class="navbar-brand d-flex align-items-center px-4 px-lg-5">
        <i class="fa fa-book me-3"></i>
        <h2 class="m-0 text-primary"><i class="fa fa-book me-3"></i>eLEARNING</h2>
    </a>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0 me-lg-5 me-xxl-0">
            <a class="nav-item nav-link active pe-4">HOME</a>
            <a class="nav-item nav-link pe-4">ABOUT</a>
            <a class="nav-item nav-link pe-4">COURSES</a>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">PAGES</a>
                <div class="dropdown-menu fade-down m-0">
                    <a class="dropdown-item">Our Team</a>
                    <a class="dropdown-item">Testimonial</a>
                    <a class="dropdown-item">404 Page</a>
                </div>
            </div>
            <a class="nav-item nav-link pe-4">CONTACT</a>
        </div>
    <button class="btn btn-primary p-xxl-4 p-lg-2 d-none d-lg-flex d-flex justify-content-center" style={{width:"15%"}}>
        <h6 class="me-2">Join Now</h6>  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-right-short " viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
    </button>
    </div>
</nav>
    )
}

export default Header;