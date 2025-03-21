export const name = "Modèle Classique 9 FR";

export const template = (userData) => {
  const personalInfo = userData || {};
  const languages = userData.languages || [];
  const abilities = userData.skills || [];
  const education = userData.educations || [];
  const experience = userData.experiences || [];
  const certifications = userData.certifications || [];
  const interests = userData.hobbies || [];
  const references = userData.references || [];

  return `
<html>
  <head>
    <meta charset="UTF-8">
    <!-- Largeur fixe pour un rendu identique en PDF -->
    <meta name="viewport" content="width=1000px, initial-scale=1">
    <title>CV Classique 9 (Français)</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Configuration globale & impression */
      @page {
        margin: 15mm;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background: #f4f4f4;
        width: 1000px; /* Largeur fixe */
        color: #333;
      }
      .container {
        width: 1000px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        position: relative;
        overflow: hidden;
      }
      /* En-tête ondulée */
      .header {
        position: relative;
        text-align: center;
        padding: 40px 20px 80px 20px; /* Padding inférieur augmenté pour laisser de l'espace */
        color: #fff;
        background: linear-gradient(90deg, #a770ef, #cf8bf3, #fdb99b);
        overflow: hidden;
      }
      .header h1 {
        margin: 0;
        font-size: 2.2em;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-weight: 700;
        white-space: normal;      /* Autorise le retour à la ligne */
        word-break: break-word;   /* Coupe les mots trop longs */
        position: relative;
        z-index: 1;               /* Au-dessus de la vague */
      }
      .header h2 {
        margin: 5px 0 20px 0;       /* Ajout d'un margin-bottom pour éloigner du SVG */
        font-size: 1.2em;
        font-weight: 400;
        position: relative;
        z-index: 1;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.3); /* Améliore la lisibilité */
      }
      .profile-photo {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #fff;
        margin-bottom: 15px;
      }
      /* Vague SVG en arrière-plan */
      .wave {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        z-index: 0;
      }
      /* Contenu principal */
      .content {
        padding: 20px;
      }
      /* Cartes de section */
      .section {
        background: #fff;
        border-left: 6px solid #a770ef;
        border-radius: 8px;
        padding: 15px 20px;
        margin-bottom: 25px;
        box-shadow: 0 3px 8px rgba(0,0,0,0.05);
      }
      .section-title {
        font-size: 1.3em;
        margin-bottom: 10px;
        color: #a770ef;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .section-title i {
        color: #fdb99b;
      }
      .objective {
        font-style: italic;
        background: #fafafa;
        padding: 10px 15px;
        border-radius: 4px;
        color: #555;
      }
      /* Items communs */
      .item {
        margin-bottom: 15px;
      }
      .item-title {
        font-size: 1.1em;
        font-weight: 600;
        color: #a770ef;
        margin-bottom: 3px;
      }
      .item-subtitle {
        color: #fdb99b;
        font-weight: 500;
        margin-bottom: 3px;
      }
      .item-dates {
        font-size: 0.9em;
        color: #666;
        margin-bottom: 5px;
      }
      .item-description {
        color: #444;
        line-height: 1.4;
      }
      /* Contact */
      .contact-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      .contact-item {
        background: #fafafa;
        border-radius: 4px;
        padding: 8px;
        display: flex;
        align-items: center;
        gap: 6px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        font-size: 0.95em;
      }
      .contact-item i {
        color: #a770ef;
      }
      /* Langues & Compétences */
      .languages-container, .skills-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .language-item, .skill-item {
        background: #fafafa;
        border-radius: 4px;
        padding: 8px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      .language-title, .skill-title {
        font-weight: 600;
        margin-bottom: 4px;
        color: #a770ef;
      }
      .language-stars, .skill-points {
        display: flex;
        gap: 5px;
      }
      .star, .point {
        color: #ccc;
        font-size: 1em;
      }
      .star.active, .point.active {
        color: #fdb99b;
      }
      /* Centres d'intérêt */
      .interests-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .interest-item {
        background: #fafafa;
        border-radius: 4px;
        padding: 8px 12px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .interest-item i {
        color: #a770ef;
      }
      /* Impression */
      @media print {
        body {
          width: 100%;
          background: #fff;
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        .container {
          box-shadow: none;
        }
        .wave {
          display: none;
        }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- En-tête avec forme ondulée -->
      <div class="header">
        ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo" class="profile-photo">` : ""}
        <h1>${personalInfo.lastName || ""} ${personalInfo.firstName || ""}</h1>
        <h2>${personalInfo.title || ""}</h2>
        <!-- Forme ondulée (SVG) -->
        <svg class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#fff" fill-opacity="1" d="M0,96L80,112C160,128,320,160,480,176C640,192,800,192,960,170.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      
      <div class="content">
        <!-- Profil -->
        ${personalInfo.profile ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-user"></i> Profil</h2>
            <div class="objective">${personalInfo.profile}</div>
          </div>
        ` : ""}
        
        <!-- Contact -->
        <div class="section">
          <h2 class="section-title"><i class="fas fa-address-card"></i> Contact</h2>
          <div class="contact-info">
            ${personalInfo.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${personalInfo.phone}</div>` : ""}
            ${personalInfo.email ? `<div class="contact-item"><i class="fas fa-envelope"></i> ${personalInfo.email}</div>` : ""}
            ${personalInfo.address ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${personalInfo.address}</div>` : ""}
            ${personalInfo.nationality ? `<div class="contact-item"><i class="fas fa-globe-americas"></i> ${personalInfo.nationality}</div>` : ""}
            ${personalInfo.maritalStatus ? `<div class="contact-item"><i class="fas fa-heart"></i> ${personalInfo.maritalStatus}</div>` : ""}
            ${personalInfo.dateOfBirth ? `<div class="contact-item"><i class="fas fa-calendar"></i> ${personalInfo.dateOfBirth}</div>` : ""}
            ${personalInfo.childrenCount ? `<div class="contact-item"><i class="fas fa-baby"></i> ${personalInfo.childrenCount} ${personalInfo.childrenCount > 1 ? "enfants" : "enfant"}</div>` : ""}
            ${personalInfo.drivingLicense ? `<div class="contact-item"><i class="fas fa-car"></i> Permis ${personalInfo.drivingLicense}</div>` : ""}
            ${personalInfo.linkedin ? `<div class="contact-item"><i class="fab fa-linkedin"></i> ${personalInfo.linkedin}</div>` : ""}
            ${personalInfo.portfolio ? `<div class="contact-item"><i class="fas fa-globe"></i> ${personalInfo.portfolio}</div>` : ""}
          </div>
        </div>
        
        <!-- Expérience Professionnelle -->
        ${experience.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience Professionnelle</h2>
            ${experience.map(exp => `
              <div class="item">
                <div class="item-title">${exp.position || ""}</div>
                <div class="item-subtitle">${exp.company || ""}</div>
                <div class="item-dates">${exp.startDate || ""} - ${exp.endDate || "Présent"}</div>
                <div class="item-description">${(exp.tasks || "").replace(/\n/g, "<br>")}</div>
              </div>
            `).join("")}
          </div>
        ` : ""}
        
        <!-- Formation -->
        ${education.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
            ${education.map(edu => `
              <div class="item">
                <div class="item-title">${edu.degree || ""}</div>
                <div class="item-subtitle">${edu.institution || ""}</div>
                <div class="item-dates">${edu.startDate || ""} - ${edu.endDate || ""}</div>
                <div class="item-description">${edu.description || ""}</div>
              </div>
            `).join("")}
          </div>
        ` : ""}
        
        <!-- Compétences -->
        ${abilities.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-tools"></i> Compétences</h2>
            <div class="skills-grid">
              ${abilities.map(skill => {
                const level = parseInt(skill.level, 10) || 0;
                const points = Math.ceil(level / 20);
                return `
                  <div class="skill-item">
                    <div class="skill-title">${skill.name || ""}</div>
                    <div class="skill-points">
                      ${[1,2,3,4,5].map(i => `<i class="fas fa-circle point ${i <= points ? "active" : ""}"></i>`).join("")}
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}
        
        <!-- Langues -->
        ${languages.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
            <div class="languages-container">
              ${languages.map(lang => {
                const level = parseInt(lang.level, 10) || 0;
                const stars = Math.ceil(level / 20);
                return `
                  <div class="language-item">
                    <div class="language-title">${lang.name || ""}</div>
                    <div class="language-stars">
                      ${[1,2,3,4,5].map(i => `<i class="fas fa-star star ${i <= stars ? "active" : ""}"></i>`).join("")}
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        ` : ""}
        
        <!-- Centres d'Intérêt -->
        ${interests && interests.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-heart"></i> Centres d'Intérêt</h2>
            <div class="interests-grid">
              ${interests.map(hobby => `
                <div class="interest-item">
                  <i class="fas fa-star"></i>
                  <span>${hobby}</span>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
        
        <!-- Certifications -->
        ${certifications.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
            ${certifications.map(cert => `
              <div class="item">
                <div class="item-title">${cert.name || ""}</div>
                <div class="item-dates">${cert.date || ""}</div>
                <div class="item-description">${cert.description || ""}</div>
              </div>
            `).join("")}
          </div>
        ` : ""}
        
        <!-- Références -->
        ${references.length > 0 ? `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
            ${references.map(ref => `
              <div class="item">
                <div class="item-title">${ref.name || ""}</div>
                <div class="item-subtitle">${ref.position || ""}</div>
                <div class="item-description">${ref.company || ""}</div>
                <div class="item-description">${ref.contact || ""}</div>
              </div>
            `).join("")}
          </div>
        ` : `
          <div class="section">
            <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
            <div class="item">
              <div class="item-description">Références sur demande</div>
            </div>
          </div>
        `}
      </div>
    </div>
  </body>
</html>
  `;
};
