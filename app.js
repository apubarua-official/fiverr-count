const counter_form = document.getElementById('counter_form');
const counter = document.querySelector('.counter');

counter_form.onsubmit = (e) => {
    e.preventDefault();

    let form_data = new FormData(e.target);
    let { date, time } = Object.fromEntries(form_data.entries());

    let count = setInterval( () => {
        let start_time = Date.now();
        let end_time = new Date(date + ' ' + time);
        let order_time = Math.floor(Math.abs(end_time.getTime() - start_time));
        
        let total_sec = Math.floor(order_time / 1000);
        let total_min = Math.floor(total_sec / 60);
        let total_hour = Math.floor(total_min / 60);
        let total_day = Math.floor(total_hour / 24);

        let hours = total_hour - (total_day * 24);
        let min = total_min - (total_day * 24 * 60) - (hours * 60);
        let sec = total_sec - (total_day * 24 * 60 * 60) - (hours * 60 * 60) - (min * 60);

        if( total_sec == 0){
            clearInterval(count);
        }

        counter.innerHTML = `
            <h1>${total_day} Days ${hours} Hours ${min} Minutes ${sec} Seconds</h1>
        `;
        
    }, 1000)
   
}