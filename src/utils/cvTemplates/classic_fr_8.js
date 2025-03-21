export const name = "Modèle Classique 8 FR";

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
    <meta name="viewport" content="width=1200px, initial-scale=1">
    <title>CV Classique 8 (Français)</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Configuration générale & impression */
      @page {
        margin: 15mm;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
        background: #f0f0f0;
        width: 1200px; /* Largeur fixe pour un rendu identique en PDF */
        color: #333;
      }
      .container {
        width: 1200px;
        margin: 0 auto;
        background: #fff;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      /* En-tête */
      .header {
        background: linear-gradient(45deg, #00b4db, #0083b0); /* Dégradé moderne */
        padding: 30px 20px;
        text-align: center;
        color: #fff;
        position: relative;
      }
      .header .profile-photo {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #fff;
        margin-bottom: 15px;
      }
      .header h1 {
        font-size: 2.2em;
        margin: 5px 0;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1px;
      }
      .header h2 {
        font-size: 1.2em;
        margin: 0;
        font-weight: 400;
        letter-spacing: 0.5px;
      }
      /* Mise en page à 3 colonnes */
      .three-columns {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
        padding: 20px;
      }
      /* Cartes de section */
      .column {
        background: #fafafa;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 3px 8px rgba(0,0,0,0.05);
        padding-right: 10px;
      }
      .section {
        margin-bottom: 25px;
      }
      .section-title {
        font-size: 1.3em;
        margin-bottom: 10px;
        color: #0083b0;
        text-transform: uppercase;
        border-bottom: 2px solid #00b4db;
        padding-bottom: 5px;
      }
      /* Profil */
      .objective {
        background: #fff;
        padding: 10px 15px;
        border-left: 4px solid #00b4db;
        border-radius: 4px;
        font-style: italic;
        color: #555;
      }
      /* Expérience, Formation, etc. */
      .item {
        margin-bottom: 15px;
      }
      .item-title {
        font-weight: 600;
        font-size: 1.1em;
        color: #0083b0;
        margin-bottom: 3px;
      }
      .item-subtitle {
        font-weight: 500;
        color: #00b4db;
        margin-bottom: 2px;
      }
      .item-dates {
        font-size: 0.9em;
        color: #666;
        margin-bottom: 5px;
      }
      .item-description {
        font-size: 0.95em;
        color: #444;
        line-height: 1.5;
      }
      /* Contact */
      .contact-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      .contact-item {
        display: flex;
        align-items: center;
        gap: 8px;
        background: #fff;
        padding: 8px 10px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        font-size: 0.95em;
      }
      .contact-item i {
        color: #00b4db;
        font-size: 1.1em;
      }
      /* Langues & Compétences */
      .languages-container, .skills-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .language-item, .skill-item {
        background: #fff;
        padding: 8px 10px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
      }
      .language-title, .skill-title {
        font-weight: 600;
        margin-bottom: 6px;
        color: #0083b0;
      }
      .language-stars, .skill-points {
        display: flex;
        gap: 5px;
      }
      .star, .point {
        color: #ddd;
        font-size: 1em;
      }
      .star.active, .point.active {
        color: #00b4db;
      }
      /* Centres d'intérêt */
      .interests-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .interest-item {
        background: #fff;
        padding: 8px 10px;
        border-radius: 4px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.05);
        display: flex;
        align-items: center;
        gap: 5px;
        color: #444;
      }
      .interest-item i {
        color: #00b4db;
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
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- En-tête avec photo, nom, titre -->
      <header class="header">
        ${
          personalInfo.photo
            ? `<img src="${personalInfo.photo}" alt="Photo" class="profile-photo">`
            : ""
        }
        <h1>${personalInfo.lastName || ""} ${personalInfo.firstName || ""}</h1>
        <h2>${personalInfo.title || ""}</h2>
      </header>

      <!-- Mise en page en 3 colonnes -->
      <div class="three-columns">

        <!-- Colonne 1 -->
        <div class="column">
          <!-- Profil -->
          ${
            personalInfo.profile
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-user"></i> Profil</h2>
              <div class="objective">${personalInfo.profile}</div>
            </div>
          `
              : ""
          }

          <!-- Contact -->
          <div class="section">
            <h2 class="section-title"><i class="fas fa-address-card"></i> Contact</h2>
            <div class="contact-info">
              ${
                personalInfo.phone
                  ? `<div class="contact-item"><i class="fas fa-phone"></i>${personalInfo.phone}</div>`
                  : ""
              }
              ${
                personalInfo.email
                  ? `<div class="contact-item"><i class="fas fa-envelope"></i>${personalInfo.email}</div>`
                  : ""
              }
              ${
                personalInfo.address
                  ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i>${personalInfo.address}</div>`
                  : ""
              }
              ${
                personalInfo.nationality
                  ? `<div class="contact-item"><i class="fas fa-globe-americas"></i>${personalInfo.nationality}</div>`
                  : ""
              }
              ${
                personalInfo.maritalStatus
                  ? `<div class="contact-item"><i class="fas fa-heart"></i>${personalInfo.maritalStatus}</div>`
                  : ""
              }
              ${
                personalInfo.dateOfBirth
                  ? `<div class="contact-item"><i class="fas fa-calendar"></i>${personalInfo.dateOfBirth}</div>`
                  : ""
              }
              ${
                personalInfo.childrenCount
                  ? `<div class="contact-item"><i class="fas fa-baby"></i>${personalInfo.childrenCount} ${
                      personalInfo.childrenCount > 1 ? "enfants" : "enfant"
                    }</div>`
                  : ""
              }
              ${
                personalInfo.drivingLicense
                  ? `<div class="contact-item"><i class="fas fa-car"></i>Permis ${personalInfo.drivingLicense}</div>`
                  : ""
              }
              ${
                personalInfo.linkedin
                  ? `<div class="contact-item"><i class="fab fa-linkedin"></i>${personalInfo.linkedin}</div>`
                  : ""
              }
              ${
                personalInfo.portfolio
                  ? `<div class="contact-item"><i class="fas fa-globe"></i>${personalInfo.portfolio}</div>`
                  : ""
              }
            </div>
          </div>

          <!-- Langues -->
          ${
            languages.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
              <div class="languages-container">
                ${languages
                  .map((lang) => {
                    const level = parseInt(lang.level, 10) || 0;
                    const stars = Math.ceil(level / 20);
                    return `
                      <div class="language-item">
                        <div class="language-title">${lang.name || ""}</div>
                        <div class="language-stars">
                          ${[1,2,3,4,5]
                            .map(
                              (i) =>
                                `<i class="fas fa-star star ${
                                  i <= stars ? "active" : ""
                                }"></i>`
                            )
                            .join("")}
                        </div>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </div>

        <!-- Colonne 2 -->
        <div class="column">
          <!-- Expérience -->
          ${
            experience.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience</h2>
              ${experience
                .map(
                  (exp) => `
                <div class="item">
                  <div class="item-title">${exp.position || ""}</div>
                  <div class="item-subtitle">${exp.company || ""}</div>
                  <div class="item-dates">${exp.startDate || ""} - ${
                    exp.endDate || "Présent"
                  }</div>
                  <div class="item-description">${(exp.tasks || "").replace(
                    /\n/g,
                    "<br>"
                  )}</div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Compétences -->
          ${
            abilities.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-tools"></i> Compétences</h2>
              <div class="skills-grid">
                ${abilities
                  .map((skill) => {
                    const level = parseInt(skill.level, 10) || 0;
                    const points = Math.ceil(level / 20);
                    return `
                    <div class="skill-item">
                      <div class="skill-title">${skill.name || ""}</div>
                      <div class="skill-points">
                        ${[1,2,3,4,5]
                          .map(
                            (i) =>
                              `<i class="fas fa-circle point ${
                                i <= points ? "active" : ""
                              }"></i>`
                          )
                          .join("")}
                      </div>
                    </div>
                  `;
                  })
                  .join("")}
              </div>
            </div>
          `
              : ""
          }
        </div>

        <!-- Colonne 3 -->
        <div class="column">
          <!-- Formation -->
          ${
            education.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
              ${education
                .map(
                  (edu) => `
                <div class="item">
                  <div class="item-title">${edu.degree || ""}</div>
                  <div class="item-subtitle">${edu.institution || ""}</div>
                  <div class="item-dates">${edu.startDate || ""} - ${
                    edu.endDate || ""
                  }</div>
                  <div class="item-description">${edu.description || ""}</div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Certifications -->
          ${
            certifications.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
              ${certifications
                .map(
                  (cert) => `
                <div class="item">
                  <div class="item-title">${cert.name || ""}</div>
                  <div class="item-dates">${cert.date || ""}</div>
                  <div class="item-description">${cert.description || ""}</div>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : ""
          }

          <!-- Centres d'intérêt -->
          ${
            interests && interests.length > 0
              ? `
            <div class="section">
              <h2 class="section-title"><i class="fas fa-heart"></i> Centres d'Intérêt</h2>
              <div class="interests-grid">
                ${interests
                  .map(
                    (hobby) => `
                  <div class="interest-item">
                    <i class="fas fa-star"></i>
                    <span>${hobby}</span>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>
          `
              : ""
          }

          <!-- Références -->
          <div class="section">
            <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
            ${
              references.length > 0
                ? references
                    .map(
                      (ref) => `
                <div class="item">
                  <div class="item-title">${ref.name || ""}</div>
                  <div class="item-subtitle">${ref.position || ""}</div>
                  <div class="item-description">${ref.company || ""}</div>
                  <div class="item-description">${ref.contact || ""}</div>
                </div>
              `
                    )
                    .join("")
                : `
              <div class="item">
                <div class="item-description">Références sur demande</div>
              </div>
            `
            }
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
  `;
};
