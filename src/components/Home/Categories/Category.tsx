import styles from './Category.module.css'
import React from 'react'

interface CategoryProps {
    type: string;
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export default function Category({ type, Icon }: CategoryProps) {
  return (
    <div className={styles.categoriesItem}>
            <Icon className={styles.categoriesIcon} />
            <span className={styles.categoriesType}>{type}</span>
    </div>
  )
}
