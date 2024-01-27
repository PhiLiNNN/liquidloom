let dataArr = {

    'himbeer_mint': {

        'name': 'Himbeer Mint Spritz',
        'description': 'Der Himbeer-Mint-Spritz ist eine erfrischende Fusion aus süßen Himbeeren und belebender Minze, kombiniert mit sprudelndem Wasser. Dieses prickelnde Getränk bietet eine perfekte Balance zwischen fruchtiger Süße  und erfrischender Minznote, ideal, um den Durst an warmen Tagen zu stillen und den Gaumen zu verwöhnen. Ein genussvolles, aromatisches Erlebnis für Liebhaber von erfrischenden Drinks.',
        'info': '6 min',
        'difficulty': 'easy',
        'category': 'alkoholfrei',
        'quantities': ['30 ', '50 ', '6 ', null, null],
        'units': ['ml','g','','',''],
        'ingredients': ['Zitronensaft', 'frische Himbeeren', 'Minzblätter', 'Sprudelwasser', 'Eiswürfel'],
        'preparation': 'Zerdrücke Himbeeren und Minze, gib Zitronensaft dazu und mixe das Ganze mit Eis und Sprudelwasser. Fertig ist dein erfrischender Himbeer-Minze-Cocktail – einfach, schnell und lecker!',
        'image': 'himbeer_mint.jpg',
        'authorName': 'Jatina S.',
        'authorImage': './img/jatina.png',
    },

    'margarita': {

        'name': 'Margarita',
        'description': 'Die Margarita ist ein klassischer Cocktail mit Tequila, Triple Sec und frischem Limettensaft, der mit einem Salzrand am Glas für die perfekte Balance sorgt.',
        'info': '5 min',
        'difficulty': 'easy',
        'category': 'alkoholisch',
        'quantities': ['50 ', '30 ', '30 ', null],
        'units': ['ml','ml','ml',''],
        'ingredients': ['Tequila', 'Triple Sec (Likör)', 'Limettensaft', 'Salz für den Glasrand'],
        'preparation': 'Zutaten mit Eis in einen Shaker geben, gut schütteln und in ein mit Salz gerandetes Glas gießen.',
        'image': 'margarita.jpg',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    },

    'virgin_mojito': {

        'name': 'Virgin Mojito',
        'description': 'Der Virgin Mojito ist ein erfrischender Mix aus frischer Minze, Limettensaft und Sprudelwasser, der die Sinne belebt. Mit einem Hauch von Süße und viel Frische ist er perfekt für heiße Tage.',
        'info': '5 min',
        'difficulty': 'easy',
        'category': 'alkoholfrei',
        'quantities': ['30 ', '8 ', '1 ', null],
        'units': ['ml','Blätter','Teelöffel',''],
        'ingredients': ['frischer Limettensaft','frische Minze', 'Zucker', 'Sprudelwasser'],
        'preparation': 'Minze und Zucker in ein Glas geben, zerstoßen. Limettensaft hinzufügen und mit Eis auffüllen. Mit Sprudelwasser mischen',
        'image': 'virgin_mojito.jpg',
        'authorName': 'Silas V.',
        'authorImage': './img/silas.png',
    },

    'vegan_pina_colada': {

        'name': 'Vegan Piña Colada',
        'description': 'Die Vegan Piña Colada ist eine milchfreie Variante des Klassikers, die mit Kokosmilch, Ananassaft und Kokosnusscreme einen cremigen und exotischen Geschmack bietet.',
        'info': '7 min',
        'difficulty': 'easy',
        'category': 'vegan',
        'quantities': ['60 ', '90 ', '30 ', null],
        'units': ['ml','ml','ml',''],
        'ingredients': ['Kokosmilch', 'Ananassaft', 'Kokosnusscreme', 'Eiswürfel'],
        'preparation': 'Alle Zutaten in einen Mixer geben und gut mixen. In ein Glas gießen und mit Eis servieren.',
        'image': 'pina_colada.jpg',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    },

    'erdbeer_basilikum_limonade': {

        'name': 'Erdbeer-Basilikum-Limonade',
        'description': 'Diese Erdbeer-Basilikum-Limonade kombiniert süße Erdbeeren, aromatisches Basilikum und spritzige Limonade zu einem köstlichen und erfrischenden Getränk.',
        'info': '7 min',
        'difficulty': 'easy',
        'category': 'alkoholfrei',
        'quantities': ['30 ', '120 ','5', '3'],
        'units': ['ml','ml','',''],
        'ingredients': ['Agavensirup', 'Limonade', 'Erdbeeren, gewürfelt', 'Basilikumblätter'],
        'preparation': 'Erdbeeren und Basilikum muddeln, Agavensirup hinzufügen. Mit Eis auffüllen und mit Limonade mischen.',
        'image': 'erdbeer_basil.jpg',
        'authorName': 'Jatina S.',
        'authorImage': './img/jatina.png',
    },
    
    'moscow_mule': {

        'name': 'Moscow Mule',
        'description': 'Der Moscow Mule überzeugt mit einer Mischung aus Wodka, Ingwerbier und Limettensaft – ein erfrischender Cocktail mit einem angenehmen Kick.',
        'info': '6 min',
        'difficulty': 'easy',
        'category': 'alkoholisch',
        'quantities': ['60 ', '120 ','15 ', null],
        'units': ['ml','ml','ml',''],
        'ingredients': ['Wodka', 'Ingwerbier', 'frischer Limettensaft', 'Eiswürfel'],
        'preparation': 'Wodka und Limettensaft in ein Glas geben, mit Eis auffüllen und mit Ingwerbier mischen.',
        'image': 'moscow_mule.jpg',
        'authorName': 'Silas V.',
        'authorImage': './img/silas.png',
    },
    
    'kokosnuss_ananas_smoothie': {

        'name': 'Kokosnuss Ananas Smoothie',
        'description': 'Beschreibung: Der Kokosnuss-Ananas-Smoothie ist ein cremiger und tropischer Genuss mit Kokosnuss und Ananas.',
        'info': '5 min',
        'difficulty': 'easy',
        'category': 'alkoholfrei',
        'quantities': ['60 ', '120 ',  '1', null],
        'units': ['ml','ml','',''],
        'ingredients': ['Kokosmilch', 'Ananassaft', 'Banane', 'Eiswürfel'],
        'preparation': 'Alle Zutaten in einen Mixer geben und glatt pürieren. In ein Glas gießen und servieren.',
        'image': 'kokos_smoothie.jpg',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    },
    
    'klassischer_mojito': {

        'name': 'klassischer Mojito (vegan)',
        'description': 'Dieser klassische Mojito ohne tierische Produkte vereint frische Minze, Limettensaft, weißer Rum und Sprudelwasser zu einem erfrischenden und aromatischen Cocktail.',
        'info': '6 min',
        'difficulty': 'easy',
        'category': 'vegan',
        'quantities': ['30 ', '60 ',  '8 ', '1', null],
        'units': ['ml','ml','Blätter','Teelöfel',''],
        'ingredients': ['frischer Limettensaft', 'weißer Rum', 'frische Minze', 'Zucker', 'Sprudelwasser'],
        'preparation': 'Minze und Zucker zerstoßen, Limettensaft und Rum hinzufügen. Mit Eis und Sprudelwasser mischen.',
        'image': 'mojito.jpg',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    },
    
    'basilikum_spritzer': {

        'name': 'Blaubeer-Basilikum-Spritzer',
        'description': 'Der Blaubeer-Basilikum-Spritzer kombiniert frische Blaubeeren mit Basilikum und Sprudelwasser zu einem veganen Cocktail, der süß, herb und erfrischend zugleich ist.',
        'info': '5 min',
        'difficulty': 'easy',
        'category': 'vegan',
        'quantities': ['30 ', '50 ',  '6 ', null],
        'units': ['ml','g','Blätter',''],
        'ingredients': ['Zitronensaft', 'frische Blaubeeren', 'Basilikum', 'Sprudelwasser'],
        'preparation': 'Blaubeeren und Basilikum zerdrücken, Zitronensaft hinzufügen. Mit Eis und Sprudelwasser mischen.',
        'image': 'blaubeer_spritz.jpg',
        'authorName': 'Silas V.',
        'authorImage': './img/silas.png',
    },
    
    'limetten_zitronen_tee': {

        'name': 'Limetten-Zitronen-Tee',
        'description': 'Dieser Limetten-Zitronen-Tee ist ein wärmender und belebender Cocktail mit Ingwer und Limette.',
        'info': '8 min',
        'difficulty': 'easy',
        'category': 'alkoholfrei',
        'quantities': ['240 ', '15 ', '1 ', '1 '],
        'units': ['ml','ml','Teelöffel','Teelöffel'],
        'ingredients': ['heißer schwarzer Tee', 'frischer Limettensaft', 'Ingwer, gerieben', 'Honig'],
        'preparation': 'Ingwer, Limettensaft und Honig in den Tee geben. Umrühren und genießen.',
        'image': 'limette_ingwer.jpg',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    },
    
    'whiskey_sour': {

        'name': 'Whiskey Sour',
        'description': 'Der Whiskey Sour ist ein ausgewogener Cocktail mit Bourbon Whiskey, Zitronensaft und einfachem Sirup, der sowohl sauer als auch süß ist.',
        'info': '7 min',
        'difficulty': 'easy',
        'category': 'alkoholisch',
        'quantities': ['60 ', '30 ', '15 ', null],
        'units': ['ml','ml','ml',''],
        'ingredients': ['Bourbon Whiskey', 'Zitronensaft', 'einfacher Sirup', 'Eiswürfel'],
        'preparation': 'Zutaten in einen Shaker geben, gut schütteln und in ein Glas mit Eis gießen.',
        'image': 'whiskey_sour.jpg',
        'authorName': 'Silas V.',
        'authorImage': './img/silas.png',
    },
    
    'negroni': {

        'name': 'Negroni',
        'description': 'Der Negroni ist ein kräftiger Cocktail mit einer ausgewogenen Mischung aus Gin, rotem Wermut und Campari, der durch eine Orangenzeste perfekt abgerundet wird.',
        'info': '8 min',
        'difficulty': 'easy',
        'category': 'alkoholisch',
        'quantities': ['30 ', '30 ', '30 ',  null, null],
        'units': ['ml','ml','ml','',''],
        'ingredients': ['Gin', 'roter Wermut', 'Campari', 'Orangenzeste', 'Eiswürfel'],
        'preparation': 'Zutaten in einem Rührglas vermengen, über Eis gießen und mit Orangenzeste garnieren.',
        'image': 'negroni.jpg',
        'authorName': 'Silas V.',
        'authorImage': './img/silas.png',
    },
    
    'winter_spice_mule': {

        'name': 'Winter Spice Mule',
        'description': 'Der Winter Spice Mule ist eine verführerische Mischung aus würzigem Wodka, belebendem Ingwerbier, Zimtsirup und Limettensaft. Diese festliche Kreation bietet eine ausgewogene Balance zwischen wärmenden Gewürzen und erfrischender Säure. Ein kurzweiliges, winterliches Vergnügen für Cocktailliebhaber.',
        'info': '5 min',
        'difficulty': 'easy',
        'category': 'alkoholisch',
        'quantities': ['120 ', '60 ', '30 ', '15 ', null, null],
        'units': ['ml','ml','ml','ml','',''],
        'ingredients': ['Ingwerbier', 'Wodka', 'frisch gepresster Limettensaft', 'Zimtsirup (selbstgemacht oder gekauft)', 'Zimtstange und Limettenscheibe zum Garnieren', 'Eiswürfel'],
        'preparation': 'Shake Wodka, Ingwerbier, Limettensaft und Zimtsirup, gieße über Eis und garniere mit Zimtstange und Limettenscheibe. Optional: Für Winterflair etwas Muskatnuss oder Orangenzeste hinzufügen. Prost!',
        'image': 'pumpkin_spice_mule.png',
        'authorName': 'Philipp W.',
        'authorImage': './img/philipp.png',
    }
}

function render() {
    let storedID  = getID();
    generateHeaderHTML(storedID);
    generateShortInfoHTML(storedID);
    generateTableHTML(storedID);
    generatePreparationHTML(storedID);
    generateCocktailImages(storedID);
    generateAuthorHTML(storedID);
    generateColor(storedID);
    checkDeviceType();
}


function recipe(name) { localStorage.setItem('ID', JSON.stringify(name)); }
function getID() { return JSON.parse(localStorage.getItem('ID')); }


function generateHeaderHTML(storedID) {
    let titel = document.getElementById('titelPlusRecipeContainer');
    let cocktailHeader = dataArr[storedID].name;
    let descriptionText = dataArr[storedID].description;
    titel.innerHTML = '';
    titel.innerHTML += templateHeaderHTML(cocktailHeader, descriptionText);
}


function generateShortInfoHTML(storedID) { 
    let shortInfo = document.getElementById('shortInfo');
    let shortInfoTime = dataArr[storedID].info;
    let shortInfoDifficulty = dataArr[storedID].difficulty;
    let shortInfoCategory = dataArr[storedID].category;
    shortInfo.innerHTML = '';
    shortInfo.innerHTML += templateShortInfoHTML(shortInfoTime, shortInfoDifficulty, shortInfoCategory);
}



function generateTableHTML(storedID) {
    let table = document.getElementById('table');
    table.innerHTML = templateTableHeader();
    let tbody = table.querySelector('tbody');

    for (let i = 0; i < dataArr[storedID]['quantities'].length; i++) {
        let quantity = dataArr[storedID]['quantities'][i];
        let unit = dataArr[storedID]['units'][i];
        let ingredient = dataArr[storedID]['ingredients'][i];
        tbody.innerHTML += templateTableBody(quantity, unit, ingredient);
    }
}


function generatePreparationHTML(storedID) {
    let prep = document.getElementById('prep');
    let prepText = dataArr[storedID].preparation;
    prep.innerHTML = templatePreparationHTML(prepText);
}


function generateCocktailImages(storedID) {
    let image = document.getElementById('image');
    let cocktailImage = dataArr[storedID].image;
    image.innerHTML = templateCocktailImages(cocktailImage);
}


function generateAuthorHTML(storedID) {
    let author = document.getElementById('author');
    let authorName = dataArr[storedID].authorName;
    let authorImage = dataArr[storedID].authorImage;
    author.innerHTML = templateAuthorHTML(authorImage, authorName);
}


function generateColor(storedID) {
    let bgColor = colorCondition(storedID);
    document.querySelector('.dot_below1').style.backgroundColor = bgColor;
    document.querySelector('.dot_below2').style.backgroundColor = bgColor;
    document.querySelector('.dot_above1').style.backgroundColor = bgColor;
    document.querySelector('.dot_above2').style.backgroundColor = bgColor;
    document.querySelector('.recipe_shortinfo').style.backgroundColor = bgColor;
}


function colorCondition(storedID) {
    let backgroundColor;
    let pageTheme = dataArr[storedID].category;
    
    if (pageTheme === 'alkoholfrei') { return backgroundColor = '#A890C4'; } 
    else if (pageTheme === 'alkoholisch') { return backgroundColor = '#3BA3DE'; }
    else if (pageTheme === 'vegan') { return backgroundColor = '#D76BA5'; }
}


// --------------- template functions ---------------------------------
function templateHeaderHTML(name, description) {
    return `
        <div class="recipe_title">${name}</div>
        <p class="recipe_info">${description}</p>`;
}


function templateShortInfoHTML(time, difficulty, category) { 
    return `
        <span class="shortinfo_block"><img src="./img/history-icon.svg" class="shortinfo_img">${time}</span>
        <span class="recipe_vertical-line"></span>
        <span class="shortinfo_block"><img src="./img/innovative-brain-icon.svg" class="shortinfo_img">${difficulty}</span>
        <span class="recipe_vertical-line"></span>
        <span class="shortinfo_block"><img src="./img/cocktail-drink-glass-icon.svg"class="shortinfo_img">${category}</span>`;
}


function templateTableHeader() {
    return  `
        <table>
            <thead>
                <tr>
                    <th>Menge</th>
                    <th>Zutat</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>`;
}


function templateTableBody(quantity, unit, ingredient) {
    return  `
        <tr>
            <td>${quantity !== null ? quantity : ''} ${unit}</td>
            <td>${ingredient}</td>
        </tr>`;
}


function templatePreparationHTML(prepText) {
    return `
        <h2>Zubereitung</h2>
        <span>${prepText}</span>`;
}


function templateCocktailImages(img) { return `<img src="./img/cocktailsImg/${img}" alt="Himbeer-Mint-Spritz">`; }


function templateAuthorHTML(img, name) {
    return `
        <span>Author:</span>
        <div class="recipe_author_icon">
            <img src="${img}" alt="Profilbild" class="profilpic">
            <span class="recipeUsername">${name}</span>
        </div>`;
}

// Button

function totalClick(click) {
    const sum = document.getElementById('totalClicks');
    let sumValue = parseInt(sum.innerText) + click;

    if (sumValue < 1) {
        sumValue = 1;
    } else if (sumValue > 20) {
        sumValue = 20;
    }

    sum.innerText = sumValue;

    updateTableQuantities(sumValue);
}

function updateTableQuantities(totalPortions) {
    let storedID = getID();
    let unit = dataArr[storedID]['units'];
    let quantities = dataArr[storedID]['quantities'];
    let tableRows = document.querySelectorAll('#table tbody tr');

    tableRows.forEach((row, i) => {
        let quantityCell = row.querySelector('td:first-child');
        let originalQuantity = quantities[i];
        let originalUnit = unit[i];
        let updatedQuantity = calculateUpdatedQuantity(originalQuantity, originalUnit, totalPortions);
        quantityCell.innerText = updatedQuantity;
    });
}

function calculateUpdatedQuantity(originalQuantity, originalUnit, totalPortions) {
    return originalQuantity ? `${(parseInt(originalQuantity) * totalPortions)} ${originalUnit}` : '';
}

function openMobileNav() {
    let mobileArrows = document.getElementById('rotet-mobile-arrows');
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") { 
        mobileArrows.style.transform = "rotate(0deg)";
        x.style.display = "none"; 
    } 
    else { 
        mobileArrows.style.transform = "rotate(180deg)";
        x.style.display = "block";
        closeMobileNavByClick(mobileArrows, x);
        
     }
}

function closeMobileNavByClick(mobileArrows, x) {
    document.addEventListener('click', e => {
        let container = document.getElementById('close-nav-by-click');
        if (!container.contains(e.target)) {
            mobileArrows.style.transform = "rotate(0deg)";
            x.style.display = "none"; 
        }
    });
}

// ---------Decide which web navbar to use, the following is with onclick function else  hovering will be used --------------------
// function openWebPageNav() {
//     let navbar = document.getElementById('navbar-id');
//     let computedStyle = window.getComputedStyle(navbar);
//     let webArrows = document.getElementById('close-Webnav-by-click');

//     if (computedStyle.width === "64px") {
//         navbar.style.width = '19rem';
//         webArrows.style.transform = "rotate(180deg)";
//         iterateOverAllLinkElements('block');
//     } else  {
//         navbar.style.width = '4rem';
//         console.log(computedStyle.width);
//         webArrows.style.transform = "rotate(0deg)";
//         iterateOverAllLinkElements('none');
//     }
// }


