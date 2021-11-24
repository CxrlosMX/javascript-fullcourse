//synchronous code blocking
(() => {
    console.log(`Synchronous code`);
    console.info(`Start`);
    function two() {
        console.info(`Two`);
    }
    function one() {
        console.info(`One`);
        two();
        console.info(`Three`);
    }
    one();
    console.info(`Finish`);
})();

//non-blocking asynchronous code
(() => {
    console.log(`Asynchronous code`);
    console.log(`Start`);
    function two() {
        setTimeout(
            function () {
                console.log(`Two`);
            }, 1000
        );
    }
    function one() {
        setTimeout(
            function () {
                console.log(`One`);
            }, 0
        );
        two();
        console.log(`Three`);
    }
    one();
    console.log(`Finish`);
})();

//Tool: http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D


