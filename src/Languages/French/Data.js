export const data = {
  registerAll: {
    head: 'Bienvenue',
    inputsPlaceholders: {
      name: 'Nom de l’entreprise',
      facebookLink: 'Lien de la page Facebook',
      email: 'Adresse mail',
      website: 'Votre site web',
      whatsapp: 'Contact Whatsapp',
      contact: 'Autres contacts',
    },
    submit: 'S’enregistrer',
    footer: {
      left: {
        text: 'J’ai déjà un compte. ',
        link: 'Connexion',
      },
      right: {
        text: 'Aller à l’',
        link: 'Accueuil',
      },
    },
  },
  register: {
    first: {
      title: '1. Creation de compte',
      form: {
        head: 'Bienvenue',
        inputsPlaceholders: {
          name: 'Nom de l’entreprise',
          email: 'Adresse mail',
          password: 'Mot de passe',
          password2: 'Confirmez le mot de passe',
        },
        submit: 'Enregistrer et continuer',
      },
    },
    second: {
      title: '2. Finalisation',
      form: {
        head: 'Presque...',
        inputsPlaceholders: {
          facebookLink: 'Lien de la page Facebook',
          website: 'Votre site web',
          whatsapp: 'Contact Whatsapp',
          contact: 'Autres contacts',
        },
        submit: "S'enregistrer",
      },
    },
    err: {
      name: [
        {
          code: 2,
          text: 'ce nom est deja pris',
        },
      ],
      facebookLink: [
        {
          code: 1,
          text: 'lien facebook invalide',
        },
        {
          code: 2,
          text: 'lien facebook deja pris',
        },
      ],
      email: [
        {
          code: 1,
          text: 'email invalide',
        },
        {
          code: 2,
          text: 'email deja pris',
        },
      ],
      website: [
        {
          code: 1,
          text: 'site web invalide',
        },
        {
          code: 2,
          text: 'site web deja pris',
        },
      ],
      whatsapp: [
        {
          code: 1,
          text: 'numero whatsapp invalide',
        },
        {
          code: 2,
          text: 'numero whatsapp deja pris',
        },
      ],
      contact: [
        {
          code: 1,
          text: 'numero de telephone invalide',
        },
        {
          code: 2,
          text: 'numero de telephone deja pris',
        },
      ],
      password: [
        {
          code: 1,
          text: 'mot de passe trop faible , il doit contenir au moins 8 caracteres',
        },
      ],
      password2: [
        {
          code: 1,
          text: 'pas de concordance !',
        },
      ],
    },
  },

  login: {
    form: {
      head: 'Salut, tu es là !',
      submit: 'Se connecter',
      footer: {
        left: {
          text: 'Pas de compte ? ',
          link: `S'enregister`,
        },
      },
    },
  },

  navBar: {
    links: [
      {
        text: 'Acceuil',
        url: '../',
      },
      {
        text: 'A propos',
        url: '../about',
      },
      {
        text: 'Services',
        url: '../service',
      },
    ],
    connexion: {
      text: 'Connexion',
      url: '../login',
    },
  },

  home: {
    first: {
      left: {
        main: `Grâce à notre système de diffusion et notre grande communauté d'échange sur <span class='bold-span' >WhatsApp</span> touchez plus de <span class='bold-span' >10 000</span> personnes avec vos annonces.`,
        button: {
          text: 'parcourir',
          link: '../',
        },
      },
      right: {
        head: 'Je <span>Diffuse</span> comme je veux !',
        peoples: [1, 5, 10, 15],
        form: {
          head: 'message a afficher',
          foot: {
            leftButton: {
              text: 'voir plus',
              link: '#',
            },
            rightButton: {
              text: 'Diffuser sur whatsapp',
              link: '#',
            },
          },
        },
      },
    },
    second: {
      left: {
        head: {
          left: ['La ', 'pièce '],
          right: ' manquante',
        },
        main: `Nous sommes une entreprise de <span>diffusion</span> mettant en relation les entreprises et le publique de façon direct via <span>WHATSAPP</span>. Elle a été fondée en <span>2020</span>, née d’une véritable passion pour la programmation et le développement web. En vue de faciliter l’interaction entre les grandes entreprise, les sociétés, les startups et le publique de façon directe, le PDG de PAP’SDIFF a créé un programme informatique. Ce dernier permet d’étendre la diffusion de messages WhatsApp à plus de 10 000 contacts. Ce qui facilitera l’interaction entre les entreprises et le publique consommateur en un clic et à grand échelle.
        `,
        button: 'Continuer la lecture...',
      },
    },
    third: {
      text: 'Réaliser des prestations de qualité dans la recherche constante de la satisfaction du client.',
      tags: ['#engagement', '#confiance', '#valeurs', '#objectif'],
    },
  },
};
