function attachEvents() {
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', loadComments);
    let paragraphPostBody = document.getElementById('post-body');
    let selectField = document.getElementById('posts');
    let h1Title = document.getElementById('post-title');
    let ulWithComments = document.getElementById('post-comments');

    async function getPostsJSON() {
        try {
            let response = await fetch('http://localhost:3030/jsonstore/blog/posts');
            if (!response.ok) {
                throw new Error('underined fata');
            }
            let data = await response.json();
            return data
        } catch (error) {
            console.log(error.message);
        }
    }

    async function loadPosts() {
        selectField.innerHTML = ''
        let data = await getPostsJSON();
        // try {
        // if (data === undefined) {
        //     throw new Error()
        // }
        for (let key in data) {
            let {title} = data[key]
            let optionFields = document.createElement('option');
            optionFields.value = key;
            optionFields.textContent = title;
            selectField.appendChild(optionFields);
        }
        // } catch (error) {
        //     console.log(error.message)
        // }

    }


    async function loadComments() {
        ulWithComments.innerHTML = '';
        try {
            let response = await fetch('http://localhost:3030/jsonstore/blog/comments');
            if (!response.ok) {
                throw new Error();
            }
            let data = await response.json();
            let postsData = await getPostsJSON();
            let postBodyText = postsData[selectField.value].body;
            let selectedFieldText = selectField.options[selectField.selectedIndex].textContent;
            h1Title.textContent = selectedFieldText;
            paragraphPostBody.textContent = postBodyText;
            let arrayWithObjects = Object.entries(data).filter((key) => key[1].postId === selectField.value);
            arrayWithObjects.forEach(x => {
                let liEl = document.createElement('li');
                liEl.textContent = x[1].text;
                ulWithComments.appendChild(liEl);
            })
        } catch (error) {
            console.log(error.message);
        }
    }
}

attachEvents();