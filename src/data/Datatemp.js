export const templates = [{  id : 1 ,  name: 'Template 1',  imageUrl: 'https://emploietformation.com/wp-content/uploads/2021/01/PAGE-1-scaled.jpg',},{  id : 2 ,  name: 'Template 2',  imageUrl: 'https://th.bing.com/th/id/R.5c8e070432904c48a7bb99d5dce5fc9e?rik=dQDYixXE0zioUA&pid=ImgRaw&r=0',},{  id : 3 ,  name: 'Template 3',  imageUrl: 'https://th.bing.com/th/id/R.b233411c020986c9ad3e179f8c9efe89?rik=kwarmmTSJ4qslg&riu=http%3a%2f%2fcdn.shopify.com%2fs%2ffiles%2f1%2f0014%2f1148%2f1659%2fproducts%2fmodele-cv-expert-comptable_1024x.jpg%3fv%3d1609336464&ehk=bhOg0LgOphTJ0LDDRBjJABC%2bUzD2r6uhXp6tV8uOc60%3d&risl=&pid=ImgRaw&r=0',},{  id : 4 ,  name: 'Template 4',  imageUrl: 'https://i.pinimg.com/originals/cf/a7/4e/cfa74ef5fcce582ef82d079b58facf6e.png',}
  ];

export  const popularCertificateCompanies = ['Coursera','edX','Udemy','Pluralsight','Codecademy','LinkedIn Learning', 'Udacity','Treehouse', 'FreeCodeCamp','Khan Academy', 'Skillshare','FutureLearn','DataCamp', 'Frontend Masters','BackEnd Academy', 'Fullstack Academy', 'General Assembly', 'Springboard','Amazon'];

export const platforms = ['github', 'linkedin', 'twitter', 'website', 'instagram', 'facebook', 'stackoverflow', 'youtube', 'medium', 'pinterest'];

export const projectTypes = ['Développement de Logiciel','Réseaux et Infrastructure','Automatisation Industrielle','Gestion de Projet','Sécurité Informatique','Internet des Objets (IoT)','Intelligence Artificielle','Big Data et Analyse de Données','Cloud Computing','Développement Web','Applications Mobiles','Systèmes Embarqués','Technologies Automobiles','Robotique','Automatisation de Processus','Technologies d\'Énergie','Électronique','Design Industriel','Projets de Recherche','Projets Éducatifs','Solutions de Santé','Projets Environnementaux','Solutions de Transport','Technologies de Communication','Architecture Informatique','Intégration de Systèmes','Solutions d\'Analyse','Gestion des Données','Conception d\'Interfaces Utilisateur','Simulation et Modélisation','Maintenance Industrielle','Optimisation de Processus','Consulting Technologique','Projets d\'Innovation','Logistique et Chaîne d\'Approvisionnement','Automatisme et Contrôle','Contrôle Qualité','Management de Projet','Maintenance et Support','Enseignement et Formation','Technologies Financières','Technologies Marketing','Intelligence d\'Affaires','Technologies Juridiques','Multimédia','Projets Artistiques','Design','Solutions Sociales','Divertissement et Loisirs','Technologies Agricoles','Autre'];

export const fontOptions = [ 'Arial', 'Helvetica', 'Times New Roman', 'Verdana', 'Georgia', 'Courier New', 'Palatino', 'Garamond', 'Tahoma', 'Lucida Console', 'Impact', 'Comic Sans MS', 'Bookman', 'Book Antiqua', 'Courier', 'Lucida Sans', 'Trebuchet MS', 'Arial Black', 'Century Gothic', 'Copperplate', 'Franklin Gothic', 'Geneva', 'Optima', 'Rockwell', 'Tahoma', 'Apple Chancery', 'Bradley Hand', 'Brush Script MT', 'Chalkduster', 'Cochin', 'Didot', 'Footlight MT', 'Futura', 'Marker Felt', 'Monaco', 'Papyrus', 'Snell Roundhand', 'Symbol', 'Webdings', 'Zapfino'];


export const getIconClass = platform => {
  switch (platform) {
    case 'github':
      return 'fab fa-github';
    case 'linkedin':
      return 'fab fa-linkedin';
    case 'twitter':
      return 'fab fa-twitter';
    case 'website':
      return 'fas fa-globe';
    case 'instagram':
      return 'fab fa-instagram';
    case 'facebook':
      return 'fab fa-facebook';
    case 'stackoverflow':
      return 'fab fa-stack-overflow';
    case 'youtube':
      return 'fab fa-youtube';
    case 'medium':
      return 'fab fa-medium';
    case 'pinterest':
      return 'fab fa-pinterest';
    case 'twitch':
      return 'fab fa-twitch';
    default:
      return 'fas fa-link';
  }
};