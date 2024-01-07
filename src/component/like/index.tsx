'use client';

import { useState } from 'react';

export default function LikeComp() {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <div className="like-wr">
        <ul className="tabs">
          <li
            onClick={() => {
              setCurrent(0);
            }}
            className={current === 0 ? 'tab-link current' : 'tab-link'}
            data-tab="tab-1"
          >
            좋아요한 상품
          </li>
          <li
            onClick={() => {
              setCurrent(1);
            }}
            className={current === 1 ? 'tab-link current' : 'tab-link'}
            data-tab="tab-2"
          >
            최근 본 상품
          </li>
        </ul>
        {current === 0 && (
          <div className={'tab-1'}>
            <p className="empty ">위시리스트 내역이 없습니다.</p>
          </div>
        )}
        {current === 1 && (
          <div className={'tab-2'}>
            <p className="empty ">최근 본 상품 내역이 없습니다.</p>
          </div>
        )}
      </div>
    </>
  );
}
