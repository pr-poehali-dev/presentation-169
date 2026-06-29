import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const BASE = 'https://cdn.poehali.dev/projects/f9382dba-3ca2-45b6-ae56-bbed35ac1178/files';
const IMG_TITLE = `${BASE}/905cbd55-ca9d-4a43-8c71-1bbb17f7746f.jpg`;
const IMG_YELLOW = `${BASE}/03f7c2eb-612f-42a0-bd4c-66a064018f39.jpg`;
const IMG_RED = `${BASE}/06374270-55f4-4257-9cba-8819d9011f7f.jpg`;

const ACCENT = '#FF5A1F';
const TOTAL = 3;

const Slide = ({ children, index, active }: { children: React.ReactNode; index: number; active: number }) => (
  <div
    className="absolute inset-0 transition-all duration-700 ease-out"
    style={{
      opacity: active === index ? 1 : 0,
      transform: active === index ? 'translateY(0)' : 'translateY(24px)',
      pointerEvents: active === index ? 'auto' : 'none',
    }}
  >
    {children}
  </div>
);

const Index = () => {
  const [active, setActive] = useState(0);

  const next = useCallback(() => setActive((p) => Math.min(TOTAL - 1, p + 1)), []);
  const prev = useCallback(() => setActive((p) => Math.max(0, p - 1)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') { e.preventDefault(); next(); }
      if (e.key === 'ArrowLeft' || e.key === 'PageUp') { e.preventDefault(); prev(); }
      if (e.key === 'Home') setActive(0);
      if (e.key === 'End') setActive(TOTAL - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return (
    <div className="fixed inset-0 bg-black font-roboto overflow-hidden flex items-center justify-center">
      {/* 16:9 stage that fills the screen keeping aspect ratio */}
      <div
        className="relative bg-[#0b0b0c] overflow-hidden"
        style={{ width: '100vw', height: '56.25vw', maxHeight: '100vh', maxWidth: '177.78vh' }}
      >
        {/* ===== SLIDE 1 — TITLE ===== */}
        <Slide index={0} active={active}>
          <div className="absolute inset-0">
            <img src={IMG_TITLE} alt="" className="absolute right-0 top-0 h-full w-[62%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col justify-center pl-[7%]">
            <h1 className="font-oswald font-bold text-white leading-[0.92] tracking-tight uppercase text-[clamp(2.5rem,8vw,7rem)]">
              Дорожные<br />
              <span style={{ color: ACCENT }}>Истории</span>
            </h1>
            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-[4px] w-9 rounded-full" style={{ background: ACCENT }} />
              ))}
            </div>
          </div>
        </Slide>

        {/* ===== SLIDE 2 — YELLOW ===== */}
        <Slide index={1} active={active}>
          <div className="absolute inset-0">
            <img src={IMG_YELLOW} alt="" className="absolute right-0 top-0 h-full w-[52%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent" />
          </div>
          <div className="relative h-full flex items-center pl-[7%] pr-[50%]">
            <div className="flex gap-8">
              <div>
                <h2 className="font-oswald font-bold text-white uppercase leading-tight text-[clamp(1.5rem,3.4vw,3rem)]">
                  Смыслы<br /><span style={{ color: ACCENT }}>Вариант 1</span>
                </h2>
                <div className="mt-4 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="block h-[3px] w-6" style={{ background: ACCENT }} />
                  ))}
                </div>
              </div>
              <div className="w-[2px] self-stretch" style={{ background: ACCENT }} />
              <p className="text-white/85 text-[clamp(0.8rem,1.5vw,1.25rem)] leading-relaxed max-w-xl">
                Метафора неустанного созидания, где каждый метр пройденного пути становится не просто расстоянием,
                а <b style={{ color: ACCENT }}>точкой опоры</b> для нового рывка.{' '}
                Это праздник людей, для которых <b style={{ color: ACCENT }}>«движение»</b> — это не глагол,
                а суть профессии: они двигают грузы, экономику и целые регионы, но главное — они{' '}
                <b style={{ color: ACCENT }}>двигают время</b>, укладывая асфальт под колеса будущего.
              </p>
            </div>
          </div>
        </Slide>

        {/* ===== SLIDE 3 — RED ===== */}
        <Slide index={2} active={active}>
          <div className="absolute inset-0">
            <img src={IMG_RED} alt="" className="absolute right-0 top-0 h-full w-[52%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black to-transparent" />
          </div>
          <div className="relative h-full flex items-center pl-[7%] pr-[50%]">
            <div className="flex gap-8">
              <div>
                <h2 className="font-oswald font-bold text-white uppercase leading-tight text-[clamp(1.5rem,3.4vw,3rem)]">
                  Смыслы<br /><span style={{ color: ACCENT }}>Вариант 1</span>
                </h2>
                <div className="mt-4 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="block h-[3px] w-6" style={{ background: ACCENT }} />
                  ))}
                </div>
              </div>
              <div className="w-[2px] self-stretch" style={{ background: ACCENT }} />
              <p className="text-white/85 text-[clamp(0.7rem,1.35vw,1.1rem)] leading-relaxed max-w-xl">
                Каждая построенная дорога — это <b style={{ color: ACCENT }}>траектория роста</b>:
                от разбитой колеи до магистрали, от локальной задачи до глобальной перспективы.{' '}
                Дорожник не стоит на месте — он буквально <b style={{ color: ACCENT }}>пишет историю движения</b>,
                где вчерашний грунт становится завтрашним горизонтом возможностей.{' '}
                Это символ непрерывной <b style={{ color: ACCENT }}>эволюции</b>: вверх — к новым технологиям,
                вдаль — к новым связям, вглубь — к прочности и надежности.<br />
                <b style={{ color: ACCENT }}>Итог:</b> День дорожника — это не точка на карте,
                а <b style={{ color: ACCENT }}>стартовая черта</b>, за которой — бесконечное движение к лучшей версии мира.
              </p>
            </div>
          </div>
        </Slide>

        {/* Slide counter */}
        <div className="absolute top-6 right-7 font-oswald text-white/60 text-sm tracking-widest">
          {String(active + 1).padStart(2, '0')}<span className="text-white/25"> / {String(TOTAL).padStart(2, '0')}</span>
        </div>

        {/* Floating controls */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-5 px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
          <button
            onClick={prev}
            disabled={active === 0}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:bg-white/10 disabled:opacity-25"
            aria-label="Назад"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: TOTAL }).map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{ width: active === i ? 26 : 8, background: active === i ? ACCENT : 'rgba(255,255,255,0.3)' }}
                aria-label={`Слайд ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={active === TOTAL - 1}
            className="w-9 h-9 rounded-full flex items-center justify-center text-white transition hover:bg-white/10 disabled:opacity-25"
            aria-label="Вперёд"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
