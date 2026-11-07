export type Lang = 'en' | 'th';

export interface Translations {
  [key: string]: {
    en: string;
    th: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Brand & Header
  brandEyebrow: {
    en: 'MATAVANARY STUDIO · NEED FOR SPEED UNDERGROUND 2',
    th: 'MATAVANARY STUDIO · NEED FOR SPEED UNDERGROUND 2',
  },
  appTitle: {
    en: 'Career Save Editor',
    th: 'โปรแกรมแก้ไขเซฟ Career',
  },
  appDesc: {
    en: 'Your garage. Your rules. Edit career saves, tuning & visuals locally in your browser.',
    th: 'โรงรถของคุณ กฎของคุณ แก้ไขเซฟเกม อัปเกรดชิ้นส่วน และจูน Dyno ในเบราว์เซอร์ของคุณ 100%',
  },
  nowTuned: {
    en: 'Tuned by Matavanary Studio!',
    th: 'ปรับแต่งพิเศษโดย Matavanary Studio!',
  },

  // Save File section
  saveFileTitle: {
    en: 'Save file',
    th: 'ไฟล์เซฟเกม',
  },
  saveFileDesc: {
    en: 'Start with a backup. Load a career save or an nfsu2-web backup ZIP. Your file stays in this browser.',
    th: 'เริ่มต้นด้วยการสำรองไฟล์ โหลดไฟล์เซฟ Career หรือ ZIP สำรองจาก nfsu2-web (ไฟล์จะทำงานในเครื่องคุณ ไม่มีการอัปโหลด)',
  },
  chooseFile: {
    en: 'Choose career save or nfsu2-web backup ZIP',
    th: 'เลือกไฟล์เซฟ Career หรือไฟล์ ZIP',
  },
  dragDropHint: {
    en: 'or drag and drop your save file / ZIP here',
    th: 'หรือลากไฟล์เซฟ / ไฟล์ ZIP มาวางที่นี่',
  },
  dropOverlayText: {
    en: 'Drop save file or ZIP here to load',
    th: 'วางไฟล์เซฟหรือไฟล์ ZIP ที่นี่เพื่อเปิดใช้งาน',
  },
  nfsuWebProfile: {
    en: 'nfsu2-web profile',
    th: 'โปรไฟล์ nfsu2-web',
  },

  // Snapshots / History
  recentSnapshots: {
    en: 'Recent Snapshots (Local Backups)',
    th: 'ประวัติเซฟล่าสุด (สำรองในเครื่อง)',
  },
  restoreBtn: {
    en: 'Restore',
    th: 'กู้คืนเซฟนี้',
  },
  clearHistoryBtn: {
    en: 'Clear history',
    th: 'ล้างประวัติ',
  },

  // Profile section
  profileTitle: {
    en: 'Profile',
    th: 'ข้อมูลโปรไฟล์',
  },
  driverName: {
    en: 'Driver name',
    th: 'ชื่อคนขับ',
  },
  money: {
    en: 'Money',
    th: 'จำนวนเงิน',
  },
  applyProfile: {
    en: 'Apply profile',
    th: 'บันทึกข้อมูลโปรไฟล์',
  },
  quickMoney: {
    en: 'Quick presets:',
    th: 'ปุ่มลัดเงิน:',
  },
  maxMoney: {
    en: 'Max ($2.1B)',
    th: 'เงินสูงสุด ($2.1B)',
  },

  // Career Access section
  careerTitle: {
    en: 'Career access (experimental)',
    th: 'ระบบความคืบหน้า Career (ทดลอง)',
  },
  careerDesc: {
    en: 'Shop discovery preserves progression. Stage editing changes road/active-stage gates; full completion intentionally changes event history. Inventory prerequisites are reported, not independently bypassed. Keep a backup.',
    th: 'การปลดล็อกร้านค้าจะไม่กระทบเนื้อเรื่องหลัก การเปลี่ยน Stage จะเปลี่ยนด่านที่เข้าถึงได้ ส่วนการทำครบ 100% จะอัปเดตประวัติการแข่งจริง กรุณาสำรองไฟล์ไว้เสมอ',
  },
  careerStage: {
    en: 'Career stage',
    th: 'ระดับด่าน (Stage)',
  },
  applyStage: {
    en: 'Apply stage',
    th: 'บันทึก Stage',
  },
  stageNotice: {
    en: 'Stage alone does not complete goals, reset completed races or grant rewards. Completed races are not made visible again.',
    th: 'การเปลี่ยน Stage เพียงอย่างเดียวจะไม่เคลียร์ภารกิจ รีเซ็ตการแข่ง หรือมอบรางวัล การแข่งที่ผ่านไปแล้วจะไม่กลับมาแสดงซ้ำ',
  },
  gameDatabase: {
    en: 'Game database',
    th: 'ฐานข้อมูลเกม (GLOBALB.BUN)',
  },
  chooseBun: {
    en: 'Choose GLOBAL\\GLOBALB.BUN; read locally, never uploaded.',
    th: 'เลือกไฟล์ GLOBAL\\GLOBALB.BUN จากโฟลเดอร์เกม อ่านในเครื่องเท่านั้น',
  },
  discoverShopsBtn: {
    en: 'Discover eligible shops',
    th: 'ปลดล็อกร้านค้าที่เข้าถึงได้',
  },
  completeCareerBtn: {
    en: 'Complete career (100%)',
    th: 'เคลียร์ Career 100%',
  },

  // Car slots section
  carSlotsTitle: {
    en: 'Car slots',
    th: 'โรงรถ (Car slots)',
  },
  slotsDesc: {
    en: 'slots filled. Open slots are unlocked and free for a sponsor car.',
    th: 'ช่องที่มีรถ ช่องที่เปิดว่างคือสล็อตที่ปลดล็อกแล้วและพร้อมรับรถสปอนเซอร์',
  },
  carSlotLabel: {
    en: 'Car slot',
    th: 'ช่องจอดรถ',
  },
  lockedState: {
    en: 'Locked',
    th: 'ล็อคอยู่',
  },
  filledState: {
    en: 'Filled',
    th: 'มีรถอยู่',
  },
  openState: {
    en: 'Open (free)',
    th: 'ว่าง (ใช้งานได้)',
  },
  perfFlagsLabel: {
    en: 'performance flags',
    th: 'ชิ้นส่วนสมรรถนะ',
  },
  uniqueFlagsLabel: {
    en: 'unique flags',
    th: 'ชิ้นส่วน Unique',
  },
  unlockedPartsLabel: {
    en: 'unlocked parts',
    th: 'ชิ้นส่วนที่ปลดล็อก',
  },
  replaceCarWith: {
    en: 'Replace car with',
    th: 'เปลี่ยนเป็นรถคันอื่น',
  },
  swapWith: {
    en: 'Swap with',
    th: 'สลับกับช่อง',
  },
  swapBtn: {
    en: 'Swap',
    th: 'สลับช่อง',
  },
  unlockSlotBtn: {
    en: 'Unlock slot',
    th: 'ปลดล็อกช่องนี้',
  },
  unlockAllPartsBtn: {
    en: 'Unlock all parts',
    th: 'ปลดล็อกชิ้นส่วนทั้งหมด',
  },
  tuningBtn: {
    en: 'Tuning',
    th: 'ปรับแต่ง & Dyno',
  },

  // Download section
  downloadTitle: {
    en: 'Download',
    th: 'ดาวน์โหลดไฟล์เซฟ',
  },
  downloadDesc: {
    en: 'Checksums will be recalculated automatically on download.',
    th: 'ระบบจะคำนวณ Checksum ใหม่อัตโนมัติทันทีที่ดาวน์โหลด เพื่อให้เข้าเกมได้ปกติ',
  },
  downloadBtn: {
    en: 'Download edited save',
    th: 'ดาวน์โหลดไฟล์เซฟที่แก้ไขแล้ว',
  },
  downloadZipBtn: {
    en: 'Download edited ZIP',
    th: 'ดาวน์โหลดไฟล์ ZIP ที่แก้ไขแล้ว',
  },
};
