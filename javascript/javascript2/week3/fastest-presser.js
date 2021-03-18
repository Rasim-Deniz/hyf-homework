    const timer = document.getElementById("time");
    const button = document.getElementById("start-game");
    const sCount = document.getElementById("s-count");
    const lCount = document.getElementById("l-count");
    const pCountdown = document.getElementById("countdown");
    const sResult = document.getElementById("s-result");
    const lResult = document.getElementById("l-result");
    const lCanvas = document.getElementById("l-canvas");
    const sCanvas = document.getElementById("s-canvas");
    const sConfettiSettings = {
        target: 's-canvas'
    };
    const lConfettiSettings = {
        target: 'l-canvas'
    };
    const sConfetti = new ConfettiGenerator(sConfettiSettings);
    const lConfetti = new ConfettiGenerator(lConfettiSettings);
    let sCounter = 0;
    let lCounter = 0;
    button.addEventListener("click", () => {
        let time = timer.value;
        if (!time || time < 1) {
            return alert("Invalid input");
        } else {
            document.addEventListener("keydown", countSL);
            restart();
            countdown(time);
            setTimeout(() => {
                getWinner();
                document.removeEventListener("keydown", countSL);
            }, time * 1000);
        }
    });

    function restart() {
        sCounter = 0;
        lCounter = 0;
        sResult.innerHTML = "";
        lResult.innerHTML = "";
        sCount.innerHTML = sCounter;
        lCount.innerHTML = lCounter;
        lCanvas.style.visibility = "hidden";
        sCanvas.style.visibility = "hidden";
    }

    function countSL(event) {
        if (event.key === "s") {
            sCounter++;
            sCount.innerHTML = sCounter;
        } else if (event.key === "l") {
            lCounter++;
            lCount.innerHTML = lCounter;
        }
    };

    function getWinner() {

        if (sCounter === 0 && lCounter === 0) {
            sResult.innerHTML = "No Press S!";
            lResult.innerHTML = "No Press L!";
            sResult.style.color = "blue";
            lResult.style.color = "blue";
        } else if (sCounter > lCounter) {
            sResult.innerHTML = "Winner!";
            lResult.innerHTML = "Loser!";
            sResult.style.color = "limegreen";
            lResult.style.color = "red";
            sCanvas.style.visibility = "visible";
            sConfetti.render();
        } else if (sCounter < lCounter) {
            sResult.innerHTML = "Loser!";
            lResult.innerHTML = "Winner!";
            sResult.style.color = "red";
            lResult.style.color = "limegreen";
            lCanvas.style.visibility = "visible";
            lConfetti.render();
        } else {
            sResult.innerHTML = "Draw!";
            lResult.innerHTML = "Draw!";
            sResult.style.color = "orange";
            lResult.style.color = "orange";
            lCanvas.style.visibility = "visible";
            sCanvas.style.visibility = "visible";
            sConfetti.render();
            lConfetti.render();
        }
    };

    function countdown(time) {
        pCountdown.innerHTML = time;
        let interval = setInterval(countInterval, 1000);

        function countInterval() {
            time--;
            if (time <= 0) {
                clearInterval(interval)
                pCountdown.innerHTML = "Time is up!";
                button.innerHTML = "Restart";
            } else {
                pCountdown.innerHTML = time;
            }
        }
    }