import { getExamContent } from '@/content/exams';
import { LoopOgImage, OG_SIZE } from '@/lib/og-loop';

const t = getExamContent('toefl', 'en');

export const alt = t.meta.ogAlt;
export const size = OG_SIZE;
export const contentType = 'image/png';

export default function Image() {
  return LoopOgImage(t);
}
