const workExerperienceData = [
    {
        company: 'Pionira',
        location: 'Remote/Zeebrugge',
        position: 'Angular/.NET Core Developer',
        startDate: '04/12/2020',
        endDate: null,
        temporary: false,
        consultancy: false,
        quit: false,
        outline: 'Full stack development in Angular, .NET Core and Xamarin for projects in the logistics sector.',
        responsibilities: `• Development and maintenance of multiple projects in Angular and .NET        
        • Setting up new microservices
        • Adding new functionality to an existing Xamarin app
        • Hosting projects in Azure
        • Agile development with Devops`,
        projects: `• Development of a visit registration app to send and confirm invitations.
        • Development of multiple microservices in .NET Core.`,
        skills: ['.NET', 'Angular', 'ASP.NET MVC', '.NET Core', 'Entity Framework', 'Dapper', 'SQL Server', 'Azure', 'TypeScript', 'Ngrx', 'Xamarin', 'Electron', 'Formly']
    },
    {
        company: 'Twikit',
        location: 'Antwerp',
        position: 'Angular/Nest.js Developer',
        startDate: '01/04/2019',
        endDate: '27/01/2020',
        temporary: false,
        consultancy: false,
        quit: false,
        outline: 'Full stack development in Angular, NestJs (nodejs) and Typescript for multiple projects related to 3D printing.',
        responsibilities: `• Development and maintenance of multiple projects in Angular and NestJS        
        • Analyzing new functionalities
        • Hosting docker containers in Amazon AWS`,
        projects: `• Setting up the communication between our ordering system and multiple 3d printing supplier APIs so our orders could get printed automatically.
        • Development of a material service so we could link our internal materials to 3d printing materials and finishes from suppliers.`,
        skills: ['Angular', 'NestJS (node.js)', 'NodeJS', 'MongoDB', 'Docker', 'Amazon AWS', 'TypeScript', 'Ngrx', 'Jest', 'UML Design']
    },
    {
        company: 'Geo-IT',
        location: 'Antwerp',
        position: 'Vue/.NET Developer',
        startDate: '01/03/2018',
        endDate: '30/04/2019',
        temporary: false,
        consultancy: false,
        quit: true,
        outline: 'Front end development in Vue of a new component of the map software of Geo-IT',
        responsibilities: `• Development of multiple projects in Vue and .NET Core
        • Selecting Vue components for the new application
        • Setting up the security (both authentication and authorization) of the applications with Identity Server 4`,
        projects: `• Creating a working prototype to present to the clients
        • Setup of new projects in Vue and .NET Core
        • Security with Identity Server`,
        skills: ['.NET', 'Vue', 'Vuex', '.NET Core', 'Identity Server', 'OpenLayers', 'Vuetify', 'MapGuide', 'PostgreSQL', 'Dapper', 'Entity Framework']
    },
    {
        company: 'ScriptBook',
        location: 'Antwerp',
        position: 'Python Developer',
        startDate: '01/11/2017',
        endDate: '28/02/2018',
        temporary: true,
        consultancy: false,
        outline: `Front- and backend development at a state-of-the-art datascience project about predicting the quality and financial forecast of a movie based on its script.`,
        responsibilities: `• Preparing the migration from AngularJS to Angular
        • Implementing new functionalities on the frontend 
        • Creating and extending rich D3.js diagrams
        • Backend development in Python`,
        projects: `• Refactoring of the annotation system which is used to analyse movie scripts
        • Development of numerous pages and their backend logic such as a page to position the movie script on a graph between other movies based on the predicted chance that it will receive an award.
        • The app is used by top tier movie productions companies in Hollywood`,
        skills: ['Python', 'Angular', 'D3.js', 'SQLAlchemy', 'MySQL']
    },
    {
        company: 'Nobel Biocare',
        location: 'Mechelen',
        position: '.NET Developer',
        startDate: '01/03/2016',
        endDate: '31/12/2016',
        temporary: true,
        consultancy: false,
        quit: false,
        outline: `Development according to the scrum guidelines of Puls, a licensing and versioning platform to support Nobel Biocare's dental solutions.
        I was also in charge of setting up a new project in Angular 2`,
        responsibilities: `• Implementing new functionality in an ASP.NET MVC project
        • Writing unit- and integration tests
        • Bugfixing`,
        projects: `• Setting up a new project in Angular 2`,
        skills: ['.NET', 'Angular', 'ASP.NET MVC', 'WPF', 'jQuery', 'nHibernate']
    },
    {
        company: 'Multiple interim projects via Accent Jobs',
        location: '',
        position: '.NET Developer',
        startDate: '01/09/2014',
        endDate: '30/06/2015',
        temporary: true,
        consultancy: true,
        quit: false,
        outline: `Development of projects for multiple clients in .NET via Accent Jobs
        Some of the clients were Kenze, BPM Software, iCUE Consulting and Farmad`,
        responsibilities: `• Development in different technological environments such as ASP.NET MVC 5, AngularJS and Winforms
        • Development of a working prototype
        • Refactoring of existing webpages with performance issues
        • Bugfixing`,
        projects: `• Farmad: Development of a prototype of their new application for the Farma 2014 expo
        • Kenze: Front end development in ASP.NET MVC for a project about parking spots
        • BPM Software: Development in AngularJS of a room rental application`,
        skills: ['.NET', 'AngularJS', 'ASP.NET MVC', 'WPF', 'jQuery', 'Entity Framework', 'Kendo-ui', 'Rest API', 'DevExpress Controls', 'DevExpress XPO', 'Firebird']
    },
    {
        company: 'Experteam',
        location: 'Antwerpen',
        position: '.NET Developer',
        startDate: '01/01/2013',
        endDate: '01/09/2014',
        temporary: false,
        consultancy: false,
        quit: false,
        outline: `Development in team of a fare and customer module in WPF and .NET 4.0 as part of the Mobiguider project for Prodata and De Lijn.`,
        responsibilities: `• Development in .NET and WPF
        • Writing unit-, acceptation- and UI tests in nUnit, Specflow and Gherkin
        • Creating technical analysis documentation`,
        projects: 'Mobiguider, a big project for Prodata and De Lijn',
        skills: ['.NET', 'WPF', 'nUnit', 'Oracle', 'SQL Server', 'UML Design', 'SpecFlow', 'Gherkin']
    },
    {
        company: 'Acerta',
        location: 'Wilrijk',
        position: '.NET Consultant',
        startDate: '01/11/2011',
        endDate: '01/08/2012',
        temporary: false,
        consultancy: true,
        quit: false,
        consultancyCompany: '3D-ICT',
        outline: `Development of ULNV application for Acerta as a consultant`,
        responsibilities: `• Development of ULNV application according to the scrum methodology in team of 6 developers and 2 testers.
        • New functionality is developed in C# (.NET 3.5) based on User Stories created by the analists
        • Writing Unit tests in MS Test, bugfixing and managing test data for the test team.`,
        projects: 'ULNV',
        skills: ['.NET', 'ASP.NET', 'Javascript', 'SQL Server', 'jQuery']
    },
    {
        company: 'Brainsolutions',
        location: 'Edegem',
        position: '.NET Developer',
        startDate: '01/02/2010',
        endDate: '01/07/2011',
        temporary: false,
        consultancy: true,
        quit: false,
        outline: `Development of multiple projects in .NET and Kentico CMS`,
        responsibilities: `• Development and maintenance of .NET projects.
        • Creating technical analysis for new projects.
        • Creating new websites with Kentico CMS`,
        projects: `• RentInParis
        • A project for 'De Orde van Franstalige Advocaten'`,
        skills: ['.NET', 'ASP.NET MVC', 'nHibernate', 'LINQ', 'jQuery', 'Visual Studio', 'SQL Server', 'Kentico CMS', 'Redgate SQL Compare', 'nUnit']
    },
    {
        company: 'NVSM',
        location: 'Brussels',
        position: '.NET Consultant',
        startDate: '01/05/2008',
        endDate: '30/11/2009',
        temporary: false,
        consultancy: true,
        quit: false,
        consultancyCompany: 'VDS Computing',
        outline: `.NET consultant for NVSM in Brussels via VDS Computing`,
        responsibilities: `• Developed different modules of SocioCultureel, a smart client application that allowed users to manage events, subscriptions to those events and payments.
        • Created prototypes to support the analyst.
        • Wrote technical documentation about the developed modules.
        • Bugfixing`,
        projects: `SocioCultureel`,
        skills: ['.NET', 'Winforms', 'Visual Studio']
    },
    {
        company: 'Marketing Map',
        location: 'Antwerp',
        position: '.NET Developer',
        startDate: '01/12/2006',
        endDate: '30/04/2008',
        temporary: false,
        consultancy: false,
        quit: true,
        outline: `.NET development on multiple smaller projects`,
        responsibilities: `Developed and maintained multiple .NET-projects that usually are focused around geographic data`,
        projects: `• a webservice to geocode addresses
        • a webservice to request NIS data from specific regions in Belgium
        • a project for De Post to find the best locations to open new stores.`,
        skills: ['.NET', 'ASP.NET', 'SQL Server']
    },
    {
        company: 'Vintage Productions',
        location: 'Antwerp',
        position: '.NET Developer',
        startDate: '01/09/2006',
        endDate: '30/11/2006',
        temporary: false,
        consultancy: false,
        quit: false,
        outline: `Development and maintenance of multiple projects`,
        responsibilities: `.NET Development and maintenance of multiple smaller projects`,
        projects: `• Close The Gap
        • Project for Honda`,
        skills: ['.NET', 'ASP.NET', 'Winforms', 'nHibernate']
    },
    {
        company: 'De Post',
        location: 'Brussels',
        position: 'Stress Tester',
        startDate: '01/02/2006',
        endDate: '30/06/2006',
        temporary: false,
        consultancy: true,
        quit: false,
        consultancyCompany: 'Alti',
        outline: `Stress testing with Mercury LoadRunner`,
        responsibilities: `• Performed stress Testing in Mercury LoadRunner for a renumeration application.
        • Bugfixing in VBScript
        • C# Development (rarely)`,
        projects: 'Remus',
        skills: ['Mercury Loadrunner', 'VBScript']
    },
    {
        company: 'Business Architects International',
        location: 'Mechelen',
        position: 'UML Designer',
        startDate: '01/02/2005',
        endDate: '31/10/2005',
        temporary: false,
        consultancy: true,
        quit: false,
        consultancyCompany: 'Brainbridge',
        outline: `UML Designer on a project for Rabobank`,
        responsibilities: `• UML Designer: designed a loan & insurance application for Rabobank in Rational Rose (UML).
        Cap Gemini was going to do the actual implementation based on our models.
        • Release Manager: I had the responsability of the last 3 releases.`,
        projects: `Rabobank`,
        skills: ['UML Design', 'Rational Rose', 'SourceSafe']
    },
    {
        company: 'Ferranti Computer Systems',
        location: 'Antwerp',
        position: 'Oracle Developer',
        startDate: '01/03/2003',
        endDate: '30/06/2004',
        temporary: true,
        consultancy: false,
        quit: false,
        outline: `Development in team of MECOMS, an application to support the liberalised energy market in Zeeland (NL).`,
        responsibilities: `• Import meter configuration changes on electricity and gas connections.
        • Technical Analysis
        • Data Migration
        • Creating reports in Oracle Reports
        • Testing`,
        projects: 'MECOMS',
        skills: ['Oracle', 'TOAD', 'PL/SQL']
    }
]

export default workExerperienceData