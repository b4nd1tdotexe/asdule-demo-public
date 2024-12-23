import Actions from '@/components/Actions';
import PhotoCarousel from '@/components/PhotoCarousel';
import PracticeQuality from '@/components/PracticeQuality';
import WhyUs from '@/components/WhyUs';

export default function Home() {
  return (
    <main>
      <PhotoCarousel />
      <WhyUs />
      <Actions />
      <PracticeQuality />
    </main>
  );
}
