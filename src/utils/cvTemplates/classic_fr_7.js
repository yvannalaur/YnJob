export const name = "Modèle Classique 7 FR";

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
    <title>CV Classique 6 (Français)</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Configuration globale et impression */
      @page {
        margin: 15mm;
      }
      body {
        font-family: 'Montserrat', sans-serif;
        margin: 0;
        padding: 0;
        background: #f4f4f4;
        width: 1000px; /* Largeur fixe */
        color: #2c3e50;
      }
      .container {
        width: 1000px; /* Largeur fixe */
        margin: 0 auto;
        display: flex;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
      }
      /* Colonne latérale (gauche) */
      .sidebar {
        width: 300px;
        background: #012b39; /* Bleu canard foncé */
        padding: 20px;
        color: #fff;
      }
      .profile-photo {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        display: block;
        margin: 0 auto 15px auto;
        border: 4px solid #fff;
      }
      .sidebar h1 {
        font-size: 1.8em;
        text-align: center;
        margin: 0 0 5px 0;
        text-transform: uppercase;
      }
      .sidebar h2 {
        font-size: 1em;
        text-align: center;
        font-weight: 300;
        margin: 0 0 20px 0;
        color: #b0dfe5; /* Couleur claire pour le sous-titre */
      }
      .sidebar .info-block {
        margin-bottom: 20px;
      }
      .sidebar .info-title {
        font-size: 1.2em;
        margin-bottom: 8px;
        color: #b0dfe5;
        border-bottom: 1px solid rgba(255,255,255,0.2);
        padding-bottom: 5px;
      }
      .contact-item {
        margin-bottom: 8px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .contact-item i {
        color: #b0dfe5;
      }
      /* Langues & Compétences */
      .languages-container, .skills-grid {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .language-item, .skill-item {
        background: rgba(255,255,255,0.1);
        padding: 8px;
        border-radius: 4px;
      }
      .language-item span,
      .skill-item span {
        display: block;
        margin-bottom: 5px;
        font-weight: 500;
      }
      .language-stars, .skill-points {
        display: flex;
        gap: 4px;
      }
      .star, .point {
        color: #fff;
        opacity: 0.4;
      }
      .star.active, .point.active {
        opacity: 1;
      }
      /* Colonne principale (droite) */
      .main-content {
        flex: 1;
        background: #fff;
        padding: 20px;
      }
      .section {
        margin-bottom: 25px;
      }
      .section-title {
        font-size: 1.4em;
        color: #012b39;
        margin-bottom: 15px;
        border-bottom: 2px solid #ffae00; /* Liseré orange flashy */
        padding-bottom: 5px;
        text-transform: uppercase;
      }
      .objective {
        font-style: italic;
        color: #555;
        background: #f7f7f7;
        padding: 10px;
        border-radius: 4px;
      }
      .education-item, .experience-item, .certification-item, .reference-item {
        margin-bottom: 15px;
      }
      .item-title {
        font-weight: 600;
        color: #012b39;
        margin-bottom: 3px;
      }
      .item-subtitle {
        color: #ffae00; /* Orange flashy */
        margin-bottom: 3px;
      }
      .item-dates {
        font-size: 0.9em;
        margin-bottom: 5px;
        color: #555;
      }
      .item-description {
        color: #444;
        line-height: 1.4;
      }
      /* Centres d'intérêt */
      .interests-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .interest-item {
        background: #012b39;
        color: #fff;
        padding: 8px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      .interest-item i {
        color: #ffae00;
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
      <!-- Colonne latérale -->
      <div class="sidebar">
        ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo" class="profile-photo">` : ''}
        <h1>${personalInfo.lastName || ''} ${personalInfo.firstName || ''}</h1>
        <h2>${personalInfo.title || ''}</h2>
        
        <div class="info-block">
          <div class="info-title">Contact</div>
          ${personalInfo.phone ? `<div class="contact-item"><i class="fas fa-phone"></i><span>${personalInfo.phone}</span></div>` : ''}
          ${personalInfo.email ? `<div class="contact-item"><i class="fas fa-envelope"></i><span>${personalInfo.email}</span></div>` : ''}
          ${personalInfo.address ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i><span>${personalInfo.address}</span></div>` : ''}
          ${personalInfo.nationality ? `<div class="contact-item"><i class="fas fa-globe-americas"></i><span>${personalInfo.nationality}</span></div>` : ''}
          ${personalInfo.maritalStatus ? `<div class="contact-item"><i class="fas fa-heart"></i><span>${personalInfo.maritalStatus}</span></div>` : ''}
          ${personalInfo.dateOfBirth ? `<div class="contact-item"><i class="fas fa-calendar"></i><span>${personalInfo.dateOfBirth}</span></div>` : ''}
          ${personalInfo.childrenCount ? `<div class="contact-item"><i class="fas fa-baby"></i><span>${personalInfo.childrenCount} ${personalInfo.childrenCount > 1 ? 'enfants' : 'enfant'}</span></div>` : ''}
          ${personalInfo.drivingLicense ? `<div class="contact-item"><i class="fas fa-car"></i><span>Permis ${personalInfo.drivingLicense}</span></div>` : ''}
          ${personalInfo.linkedin ? `<div class="contact-item"><i class="fab fa-linkedin"></i><span>${personalInfo.linkedin}</span></div>` : ''}
          ${personalInfo.portfolio ? `<div class="contact-item"><i class="fas fa-globe"></i><span>${personalInfo.portfolio}</span></div>` : ''}
        </div>

        ${languages.length > 0 ? `
        <div class="info-block">
          <div class="info-title">Langues</div>
          <div class="languages-container">
            ${languages.map(lang => {
              const level = parseInt(lang.level, 10) || 0;
              const stars = Math.ceil(level / 20);
              return `
              <div class="language-item">
                <span>${lang.name || ''}</span>
                <div class="language-stars">
                  ${[1,2,3,4,5].map(i => `<i class="fas fa-star star ${i <= stars ? 'active' : ''}"></i>`).join('')}
                </div>
              </div>
              `;
            }).join('')}
          </div>
        </div>
        ` : ''}

        ${abilities.length > 0 ? `
        <div class="info-block">
          <div class="info-title">Compétences</div>
          <div class="skills-grid">
            ${abilities.map(skill => {
              const level = parseInt(skill.level, 10) || 0;
              const points = Math.ceil(level / 20);
              return `
              <div class="skill-item">
                <span>${skill.name || ''}</span>
                <div class="skill-points">
                  ${[1,2,3,4,5].map(i => `<i class="fas fa-circle point ${i <= points ? 'active' : ''}"></i>`).join('')}
                </div>
              </div>
              `;
            }).join('')}
          </div>
        </div>
        ` : ''}
      </div>
      
      <!-- Colonne principale -->
      <div class="main-content">
        <!-- Profil -->
        ${personalInfo.profile ? `
        <div class="section">
          <h2 class="section-title"><i class="fas fa-user"></i> Profil</h2>
          <div class="objective">${personalInfo.profile}</div>
        </div>
        ` : ''}

        <!-- Expérience -->
        ${experience.length > 0 ? `
        <div class="section">
          <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience Professionnelle</h2>
          ${experience.map(exp => `
            <div class="experience-item">
              <div class="item-title">${exp.position || ''}</div>
              <div class="item-subtitle">${exp.company || ''}</div>
              <div class="item-dates">${exp.startDate || ''} - ${exp.endDate || 'Présent'}</div>
              <div class="item-description">${(exp.tasks || '').replace(/\n/g, '<br>')}</div>
            </div>
          `).join('')}
        </div>
        ` : ''}

        <!-- Formation -->
        ${education.length > 0 ? `
        <div class="section">
          <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
          ${education.map(edu => `
            <div class="education-item">
              <div class="item-title">${edu.degree || ''}</div>
              <div class="item-subtitle">${edu.institution || ''}</div>
              <div class="item-dates">${edu.startDate || ''} - ${edu.endDate || ''}</div>
              <div class="item-description">${edu.description || ''}</div>
            </div>
          `).join('')}
        </div>
        ` : ''}

        <!-- Centres d'intérêt -->
        ${interests && interests.length > 0 ? `
        <div class="section">
          <h2 class="section-title"><i class="fas fa-heart"></i> Centres d'Intérêt</h2>
          <div class="interests-grid">
            ${interests.map(hobby => `
              <div class="interest-item">
                <i class="fas fa-star"></i>
                <span>${hobby}</span>
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        <!-- Certifications -->
        ${certifications.length > 0 ? `
        <div class="section">
          <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
          ${certifications.map(cert => `
            <div class="certification-item">
              <div class="item-title">${cert.name || ''}</div>
              <div class="item-dates">${cert.date || ''}</div>
              <div class="item-description">${cert.description || ''}</div>
            </div>
          `).join('')}
        </div>
        ` : ''}

        <!-- Références -->
        <div class="section">
          <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
          ${references.length > 0 ? references.map(ref => `
            <div class="reference-item">
              <div class="item-title">${ref.name || ''}</div>
              <div class="item-subtitle">${ref.position || ''}</div>
              <div class="item-description">${ref.company || ''}</div>
              <div class="item-description">${ref.contact || ''}</div>
            </div>
          `).join('') : `
            <div class="reference-item">
              <div class="item-description">Références sur demande</div>
            </div>
          `}
        </div>
      </div>
    </div>
  </body>
</html>
  `;
};
