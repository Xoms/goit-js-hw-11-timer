class CountdownTimer{
   

    constructor(settings){
        this.selector = settings.selector;
        this.targetDate = settings.targetDate;
        
        this.initTimer();
    }



    initTimer(){     
        this.findElements();   
        let timerId = setInterval(()=>{
            let now = new Date;
            let diff = this.targetDate - now;
            console.log(diff)
            if(diff < 0 ){
                clearInterval(timerId);
                
            } else {
                const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
                const secs = Math.floor((diff % (1000 * 60)) / 1000);
                
                this.secs.innerHTML = secs;
                this.mins.innerHTML = mins;
                this.hours.innerHTML = hours;
                this.days.innerHTML = days;
            }

        }, 1000)
    }

    findElements(){
        const timer = document.querySelector(`${this.selector}`)

        this.secs = timer.querySelector('[data-value="secs"]');
        this.mins = timer.querySelector('[data-value="mins"]');
        this.hours = timer.querySelector('[data-value="hours"]');
        this.days = timer.querySelector('[data-value="days"]');
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Dec 31, 2020, 23:59'),
  });
