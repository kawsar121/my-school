import React from 'react';

const Gallary = () => {
    return (
        <div>
            {/* w-16 md:w-32 lg:w-48 */}
            <div className='mb-14'>
                <iframe className='
                    w-[320px] my-8
                    lg:w-[560px] 
                    lg:h-[315px] 
                    lg:ml-72
                    lg:my-10 ' height="315" src="https://www.youtube.com/embed/DcXZOCISFNY?si=HUnICMnMnts6Ja_x" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <iframe className='
                    w-[320px] my-8
                    lg:w-[560px] 
                    lg:h-[315px] 
                    lg:ml-72
                    lg:my-10 '
                    height="315" src="https://www.youtube.com/embed/sLQRvxglXok?si=kKyDpUarKAaocaGE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Gallary;