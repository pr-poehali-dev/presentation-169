import { useState, useEffect, useCallback } from 'react';
import Icon from '@/components/ui/icon';

const BASE = 'https://cdn.poehali.dev/projects/f9382dba-3ca2-45b6-ae56-bbed35ac1178/files';
const IMG_TITLE = `${BASE}/905cbd55-ca9d-4a43-8c71-1bbb17f7746f.jpg`;
const IMG_YELLOW = `${BASE}/03f7c2eb-612f-42a0-bd4c-66a064018f39.jpg`;
const IMG_RED = `${BASE}/06374270-55f4-4257-9cba-8819d9011f7f.jpg`;

const ACCENT = '#FF5A1F';
const YELLOW = '#F5B800';
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
      <div
        className="relative bg-[#0b0b0c] overflow-hidden"
        style={{ width: '100vw', height: '56.25vw', maxHeight: '100vh', maxWidth: '177.78vh' }}
      >

        {/* ===== SLIDE 1 — TITLE ===== */}
        <Slide index={0} active={active}>
          {/* Фоновое фото */}
          <div className="absolute inset-0">
            <img src={IMG_TITLE} alt="" className="absolute right-0 top-0 h-full w-[62%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
          </div>

          {/* Оранжевая диагональная полоса слева */}
          <div className="absolute left-0 top-0 h-full w-[4px]" style={{ background: ACCENT }} />
          <div
            className="absolute bottom-0 left-0 h-[3px]"
            style={{ width: '45%', background: `linear-gradient(90deg, ${ACCENT}, transparent)` }}
          />

          {/* Жёлтый угловой акцент */}
          <div
            className="absolute top-0 left-[6%]"
            style={{
              width: 0, height: 0,
              borderLeft: '0px solid transparent',
              borderRight: '60px solid transparent',
              borderTop: `60px solid ${YELLOW}`,
            }}
          />

          {/* Контент */}
          <div className="relative h-full flex flex-col justify-center px-[7%]">
            <p className="font-oswald text-[clamp(0.6rem,1.1vw,1rem)] tracking-[0.35em] uppercase mb-4" style={{ color: YELLOW }}>
              День дорожника
            </p>
            <h1 className="font-oswald font-bold text-white leading-[0.9] tracking-tight uppercase text-[clamp(3rem,10vw,9rem)]">
              Дорожные<br />
              <span style={{ color: ACCENT }}>Истории</span>
            </h1>
            <div className="flex gap-3 mt-7">
              <span className="block h-[4px] w-14 rounded-full" style={{ background: ACCENT }} />
              <span className="block h-[4px] w-8 rounded-full" style={{ background: YELLOW }} />
              <span className="block h-[4px] w-4 rounded-full" style={{ background: 'rgba(255,255,255,0.3)' }} />
            </div>
          </div>

          {/* Номер слайда крупный */}
          <div
            className="absolute bottom-[10%] right-[6%] font-oswald font-bold leading-none select-none"
            style={{ fontSize: 'clamp(4rem,11vw,10rem)', color: 'rgba(255,90,31,0.12)' }}
          >01</div>
        </Slide>

        {/* ===== SLIDE 2 — СМЫСЛЫ ===== */}
        <Slide index={1} active={active}>
          {/* Фото справа */}
          <div className="absolute inset-0">
            <img src={IMG_YELLOW} alt="" className="absolute right-0 top-0 h-full w-[45%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30" />
          </div>

          {/* Жёлтая вертикальная полоса — граница фото */}
          <div className="absolute top-0 right-[45%] w-[3px] h-full" style={{ background: YELLOW }} />

          {/* Оранжевая горизонтальная черта сверху */}
          <div className="absolute top-0 left-0 h-[4px] w-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, ${YELLOW}, transparent)` }} />

          {/* Угловой жёлтый треугольник */}
          <div
            className="absolute bottom-0 right-[45%]"
            style={{
              width: 0, height: 0,
              borderRight: '0px solid transparent',
              borderLeft: '50px solid transparent',
              borderBottom: `50px solid ${YELLOW}`,
            }}
          />

          {/* Контент — на всю ширину левой части */}
          <div className="absolute inset-0 right-[45%] flex flex-col justify-center px-[6%]">
            {/* Заголовок */}
            <div className="flex items-baseline gap-3 mb-5">
              <h2 className="font-oswald font-bold text-white uppercase leading-none text-[clamp(1.8rem,4vw,3.6rem)]">
                Смыслы
              </h2>
              <span className="font-oswald font-bold uppercase text-[clamp(1.8rem,4vw,3.6rem)]" style={{ color: ACCENT }}>
                Вариант 1
              </span>
            </div>

            {/* Разделитель */}
            <div className="flex gap-2 mb-6">
              <span className="block h-[3px] w-10" style={{ background: ACCENT }} />
              <span className="block h-[3px] w-6" style={{ background: YELLOW }} />
              <span className="block h-[3px] w-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
            </div>

            {/* Текст — на полную ширину */}
            <p className="text-white/85 text-[clamp(0.75rem,1.55vw,1.3rem)] leading-[1.7] w-full">
              Метафора неустанного созидания, где каждый метр пройденного пути становится не просто расстоянием,
              а{' '}<b style={{ color: ACCENT }}>точкой опоры</b>{' '}для нового рывка.
              Это праздник людей, для которых{' '}<b style={{ color: YELLOW }}>«движение»</b>{' '}— это не глагол,
              а суть профессии: они двигают грузы, экономику и целые регионы, но главное — они{' '}
              <b style={{ color: ACCENT }}>двигают время</b>, укладывая асфальт под колёса будущего.
            </p>
          </div>

          {/* Номер слайда */}
          <div
            className="absolute bottom-[8%] right-[48%] font-oswald font-bold leading-none select-none"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)', color: `rgba(245,184,0,0.15)` }}
          >02</div>
        </Slide>

        {/* ===== SLIDE 3 — СМЫСЛЫ 2 ===== */}
        <Slide index={2} active={active}>
          {/* Фото */}
          <div className="absolute inset-0">
            <img src={IMG_RED} alt="" className="absolute right-0 top-0 h-full w-[45%] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/30" />
          </div>

          {/* Оранжевая вертикальная полоса */}
          <div className="absolute top-0 right-[45%] w-[3px] h-full" style={{ background: ACCENT }} />

          {/* Нижняя жёлтая черта */}
          <div className="absolute bottom-0 left-0 h-[4px] w-full" style={{ background: `linear-gradient(90deg, ${YELLOW}, ${ACCENT}, transparent)` }} />

          {/* Оранжевый угловой треугольник */}
          <div
            className="absolute top-0 right-[45%]"
            style={{
              width: 0, height: 0,
              borderLeft: '0px solid transparent',
              borderRight: '50px solid transparent',
              borderTop: `50px solid ${ACCENT}`,
            }}
          />

          {/* Контент */}
          <div className="absolute inset-0 right-[45%] flex flex-col justify-center px-[6%]">
            <div className="flex items-baseline gap-3 mb-5">
              <h2 className="font-oswald font-bold text-white uppercase leading-none text-[clamp(1.8rem,4vw,3.6rem)]">
                Смыслы
              </h2>
              <span className="font-oswald font-bold uppercase text-[clamp(1.8rem,4vw,3.6rem)]" style={{ color: ACCENT }}>
                Вариант 1
              </span>
            </div>

            <div className="flex gap-2 mb-5">
              <span className="block h-[3px] w-10" style={{ background: YELLOW }} />
              <span className="block h-[3px] w-6" style={{ background: ACCENT }} />
              <span className="block h-[3px] w-3" style={{ background: 'rgba(255,255,255,0.2)' }} />
            </div>

            <p className="text-white/85 text-[clamp(0.68rem,1.4vw,1.15rem)] leading-[1.7] w-full">
              Каждая построенная дорога — это{' '}<b style={{ color: ACCENT }}>траектория роста</b>:
              от разбитой колеи до магистрали, от локальной задачи до глобальной перспективы.
              Дорожник не стоит на месте — он буквально{' '}<b style={{ color: YELLOW }}>пишет историю движения</b>,
              где вчерашний грунт становится завтрашним горизонтом возможностей.
              Это символ непрерывной{' '}<b style={{ color: ACCENT }}>эволюции</b>: вверх — к новым технологиям,
              вдаль — к новым связям, вглубь — к прочности и надежности.
            </p>

            {/* Итог */}
            <div className="mt-5 pt-4 border-t border-white/10">
              <p className="text-[clamp(0.68rem,1.35vw,1.1rem)] leading-[1.6]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                <b style={{ color: YELLOW }}>Итог:</b>{' '}
                День дорожника — это не точка на карте, а{' '}
                <b style={{ color: ACCENT }}>стартовая черта</b>, за которой — бесконечное движение к лучшей версии мира.
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-[8%] right-[48%] font-oswald font-bold leading-none select-none"
            style={{ fontSize: 'clamp(3rem,8vw,7rem)', color: `rgba(255,90,31,0.12)` }}
          >03</div>
        </Slide>

        {/* Slide counter */}
        <div className="absolute top-5 right-7 font-oswald text-[clamp(0.6rem,1vw,0.85rem)] tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {String(active + 1).padStart(2, '0')}
          <span style={{ color: 'rgba(255,255,255,0.2)' }}> / {String(TOTAL).padStart(2, '0')}</span>
        </div>

        {/* Floating controls */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-5 px-5 py-2.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
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
