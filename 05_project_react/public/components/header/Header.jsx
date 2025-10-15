// import "../style/Header.css" this make collision
import style from "../header/header.module.css"
const Header = () => {
  return (
    <div className={style.header}>
      <h1>Tapsir aman</h1>
      <button className={style.btn}>login</button>
    </div>
  )
}

export default Header
