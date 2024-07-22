import "./Navbar.css";

function Navbar() {
  return (
    <nav class="pa3 pa1-ns fixed top-0 left-0 w-100 z-999 ">
      <a
        class="link dim black b f1 f-headline-ns tc db mb3 mb4-ns"
        href="#"
        title="Home"
      >
        לְך👠לָך
      </a>
      <div class="tc pb2">
        <a class="link dim black f6 f4-ns dib mr3" href="#" title="Home">
          Home
        </a>
        <a class="link dim black f6 f4-ns dib mr3" href="#" title="Contact">
          Contact
        </a>
        <a class="link dim black f6 f4-ns dib mr3 " href="#" title="Shop">
          <i class="fa fa-shopping-basket" aria-hidden="true"></i>
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
