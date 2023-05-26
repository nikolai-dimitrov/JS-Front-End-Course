function attachEvents() {
    document.getElementById('refresh').addEventListener('click', onRefresh);
    document.getElementById('submit').addEventListener('click', onSubmit);
    let textAreaElement = document.getElementById('messages');
    let baseUrl = 'http://localhost:3030/jsonstore/messenger'

    async function onRefresh() {
        try {
            let response = await fetch(baseUrl);
            if (!response.ok) {
                throw new Error();
            }
            let data = await response.json();
            // let resultContent = ''
            textAreaElement.value = ''
            for (const key in data) {
                let {author, content} = data[key];
                textAreaElement.value += `${author}: ${content}\n`;
                // resultContent += `${author}: ${content}\n`;
                // resultContent.trimEnd();
            }
            // textAreaElement.value = resultContent;
        } catch (error) {
            console.log(error);
        }
    }

    async function onSubmit() {
        let authorInput = document.querySelector('input[name="author"]');
        let contentInput = document.querySelector('input[name="content"]');
        let authorName = authorInput.value;
        let content = contentInput.value;
        try {
            let resultObj = JSON.stringify({
                    'author': authorName,
                    content
                }
            );
            let requestObject = {
                'method': "post",
                'headers': {"Content-Type": "application/json",},
                'body': resultObj,
            }

            let request = await fetch(baseUrl, requestObject);
            if (!request.ok) {
                throw new Error();
            }
            let data = await request.json();
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();