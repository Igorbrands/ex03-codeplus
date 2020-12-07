const $parentList = document.querySelector('.parent-list');

const parentList = [
  {
    name: 'Marcos Maia',
    children: 'Clarice',
  },
  {
    name: 'João Paulo',
    children: 'Pedro',
  },
  {
    name: 'Fernanda',
    children: 'Rosa',
  },
  {
    name: 'Patricia',
    children: 'Ana',
  },
  {
    name: 'Lucas',
    children: 'Samira',
  },
];

function renderParentList(list) {
  list.forEach((i) => {
    const newLi = document.createElement('li');
    if (i.name === 'Fernanda') {
      newLi.innerHTML = `${i.name} é mãe de ${i.children}`;
    } else if(i.name === 'Patricia') {
      newLi.innerHTML = `${i.name} é mãe de ${i.children}`;
    }else{
      newLi.innerHTML = `${i.name} é pai de ${i.children}`;
    }


    $parentList.appendChild(newLi);
  });
}

renderParentList(parentList);

//a função deve adicionar as lis dentro da ul ".parent-list", contendo o nome do pai e da criança.

//ex: <li> Marcos Maia é pai de Clarice </li>

// Como o array tem 5 pais, deve adicionar 5 lis de acordo com exemplo acima.

//dica: você pode usar o document.createElement('li') ou innerHTML;
