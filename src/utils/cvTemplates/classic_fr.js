export const template = (userData) => {
  const personalInfo = userData || {};
  const languages = userData.languages || [];
  const abilities = userData.skills || [];
  const education = userData.educations || [];
  const experience = userData.experiences || [];
  const hobbies = userData.hobbies || [];
  const references = userData.references || [];
  const certifications = userData.certifications || [];

  return `
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=0.25">
        <title>CV Classique Moderne (Français)</title>
        <style>
          @page {
            margin: 20mm; /* Set page margins here */
          }
          body {
            font-family: 'Arial', sans-serif;
            margin: 10px;
            padding: 0;
            color: #333;
            line-height: 1.4;
            font-size: 8pt;
          }
          .container { width: 90%; max-width: 600px; margin: 20px auto; background-color: #fff; padding: 30px; border-radius: 10px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
          header { text-align: center; margin-bottom: 20px; }
          header h1 { font-size: 2.5em; color: #2c3e50; margin-bottom: 5px; }
          header h3 { font-size: 1.4em; color: #777; margin-top: 0; }
          .section { margin-bottom: 25px; }
          .section > h2 {
            font-size: 1.8em; color: #3498db; border-bottom: 2px solid #3498db; padding-bottom: 6px; margin-bottom: 12px;
            display: flex;
            align-items: center;
          }
          .section > h2 > svg { margin-right: 8px; }
          .personal-info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px 15px; margin-top: 8px; }
          .personal-info-grid p { margin: 0; display: flex; align-items: center; font-size: 0.9em; }
          .personal-info-grid p svg { margin-right: 6px; color: #3498db; }
          .skills-languages-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 15px; }
          .skill-item, .language-item { margin-bottom: 8px; }
          .skill-item h3, .language-item h3 { font-size: 1em; margin-bottom: 4px; color: #333; }
          .ability-level { height: 8px; background-color: #ddd; border-radius: 4px; overflow: hidden; }
          .ability-level span { display: block; height: 100%; border-radius: 4px; background-color: #3498db; }
          .experience-list, .education-list, .certifications-list, .references-list { padding-left: 0; list-style: none; }
          .experience-item, .education-item, .certification-item, .reference-item,
          .experience-item:last-child, .education-item:last-child, .certification-item:last-child, .reference-item:last-child,
          .experience-item h3, .education-item h3, .certification-item h3, .reference-item h3,
          .experience-item p, .education-item p, .certification-item p, .reference-item p,
          .hobbies { page-break-inside: avoid; }
          .experience-item, .education-item, .certification-item, .reference-item { margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #eee; }
          .experience-item:last-child, .education-item:last-child, .certification-item:last-child, .reference-item:last-child { border-bottom: none; }
          .experience-item h3, .education-item h3, .certification-item h3, .reference-item h3 { font-size: 1.1em; color: #2c3e50; margin-bottom: 4px; }
          .experience-item p, .education-item p, .certification-item p, .reference-item p { margin: 4px 0; color: #555; font-size: 0.8em; }
          .section-content { margin-left: 0; } /* Removed indentation */
          .hobbies { margin-top: 15px; }
          .hobbies h2 { margin-bottom: 8px; }
          .hobbies-list { display: flex; flex-wrap: wrap; justify-content: flex-start; }
          .hobby-item { background-color: #e6f7ff; color: #3498db; padding: 6px 12px; margin: 4px; border-radius: 15px; border: 1px solid #3498db; display: inline-block; font-size: 0.8em; }
          .section--references .reference-item { border-bottom: none; } /* No border bottom for references */
        </style>
      </head>
      <body>
        <div class="container">
          <header style="text-align: center;">
            <img src="${personalInfo.photo || 'URL_DE_LA_PHOTO_PAR_DEFAUT'}" alt="Photo de profil" style="width: 120px; height: 120px; border-radius: 50%; margin-bottom: 8px;">
            <h1 style="margin-top: 0; font-size: 2.5em;">${personalInfo.firstName || ''} ${personalInfo.lastName || ''}</h1>
            <h3 style="color: #777;">${personalInfo.title || ''}</h3>
          </header>

          ${personalInfo.profile ? `
          <section class="section personal-info">
            <h2>
              <MaterialCommunityIcons name="account" size={24} color="#3498db" />
              Informations Personnelles
            </h2>
            <div class="personal-info-grid">
              ${personalInfo.email ? `<p><MaterialCommunityIcons name="email" size={16} color="#3498db" /> <strong>Email:</strong> ${personalInfo.email}</p>` : ''}
              ${personalInfo.phone ? `<p><MaterialCommunityIcons name="phone" size={16} color="#3498db" /> <strong>Téléphone:</strong> ${personalInfo.phone}</p>` : ''}
              ${personalInfo.address ? `<p><MaterialCommunityIcons name="home" size={16} color="#3498db" /> <strong>Adresse:</strong> ${personalInfo.address}</p>` : ''}
              ${personalInfo.dateOfBirth ? `<p><MaterialCommunityIcons name="cake" size={16} color="#3498db" /> <strong>Date de naissance:</strong> ${personalInfo.dateOfBirth}</p>` : ''}
              ${personalInfo.linkedin ? `<p><MaterialCommunityIcons name="linkedin" size={16} color="#3498db" /> <strong>LinkedIn:</strong> ${personalInfo.linkedin}</p>` : ''}
              ${personalInfo.portfolio ? `<p><MaterialCommunityIcons name="web" size={16} color="#3498db" /> <strong>Portfolio:</strong> ${personalInfo.portfolio}</p>` : ''}
              ${personalInfo.nationality ? `<p><MaterialCommunityIcons name="flag" size={16} color="#3498db" /> <strong>Nationalité:</strong> ${personalInfo.nationality}</p>` : ''}
              ${personalInfo.drivingLicense ? `<p><MaterialCommunityIcons name="license" size={16} color="#3498db" /> <strong>Permis de conduire:</strong> ${personalInfo.drivingLicense}</p>` : ''}
              ${personalInfo.maritalStatus ? `<p><MaterialCommunityIcons name="heart-outline" size={16} color="#3498db" /> <strong>Situation matrimoniale:</strong> ${personalInfo.maritalStatus}</p>` : ''}
              ${personalInfo.childrenCount ? `<p><MaterialCommunityIcons name="human-child" size={16} color="#3498db" /> <strong>Nombre d'enfants:</strong> ${personalInfo.childrenCount}</p>` : ''}
            </div>
            ${personalInfo.profile ? `<p><strong>Profil:</strong> ${personalInfo.profile}</p>` : ''}
          </section>
          ` : ''}

          ${abilities.length > 0 ? `
          <section class="section skills-languages">
            <h2>
              <MaterialCommunityIcons name="code-tags" size={24} color="#3498db" />
              Compétences
            </h2>
            <div class="skills-languages-grid">
              <div>
                <ul>
                  ${abilities.slice(0, Math.ceil(abilities.length / 2)).map(ability => `
                    <li class="skill-item">
                      <h3>${ability.name}</h3>
                      <div class="ability-level"><span style="width: ${ability.level}%"></span></div>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div>
                <ul>
                  ${abilities.slice(Math.ceil(abilities.length / 2)).map(ability => `
                    <li class="skill-item">
                      <h3>${ability.name}</h3>
                      <div class="ability-level"><span style="width: ${ability.level}%"></span></div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>

            <h2>
              <MaterialCommunityIcons name="translate" size={24} color="#3498db" />
              Langues
            </h2>
            <div class="skills-languages-grid">
              <div>
                <ul>
                  ${languages.slice(0, Math.ceil(languages.length / 2)).map(language => `
                    <li class="language-item">
                      <h3>${language.name} (${language.level}%)</h3>
                      <div class="ability-level"><span style="width: ${language.level}%"></span></div>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div>
                <ul>
                  ${languages.slice(Math.ceil(languages.length / 2)).map(language => `
                    <li class="language-item">
                      <h3>${language.name} (${language.level}%)</h3>
                      <div class="ability-level"><span style="width: ${language.level}%"></span></div>
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
          </section>
          `: ''}

          ${experience.length > 0 ? `
          <section class="section experience">
            <h2>
              <MaterialCommunityIcons name="briefcase" size={24} color="#3498db" />
              Expérience Professionnelle
            </h2>
            <div class="section-content">
              <ul class="experience-list">
                ${experience.map(exp => {
                  if (!exp.position && !exp.company && !exp.startDate && !exp.endDate && !exp.tasks) {
                    return ''; // Skip rendering if experience item is empty
                  }
                  return `
                    <li class="experience-item">
                      <h3>${exp.position} - ${exp.company}</h3>
                      <p style="font-size: 0.9em;"><strong>Dates:</strong> ${exp.startDate} - ${exp.endDate || 'Présent'}</p>
                      <p style="font-size: 0.9em;"><strong>Tâches:</strong> ${exp.tasks}</p>
                    </li>
                  `;
                }).join('')}
              </ul>
            </div>
          </section>
          `: ''}

          ${education.length > 0 ? `
          <section class="section education">
            <h2>
              <MaterialCommunityIcons name="school" size={24} color="#3498db" />
              Éducation
            </h2>
            <div class="section-content">
              <ul class="education-list">
                ${education.map(edu => {
                  if (!edu.degree && !edu.institution && !edu.startDate && !edu.endDate) {
                    return ''; // Skip rendering if education item is empty
                  }
                  return `
                    <li class="education-item">
                      <h3>${edu.degree} - ${edu.institution}</h3>
                      <p style="font-size: 0.9em;"><strong>Dates:</strong> ${edu.startDate} - ${edu.endDate || 'Présent'}</p>
                  </li>
                `;
                }).join('')}
              </ul>
            </div>
          </section>
          `: ''}

          ${certifications.length > 0 ? `
          <section class="section certifications">
            <h2>
              <MaterialCommunityIcons name="certificate" size={24} color="#3498db" />
              Certifications
            </h2>
            <div class="section-content">
              <ul class="certifications-list">
                ${certifications.map(cert => {
                  if (!cert.name && !cert.institution && !cert.date && !cert.description) {
                    return ''; // Skip rendering if certification item is empty
                  }
                  return `
                    <li class="certification-item">
                      <h3>${cert.name} - ${cert.institution}</h3>
                      <p style="font-size: 0.9em;"><strong>Date d'obtention:</strong> ${cert.date}</p>
                    <p style="font-size: 0.9em;">${cert.description}</p>
                  </li>
                `;
                }).join('')}
              </ul>
            </div>
          </section>
          `: ''}

          ${hobbies.length > 0 ? `
          <section class="section hobbies">
            <h2>
              <MaterialCommunityIcons name="heart" size={24} color="#3498db" />
              Centres d'intérêt
            </h2>
            <ul class="hobbies-list">
              ${hobbies.map(hobby => `<li class="hobby-item">${hobby}</li>`).join('')}
            </ul>
          </section>
          `: ''}

          ${references.length > 0 ? `
          <section class="section section--references references">
            <h2>
              <MaterialCommunityIcons name="account-multiple" size={24} color="#3498db" />
              Références
            </h2>
            <div class="section-content">
              <ul class="references-list">
                ${references.map(ref => {
                  if (!ref.name && !ref.title && !ref.company && !ref.contact) {
                    return ''; // Skip rendering if reference item is empty
                  }
                  return `
                    <li class="reference-item">
                      <h3>${ref.name}</h3>
                      <p style="font-size: 0.9em;"><strong>Titre:</strong> ${ref.title}</p>
                      <p style="font-size: 0.9em;"><strong>Entreprise:</strong> ${ref.company}</p>
                      <p style="font-size: 0.9em;"><strong>Contact:</strong> ${ref.contact}</p>
                  </li>
                `;
                }).join('')}
              </ul>
            </div>
          </section>
          `: ''}
        </div>
      </body>
    </html>
  `;
}

export const name = "Modèle Classique 1 FR";
