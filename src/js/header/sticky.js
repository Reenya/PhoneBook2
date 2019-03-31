export const getObserver = function(){
    const height = document.querySelector('.header').clientHeight;
    console.log(height);
    const options = {
        root: null,
        rootMargin: `-${height-38}px 0px 0px 0px`,
        threshold: 1
    };


    const checkIntersection = (enteries, observer) => {
        enteries.forEach(entry => {
            console.log(entry);

            if (entry.isIntersecting) {
                // entry.target.classList.remove('phone-book__sticky');



            } else {
                entry.target.classList.add('phone-book__sticky');

            }
            // if (entry.intersectionRatio > 0) {
            //     // observer.unobserve(entry.target);
            //     // console.log(entry);
            // }
        });
    }
        const observer = new IntersectionObserver(checkIntersection, options);
    return observer;

}






