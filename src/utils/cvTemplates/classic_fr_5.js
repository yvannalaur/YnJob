import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Classique 5 FR";

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
        <meta name="viewport" content="width=device-width, initial-scale=0.9">
        <title>CV Moderne (Français)</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
          /* Style global */
          * { box-sizing: border-box; }
          body, html { margin: 0; padding: 0; }
          body {
            font-family: 'Montserrat', sans-serif;
            background-color: #f0f2f5;
            color: #2c3e50;
            line-height: 1.6;
            font-size: 11pt;
          }
          .container {
            max-width: 1200px;
            margin: 20px auto;
            padding: 20px;
            display: grid;
            grid-template-rows: auto 1fr;
            gap: 20px;
          }
          /* En-tête */
          .header {
            background: #34495e;
            padding: 30px;
            border-radius: 8px;
            text-align: center;
            color: #ecf0f1;
          }
          .header .profile-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #ecf0f1;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            margin-bottom: 15px;
            transition: transform 0.3s ease;
          }
          .header .profile-photo:hover { transform: scale(1.05); }
          .header h1 {
            font-size: 2.5em;
            margin: 0;
            font-weight: 700;
          }
          .header h2 {
            font-size: 1.4em;
            margin-top: 5px;
            font-weight: 500;
            color: #bdc3c7;
          }
          /* Disposition du contenu */
          .content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 20px;
          }
          .sidebar, .main-content {
            background: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          }
          /* Sections */
          .section {
            margin-bottom: 30px;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 1.4em;
            color: #34495e;
            margin-bottom: 15px;
            border-bottom: 2px solid #bdc3c7;
            padding-bottom: 5px;
            text-transform: uppercase;
            letter-spacing: 1px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
          .section-title i { font-size: 1.2em; color: #e74c3c; }
          .objective {
            background: #ecf0f1;
            padding: 15px;
            border-left: 4px solid #e74c3c;
            border-radius: 4px;
            font-style: italic;
          }
          .education-item, .experience-item, .certification-item, .reference-item {
            margin-bottom: 20px;
            padding: 15px;
            border-left: 4px solid #e74c3c;
            background: #f9f9f9;
            border-radius: 4px;
            transition: transform 0.3s ease;
          }
          .education-item:hover, .experience-item:hover, .certification-item:hover, .reference-item:hover {
            transform: translateX(5px);
          }
          .education-title, .experience-title, .certification-name {
            font-size: 1.2em;
            font-weight: 600;
            margin-bottom: 5px;
          }
          .education-school, .experience-company {
            font-size: 1em;
            color: #e74c3c;
            margin-bottom: 5px;
          }
          .education-date, .experience-date, .certification-date {
            font-size: 0.9em;
            background: #f1c40f;
            color: #fff;
            padding: 2px 8px;
            border-radius: 4px;
            display: inline-block;
            margin-bottom: 8px;
          }
          .experience-description, .education-description, .certification-description {
            font-size: 1em;
            white-space: pre-line;
          }
          /* Barre latérale */
          .contact-info, .languages-container, .skills-grid {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }
          .contact-item, .language-item, .skill-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: #f7f9fa;
            border-radius: 4px;
            transition: background 0.3s ease;
          }
          .contact-item:hover, .language-item:hover, .skill-item:hover {
            background: #ecf0f1;
          }
          .contact-item i, .language-item i, .skill-item i {
            font-size: 1.2em;
            color: #e74c3c;
          }
          .language-stars, .skill-points {
            margin-left: auto;
            display: flex;
            gap: 3px;
          }
          .star, .point {
            color: #bdc3c7;
            font-size: 1em;
          }
          .star.active, .point.active { color: #e74c3c; }
          /* Centres d'intérêt */
          .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 15px;
          }
          .interest-item {
            background: #f9f9f9;
            padding: 10px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: transform 0.3s ease;
            border-left: 4px solid #e74c3c;
          }
          .interest-item:hover { transform: translateY(-3px); }
          .interest-item i { color: #e74c3c; }
          /* Références */
          .reference-item {
            background: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #e74c3c;
          }
          /* Impression */
          @media print {
            body { background: none; margin-top: 30px; }
            .container { box-shadow: none; }
            .header, .sidebar, .main-content { box-shadow: none; }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <!-- En-tête -->
          <header class="header">
            ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo de profil" class="profile-photo">` : ''}
            <h1>${personalInfo.lastName || ''} ${personalInfo.firstName || ''}</h1>
            <h2>${personalInfo.title || ''}</h2>
          </header>
          <!-- Contenu principal -->
          <div class="content">
            <!-- Barre latérale -->
            <aside class="sidebar">
              <div class="section">
                <h2 class="section-title"><i class="fas fa-address-card"></i> Contact</h2>
                <div class="contact-info">
                  ${personalInfo.email ? `<div class="contact-item"><i class="fas fa-envelope"></i> ${personalInfo.email}</div>` : ''}
                  ${personalInfo.phone ? `<div class="contact-item"><i class="fas fa-phone"></i> ${personalInfo.phone}</div>` : ''}
                  ${personalInfo.address ? `<div class="contact-item"><i class="fas fa-map-marker-alt"></i> ${personalInfo.address}</div>` : ''}
                  ${personalInfo.linkedin ? `<div class="contact-item"><i class="fab fa-linkedin"></i> ${personalInfo.linkedin}</div>` : ''}
                  ${personalInfo.portfolio ? `<div class="contact-item"><i class="fas fa-globe"></i> ${personalInfo.portfolio}</div>` : ''}
                  ${personalInfo.nationality ? `<div class="contact-item"><i class="fas fa-globe-americas"></i> ${personalInfo.nationality}</div>` : ''}
                  ${personalInfo.maritalStatus ? `<div class="contact-item"><i class="fas fa-heart"></i> ${personalInfo.maritalStatus}</div>` : ''}
                  ${personalInfo.dateOfBirth ? `<div class="contact-item"><i class="fas fa-calendar"></i> ${personalInfo.dateOfBirth}</div>` : ''}
                  ${personalInfo.childrenCount ? `<div class="contact-item"><i class="fas fa-baby"></i> ${personalInfo.childrenCount} ${personalInfo.childrenCount > 1 ? 'enfants' : 'enfant'}</div>` : ''}
                  ${personalInfo.drivingLicense ? `<div class="contact-item"><i class="fas fa-car"></i> Permis ${personalInfo.drivingLicense}</div>` : ''}
                </div>
              </div>
              ${languages.length > 0 ? `
                <div class="section">
                  <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
                  <div class="languages-container">
                    ${languages.map(lang => `
                      <div class="language-item">
                        <span>${lang.name || ''}</span>
                        <div class="language-stars">
                          ${(() => {
                            const percentage = parseInt(lang.level, 10) || 0;
                            const stars = Math.ceil((percentage / 100) * 5);
                            return [1,2,3,4,5].map(i => `<i class="fas fa-star star ${i <= stars ? 'active' : ''}"></i>`).join('');
                          })()}
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              ` : ''}
              ${abilities.length > 0 ? `
                <div class="section">
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
                </div>
              ` : ''}
            </aside>
            <!-- Contenu principal -->
            <section class="main-content">
              ${personalInfo.profile ? `
                <div class="section">
                  <div class="objective">${personalInfo.profile}</div>
                </div>
              ` : ''}
              ${education.length > 0 ? `
                <div class="section">
                  <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Formation</h2>
                  ${education.map(edu => `
                    <div class="education-item">
                      <div class="education-title">${edu.degree || ''}</div>
                      <div class="education-school">${edu.institution || ''}</div>
                      <div class="education-date">${edu.startDate || ''} - ${edu.endDate || ''}</div>
                      <div class="education-description">${edu.description || ''}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              ${experience.length > 0 ? `
                <div class="section">
                  <h2 class="section-title"><i class="fas fa-briefcase"></i> Expérience Professionnelle</h2>
                  ${experience.map(exp => `
                    <div class="experience-item">
                      <div class="experience-title">${exp.position || ''}</div>
                      <div class="experience-company">${exp.company || ''}</div>
                      <div class="experience-date">${exp.startDate || ''} - ${exp.endDate || 'Présent'}</div>
                      <div class="experience-description">${(exp.tasks || '').replace(/\n/g, '<br>')}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
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
              ${certifications.length > 0 ? `
                <div class="section">
                  <h2 class="section-title"><i class="fas fa-certificate"></i> Certifications</h2>
                  ${certifications.map(cert => `
                    <div class="certification-item">
                      <div class="certification-name">${cert.name || ''}</div>
                      <div class="certification-date">${cert.date || ''}</div>
                      <div class="certification-description">${cert.description || ''}</div>
                    </div>
                  `).join('')}
                </div>
              ` : ''}
              <div class="section">
                <h2 class="section-title"><i class="fas fa-user-check"></i> Références</h2>
                ${references.length > 0 ? references.map(ref => `
                  <div class="reference-item">
                    <div class="certification-name">${ref.name || ''}</div>
                    <div class="certification-date">${ref.position || ''}</div>
                    <div class="certification-description">${ref.company || ''}</div>
                    <div class="certification-description">${ref.contact || ''}</div>
                  </div>
                `).join('') : '<div class="reference-item"><div class="certification-description">Références sur demande</div></div>'}
              </div>
            </section>
          </div>
        </div>
      </body>
    </html>
  `;
};
