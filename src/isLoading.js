import React from 'react';
import { FadeLoader} from 'react-spinners';

function IsLoading({ isLoading }) {
    return (
        <>
            {isLoading && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: '#000000',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 999,
                    }}
                >
                    <FadeLoader color="#243a6e" size="80" />
                </div>
            )}
        </>
    );
}

export default IsLoading;
