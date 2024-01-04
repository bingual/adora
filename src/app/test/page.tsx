'use client';
import { useState } from 'react';

export default function Test() {
    const [item, _] = useState(new Array(5).fill(0));

    return (
        <>
            {item.map((_, idx) => {
                return (
                    <div key={idx} className={'description'}>
                        {idx >= 2 && (
                            <div className={'off_rate'}>
                                <p>{(idx + 1) * 10}%</p>
                            </div>
                        )}
                        <div className={'price'}>
                            <p>
                                $
                                {(
                                    (idx + 1) * 1000 -
                                    (idx + 1) * 1000 * (((idx + 1) * 10) / 100)
                                ).toLocaleString('en-us')}
                            </p>
                        </div>
                        {idx >= 2 && (
                            <div className={'origin_price'}>
                                <p>
                                    $
                                    {((idx + 1) * 1000).toLocaleString('en-us')}
                                </p>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
}
