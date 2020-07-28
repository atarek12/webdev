
let nameOflastActiveSection = 'home';



// Add class 'active' to link 
const setActiveLink = (oldLinkName, newLinkName) => {

  if (oldLinkName.localeCompare(newLinkName) !== 0) {

    // get link that its name = section Name
    const newLink = document.getElementsByClassName(`sectionLink ${newLinkName}`)

    // get link that its name = new link name
    const oldLink = document.getElementsByClassName(`sectionLink ${oldLinkName}`)

    // removing the class from other section
    oldLink[0].classList.remove('active');

    // adding class .your-active-class 
    newLink[0].classList.add('active');
  }
}



// Add class 'active' to section when near top of viewport
const handleScroll = () => {

  // getting all sections
  let allSections = Array.from(document.getElementsByTagName('section'));

  // array will contain all offset of all section to the window
  let offsetVlaues = [];
  for (let i = 0; i < allSections.length; i++) {
    offsetVlaues.push(Math.abs(window.pageYOffset - allSections[i].offsetTop));
  };

  // get the section of minimum offset
  const index = offsetVlaues.indexOf(Math.min(...offsetVlaues));
  const activeSection = allSections[index];

  // get name attribute of the active section
  const nameOfActiveSection = activeSection.getAttribute('name');

  // set its link to active
  setActiveLink(nameOflastActiveSection, nameOfActiveSection);

  // update the name of the last active section
  nameOflastActiveSection = nameOfActiveSection;
}



// Set sections as active
const onScrolling = () => {
  window.addEventListener('scroll', () => handleScroll());
}
export default onScrolling;