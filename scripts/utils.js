window.loadFiles = function (files, callback) {
    const head = document.head;
    const body = document.body;
    const loadedFiles = {};

    // Function to check if a file is already loaded
    function isFileLoaded(url) {
        if (loadedFiles[url]) {
            return true;
        }
        const tagName = url.endsWith('.js') ? 'script' : 'link';
        const tags = document.getElementsByTagName(tagName);
        for (let tag of tags) {
            if (tag.src === url || tag.href === url) {
                loadedFiles[url] = true;
                return true;
            }
        }
        return false;
    }

    // Function to load a file
    function loadFile(url) {
        return new Promise((resolve, reject) => {
            let element;
            if (url.endsWith('.css')) {
                element = document.createElement('link');
                element.rel = 'stylesheet';
                element.href = url;
            } else if (url.endsWith('.js')) {
                element = document.createElement('script');
                element.src = url;
                element.async = true;
            }

            element.onload = () => {
                loadedFiles[url] = true;
                resolve();
            };
            element.onerror = () => reject(`Failed to load ${url}`);
            if (url.endsWith('.css')) {
                head.appendChild(element);
            } else {
                body.appendChild(element);
            }
        });
    }

    // Load all files
    Promise.all(files.filter(file => !isFileLoaded(file)).map(loadFile))
        .then(() => {
            callback();
        })
        .catch(err => console.error(err));
}
