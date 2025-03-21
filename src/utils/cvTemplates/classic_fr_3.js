import { FontAwesome5 } from '@expo/vector-icons';

export const name = "Modèle Classique 3 FR";

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
        <title>CV Classique 3 (Français)</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
        <style>
          @page {
            margin: 15mm;
          }
          body {
            font-family: 'Open Sans', sans-serif;
            margin: 0;
            padding: 0;
            color: #2c3e50;
            line-height: 1.5;
            font-size: 11pt;
            background-color: #fff;
            letter-spacing: 0.2px;
          }
          .container {
            width: 100%;
            max-width: 850px;
            margin: 0 auto;
            padding: 25px;
            display: grid;
            grid-template-columns: 1fr;
            gap: 35px;
          }
          .header {
            background: linear-gradient(135deg, #1a365d 0%, #0f2342 100%);
            padding: 35px;
            border-radius: 8px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            color: #fff;
            text-align: center;
            position: relative;
            overflow: hidden;
          }
          .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                        linear-gradient(-45deg, rgba(255,255,255,0.1) 25%, transparent 25%),
                        linear-gradient(45deg, transparent 75%, rgba(255,255,255,0.1) 75%),
                        linear-gradient(-45deg, transparent 75%, rgba(255,255,255,0.1) 75%);
            background-size: 20px 20px;
            opacity: 0.1;
          }
          .profile-photo {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            object-fit: cover;
            border: 3px solid rgba(255,255,255,0.9);
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            margin-bottom: 20px;
            transition: transform 0.3s ease;
            position: relative;
            z-index: 1;
          }
          .profile-photo:hover {
            transform: scale(1.05);
          }
          .header h1 {
            font-size: 2.6em;
            color: #fff;
            margin: 0 0 8px 0;
            letter-spacing: 0.5px;
            font-weight: 600;
            position: relative;
            z-index: 1;
          }
          .header h2 {
            font-size: 1.5em;
            color: rgba(255,255,255,0.95);
            margin: 0 0 20px 0;
            font-weight: 400;
            letter-spacing: 0.3px;
            position: relative;
            z-index: 1;
          }
          .contact-info {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
            position: relative;
            z-index: 1;
          }
          .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 10px 18px;
            background: rgba(255,255,255,0.08);
            border-radius: 25px;
            font-size: 0.95em;
            color: #fff;
            transition: all 0.3s ease;
            backdrop-filter: blur(8px);
            border: 1px solid rgba(255,255,255,0.1);
          }
          .contact-item:hover {
            transform: translateY(-2px);
            background: rgba(255,255,255,0.2);
          }
          .contact-item i {
            font-size: 1.1em;
            color: #fff;
          }
          .content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }
          .section {
            margin-bottom: 15mm;
            position: relative;
            page-break-inside: avoid;
          }
          .section-title {
            font-size: 13pt;
            color: #1a365d;
            margin-bottom: 10mm;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            font-weight: 600;
            border-bottom: 2px solid #e2e8f0;
            padding-bottom: 8px;
            page-break-after: avoid;
          }
          .section-title i {
            margin-right: 8px;
            color: #2c5282;
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
            margin-bottom: 12mm;
            padding-bottom: 12mm;
            border-bottom: 1px solid #edf2f7;
            position: relative;
            page-break-inside: avoid;
          }
          .experience-item::before, .education-item::before {
            content: '';
            position: absolute;
            left: -25px;
            top: 10px;
            width: 8px;
            height: 8px;
            background-color: #2c5282;
            border-radius: 50%;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .experience-item:last-child, .education-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .experience-title, .education-title {
            font-size: 1.25em;
            font-weight: 600;
            color: #1a365d;
            margin-bottom: 6px;
            letter-spacing: 0.3px;
          }
          .experience-company, .education-school {
            color: #2c5282;
            font-size: 1.15em;
            margin-bottom: 6px;
            font-weight: 500;
            letter-spacing: 0.2px;
          }
          .experience-date, .education-date {
            color: #64748b;
            font-size: 0.95em;
            margin-bottom: 12px;
            font-style: italic;
          }
          .experience-description {
            color: #334155;
            font-size: 1.05em;
            line-height: 1.7;
            padding-top: 10px;
            white-space: pre-line;
            padding-left: 25px;
            position: relative;
            letter-spacing: 0.2px;
          }
          .skills-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .skill-item {
            margin-bottom: 5mm;
            position: relative;
            page-break-inside: avoid;
          }
          .skill-name {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            font-weight: 500;
            color: #2c3e50;
          }
          .skill-bar {
            height: 6px;
            background: #f1f5f9;
            border-radius: 3px;
            overflow: hidden;
          }
          .skill-progress {
            height: 100%;
            background: linear-gradient(90deg, #2c5282 0%, #1a365d 100%);
            border-radius: 3px;
            transition: width 0.4s ease;
          }
          .languages-container {
            display: grid;
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .language-item {
            margin-bottom: 5mm;
            position: relative;
            page-break-inside: avoid;
          }
          .language-name {
            display: flex;
            justify-content: space-between;
            margin-bottom: 6px;
            font-weight: 500;
            color: #2c3e50;
          }
          .language-bar {
            height: 6px;
            background: #f1f5f9;
            border-radius: 3px;
            overflow: hidden;
          }
          .language-progress {
            height: 100%;
            background: linear-gradient(90deg, #2c5282 0%, #1a365d 100%);
            border-radius: 3px;
            transition: width 0.4s ease;
          }
          .certification-item {
            margin-bottom: 6mm;
            padding-bottom: 6mm;
            border-bottom: 1px solid #edf2f7;
            position: relative;
            page-break-inside: avoid;
          }
          .certification-item::before {
            content: '•';
            position: absolute;
            left: -20px;
            top: 2px;
            color: #2c5282;
            font-weight: bold;
            font-size: 1.2em;
          }
          .certification-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
          }
          .certification-name {
            font-weight: 600;
            color: #1a365d;
            margin-bottom: 6px;
            font-size: 1.1em;
            letter-spacing: 0.2px;
          }
          .certification-date {
            color: #7f8c8d;
            font-size: 0.9em;
            margin-bottom: 5px;
            font-style: italic;
          }
          .certification-description {
            color: #34495e;
            font-size: 0.95em;
            line-height: 1.6;
          }
          .interests-grid {
            display: grid;
            gap: 12px;
            margin-bottom: 15px;
          }
          .interest-item {
            background: #f8fafc;
            padding: 12px 16px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            gap: 12px;
            border: 1px solid #e2e8f0;
            transition: all 0.3s ease;
          }
          .interest-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          }
          .interest-item i {
            color: #2c5282;
            font-size: 1.1em;
          }
          .references {
            font-size: 9pt;
            color: #666;
            text-align: center;
            padding: 10mm;
            background: #f5f5f5;
            border-radius: 4mm;
            position: relative;
            page-break-inside: avoid;
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
              padding: 20px;
              margin: 0;
            }
            .header {
              background: linear-gradient(135deg, #2c5282 0%, #1a365d 100%) !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1) !important;
            }
            .header::before {
              display: block !important;
            }
            .contact-item {
              background: rgba(255,255,255,0.1) !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
              color-adjust: exact !important;
              backdrop-filter: blur(5px) !important;
            }
            .section {
              background: #fff !important;
              box-shadow: 0 2px 10px rgba(0,0,0,0.05) !important;
            }
            .objective {
              background: #f8f9fa !important;
              border-left: 4px solid #2c5282 !important;
            }
            .skill-bar, .language-bar {
              background: #f0f0f0 !important;
            }
            .skill-progress, .language-progress {
              background: #2c5282 !important;
            }
            .interest-item {
              background: #f8f9fa !important;
            }
            .references {
              background: #f8f9fa !important;
            }
            .content {
              display: grid !important;
              grid-template-columns: 1fr 1fr !important;
              gap: 30px !important;
            }
            .left-column, .right-column {
              width: auto !important;
              float: none !important;
            }
            
            /* Règles de pagination */
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
            
            .skill-bar, .language-bar {
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
        </style>
      </head>
      <body>
        <div class="container">
          <header class="header">
            ${personalInfo.photo ? `<img src="${personalInfo.photo}" alt="Photo de profil" class="profile-photo">` : ''}
            <h1>${personalInfo.lastName || ''} ${personalInfo.firstName || ''}</h1>
            <h2>${personalInfo.title || ''}</h2>
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
            </header>

          <div class="content">
            <div class="left-column">
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
          </div>

            <div class="right-column">
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
        </div>
      </body>
    </html>
  `;
};
