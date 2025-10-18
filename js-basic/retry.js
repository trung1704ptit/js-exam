const delayTime = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

async function fetchWithRetry (url, retries = 3, delay = 500) {
    for (let i= 0; i< retries; i ++) {
        try {
            const res = await fetch(url);
            if (!res.ok) {
                throw new Error('Fetch failed')
            }

            return await res.json()
        } catch (e) {
            if (i === retries - 1) throw e;
            await delayTime(delay)
            delay *= 2; // exponential backoff            
        }
    }
}