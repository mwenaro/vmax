var app = angular.module("vmaxApp", []);

app.controller("vmaxController", function ($scope) {
  $scope.menuToggle = function () {
    // Your menuToggle function logic here
  };

  // Define your WhatsApp contacts
  $scope.whatsappContacts = [
    {
      name: "Vmax Ceo",
      url: "https://api.whatsapp.com/send?phone=254720329069",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      name: "Customer Service",
      url: "https://api.whatsapp.com/send?phone=254705226770",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    {
      name: "Sales Desk",
      url: "https://api.whatsapp.com/send?phone=254705226770",
      icon: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
  ];

  // Insurance
  $scope.insuranceCategories = [
    {
      title: "Motor Insurance",
      packages: [
        {
          title: "Motor Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/motor_modal.html",
          modalId: "motor",
        },
        {
          title: "Comprehensive Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/motor_modal.html",
          modalId: "motor",
        },
        {
          title: "Third Party Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/motor_modal.html",
          modalId: "motor",
        },
      ],
    },
    {
      title: "Medical & Travel Insurance",
      packages: [
        {
          title: "Health Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/health_modal.html",
          modalId: "health",
        },
        {
          title: "Travel Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/travel_modal.html",
          modalId: "travel",
        },
        {
          title: "Life Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/life_modal.html",
          modalId: "life",
        },
        {
          title: "Personal Accident",
          image: "images/objects/6.png",
          modalTemplate: "includes/personal_modal.html",
          modalId: "personal",
        },
      ],
    },

    {
      title: "General Insurance",
      packages: [
        {
          title: "Burglary Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Home Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Bussiness Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Rental Property Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Work Injury Benefits Act",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Tourism & Political Violence Liability",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Stock Floater",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Retirement Benefits Scheme",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Public Liability",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Marine Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Machinery Breakdown",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Industrial All Risks",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Goods In Transit",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Floriculture",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fire & Consequential Loss",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fire & Allied Perils",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Fidelity Guarantee",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Erection All Risks",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Employers Liability",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Electronic Equipment",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Domestic Package",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Credit Insurance",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Plant & Machinery",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Contractors All Risk",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Bonds",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Boller and Pressure Vessel",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Aviation",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
        {
          title: "Agriculture",
          image: "images/objects/6.png",
          modalTemplate: "includes/general_modal.html",
          modalId: "general",
        },
      ],
    },
  ];

  // $scope.openModal = function (insurance) {
  //   // Implement your modal opening logic here
  //   // You can use the insurance object to customize the modal content
  //   alert("Opening modal for " + insurance.title);
  // };
});
