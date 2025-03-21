import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Classique 6 FR";

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
    <!-- Fixe la largeur pour que le rendu soit identique en PDF -->
    <meta name="viewport" content="width=800px, initial-scale=1">
    <title>CV Classique 6 (Français)</title>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
      /* Paramètres pour l'impression identique */
      @page { margin: 15mm; }
      body {
        font-family: 'Montserrat', sans-serif;
        background: #fdfdfd;
        color: #333;
        margin: 0;
        padding: 0;
        width: 800px;
      }
      .container {
        width: 800px;
        margin: 0 auto;
        padding: 20px;
        box-sizing: border-box;
      }
      /* En-tête */
      header {
        text-align: center;
        padding: 20px;
        background: linear-gradient(90deg, #ff7f50, #ff1493);
        color: #fff;
        border-radius: 8px;
        margin-bottom: 20px;
      }
      header .profile-photo {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #fff;
        margin-bottom: 10px;
      }
      header h1 {
        margin: 5px 0;
        font-size: 2.2em;
        text-transform: uppercase;
      }
      header h2 {
        margin: 5px 0;
        font-size: 1.2em;
        font-weight: 300;
      }
      /* Sections */
      .section {
        margin-bottom: 20px;
        padding: 15px;
        border: 2px solid #ff7f50;
        border-radius: 8px;
        background: #fff;
      }
      .section-title {
        font-size: 1.5em;
        margin-bottom: 10px;
        color: #ff1493;
        border-bottom: 1px solid #ff7f50;
        padding-bottom: 5px;
      }
      .objective {
        font-style: italic;
        color: #555;
        margin-bottom: 10px;
      }
      .item {
        margin-bottom: 10px;
      }
      .item strong {
        display: block;
        font-size: 1.1em;
        color: #ff1493;
      }
      .contact-info div,
      .education-item,
      .experience-item,
      .certification-item,
      .reference-item {
        margin-bottom: 8px;
      }
      .languages-container, .skills-grid, .interests-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
      }
      .language-item, .skill-item, .interest-item {
        background: #ffefef;
        padding: 5px 10px;
        border-radius: 5px;
      }
      .language-stars, .skill-points {
        margin-left: auto;
        display: flex;
      }
      .star, .point {
        color: #ff7f50;
      }
      .star.active, .point.active {
        color: #ff1493;
      }
      /* Pour l'impression, conserver le même rendu */
      @media print {
        body { width: 800px; }
        .container { box-shadow: none; }
      }
    </style>
  </head>
  <body>
    <div class="container">
      <!-- En-tête -->
      <header>
        ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo de profil" class="profile-photo">` : ''}
        <h1>${personalInfo.lastName || ''} ${personalInfo.firstName || ''}</h1>
        <h2>${personalInfo.title || ''}</h2>
      </header>
      
      <!-- Contact -->
      <section class="section">
        <h2 class="section-title"><i class="fas fa-address-card"></i> Contact</h2>
        <div class="contact-info">
          ${personalInfo.email ? `<div><i class="fas fa-envelope"></i> ${personalInfo.email}</div>` : ''}
          ${personalInfo.phone ? `<div><i class="fas fa-phone"></i> ${personalInfo.phone}</div>` : ''}
          ${personalInfo.address ? `<div><i class="fas fa-map-marker-alt"></i> ${personalInfo.address}</div>` : ''}
          ${personalInfo.linkedin ? `<div><i class="fab fa-linkedin"></i> ${personalInfo.linkedin}</div>` : ''}
          ${personalInfo.portfolio ? `<div><i class="fas fa-globe"></i> ${personalInfo.portfolio}</div>` : ''}
          ${personalInfo.nationality ? `<div><i class="fas fa-globe-americas"></i> ${personalInfo.nationality}</div>` : ''}
          ${personalInfo.maritalStatus ? `<div><i class="fas fa-heart"></i> ${personalInfo.maritalStatus}</div>` : ''}
          ${personalInfo.dateOfBirth ? `<div><i class="fas fa-calendar"></i> ${personalInfo.dateOfBirth}</div>` : ''}
          ${personalInfo.childrenCount ? `<div><i class="fas fa-baby"></i> ${personalInfo.childrenCount} ${personalInfo.childrenCount > 1 ? 'enfants' : 'enfant'}</div>` : ''}
          ${personalInfo.drivingLicense ? `<div><i class="fas fa-car"></i> Permis ${personalInfo.drivingLicense}</div>` : ''}
        </div>
      </section>
      
      <!-- Profil -->
      ${personalInfo.profile ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-user"></i> Profil</h2>
        <p class="objective">${personalInfo.profile}</p>
      </section>
      ` : ''}
      
      <!-- Formation -->
      ${education.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
        ${education.map(edu => `
          <div class="education-item item">
            <strong>${edu.degree || ''}</strong>
            <span>${edu.institution || ''}</span>
            <span>${edu.startDate || ''} - ${edu.endDate || ''}</span>
            <p>${edu.description || ''}</p>
          </div>
        `).join('')}
      </section>
      ` : ''}
      
      <!-- Expérience -->
      ${experience.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience Professionnelle</h2>
        ${experience.map(exp => `
          <div class="experience-item item">
            <strong>${exp.position || ''}</strong>
            <span>${exp.company || ''}</span>
            <span>${exp.startDate || ''} - ${exp.endDate || 'Présent'}</span>
            <p>${(exp.tasks || '').replace(/\n/g, '<br>')}</p>
          </div>
        `).join('')}
      </section>
      ` : ''}
      
      <!-- Langues -->
      ${languages.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
        <div class="languages-container">
          ${languages.map(lang => `
            <div class="language-item">
              <span>${lang.name || ''}</span>
              <div class="language-stars">
                ${(() => {
                  const level = parseInt(lang.level, 10) || 0;
                  const stars = Math.ceil(level / 20);
                  return [1,2,3,4,5].map(i => `<i class="fas fa-star star ${i <= stars ? 'active' : ''}"></i>`).join('');
                })()}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}
      
      <!-- Compétences -->
      ${abilities.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-tools"></i> Compétences</h2>
        <div class="skills-grid">
          ${abilities.map(skill => `
            <div class="skill-item">
              <span>${skill.name || ''}</span>
              <div class="skill-points">
                ${(() => {
                  const level = parseInt(skill.level, 10) || 0;
                  const points = Math.ceil(level / 20);
                  return [1,2,3,4,5].map(i => `<div class="point ${i <= points ? 'active' : ''}"></div>`).join('');
                })()}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}
      
      <!-- Centres d'intérêt -->
      ${interests && interests.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-heart"></i> Centres d'Intérêt</h2>
        <div class="interests-grid">
          ${interests.map(hobby => `
            <div class="interest-item">
              <i class="fas fa-star"></i>
              <span>${hobby}</span>
            </div>
          `).join('')}
        </div>
      </section>
      ` : ''}
      
      <!-- Certifications -->
      ${certifications.length > 0 ? `
      <section class="section">
        <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
        ${certifications.map(cert => `
          <div class="certification-item item">
            <strong>${cert.name || ''}</strong>
            <span>${cert.date || ''}</span>
            <p>${cert.description || ''}</p>
          </div>
        `).join('')}
      </section>
      ` : ''}
      
      <!-- Références -->
      <section class="section">
        <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
        ${references.length > 0 ? references.map(ref => `
          <div class="reference-item item">
            <strong>${ref.name || ''}</strong>
            <span>${ref.position || ''}</span>
            <span>${ref.company || ''}</span>
            <p>${ref.contact || ''}</p>
          </div>
        `).join('') : '<div class="reference-item item"><p>Références sur demande</p></div>'}
      </section>
      
    </div>
  </body>
</html>
  `;
};
