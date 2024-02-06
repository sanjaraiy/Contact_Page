import styles from './NavBar.module.css'

function NavBar() {
  console.log(styles);
  return (
    <nav className={`${styles.navbar} container`}>
        <div className='logo'>
            <img src="/Images/logo.png" alt="logo" />
        </div>
        <ul className={`${styles.grow_list}`}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default NavBar