import React from 'react'
import styles from './Feature.module.css'

interface FeatureProps {
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    desc: string;
}

export default function Feature({Icon, title, desc}: FeatureProps) {
  return (
    <div className={styles.featureCard}>
        <div className={styles.featureCardIconDiv}><Icon className={styles.featureCardIcon}/></div>
        <div className={styles.featureTitle}>{title}</div>
        <div className={styles.featureDesc}>{desc}</div>
    </div>
  )
}
