'use client';

import { CSSProperties, useMemo, useState } from 'react';
import { specialtyPills, specialties } from '@/lib/site-content';

type OffsetMap = Record<string, { x: number; y: number }>;

export default function SpecialtiesList() {
  const [activeRow, setActiveRow] = useState<number | null>(null);
  const [offsets, setOffsets] = useState<OffsetMap>({});

  const pillKeys = useMemo(
    () => specialtyPills.map((pill) => `${pill.row}-${pill.label}`),
    [],
  );

  const showRow = (row: number) => {
    const nextOffsets: OffsetMap = {};

    specialtyPills.forEach((pill) => {
      if (pill.row === row) {
        nextOffsets[`${pill.row}-${pill.label}`] = {
          x: (Math.random() - 0.5) * 14,
          y: (Math.random() - 0.5) * 10,
        };
      }
    });

    setOffsets((current) => ({ ...current, ...nextOffsets }));
    setActiveRow(row);
  };

  return (
    <ul className="spec-list" id="spec-list" onMouseLeave={() => setActiveRow(null)}>
      {specialties.map((item, index) => (
        <li
          key={item.name}
          className="spec-item"
          data-row={index}
          onMouseEnter={() => showRow(index)}
        >
          <span className="spec-letter">{item.letter}</span>
          <span className="spec-name">{item.name}</span>
        </li>
      ))}

      {specialtyPills.map((pill, index) => {
        const key = pillKeys[index];
        const offset = offsets[key] ?? { x: 0, y: 0 };
        const active = activeRow === pill.row;
        const style: CSSProperties = {
          ...pill.style,
          opacity: active ? 1 : 0,
          transform: active
            ? `translate(${offset.x}px, ${offset.y}px) scale(1)`
            : 'scale(0.3)',
        };

        return (
          <span
            key={key}
            className={`spec-pill ${pill.tone}`}
            data-for={pill.row}
            style={style}
          >
            {pill.label}
          </span>
        );
      })}
    </ul>
  );
}

