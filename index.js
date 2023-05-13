const presenters = [
  {
    id: 1,
    name: 'Nwadinigwe Victor',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    image: 'images/profile.jpg',
  },
  {
    id: 2,
    name: 'Oguzie-Ibeh Richard',
    qualification: 'Director of Art CEntre Nabi and a board member of CC Korea',
    profession: 'AS the main venue for new media art production in Korea, Nabi promotes cross-disiplinary collaboration and understanding among science technology, humanities, and the arts.',
    image: 'images/profile.jpg',
  },
  {
    id: 3,
    name: 'Ebolom Mcsaint',
    qualification: 'Executive director of the Wikimedia Foundation',
    profession: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikimedia. Wikimedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
    image: 'images/profile.jpg',
  },
  {
    id: 4,
    name: 'John Collins',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    image: 'images/profile.jpg',
  },
  {
    id: 5,
    name: 'Edom Nancy',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    image: 'images/profile.jpg',
  },
  {
    id: 6,
    name: 'Akachukwu Smart',
    qualification: 'Berkman Professor of Enterpreneurial Legal Studies at Harvard Law School',
    profession: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',
    image: 'images/profile.jpg',
  },
];

const speakers = document.querySelector('#speakers');
const FeaturedSpeaker = document.createElement('div');
const ulList = document.createElement('ul');

FeaturedSpeaker.innerHTML = `
        <h2 class="text-dark">Featured Speakers</h2>
        <div class="orange-line"></div>
    `;

speakers.appendChild(FeaturedSpeaker);
speakers.appendChild(ulList);

const presentation = document.querySelector('#speakers ul');

presenters.forEach((presenter) => {
  const list = document.createElement('li');
  list.innerHTML = `
          <div class="speaker-image">
              <div></div>
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