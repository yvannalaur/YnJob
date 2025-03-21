import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Classique 4 FR";

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
        <meta name="viewport" content="width=device-width, initial-scale=0.25">
        <title>CV Classique 4 (Français)</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
        <style>
          @page {
            margin: 15mm;
          }
          body {
            font-family: 'Montserrat', sans-serif;
            margin: 0;
            padding: 0;
            color: #2c3e50;
            line-height: 1.4;
            font-size: 10pt;
            background-color: #fff;
          }
          .container {
            width: 100%;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            display: grid;
            grid-template-columns: 1fr 300px;
            gap: 30px;
          }
          .main-content {
            padding-right: 20px;
          }
          .sidebar {
background: linear-gradient(135deg, #ffc0cb 0%, #ffc0cb 100%);
            padding: 25px;
            border-radius: 15px;
box-shadow: 0 10px 30px rgba(255, 182, 193, 0.2);
            color: #800000;
          }
          .header {
            text-align: center;
            margin-bottom: 25px;
            padding-bottom: 20px;
border-bottom: 3px solid #ffc0cb;
            position: relative;
          }
          .profile-photo {
            width: 180px;
            height: 180px;
            border-radius: 50%;
            object-fit: cover;
border: 4px solid #ffb6c1;
box-shadow: 0 8px 25px rgba(255, 182, 193, 0.2);
            margin-bottom: 15px;
            transition: transform 0.3s ease;
          }
          .profile-photo:hover {
            transform: scale(1.05);
          }
          .header h1 {
            font-size: 2.4em;
            color: #800000;
            margin: 0 0 5px 0;
            letter-spacing: -0.5px;
            font-weight: 700;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
          }
          .header h2 {
            font-size: 1.4em;
color: #800000;
            margin: 0 0 15px 0;
            font-weight: 500;
          }
          .contact-info {
            display: flex;
            flex-direction: column;
            gap: 12px;
            font-size: 0.9em;
            color: #800000;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: rgba(255,255,255,0.2);
            border-radius: 12px;
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            font-size: 1.1em;
            font-weight: 500;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .contact-item:hover {
            transform: translateX(5px);
            background: rgba(255,255,255,0.3);
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          }
          .contact-item i {
            font-size: 1.4em;
            color: #800000;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .section {
            margin-bottom: 15mm;
            position: relative;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 1.3em;
            color: #2c3e50;
            margin-bottom: 20px;
            text-transform: uppercase;
            letter-spacing: 1px;
            page-break-after: avoid;
            font-weight: 600;
border-bottom: 3px solid #ffb6c1;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            gap: 10px;
          }
.section-title i {
            font-size: 1.4em;
            color: #ffb6c1;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
          }
          .objective {
            font-size: 10pt;
            line-height: 1.6;
            color: #666;
            margin-bottom: 15mm;
            padding: 5mm;
            background: #f5f5f5;
            border-radius: 4mm;
            position: relative;
            page-break-inside: avoid;
          }
          .experience-item, .education-item {
            margin-bottom: 25px;
            padding: 20px;
border: 1px solid rgba(255, 182, 193, 0.2);
            border-radius: 8px;
            position: relative;
background: rgba(255, 182, 193, 0.02);
            transition: all 0.3s ease;
          }
          .experience-item:hover, .education-item:hover {
            transform: translateY(-2px);
box-shadow: 0 4px 15px rgba(255, 182, 193, 0.1);
          }
          .experience-item::before, .education-item::before {
            content: '';
            position: absolute;
            left: -15px;
            top: 25px;
            width: 12px;
            height: 12px;
background-color: #ffb6c1;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(255, 182, 193, 0.3);
          }
          .experience-item:last-child, .education-item:last-child {
            margin-bottom: 25px;
          }
          .experience-title, .education-title {
            font-size: 1.3em;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 10px;
            padding-bottom: 5px;
border-bottom: 2px solid rgba(255, 182, 193, 0.1);
          }
.experience-company, .education-school {
            color: #ffb6c1;
            font-size: 1.2em;
            margin-bottom: 8px;
            font-weight: 600;
          }
          .experience-date, .education-date {
            color: #2c3e50;
            font-size: 1em;
            margin-bottom: 12px;
            font-weight: 500;
            display: inline-block;
            padding: 4px 12px;
background: rgba(255, 192, 203, 0.1);
            border-radius: 4px;
          }
          .experience-description {
            color: #2c3e50;
            font-size: 1.1em;
            line-height: 1.6;
            padding-top: 8px;
            white-space: pre-line;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .skill-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .skill-name {
            font-size: 1.2em;
            font-weight: 600;
            color: #800000;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          }
          .skill-points {
            display: flex;
            gap: 5px;
          }
          .point {
            width: 12px;
            height: 12px;
            background: rgba(255,255,255,0.3);
          }
          .point.active {
            background: #fff;
            box-shadow: 0 0 10px rgba(255,255,255,0.8);
          }
          .languages-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .language-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .language-name {
            font-size: 1.2em;
            font-weight: 600;
            color: #800000;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          }
          .language-stars {
            display: flex;
            gap: 5px;
          }
          .star {
            color: rgba(255,255,255,0.3);
            font-size: 1.3em;
            transition: all 0.3s ease;
          }
          .star.active {
            color: #fff;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
          }
          .certification-item {
            margin-bottom: 15px;
            padding: 15px;
            padding-left: 40px;
border: 1px solid rgba(255, 182, 193, 0.2);
            border-radius: 8px;
            font-size: 1em;
            position: relative;
            background: rgba(255, 168, 168, 0.05);
            transition: all 0.3s ease;
          }
          .certification-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(255, 168, 168, 0.1);
          }
          .certification-item::before {
            content: '✓';
            position: absolute;
            left: 15px;
            top: 50%;
            transform: translateY(-50%);
color: #ffb6c1;
            font-weight: bold;
            font-size: 1.3em;
          }
          .certification-name {
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 8px;
            font-size: 1.2em;
          }
          .certification-date {
color: #ffb6c1;
            font-size: 1em;
            margin-bottom: 8px;
            font-weight: 500;
          }
          .certification-description {
            color: #2c3e50;
            font-size: 1em;
            line-height: 1.6;
          }
          .interests-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 15px;
            margin-bottom: 20px;
          }
          .interest-item {
            background: rgba(255, 168, 168, 0.1);
            padding: 15px;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.1em;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 168, 168, 0.2);
          }
          .interest-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 10px rgba(255, 168, 168, 0.1);
          }
          .interest-item i {
color: #ffb6c1;
            font-size: 1.2em;
          }
          .references {
            font-size: 1em;
            color: #2c3e50;
            padding: 20px;
            background: rgba(255, 168, 168, 0.05);
            border-radius: 8px;
            position: relative;
            border: 1px solid rgba(255, 168, 168, 0.2);
          }
          @media print {
            @page {
              size: A4;
              margin: 15mm;
            }
            body {
              background-color: #fff;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
            }
            .container {
              width: 210mm;
              max-width: none;
            padding: 0;
              margin: 0;
            }
            .content {
              display: block;
              width: 100%;
            }
            .left-column, .right-column {
              width: 100%;
              float: none;
            }

            .section {
              break-inside: avoid;
              page-break-inside: avoid;
              page-break-before: auto;
            }

            .section:has(.languages-container),
            .section:has(.skills-grid) {
              break-inside: avoid;
              page-break-inside: avoid;
              page-break-before: auto;
              page-break-after: avoid;
            }

            .experience-item, .education-item, .certification-item {
              break-inside: avoid;
              page-break-inside: avoid;
              page-break-before: auto;
            }

            .contact-item {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .skill-item, .language-item {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .interest-item {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .header {
              break-inside: avoid;
              page-break-inside: avoid;
              page-break-after: avoid;
            }

            .profile-photo {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .skill-points, .language-stars {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .experience-description, .education-description, .certification-description {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .references {
              break-inside: avoid;
              page-break-inside: avoid;
            }

            .objective {
              break-inside: avoid;
              page-break-inside: avoid;
            }
          }
          /* Règles spécifiques pour les sections langues et compétences */
          .section:has(.language-item), .section:has(.skill-item) {
            page-break-inside: avoid;
            page-break-before: auto;
          }
          .section:has(.language-item) .section-title,
          .section:has(.skill-item) .section-title {
            page-break-after: avoid;
          }
          .section:has(.language-item) .language-item,
          .section:has(.skill-item) .skill-item {
            page-break-inside: avoid;
            page-break-before: auto;
          }
          .sidebar .section-title {
            color: #800000;
            border-bottom: 3px solid rgba(255, 255, 255, 0.3);
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            font-size: 1.4em;
            margin-bottom: 20px;
          }
          .sidebar .section-title i {
            color: #800000;
            font-size: 1.5em;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 15px;
            background: rgba(255,255,255,0.2);
            border-radius: 12px;
            backdrop-filter: blur(5px);
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            font-size: 1.1em;
            font-weight: 500;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .contact-item:hover {
            transform: translateX(5px);
            background: rgba(255,255,255,0.3);
            box-shadow: 0 6px 20px rgba(0,0,0,0.25);
          }
          .contact-item i {
            font-size: 1.4em;
            color: #800000;
            text-shadow: 0 2px 4px rgba(0,0,0,0.2);
          }
          .language-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .language-name {
            font-size: 1.2em;
            font-weight: 600;
            color: #800000;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          }
          .star {
            color: rgba(255,255,255,0.3);
            font-size: 1.3em;
            transition: all 0.3s ease;
          }
          .star.active {
            color: #800000;
            text-shadow: 0 0 10px rgba(255,255,255,0.8);
          }
          .skill-item {
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 12px;
            margin-bottom: 12px;
            border: 1px solid rgba(255,255,255,0.1);
          }
          .skill-name {
            font-size: 1.2em;
            font-weight: 600;
            color: #800000;
            text-shadow: 0 1px 2px rgba(0,0,0,0.2);
          }
          .point {
            width: 12px;
            height: 12px;
            background: rgba(255,255,255,0.3);
          }
          .point.active {
            background: #800000;
            box-shadow: 0 0 10px rgba(255,255,255,0.8);
          }
        </style>
      </head>
      <body>
        <div class="container">
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
                    <div class="experience-description">${(exp.tasks || '').replace(/\n/g, '\n')}</div>
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
                      <div class="language-name">
                        <span>${lang.name || ''}</span>
                        <div class="language-stars">
                          ${(() => {
                            const level = parseInt(lang.level) || 0;
                            const stars = Math.ceil(level / 20); // Convertit le pourcentage en étoiles (5 étoiles = 100%)
                            return [1,2,3,4,5].map(i => `
                              <i class="fas fa-star star ${i <= stars ? 'active' : ''}"></i>
                            `).join('');
                          })()}
                        </div>
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
                        <div class="skill-points">
                          ${(() => {
                            const level = parseInt(skill.level) || 0;
                            const points = Math.ceil(level / 20); // Convertit le pourcentage en points (5 points = 100%)
                            return [1,2,3,4,5].map(i => `
                              <div class="point ${i <= points ? 'active' : ''}"></div>
                            `).join('');
                          })()}
                        </div>
                      </div>
                    </div>
              `).join('')}
                </div>
              </div>
            ` : ''}
          </div>
        </div>
      </body>
    </html>
  `;
};
