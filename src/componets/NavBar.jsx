 {/*
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useScrollPosition } from "../Hooks/scrollPosition";

const NavBar = () => {
  const [NavBarOpen, setNavBarOpen] = useState(false);
  const [ windowDimension, setWindowDimension ] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectarDimension = () =>{
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectarDimension)
    windowDimension.width > 800 && setNavBarOpen(false)
    return () => {
      window.removeEventListener('resize', detectarDimension)
    }
  }, [windowDimension])

  const listas = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Servicios",
    },
    {
      id: 3,
      link: "ComoTrabajamos",
    },
    {
      id: 4,
      link: "Beneficios",
    },
  ];

  const scrollPosition = useScrollPosition()
  return (
    <div className={NavBarOpen  
      ? styles.navOpen
      : scrollPosition > 0
      ? styles.NavOnScroll
      : styles.NavBar}>
      {!NavBarOpen && <p className={styles.logo}>KEKIN | Digital</p>}
      {!NavBarOpen && windowDimension.width < 800 ? (
        <MdMenu 
        color="#f1f1f1"
        onClick={() => setNavBarOpen(!NavBarOpen)} 
        size={25}
       />
      ) : (windowDimension.width < 800 && (
        <MdClose
         onClick={() => setNavBarOpen(!NavBarOpen)}
         color="#f1f1f1"
         size={25}
        />
       )
      )}


      {windowDimension.width > 800 && (
        <ul className={styles.listasContenedor}>
          {listas.map((x) => (
            <li key={x.id}>
              <Link
                onClick={() => setNavBarOpen(false)}
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
                >{x.link === "ComoTrabajamos" ? "Como Trabajamos" : x.link}
              </Link>
              <div className={styles.border}></div>
            </li>
          ))}
          <Link onClick={() => setNavBarOpen(false)}
                to={"contacto"}
                smooth
                duration={500}
                className={styles.contactoLink}>
                  Contacto
          </Link>
        </ul>
     )} 
    </div>
  );
};

export default NavBar;*/}
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useScrollPosition } from "../Hooks/scrollPosition";

const NavBar = () => {
  // Renombramos la variable a navBarOpen
  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const detectarDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectarDimension);

    if (windowDimension.width > 800) {
      setNavBarOpen(false); 
    }

    return () => {
      window.removeEventListener("resize", detectarDimension);
    };
  }, [windowDimension]);

  const listas = [
    {
      id: 1,
      link: "Inicio",
    },
    {
      id: 2,
      link: "Servicios",
    },
    {
      id: 3,
      link: "ComoTrabajamos",
    },
    {
      id: 4,
      link: "Beneficios",
    },
  ];

  const scrollPosition = useScrollPosition();

  return (
    <div
      className={
        navBarOpen
          ? styles.navOpen
          : scrollPosition > 0
          ? styles.NavOnScroll
          : styles.NavBar
      }
    >
      {!navBarOpen && <p className={styles.logo}>KEKIN | Digital</p>}

      {windowDimension.width < 800 && (
        <button
          onClick={() => setNavBarOpen(!navBarOpen)}
          className={styles.menuButton}
          aria-label={navBarOpen ? "Cerrar Menú" : "Abrir Menú"}
        >
          {navBarOpen ? (
            <MdClose size={25} />
          ) : (
            <MdMenu size={25} />
          )}
        </button>
      )}

  
      {(navBarOpen || windowDimension.width > 800) && (
        <ul className={styles.listasContenedor}>
          {listas.map((x) => (
            <li  key={x.id}>
              <Link
                onClick={() => setNavBarOpen(false)} 
                to={x.link}
                smooth
                duration={500}
                className={styles.navLink}
              >
                {x.link === "ComoTrabajamos" ? "Como Trabajamos" : x.link}
              </Link>
              <div className={styles.border}></div>
            </li>
          ))}
      
        </ul>
      )}
    </div>
  );
};

export default NavBar;
