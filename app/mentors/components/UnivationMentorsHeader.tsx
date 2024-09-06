import Image from 'next/image';
import Link from 'next/link';
import styles from './UnivationMentorsHeader.module.css';

export default function UnivationMentorsHeader() {
  return (
    <header className={styles['univation-mentors-header']}>
      <div className={styles['header-content']}>
        <div className={styles['left-section']}>
          <Image src="/logos/univation-blue-logo.svg" alt="Univation" width={160} height={21} />
          <nav className={styles['nav-menu']}>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/mentors">Mentors</Link></li>
              <li><Link href="/professors">Professors</Link></li>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/tools">Tools</Link></li>
              <li><Link href="/mentors/control-panel">Control Panel</Link></li>
            </ul>
          </nav>
        </div>
        <div className={styles['right-section']}>
          <Link href="/chat">
            <Image src="/chat-icon.png" alt="Chat" width={24} height={24} />
          </Link>
          <div className={styles['coin-counter']}>
            <span>5 coins</span>
          </div>
          <Link href="/help">
            <Image src="/help-icon.png" alt="Help" width={24} height={24} />
          </Link>
          <Link href="/profile">
            <Image src="/profile-image.jpg" alt="Profile" width={32} height={32} className={styles['profile-image']} />
          </Link>
        </div>
      </div>
    </header>
  );
}