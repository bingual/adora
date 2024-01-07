'use client';

import Pagination, { ReactJsPaginationProps } from 'react-js-pagination';

import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function PaginationComp({ count, search = '' }: { count: number; search?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page')) || 1;
  const take = Number(searchParams.get('take')) || 12;
  const sort = Number(searchParams.get('sort')) || 0;

  const handleOnChange: ReactJsPaginationProps['onChange'] = async (page: number) => {
    router.push(`${pathname}?page=${page}&take=${take}&sort=${sort}&cate_no=${search}`, {
      scroll: true,
    });
  };

  return (
    <>
      {count !== 0 && (
        <div className={'ec-base-paginate'}>
          <Pagination
            activePage={page} // 현재 페이지
            itemsCountPerPage={take} // 표시할 목록 개수
            totalItemsCount={count} // 전체 아이템 개수
            pageRangeDisplayed={5} // 페이지 번호를 몇개까지 표시할지
            onChange={handleOnChange} // 체인지 이벤트 발생시 실행할 내용
            prevPageText={
              <Image
                className={'w-full h-auto'}
                src={'/pagination/page_prev.png'}
                width={0}
                height={0}
                sizes="100vw"
                alt={'...'}
              />
            }
            nextPageText={
              <Image
                className={'w-full h-auto'}
                src={'/pagination/page_next.png'}
                width={0}
                height={0}
                sizes="100vw"
                alt={'...'}
              />
            }
            firstPageText={
              <Image
                className={'w-full h-auto'}
                src={'/pagination/page_first.png'}
                width={0}
                height={0}
                sizes="100vw"
                alt={'...'}
              />
            }
            lastPageText={
              <Image
                className={'w-full h-auto'}
                src={'/pagination/page_last.png'}
                width={0}
                height={0}
                sizes="100vw"
                alt={'...'}
              />
            }
          />
        </div>
      )}
    </>
  );
}
