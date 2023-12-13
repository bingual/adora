import { Spinner } from 'flowbite-react';

export default function Loading() {
    return (
        <>
            <div className={'loading-container'}>
                <Spinner />
            </div>
        </>
    );
}
