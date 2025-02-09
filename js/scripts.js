

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Add animation class when elements are in view
  function handleScroll() {
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
    portfolioItems.forEach(item => {
      if (isElementInViewport(item)) {
        item.classList.add('in-view');
      }
    });
  }
  
  // Attach scroll and load event listeners
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);
  

  // Elements
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatbotWidget = document.getElementById('chatbot-widget');
const closeChatbotButton = document.getElementById('close-chatbot');
const messagesContainer = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-input');

// Ensure initial chatbot widget state is hidden
chatbotWidget.style.display = 'none'; // Hide by default

// Handle chatbot toggle visibility
chatbotToggle.addEventListener('click', () => {
  if (chatbotWidget.style.display === 'none' || !chatbotWidget.classList.contains('open')) {
    chatbotWidget.style.display = 'flex'; // Show the widget
    setTimeout(() => {
      chatbotWidget.classList.add('open'); // Trigger the animation after display
    }, 10); // Small delay for the animation to kick in
  } else {
    chatbotWidget.classList.remove('open'); // Remove the animation class
    setTimeout(() => {
      chatbotWidget.style.display = 'none'; // Hide after animation
    }, 400); // Wait for animation duration before hiding
  }
});

// Close the chatbot
closeChatbotButton.addEventListener('click', () => {
  chatbotWidget.classList.remove('open');
  setTimeout(() => {
    chatbotWidget.style.display = 'none'; // Hide the chatbot after the animation
  }, 400); // Wait for animation duration
});

// Handle user input and bot response
chatbotInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter' && chatbotInput.value.trim()) {
    const userMessageText = chatbotInput.value.trim();
    displayMessage(userMessageText, 'user');
    chatbotInput.value = '';

    // response delay for realism
    setTimeout(() => {
      displayMessage(generateBotReply(userMessageText), 'bot');
    }, 500);
  }
});

// Function to display messages
function displayMessage(messageText, sender) {
  const messageElement = document.createElement('div');
  messageElement.className = sender === 'user' ? 'user-message' : 'bot-message';
  messageElement.innerText = messageText;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Bot replies based on user input
function generateBotReply(userText) {
  const cleanedInput = userText.toLowerCase().trim();

  // Knowledge base with categorized responses
  const responses = [
    // Greetings and General
    { keywords: ["hello", "hi", "hey", "good morning", "good evening"], 
      response: "Hello! Welcome to TechSpeher. How can I assist you today?" },

    { keywords: ["how are you", "how are things"], 
      response: "I'm doing great! How can I help you with TechSpeher today?" },

    // Home Page
    { keywords: ["home", "homepage", "welcome"], 
      response: "The home page provides an overview of TechSpeher, highlighting our mission to deliver innovative tech solutions." },

    // About Section
    { keywords: ["about", "about techspeher", "company"], 
      response: "TechSpeher has been empowering businesses with next-generation technology solutions for over a decade. We specialize in tailored IT solutions and innovative technologies." },

    { keywords: ["history", "journey"], 
      response: "TechSpeher started as a humble IT consultancy and evolved into a leading technology solutions provider with a global presence." },

    // Services Section
    { keywords: ["services", "solutions", "what do you offer"], 
      response: "We offer software development, cloud computing, AI integration, cybersecurity, and IT consulting services." },

    { keywords: ["custom software", "software development"], 
      response: "Yes! We develop custom software tailored to your business needs, focusing on scalability, security, and performance." },

    { keywords: ["cloud", "cloud solutions"], 
      response: "We provide cloud migration, cloud-native development, and 24/7 cloud support services to keep your business agile and efficient." },

    // Portfolio Section
    { keywords: ["portfolio", "past projects", "case studies"], 
      response: "We've successfully delivered projects in e-commerce, fintech, healthcare, and cloud-based platforms. Check our portfolio section for more details." },

    // Team Section
    { keywords: ["team", "people", "who is in your team"], 
      response: "Our amazing team consists of developers, designers, and cloud experts passionate about solving complex business challenges." },

    { keywords: ["rk rahul", "rahul karibilkar"], 
      response: "RK Rahul is our Lead Designer, known for crafting beautiful and functional digital interfaces." },

    { keywords: ["diana", "diana petersen"], 
      response: "Diana Petersen is our Lead Marketer, specializing in data-driven campaigns that drive customer engagement." },

    // Pricing and Payment Section
    { keywords: ["pricing", "cost", "how much do you charge"], 
      response: "Our pricing is based on project complexity and scope. Please contact us at support@techspeher.com for a custom quote." },

    { keywords: ["discounts", "offers"], 
      response: "We occasionally provide promotional offers for new customers. Contact us to learn more!" },

    // Contact Section
    { keywords: ["contact", "support", "how to reach you"], 
      response: "You can reach us via email at support@techsepher.com or through the contact page on our website." },

    { keywords: ["location", "where are you"], 
      response: "We are based globally with teams in North America, Europe, and Asia-Pacific." },

    // Website Navigation
    { keywords: ["where is", "navigation", "find"], 
      response: "Looking for something specific? The main navigation menu provides access to all sections like Services, Portfolio, About, and Contact." },

    // Silly Questions (Creative Replies)
    { keywords: ["tell me a joke", "make me laugh"], 
      response: "Why did the computer go to the doctor? Because it had a virus!" },

    { keywords: ["what is your favorite color", "color"], 
      response: "I love TechSpeher's vibrant blue and yellow branding colors!" },

    { keywords: ["are you a robot", "what are you"], 
      response: "I am TechSpeher's smart virtual assistant, here to make your life easier!" },

    { keywords: ["bye", "goodbye"], 
      response: "Goodbye! Have a fantastic day. Come back if you need anything else." },

    // Fallback Response
    { keywords: [], 
      response: "That's an interesting question! Can you please provide more details so I can assist better?" }
  ];

  // Find a matching response
  for (const entry of responses) {
    if (entry.keywords.some(keyword => cleanedInput.includes(keyword))) {
      return entry.response;
    }
  }

  // Fallback response
  return "I'm here to help! Please provide more details on your query.";
}
