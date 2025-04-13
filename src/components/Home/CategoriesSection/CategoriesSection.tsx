import Header from "../Header/Header";
import SubHeader from "../SubHeader/SubHeader";
import styles from "./CategoriesSection.module.css";
import { VscDeviceMobile, VscVm, VscDeviceCamera } from "react-icons/vsc";
import { BsSmartwatch } from "react-icons/bs";         
import { LuGamepad, LuHeadphones  } from "react-icons/lu";
import Category from "../Categories/Category";
import { useScroll } from "../../../context/ScrollContext";
import React from 'react'

export default function CategoriesSection() {
  const { categoriesRef, scrollLeft, scrollRight } = useScroll();
  return (
    <section className={styles.categoriesSection}>
        <Header name="Categories" />
        <SubHeader name="Browse By Category"  onScrollLeft={() => scrollLeft('categories')} onScrollRight={() => scrollRight('categories')} arrows={true}/>
        <div className={styles.categoriesContainer} ref={categoriesRef}>
          <Category type="Mobile" Icon={VscDeviceMobile} />
          <Category type="Computers" Icon={VscVm} />
          <Category type="SmartWatch" Icon={BsSmartwatch} />
          <Category type="Camera" Icon={VscDeviceCamera} />
          <Category type="HeadPhones" Icon={LuHeadphones} />
          <Category type="Gaming" Icon={LuGamepad} />
        </div>
    </section>
  )
}
