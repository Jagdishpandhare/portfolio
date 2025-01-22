// Smooth scrolling for navigation links
const sections = document.querySelectorAll('section[id]');

function scrollToSection(event) {
  event.preventDefault();
  const targetID = this.getAttribute('href').substring(1); // Remove the '#'
  const section = document.getElementById(targetID);
  section.scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', scrollToSection);
});

// Add a "View More" button for projects
const projectsContainer = document.getElementById('projects-container');
const projects = projectsContainer.querySelectorAll('.project');
const maxVisibleProjects = 3; // Show only 3 projects initially

if (projects.length > maxVisibleProjects) {
  const viewMoreButton = document.createElement('button');
  viewMoreButton.textContent = "View More";
  viewMoreButton.addEventListener('click', () => {
    projects.forEach(project => {
      project.style.display = 'flex'; // Show all projects
    });
    viewMoreButton.style.display = 'none'; // Hide the button
  });
  projectsContainer.appendChild(viewMoreButton);

  // Hide extra projects initially
  projects.slice(maxVisibleProjects).forEach(project => {
    project.style.display = 'none';
  });
}

// Add a dynamic skill section
const skillsData = [
  { name: 'HTML5', icon: 'styles/logos/HTML5_logo_and_wordmark.svg' },
  { name: 'CSS3', icon: 'styles/logos/CSS3_logo_and_wordmark.svg' },
  { name: 'JavaScript', icon: 'styles/logos/Unofficial_JavaScript_logo_2.svg' },
  { name: 'React', icon: 'styles/logos/React-icon.svg' },
  { name: 'Node.js', icon: 'styles/logos/Node.js_logo.svg' },
  { name: 'Python', icon: 'styles/logos/python-logo-only.svg' },
  { name: 'Bootstrap', icon: 'styles/logos/Bootstrap_logo.svg' },
  { name: 'AWS', icon: 'styles/logos/Amazon_Web_Services_Logo.svg' },
  { name: 'Git', icon: 'styles/logos/Git-Logo-Black.svg' }
];

const skillsIconsContainer = document.querySelector('.skills-icons');

skillsData.forEach(skill => {
  const skillIcon = document.createElement('img');
  skillIcon.src = skill.icon;
  skillIcon.alt = skill.name;
  skillsIconsContainer.appendChild(skillIcon);
});


const contactForm = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = contactForm.querySelector('button[type="submit"]');

// Add event listener to the submit button
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Basic form validation
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    return;
  }

  if (messageInput.value.trim() === '') {
    alert('Please enter a message.');
    return;
  }

  // Submit the form data (replace with your desired submission method)
  // For example, you could send the data to a server using AJAX:
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value,
  };

  // Send the data to the server (using a library like Axios or Fetch)
  // ...

  // Display a success message to the user
  alert('Your message has been sent successfully!');

  // Clear the form fields
  contactForm.reset();
});

// Helper function to validate email address
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}