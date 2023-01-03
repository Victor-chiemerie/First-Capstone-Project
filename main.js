// Mobile Menu

const hamburger = document.querySelector('#hamburger');
const closeMenu = document.querySelector('#glyphicon-remove');
const mobileMenu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelectorAll('#mobile-menu li');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

menuLinks.forEach((link) => {
  link.addEventListener('click', toggleMenu);
});

// Dynmaic Creation

const speakers = document.querySelector('#speakers');
const FeaturedSpeaker = document.createElement('div');
const ul_list = document.createElement('ul');

FeaturedSpeaker.innerHTML = `
        <h2 class="text-dark">Featured Speakers</h2>
        <div class="orange-line"></div>
    `;

speakers.appendChild(FeaturedSpeaker);
speakers.appendChild(ul_list);

const presentation = document.querySelector('#speakers ul');

const presenters = [
    {
        id: 1,
        name: 'Nwadinigwe Victor',
        qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        image: 'images/profile.jpg'
    },
    {
        id: 2,
        name: 'Oguzie-Ibeh Richard',
        qualification: 'Director of Art CEntre Nabi and a board member of CC Korea',
        profession: 'AS the main venue for new media art production in Korea, Nabi promotes cross-disiplinary collaboration and understanding among science technology, humanities, and the arts.',
        image: 'images/profile.jpg'
    },
    {
        id: 3,
        name: 'Ebolom Mcsaint',
        qualification: 'Executive director of the Wikimedia Foundation',
        profession: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikimedia. Wikimedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
        image: 'images/profile.jpg'
    },
    {
        id: 4,
        name: 'John Collins',
        qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        image: 'images/profile.jpg'
    },
    {
        id: 5,
        name: 'Edom Nancy',
        qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        image: 'images/profile.jpg'
    },
    {
        id: 6,
        name: 'Akachukwu Smart',
        qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
        profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
        image: 'images/profile.jpg'
    }
];
presenters.forEach((presenter) => {
    const list = document.createElement('li');
    list.classList.add(`presenter${presenter.id}`)
    list.innerHTML = `
        <div class="speaker-image">
            <div class="speaker-bg"></div>
            <img src="${presenter.image}" alt="">
        </div>
        <div class="speaker-info">
            <h3>${presenter.name}</h3>
            <h5>${presenter.qualification}</h5>
            <div></div>
            <p>${presenter.profession}</p>
        </div>
    `;
    presentation.appendChild(list);
});

// See Program

const seeLess = document.querySelector('#see-less');
const seeMore = document.querySelector('#see-more');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const seeDesktop = document.querySelector('#see-program');
// const speakersList = document.querySelectorAll('#speakers-list');

function toggleSeeMobile() {
    speakers.classList.toggle('hidden');
    partners.classList.toggle('hidden');
    footer.classList.toggle('hidden');
    seeLess.classList.toggle('hidden');
    seeMore.classList.toggle('hidden');
    // speakersList.forEach((list) => {
    //     list.classList.toggle('hidden');
    // });
}

function toggleSeeDesktop() {
    // speakersList.forEach((list) => {
    //     list.classList.toggle('hidden');
    // });
    speakers.classList.remove('hidden');
    partners.classList.remove('hidden');
    footer.classList.remove('hidden');
    seeDesktop.classList.add('hidden');
}

seeLess.addEventListener('click', toggleSeeMobile);
seeMore.addEventListener('click', toggleSeeMobile);
seeDesktop.addEventListener('click', toggleSeeDesktop);