onmessage = function(e) {
    const operations = e.data;
    let result = 0;
    for (let i = 0; i < operations; i++) {
        for (let j = 0; j < 10; j++) {
            result += Math.sin(i + j) * Math.cos(i + j) + Math.sqrt(Math.abs(i)) + Math.pow(i % 100, 2);
        }
    }
    postMessage(result);
};