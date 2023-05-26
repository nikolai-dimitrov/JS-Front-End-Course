window.addEventListener("load", solve);

function solve() {
    let publishBtn = document.getElementById('form-btn');
    publishBtn.addEventListener('click', onPublish);

    let firstName = document.getElementById('first-name');
    let lastName = document.getElementById('last-name');
    let age = document.getElementById('age');
    let storyTitle = document.getElementById('story-title');
    let genre = document.getElementById('genre');
    let storyText = document.getElementById('story');
    let testObjMapper = {

    }

    function onPublish(event) {
        let listOfFormFields = [firstName, lastName, age, storyTitle, genre, storyText];
        let countOfEmptyFields = listOfFormFields.filter(x => x.value === '').length
        if (countOfEmptyFields > 0) {
            return
        }
        let ul = document.getElementById('preview-list');
        // Create elements.
        let li = document.createElement('li');
        li.classList.add('story-info');
        ul.appendChild(li);

        let articleEl = document.createElement('article');
        li.appendChild(articleEl);

        let h4 = document.createElement('h4');
        h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
        articleEl.appendChild(h4);

        let paragraphAge = document.createElement('p');
        paragraphAge.textContent = `Age: ${age.value}`;
        articleEl.appendChild(paragraphAge);

        let paragraphTitle = document.createElement('p');
        paragraphTitle.textContent = `Title: ${storyTitle.value}`;
        articleEl.appendChild(paragraphTitle);

        let paragraphGenre = document.createElement('p');
        paragraphGenre.textContent = `Genre: ${genre.value}`;
        articleEl.appendChild(paragraphGenre);

        let paragraphStory = document.createElement('p');
        paragraphStory.textContent = `${storyText.value}`;
        articleEl.appendChild(paragraphStory);

        let buttonSave = document.createElement('button');
        buttonSave.classList.add('save-btn');
        buttonSave.textContent = 'Save Story';
        buttonSave.addEventListener('click', onSave);
        li.appendChild(buttonSave);

        let buttonEdit = document.createElement('button');
        buttonEdit.classList.add('edit-btn');
        buttonEdit.textContent = 'Edit Story';
        buttonEdit.addEventListener('click', onEdit);
        li.appendChild(buttonEdit);

        publishBtn.disabled = 'true'

        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'Delete Story';
        buttonDelete.addEventListener('click', onDelete);
        li.appendChild(buttonDelete);

        listOfFormFields.forEach(x => {
                if (x.id !== 'genre') {
                    testObjMapper[x.id] = x.value
                    x.value = ''
                }
            }
        );

    }

    function onSave(event) {
        let divMain = document.getElementById('main');
        let mainChildrens = Array.from(divMain.children);
        for (const child of mainChildrens) {
            child.remove();
        }
        let h1 = document.createElement('h1');
        h1.textContent = "Your scary story is saved!";
        divMain.appendChild(h1);
    }

    function onEdit(event) {
        let mainArticle = document.getElementsByTagName('article')[0].children;
        let splitedNames = mainArticle[0].textContent.split(': ')[1].split(' ');
        let firstNameRight = splitedNames[0]
        let lastNameRight = splitedNames[1];
        let ageRight = mainArticle[1].textContent.split(': ')[1];
        let title = mainArticle[2].textContent.split(': ')[1];
        let genreRight = mainArticle[3].textContent.split(': ')[1];
        let storyTextRight = mainArticle[4].textContent;

        console.log(testObjMapper) // -> change 95 to 101 line with info from testObjMapper (ne gi vadi i splitvai)

        firstName.value = firstNameRight;
        lastName.value = lastNameRight;
        age.value = ageRight;
        storyTitle.value = title;
        genre.value = genreRight;
        storyText.value = storyTextRight;

        document.getElementsByClassName('story-info')[0].remove();
        publishBtn.removeAttribute('disabled');

    }

    function onDelete(event) {
        document.getElementsByClassName('story-info')[0].remove();
        publishBtn.removeAttribute('disabled');
    }
}
