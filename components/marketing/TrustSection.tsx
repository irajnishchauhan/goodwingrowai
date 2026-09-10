import React from 'react';
import { Bot, BarChart3, Zap, Target, MousePointerClick } from 'lucide-react';
import styles from './TrustSection.module.css';

const features = [
  { icon: <Bot size={18} className={styles.itemIcon} />, text: "AI-Powered" },
  { icon: <Target size={18} className={styles.itemIcon} />, text: "Performance Marketing" },
  { icon: <Zap size={18} className={styles.itemIcon} />, text: "Automation" },
  { icon: <BarChart3 size={18} className={styles.itemIcon} />, text: "Analytics" },
  { icon: <MousePointerClick size={18} className={styles.itemIcon} />, text: "Conversion Optimization" },
];

export const TrustSection = () => {
  return (
    <section className={styles.strip}>
      <div className={`container ${styles.container}`}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.item}>
            {feature.icon}
            {feature.text}
          </div>
        ))}
      </div>
    </section>
  );
};
