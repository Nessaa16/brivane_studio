import Link from 'next/link';
import DropDown from './DropDown';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list">
      <li>
      <Link href="/">Home</Link>
      </li>
      <li className="menu-item-has-children">
        <Link href="#">About Us</Link>
        <DropDown>
          <ul>
            <li>
              <Link href="/team" onClick={() => setMobileToggle(false)}>
               Our Team
              </Link>
            </li>                      
            <li>
              <Link href="/faq" onClick={() => setMobileToggle(false)}>
              Faq
              </Link>
            </li> 
            <li>
              <Link href="/contact" onClick={() => setMobileToggle(false)}>
              Contact
              </Link>
            </li>                         
          </ul>
        </DropDown>
      </li>  

      <li>
        <Link href="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
      </li>

      <li>
        <Link href="/project" onClick={() => setMobileToggle(false)}>
        Project
        </Link>
      </li> 
    </ul>
  );
}
