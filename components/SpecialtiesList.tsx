'use client';

import { CSSProperties, useMemo, useState } from 'react';
import { specialtyPills, specialties, type SpecialtyPill } from '@/lib/site-content';

type OffsetMap = Record<string, { x: number; y: number }>;

type RowPill = {
  pill: SpecialtyPill;
  key: string;
  vy: number; // deterministic vertical scatter around the row centre (px)
};

// Vertical scatter pattern around each row's centre. Keeps the floating-cluster
// look while guaranteeing every bubble stays anchored to its own label.
const SCATTER = [-30, -10, 14, -22, 30];

export default function SpecialtiesList() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [offsets, setOffsets] = useState<OffsetMap>({});

  const pillsByRow = useMemo(() => {
    const map = new Map<number, RowPill[]>();
    specialtyPills.forEach((pill) => {
      const list = map.get(pill.row) ?? [];
      list.push({
        pill,
        key: `${pill.row}-${pill.label}`,
        vy: SCATTER[list.length % SCATTER.length],
      });
      map.set(pill.row, list);
    });
    return map;
  }, []);

  const showRow = (row: number) => {
    const nextOffsets: OffsetMap = {};

    (pillsByRow.get(row) ?? []).forEach(({ key }) => {
      nextOffsets[key] = {
        x: (Math.random() - 0.5) * 14,
        y: (Math.random() - 0.5) * 12,
      };
    });

    setOffsets((current) => ({ ...current, ...nextOffsets }));
    setActiveRow(row);
  };

  return (
    <ul className="spec-list" id="spec-list" onMouseLeave={() => setActiveRow(null)}>
      {specialties.map((item, index) => {
        const active = activeRow === index;

        return (
          <li
            key={item.name}
            className="spec-item"
            data-row={index}
            onMouseEnter={() => showRow(index)}
          >
            <span className="spec-letter">{item.letter}</span>
            <span className="spec-name">{item.name}</span>

            {(pillsByRow.get(index) ?? []).map(({ pill, key, vy }) => {
              const offset = offsets[key] ?? { x: 0, y: 0 };
              const style: CSSProperties = {
                ...pill.style,
                opacity: active ? 1 : 0,
                transform: active
                  ? `translateY(-50%) translate(${offset.x}px, ${vy + offset.y}px) scale(1)`
                  : 'translateY(-50%) scale(0.3)',
              };

              return (
                <span key={key} className={`spec-pill ${pill.tone}`} style={style}>
                  {pill.label}
                </span>
              );
            })}
          </li>
        );
      })}
    </ul>
  );
}
