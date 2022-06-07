'use strict';
const locations = [
  {
    name: 'Militia',
    id: '1',
    data: [
      {
        id: '1',
        name: 'Church of the Damned',
        slots: '2',
        bloodType: 'rogue',
        loot: [
          {
            id: '0',
            name: 'Bone'
          },
          {
            id: '1',
            name: 'Scourgestone'
          },
          {
            id: '2',
            name: 'Grave Dust'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
        ]
      },
      {
        id: '2',
        name: 'Bastion of Dunley',
        slots: '3',
        bloodType: 'warrior',
        loot: [
          {
            id: '0',
            name: 'Gem Dust'
          },
          {
            id: '1',
            name: 'Reinforced Plank'
          },
          {
            id: '2',
            name: 'Whetstone'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '3',
        name: 'Dawnbreak village',
        slots: '1',
        bloodType: 'worker',
        loot: [
          {
            id: '0',
            name: 'Cloth'
          },
          {
            id: '1',
            name: 'Scroll'
          },
          {
            id: '2',
            name: 'Wool Thread'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '4',
        name: 'Cotton Farm',
        slots: '1',
        bloodType: 'scholar',
        loot: [
          {
            id: '0',
            name: 'Cotton'
          },
          {
            id: '1',
            name: 'Wool Thread'
          },
          {
            id: '2',
            name: 'Sun Flower'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '5',
        name: 'Mosswick village',
        slots: '1',
        bloodType: 'worker',
        loot: [
          {
            id: '0',
            name: 'Fish oil'
          },
          {
            id: '1',
            name: 'Scroll'
          },
          {
            id: '2',
            name: 'Fresh fish'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '6',
        name: 'Dunley Monastery',
        slots: '2',
        bloodType: 'scholar',
        loot: [
          {
            id: '0',
            name: 'Quartz'
          },
          {
            id: '1',
            name: 'Mourning Lily'
          },
          {
            id: '2',
            name: 'Glass'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
          {
            id: '5',
            name: 'Scroll'
          },
        ]
      },
    ]
  },
  {
    name: 'Bandit',
    id: '2',
    data: [
      {
        id: '1',
        name: 'Bandit Stronghold',
        slots: '3',
        bloodType: 'warrior',
        loot: [
          {
            id: '0',
            name: 'Whetstone'
          },
          {
            id: '1',
            name: 'Sulphur ore'
          },
          {
            id: '2',
            name: 'Paper'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '2',
        name: 'Bandit Armory',
        slots: '2',
        bloodType: 'warrior',
        loot: [
          {
            id: '0',
            name: 'Whetstone'
          },
          {
            id: '1',
            name: 'Stone dust'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '3',
        name: 'Bandit Sulphur Quarry',
        slots: '2',
        bloodType: 'brute',
        loot: [
          {
            id: '0',
            name: 'Sulphur Ore'
          },
          {
            id: '1',
            name: 'Fire Blossom'
          },
          {
            id: '2',
            name: 'Clay'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '4',
        name: 'Copper Quarry',
        slots: '3',
        bloodType: 'brute',
        loot: [
          {
            id: '0',
            name: 'Copper Ore'
          },
          {
            id: '1',
            name: 'Clay'
          },
          {
            id: '2',
            name: 'Hell Clarion'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '5',
        name: 'Bandit Logging Camp',
        slots: '1',
        bloodType: 'worker',
        loot: [
          {
            id: '0',
            name: 'Lumber'
          },
          {
            id: '1',
            name: 'Sawdust'
          },
          {
            id: '2',
            name: 'Coarse Thread'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
      {
        id: '6',
        name: 'Bandit Trapper Camp',
        slots: '2',
        bloodType: 'worker',
        loot: [
          {
            id: '0',
            name: 'Animal Hide'
          },
          {
            id: '1',
            name: 'Coarse Thread'
          },
          {
            id: '2',
            name: 'Paper'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
          {
            id: '5',
            name: 'Scroll'
          },
        ]
      },
      {
        id: '7',
        name: 'Forgotten Cemetery',
        slots: '2',
        bloodType: 'rogue',
        loot: [
          {
            id: '0',
            name: 'Bone'
          },
          {
            id: '1',
            name: 'Mourning Lily'
          },
          {
            id: '2',
            name: 'Grave dust'
          },
          {
            id: '3',
            name: 'General Area Loot'
          },
          {
            id: '4',
            name: 'Blood Essence'
          },
        ]
      },
    ]
  }
];

const showLocations = () => {
  const app = document.querySelector('#app');

  
  locations.map(item => {
    const { name, data, id: location_id } = item;
    app.insertAdjacentHTML('beforeend', `<div class="col-12"><h2>${name}</h2></div>`);

    data.forEach(item => {
      const template = `
      <div class="col-3">
        <div
          id="${location_id}_${item.id}"
          class="card">
          <div class="card-header">
            <div class="card-title">${item.name}</div>
          </div>
          <div class="card-body">
            <div class="fs-6"><b>Тип крови:</b> ${item.bloodType}</div>
            <div class="fs-6"><b>Слоты:</b> ${item.slots}</div>
            <ul id="loot_list_${location_id}_${item.id}" class="list-group mt-5">
              
            </ul>
          </div>
        </div>
      </div>
      `;

      app.insertAdjacentHTML('beforeend', template);
       
      const currentLootList = app.querySelector(`#loot_list_${location_id}_${item.id}`)
      item.loot.forEach(lootItem => {
        const lootTemplate = `
        <li class="list-group-item">
          <div>${lootItem.name}</div>
        </li>`;
        currentLootList.insertAdjacentHTML('beforeend', lootTemplate);
      })

    });
  });
};

showLocations();