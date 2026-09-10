import React from 'react';
import { Target, Zap, Cpu, BarChart3 } from 'lucide-react';
import styles from './TrustSection.module.css';

const features = [
  {
    icon: <Target size={24} />,
    title: "Strategy",
    description: "Data-backed growth models."
  },
  {
    icon: <Zap size={24} />,
    title: "Execution",
    description: "Rapid campaign deployment."
  },
  {
    icon: <Cpu size={24} />,
    title: "Automation",
    description: "AI-driven workflows."
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Analytics",
    description: "Real-time revenue tracking."
  }
];

export const TrustSection = () => {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <p className={styles.label}>Built for businesses that want more than marketing.</p>
        
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
