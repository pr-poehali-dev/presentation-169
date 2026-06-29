import { useState } from 'react';
import Icon from '@/components/ui/icon';

const BASE = 'https://cdn.poehali.dev/projects/f9382dba-3ca2-45b6-ae56-bbed35ac1178/files';
const IMG_TITLE = `${BASE}/905cbd55-ca9d-4a43-8c71-1bbb17f7746f.jpg`;
const IMG_YELLOW = `${BASE}/03f7c2eb-612f-42a0-bd4c-66a064018f39.jpg`;
const IMG_RED = `${BASE}/06374270-55f4-4257-9cba-8819d9011f7f.jpg`;

const ACCENT = '#FF5A1F';

const Slide = ({ children, index, active }: { children: React.ReactNode; index: number; active: number }) => (
  <div
    className="absolute inset-0 transition-all duration-700 ease-out"
    style={{
      opacity: active === index ? 1 : 0,
      transform: active === index ? 'translateY(0)' : 'translateY(20px)',
      pointerEvents: active === index ? 'auto' : 'none',
    }}
  >
    {children}
  </div>
);

const Index = () => {
  const [active, setActive] = useState(0);
  const total = 3;

  return (
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center font-roboto p-4 sm:p-8 gap-6">
      {/* Slide canvas 16:9 */}
      <div className="w-full max-w-6xl aspect-video relative rounded-lg overflow-hidden bg-[#0b0b0c] border border-white/5 shadow-2xl">

        {/* ===== SLIDE 1 — TITLE ===== */}
        <Slide index={0} active={active}>
          <div className="absolute inset-0">
            <img src={IMG_TITLE} alt="" className="absolute right-0 top-0 h-full w-[62%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-transparent" />
          </div>
          <div className="relative h-full flex flex-col justify-center pl-[5%] sm:pl-[7%]">
            <h1 className="font-oswald font-bold text-white leading-[0.92] tracking-tight uppercase text-[clamp(2.2rem,7vw,5.5rem)]">
              Дорожные<br />
              <span style={{ color: ACCENT }}>Истории</span>
            </h1>
            <div className="flex gap-2 mt-6">
              {[0, 1, 2].map((i) => (
                <span key={i} className="block h-[3px] w-7 rounded-full" style={{ background: ACCENT }} />
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
          <div className="relative h-full flex items-center pl-[5%] sm:pl-[7%] pr-[50%]">
            <div className="flex gap-6">
              <div>
                <h2 className="font-oswald font-bold text-white uppercase leading-tight text-[clamp(1.3rem,3vw,2.5rem)]">
                  Смыслы<br /><span style={{ color: ACCENT }}>Вариант 1</span>
                </h2>
                <div className="mt-3 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="block h-[2px] w-5" style={{ background: ACCENT }} />
                  ))}
                </div>
              </div>
              <div className="w-[2px] self-stretch" style={{ background: ACCENT }} />
              <p className="text-white/85 text-[clamp(0.7rem,1.4vw,1.05rem)] leading-relaxed max-w-md">
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
          <div className="relative h-full flex items-center pl-[5%] sm:pl-[7%] pr-[50%]">
            <div className="flex gap-6">
              <div>
                <h2 className="font-oswald font-bold text-white uppercase leading-tight text-[clamp(1.3rem,3vw,2.5rem)]">
                  Смыслы<br /><span style={{ color: ACCENT }}>Вариант 1</span>
                </h2>
                <div className="mt-3 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <span key={i} className="block h-[2px] w-5" style={{ background: ACCENT }} />
                  ))}
                </div>
              </div>
              <div className="w-[2px] self-stretch" style={{ background: ACCENT }} />
              <p className="text-white/85 text-[clamp(0.62rem,1.25vw,0.95rem)] leading-relaxed max-w-md">
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
      </div>

      {/* Controls */}
      <div className="flex items-center gap-6">
        <button
          onClick={() => setActive((p) => Math.max(0, p - 1))}
          disabled={active === 0}
          className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white transition hover:border-[#FF5A1F] disabled:opacity-30 disabled:hover:border-white/15"
        >
          <Icon name="ChevronLeft" size={20} />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: active === i ? 28 : 8,
                background: active === i ? ACCENT : 'rgba(255,255,255,0.25)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setActive((p) => Math.min(total - 1, p + 1))}
          disabled={active === total - 1}
          className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white transition hover:border-[#FF5A1F] disabled:opacity-30 disabled:hover:border-white/15"
        >
          <Icon name="ChevronRight" size={20} />
        </button>
      </div>
    </div>
  );
};

export default Index;