// Variables globales
let currentExerciseIndex = { fr: 0, ru: 0 };
let currentFlashcardIndex = { fr: 0, ru: 0 };
let currentExerciseType = { fr: 'traduction', ru: 'traduction' };

// Statistiques
let stats = {
    correct: 0,
    incorrect: 0,
    wordsLearned: new Set(),
    categoryProgress: {},
    currentStreak: 0,
    bestStreak: 0,
    lastActivity: null
};

// Charger les statistiques depuis localStorage
function loadStats() {
    const saved = localStorage.getItem('langueEchangeStats');
    if (saved) {
        const parsed = JSON.parse(saved);
        stats = { ...stats, ...parsed };
        stats.wordsLearned = new Set(parsed.wordsLearned || []);
    }
    updateStatsDisplay();
}

// Sauvegarder les statistiques
function saveStats() {
    const toSave = {
        ...stats,
        wordsLearned: Array.from(stats.wordsLearned)
    };
    localStorage.setItem('langueEchangeStats', JSON.stringify(toSave));
    updateStatsDisplay();
}

// Mettre à jour l'affichage des statistiques
function updateStatsDisplay() {
    document.getElementById('stat-correct').textContent = stats.correct;
    document.getElementById('stat-words').textContent = stats.wordsLearned.size;
    const accuracy = stats.correct + stats.incorrect > 0 
        ? Math.round((stats.correct / (stats.correct + stats.incorrect)) * 100) 
        : 0;
    document.getElementById('stat-accuracy').textContent = accuracy + '%';
    document.getElementById('stat-streak').textContent = stats.currentStreak;
    
    updateCategoryProgress();
}

// Mettre à jour la progression par catégorie
function updateCategoryProgress() {
    const container = document.getElementById('category-progress');
    if (!container) return;
    
    container.innerHTML = '';
    Object.keys(vocabData.francais).forEach(category => {
        const progress = stats.categoryProgress[category] || 0;
        const card = document.createElement('div');
        card.className = 'progress-card';
        card.innerHTML = `
            <h4>${category.charAt(0).toUpperCase() + category.slice(1)}</h4>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${progress}%"></div>
            </div>
            <span>${progress}%</span>
        `;
        container.appendChild(card);
    });
}

// Réinitialiser les statistiques
function resetStats() {
    if (confirm('Êtes-vous sûr de vouloir réinitialiser toutes vos statistiques ?')) {
        stats = {
            correct: 0,
            incorrect: 0,
            wordsLearned: new Set(),
            categoryProgress: {},
            currentStreak: 0,
            bestStreak: 0,
            lastActivity: null
        };
        localStorage.removeItem('langueEchangeStats');
        updateStatsDisplay();
    }
}

// Exporter la progression
function exportProgress() {
    const data = {
        stats: {
            ...stats,
            wordsLearned: Array.from(stats.wordsLearned)
        },
        date: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `progression-langue-echange-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
}

// Recherche
function openSearch() {
    document.getElementById('search-modal').style.display = 'block';
    document.getElementById('search-input').focus();
}

function closeSearch() {
    document.getElementById('search-modal').style.display = 'none';
}

function searchWord(query) {
    const results = document.getElementById('search-results');
    results.innerHTML = '';
    
    if (query.length < 2) return;
    
    const queryLower = query.toLowerCase();
    const found = [];
    
    // Chercher dans le vocabulaire français
    Object.keys(vocabData.francais).forEach(category => {
        vocabData.francais[category].forEach(item => {
            if (item.fr.toLowerCase().includes(queryLower) || 
                item.ru.toLowerCase().includes(queryLower)) {
                found.push({ ...item, category, lang: 'fr' });
            }
        });
    });
    
    // Chercher dans le vocabulaire russe
    Object.keys(vocabData.russe).forEach(category => {
        vocabData.russe[category].forEach(item => {
            if (item.fr.toLowerCase().includes(queryLower) || 
                item.ru.toLowerCase().includes(queryLower)) {
                found.push({ ...item, category, lang: 'ru' });
            }
        });
    });
    
    if (found.length === 0) {
        results.innerHTML = '<p class="no-results">Aucun résultat trouvé</p>';
        return;
    }
    
    found.slice(0, 20).forEach(item => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div class="search-word">
                <strong>${item.lang === 'fr' ? item.fr : item.ru}</strong>
                <span class="search-translation">${item.lang === 'fr' ? item.ru : item.fr}</span>
            </div>
            <span class="search-category">${item.category}</span>
        `;
        results.appendChild(resultItem);
    });
}

// Navigation entre les sections
document.addEventListener('DOMContentLoaded', function() {
    // Charger les statistiques
    loadStats();
    
    // Charger le contenu initial
    loadVocabContent('fr', 'salutations');
    loadVocabContent('ru', 'salutations');
    loadPhrasesContent('fr', 'restaurant');
    loadPhrasesContent('ru', 'restaurant');
    loadAlphabet();
    initExercises('fr');
    initExercises('ru');
    
    // Recherche
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchWord(e.target.value);
        });
    }
    
    // Fermer la modal
    document.querySelector('.close-modal')?.addEventListener('click', closeSearch);
    document.getElementById('search-modal')?.addEventListener('click', function(e) {
        if (e.target === this) closeSearch();
    });
    
    // Raccourci clavier pour la recherche (Ctrl/Cmd + K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
        }
        if (e.key === 'Escape') {
            closeSearch();
        }
    });

    // Navigation principale
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            const target = document.getElementById(targetSection);
            if (target) {
                target.classList.add('active');
            }
            
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Navigation via les cartes hero
    const heroCards = document.querySelectorAll('.card[data-target]');
    heroCards.forEach(card => {
        card.addEventListener('click', () => {
            const target = card.getAttribute('data-target');
            
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            const targetSection = document.getElementById(target);
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });

    // Système d'onglets
    const tabButtons = document.querySelectorAll('.tab-btn');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');
            const tabGroup = button.closest('.section');
            
            if (tabGroup) {
                const groupTabs = tabGroup.querySelectorAll('.tab-btn');
                const groupContents = tabGroup.querySelectorAll('.tab-content');
                
                groupTabs.forEach(tab => tab.classList.remove('active'));
                groupContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            }
        });
    });

    // Catégories de vocabulaire
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const section = this.closest('.section');
            const lang = section.id === 'francais' ? 'fr' : 'ru';
            
            document.querySelectorAll(`#${section.id} .category-btn`).forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadVocabContent(lang, category);
        });
    });

    // Catégories de phrases
    document.querySelectorAll('.phrase-cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            const section = this.closest('.section');
            const lang = section.id === 'francais' ? 'fr' : 'ru';
            
            document.querySelectorAll(`#${section.id} .phrase-cat-btn`).forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            loadPhrasesContent(lang, category);
        });
    });

    // Types d'exercices
    document.querySelectorAll('.exercise-type-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            const section = this.closest('.section');
            const lang = section.id === 'francais' ? 'fr' : 'ru';
            
            document.querySelectorAll(`#${section.id} .exercise-type-btn`).forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentExerciseType[lang] = type;
            initExercises(lang);
        });
    });

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.card, .feature-card, .lesson-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Animation des éléments de vocabulaire
    document.querySelectorAll('.vocab-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.02)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
        });
    });

    // Effet ripple sur les boutons
    document.querySelectorAll('button, .btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});

// Charger le contenu de vocabulaire
function loadVocabContent(lang, category) {
    const container = document.getElementById(`vocab-content-${lang}`);
    if (!container || !vocabData[lang === 'fr' ? 'francais' : 'russe']) return;
    
    const data = vocabData[lang === 'fr' ? 'francais' : 'russe'][category];
    if (!data) return;
    
    container.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'lesson-card';
    
    const categoryNames = {
        salutations: lang === 'fr' ? 'Les Salutations' : 'Приветствия',
        nombres: lang === 'fr' ? 'Les Nombres' : 'Числа',
        famille: lang === 'fr' ? 'La Famille' : 'Семья',
        couleurs: lang === 'fr' ? 'Les Couleurs' : 'Цвета',
        animaux: lang === 'fr' ? 'Les Animaux' : 'Животные',
        nourriture: lang === 'fr' ? 'La Nourriture' : 'Еда',
        corps: lang === 'fr' ? 'Le Corps' : 'Тело',
        temps: lang === 'fr' ? 'Le Temps' : 'Время',
        transports: lang === 'fr' ? 'Les Transports' : 'Транспорт',
        maison: lang === 'fr' ? 'La Maison' : 'Дом',
        vetements: lang === 'fr' ? 'Les Vêtements' : 'Одежда',
        meteo: lang === 'fr' ? 'La Météo' : 'Погода',
        actions: lang === 'fr' ? 'Les Actions' : 'Действия',
        pays: lang === 'fr' ? 'Les Pays' : 'Страны'
    };
    
    card.innerHTML = `<h3>${categoryNames[category]}</h3><div class="vocab-list"></div>`;
    const vocabList = card.querySelector('.vocab-list');
    
    data.forEach(item => {
        const vocabItem = document.createElement('div');
        vocabItem.className = 'vocab-item';
        const isLearned = stats.wordsLearned.has(item.fr) || stats.wordsLearned.has(item.ru);
        if (isLearned) vocabItem.classList.add('learned');
        
        if (lang === 'fr') {
            vocabItem.innerHTML = `
                <span class="word-fr">${item.fr}</span>
                <span class="word-ru">${item.ru}</span>
                ${isLearned ? '<span class="learned-badge">✓</span>' : ''}
            `;
        } else {
            vocabItem.innerHTML = `
                <span class="word-ru">${item.ru}</span>
                <span class="word-fr">${item.fr}</span>
                ${isLearned ? '<span class="learned-badge">✓</span>' : ''}
            `;
        }
        
        vocabItem.addEventListener('click', () => {
            stats.wordsLearned.add(item.fr);
            stats.wordsLearned.add(item.ru);
            vocabItem.classList.add('learned');
            if (!vocabItem.querySelector('.learned-badge')) {
                vocabItem.innerHTML += '<span class="learned-badge">✓</span>';
            }
            saveStats();
        });
        
        vocabList.appendChild(vocabItem);
    });
    
    container.appendChild(card);
    
    // Mettre à jour la progression de la catégorie
    const progress = Math.round((stats.wordsLearned.size / (data.length * 2)) * 100);
    if (!stats.categoryProgress[category]) {
        stats.categoryProgress[category] = 0;
    }
    stats.categoryProgress[category] = Math.max(stats.categoryProgress[category], progress);
    saveStats();
}

// Charger les phrases utiles
function loadPhrasesContent(lang, category) {
    const container = document.getElementById(`phrases-content-${lang}`);
    if (!container || !phrasesUtiles[lang === 'fr' ? 'francais' : 'russe']) return;
    
    const data = phrasesUtiles[lang === 'fr' ? 'francais' : 'russe'][category];
    if (!data) return;
    
    container.innerHTML = '';
    const card = document.createElement('div');
    card.className = 'lesson-card';
    
    const categoryNames = {
        restaurant: lang === 'fr' ? 'Au Restaurant' : 'В Ресторане',
        hotel: lang === 'fr' ? 'À l\'Hôtel' : 'В Отеле',
        magasin: lang === 'fr' ? 'Au Magasin' : 'В Магазине',
        voyage: lang === 'fr' ? 'En Voyage' : 'В Путешествии',
        urgence: lang === 'fr' ? 'Urgences' : 'Срочность'
    };
    
    card.innerHTML = `<h3>${categoryNames[category]}</h3><div class="phrase-list"></div>`;
    const phraseList = card.querySelector('.phrase-list');
    
    data.forEach(item => {
        const phraseItem = document.createElement('div');
        phraseItem.className = 'phrase-item';
        if (lang === 'fr') {
            phraseItem.innerHTML = `<p class="phrase-fr">${item.fr}</p><p class="phrase-ru">${item.ru}</p>`;
        } else {
            phraseItem.innerHTML = `<p class="phrase-ru">${item.ru}</p><p class="phrase-fr">${item.fr}</p>`;
        }
        phraseList.appendChild(phraseItem);
    });
    
    container.appendChild(card);
}

// Charger l'alphabet russe complet
function loadAlphabet() {
    const container = document.getElementById('alphabet-complete');
    if (!container || !alphabetRusse) return;
    
    alphabetRusse.forEach(letter => {
        const item = document.createElement('div');
        item.className = 'alphabet-item';
        item.innerHTML = `
            <span class="cyrillic">${letter.lettre}</span>
            <span class="transcription">${letter.son}</span>
            <span class="alphabet-name">${letter.nom}</span>
        `;
        container.appendChild(item);
    });
}

// Initialiser les exercices
function initExercises(lang) {
    const container = document.getElementById(`exercise-container-${lang}`);
    const questionEl = document.getElementById(`question-${lang}`);
    const contentEl = document.getElementById(`exercise-content-${lang}`);
    const resultEl = document.getElementById(`result-${lang}`);
    const nextBtn = document.getElementById(`next-${lang}`);
    
    if (!container) return;
    
    currentExerciseIndex[lang] = 0;
    resultEl.textContent = '';
    resultEl.className = 'result';
    nextBtn.style.display = 'none';
    
    if (currentExerciseType[lang] === 'flashcard') {
        initFlashcards(lang);
    } else {
        loadExercise(lang);
    }
}

// Charger un exercice
function loadExercise(lang) {
    const exercises = exercices[lang === 'fr' ? 'francais' : 'russe'];
    if (!exercises || exercises.length === 0) return;
    
    const index = currentExerciseIndex[lang] % exercises.length;
    const exercise = exercises[index];
    const questionEl = document.getElementById(`question-${lang}`);
    const contentEl = document.getElementById(`exercise-content-${lang}`);
    const resultEl = document.getElementById(`result-${lang}`);
    
    questionEl.textContent = exercise.question;
    
    if (currentExerciseType[lang] === 'choix' && exercise.alternatives && exercise.alternatives.length > 0) {
        contentEl.innerHTML = '';
        exercise.alternatives.forEach((alt, i) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = alt;
            btn.onclick = () => checkChoiceAnswer(lang, alt, exercise.reponse);
            contentEl.appendChild(btn);
        });
    } else {
        contentEl.innerHTML = `
            <input type="text" id="answer-${lang}" placeholder="${lang === 'fr' ? 'Votre réponse en russe...' : 'Votre réponse en français...'}">
            <button class="btn-check" onclick="checkExerciseAnswer('${lang}')">${lang === 'fr' ? 'Vérifier' : 'Проверить'}</button>
        `;
    }
    
    resultEl.textContent = '';
    resultEl.className = 'result';
}

// Vérifier la réponse d'un exercice
function checkExerciseAnswer(lang) {
    const exercises = exercices[lang === 'fr' ? 'francais' : 'russe'];
    const index = currentExerciseIndex[lang] % exercises.length;
    const exercise = exercises[index];
    const answerInput = document.getElementById(`answer-${lang}`);
    const resultEl = document.getElementById(`result-${lang}`);
    const nextBtn = document.getElementById(`next-${lang}`);
    
    if (!answerInput || !resultEl) return;
    
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correct = exercise.reponse.toLowerCase();
    const isCorrect = userAnswer === correct || userAnswer.replace(/[.,!?]/g, '') === correct.replace(/[.,!?]/g, '');
    
    // Mettre à jour les statistiques
    if (isCorrect) {
        stats.correct++;
        stats.currentStreak++;
        if (stats.currentStreak > stats.bestStreak) {
            stats.bestStreak = stats.currentStreak;
        }
        resultEl.textContent = lang === 'fr' ? '✓ Correct ! Excellente réponse !' : '✓ Правильно! Отличный ответ!';
        resultEl.className = 'result success';
        
        // Ajouter le mot aux mots appris
        if (exercise.word) {
            stats.wordsLearned.add(exercise.word);
        }
    } else {
        stats.incorrect++;
        stats.currentStreak = 0;
        resultEl.textContent = `${lang === 'fr' ? '✗ Incorrect. La bonne réponse est :' : '✗ Неправильно. Правильный ответ:'} "${exercise.reponse}"`;
        resultEl.className = 'result error';
    }
    
    stats.lastActivity = new Date().toISOString();
    saveStats();
    nextBtn.style.display = 'block';
}

// Vérifier une réponse à choix multiple
function checkChoiceAnswer(lang, selected, correct) {
    const resultEl = document.getElementById(`result-${lang}`);
    const nextBtn = document.getElementById(`next-${lang}`);
    const buttons = document.querySelectorAll(`#exercise-content-${lang} .choice-btn`);
    
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.style.background = 'var(--success-color)';
        } else if (btn.textContent === selected && selected !== correct) {
            btn.style.background = 'var(--error-color)';
        }
    });
    
    const isCorrect = selected === correct;
    
    // Mettre à jour les statistiques
    if (isCorrect) {
        stats.correct++;
        stats.currentStreak++;
        if (stats.currentStreak > stats.bestStreak) {
            stats.bestStreak = stats.currentStreak;
        }
        resultEl.textContent = lang === 'fr' ? '✓ Correct !' : '✓ Правильно!';
        resultEl.className = 'result success';
    } else {
        stats.incorrect++;
        stats.currentStreak = 0;
        resultEl.textContent = `${lang === 'fr' ? '✗ Incorrect.' : '✗ Неправильно.'} ${lang === 'fr' ? 'La bonne réponse est :' : 'Правильный ответ:'} "${correct}"`;
        resultEl.className = 'result error';
    }
    
    stats.lastActivity = new Date().toISOString();
    saveStats();
    nextBtn.style.display = 'block';
}

// Exercice suivant
function nextExercise(lang) {
    currentExerciseIndex[lang]++;
    const resultEl = document.getElementById(`result-${lang}`);
    const nextBtn = document.getElementById(`next-${lang}`);
    
    resultEl.textContent = '';
    resultEl.className = 'result';
    nextBtn.style.display = 'none';
    
    if (currentExerciseType[lang] === 'flashcard') {
        nextFlashcard(lang);
    } else {
        loadExercise(lang);
    }
}

// Initialiser les flashcards
function initFlashcards(lang) {
    const vocab = vocabData[lang === 'fr' ? 'francais' : 'russe'];
    if (!vocab) return;
    
    const allWords = [];
    Object.keys(vocab).forEach(category => {
        vocab[category].forEach(item => {
            allWords.push(item);
        });
    });
    
    if (allWords.length === 0) return;
    
    currentFlashcardIndex[lang] = 0;
    showFlashcard(lang, allWords);
}

// Afficher une flashcard
function showFlashcard(lang, words) {
    const index = currentFlashcardIndex[lang] % words.length;
    const word = words[index];
    const questionEl = document.getElementById(`question-${lang}`);
    const contentEl = document.getElementById(`exercise-content-${lang}`);
    const resultEl = document.getElementById(`result-${lang}`);
    
    questionEl.textContent = lang === 'fr' ? `Traduisez : "${word.fr}"` : `Переведите : "${word.ru}"`;
    contentEl.innerHTML = `
        <div class="flashcard">
            <div class="flashcard-front">
                <p class="flashcard-word">${lang === 'fr' ? word.fr : word.ru}</p>
                <button class="btn-flip" onclick="flipFlashcard('${lang}')">${lang === 'fr' ? 'Voir la réponse' : 'Показать ответ'}</button>
            </div>
            <div class="flashcard-back" style="display:none;">
                <p class="flashcard-word">${lang === 'fr' ? word.ru : word.fr}</p>
                <button class="btn-flip" onclick="flipFlashcard('${lang}')">${lang === 'fr' ? 'Masquer' : 'Скрыть'}</button>
            </div>
        </div>
    `;
    resultEl.textContent = '';
    resultEl.className = 'result';
}

// Retourner une flashcard
function flipFlashcard(lang) {
    const front = document.querySelector(`#exercise-content-${lang} .flashcard-front`);
    const back = document.querySelector(`#exercise-content-${lang} .flashcard-back`);
    
    if (front && back) {
        if (front.style.display === 'none') {
            front.style.display = 'block';
            back.style.display = 'none';
        } else {
            front.style.display = 'none';
            back.style.display = 'block';
        }
    }
}

// Flashcard suivante
function nextFlashcard(lang) {
    currentFlashcardIndex[lang]++;
    const vocab = vocabData[lang === 'fr' ? 'francais' : 'russe'];
    const allWords = [];
    Object.keys(vocab).forEach(category => {
        vocab[category].forEach(item => {
            allWords.push(item);
        });
    });
    showFlashcard(lang, allWords);
}

// Style ripple
const style = document.createElement('style');
style.textContent = `
    button, .btn-primary {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .flashcard {
        perspective: 1000px;
        margin: 2rem 0;
    }
    
    .flashcard-front, .flashcard-back {
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 15px;
        padding: 3rem;
        text-align: center;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .flashcard-word {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: var(--primary-color);
    }
    
    .choice-btn {
        display: block;
        width: 100%;
        padding: 1rem;
        margin: 0.5rem 0;
        background: var(--bg-card);
        border: 1px solid var(--border-color);
        border-radius: 10px;
        color: var(--text-primary);
        cursor: pointer;
        transition: all 0.3s;
        font-size: 1rem;
    }
    
    .choice-btn:hover {
        background: var(--primary-color);
        border-color: var(--primary-color);
    }
    
    .choice-btn:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
`;
document.head.appendChild(style);
