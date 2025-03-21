import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Classique 1 FR";

export const template = (userData) => {
  const personalInfo = userData || {};
  const languages = userData.languages || [];
  const abilities = userData.skills || [];
  const education = userData.educations || [];
  const experience = userData.experiences || [];
  const certifications = userData.certifications || [];
  const interests = userData.hobbies || [];
  const references = userData.references || [];

  console.log('Centres d\'intérêt reçus:', interests);

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.25">
        <title>CV Classique 1 (Français)</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
        <style>
          body {
            font-family: 'Poppins', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f5f5f5;
            color: #333;
            line-height: 1.6;
          }

          .container {
            width: 210mm;
            min-height: 297mm;
            margin: 0 auto;
            background: white;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            display: grid;
            grid-template-columns: 250px 1fr;
            overflow: hidden;
          }

          .sidebar {
            background-color: #2c3e50;
            color: white;
            padding: 20px;
          }

          .main-content {
            padding: 30px;
            background: white;
          }

          .header {
            text-align: center;
            margin-bottom: 30px;
          }

          .profile-photo {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin-bottom: 20px;
            border: 3px solid white;
          }

          h1 {
            font-size: 24px;
            margin: 0;
            font-weight: 600;
          }

          h2 {
            font-size: 18px;
            margin: 10px 0;
            font-weight: 400;
          }

          .section {
            margin-bottom: 25px;
          }

          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #e74c3c;
            border-bottom: 2px solid #e74c3c;
            padding-bottom: 5px;
          }

          .sidebar .section-title {
            color: white;
            border-bottom-color: white;
          }

          .contact-info {
            margin-bottom: 20px;
          }

          .contact-item {
            margin: 10px 0;
            display: flex;
            align-items: center;
            word-break: break-all;
          }

          .contact-item i {
            margin-right: 10px;
            width: 20px;
            text-align: center;
          }

          .skills-grid, .interests-grid {
            display: grid;
            gap: 10px;
            margin-bottom: 15px;
          }

          .skill-item, .interest-item {
            background: rgba(255,255,255,0.1);
            padding: 10px;
            border-radius: 5px;
          }

          .skill-name {
            display: flex;
            justify-content: space-between;
            margin-bottom: 5px;
          }

          .skill-bar, .language-bar {
            height: 5px;
            background: rgba(255,255,255,0.2);
            border-radius: 3px;
            overflow: hidden;
          }

          .skill-progress, .language-progress {
            height: 100%;
            background: #e74c3c;
            border-radius: 3px;
          }

          .education-item, .experience-item, .certification-item {
            margin-bottom: 20px;
          }

          .education-title, .experience-title {
            font-weight: 600;
            color: #2c3e50;
          }

          .education-school, .experience-company {
            color: #e74c3c;
            font-weight: 500;
          }

          .education-date, .experience-date {
            color: #7f8c8d;
            font-size: 14px;
            margin: 5px 0;
          }

          .objective {
            font-style: italic;
            color: #7f8c8d;
            margin-bottom: 30px;
            line-height: 1.6;
          }

          .interest-item {
            display: flex;
            align-items: center;
            gap: 10px;
          }

          .interest-item i {
            color: #e74c3c;
          }

          .experience-description {
            color: #2c3e50;
            font-size: 1.1em;
            line-height: 1.6;
            padding-top: 8px;
            white-space: pre-line;
          }

          @media print {
            body {
              background: none;
            }
            .container {
              box-shadow: none;
              margin: 0;
            }
            .section {
              page-break-inside: avoid;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="sidebar">
            <header class="header">
              ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo de profil" class="profile-photo">` : ''}
              <h1>${personalInfo.lastName || ''} ${personalInfo.firstName || ''}</h1>
              <h2>${personalInfo.title || ''}</h2>
            </header>

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
                ${personalInfo.childrenCount ? `<div class="contact-item"><i class="fas fa-baby"></i> ${personalInfo.childrenCount} enfants</div>` : ''}
                ${personalInfo.drivingLicense ? `<div class="contact-item"><i class="fas fa-car"></i> ${personalInfo.drivingLicense}</div>` : ''}
              </div>
            </div>

            ${languages.length > 0 ? `
              <div class="section">
                <h2 class="section-title"><i class="fas fa-language"></i> Langues</h2>
                <div class="languages-container">
                  ${languages.map(lang => `
                    <div class="language-item">
                      <div class="language-name">
                        <span>${lang.name || ''}</span>
                        <span>${lang.level || ''}%</span>
                      </div>
                      <div class="language-bar">
                        <div class="language-progress" style="width: ${lang.level || 0}%"></div>
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
                      <div class="skill-name">
                        <span>${skill.name || ''}</span>
                        <span>${skill.level || ''}%</span>
                      </div>
                      <div class="skill-bar">
                        <div class="skill-progress" style="width: ${skill.level || 0}%"></div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            ` : ''}
          </div>

          <div class="main-content">
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
                <h2 class="section-title"><i class="fas fa-heart"></i> Hobbies</h2>
                <div class="interests-grid">
                  ${interests.map(hobby => `
                    <div class="interest-item">
                      <i class="fas fa-star"></i>
                      ${hobby}
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
                <div class="certification-item">
                  <div class="certification-name">${ref.name || ''}</div>
                  <div class="certification-date">${ref.position || ''}</div>
                  <div class="certification-description">${ref.company || ''}</div>
                  <div class="certification-description">${ref.contact || ''}</div>
                </div>
              `).join('') : '<div class="certification-item"><div class="certification-description">Références sur demande</div></div>'}
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
