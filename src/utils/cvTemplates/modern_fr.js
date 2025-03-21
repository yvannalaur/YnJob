const modern_fr = {
  name: "modern_fr",
  label: "Modern French",
  previewImage: "cv_template_5.png",
  fields: [
    {
      name: "personalInfo",
      label: "Informations personnelles",
      fields: [
        {
          name: "firstName",
          label: "Prénom",
          type: "text",
          required: true,
        },
        {
          name: "lastName",
          label: "Nom",
          type: "text",
          required: true,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "phone",
          label: "Téléphone",
          type: "tel",
        },
        {
          name: "address",
          label: "Adresse",
          type: "text",
        },
        {
          name: "linkedin",
          label: "LinkedIn",
          type: "url",
        },
        {
          name: "github",
          label: "GitHub",
          type: "url",
        },
        {
          name: "objective",
          label: "Objectif",
          type: "textarea",
        },
      ],
    },
    {
      name: "experience",
      label: "Expérience",
      type: "array",
      itemFields: [
        {
          name: "title",
          label: "Titre",
          type: "text",
          required: true,
        },
        {
          name: "company",
          label: "Entreprise",
          type: "text",
          required: true,
        },
        {
          name: "location",
          label: "Lieu",
          type: "text",
        },
        {
          name: "startDate",
          label: "Date de début",
          type: "date",
        },
        {
          name: "endDate",
          label: "Date de fin",
          type: "date",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
    {
      name: "education",
      label: "Formation",
      type: "array",
      itemFields: [
        {
          name: "degree",
          label: "Diplôme",
          type: "text",
          required: true,
        },
        {
          name: "institution",
          label: "Établissement",
          type: "text",
          required: true,
        },
        {
          name: "location",
          label: "Lieu",
          type: "text",
        },
        {
          name: "startDate",
          label: "Date de début",
          type: "date",
        },
        {
          name: "endDate",
          label: "Date de fin",
          type: "date",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
    {
      name: "abilities",
      label: "Compétences",
      type: "array",
      itemFields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          required: true,
        },
        {
          name: "level",
          label: "Niveau",
          type: "number",
          min: 1,
          max: 5,
        },
      ],
    },
    {
      name: "languages",
      label: "Langues",
      type: "array",
      itemFields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          required: true,
        },
        {
          name: "level",
          label: "Niveau",
          type: "text",
        },
      ],
    },
    {
      name: "certifications",
      label: "Certifications",
      type: "array",
      itemFields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          required: true,
        },
        {
          name: "institution",
          label: "Établissement",
          type: "text",
        },
        {
          name: "date",
          label: "Date",
          type: "date",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
        },
      ],
    },
    {
      name: "references",
      label: "Références",
      type: "array",
      itemFields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          required: true,
        },
        {
          name: "title",
          label: "Titre",
          type: "text",
        },
        {
          name: "company",
          label: "Entreprise",
          type: "text",
        },
        {
          name: "email",
          label: "Email",
          type: "email",
        },
        {
          name: "phone",
          label: "Téléphone",
          type: "tel",
        },
      ],
    },
    {
      name: "hobbies",
      label: "Loisirs",
      type: "array",
      itemFields: [
        {
          name: "name",
          label: "Nom",
          type: "text",
          required: true,
        },
      ],
    },
  ],
};

export default modern_fr;
