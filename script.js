const tabsItem = document.querySelectorAll('.tabs__btn-item');
const tabsContent = document.querySelectorAll('.tabs__content-item');

tabsItem.forEach(function(element){
  element.addEventListener('click', open);
})

function open(event){
  const tabtarget = event.currentTarget;
  const button = tabtarget.dataset.button;

  tabsItem.forEach(function(item){
    item.classList.remove('tabs__btn-item--active');
  })

  tabtarget.classList.add('tabs__btn-item--active');

  tabsContent.forEach(function(item){
    item.classList.remove('tabs__content-item--active');
  })
  let add;

  add=document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
