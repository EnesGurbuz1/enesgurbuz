import Spline from '@splinetool/react-spline/next';

export default function HeroSection() {
  return (
    <div className="fixed inset-0 h-screen w-full pointer-events-auto">
      <Spline
        scene="https://prod.spline.design/8MmXGK5xIywbXIe6/scene.splinecode" 
        className="w-full h-full"
      />
    </div>
  );
}