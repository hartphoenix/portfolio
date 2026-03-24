import styles from './MyceliumBg.module.css'

export default function MyceliumBg() {
  return (
    <svg
      className={styles.svg}
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main trunk lines — thicker, slower animation */}
      <path className={`${styles.strand} ${styles.thick}`} d="M-20,400 C150,380 280,320 400,350 S600,420 750,380 S950,300 1220,340" style={{ animationDelay: '0s' }} />
      <path className={`${styles.strand} ${styles.thick}`} d="M-20,600 C100,580 250,550 380,580 S550,630 700,590 S900,540 1220,570" style={{ animationDelay: '2s' }} />

      {/* Secondary branches */}
      <path className={styles.strand} d="M400,350 C420,280 480,220 530,180" style={{ animationDelay: '3s' }} />
      <path className={styles.strand} d="M400,350 C430,400 470,450 520,480" style={{ animationDelay: '4s' }} />
      <path className={styles.strand} d="M750,380 C770,320 810,270 860,240" style={{ animationDelay: '1s' }} />
      <path className={styles.strand} d="M750,380 C730,440 700,500 680,550" style={{ animationDelay: '5s' }} />
      <path className={styles.strand} d="M380,580 C360,520 340,460 310,410" style={{ animationDelay: '2.5s' }} />
      <path className={styles.strand} d="M700,590 C720,640 750,690 790,730" style={{ animationDelay: '3.5s' }} />

      {/* Fine tendrils — thinnest, fastest */}
      <path className={`${styles.strand} ${styles.thin}`} d="M530,180 C550,140 580,110 620,90" style={{ animationDelay: '6s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M530,180 C560,190 600,200 640,190" style={{ animationDelay: '7s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M520,480 C540,510 570,530 610,540" style={{ animationDelay: '4.5s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M860,240 C890,220 920,190 960,180" style={{ animationDelay: '5.5s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M680,550 C650,580 620,610 600,650" style={{ animationDelay: '6.5s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M310,410 C280,380 240,360 200,350" style={{ animationDelay: '7.5s' }} />
      <path className={`${styles.strand} ${styles.thin}`} d="M790,730 C810,750 840,760 880,755" style={{ animationDelay: '8s' }} />

      {/* Small nodes at branch points */}
      <circle className={styles.node} cx="400" cy="350" r="3" style={{ animationDelay: '1s' }} />
      <circle className={styles.node} cx="750" cy="380" r="3" style={{ animationDelay: '2s' }} />
      <circle className={styles.node} cx="380" cy="580" r="2.5" style={{ animationDelay: '3s' }} />
      <circle className={styles.node} cx="700" cy="590" r="2.5" style={{ animationDelay: '4s' }} />
      <circle className={styles.node} cx="530" cy="180" r="2" style={{ animationDelay: '5s' }} />
      <circle className={styles.node} cx="860" cy="240" r="2" style={{ animationDelay: '6s' }} />
    </svg>
  )
}
