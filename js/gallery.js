///////////Filter Gallery////////////////
//selecting all required elements

const filterItem = document.querySelector('.gallery-items');
const filterImg = document.querySelectorAll('.gallery-image');

window.onload = () => {
  filterItem.onclick = (selectedItem) => {
    if (selectedItem.target.classList.contains('gallery-item')) {
      //Looks for gallery-item that has class active and removes it. Adds active to gallery-item that was clicked
      filterItem.querySelector('.active').classList.remove('active');
      selectedItem.target.classList.add('active');

      //sets the filterName to the data-name of selected gallery item
      let filterName = selectedItem.target.getAttribute('data-name');

      //Goes through all gallery-images and displays the images that have the matching data-name as selected gallery item
      //Does this by adding or removing a hide and show class
      filterImg.forEach((image) => {
        let filterImages = image.getAttribute('data-name');
        if (filterImages == filterName || filterName == 'all') {
          image.classList.remove('hide');
          image.classList.add('show');
        } else {
          image.classList.add('hide');
          image.classList.remove('show');
        }
      });
    }
  };
  for (let index = 0; index < filterImg.length; index++) {
    filterImg[index].setAttribute('onclick', 'preview(this)');
  }
};

///////////////// Preview Box//////////////
//Selecting relevent elements
const previewBox = document.querySelector('.preview-box'),
  previewImg = previewBox.querySelector('img'),
  categoryName = previewBox.querySelector('.title p'),
  closeIcon = previewBox.querySelector('.icon');
shadow = document.querySelector('.shadow');

function preview(element) {
  //removes scrollbar after clicking image
  document.querySelector('body').style.overflow = 'hidden';
  //adding user clicked image source to variable
  let selectedPrevImg = element.querySelector('img').src;
  //getting clicked data-name value
  let selectedImgCategory = element.getAttribute('data-name');
  categoryName.textContent = selectedImgCategory;
  //adding image source to img tag in preview box
  previewImg.src = selectedPrevImg;

  //adding the show class to preview box so it pops up
  previewBox.classList.add('show');
  //greying out bg
  shadow.classList.add('show');

  //removing the preview box from view
  closeIcon.onclick = () => {
    previewBox.classList.remove('show');
    shadow.classList.remove('show');
    document.querySelector('body').style.overflow = 'scroll';
  };
}
